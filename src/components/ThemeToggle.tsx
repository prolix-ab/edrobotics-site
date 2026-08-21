"use client";

import { useTranslations } from "next-intl";
import { useLayoutEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.getAttribute("data-theme") === "dark";
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const t = useTranslations("theme");
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // React Strict Mode remounts the tree in development and resets attributes
  // the inline theme script set on <html>. Re-apply the stored value here so
  // dev doesn't flash back to the default; this is a no-op in production.
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        document.documentElement.setAttribute("data-theme", stored);
      }
    } catch {}
  }, []);

  function toggle() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={t("toggle")}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent-text"
    >
      {isDark ? <SunIcon className="h-[18px] w-[18px]" /> : <MoonIcon className="h-[18px] w-[18px]" />}
    </button>
  );
}
