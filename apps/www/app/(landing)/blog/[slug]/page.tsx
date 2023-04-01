import { notFound } from "next/navigation";
import { allAuthors, allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/docs/mdx";
import "@/styles/mdx.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, formatDate } from "@/lib/utils";
import { ChevronLeft } from "@/components/icons";
import NewsletterContainer from "@/components/newsletter";
interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params) {
  const slug = params?.slug;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = params?.slug;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`),
  );

  return (
    <>
      <article className="container relative max-w-3xl py-6 px-8 dark:bg-black lg:py-10">
        <Link
          href="/blog"
          className="absolute top-14 left-[-200px] hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 xl:inline-flex">
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        <div className="flex flex-col">
          <Link
            href="/blog"
            className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 lg:pb-4 xl:hidden">
            <ChevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link>
          <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            {post.title}
          </h1>
          {post.date && (
            <time
              dateTime={post.date}
              className="block pt-4 text-sm text-slate-600">
              Published on {formatDate(post.date)}
            </time>
          )}
          {authors?.length ? (
            <div className="mt-4 flex space-x-4">
              {authors.map((author) =>
                author ? (
                  <Link
                    key={author._id}
                    href={`https://twitter.com/${author.twitter}`}
                    className="flex items-center space-x-2 text-sm">
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={42}
                      height={42}
                      className="rounded-full"
                    />
                    <div className="flex-1 text-left leading-tight">
                      <p className="font-medium text-slate-900">
                        {author.title}
                      </p>
                      <p className="text-[12px] text-slate-600">
                        @{author.twitter}
                      </p>
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
          ) : null}
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
            priority
          />
        )}
        <Mdx code={post.body.code} />
        <hr className="mt-8 mb-6 border-slate-200" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900">
            <ChevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link>
        </div>
      </article>
      <NewsletterContainer />
    </>
  );
}
