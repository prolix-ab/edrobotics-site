import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Eyebrow } from "@/components/ui";
import { getAllPostsMeta, getAllTags, getArchiveMonths } from "@/lib/posts";
import BlogExplorer from "@/components/BlogExplorer";

export async function generateMetadata(props: PageProps<"/[locale]/blogg">): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function BlogPage(props: PageProps<"/[locale]/blogg">) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  const posts = getAllPostsMeta(locale);
  const tags = getAllTags(locale);
  const archiveMonths = getArchiveMonths(locale);

  return (
    <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
      <Eyebrow>{t("kicker")}</Eyebrow>
      <h2 className="mb-10 text-3xl font-extrabold tracking-tight sm:text-4xl">{t("title")}</h2>
      <BlogExplorer posts={posts} tags={tags} archiveMonths={archiveMonths} />
    </section>
  );
}
