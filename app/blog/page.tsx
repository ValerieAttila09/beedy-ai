import Link from "next/link";
import React from "react";

// TODO: replace static list with data fetched from file system or CMS
const posts: Array<{ slug: string; title: string }> = [];

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-extrabold mb-6">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          No posts published yet. Check back soon!
        </p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl text-primary hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
