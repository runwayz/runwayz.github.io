import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Runwayz",
  description: "Marketing site powered by Next.js + Sanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <header className="border-b border-gray-100">
          <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Runwayz
            </Link>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/case-studies" className="hover:text-gray-900">
                Case Studies
              </Link>
              <Link href="/blog" className="hover:text-gray-900">
                Blog
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-gray-100">
          <div className="mx-auto w-full max-w-5xl px-6 py-8 text-sm text-gray-400">
            © 2026 Runwayz · Built with Next.js + Sanity
          </div>
        </footer>
      </body>
    </html>
  );
}
