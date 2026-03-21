import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static upload
  images: {
    unoptimized: true, // Required because Cloudflare Pages doesn't support Next.js's default Image Optimization
  },
  // Optional: if your project is in a subfolder like 'my-site'
  // basePath: '/my-site', 
};

export default nextConfig;