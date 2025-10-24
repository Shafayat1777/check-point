import { Hono } from "hono";

const saveFile = new Hono();

saveFile.get("/", (c) => c.text("Save File!"));
saveFile.get("/:id", (c) => c.text(`Save ${c.req.param("id")}!`));

export default saveFile;
