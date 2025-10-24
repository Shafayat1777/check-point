import { Hono } from "hono";

const user = new Hono();

user.get("/", (c) => c.text("Hello User!"));
user.get("/:id", (c) => c.text(`Hello ${c.req.param("id")}!`));

export default user;
