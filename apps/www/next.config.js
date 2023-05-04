const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // typedRoutes: true,
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
