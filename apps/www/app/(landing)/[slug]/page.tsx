import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { Mdx } from "@/components/docs/mdx";
import { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";
import "@/styles/mdx.css";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPageFromParams(params) {
  const slug = params?.slug;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: absoluteUrl(page.slug),
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams,
  }));
}

export default async function PagePage({ params }: PageProps) {
  const slug = params?.slug;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:pt-10 lg:pb-16">
      <div className="space-y-8">
        <h1 className="font-display inline-block text-4xl font-extrabold tracking-tight text-black lg:text-5xl">
          {page.title}
        </h1>
        {page.description && (
          <p className="text-base text-gray-600">{page.description}</p>
        )}
      </div>
      <hr className="my-4 border-slate-200" />
      <Mdx code={page.body.code} />
    </article>
  );
}
