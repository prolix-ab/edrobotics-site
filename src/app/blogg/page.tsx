import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { getAllPostsMeta, getAllTags, getArchiveMonths } from "@/lib/posts";
import BlogExplorer from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Blogg | ED Robotics",
  description: "Senaste nytt från ED Robotics — tävlingar, resor och milstolpar.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();
  const tags = getAllTags();
  const archiveMonths = getArchiveMonths();

  return (
    <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
      <Eyebrow>Nyheter &amp; uppdateringar</Eyebrow>
      <h2 className="mb-10 text-3xl font-extrabold tracking-tight sm:text-4xl">Senaste nytt</h2>
      <BlogExplorer posts={posts} tags={tags} archiveMonths={archiveMonths} />
    </section>
  );
}
