import logProviderFactory from "./helpers/logs/logProviderFactory";
import { consoleInfo } from "./helpers/utils";

import decorateRoutes from "./routes";
import decorateMiddleware from "./middlewares";

/**
 * Switch out to fastify or express
 */
const fastify = require("fastify");
// const express = require("express");

logProviderFactory.initialize();

export class Server {
  public app: any;

  constructor(private port: number) {
    this.app = fastify();
    this.config();
    this.api();
  }

  start() {
    return new Promise((resolve, reject) => {
      this.app.listen(this.port, "0.0.0.0", (err: any) => {
        if (err) {
          reject(err);
          return;
        }
        consoleInfo(`server listening on ${this.port}`);
        resolve(null);
      });
    });
  }

  public api() {
    decorateRoutes(this.app);
  }

  public config() {
    decorateMiddleware(this.app);
  }
}
