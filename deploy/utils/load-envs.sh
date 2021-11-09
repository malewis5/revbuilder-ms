#!/bin/sh
GIT_BRANCH=$(git branch --show-current)
cat ./deploy/.envs/$GIT_BRANCH.env | xargs
set -o allexport; source ./deploy/.envs/$GIT_BRANCH.env; set +o allexport


