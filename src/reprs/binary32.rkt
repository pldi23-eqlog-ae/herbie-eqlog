#lang racket

;; Builtin single-precision plugin (:precision binary32)

(require math/flonum math/bigfloat racket/flonum)
(require "../plugin.rkt" "bool.rkt" "binary64.rkt")

(module+ test (require rackunit))

; Racket CS made single-flonums a little confusing
; All single-precision code is here to make things easier

;;;;;;;;;;;;;;;;;;;;;;;;;;;;; float32 library ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(define float32? flonum?)

(define (->float32 x)
  (flsingle (exact->inexact x)))

(define (float32->bit-field x)
  (integer-bytes->integer (real->floating-point-bytes x 4) #f #f))

(define (float32->ordinal x)
  (if (negative? x)
      (- (float32->bit-field (- x)))
      (float32->bit-field (abs x))))

(define (bit-field->float32 x)
  (->float32 (floating-point-bytes->real (integer->integer-bytes x 4 #f #f) #f)))

(define (ordinal->float32 x)
  (if (negative? x)
      (- (bit-field->float32 (- x)))
      (bit-field->float32 x)))

(define (float32-step x n)
  (ordinal->float32 (+ (float32->ordinal x) n)))

(define (bigfloat->float32 x)
  (define loprec (parameterize ([bf-precision 24]) (bf+ 0.bf x)))
  (define y (->float32 (bigfloat->flonum loprec)))
  (define x2 (bf y))
  (match (bf-rounding-mode)
   ['nearest y]
   ['up     (if (bf< x2 x) (float32-step y 1) y)]
   ['down   (if (bf> x2 x) (float32-step y -1) y)]
   ['zero   (if (bf< x 0.bf)
                (if (bf< x2 x) (float32-step y 1) y)
                (if (bf> x2 x) (float32-step y -1) y))]))

(define-syntax-rule (float32-fun name op)
  (define name (compose ->float32 op)))

(define-syntax-rule (float32-funs [name op] ...)
  (begin (float32-fun name op) ...))

(float32-funs
  [fl32+  +]
  [fl32-  -]
  [fl32*  *]
  [fl32/  /])
    
(module+ test
  (check-equal? (fl32+ 1.0 2.0) (->float32 3.0))
  (check-equal? (fl32- 1.0 2.0) (->float32 -1.0))
  (check-equal? (fl32* 1.0 2.0) (->float32 2.0))
  (check-equal? (fl32/ 1.0 2.0) (->float32 0.5)))

; for define-libm-operator (must be top-level)
(require ffi/unsafe)

; (eprintf "Loading binary32 support...\n")

(define (shift bits fn)
  (define shift-val (expt 2 bits))
  (λ (x) (fn (- x shift-val))))

(define (unshift bits fn)
  (define shift-val (expt 2 bits))
  (λ (x) (+ (fn x) shift-val)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;; representation ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(define-representation (binary32 real float32?)
  bigfloat->float32
  bf
  (shift 31 ordinal->float32)
  (unshift 31 float32->ordinal)
  32
  (disjoin nan? infinite?))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;; constants ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(define-operator-impl (PI PI.f32) binary32
  [fl (const (->float32 pi))])

(define-operator-impl (E E.f32) binary32
  [fl (const (->float32 (exp 1.0)))])

(define-operator-impl (INFINITY INFINITY.f32) binary32
  [fl (const (->float32 +inf.0))])

(define-operator-impl (NAN NAN.f32) binary32
  [fl (const (->float32 +nan.0))])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;; operators ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(define-syntax (define-libm-operator stx)
  (syntax-case stx (real)
    [(_ (op real ...) [key value] ...)
     (let* ([num-args (length (cdr (syntax-e (cadr (syntax-e stx)))))]
            [sym2-append (λ (x y) (string->symbol (string-append (symbol->string x) (symbol->string y))))]
            [name (sym2-append (syntax-e (car (syntax-e (cadr (syntax-e stx))))) '.f32)]
            [cname (sym2-append (syntax-e (car (syntax-e (cadr (syntax-e stx))))) 'f)])
       #`(begin
           (define fl-proc
            (get-ffi-obj '#,cname #f (_fun #,@(build-list num-args (λ (_) #'_float)) -> _float)
                         (λ () #f)))
           (when fl-proc
            (define-operator-impl (op #,name #,@(build-list num-args (λ (_) #'binary32))) binary32
              [fl fl-proc] [key value] ...))))]))

(define-syntax-rule (define-1ary-libm-operator op)
  (define-libm-operator (op real)))

(define-syntax-rule (define-2ary-libm-operator op)
  (define-libm-operator (op real real)))

(define-syntax-rule (define-1ary-libm-operators op ...)
  (begin (define-1ary-libm-operator op) ...))

(define-syntax-rule (define-2ary-libm-operators op ...)
  (begin (define-2ary-libm-operator op) ...))

(define (from-bigfloat bff)
  (λ args (bigfloat->flonum (apply bff (map bf args)))))

(define (bffmod x mod)
  (bf- x (bf* (bftruncate (bf/ x mod)) mod)))

(define (bffma x y z)
  (bf+ (bf* x y) z))


(define-operator-impl (neg neg.f32 binary32) binary32 [fl fl32-])
(define-operator-impl (+ +.f32 binary32 binary32) binary32 [fl fl32+])
(define-operator-impl (- -.f32 binary32 binary32) binary32 [fl fl32-])
(define-operator-impl (* *.f32 binary32 binary32) binary32 [fl fl32*])
(define-operator-impl (/ /.f32 binary32 binary32) binary32 [fl fl32/])

(define-1ary-libm-operators
 acos
 acosh
 asin
 asinh
 atan
 atanh
 cbrt
 ceil
 cos
 cosh
 erf
 erfc
 exp
 exp2
 expm1
 fabs
 floor
 lgamma
 log
 log10
 log1p
 log2
 logb
 rint
 round
 sin
 sinh
 sqrt
 tan
 tanh
 tgamma
 trunc)

(define-2ary-libm-operators
 atan2
 copysign
 fdim
 fmax
 fmin
 fmod
 hypot
 pow
 remainder)

(define-libm-operator (fma real real real))

(define-operator-impl (== ==.f32 binary32 binary32) bool
  [fl =])

(define-operator-impl (!= !=.f32 binary32 binary32) bool
  [fl (negate =)])

(define-operator-impl (< <.f32 binary32 binary32) bool
  [fl <])

(define-operator-impl (> >.f32 binary32 binary32) bool
  [fl >])

(define-operator-impl (<= <=.f32 binary32 binary32) bool
  [fl <=])

(define-operator-impl (>= >=.f32 binary32 binary32) bool
  [fl >=])

(define-operator-impl (cast binary64->binary32 binary64) binary32
  [fl (curryr ->float32)])

(define-operator-impl (cast binary32->binary64 binary32) binary64
  [fl identity])
