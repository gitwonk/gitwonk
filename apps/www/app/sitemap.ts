import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://gitwonk.com/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "/get-early-access", "/blog"].map((route) => ({
    url: `https://gitwonk.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
