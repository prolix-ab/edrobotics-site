import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { formatPostDay, formatPostMonth } from "@/lib/date";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/blogg/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title} | ED Robotics`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Inlägg hittades inte | ED Robotics" };
  }
}

export default async function BlogPostPage(props: PageProps<"/blogg/[slug]">) {
  const { slug } = await props.params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-7 pb-20 pt-14">
      <Link
        href="/blogg"
        className="mb-6 inline-flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-widest text-muted hover:text-accent-text"
      >
        ← Alla inlägg
      </Link>

      <div className="mb-3 font-mono text-xs text-muted">
        {formatPostDay(post.date)} {formatPostMonth(post.date)}
      </div>
      <h1 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{post.title}</h1>

      <div className="mb-9 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
