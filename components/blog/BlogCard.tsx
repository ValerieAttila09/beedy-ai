import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

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
  const category = tags?.[0];

  return (
    <article className="group overflow-hidden rounded-3xl border border-border/60 bg-background/80 shadow-sm transition hover:shadow-md">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        {category && (
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {category}
          </p>
        )}

        <div className="mt-2 flex items-start justify-between gap-4">
          <Link
            href={`/blog/${slug}`}
            className="text-lg sm:text-xl font-semibold leading-snug line-clamp-2 hover:text-primary transition-colors"
          >
            {title}
          </Link>
          <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/60 text-muted-foreground shadow-sm transition group-hover:text-foreground">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
}
