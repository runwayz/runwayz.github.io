"use client";

import { useEffect, useState } from "react";

// Boarding-pass "ticket" graphic — rotates through a few real-feeling outcomes.
// Always white (even in dark mode), with a Runwayz-blue header + a tear
// perforation under the job title.
const TICKETS = [
  { name: "Susan M.", career: "Carpentry", income: "$150K / yr", city: "Chicago, IL" },
  { name: "Marcus T.", career: "Electrician", income: "$98K / yr", city: "Houston, TX" },
  { name: "Dana R.", career: "Welding", income: "$110K / yr", city: "Detroit, MI" },
  { name: "Priya S.", career: "HVAC Tech", income: "$92K / yr", city: "Phoenix, AZ" },
];

export function TicketRotator() {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setActive((a) => (a + 1) % TICKETS.length);
        setShow(true);
      }, 300);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const t = TICKETS[active];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
      {/* Blue header — smooth edge, Runwayz mark */}
      <div className="flex items-center justify-between bg-[#1E88D6] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
        <span>Runwayz · Boarding Pass</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/runwayz-icon-dark.svg" alt="" className="h-5 w-auto" />
      </div>

      {/* Body */}
      <div className="px-6 pb-6 pt-5">
        <div
          className={`transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
          aria-live="polite"
        >
          <p className="text-[11px] uppercase tracking-wider text-gray-400">Passenger</p>
          <p className="text-lg font-bold text-gray-900">{t.name}</p>

          <p className="mt-4 text-[11px] uppercase tracking-wider text-gray-400">Now boarding</p>
          <p className="text-3xl font-bold tracking-tight text-[#14609F]">{t.career}</p>
        </div>

        {/* Tear perforation (replaces the divider under the job title) */}
        <div className="relative my-5 -mx-6">
          <div className="border-t-2 border-dashed border-gray-200" />
          <span className="absolute -left-2.5 top-0 h-5 w-5 -translate-y-1/2 rounded-full bg-page" />
          <span className="absolute -right-2.5 top-0 h-5 w-5 -translate-y-1/2 rounded-full bg-page" />
        </div>

        <div
          className={`transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400">Income</p>
              <p className="font-semibold text-gray-900">{t.income}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400">Based in</p>
              <p className="font-semibold text-gray-900">{t.city}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-1.5">
          {TICKETS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-[#1E88D6]" : "w-1.5 bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
