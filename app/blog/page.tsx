import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

export const metadata = { title: "Blog · Runwayz" };
export const revalidate = 60; // refresh from the CMS at most once a minute

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: SanityImageSource;
  authorName?: string;
};

export default async function BlogIndex() {
  const posts = await sanityFetch<Post[]>(blogPostsQuery);

  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-3 text-fg2">News, ideas, and updates.</p>

      {posts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`} className="group">
              {post.coverImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={urlFor(post.coverImage).width(800).height(450).fit("crop").url()}
                  alt={post.title}
                  className="aspect-video w-full rounded-xl object-cover"
                />
              )}
              <h2 className="mt-4 text-xl font-semibold tracking-tight group-hover:underline">
                {post.title}
              </h2>
              {post.excerpt && <p className="mt-2 text-sm text-fg2">{post.excerpt}</p>}
              <p className="mt-3 text-xs uppercase tracking-wide text-fg3">
                {post.authorName ? `${post.authorName} · ` : ""}
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-fg3">
      No posts yet. Add one in{" "}
      <Link href="/studio" className="underline">
        Sanity Studio
      </Link>
      .
    </div>
  );
}
