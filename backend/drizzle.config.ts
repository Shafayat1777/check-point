import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "./src/lib/secret";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema",
  out: "./src/db/drizzle",
  dbCredentials: {
    url: DATABASE_URL,
  },
  casing: "snake_case",
});
