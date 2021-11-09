require("dotenv").config();

import { consoleInfo } from "./utils";

const WHITELIST = process.env.WHITELIST;
const DEBUG_LOGS = process.env.DEBUG_LOGS;
const SECRET_KEY = process.env.SECRET_KEY || "qKrg48gVXXRNZH6X";

let portString: string | undefined = process.env.PORT;
let PORT: number = 8080;
if (portString !== undefined && typeof portString === "string") {
  PORT = parseInt(portString, 10);
}

consoleInfo(`WHITELIST: ${WHITELIST}`);

export { WHITELIST, PORT, DEBUG_LOGS, SECRET_KEY };
