#!/bin/sh
source ./deploy/utils/load-envs.sh
# aws lambda get-function --function-name $AWS_FUNCTION_NAME
# aws lambda delete-function --function-name $AWS_FUNCTION_NAME


aws lambda get-function --function-name $AWS_FUNCTION_NAME > /dev/null 2>&1
  if [ 0 -eq $? ]; then
    echo "Updating Lambda"
    aws lambda update-function-code --function-name $AWS_FUNCTION_NAME --zip-file fileb://functions.zip
  else
    echo "Creating Lambda"
    aws lambda create-function --function-name $AWS_FUNCTION_NAME --zip-file fileb://functions.zip --handler index.appEntryPoint --runtime nodejs12.x --role $AWS_ROLE
    echo "Create api gateway..."
    REST_API_ID=$(aws apigateway create-rest-api --name test-api --query 'id' --output text)
    PARENT_ID=$(aws apigateway get-resources --rest-api-id $REST_API_ID --query 'items[0].id' --output text)
    RESOURCE_ID=$(aws apigateway create-resource --rest-api-id $REST_API_ID --parent-id $PARENT_ID --path-part {proxy+} --query 'id' --output text)
    aws apigateway put-method --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --authorization-type NONE
    aws apigateway put-integration --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --type AWS_PROXY --integration-http-method POST --uri "arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:${AWS_ACCOUNT_ID}:function:${AWS_FUNCTION_NAME}/invocations"
    aws apigateway put-method-response --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --status-code 200 --response-models application/json=Empty
    aws lambda add-permission --function-name $AWS_FUNCTION_NAME --statement-id apigateway --action lambda:InvokeFunction --principal apigateway.amazonaws.com --source-arn "arn:aws:execute-api:us-east-1:$AWS_ACCOUNT_ID:$REST_API_ID/*/*/*"
    aws apigateway create-deployment --rest-api-id $REST_API_ID --stage-name prod
  fi

# https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html


# we need to be able to dynamically stand up and tear this down as the function


# AWS_ACCOUNT_ID=833552516635
# AWS_FUNCTION_NAME=test
# REST_API_ID=$(aws apigateway create-rest-api --name test-api --query 'id' --output text)
# PARENT_ID=$(aws apigateway get-resources --rest-api-id $REST_API_ID --query 'items[0].id' --output text)
# RESOURCE_ID=$(aws apigateway create-resource --rest-api-id $REST_API_ID --parent-id $PARENT_ID --path-part {proxy+} --query 'id' --output text)
# aws apigateway put-method --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --authorization-type NONE
# aws apigateway put-integration --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --type AWS_PROXY --integration-http-method POST --uri "arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:${AWS_ACCOUNT_ID}:function:${AWS_FUNCTION_NAME}/invocations"
# aws apigateway put-method-response --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --status-code 200 --response-models application/json=Empty
# aws lambda add-permission --function-name $AWS_FUNCTION_NAME --statement-id apigateway --action lambda:InvokeFunction --principal apigateway.amazonaws.com --source-arn "arn:aws:execute-api:us-east-1:$AWS_ACCOUNT_ID:$REST_API_ID/*/*/*"

# export REST_API_ID=iw8gchyloa
# export RESOURCE_ID=tivggr
# aws apigateway create-rest-api --name 'dynamic-test'
# aws apigateway get-resources --rest-api-id $REST_API_ID
# aws apigateway create-resource --rest-api-id $REST_API_ID --parent-id u1209zaljd --path-part {proxy+}
# aws apigateway put-method --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --authorization-type NONE
# aws apigateway put-integration --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --type AWS_PROXY --integration-http-method POST --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:833552516635:function:test/invocations
# aws apigateway put-method-response --rest-api-id $REST_API_ID --resource-id $RESOURCE_ID --http-method ANY --status-code 200 --response-models application/json=Empty








