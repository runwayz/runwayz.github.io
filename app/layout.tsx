import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Cabin — humanist sans in the Gill Sans / Edward Johnston tradition (OFL).
// Variable font, weights 400–700.
const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Runwayz",
  description:
    "Connecting talent to opportunity through the organizations they already trust.",
};

// Runs before paint to set the theme class — prevents a flash of the wrong mode.
const noFlashScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

// Google tag (gtag.js)
const gtagScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-HN9Z8V2CB1');`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cabin.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-contrast"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main
          id="content"
          className="mx-auto w-full max-w-6xl flex-1 px-6 py-12"
        >
          {children}
        </main>
        <SiteFooter />
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HN9Z8V2CB1" />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{ __html: gtagScript }}
      />
    </html>
  );
}
