import React from "react";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  // TODO: implement by reading markdown files from /content/posts or fetching from CMS
  return [];
}

export default function BlogPost({ params }: { params: Params }) {
  const { slug } = params;
  return (
    <article className="prose mx-auto py-16">
      <h1 className="text-3xl font-bold capitalize">{slug.replace(/-/g, " ")}</h1>
      <p className="text-muted-foreground mt-4">
        Content for <em>{slug}</em> will be added soon.
      </p>
    </article>
  );
}
