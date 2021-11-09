const express = require("express");
import decorateRoutes from "./routes";
import decorateMiddleware from "./middlewares";

const app = express();
decorateMiddleware(app);
decorateRoutes(app);

module.exports = {
  appEntryPoint: app,
};
