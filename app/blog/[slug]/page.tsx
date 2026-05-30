import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { blogPostBySlugQuery, blogSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Body } from "@/components/PortableTextRenderer";
import type { SanityImageSource } from "@sanity/image-url";

export const revalidate = 60;

type Post = {
  title: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: SanityImageSource;
  body?: unknown;
  author?: { name?: string };
};

// Pre-render a static page per post at build time.
export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(blogSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>(blogPostBySlugQuery, { slug }, null);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-xs uppercase tracking-wide text-fg3">
        {post.author?.name ? `${post.author.name} · ` : ""}
        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{post.title}</h1>
      {post.excerpt && <p className="mt-4 text-lg text-fg2">{post.excerpt}</p>}

      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={urlFor(post.coverImage).width(1400).fit("max").url()}
          alt={post.title}
          className="mt-8 w-full rounded-xl"
        />
      )}

      <div className="mt-8">
        <Body value={post.body} />
      </div>
    </article>
  );
}
