import { Server } from "./server";
import { consoleError, consoleInfo } from "./helpers/utils";
import { PORT } from "./helpers/env";
import logProviderFactory from "./helpers/logs/logProviderFactory";

const server = new Server(PORT);

server.start().then(
  () => {
    consoleInfo("Server started successfully!");
  },
  (err) => {
    consoleError(err);
  }
);
