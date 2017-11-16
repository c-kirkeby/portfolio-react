#!/usr/bin/env bash

echo "Deploying..."
npm run build
cp -r ./build/* ./../public_html
