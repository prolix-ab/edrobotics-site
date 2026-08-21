"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, getPathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("language");
  const pathname = usePathname();

  const nextLocale = locale === "sv" ? "en" : "sv";
  const switchLabel = t("switchTo", { lang: t(nextLocale) });

  return (
    <button
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
        window.location.assign(getPathname({ href: pathname, locale: nextLocale }));
      }}
      aria-label={switchLabel}
      title={switchLabel}
      className="flex h-10 items-center justify-center rounded-full border border-border px-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent-text"
    >
      {nextLocale}
    </button>
  );
}
