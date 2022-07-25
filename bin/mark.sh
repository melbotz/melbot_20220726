#!/usr/bin/env bash

export NODE_OPTIONS=--openssl-legacy-provider



DEFAULT_MESSAGE="commit"
MESSAGE="${1:-$DEFAULT_MESSAGE}"


git add .
git commit -m "${MESSAGE}"
npm version patch 

git mark --send --tags --commit

./bin/publish.sh