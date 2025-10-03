import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trae-api-us.mchost.guru",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
