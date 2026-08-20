import Link from "next/link";
import { navItems, socialLinks } from "@/data/content";
import { LogoMark, Wordmark, socialIconByName } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border px-7 pb-7 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-logo">
              <LogoMark className="h-5 w-5" />
              <Wordmark className="text-xl" />
            </div>
            <p className="mt-3 max-w-[32ch] text-sm text-muted">
              En förening som inspirerar och skapar framtidens innovatörer. Erik Dahlbergsgymnasiet,
              Jönköping.
            </p>
          </div>

          <div>
            <h5 className="mb-3.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-2">Sidor</h5>
            <ul className="flex flex-col gap-2.5">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-accent-text">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-3.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-2">Mer</h5>
            <ul className="flex flex-col gap-2.5">
              {navItems.slice(4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-accent-text">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:sponsorship@edrobotics.se" className="text-sm hover:text-accent-text">
                  Sponsring
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-2">
              Följ oss
            </h5>
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent-text"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[0.72rem] text-muted-2">
          <span>© 2026 ED Robotics — fristående förening vid Erik Dahlbergsgymnasiet</span>
          <span>Jönköping, Sverige</span>
        </div>
      </div>
    </footer>
  );
}
