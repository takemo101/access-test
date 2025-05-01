import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { config } from "@dotenvx/dotenvx";

config();

const app = new Hono();

app.get("*", (c) => {
    return c.text("Hello World!");
});

const port = process.env.PORT;

serve({
    fetch: app.fetch,
    port: port ? Number.parseInt(port) : 80,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
