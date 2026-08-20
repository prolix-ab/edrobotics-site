import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { socialLinks } from "@/data/content";
import { ClockIcon, MailIcon, PinIcon, socialIconByName } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | ED Robotics",
  description: "Kontakta ED Robotics — frågor, partnerskap eller medlemskap.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
      <Eyebrow>Hör av dig</Eyebrow>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Kontakta oss</h2>
      <p className="mb-10 max-w-[60ch] text-muted">
        Har du en fråga, vill bli partner eller är nyfiken på att gå med i teamet? Använd formuläret eller
        nå oss direkt.
      </p>

      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <div className="panel h-fit p-7">
          <div className="flex gap-3.5 py-3.5 first:pt-0">
            <MailIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-text" />
            <div>
              <span className="mb-0.5 block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                Sponsring
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
                Plats
              </span>
              Verkstaden, A-huset
              <br />
              Erik Dahlbergsgymnasiet, Jönköping
            </div>
          </div>

          <div className="flex gap-3.5 border-t border-border py-3.5">
            <ClockIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-text" />
            <div>
              <span className="mb-0.5 block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                Öppet hus
              </span>
              Onsdagar &amp; torsdagar, efter lektionstid
            </div>
          </div>

          <div className="flex gap-3.5 border-t border-border pb-0 pt-3.5">
            <div className="mt-0.5 h-[18px] w-[18px] shrink-0" />
            <div>
              <span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                Sociala kanaler
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
