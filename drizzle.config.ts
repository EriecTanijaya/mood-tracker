import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: [".env.local", ".env"] });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/**/*Table.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CF_ACC_ID as string,
    databaseId: process.env.CF_DB_ID as string,
    token: process.env.CF_D1_TOKEN as string,
  },
});
