#!/usr/bin/env bash

PROJECT=${1}
ZONE=${2}
SA_EMAIL=${3}
SA_CONTENT=${4}
CLUSTER=${5}

echo ${SA_CONTENT} | base64 -d > gcpsa.json
gcloud auth activate-service-account ${SA_EMAIL} --key-file=gcpsa.json --project=${PROJECT}
gcloud container clusters get-credentials ${CLUSTER} --zone ${ZONE} --project ${PROJECT}
