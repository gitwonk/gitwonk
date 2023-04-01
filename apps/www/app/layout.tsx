import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";
import { RootWrapper } from "@/components/root-wrapper";
import { siteMeta } from "data/site";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  style: "normal",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.templateTitle}`,
  },
  description: siteMeta.description,
  keywords: [
    "Open Source Software",
    "GitBook Alternative",
    "Technical Documentation",
    "Product Documentation",
    "Developer Experience",
    "Knowledge Base",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/apple-touch-icon.png",
    },
  },
  manifest: `${siteMeta.url}/site.webmanifest`,
  openGraph: {
    title: {
      default: siteMeta.title,
      template: `%s | ${siteMeta.templateTitle}`,
    },
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: "GitWonk",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitWonk",
    site: "@gitwonk",
    description: siteMeta.description,
    creator: "@gitwonk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={clsx(
        satoshi.variable,
        inter.variable,
        "bg-white-subtle dark:bg-black dark:text-white",
      )}>
      <body className="selection:bg-brand-500 min-h-screen scroll-smooth antialiased selection:text-white">
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}
