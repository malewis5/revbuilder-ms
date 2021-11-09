import sentryLogger from "./providers/sentry";
import consoleLogger from "./providers/console";

const logProviders: ILogProviderInterface[] = [consoleLogger, sentryLogger];

export interface ILogProviderHookInterface {
  name: string;
  settings: Record<string, any>;
}

export interface ILogProviderInterface {
  initialize: (data?: Record<string, any>) => void;
  logMessage: (message: string) => void;
  logError: (message: Error | string) => void;
}

/**
 * Call this at the start of your application
 */
const initialize = () => {
  for (const provider of logProviders) {
    provider.initialize();
  }
};

/**
 * Log generic messages here
 * @param {*} message string
 */
const logMessage = (message: string) => {
  for (const provider of logProviders) {
    provider.logMessage(message);
  }
};

/**
 * Log generic messages here
 * @param {*} message string || Error
 */
const logError = (error: Error | string) => {
  for (const provider of logProviders) {
    provider.logError(error);
  }
};

export default { initialize, logMessage, logError } as ILogProviderInterface;
