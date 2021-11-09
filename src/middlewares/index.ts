const logger = require("morgan");
const cors = require("cors");

const CONFIG_ENV: string = process.env.CONFIG_ENV || "local";
import corsOptions from "./cors";

const packageMiddleware = (app: any) => {
  app.use(cors(corsOptions));
  if (CONFIG_ENV === "local" || CONFIG_ENV === "dev") {
    app.use(logger("dev"));
  }
};

export default packageMiddleware;
