"use client";

import { useState, type FormEvent } from "react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nytt meddelande från edrobotics.se");
    formData.append("from_name", "ED Robotics — kontaktformulär");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        // form.reset() fires a native "reset" event, which our onReset
        // handler below turns into setStatus("idle") — reset the fields
        // first, then set the final status so it isn't clobbered.
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} onReset={() => setStatus("idle")}>
      {/* Honeypot — bots tend to fill hidden fields, humans never see this */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="cf-name" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted">
          Namn *
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          placeholder="Ditt namn"
          className="rounded-lg border border-border bg-surface-2 px-3.5 py-3 text-[0.98rem] focus:border-accent focus:outline-none"
        />
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="cf-email" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted">
          E-post *
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          placeholder="Din e-postadress"
          className="rounded-lg border border-border bg-surface-2 px-3.5 py-3 text-[0.98rem] focus:border-accent focus:outline-none"
        />
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="cf-msg" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted">
          Meddelande *
        </label>
        <textarea
          id="cf-msg"
          name="message"
          required
          placeholder="Skriv ditt meddelande här"
          rows={5}
          className="resize-y rounded-lg border border-border bg-surface-2 px-3.5 py-3 text-[0.98rem] focus:border-accent focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {status === "sending" ? "Skickar…" : "Skicka"}
        </button>
        <button type="reset" className="btn btn-outline">
          Återställ
        </button>
      </div>

      {status === "success" && (
        <div className="mt-4 rounded-lg border border-ok bg-ok/10 px-4 py-3.5 font-mono text-[0.82rem] text-ok">
          ✓ Tack! Ditt meddelande är skickat.
        </div>
      )}
      {status === "error" && !ACCESS_KEY && (
        <div className="mt-4 rounded-lg border border-border bg-surface-2 px-4 py-3.5 font-mono text-[0.74rem] text-muted">
          Formuläret är inte konfigurerat ännu — lägg till NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY i .env.local.
        </div>
      )}
      {status === "error" && ACCESS_KEY && (
        <div className="mt-4 rounded-lg border border-border bg-surface-2 px-4 py-3.5 font-mono text-[0.74rem] text-muted">
          Något gick fel. Prova igen, eller maila oss direkt på sponsorship@edrobotics.se.
        </div>
      )}
    </form>
  );
}
