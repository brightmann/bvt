import * as fs from "node:fs/promises";
import { defaultPlugin, toSSG } from "hono/ssg";
import app from "./index.tsx";
import { redirectsFile } from "./utils/redirects.ts";

await fs.rm("./dist", { recursive: true, force: true });
const result = await toSSG(app, fs, {
  dir: "./dist",
  plugins: [
    {
      afterResponseHook(response) {
        if (!response.ok)
          throw new Error(
            `Static page failed: ${response.url} (${response.status})`,
          );
        return response;
      },
    },
    defaultPlugin(),
  ],
});
if (!result.success) throw result.error ?? new Error("Static build failed");
await fs.cp("./public", "./dist", { recursive: true });
await fs.cp("./styles", "./dist/styles", { recursive: true });
await fs.writeFile("./dist/_redirects", redirectsFile());
const stagingHeaders =
  process.env.SITE_ENV === "production" ? "" : "/*\n  X-Robots-Tag: noindex\n";
await fs.writeFile("./dist/_headers", stagingHeaders);
console.log(`Generated ${result.files.length} static file(s).`);
