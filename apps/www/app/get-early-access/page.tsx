import React from "react";
import type { Metadata } from "next";

import Image from "next/image";
import NextLink from "next/link";
import { ChevronLeft } from "@/components/icons";
import * as gitWonkLogoLight from "@gitwonk/shared/assets/logo-wordmark--light.png";
import EarlyInput from "@/components/early-input";

type Props = {};

export const metadata: Metadata = {
  title: "Join The Waitlist",
  description: "Be the first to know. Join our exclusive waitlist today.",
};

const GetEarlyAccess = ({}: Props) => {
  return (
    <>
      <div className="flex min-h-screen w-screen items-center justify-center">
        <aside className="dark:bg-black-pure flex min-h-screen w-screen flex-col items-center justify-center bg-white lg:w-1/2 xl:w-1/3">
          <div className="px-20 text-black dark:text-white">
            <NextLink
              href="/"
              className="mb-4 flex items-center text-base text-gray-500 decoration-gray-300 hover:underline dark:decoration-gray-700">
              <ChevronLeft className="h-4 w-4" />
              Go Back
            </NextLink>
            <h1 className="font-display mb-6 text-6xl font-extrabold">
              Request early access
            </h1>
            <h6 className="mb-16 text-xl">
              Sit tight, we&apos;re almost ready.
            </h6>
            <EarlyInput />
            <h6 className="text-sm font-normal">
              By clicking “Request early access”, you agree to our{" "}
              <a href="/terms" className=" underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="privacy" className=" underline">
                Privacy Policy
              </a>
              . We&apos;ll occasionally send you account related emails.
            </h6>
          </div>
        </aside>
        <main className="bg-white-subtle dark:bg-black-subtle hidden h-screen p-12 pt-16 lg:flex lg:w-1/2 xl:w-2/3 xl:pt-28 xl:pl-28">
          <NextLink href="/" as="/">
            <Image
              src={gitWonkLogoLight}
              alt="GitWonk"
              width={160}
              height={30}
              className="absolute"
            />
          </NextLink>
          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/launch.svg"
              alt="Dashboard"
              width={500}
              height={700}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default GetEarlyAccess;
