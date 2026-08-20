"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/posts";
import { formatPostDay, formatPostMonth } from "@/lib/date";

export default function BlogExplorer({
  posts,
  tags,
  archiveMonths,
}: {
  posts: PostMeta[];
  tags: string[];
  archiveMonths: string[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const visible = useMemo(
    () => (active ? posts.filter((p) => p.tags.includes(active)) : posts),
    [active, posts]
  );

  return (
    <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
      <div>
        {visible.map((post) => (
          <article
            key={post.slug}
            className="grid grid-cols-[88px_1fr] gap-5 border-b border-border py-6 first:pt-0 sm:grid-cols-[110px_1fr]"
          >
            <div className="flex flex-col gap-3">
              {post.image && (
                <Link
                  href={`/blogg/${post.slug}`}
                  className="relative block aspect-square w-full overflow-hidden rounded-lg bg-surface-2"
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    sizes="110px"
                    className="object-cover"
                  />
                </Link>
              )}
              <div className="font-mono text-xs text-muted">
                <span className="block font-display text-2xl font-extrabold text-ink">
                  {formatPostDay(post.date)}
                </span>
                {formatPostMonth(post.date)}
              </div>
            </div>
            <div>
              <Link href={`/blogg/${post.slug}`} className="group">
                <h3 className="mb-2 text-lg font-bold tracking-normal group-hover:text-accent-text">
                  {post.title}
                </h3>
              </Link>
              <p className="mb-3 text-sm text-muted">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="chip pointer-events-none">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
        {visible.length === 0 && (
          <p className="py-8 text-sm text-muted">Inga inlägg med den taggen ännu.</p>
        )}
      </div>

      <aside>
        <div className="mb-9">
          <h4 className="mb-3.5 font-mono text-[0.75rem] uppercase tracking-widest text-muted-2">
            Populära taggar
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive(null)}
              className={`chip cursor-pointer ${active === null ? "chip-active" : ""}`}
            >
              Alla
            </button>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`chip cursor-pointer ${active === t ? "chip-active" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3.5 font-mono text-[0.75rem] uppercase tracking-widest text-muted-2">Arkiv</h4>
          <ul className="flex flex-col gap-2 font-mono text-sm text-muted">
            {archiveMonths.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
