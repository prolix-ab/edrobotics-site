"use client";

import { useState } from "react";
import type { EdrcEvent } from "@/data/content";

export default function EdrcAccordion({ events }: { events: EdrcEvent[] }) {
  const [openId, setOpenId] = useState<string | null>(
    events.find((e) => e.defaultOpen)?.id ?? null
  );

  return (
    <div className="flex flex-col gap-5">
      {events.map((event) => {
        const isOpen = openId === event.id;
        return (
          <div key={event.id} className="panel overflow-hidden">
            <button
              onClick={() => setOpenId(isOpen ? null : event.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div>
                <h3 className="text-xl font-bold tracking-normal">{event.title}</h3>
                <div className="mt-1.5 font-mono text-[0.72rem] uppercase tracking-widest text-muted">
                  {event.meta}
                </div>
              </div>
              <span
                className={`shrink-0 font-mono text-lg text-accent-text transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-5 px-6 pb-7">
                  <div>
                    <h5 className="mb-1.5 font-mono text-[0.72rem] uppercase tracking-widest text-accent-text">
                      Kort översikt
                    </h5>
                    <p className="text-sm text-muted">{event.overview}</p>
                  </div>

                  <div>
                    <h5 className="mb-1.5 font-mono text-[0.72rem] uppercase tracking-widest text-accent-text">
                      Poängsättning
                    </h5>
                    <table className="w-full font-mono text-sm">
                      <tbody>
                        {event.points.map((row) => (
                          <tr key={row.label} className="border-t border-border first:border-t-0">
                            <td className="py-2 pr-2 text-muted">{row.label}</td>
                            <td className="py-2 text-right font-semibold tabular-nums">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {event.structure && (
                    <div>
                      <h5 className="mb-1.5 font-mono text-[0.72rem] uppercase tracking-widest text-accent-text">
                        Tävlingsstruktur
                      </h5>
                      <p className="text-sm text-muted">{event.structure}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
