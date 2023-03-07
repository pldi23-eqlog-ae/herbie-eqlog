#lang racket

(require ffi/unsafe
         ffi/unsafe/define
         racket/runtime-path)

(provide egraph_create egraph_destroy egraph_add_expr
         egraph_add_expr_eqlog
         egraph_run egraph_run_with_iter_limit
         egraph_get_stop_reason
         egraph_get_simplest egraph_get_variants
         eqlog_get_variants
         _EGraphIter destroy_egraphiters egraph_get_cost
         egraph_is_unsound_detected egraph_get_times_applied
         egraph_get_proof destroy_string
         egraph_run_eqlog eqlog_get_simplest
         (struct-out EGraphIter)
         (struct-out FFIRule))

(define-runtime-path libeggmath-path
  (build-path "target/release"
              (string-append
                (case (system-type)
                 [(windows) "egg_math"]
                 [else "libegg_math"])
                (bytes->string/utf-8 (system-type 'so-suffix)))))

(define-ffi-definer define-eggmath (ffi-lib libeggmath-path))

(define _egraph-pointer (_cpointer 'egraph))

(define-cstruct _EGraphIter
  ([numnodes _uint]
   [numeclasses _uint]
   [time _double]))

(define-cstruct _FFIRule ; The pointers are pointers to strings, but types hidden for allocation
  ([name _pointer]
   [left _pointer]
   [right _pointer])
  #:malloc-mode 'raw)


;;  -> a pointer to an egraph
(define-eggmath egraph_create (_fun -> _egraph-pointer))

(define-eggmath egraph_destroy (_fun _egraph-pointer -> _void))

(define-eggmath destroy_string (_fun _pointer -> _void))

;; egraph pointer, s-expr string -> node number
(define-eggmath egraph_add_expr (_fun _egraph-pointer _string/utf-8 -> _uint))

(define-eggmath egraph_add_expr_eqlog (_fun _egraph-pointer _string/utf-8 -> _uint))

(define-eggmath destroy_egraphiters (_fun _uint _EGraphIter-pointer -> _void))

(define-eggmath egraph_is_unsound_detected (_fun _egraph-pointer -> _bool))

(define-eggmath egraph_run_with_iter_limit
  (_fun _egraph-pointer                           ;; egraph
        (len : (_ptr o _uint))                    ;; pointer to size of resulting array
        _uint                                     ;; iter limit
        _uint                                     ;; node limit
        (ffi-rules : (_list i _FFIRule-pointer))  ;; ffi rules
        _bool                                     ;; constant folding enabled?
        (_uint = (length ffi-rules))              ;; number of rules
        -> (iters : _EGraphIter-pointer)
        -> (values iters len)))

(define-eggmath egraph_run
  (_fun _egraph-pointer                           ;; egraph
        (len : (_ptr o _uint))                    ;; pointer to size of resulting array
        _uint                                     ;; node limit
        (ffi-rules : (_list i _FFIRule-pointer))  ;; ffi rules
        _bool                                     ;; constant folding enabled?
        (_uint = (length ffi-rules))              ;; number of rules
        -> (iters : _EGraphIter-pointer)
        -> (values iters len)))

(define-eggmath egraph_run_eqlog
  (_fun _egraph-pointer                           ;; egraph
        (len : (_ptr o _uint))                    ;; pointer to size of resulting array
        -> (iters : _EGraphIter-pointer)
        -> (values iters len)))


;; gets the stop reason as an integer
(define-eggmath egraph_get_stop_reason (_fun _egraph-pointer -> _uint))

;; node number -> s-expr string
(define-eggmath egraph_get_simplest (_fun _egraph-pointer
                                         _uint ;; node id
                                         _uint ;; iteration
                                         -> _pointer))

(define-eggmath eqlog_get_simplest (_fun _egraph-pointer
                                          _uint ;; node id
                                          -> _pointer))

(define-eggmath egraph_get_proof (_fun _egraph-pointer
                                       _string/utf-8
                                       _string/utf-8
                                       -> _pointer))

;; node number -> (s-expr string) string
(define-eggmath egraph_get_variants (_fun _egraph-pointer
                                          _uint           ;; node id
                                          _string/utf-8   ;; original expr
                                          -> _pointer))   ;; string pointer

(define-eggmath eqlog_get_variants
  (_fun _egraph-pointer
        _uint ;; node id
        _string/utf-8 ;; original expr
        -> _pointer)) ;; string pointer

(define-eggmath egraph_get_cost (_fun _egraph-pointer
                                      _uint ;; node id
                                      _uint ;; iteration
                                      -> _uint))

(define-eggmath egraph_get_times_applied (_fun _egraph-pointer
                                               _pointer ;; name of the rule
                                               -> _uint))

