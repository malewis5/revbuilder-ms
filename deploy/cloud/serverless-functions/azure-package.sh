# az storage account create --name yasmanycli --resource-group yasmany --location eastus --sku Standard_LRS --kind Storage
# az functionapp create --name yasmanycli --resource-group yasmany --storage-account yasmanycli --consumption-plan-location eastus --functions-version 3 --os-type Windows --runtime node --runtime-version 12
# az functionapp deployment source config-zip --name yasmanycli --resource-group yasmany --src ./main.zip

mv functions/serverless-azure.js functions/index.js
# cp -rf node_modules functions
cd functions; 
npm install;
cd ../
mv functions main
mkdir functions
mv main functions
cp host.json functions
cd functions
zip -r ../functions.zip .