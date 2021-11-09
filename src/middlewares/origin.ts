import * as constants from "../constants";
import { consoleError } from "../helpers/utils";
import { ApiErrors, sendApiErrorResponse } from "../helpers/response-builder";
import { has } from "../helpers/lodash";
import { SECRET_KEY } from "../helpers/env";

export function ensureOrigin(req: any, res: any, next: any) {
  let origin: string | undefined = has(req, ["headers", "origin"]);
  //only force a password if there is an origin present
  if (!origin) {
    if (!req.headers.ms_api_secret) {
      return sendApiErrorResponse(res, {
        status: 400,
        result: { error: ApiErrors.missing_authentication },
      });
    }
    try {
      const token = req.headers.ms_api_secret.replace(/['"]+/g, "");
      if (token !== SECRET_KEY) {
        return sendApiErrorResponse(res, {
          status: 400,
          result: { error: ApiErrors.authentication_error },
        });
      } else {
        next();
      }
    } catch (ex) {
      consoleError(ex.message);
      return sendApiErrorResponse(res, {
        status: 400,
        result: { error: ApiErrors.authentication_error },
      });
    }
  } else {
    next();
  }
}
