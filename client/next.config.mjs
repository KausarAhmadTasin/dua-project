// next.config.mjs
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  babel: {
    presets: ["next/babel"],
  },
};

export default nextConfig;
