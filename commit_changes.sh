#!/bin/bash
#run this script to commit changes to GH page
# npm run predeploy
# npm run deploy
git add .
git commit -m "$1"
# git push origin main