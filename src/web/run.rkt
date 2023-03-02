#lang racket

(require json)
(require "../common.rkt" "../syntax/read.rkt" "../syntax/sugar.rkt" "../datafile.rkt"
         "../syntax/types.rkt" "../profile.rkt" "../timeline.rkt" "../sampling.rkt"
         "make-report.rkt" "thread-pool.rkt" "timeline.rkt")

(provide make-report rerun-report replot-report diff-report)

(define (extract-test row)
  (define vars (table-row-vars row))
  (define repr (get-representation (table-row-precision row)))
  (define var-reprs (map (curryr cons repr) vars))
  (define ctx (context vars repr (map (const repr) vars)))
  (test (table-row-name row)
        (table-row-identifier row)
        (table-row-vars row)
        (desugar-program (table-row-input row) ctx)
        (desugar-program (table-row-output row) ctx)
        (table-row-target-prog row) 
        (desugar-program (table-row-spec row) ctx)
        (desugar-program (table-row-pre row) ctx)
        (table-row-preprocess row)
        (representation-name repr)
        (for/list ([(k v) (in-dict var-reprs)]) (cons k (representation-name v)))
        (table-row-conversions row)))
  
(define (make-report bench-dirs #:dir dir #:note note #:threads threads)
  (define tests (reverse (sort (append-map load-tests bench-dirs) test<?)))
  (run-tests tests #:dir dir #:note note #:threads threads))

(define (rerun-report json-file #:dir dir #:note note #:threads threads)
  (define data (read-datafile json-file))
  (define tests (map extract-test (report-info-tests data)))
  (*flags* (report-info-flags data))
  (set-seed! (report-info-seed data))
  (*num-points* (report-info-points data))
  (*num-iterations* (report-info-iterations data))
  (run-tests tests #:dir dir #:note note #:threads threads))

(define (replot-report json-file #:dir dir)
  (local-require "../points.rkt" "../sandbox.rkt" "../alternative.rkt"
                 "../ground-truth.rkt" "pages.rkt" "../timeline.rkt")

  (define data (read-datafile json-file))
  ;; This must create a `test-success` object with the following fields set to something real:
  ;; test; end-alt; newpoints; start-error; target-error; end-error
  (*flags* (report-info-flags data))
  (set-seed! (report-info-seed data))
  (*num-points* (report-info-points data))
  (*num-iterations* (report-info-iterations data))

  (define (get-p&es context)
    (for/lists (pts exs)
        ([(pt ex) (in-pcontext context)])
      (values pt ex)))

  (for ([row (report-info-tests data)] [index (in-naturals)]
        #:unless (set-member? '("error" "crash") (table-row-status row)))
    (set-seed! (report-info-seed data))
    (define orig-test (extract-test row))
    (define context (test-context orig-test))
    (define output-repr (context-repr context))
    (parameterize ([*timeline-disabled* true])
      (define samples
        (parameterize ([*num-points* (+ (*num-points*) (*reeval-pts*))])
          (sample-points
           (test-precondition test)
           (list (or (test-specification test) (test-program test)))
           context)))
      (define-values (train-context test-context)
        (split-pcontext (apply mk-pcontext samples) (*num-points*) (*reeval-pts*))) 
      (define start-alt (make-alt (test-program orig-test)))
      (define end-alt (make-alt `(λ ,(test-vars orig-test) ,(test-output orig-test))))
      (define-values (newpoints newexacts) (get-p&es test-context))

      ; Pherbie specific
      (define ca (table-row-cost-accuracy row))
      (define start-cost (first (first ca)))
      (define end-cost (first (second ca)))
      (define other-costs (map first (third ca)))
      (define other-progs (map second (third ca)))
      (define other-progs*
        (for/list ([prog other-progs])
          `(λ ,(test-vars orig-test) ,(desugar-program prog context))))

      (define end-errs (errors (alt-program end-alt) test-context context))
      (define other-errs (map (curryr errors test-context context) other-progs*))

      (define result
        (test-success orig-test #f #f #f #f
                      start-alt (cons end-alt (map make-alt other-progs*))
                      #f #f #f #f #f
                      newpoints newexacts
                      (errors (alt-program start-alt) test-context context)
                      (cons end-errs other-errs)
                      (if (test-output orig-test)
                          (errors (test-target orig-test) test-context context)
                          #f)
                      #f #f
                      (alt-cost start-alt output-repr) (cons end-cost other-costs)
                      #f))
      (define images (filter (curryr string-suffix? ".png") (all-pages result)))
      (for ([page images])
        (with-handlers ([exn:fail? (page-error-handler result page)])
          (call-with-output-file (build-path dir (table-row-link row) page)
            #:exists 'replace
            (λ (out) (make-page page out result #f))))))))

(define (read-json-files info dir name)
  (filter
   identity
   (for/list ([res (report-info-tests info)])
     (define out
      (with-handlers ([exn? (const #f)])
        (call-with-input-file (build-path dir (table-row-link res) name) read-json)))
     (and out (not (eof-object? out)) (cons (table-row-link res) out)))))

(define (merge-timeline-jsons tl)
  (apply timeline-merge (map timeline-relink (dict-keys tl) (dict-values tl))))

(define (merge-profile-jsons ps)
  (profile->json (apply profile-merge (map json->profile (dict-values ps)))))

(define (run-tests tests #:dir dir #:note note #:threads threads)
  (define seed (get-seed))
  (when (not (directory-exists? dir)) (make-directory dir))

  (define results
    (get-test-results tests #:threads threads #:seed seed #:profile true #:dir dir))
  (define info (make-report-info (filter values results) #:note note #:seed seed))

  (write-datafile (build-path dir "results.json") info)
  (copy-file (web-resource "report.js") (build-path dir "report.js") #t)
  (copy-file (web-resource "report.css") (build-path dir "report.css") #t)
  (copy-file (web-resource "arrow-chart.js") (build-path dir "arrow-chart.js") #t)
  (call-with-output-file (build-path dir "results.html")
    (curryr make-report-page info dir) #:exists 'replace)
  (define timeline (merge-timeline-jsons (read-json-files info dir "timeline.json")))
  (call-with-output-file (build-path dir "timeline.json") (curry write-json timeline) #:exists 'replace)
  (define profile (merge-profile-jsons (read-json-files info dir "profile.json")))
  (call-with-output-file (build-path dir "profile.json") (curry write-json profile) #:exists 'replace)

  (call-with-output-file (build-path dir "timeline.html")
    #:exists 'replace
    (λ (out) (make-timeline "Herbie run" timeline out #:info info)))

  ; Delete old files
  (let* ([expected-dirs (map string->path (filter identity (map table-row-link (report-info-tests info))))]
         [actual-dirs (filter (λ (name) (directory-exists? (build-path dir name))) (directory-list dir))]
         [extra-dirs (filter (λ (name) (not (member name expected-dirs))) actual-dirs)])
    (for ([subdir extra-dirs])
      (with-handlers ([exn:fail:filesystem? (const true)])
        (delete-directory/files (build-path dir subdir))))))

(define (test<? t1 t2)
  (cond
   [(and (test-output t1) (test-output t2))
    (string<? (test-name t1) (test-name t2))]
   [(and (not (test-output t1)) (not (test-output t2)))
    (string<? (test-name t1) (test-name t2))]
   [else
    ; Put things with an output first
    (test-output t1)]))

(define (diff-report old new)
  (define df (diff-datafiles (read-datafile (build-path old "results.json"))
                             (read-datafile (build-path new "results.json"))))
  (call-with-output-file (build-path new "results.html")
    #:exists 'replace
    (curryr make-report-page df #f)))
