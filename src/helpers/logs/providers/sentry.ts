import * as Sentry from "@sentry/node";
import { consoleInfo } from "../../utils";

/**
 * Call this at the start of your application
 */

const initialize = () => {
  try {
    const SENTRY_DSN = process.env.SENTRY_DSN || "";
    if (SENTRY_DSN) {
      Sentry.init({
        dsn: SENTRY_DSN,
        debug: false,
        release: process.env.VERSION || "localhost",
        environment: (process.env.CONFIG_ENV || "local").toLowerCase(),
        maxValueLength: 750,
      });
      consoleInfo(`SENTRY HAS BEEN INITIALIZED: ${SENTRY_DSN}`);
    } else {
      consoleInfo("SENTRY_DSN was not provided...");
    }
  } catch (e) {
    consoleInfo(`Error logging Sentry: ${e.toString()}`);
  }
};

const logMessage = (message: string) => {
  try {
    Sentry.captureMessage(message);
  } catch (e) {
    consoleInfo(`Error logging Sentry: ${e.toString()}`);
  }
};

/**
 * Log generic messages here
 * @param {*} message string || Error
 */
const logError = (error: string | Error) => {
  try {
    if (typeof error === "string") {
      Sentry.captureException(new Error(error));
      return;
    }
    Sentry.captureException(error);
  } catch (e) {
    consoleInfo(`Error logging Sentry: ${e.toString()}`);
  }
};

export default { initialize, logMessage, logError };
