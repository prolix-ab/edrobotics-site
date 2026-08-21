import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Sponsor } from "@/data/content";

export function DimRule({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`kicker ${className}`}>{label}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="kicker mb-4">{children}</div>;
}

export function SpecRow({ k, v, valueClass = "" }: { k: string; v: ReactNode; valueClass?: string }) {
  return (
    <div className="flex justify-between border-t border-border py-2.5 first:border-t-0 first:pt-0">
      <span className="text-muted">{k}</span>
      <span className={`text-right font-semibold ${valueClass}`}>{v}</span>
    </div>
  );
}

export function SpecCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`panel p-6 font-mono text-[0.85rem] ${className}`}>{children}</div>;
}

export function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  if (!sponsor.logo) {
    return (
      <div
        className="panel flex h-28 flex-1 basis-[180px] items-center justify-center p-4 text-center"
        title={sponsor.name}
      >
        <span className="font-display text-[1.05rem] font-extrabold leading-tight tracking-tight text-muted opacity-70 transition-opacity duration-200 hover:opacity-100 hover:text-ink">
          {sponsor.name}
        </span>
      </div>
    );
  }

  return (
    <div className="panel flex h-28 flex-1 basis-[180px] items-center justify-center p-6" title={sponsor.name}>
      {/* eslint-disable-next-line @next/next/no-img-element -- mixed svg/png/jpg/bmp logos aren't supported by next/image's optimizer without extra config */}
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        width={sponsor.width}
        height={sponsor.height}
        className="max-h-16 w-auto max-w-full object-contain grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
      />
    </div>
  );
}

export function OpenSponsorSlot() {
  return (
    <div className="flex h-28 flex-1 basis-[180px] items-center justify-center rounded-[14px] border border-dashed border-border p-6 text-center font-mono text-[0.72rem] font-medium uppercase tracking-widest text-muted-2">
      + Bli vår nästa partner
    </div>
  );
}

export function LinkCard({
  href,
  tag,
  title,
  image,
  children,
}: {
  href: string;
  tag: string;
  title: string;
  image?: { src: string; alt: string };
  children: ReactNode;
}) {
  return (
    <Link href={href} className="card-link flex flex-col overflow-hidden text-left">
      {image && (
        <div className="relative aspect-[4/3] w-full">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-7">
        <span className="font-mono text-[0.68rem] uppercase tracking-widest text-accent-text">{tag}</span>
        <h4 className="font-display text-[1.15rem] font-extrabold tracking-tight">{title}</h4>
        <p className="text-sm text-muted">{children}</p>
      </div>
    </Link>
  );
}
