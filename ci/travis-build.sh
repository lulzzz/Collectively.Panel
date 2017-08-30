#!/bin/bash
APP_ENV=""
case "$TRAVIS_BRANCH" in
  "develop")
    APP_ENV="devevelopment"
    ;;
  "master")
    APP_ENV="production"
    ;;    
esac

cd src
npm install