import * as HelloController from "./controllers/hello-controller";
// import * as md_origin from "./middlewares/origin";

const decorateRoutes = (app: any) => {
  app.get("/", function (req: any, res: any) {
    res.send("Up!");
  });
  app.get("/api", function (req: any, res: any) {
    res.send("API Up!");
  });
  app.get(
    "/api/hello",
    // { preHandler: [md_origin.ensureOrigin] },
    HelloController.world
  );
};

export default decorateRoutes;
