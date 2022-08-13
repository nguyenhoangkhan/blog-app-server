import postsRouter from "./posts.route.js";
import siteRouter from "./site.route.js";
const route = (app) => {
  app.use("/posts", postsRouter);
  app.use("/ok", (req, res) => {
    res.send("ok");
  });
  app.use("/", siteRouter);
};

export default route;
