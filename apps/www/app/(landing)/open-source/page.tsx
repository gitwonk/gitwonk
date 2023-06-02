import type { Metadata } from "next";
import { ossFriends } from "data/oss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OSS Friends",
  description: "Open Source Projects We Love ",
};

export default function OSS() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg px-4 py-4 sm:px-6 lg:px-8">
        <div className=" flex w-full flex-col justify-center gap-4 py-10 sm:items-center">
          <div className="flex max-w-2xl gap-2 py-2 sm:items-center">
            <h1 className="font-display text-3xl font-extrabold leading-normal sm:text-5xl">
              Our OSS Friends
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-5 text-gray-600 dark:text-gray-200 sm:text-center md:text-base md:leading-7">
            GitWonk finds endless inspiration in the realm of open-source
            projects. Here&apos;s a list of our favorite ones — trust us,
            they&apos;re beyond awesome 🔥
          </p>
        </div>
      </div>
      <div className="mx-auto mb-20 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ossFriends.map((friend, index) => (
            <Link
              key={index}
              href={friend.href}
              className="flex min-h-[195px] flex-col items-start justify-between gap-2 overflow-hidden rounded-xl border border-transparent bg-zinc-50/90 px-4 py-6 shadow hover:border-zinc-400 hover:no-underline hover:shadow-md sm:px-6">
              <div className="mb-2 flex flex-col gap-3">
                <h3 className="text-lg font-bold leading-6 text-zinc-900">
                  {friend.name}
                </h3>
                <p className="max-w-2xl text-sm leading-normal text-zinc-500 dark:text-zinc-400">
                  {friend.description}
                </p>
              </div>

              <button className="text-brand-500 hover:text-brand-600 py-2 text-sm font-medium transition duration-150 ease-in-out focus:underline focus:outline-none">
                Learn more
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
