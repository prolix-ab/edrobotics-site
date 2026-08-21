import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DimRule, Eyebrow, SpecCard, SpecRow } from "@/components/ui";

export async function generateMetadata(props: PageProps<"/[locale]/om-oss">): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage(props: PageProps<"/[locale]/om-oss">) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 pb-4 pt-14">
        <Eyebrow>{t("kicker")}</Eyebrow>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{t("whoTitle")}</h2>
        <p className="mb-4 max-w-[74ch] text-lg text-muted">{t("who1")}</p>
        <p className="max-w-[74ch] text-lg text-muted">{t("who2")}</p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-14">
        <DimRule label={t("whatKicker")} className="mb-8" />
        <p className="max-w-[74ch] text-lg text-muted">{t("what1")}</p>
        <p className="mt-3.5 max-w-[74ch] text-lg text-muted">{t("what2")}</p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-14">
        <DimRule label={t("competitionsKicker")} className="mb-8" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel p-6">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-accent-text">
              {t("frcTag")}
            </span>
            <h4 className="mb-2.5 mt-2 font-display text-xl font-extrabold tracking-tight">{t("frcTitle")}</h4>
            <p className="text-sm text-muted">{t("frcBody")}</p>
          </div>
          <div className="panel p-6">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-accent-text">
              {t("robocupTag")}
            </span>
            <h4 className="mb-2.5 mt-2 font-display text-xl font-extrabold tracking-tight">
              {t("robocupTitle")}
            </h4>
            <p className="text-sm text-muted">{t("robocupBody")}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
        <DimRule label={t("meetKicker")} className="mb-8" />
        <SpecCard className="max-w-[480px]">
          <SpecRow k={t("daysLabel")} v={t("daysValue")} />
          <SpecRow k={t("timeLabel")} v={t("timeValue")} />
          <SpecRow k={t("placeLabel")} v={t("placeValue")} />
          <SpecRow k={t("schoolLabel")} v={t("schoolValue")} />
        </SpecCard>
      </section>
    </>
  );
}
