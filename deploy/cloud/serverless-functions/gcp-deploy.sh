#!/bin/sh
source ./deploy/utils/load-envs.sh
GIT_BRANCH=$(git branch --show-current)
gcloud functions deploy $GIT_BRANCH-$GCP_SERVERLESS_FUNCTION_NAME \
  --runtime nodejs12 \
  --region $GCP_SERVERLESS_REGION \
  --entry-point appEntryPoint \
  --allow-unauthenticated \
  --trigger-http \
  --project $GCP_SERVERLESS_PROJECT \
  --set-env-vars=WHITELIST=$WHITELIST \
  --source ./functions