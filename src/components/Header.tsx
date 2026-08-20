"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/content";
import { LogoMark, Wordmark } from "./icons";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-sm backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-7">
        <Link href="/" className="flex items-center gap-2 text-logo" onClick={() => setOpen(false)}>
          <LogoMark className="h-6 w-6" />
          <Wordmark className="text-2xl" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "border-accent text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Öppna meny"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-[18px] w-[18px]">
              <span
                className={`absolute left-0 block h-0.5 w-[18px] bg-ink transition-transform ${
                  open ? "top-2 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-[18px] bg-ink transition-transform ${
                  open ? "top-2 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col border-t border-border bg-surface-2 md:hidden">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-t border-border/60 px-7 py-3.5 text-sm first:border-t-0 ${
                  active ? "font-semibold text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
