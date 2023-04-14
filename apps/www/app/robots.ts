export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gitwonk.com/sitemap.xml",
    host: "https://gitwonk.com",
  };
}
