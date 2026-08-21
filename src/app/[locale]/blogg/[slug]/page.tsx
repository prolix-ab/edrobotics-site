import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { formatPostDay, formatPostMonth } from "@/lib/date";

export function generateStaticParams() {
  return getAllSlugs("sv").map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/[locale]/blogg/[slug]">): Promise<Metadata> {
  const { locale, slug } = await props.params;
  try {
    const post = await getPostBySlug(locale, slug);
    return {
      title: `${post.title} | ED Robotics`,
      description: post.excerpt,
    };
  } catch {
    const t = await getTranslations({ locale, namespace: "blog" });
    return { title: t("notFound") };
  }
}

export default async function BlogPostPage(props: PageProps<"/[locale]/blogg/[slug]">) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  let post;
  try {
    post = await getPostBySlug(locale, slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-7 pb-20 pt-14">
      <Link
        href="/blogg"
        className="mb-6 inline-flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-widest text-muted hover:text-accent-text"
      >
        {t("backToAll")}
      </Link>

      <div className="mb-3 font-mono text-xs text-muted">
        {formatPostDay(post.date)} {formatPostMonth(post.date)}
      </div>
      <h1 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{post.title}</h1>

      <div className="mb-9 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
