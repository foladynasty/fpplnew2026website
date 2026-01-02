import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',  // Creates standalone build for easier deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

