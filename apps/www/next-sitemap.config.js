/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://gitwonk.com",
  generateRobotsTxt: true,
  exclude: ["/404"],
};
