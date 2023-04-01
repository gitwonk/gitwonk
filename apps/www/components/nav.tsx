"use client";

import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import * as gitWonkLogoLight from "@gitwonk/shared/assets/logo-wordmark--light.png";
import MobileMenu from "./mobile-menu";
import { navBarItems } from "data/site";

function NavItem({ href, text, disabled }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <NextLink
      href={href}
      aria-disabled={disabled}
      className={clsx(
        isActive
          ? "bg-slate-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
          : "text-gray-500",
        "rounded-lg p-1 text-base font-normal transition-all hover:bg-slate-200 hover:text-gray-800 hover:no-underline dark:hover:bg-gray-800 dark:hover:text-gray-200 sm:mx-2 sm:px-4 md:inline-block",
      )}>
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export default function Nav(props) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`ease sticky top-0 z-30 backdrop-blur transition-all duration-[0.4s] dark:bg-black ${
        isFixed ? "bg-white bg-opacity-95 shadow" : "bg-opacity-0"
      }`}>
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <nav
          id="main-nav"
          className="flex h-20 justify-between py-6 lg:items-center lg:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NextLink href="/">
              <Image
                src={gitWonkLogoLight}
                alt="GitWonk Logo"
                className="h-9 w-auto"
              />
            </NextLink>
          </div>
          <div className="hidden lg:mr-4 lg:flex">
            {navBarItems.map((item, index) => (
              <NavItem
                disabled={item.disabled}
                href={item.disabled ? "#" : item.href}
                text={item.title}
                key={index}
              />
            ))}
          </div>
          <div className="hidden justify-end lg:flex">
            <NextLink href="/get-early-access">
              <button className="bg-brand-500 dark:bg-brand-600 hover:bg-brand-600 rounded-xl px-4 py-3 text-sm font-medium text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                Join the Waitlist
              </button>
            </NextLink>
          </div>
          <div className="justify-end lg:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
