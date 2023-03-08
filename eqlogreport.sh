#!/bin/bash

# exit immediately upon first error
set -e -x

if [ -d "eqlogdata" ]; then rm -Rf eqlogdata; fi

mkdir eqlogdata

VANILLA=vanillareport
EQLOG=eqlogreport

python3 eqlogplot.py "$VANILLA/results.json" "$EQLOG/results.json" "eqlogdata/error.pdf" "eqlogdata/macros.tex" "eqlogdata"
