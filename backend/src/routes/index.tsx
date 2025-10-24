import { Hono } from "hono";
import user from "./user";
import saveFile from "./save-file";

const routes = new Hono();

routes.route("/user", user);
routes.route("/save-file", saveFile);

export default routes;
