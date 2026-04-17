import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required because Cloudflare Pages doesn't support Next.js's default Image Optimization
  },
  // Configure runtime for Cloudflare Pages
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
