import React from "react";
import { Github } from "@/components/icons";
import Globe from "./globe";
import NextLink from "next/link";
import HomeInput from "./home-input";

const Hero = () => {
  return (
    <div className="overflow-hidden pb-20">
      <div className="mx-auto flex h-full max-w-screen-xl items-center gap-8">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <NextLink
            href="https://github.com/gitwonk/gitwonk"
            target="_blank"
            rel="noreferrer"
            className="flex max-w-fit overflow-hidden rounded-3xl border border-slate-300 bg-white px-7 py-2 text-black shadow-md transition-all hover:bg-black hover:text-white hover:no-underline hover:shadow-lg dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black">
            <Github className="mr-2 h-5 w-5" />
            <p className="text-sm font-medium">Star us on GitHub</p>
          </NextLink>
          <h1 className="font-display text-gray text-4xl font-extrabold !leading-[1.15] dark:text-white md:text-5xl lg:max-w-5xl lg:text-6xl">
            Write, Collaborate, Publish
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              .
            </span>
          </h1>
          <h2 className="text-black-subtle dark:text-white-subtle max-w-sm text-base leading-6 md:max-w-md lg:max-w-xl lg:text-base">
            GitWonk is an open-source technical documentation tool, designed and
            built focusing on the developer experience.
          </h2>
          <div className="w-full sm:flex">
            <HomeInput />
          </div>
        </div>
        <div className="hidden h-full w-full max-w-5xl items-center justify-end md:flex">
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default Hero;
