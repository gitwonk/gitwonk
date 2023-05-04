export default async function sitemap() {
  const routes = ["", "/get-early-access", "/blog"].map((route) => ({
    url: `https://gitwonk.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}

// TODO: add blog posts to sitemap once they are published
