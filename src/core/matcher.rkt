#lang racket

(require egg-herbie)
(require "../common.rkt" "../programs.rkt" "../alternative.rkt"
         "../syntax/rules.rkt" "../syntax/types.rkt" "../timeline.rkt" "simplify.rkt" "../config.rkt")

(provide pattern-match rewrite-expressions change-apply)

;;; Our own pattern matcher.
;;
;; The racket (match) macro doesn't give us access to the bindings made
;; by the matcher, so we wrote our own.
;;
;; The syntax is simple:
;;   numbers are literals ; symbols are variables ; lists are expressions
;;
;; Bindings are stored as association lists

(define (merge-bindings binding1 binding2)
  (and binding1
       binding2
       (let/ec quit
         (for/fold ([binding binding1]) ([(k v) (in-dict binding2)])
           (dict-update binding k (λ (x) (if (equal? x v) v (quit #f))) v)))))

(define (pattern-match pattern expr)
  (match pattern
   [(? number?)
    (and (equal? pattern expr) '())]
   [(? variable?)
    (list (cons pattern expr))]
   [(list phead _ ...)
    (and (list? expr)
         (equal? (car expr) phead)
         (= (length expr) (length pattern))
         (for/fold ([bindings '()])
             ([pat (cdr pattern)] [subterm (cdr expr)])
           (merge-bindings bindings (pattern-match pat subterm))))]))

(define (pattern-substitute pattern bindings)
  ; pattern binding -> expr
  (match pattern
   [(? number?) pattern]
   [(? variable?)
    (dict-ref bindings pattern)]
   [(list phead pargs ...)
    (cons phead (map (curryr pattern-substitute bindings) pargs))]))

;; Random helper functions

(define (rule-apply rule expr)
  (let ([bindings (pattern-match (rule-input rule) expr)])
    (if bindings
        (cons (pattern-substitute (rule-output rule) bindings) bindings)
        #f)))

(define (change-apply cng prog)
  (match-define (change rule location bindings) cng)
  (location-do location prog (const (pattern-substitute (rule-output rule) bindings))))

;;
;;  Non-recursive rewriter
;;

(define (rewrite-once expr ctx #:rules rules #:root [root-loc '()])
  (define expr-repr (repr-of expr ctx))
  (reap [sow]
    (for ([rule rules] #:when (equal? expr-repr (rule-otype rule)))
      (let* ([result (rule-apply rule expr)])
        (when result
          (sow (list (change rule root-loc (cdr
                                            result)))))))))
;;
;;  Egg recursive rewriter
;;
;; Fallback system
;;  batch-egg-rewrite - batched call to egg
;;  egg-rewrite - call to egg on an expression (skipped if batch-egg-rewrite called with 1 expr)
;;  egg-rewrite-iter-limit - call to egg on an expression with an iter limit (last resort)
;;

(define (batch-egg-rewrite exprs
                           ctx
                           #:rules rules
                           #:roots [root-locs (make-list (length exprs) '())]
                           #:depths [depths (make-list (length exprs) 1)])

  (define reprs (map (λ (e) (repr-of e ctx)) exprs))
  (define irules (rules->irules rules))
  ; If unsoundness was detected, try running one epxression at a time.
  ; Can optionally set iter limit (will give up if unsoundness detected).
  (let loop ([exprs exprs] [root-locs root-locs] [iter-limit #f])
    ; Returns a procedure rather than the variants directly:
    ; if we need to fallback, we exit the `with-egraph` closure first
    ; so the existing egraph gets cleaned up
    (define result-thunk
      (with-egraph
        (λ (egg-graph)
          (define node-ids
            (map (curry
                  (if (flag-set? 'generate 'eqlog)
                      egraph-add-expr-eqlog
                      egraph-add-expr) egg-graph) exprs))
          (define iter-data
            (if (flag-set? 'generate 'eqlog)
                (eqlog-run egg-graph)
                (egg-run-rules egg-graph #:limit iter-limit (*node-limit*) irules node-ids #t)))

          #;(for ([rule rules])
            (define count (egraph-get-times-applied egg-graph (rule-name rule)))
            (when (> count 0) (timeline-push! 'rules (~a (rule-name rule)) count)))
          (cond
            [(and (not (flag-set? 'generate 'eqlog)) (egraph-is-unsound-detected egg-graph))
            ; unsoundness detected, fallback
            (match* (exprs iter-limit)
              [((list (? list?) (? list?) (? list?) ...) #f)     ; run expressions individually
              (λ ()
                (for/list ([expr exprs] [root-loc root-locs])
                  (timeline-push! 'method "egg-rewrite")
                  (car (loop (list expr) (list root-loc) #f))))]
              [((list (? list?)) #f)                             ; run expressions with iter limit
              (λ ()
                (let ([limit (- (length iter-data) 2)])
                  (timeline-push! 'method "egg-rewrite-iter-limit")
                  (loop exprs root-locs limit)))]
              [(_ (? number?))                                   ; give up
              (timeline-push! 'method "egg-rewrite-fail")
              (λ () '(()))])]
           [else
            (define variants
              (for/list ([id node-ids] [expr exprs] [root-loc root-locs] [expr-repr reprs])
                (define egg-rule (rule "egg-rr" 'x 'x (list expr-repr) expr-repr))
                (define output 
                  ((if (flag-set? 'generate 'eqlog)
                      eqlog-get-variants egraph-get-variants)
                    egg-graph id expr))
                (define extracted (egg-exprs->exprs output egg-graph))
                (for/list ([variant (remove-duplicates extracted)])
                  (list (change egg-rule root-loc (list (cons 'x variant)))))))
            (λ () variants)]))))
    (result-thunk)))

;;  Recursive rewrite chooser
(define (rewrite-expressions exprs
                             ctx
                             #:rules rules
                             #:roots [root-locs (make-list (length exprs) '())]
                             #:depths [depths (make-list (length exprs) 1)]
                             #:once? [once? #f])
  ; choose correct rr driver
  (cond
   [(or (null? exprs) (null? rules)) (make-list (length exprs) '())]
   [(or once? (not (flag-set? 'generate 'rr)))
    (timeline-push! 'method "rewrite-once")
    (for/list ([expr exprs] [root-loc root-locs] [n (in-naturals 1)])
      (define timeline-stop! (timeline-start! 'times (~a expr)))
      (begin0 (rewrite-once expr ctx #:rules rules #:root root-loc)
        (timeline-stop!)))]
   [else
    (timeline-push! 'method "batch-egg-rewrite")
    (timeline-push! 'inputs (map ~a exprs))
    (define out (batch-egg-rewrite exprs ctx #:rules rules #:roots root-locs #:depths depths))
    (timeline-push! 'outputs (map ~a out))
    out]))
