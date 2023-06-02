import NextLink from "next/link";
import { Twitter, Github } from "@/components/icons";
import Discord from "./icons/discord";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex h-14 w-full max-w-screen-xl items-end justify-between px-4 sm:px-6 md:flex-row lg:px-8">
      <div className="flex flex-col space-y-2 py-4">
        <div className="flex space-x-5">
          <NextLink
            href="https://twitter.com/getgitwonk"
            className="text-scale-900 hover:text-scale-1200 transition">
            <span className="sr-only">Twitter</span>
            <Twitter className="hover:text-brand-500 h-7 w-7" />
          </NextLink>

          <NextLink
            href="https://github.com/gitwonk"
            className="text-scale-900 hover:text-scale-1200 transition">
            <span className="sr-only">GitHub</span>
            <Github className="hover:text-brand-500 h-6 w-6" />
          </NextLink>

          <NextLink
            href="https://discord.gitwonk.com"
            className="text-scale-900 hover:text-scale-1200 transition">
            <span className="sr-only">Discord</span>
            <Discord className="hover:text-brand-500 h-7 w-7" />
          </NextLink>
        </div>
        <span className="flex flex-col gap-1 md:flex-row">
          <small className="small">&copy; {currentYear} GitWonk.</small>
          <small className="small">All rights reserved.</small>
        </span>
      </div>
      <div className="py-4">
        <small className="small">
          We <span className="text-red-500">❤</span> Open Source |{" "}
          <Link href="/open-source">OSS Friends</Link>{" "}
        </small>
      </div>
      <div className="hidden gap-x-2.5 py-4 md:flex md:flex-row">
        <NextLink href="/privacy">
          <small className="small">Privacy policy</small>
        </NextLink>
        <span className="text-black">·</span>
        <NextLink href="/terms">
          <small className="small">Terms of service</small>
        </NextLink>
      </div>
    </footer>
  );
};

export default Footer;
