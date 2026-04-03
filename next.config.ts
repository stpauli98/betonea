import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'betonea.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
