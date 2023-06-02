import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";
import NewsletterContainer from "@/components/newsletter";
import { BookMark } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog",
  description: "Check our blog for the latest updates on GitWonk.",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="dark:bg-black">
      <div className="mx-auto max-w-screen-lg px-4 py-4 sm:px-6 lg:px-8">
        <div className=" flex w-full flex-col justify-center gap-4 py-10 sm:items-center">
          <div className="flex items-center gap-2 py-4">
            <BookMark className="text-brand-400 h-14 w-14" />
            <h1 className="font-display text-6xl font-extrabold">Blog</h1>
          </div>

          <p className="max-w-lg text-center text-sm leading-5 text-gray-600 dark:text-gray-200 md:text-base md:leading-7">
            Stay up-to-date with the latest news, productivity tips, user
            stories, and behind-the-scenes updates from the GitWonk ecosystem.
          </p>
        </div>
        <div>
          {posts?.length ? (
            <div className="py-8">
              <div className="grid gap-14 sm:grid-cols-2">
                {posts.map((post, index) => (
                  <article
                    key={post._id}
                    className={`group relative flex flex-col space-y-2 ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}>
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={index === 0 ? 1000 : 800}
                        height={index === 0 ? 480 : 450}
                        className="rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-gray-900"
                      />
                    )}
                    <h2 className="text-2xl font-bold lg:pt-3">{post.title}</h2>
                    {post.description && (
                      <p className="text-slate-600">{post.description}</p>
                    )}
                    {post.date && (
                      <p className="text-sm text-slate-600">
                        {formatDate(post.date)}
                      </p>
                    )}
                    <Link href={post.slug} className="absolute inset-0">
                      <span className="sr-only">View Article</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="pb-10">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/work-in-progress.svg"
                  alt="Work in progress"
                  width={500}
                  height={700}
                />
                <p className="text-base text-gray-700">
                  No posts published yet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
}
