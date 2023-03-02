#lang racket

(require math/bigfloat rival)
(require "errors.rkt" "programs.rkt" "syntax/types.rkt" "sampling.rkt" "timeline.rkt")

(provide sample-points eval-prog-real)

(define (is-infinite-interval repr interval)
  (define <-bf (representation-bf->repr repr))
  (define ->bf (representation-repr->bf repr))
  ;; HACK: the comparisons to 0.bf is just about posits, where right now -inf.bf
  ;; rounds to the NaR value, which then represents +inf.bf, which is positive.
  (define (positive-inf? x)
    (parameterize ([bf-rounding-mode 'nearest])
      (and (bigfloat? x) (bf> x 0.bf) (bf= (->bf (<-bf x)) +inf.bf))))
  (define (negative-inf? x)
    (parameterize ([bf-rounding-mode 'nearest])
      (and (bigfloat? x) (bf< x 0.bf) (bf= (->bf (<-bf x)) -inf.bf))))
  (define ival-positive-infinite (monotonic->ival positive-inf?))
  (define ival-negative-infinite (comonotonic->ival negative-inf?))
  (ival-or (ival-positive-infinite interval)
           (ival-negative-infinite interval)))

(define (is-samplable-interval repr interval)
  (define <-bf (representation-bf->repr repr))
  (define (close-enough? lo hi)
    (let ([lo* (<-bf lo)] [hi* (<-bf hi)])
      (or (equal? lo* hi*) (and (number? lo*) (= lo* hi*)))))
  ((close-enough->ival close-enough?) interval))

(define ground-truth-require-convergence (make-parameter #t))

(define (valid-result? repr out)
  (ival-and (ival-not (is-infinite-interval repr out))
            (if (ground-truth-require-convergence)
                (is-samplable-interval repr out)
                (ival (ival-hi (is-samplable-interval repr out))))
            (ival-not (ival-error? out))))

;; Returns a function that maps an ival to a list of ivals
;; The first element of that function's output tells you if the input is good
;; The other elements of that function's output tell you the output values
(define (make-search-func precondition programs ctx)
  (define fns (batch-eval-progs (cons precondition programs) 'ival ctx))
  (λ inputs
    (match-define (list ival-pre ival-bodies ...) (vector->list (apply fns inputs)))
    (cons (apply ival-and ival-pre (map (curry valid-result? (context-repr ctx)) ival-bodies))
          ival-bodies)))

(define (eval-prog-real prog ctx)
  (define repr (context-repr ctx))
  (define pre `(λ ,(program-variables prog) (TRUE)))
  (define fn (make-search-func pre (list prog) ctx))
  (define (f . pt)
    (define-values (result prec exs) (ival-eval fn pt))
    (match exs
      [(list (ival lo hi))
       ((representation-bf->repr repr) lo)]
      [(? nan?)
       +nan.0]))
  (procedure-rename f '<eval-prog-real>))

(define (sample-points precondition progs ctx)
  (timeline-event! 'analyze)
  (define fn (make-search-func precondition progs ctx))
  (define sampler 
    (parameterize ([ground-truth-require-convergence #f])
      (make-sampler ctx precondition progs fn)))
  (timeline-event! 'sample)
  (batch-prepare-points fn ctx sampler))
