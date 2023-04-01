/* Site Meta contains type definitions for the meta data */
export type SiteMeta = {
  title: string;
  templateTitle: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
  };
};

/* Nav Item contains type definitions for the nav bar items */
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  transitionDelay?: string;
};

export type NavBarType = NavItem[];
