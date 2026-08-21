import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DimRule, Eyebrow, OpenSponsorSlot, SponsorLogo } from "@/components/ui";
import { sponsors } from "@/data/content";

export async function generateMetadata(props: PageProps<"/[locale]/partners">): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "partners.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function PartnersPage(props: PageProps<"/[locale]/partners">) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("partners");

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 pb-4 pt-14">
        <Eyebrow>{t("kicker")}</Eyebrow>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t("title1")}
          <br />
          {t("title2")}
        </h2>
        <p className="max-w-[74ch] text-lg text-muted">{t("intro")}</p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-12">
        <div className="panel p-9">
          <div className="grid gap-9 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="kicker mb-4">{t("packageKicker")}</span>
              <h3 className="mb-3.5 max-w-none text-2xl font-extrabold tracking-tight sm:text-3xl">
                {t("packageTitle")}
              </h3>
              <p className="text-muted">{t("packageBody")}</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a href="mailto:sponsorship@edrobotics.se" className="btn btn-primary justify-center">
                sponsorship@edrobotics.se
              </a>
              <a
                href="/docs/ED_Robotics_2026.pdf"
                target="_blank"
                rel="noopener"
                className="btn btn-outline justify-center"
              >
                {t("brochureCta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
        <DimRule label={t("currentKicker")} className="mb-8" />
        <div className="flex flex-wrap gap-4">
          {sponsors.map((s) => (
            <SponsorLogo key={s.name} sponsor={s} />
          ))}
          <OpenSponsorSlot label={t("openSlot")} />
        </div>
      </section>
    </>
  );
}
