// import { CONFIG_ENV } from '../../../settings/variables'

import { CCOLORS } from "../../../constants";
import { consoleInfo } from "../../utils";

const allowLogs: boolean = true;
// if (CONFIG_ENV) {
//   const lower: string = CONFIG_ENV.toLowerCase()
//   if (lower === 'local' || lower === 'dev') {
//     allowLogs = true
//   }
// }

const initialize = () => {
  //do nothing
};

const hook = () => {
  //do nothing
};

const logMessage = (message: string) => {
  if (allowLogs) {
    consoleInfo(message);
  }
};

const logError = (data: any) => {
  console.error(
    CCOLORS.Bright,
    CCOLORS.FgWhite,
    CCOLORS.BgRed,
    "ERROR",
    data,
    CCOLORS.Reset
  );
};

export default { initialize, logMessage, logError, hook };
