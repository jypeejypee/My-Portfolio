import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Smaller bundles for the icon library
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
