import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
        Hello 👋
      </p>
      <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-tight">
        A marketing site you control, with a CMS your team will love.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
        Hand-built pages for pixel-perfect design, plus a Sanity-powered blog and
        case studies your team edits in a real web GUI — no code required.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/case-studies"
          className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
        >
          View Case Studies
        </Link>
        <Link
          href="/blog"
          className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          Read the Blog
        </Link>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { title: "Designed in code", body: "Marketing & content templates we own end-to-end." },
          { title: "Edited in a GUI", body: "Your team logs into Sanity Studio to publish." },
          { title: "HubSpot ready", body: "Drop forms anywhere, even mid-article." },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
