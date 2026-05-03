import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Wildcard — allow any https hostname so no image ever fails to load
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
