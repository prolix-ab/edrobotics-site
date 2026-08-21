import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { DimRule, LinkCard, OpenSponsorSlot, SponsorLogo } from "@/components/ui";
import { sponsors } from "@/data/content";

export async function generateMetadata(props: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "home.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tp = await getTranslations("partners");

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 pb-14 pt-16">
        <div className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl p-8 sm:min-h-[480px] sm:p-12">
          <Image
            src="/images/gallery/gallery-01.jpg"
            alt="ED Robotics-laget firar med sin tävlingsrobot"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />

          <h1 className="font-display text-[2.8rem] font-extrabold leading-[0.98] tracking-tight text-white sm:text-[4.4rem] lg:text-[5.2rem]">
            {t("heroTitle1")}
            <br />
            {t("heroTitle2")}
            <br />
            <span className="text-accent">{t("heroTitleAccent")}</span>
          </h1>
          <p className="mb-7 mt-6 max-w-[46ch] text-lg text-white/85">{t("heroLede")}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/partners" className="btn btn-primary">
              {t("ctaPartner")}
            </Link>
            <Link href="/kontakt" className="btn border-white/40 text-white hover:border-accent">
              {t("ctaJoin")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7">
        <div className="panel p-9">
          <div className="grid gap-9 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="badge-live mb-4">
                <span className="dot" />
                {t("bulletinBadge")}
              </span>
              <h3 className="mb-3.5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {t("bulletinTitle")}
              </h3>
              <p className="mb-3.5 text-muted">{t("bulletinP1")}</p>
              <p className="mb-3.5 text-muted">{t("bulletinP2")}</p>
              <p className="mt-4 text-sm italic text-muted-2">{t("bulletinThanks")}</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Link href="/blogg/frc-orlando-2026-sa-gick-det" className="btn btn-primary justify-center">
                {t("bulletinCtaRecap")}
              </Link>
              <Link href="/partners" className="btn btn-outline justify-center">
                {t("bulletinCtaSupport")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-16">
        <DimRule label={t("loveTechKicker")} className="mb-10" />
        <div className="grid gap-5 md:grid-cols-3">
          <LinkCard
            href="/om-oss"
            tag={t("card1Tag")}
            title={t("card1Title")}
            image={{ src: "/images/gallery/gallery-06.jpg", alt: "Medlemmar bygger och justerar tävlingsroboten" }}
          >
            {t("card1Body")}
          </LinkCard>
          <LinkCard
            href="/blogg/rookie-allstars"
            tag={t("card2Tag")}
            title={t("card2Title")}
            image={{ src: "/images/gallery/gallery-33.jpg", alt: "Empire State Plaza i Albany, New York, nattetid" }}
          >
            {t("card2Body")}
          </LinkCard>
          <LinkCard href="/partners" tag={t("card3Tag")} title={t("card3Title")}>
            {t("card3Body")}
          </LinkCard>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-16">
        <DimRule label={t("seasonKicker")} className="mb-10" />
        <div className="rounded-[14px] bg-surface-3 p-9">
          <div className="grid items-center gap-7 sm:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("seasonTitle")}</h3>
              <p className="mt-2.5 text-muted">{t("seasonBody")}</p>
            </div>
            <a
              href="https://youtu.be/MXsK6zBDzVM?si=qCxQSKZZFa7eOA5P"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              {t("seasonCta")}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-16">
        <DimRule label={t("sponsorsKicker")} className="mb-10" />
        <div className="flex flex-wrap gap-4">
          {sponsors.map((s) => (
            <SponsorLogo key={s.name} sponsor={s} />
          ))}
          <OpenSponsorSlot label={tp("openSlot")} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 py-16">
        <div className="panel px-9 py-14 text-center">
          <h3 className="mx-auto mb-3.5 max-w-none text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t("challengeTitle")}
          </h3>
          <p className="mx-auto mb-7 max-w-[56ch] text-muted">{t("challengeBody")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontakt" className="btn btn-primary">
              {t("challengeCtaJoin")}
            </Link>
            <Link href="/om-oss" className="btn btn-outline">
              {t("challengeCtaAbout")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
