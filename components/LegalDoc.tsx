import type { ReactNode } from "react";

// A list item is either plain text or a bolded lead-in followed by text.
export type ListItem = string | { lead: string; text: string };

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: ReactNode }
  | { type: "ul"; items: ListItem[] };

// Renders a long-form legal document from a list of blocks, styled with the
// design tokens. Body is capped at a readable measure (max-w-3xl).
export function LegalDoc({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-10 max-w-3xl text-fg2 [&>*:first-child]:mt-0">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 text-2xl font-bold tracking-tight text-fg1">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 text-lg font-bold text-fg1">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mt-4 leading-[1.6]">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-4 list-disc space-y-2 pl-6 leading-[1.6] marker:text-fg3">
                {b.items.map((it, j) =>
                  typeof it === "string" ? (
                    <li key={j}>{it}</li>
                  ) : (
                    <li key={j}>
                      <span className="font-semibold text-fg1">{it.lead}</span> {it.text}
                    </li>
                  ),
                )}
              </ul>
            );
        }
      })}
    </div>
  );
}
