#!/usr/bin/env bash

echo "Deploying..."

npm run build
rm -r ../public_html/*
cp -r build/* ../public_html/*

echo "Deployed!
