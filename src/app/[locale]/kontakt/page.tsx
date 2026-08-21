import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Eyebrow } from "@/components/ui";
import { socialLinks } from "@/data/content";
import { ClockIcon, MailIcon, PinIcon, socialIconByName } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(props: PageProps<"/[locale]/kontakt">): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage(props: PageProps<"/[locale]/kontakt">) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
      <Eyebrow>{t("kicker")}</Eyebrow>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{t("title")}</h2>
      <p className="mb-10 max-w-[60ch] text-muted">{t("intro")}</p>

      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <div className="panel h-fit p-7">
          <div className="flex gap-3.5 py-3.5 first:pt-0">
            <MailIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-text" />
            <div>
              <span className="mb-0.5 block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                {t("sponsorshipLabel")}
              </span>
              <a href="mailto:sponsorship@edrobotics.se" className="hover:text-accent-text">
                sponsorship@edrobotics.se
              </a>
            </div>
          </div>

          <div className="flex gap-3.5 border-t border-border py-3.5">
            <PinIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-text" />
            <div>
              <span className="mb-0.5 block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                {t("placeLabel")}
              </span>
              {t("placeValue")}
              <br />
              {t("placeValue2")}
            </div>
          </div>

          <div className="flex gap-3.5 border-t border-border py-3.5">
            <ClockIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-text" />
            <div>
              <span className="mb-0.5 block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                {t("openHouseLabel")}
              </span>
              {t("openHouseValue")}
            </div>
          </div>

          <div className="flex gap-3.5 border-t border-border pb-0 pt-3.5">
            <div className="mt-0.5 h-[18px] w-[18px] shrink-0" />
            <div>
              <span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                {t("socialLabel")}
              </span>
              <div className="flex gap-2.5">
                {socialLinks.map((s) => {
                  const Icon = socialIconByName[s.name];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={s.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent"
                    >
                      <Icon className="h-[15px] w-[15px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
