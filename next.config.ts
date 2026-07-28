import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dev-only: the local WordPress container resolves to a private IP,
    // which the image optimizer otherwise refuses to fetch (SSRF guard).
    // Harmless in production, where the CMS host is public.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Local headless WordPress (docker-compose.yml). For production,
        // add the live CMS host here — featured images are served from it.
        protocol: "http",
        hostname: "localhost",
        port: "8080",
      },
    ],
  },
};

export default nextConfig;
