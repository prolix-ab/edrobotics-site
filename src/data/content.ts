export const navItems = [
  { num: "01", label: "Hem", href: "/" },
  { num: "02", label: "Om oss", href: "/om-oss" },
  { num: "03", label: "Partners", href: "/partners" },
  { num: "04", label: "Blogg", href: "/blogg" },
  { num: "05", label: "Media", href: "/media" },
  { num: "06", label: "Kontakt", href: "/kontakt" },
] as const;

const galleryAltOverrides: Record<number, string> = {
  1: "ED Robotics-laget med sin tävlingsrobot vid FRC",
  33: "Empire State Plaza i Albany, New York, nattetid",
  34: "Laget boardar flygplanet på Landvetter, på väg mot FRC Orlando 2026",
  35: "Laget arbetar på roboten i depån under FRC Orlando 2026",
  36: "Roboten styrs från förarstationen under en match i Orlando",
  37: "Laget utanför Addition Financial Arena i Orlando med svenska flaggan",
  38: "Kennedy Space Center i Florida",
  39: "Laget på stranden i solnedgången, Orlando 2026",
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = Array.from({ length: 39 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery/gallery-${n}.jpg`,
    alt: galleryAltOverrides[i + 1] ?? `Bild ${i + 1} från ED Robotics verkstad och tävlingar`,
  };
});

export type Sponsor = {
  name: string;
  logo?: string;
  width?: number;
  height?: number;
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
  { name: "Syskonen Inger och Sixten Norheds stiftelse" },
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
