#!/usr/bin/env bash

echo "Deploying..."

# git pull origin master
npm run build
rm -r ../public_html/*
cp -r build/* ../public_html/

echo "Deployed!"
