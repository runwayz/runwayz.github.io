import Link from "next/link";
import { HubSpotForm } from "@/components/HubSpotForm";

export const metadata = { title: "Get a demo · Runwayz" };

const AUDIENCES = [
  {
    title: "Trade Unions",
    href: "/unions",
    prop: "Turn early interest in your trade into apprenticeship applications and dues-paying members.",
  },
  {
    title: "Trade Associations",
    href: "/associations",
    prop: "Offer your member companies a vetted early-career talent pipeline, with ROI you can measure.",
  },
  {
    title: "Industry Employers",
    href: "/employers",
    prop: "Post jobs and internships, and hire vetted early-career talent filtered by region, interests, and skills.",
  },
  {
    title: "High Schools and Colleges",
    href: "/education",
    prop: "Help your students explore careers, build future-proof skills, and connect to real opportunities.",
  },
];

export default function ContactPage() {
  return (
    <div className="py-8">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Main: hero + form */}
        <div className="lg:col-span-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
            Get a demo
          </p>
          <h1 className="mt-4 max-w-2xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
            See a demo of Runwayz for your organization.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-[1.55] text-fg2">
            Tell us a bit about your team and we&apos;ll be in touch.
          </p>
          <div className="mt-10 max-w-xl">
            <HubSpotForm formId="158fa7a6-83ac-4a3c-b458-b018d7a5aa73" />
          </div>
        </div>

        {/* Sidebar: one panel per audience we serve */}
        <aside>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Who we serve</p>
          <div className="mt-4 space-y-4">
            {AUDIENCES.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group block rounded-2xl border border-border bg-surface p-5 hover:border-accent"
              >
                <h3 className="font-bold text-fg1">{a.title}</h3>
                <p className="mt-1 text-sm text-fg2">{a.prop}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
