#!/bin/bash
npm run predeploy
npm run deploy

git add .
git commit -m "$1"
git push origin main