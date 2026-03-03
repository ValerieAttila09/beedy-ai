import Link from "next/link";
import React from "react";

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  author: string;
  date: string;
  tags?: string[];
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  imageUrl,
  author,
  date,
  tags = [],
}: BlogCardProps) {
  return (
    <article className="group bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
      {imageUrl && (
        <div className="w-full h-48 relative">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
        </div>
      )}
      <div className="p-4">
        <Link
          href={`/blog/${slug}`}
          className="text-2xl font-semibold line-clamp-2 hover:text-primary"
        >
          {title}
        </Link>
        <p className="text-muted-foreground mt-2 text-sm line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase px-2 py-1 bg-border rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
