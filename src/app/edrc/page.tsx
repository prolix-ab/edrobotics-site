import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { edrcEvents } from "@/data/content";
import EdrcAccordion from "@/components/EdrcAccordion";

export const metadata: Metadata = {
  title: "EDRC | ED Robotics",
  description: "Erik Dahlberg Robotics Competition — regler och poängsättning för EDRC 2024 och 2023.",
};

export default function EdrcPage() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
      <Eyebrow>Skoltävling</Eyebrow>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Erik Dahlberg Robotics Competition
      </h2>
      <p className="mb-10 max-w-[66ch] text-muted">
        Vår egen skoltävling där elever från årskurs 1 bygger och programmerar robotar under en intensiv
        tävlingsdag i verkstaden — en av vårens mest efterlängtade händelser på Erik Dahlbergsgymnasiet.
      </p>

      <EdrcAccordion events={edrcEvents} />
    </section>
  );
}
