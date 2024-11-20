import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/entrega-site',
  assetPrefix: '/entrega-site/',
  images: {
    loader: 'default',
    path: '/entrega-site/_next/image',
  },
  output: 'export',
};

export default nextConfig;