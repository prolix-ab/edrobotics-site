import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { formatPostMonth } from "./date";

const POSTS_ROOT = path.join(process.cwd(), "src/content/posts");

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

function postsDir(locale: string): string {
  return path.join(POSTS_ROOT, locale);
}

function readSlugs(locale: string): string[] {
  const dir = postsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readFrontmatter(locale: string, slug: string) {
  const raw = fs.readFileSync(path.join(postsDir(locale), `${slug}.md`), "utf8");
  return matter(raw);
}

export function getAllPostsMeta(locale: string): PostMeta[] {
  return readSlugs(locale)
    .map((slug) => {
      const { data } = readFrontmatter(locale, slug);
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

export function getAllSlugs(locale: string): string[] {
  return readSlugs(locale);
}

export async function getPostBySlug(locale: string, slug: string): Promise<Post> {
  const { data, content } = readFrontmatter(locale, slug);
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

export function getAllTags(locale: string): string[] {
  const tags = new Set<string>();
  for (const post of getAllPostsMeta(locale)) {
    for (const tag of post.tags) tags.add(tag);
  }
  return Array.from(tags);
}

export function getArchiveMonths(locale: string): string[] {
  const months = new Set<string>();
  for (const post of getAllPostsMeta(locale)) {
    months.add(formatPostMonth(post.date));
  }
  return Array.from(months);
}
