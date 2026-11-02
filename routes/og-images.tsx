/** @jsxImportSource react */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";
import { Hono } from "hono";
import { ssgParams } from "hono/ssg";
import { renderToStaticMarkup } from "react-dom/server";
import OGImage from "../components/OGImage.tsx";
import { posts } from "../utils/posts.ts";
import { SITE_TITLE } from "../utils/constants.ts";

const app = new Hono();
const titles = new Map([
  ["index", SITE_TITLE],
  ...posts.filter((post) => !post.thumbnail).map((post) => [post.slug, post.title] as const),
]);
if (posts.some((post) => !post.thumbnail && ["index", "logo"].includes(post.slug))) {
  throw new Error("Post slug conflicts with a reserved OG-image name");
}
const logo = await readFile(new URL("../assets/logo.svg", import.meta.url), "utf8");
const font = {
  loadSystemFonts: false,
  fontFiles: ["regular", "bold"].map((weight) => fileURLToPath(
    new URL(`../assets/fonts/sprig-sans-${weight}.ttf`, import.meta.url),
  )),
  defaultFontFamily: "FAIRE Sprig Sans",
  sansSerifFamily: "FAIRE Sprig Sans",
};

app.get("/:image", ssgParams(() => [
  ...[...titles.keys()].map((slug) => ({ image: `${slug}.png` })),
  { image: "logo.png" },
]), (c) => {
  const image = c.req.param("image");
  const slug = image.replace(/\.png$/, "");
  if (image !== `${slug}.png` || (slug !== "logo" && !titles.has(slug))) return c.notFound();
  const svg = slug === "logo" ? logo : renderToStaticMarkup(<OGImage title={titles.get(slug)} />);
  const png = new Resvg(svg, { font }).render().asPng();
  return c.body(new Uint8Array(png), 200, { "Content-Type": "image/png" });
});

export default app;
