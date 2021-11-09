#!/bin/sh
source ./deploy/utils/load-envs.sh

# az storage account create --name yasmanycli --resource-group yasmany --location eastus --sku Standard_LRS --kind Storage
# az functionapp create --name yasmanycli --resource-group yasmany --storage-account yasmanycli --consumption-plan-location eastus --functions-version 3 --os-type Windows --runtime node --runtime-version 12
# az functionapp deployment source config-zip --name yasmanycli --resource-group yasmany --src ./main.zip

az functionapp deployment source config-zip --name $AZURE_FUNCTION_NAME --resource-group $AZURE_RESOURCE_GROUP --src functions.zip --verbose
rm functions.zip
