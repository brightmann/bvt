import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw"; // Add this import
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkTextr from "remark-textr";
import { unified } from "unified";

// Process markdown content
export async function processMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm).use(remarkTextr)
    .use(remarkFrontmatter)
    .use(remarkRehype, { allowDangerousHtml: true }) // Enable passing raw HTML
    .use(rehypeRaw) // Parse the raw HTML tags
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return result.toString();
}