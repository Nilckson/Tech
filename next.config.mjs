/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    isrFlushToDisk: false,
  },
};

export default nextConfig;