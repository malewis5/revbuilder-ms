#!/bin/sh
cp -rf node_modules functions
cd functions
mv functions/serverless-aws.js functions/index.js
zip -r ../functions.zip .