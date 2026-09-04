import type { NextConfig } from "next";

// This checks if Next.js is running the 'build' command for production
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
  },
  // Only apply the prefix when building for GitHub pages!
  basePath: isProd ? "/shalom-movers" : "",
  assetPrefix: isProd ? "/shalom-movers" : "",
};

export default nextConfig;