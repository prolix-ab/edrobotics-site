"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/data/content";

export default function MediaGallery({ images }: { images: GalleryImage[] }) {
  const t = useTranslations("media");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, showPrev, showNext]);

  const current = openIndex === null ? null : images[openIndex];

  return (
    <>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={t("viewLarger", { alt: img.alt })}
            className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface-2"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 33vw, 16vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-black/90 p-2 backdrop-blur-sm sm:p-4"
        >
          <button
            type="button"
            onClick={close}
            aria-label={t("close")}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white hover:border-white/60"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label={t("prev")}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white hover:border-white/60 sm:left-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
              <polyline points="15 5 8 12 15 19" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label={t("next")}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white hover:border-white/60 sm:right-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
              <polyline points="9 5 16 12 9 19" />
            </svg>
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element -- native <img> keeps each photo's real aspect ratio (mixed portrait/landscape) inside the lightbox */}
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[96vw] w-auto h-auto rounded-lg object-contain"
          />

          <p className="font-mono text-xs text-white/70" onClick={(e) => e.stopPropagation()}>
            {openIndex! + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
