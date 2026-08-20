import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { formatPostMonth } from "./date";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image?: string;
  imageAlt?: string;
};

export type Post = PostMeta & { html: string };

function readSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readFrontmatter(slug: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  return matter(raw);
}

export function getAllPostsMeta(): PostMeta[] {
  return readSlugs()
    .map((slug) => {
      const { data } = readFrontmatter(slug);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        excerpt: String(data.excerpt ?? ""),
        image: data.image ? String(data.image) : undefined,
        imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return readSlugs();
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = readFrontmatter(slug);
  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    excerpt: String(data.excerpt ?? ""),
    image: data.image ? String(data.image) : undefined,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    html: processed.toString(),
  };
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of getAllPostsMeta()) {
    for (const tag of post.tags) tags.add(tag);
  }
  return Array.from(tags);
}

export function getArchiveMonths(): string[] {
  const months = new Set<string>();
  for (const post of getAllPostsMeta()) {
    months.add(formatPostMonth(post.date));
  }
  return Array.from(months);
}
