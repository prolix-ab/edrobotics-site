import type { Metadata } from "next";
import { DimRule, Eyebrow } from "@/components/ui";
import { galleryImages, socialLinks } from "@/data/content";
import { socialIconByName } from "@/components/icons";
import MediaGallery from "@/components/MediaGallery";

export const metadata: Metadata = {
  title: "Media | ED Robotics",
  description: "Bilder och video från ED Robotics verkstad och tävlingar.",
};

export default function MediaPage() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-20 pt-14">
      <Eyebrow>Bilder &amp; video</Eyebrow>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Bilder från verkstaden och tävlingsfältet
      </h2>
      <p className="mb-10 max-w-[60ch] text-muted">
        Ett urval från säsongerna i verkstaden, på RoboCup och på FRC-fältet i USA. Fler bilder och video
        hittar du på våra sociala kanaler nedan.
      </p>

      <MediaGallery images={galleryImages} />

      <DimRule label="Följ oss" className="mb-8 mt-14" />
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
