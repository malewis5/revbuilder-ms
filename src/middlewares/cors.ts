import { WHITELIST } from "../helpers/env";
const corsOptions: any = {
  origin: function (origin: any, callback: any) {
    let whitelist: any[] = ["merce.io"];
    if (WHITELIST) {
      try {
        let arrayParams = WHITELIST.split("###");
        whitelist = [...whitelist, ...arrayParams];
      } catch (e) {
        if (typeof WHITELIST === "string") {
          whitelist.push(WHITELIST);
        }
      }
    }
    let isAllowed: boolean = whitelist.indexOf(origin) !== -1;
    if (!isAllowed) {
      for (const white of whitelist) {
        let regex: RegExp = new RegExp(`(http|https):\/\/(.*).${white}`);
        if (regex.test(origin as any)) {
          isAllowed = true;
          break;
        }
      }
    }
    if (isAllowed || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

export default corsOptions;
