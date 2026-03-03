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
  const title = slug.replace(/-/g, " ");

  return (
    <article className="max-w-3xl mx-auto py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold capitalize">{title}</h1>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Author Name</span>
          <span>·</span>
          <span>Jan 1, 2026</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="bg-border px-2 py-1 rounded">Tag1</span>
          <span className="bg-border px-2 py-1 rounded">Tag2</span>
        </div>
      </header>
      <img
        src="https://via.placeholder.com/1200x600.png?text=Blog+Post"
        alt={title}
        className="w-full h-64 object-cover rounded mb-8"
      />
      <div className="prose">
        <p>Content for <em>{slug}</em> will be added soon.</p>
      </div>
    </article>
  );
}
