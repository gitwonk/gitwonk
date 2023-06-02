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

/* Footer Link contains type definitions for the footer links */
export type FooterLink = {
  name: string;
  href: string;
  notActive?: boolean;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export type FooterLinks = FooterLinkGroup[];

// Friend contains type definitions for the oss friends list
export type Friend = {
  name: string;
  href: string;
  description: string;
};

export type Friends = Friend[];
