import type { Metadata } from "next";
import { DimRule, Eyebrow, SpecCard, SpecRow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Om oss | ED Robotics",
  description: "Lär känna ED Robotics — vilka vi är, vad vi gör och var vi träffas.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-7 pb-4 pt-14">
        <Eyebrow>Om föreningen</Eyebrow>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Vilka vi är</h2>
        <p className="mb-4 max-w-[74ch] text-lg text-muted">
          ED Robotics är en robotklubb etablerad i Erik Dahlbergsgymnasiet, Jönköping. Vårt mål är att inte
          bara ge ED:s studenter möjligheten att delta i spännande och lärorika robotprojekt, utan också att
          bygga en varm och framgångsrik gemenskap av framtida ingenjörer.
        </p>
        <p className="max-w-[74ch] text-lg text-muted">
          ED Robotics grundades 2022 och vi arbetar för närvarande med flera oberoende robotprojekt,
          framför allt RoboCup och FRC. Hjälp oss att bygga robotar som går, rullar, simmar, flyger, spelar
          fotboll och till och med navigerar på Mars!
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-14">
        <DimRule label="Vad vi gör" className="mb-8" />
        <p className="max-w-[74ch] text-lg text-muted">
          Medlemmar får en chans att göra en betydande inverkan på ett komplext, multidisciplinärt och
          flerledat ingenjörsprojekt på en nivå som de flesta gymnasieelever normalt inte möter. Som medlem
          får du erfarenhet av fräsning, 3D-utskrift, mikrokontroller, elektronik, kodningsspråk,
          hårdvara–mjukvara-integration, algoritmer och mycket mer.
        </p>
        <p className="mt-3.5 max-w-[74ch] text-lg text-muted">
          Ingen tidigare erfarenhet av robotteknik är nödvändig, men en vilja att lära sig och att lägga ner
          tid krävs. Vill du bygga några coola robotar och ha kul medan du håller på? Gå med!
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pt-14">
        <DimRule label="Tävlingar" className="mb-8" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel p-6">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-accent-text">
              FIRST Robotics Competition
            </span>
            <h4 className="mb-2.5 mt-2 font-display text-xl font-extrabold tracking-tight">FRC</h4>
            <p className="text-sm text-muted">
              I FIRST Robotics Competition kombineras sportens spänning med vetenskapens och teknikens
              stränghet – kallad &quot;den ultimata sporten för hjärnan&quot;. Under strikta regler,
              begränsade resurser och begränsad tid utmanas lag att samla in pengar, designa ett
              lag-&quot;varumärke&quot;, finslipa teamwork och bygga samt programmera robotar i industriell
              storlek för att spela ett svårt fältspel mot likasinnade konkurrenter. Frivilliga
              professionella mentorer lånar ut sin tid och talang för att vägleda varje lag.
            </p>
          </div>
          <div className="panel p-6">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-accent-text">
              RoboCup Junior
            </span>
            <h4 className="mb-2.5 mt-2 font-display text-xl font-extrabold tracking-tight">RoboCup</h4>
            <p className="text-sm text-muted">
              RoboCup Junior är en projektorienterad robottävling för elever till och med 19 år, med fokus
              på att skapa en miljö där eleverna växer genom att utöka sina kunskaper, väcka nyfikenhet och
              bli bekväma med teknik. Tävlingen har tre grenar — Soccer, Rescue och OnStage — var och en
              byggd kring samarbetsvillig problemlösning för kreativa unga hjärnor med olika intressen och
              färdigheter.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
        <DimRule label="Var vi träffas" className="mb-8" />
        <SpecCard className="max-w-[480px]">
          <SpecRow k="Dagar" v="Onsdag + Torsdag" />
          <SpecRow k="Tid" v="Efter lektionstid" />
          <SpecRow k="Plats" v="Verkstaden, A-huset" />
          <SpecRow k="Skola" v="Erik Dahlbergsgymnasiet" />
        </SpecCard>
      </section>
    </>
  );
}
