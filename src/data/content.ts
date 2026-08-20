export const navItems = [
  { num: "01", label: "Hem", href: "/" },
  { num: "02", label: "Om oss", href: "/om-oss" },
  { num: "03", label: "Partners", href: "/partners" },
  { num: "04", label: "Blogg", href: "/blogg" },
  { num: "05", label: "Media", href: "/media" },
  { num: "06", label: "EDRC", href: "/edrc" },
  { num: "07", label: "Kontakt", href: "/kontakt" },
] as const;

const galleryAltOverrides: Record<number, string> = {
  1: "ED Robotics-laget med sin tävlingsrobot vid FRC",
  33: "Empire State Plaza i Albany, New York, nattetid",
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = Array.from({ length: 33 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery/gallery-${n}.jpg`,
    alt: galleryAltOverrides[i + 1] ?? `Bild ${i + 1} från ED Robotics verkstad och tävlingar`,
  };
});

export type Sponsor = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const sponsors: Sponsor[] = [
  { name: "Husqvarna", logo: "/images/sponsors/husqvarna.svg", width: 300, height: 56 },
  { name: "LM Metall", logo: "/images/sponsors/lm-metall.svg", width: 142, height: 106 },
  { name: "DIVID", logo: "/images/sponsors/divid.png", width: 300, height: 300 },
  { name: "Flintab", logo: "/images/sponsors/flintab.svg", width: 300, height: 112 },
  { name: "Transab", logo: "/images/sponsors/transab.jpg", width: 300, height: 65 },
  { name: "Habo Utveckling", logo: "/images/sponsors/habo-utveckling.svg", width: 300, height: 36 },
  { name: "Etteplan", logo: "/images/sponsors/etteplan.svg", width: 117, height: 150 },
  { name: "NOMO", logo: "/images/sponsors/nomo.svg", width: 300, height: 57 },
  { name: "SmålandsBussen", logo: "/images/sponsors/smb.png", width: 300, height: 61 },
];

export const socialLinks = [
  { name: "Instagram", handle: "@ed_robotics", href: "https://www.instagram.com/ed_robotics" },
  {
    name: "Facebook",
    handle: "ED Robotics",
    href: "https://www.facebook.com/people/ED-Robotics/61587017998617",
  },
  { name: "LinkedIn", handle: "ED Robotics", href: "https://www.linkedin.com/company/edrobotics" },
  { name: "YouTube", handle: "@EDRobotics9750", href: "https://www.youtube.com/@EDRobotics9750" },
] as const;

export type EdrcEvent = {
  id: string;
  title: string;
  meta: string;
  overview: string;
  points: { label: string; value: string }[];
  structure?: string;
  defaultOpen?: boolean;
};

export const edrcEvents: EdrcEvent[] = [
  {
    id: "edrc-2024",
    title: 'EDRC 2024 — "Summit Sprint"',
    meta: "64 deltagare · Åk 1 · 5 juni 2024",
    overview:
      "Två lag tävlar om att poängsätta bollar i sina färgade målzoner, med hjälp av en människospelare utanför fältet. Matchen inleds med 15 sekunders autonomt läge innan förarna tar över i 2 minuter och 15 sekunder. I slutskedet kan robotarna klättra upp på plattformar för bonuspoäng. Laget med högst poäng vinner.",
    points: [
      { label: "Boll i låg zon", value: "1 p" },
      { label: "Boll i hög zon", value: "3 p" },
      { label: "Autonomt läge (multiplikator)", value: "×3" },
      { label: "Parkering — Orange", value: "3 p" },
      { label: "Parkering — Grön", value: "6 p" },
      { label: "Parkering — Rosa", value: "12 p" },
    ],
    structure:
      "Kvalmatcher avgör rankingpoäng och seedning. De åtta högst rankade lagen blir alliansledare och väljer varsitt lag i två urvalsrundor. I slutspelet möts allianserna i en bäst-av-tre-serie utan rankingpoäng — bara vinst, förlust eller oavgjort.",
    defaultOpen: true,
  },
  {
    id: "edrc-2023",
    title: "EDRC 2023",
    meta: "Årskurs 1 · Verkstaden, A-huset",
    overview:
      "Två allianser — röd och blå — tävlar om att samla in och poängsätta sin tilldelade färg av bollar i en gemensam mittzon, med stöd av en människospelare. Efter 15 sekunders autonomt läge (3x poäng) tar förarna över i 2 minuter och 15 sekunder innan robotarna klättrar upp på ramper för bonuspoäng.",
    points: [
      { label: "Boll i mittzon (lila)", value: "1 p" },
      { label: "Boll i tornet (gult)", value: "3 p" },
      { label: "Ramp — Orange", value: "3 p" },
      { label: "Ramp — Grön", value: "6 p" },
      { label: "Ramp — Rosa", value: "12 p" },
    ],
  },
];
