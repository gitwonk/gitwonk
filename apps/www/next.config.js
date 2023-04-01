const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // typedRoutes: true,
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
