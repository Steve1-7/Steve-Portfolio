import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
    unoptimized: true, // For local images in public folder
  },
  // Allow iframes and external content
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' http: https:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
