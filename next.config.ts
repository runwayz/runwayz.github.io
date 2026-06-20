import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: emits a fully static site to ./out for GitHub Pages.
  // No Node server at runtime, so SSR and ISR (`revalidate`) do not run —
  // content is fetched from Sanity at BUILD time. The Sanity webhook
  // (repository_dispatch) rebuilds the site when content changes.
  output: "export",

  // GitHub Pages has no image-optimization server; serve images as-authored.
  images: { unoptimized: true },

  // Emit `route/index.html` so paths resolve as static files on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
