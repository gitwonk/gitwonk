import NextLink from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="ml-4 flex flex-col sm:ml-0">
          <h1 className="text-brand-500 text-5xl font-semibold">404</h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex md:border-l-2 md:border-gray-200">
            <div className="ml-4 flex flex-col gap-2">
              <h1 className="font-display text-5xl font-semibold">
                Page not found
              </h1>
              <p className="pt-1 text-left text-gray-400 md:text-center">
                Please check the URL in the address and and try again.
              </p>
            </div>
          </div>
          <div className="mx-4 flex flex-col gap-4 md:flex-row">
            <NextLink href="/">
              <button className="bg-brand-500 hover:bg-brand-600 w-full rounded-[12px] px-6 py-3 text-sm text-white shadow-lg transition-all">
                Go back home
              </button>
            </NextLink>
            <NextLink href="#">
              <button className="text-brand-500 bg-brand-100/[.70] hover:bg-brand-200/[0.70] w-full rounded-[12px] px-6 py-3 text-sm shadow-lg transition-all">
                Contact support
              </button>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
