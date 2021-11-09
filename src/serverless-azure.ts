const express = require("express");
const app = express();
import decorateRoutes from "./routes";
import decorateMiddleware from "./middlewares";
const createHandler = require("azure-function-express").createHandler;

decorateMiddleware(app);
decorateRoutes(app);

module.exports = createHandler(app);
