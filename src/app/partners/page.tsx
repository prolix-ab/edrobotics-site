import type { Metadata } from "next";
import { DimRule, Eyebrow, OpenSponsorSlot, SponsorLogo } from "@/components/ui";
import { sponsors } from "@/data/content";

export const metadata: Metadata = {
  title: "Partners | ED Robotics",
  description: "Bli partner med ED Robotics och stötta framtidens ingenjörer.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-7 pb-4 pt-14">
        <Eyebrow>Samarbete</Eyebrow>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Våra sponsorer gör
          <br />
          ED Robotics möjligt
        </h2>
        <p className="max-w-[74ch] text-lg text-muted">
          Att bygga robotar är roligt, men utrustning och material är inte billiga, och i takt med att vi
          expanderar ökar även våra driftskostnader. Ert stöd till vår klubb exponerar inte bara era
          produkter och uppdrag för Erik Dahlbergs studenter och allmänheten — det genererar också
          meningsfulla utbildnings- och professionella möjligheter för våra blivande ingenjörer.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-12">
        <div className="panel p-9">
          <div className="grid gap-9 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="kicker mb-4">Sponsorpaket</span>
              <h3 className="mb-3.5 max-w-none text-2xl font-extrabold tracking-tight sm:text-3xl">
                Bidra ekonomiskt, med material eller expertis
              </h3>
              <p className="text-muted">
                Vi har ett urval av sponsorpaket för företag och privatpersoner som vill stötta oss. Om du
                vill bidra ekonomiskt, alternativt med material, komponenter eller expertis, kontakta oss
                gärna direkt.
              </p>
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
                Ladda ner broschyr
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
        <DimRule label="Nuvarande partners" className="mb-8" />
        <div className="flex flex-wrap gap-4">
          {sponsors.map((s) => (
            <SponsorLogo key={s.name} sponsor={s} />
          ))}
          <OpenSponsorSlot />
        </div>
      </section>
    </>
  );
}
