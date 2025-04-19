import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  env: {
    PORT: "8080",
  },
};

export default nextConfig;
