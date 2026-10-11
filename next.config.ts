import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Serve modern formats; product renders added later will use next/image.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
