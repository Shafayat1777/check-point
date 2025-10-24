import { Hono } from "hono";
import routes from "./routes";
const app = new Hono().basePath("/api");


app.route('/', routes)

export default {
  port: 4000,
  fetch: app.fetch,
};
