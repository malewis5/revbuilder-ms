const express = require("express");
const app = express();
import decorateRoutes from "./routes";
import decorateMiddleware from "./middlewares";
const awsServerlessExpress = require("aws-serverless-express");

const port = 3000;
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

decorateMiddleware(app);
decorateRoutes(app);

app.listen(port, () => console.log(`calculator listening on port {port}!`));

const server = awsServerlessExpress.createServer(app);

exports.appEntryPoint = (event: any, context: any) => {
  awsServerlessExpress.proxy(server, event, context);
};
