#!/bin/bash

# exit immediately upon first error
set -e -x

SEED=0
CORES=6
BENCHMARKS="bench/"
TIMEOUT=500

racket src/herbie.rkt report --threads "$CORES" --no-pareto --seed "$SEED" --timeout "$TIMEOUT"  "$BENCHMARKS" eqlogreport

racket src/herbie.rkt report --threads "$CORES" --timeout "$TIMEOUT" --seed "$SEED" --disable generate:eqlog --no-pareto "$BENCHMARKS" vanillareport


bash eqlogreport.sh
