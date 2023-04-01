import { NavBarType, SiteMeta } from "types";

export const siteMeta: SiteMeta = {
  title:
    "GitWonk: Write Technical Documentation with Superpowers. An open-source, self-hosted alternative to GitBook, Confluence, and Archbee",
  templateTitle: "GitWonk",
  description:
    "GitWonk is an open-source technical documentation platform. Helping small teams and enterprises to effortlessly write product docs, knowledge bases, API docs, developer guides, and more.",
  url: "https://gitwonk.com",
  links: {
    twitter: "https://twitter.com/gitwonk",
    github: "https://github.com/gitwonk/gitwonk",
  },
};

export const navBarItems: NavBarType = [
  {
    title: "Blog",
    href: "/blog",
    transitionDelay: "150ms",
  },
  {
    title: "Discord",
    href: "https://discord.gg/XvprRWPZKK",
    transitionDelay: "200ms",
  },
  {
    title: "GitHub",
    href: "https://github.com/gitwonk/gitwonk",
    transitionDelay: "225ms",
  },
];
