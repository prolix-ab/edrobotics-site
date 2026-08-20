import Image from "next/image";
import { DimRule, LinkCard, OpenSponsorSlot, SponsorLogo } from "@/components/ui";
import { sponsors } from "@/data/content";

export default function HomePage() {
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
            Vi bygger
            <br />
            framtidens
            <br />
            <span className="text-accent">ingenjörer.</span>
          </h1>
          <p className="mb-7 mt-6 max-w-[46ch] text-lg text-white/85">
            ED Robotics är en förening som inspirerar och skapar framtidens innovatörer — byggd av
            gymnasieelever på Erik Dahlbergsgymnasiet i Jönköping.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/partners" className="btn btn-primary">
              Bli partner
            </a>
            <a href="/kontakt" className="btn border-white/40 text-white hover:border-accent">
              Gå med i teamet
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7">
        <div className="panel p-9">
          <div className="grid gap-9 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="badge-live mb-4">
                <span className="dot" />
                Aktuellt · FRC2026
              </span>
              <h3 className="mb-3.5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                ED Robotics åker till FRC i Orlando!
              </h3>
              <p className="mb-3.5 text-muted">
                Vi är stolta att kunna meddela att ED Robotics kommer att delta i FIRST Robotics
                Competition i Orlando, Florida – världens största robottävling för unga ingenjörer.
              </p>
              <p className="mb-3.5 text-muted">
                Nu behöver vi din hjälp för att göra resan möjlig. Bli partner och stötta framtidens
                ingenjörer, eller bidra som privatperson.
              </p>
              <p className="mt-4 text-sm italic text-muted-2">
                Tack för att du hjälper oss hela vägen till Orlando! ❤️
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a
                href="https://edrobotics.se/docs/ED_Robotics_2026.pdf"
                target="_blank"
                rel="noopener"
                className="btn btn-primary justify-center"
              >
                Läs vår broschyr
              </a>
              <a href="#" className="btn btn-outline justify-center">
                Bidra via GoFundMe
              </a>
              <a href="/partners" className="btn btn-ghost justify-center">
                Sponsorpaket
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-16">
        <DimRule label="Vi älskar teknik" className="mb-10" />
        <div className="grid gap-5 md:grid-cols-3">
          <LinkCard
            href="/om-oss"
            tag="Om föreningen"
            title="Vi älskar teknik"
            image={{ src: "/images/gallery/gallery-06.jpg", alt: "Medlemmar bygger och justerar tävlingsroboten" }}
          >
            Vad gör vi och var gör vi det? Läs om våra projekt, tävlingar och vardagen i verkstaden.
          </LinkCard>
          <LinkCard
            href="/blogg/rookie-allstars"
            tag="Reseberättelse"
            title="New York, New York"
            image={{ src: "/images/gallery/gallery-33.jpg", alt: "Empire State Plaza i Albany, New York, nattetid" }}
          >
            Under 2024 åkte vi till Albany, NY för att delta i First Robotics Competition.
          </LinkCard>
          <LinkCard href="/partners" tag="Samarbete" title="Bli partner med oss!">
            Vi har ett brett urval av sponsorpaket för företag som vill stötta unga ingenjörer.
          </LinkCard>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-16">
        <DimRule label="Season recap" className="mb-10" />
        <div className="rounded-[14px] bg-surface-3 p-9">
          <div className="grid items-center gap-7 sm:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Season Recap 2024</h3>
              <p className="mt-2.5 text-muted">
                Under 2024 var vi det enda laget från Sverige att delta i First Robotics Competition. Hur
                gick det till? Se hela resan i vår Season Recap.
              </p>
            </div>
            <a
              href="https://youtu.be/MXsK6zBDzVM?si=qCxQSKZZFa7eOA5P"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Se filmen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-16">
        <DimRule label="Våra sponsorer" className="mb-10" />
        <div className="flex flex-wrap gap-4">
          {sponsors.map((s) => (
            <SponsorLogo key={s.name} sponsor={s} />
          ))}
          <OpenSponsorSlot />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 py-16">
        <div className="panel px-9 py-14 text-center">
          <h3 className="mx-auto mb-3.5 max-w-none text-2xl font-extrabold tracking-tight sm:text-3xl">
            Redo för en utmaning?
          </h3>
          <p className="mx-auto mb-7 max-w-[56ch] text-muted">
            Om du gillar robotik, teknik eller helt enkelt en utmaning – gå med! Följ våra projekt och var
            med när vi tävlar i RoboCup och FIRST Robotics Competition i USA.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/kontakt" className="btn btn-primary">
              Gå med i teamet
            </a>
            <a href="/om-oss" className="btn btn-outline">
              Läs om oss
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
