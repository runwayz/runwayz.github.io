import type { ReactNode } from "react";
import { Hero } from "@/components/Hero";
import { ServeCTA } from "@/components/ServeCTA";

type Scrim = "none" | "dark" | "warm";

type PageTemplateProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Hero CTA(s). Left-aligned, per the hero exception to the centering rule. */
  heroCta?: ReactNode;
  /** Optional hero background image. Omit for a text hero. */
  image?: string;
  scrim?: Scrim;
  /** Content blocks rendered between the hero and the closing CTA. */
  children: ReactNode;
  /** Render the standard closing CTA band. Default true; pass false for pages
      (e.g. legal) where a demo CTA does not belong. */
  closingCta?: boolean;
};

// The standard content-page template: a standard hero (text or image), content
// blocks in the middle, and an optional closing CTA band. Every top-level page
// except the homepage should build from this. Content variety comes from the
// blocks dropped in as children, never from bespoke one-off chrome.
export function PageTemplate({
  eyebrow,
  title,
  subtitle = "",
  heroCta,
  image,
  scrim,
  children,
  closingCta = true,
}: PageTemplateProps) {
  return (
    <div>
      <Hero eyebrow={eyebrow} title={title} subtitle={subtitle} image={image} scrim={scrim}>
        {heroCta}
      </Hero>
      {children}
      {closingCta ? <ServeCTA /> : null}
    </div>
  );
}
