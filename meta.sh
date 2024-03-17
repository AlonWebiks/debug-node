#!/bin/sh
mkdir -p meta
cp package.json package-lock.json meta
find ./packages -name "package.json" -exec sh -c 'mkdir -p meta/$(dirname {}); cp {} meta/{}' \;