import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DimRule, Eyebrow } from "@/components/ui";
import { galleryImages, socialLinks } from "@/data/content";
import { socialIconByName } from "@/components/icons";
import MediaGallery from "@/components/MediaGallery";

export async function generateMetadata(props: PageProps<"/[locale]/media">): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "media.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function MediaPage(props: PageProps<"/[locale]/media">) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("media");

  return (
    <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
      <Eyebrow>{t("kicker")}</Eyebrow>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{t("title")}</h2>
      <p className="mb-10 max-w-[60ch] text-muted">{t("intro")}</p>

      <MediaGallery images={galleryImages} />

      <DimRule label={t("followHeading")} className="mb-8 mt-14" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {socialLinks.map((s) => {
          const Icon = socialIconByName[s.name];
          return (
            <a key={s.name} href={s.href} target="_blank" rel="noopener" className="card-link flex flex-col gap-2.5 p-5">
              <Icon className="h-[22px] w-[22px] text-accent-text" />
              <strong className="font-display text-base font-extrabold tracking-tight">{s.name}</strong>
              <span className="font-mono text-[0.78rem] text-muted">{s.handle}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
