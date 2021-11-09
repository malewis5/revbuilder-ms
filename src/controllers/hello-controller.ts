import {
  sendApiErrorResponse,
  sendApiResponse,
} from "../helpers/response-builder";
import logProviderFactory from "../helpers/logs/logProviderFactory";

export async function world(req: any, res: any) {
  sendApiResponse(res, { result: { hello: "world" } });
}

export async function sentry(req: any, res: any) {
  logProviderFactory.logError("test error");
  sendApiErrorResponse(res, {
    result: { error: "a test sentry error has been logged" },
  });
}
