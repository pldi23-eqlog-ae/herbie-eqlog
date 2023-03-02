#lang racket

(require math/bigfloat rival)
(require "syntax/syntax.rkt" "syntax/types.rkt" "timeline.rkt" "float.rkt" "errors.rkt")

(provide (all-from-out "syntax/syntax.rkt")
         program-body program-variables
         expr? expr-supports? expr-contains?
         type-of repr-of
         location-do location-get
         batch-eval-progs eval-prog eval-application
         free-variables replace-expression replace-vars
         apply-repr-change)

(module+ test
  (require rackunit "load-plugin.rkt")
  (load-herbie-plugins))

(define expr? (or/c list? symbol? boolean? real?))

;; Programs are just lambda expressions

(define/contract (program-body prog)
  (-> expr? expr?)
  (match-define (list (or 'lambda 'λ 'FPCore) (list vars ...) body) prog)
  body)

(define/contract (program-variables prog)
  (-> expr? (listof symbol?))
  (match-define (list (or 'lambda 'λ 'FPCore) (list vars ...) body) prog)
  vars)

;; Returns type name
;; Fast version does not recurse into functions applications
(define (type-of expr ctx)
  (match expr
   [(? number?) 'real]
   [(? variable?) (representation-type (context-lookup ctx expr))]
   [(list 'if cond ift iff) (type-of ift ctx)]
   [(list op args ...) (representation-type (operator-info op 'otype))]))

;; Returns repr name
;; Fast version does not recurse into functions applications
(define (repr-of expr ctx)
  (match expr
   [(? number?) (context-repr ctx)]
   [(? variable?) (context-lookup ctx expr)]
   [(list 'if cond ift iff) (repr-of ift ctx)]
   [(list op args ...) (operator-info op 'otype)]))

(define (expr-supports? expr field)
  (let loop ([expr expr])
    (match expr
      [(list 'if cond ift iff)
       (and (loop cond) (loop ift) (loop iff))]   ; if is special-cased and always supported
      [(list op args ...)
       (and (operator-info op field) (andmap loop args))]
      [(? variable?) true]
      [(? number?) true])))

(define (expr-contains? expr pred)
  (let loop ([expr expr])
    (match expr
     [(list elems ...) (ormap loop elems)]
     [term (pred term)])))

;; Converting constants

(define (free-variables prog)
  (match prog
    [(? number?) '()]
    [(? variable?) (list prog)]
    [`(,op ,args ...)
     (remove-duplicates (append-map free-variables args))]))

(define (replace-vars dict expr)
  (cond
    [(dict-has-key? dict expr) (dict-ref dict expr)]
    [(list? expr)
     (cons (replace-vars dict (car expr)) (map (curry replace-vars dict) (cdr expr)))]
    [#t expr]))

(define location? (listof natural-number/c))

(define/contract (location-do loc prog f)
  (-> location? expr? (-> expr? expr?) expr?)
  (cond
   [(null? loc)
    (f prog)]
   [(not (pair? prog))
    (error "Bad location: cannot enter " prog "any further.")]
   [#t
    ; Inlined loop for speed
    (let loop ([idx (car loc)] [lst prog])
      (if (= idx 0)
          (cons (location-do (cdr loc) (car lst) f) (cdr lst))
          (cons (car lst) (loop (- idx 1) (cdr lst)))))]))

(define/contract (location-get loc prog)
  (-> location? expr? expr?)
  ; Clever continuation usage to early-return
  (let/ec return
    (location-do loc prog return)))

(define (eval-prog prog mode ctx)
  (define f (batch-eval-progs (list prog) mode ctx))
  (λ args (vector-ref (apply f args) 0)))

(define (batch-eval-progs progs mode ctx)
  (define repr (context-repr ctx))
  (define vars (context-vars ctx))
  (define var-reprs (context-var-reprs ctx))

  (define real->precision
    (match mode
     ['fl (λ (x repr) (real->repr x repr))]
     ['bf (λ (x repr) (bf x))]
     ['ival (λ (x repr) (ival (bf x)))]))

  (define arg->precision
    (match mode
     ['fl (λ (x repr) x)]
     ['bf (λ (x repr) (if (bigfloat? x) x ((representation-repr->bf repr) x)))]
     ['ival (λ (x repr) (if (ival? x) x (ival ((representation-repr->bf repr) x))))]))

  ;; Expression cache
  (define exprs '())
  (define exprhash
    (make-hash
     (for/list ([var vars] [i (in-naturals)])
       (cons var i))))

  ; Counts
  (define size 0)
  (define exprc 0)
  (define varc (length vars))

  ;; Known representations
  (define bool-repr (get-representation 'bool))

  ;; 'if' operator
  (define if-op
    (match mode
     [(or 'fl 'bf) (λ (c ift iff) (if c ift iff))]
     ['ival ival-if]))

  (define (munge prog repr)
    (set! size (+ 1 size))
    (define expr
      (match prog
       [(? number?) (list (const (real->precision prog repr)))]
       [(? variable?) prog]
       [`(if ,c ,t ,f)
        (list if-op
              (munge c bool-repr)
              (munge t repr)
              (munge f repr))]
       [(list op args ...)
        (define fn (operator-info op mode))
        (define atypes (operator-info op 'itype))
        (cons fn (map munge args atypes))]
       [_ (raise-argument-error 'eval-prog "Not a valid expression!" prog)]))
    (hash-ref! exprhash expr
              (λ ()
                (begin0 (+ exprc varc) ; store in cache, update exprs, exprc
                  (set! exprc (+ 1 exprc))
                  (set! exprs (cons expr exprs))))))

  (define names
    (for/list ([prog progs])
      (munge (program-body prog) repr)))
  (define lt (+ exprc varc))

  (timeline-push! 'compiler (+ varc size) lt)
  (define exprvec (list->vector (reverse exprs)))
  (define (f . args)
    (define v (make-vector lt))
    (for ([arg (in-list args)] [n (in-naturals)] [repr (in-list var-reprs)])
      (vector-set! v n (arg->precision arg repr)))
    (for ([expr (in-vector exprvec)] [n (in-naturals varc)])
      (define tl
        (for/list ([arg (in-list (cdr expr))])
          (vector-ref v arg)))
      (vector-set! v n (apply (car expr) tl)))
    (for/vector ([n (in-list names)])
      (vector-ref v n)))
  (procedure-rename f (string->symbol (format "<eval-prog-~a>" mode))))

(module+ test
  (define ctx (make-debug-context '(a b c)))
  (define tests
    #hash([(λ (a b c) (/.f64 (-.f64 (sqrt.f64 (-.f64 (*.f64 b b) (*.f64 a c))) b) a))
           . (-1.918792216976527e-259 8.469572834134629e-97 -7.41524568576933e-282)
           ])) ;(2.4174342574957107e-18 -1.4150052601637869e-40 -1.1686799408259549e+57)

  (define-simple-check (check-in-interval? iv pt)
    (match-define (ival lo hi) iv)
    (and (bf<= lo pt) (bf<= pt hi)))

  (for ([(e p) (in-hash tests)])
    (parameterize ([bf-precision 4000])
      (define iv (apply (eval-prog e 'ival ctx) p))
      (define val (apply (eval-prog e 'bf ctx) p))
      (check-in-interval? iv val))))

;; This is a transcription of egg-herbie/src/math.rs, lines 97-149
(define (eval-application op . args)
  (define exact-value? (conjoin number? exact?))
  (match (cons op args)
    [(list '+ (? exact-value? as) ...) (apply + as)]
    [(list '- (? exact-value? as) ...) (apply - as)]
    [(list '* (? exact-value? as) ...) (apply * as)]
    [(list '/ (? exact-value? num) (? exact-value? den))
     (and (not (zero? den)) (/ num den))]
    [(list 'neg (? exact-value? arg)) (- arg)]
    [(list 'pow  (? exact-value? a) (? exact-value? b))
     (cond [(and (zero? b) (not (zero? a))) 1]
           [(and (zero? a) (positive? b)) 0]
           [(and (not (zero? a)) (integer? b)) (expt a b)]
           [else #f])]
    [(list 'sqrt (? exact-value? a))
     (let ([s1 (sqrt (numerator a))] [s2 (sqrt (denominator a))])
       (and
        (real? s1) (real? s2)
        (exact? s1) (exact? s2)
        (/ s1 s2)))]
    [(list 'cbrt (? exact-value? a))
     (define inexact-num (inexact->exact (expt (numerator a) 1/3)))
     (define inexact-den (inexact->exact (expt (denominator a) 1/3)))
     (and (real? inexact-num) (real? inexact-den)
          (= (expt inexact-num 3) (numerator a))
          (= (expt inexact-den 3) (denominator a))
          (/ inexact-num inexact-den))]
    [(list 'fabs (? exact-value? a)) (abs a)]
    [(list 'floor (? exact-value? a)) (floor a)]
    [(list 'ceil (? exact-value? a)) (ceiling a)]
    [(list 'round (? exact-value? a)) (round a)]
    ;; Added
    [(list 'exp 0) 1]
    [(list 'log 1) 0]
    [_ #f]))

(module+ test
  (check-equal? (eval-application '+ 1 1) 2)
  (check-equal? (eval-application '+) 0)
  (check-equal? (eval-application '/ 1 0) #f) ; Not valid
  (check-equal? (eval-application 'cbrt 1) 1)
  (check-equal? (eval-application 'log 1) 0)
  (check-equal? (eval-application 'exp 2) #f)) ; Not exact

(define/contract (replace-expression haystack needle needle*)
  (-> expr? expr? expr? expr?)
  (match haystack
   [(== needle) needle*]
   [(list (or 'lambda 'λ) (list vars ...) body)
    `(λ ,vars ,(replace-expression body needle needle*))]
   [(list op args ...)
    (cons op (map (curryr replace-expression needle needle*) args))]
   [x x]))

(module+ test
  (check-equal? (replace-expression '(λ (x) (- x (sin x))) 'x 1)
                '(λ (x) (- 1 (sin 1))))

  (check-equal?
   (replace-expression
    '(/ (cos (* 2 x)) (* (pow cos 2) (* (fabs (* sin x)) (fabs (* sin x)))))
    'cos
    '(/ 1 cos))
   '(/ (cos (* 2 x)) (* (pow (/ 1 cos) 2) (* (fabs (* sin x)) (fabs (* sin x)))))))

; Updates the repr of an expression if needed
(define (apply-repr-change-expr expr ctx)
  (let loop ([expr expr] [repr #f])
    (match expr
     [(list (? repr-conv? op) body)
      (define irepr (first (operator-info op 'itype)))
      (define orepr (operator-info op 'otype))
      (define repr* (or repr orepr))
      (define body* (loop body irepr))
      (cond
       [(not body*) #f] ; propagate failed repr-change
       [else
        (define new-conv (get-repr-conv irepr repr*)) ; try to find a single conversion
        (if new-conv
            (list new-conv body*)
            (let ([second-conv (get-repr-conv orepr repr*)]) ; try a two-step conversion
              (and second-conv (list second-conv (list op body*)))))])]
     [(list (? rewrite-repr-op? rr) (list (? repr-conv? op) body))  ; repr change on a conversion
      (define irepr (first (operator-info op 'itype)))
      (define repr* (operator-info rr 'otype))
      (if (equal? repr* irepr)
          (if repr
              (loop body irepr) ; if the conversions are inverses and not the top
              (list op (loop body irepr)))
          (if repr
              (loop (list op body) repr*)
              (let* ([conv (get-repr-conv repr* (context-repr ctx))]
                     [body* (loop body repr*)])
                (and conv body* (list conv body*)))))]
     [(list (? rewrite-repr-op? op) body)
      (define irepr (operator-info op 'otype))
      (define orepr (or repr (context-repr ctx)))
      (cond
       [(equal? irepr orepr)
        (loop body irepr)]
       [else
        (define conv (get-repr-conv irepr orepr))
        (define body* (loop body irepr))
        (and conv body* (list conv body*))])]
     [(list 'if con ift iff)
      (define repr* (or repr (context-repr ctx)))
      (define con*
        (let loop2 ([con con])
          (cond
           [(set-member? '((TRUE) (FALSE)) con)
            con]
           [else
            (match-define (list op args ...) con)
            (define args*
              (for/list ([arg args] [atype (operator-info op 'itype)])
                (if (equal? (representation-type atype) 'bool)
                    (loop2 arg)
                    (loop arg atype))))
            (cons op args*)])))
      (define ift* (loop ift repr*))
      (define iff* (loop iff repr*))
      (and ift* iff* `(if ,con* ,ift* ,iff*))]
     [(list (? operator? op) args ...) 
      (define orepr (operator-info op 'otype))
      (define repr* (or repr orepr))
      (if (equal? orepr repr*)
          (let ([args* (map loop args (operator-info op 'itype))])
            (and (andmap identity args*) (cons op args*)))
          (with-handlers ([exn:fail:user:herbie:missing? (const #f)])
            (let ([op* (apply get-parametric-operator
                            (impl->operator op)
                            (make-list (length args) repr*))]
                  [args* (map (curryr loop repr*) args)])
            (and (andmap identity args*) (cons op* args*)))))]
     [(? variable?)
      (define var-repr (context-lookup ctx expr))
      (cond
       [(equal? var-repr repr) expr]
       [else ; insert a cast if the variable precision is not the same
        (define cast (get-repr-conv var-repr repr))
        (and cast (list cast expr))])]
     [_ expr])))

(define (apply-repr-change prog ctx)
  (match prog
   [(list 'FPCore (list vars ...) body) `(FPCore ,vars ,(apply-repr-change-expr body ctx))]
   [(list (or 'λ 'lambda) (list vars ...) body) `(λ ,vars ,(apply-repr-change-expr body ctx))]
   [_ (apply-repr-change-expr prog ctx)]))
