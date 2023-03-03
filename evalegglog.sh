#!/bin/bash

# exit immediately upon first error
set -e -x

SEED=0
CORES=6
BENCHMARKS="bench/"
TIMEOUT=500

racket src/herbie.rkt report --threads "$CORES" --no-pareto --seed "$SEED" --timeout "$TIMEOUT"  "$BENCHMARKS" egglogreport

racket src/herbie.rkt report --threads "$CORES" --timeout "$TIMEOUT" --seed "$SEED" --disable generate:egglog --no-pareto "$BENCHMARKS" vanillareport


bash egglogreport.sh
