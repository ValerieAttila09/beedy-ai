"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogCard, { BlogCardProps } from "@/components/blog/BlogCard";
import { Search, ChevronDown } from "lucide-react";
import { CATEGORIES, POSTS } from "@/lib/constants/blog";
import Image from "next/image";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = [...POSTS]
    .sort((a, b) => {
      const aTime = Date.parse(a.date);
      const bTime = Date.parse(b.date);
      if (Number.isNaN(aTime) || Number.isNaN(bTime)) return 0;
      return bTime - aTime;
    })
    .filter((p) => {
      if (selectedCategory !== "All") {
        if (!p.tags?.includes(selectedCategory)) return false;
      }
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      return true;
    });

  const [featured, ...others] = filtered;

  return (
    <div className="relative min-h-screen bg-linear-to-br from-background via-background to-purple-50/60 dark:to-slate-950/60">
      <div className="mx-auto max-w-[92rem] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
        <header className="text-center mb-10 sm:mb-14">
          <p className="inline-flex items-center rounded-full border border-purple-300 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-500 shadow-sm backdrop-blur">
            Read our blog
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Browse Our Resources
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            We provide tips and resources from industry leaders. For real.
          </p>
        </header>

        <div className="grid gap-8 md:gap-10 md:grid-cols-[280px_minmax(0,1fr)] items-start">
          {/* Sidebar */}
          <aside className="md:sticky md:top-24 self-start">
            <div className="rounded-md border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur">
              <div className="space-y-2">
                <label htmlFor="search-article" className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Label
                </label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search article..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-sm border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Filter
                </span>
                <button className="inline-flex w-full items-center justify-between rounded-sm border border-border bg-background/60 px-4 py-2 text-xs sm:text-sm text-muted-foreground shadow-sm transition hover:bg-muted/60">
                  <span>Filter article...</span>
                  <ChevronDown className="size-4" />
                </button>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Browse by categories
                </p>
                <ul className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`cursor-pointer flex w-full items-center justify-between rounded px-3 py-2 text-sm transition ${selectedCategory === cat
                          ? "bg-fuchsia-100 text-fuchsia-500 border border-fuchsia-200"
                          : "text-muted-foreground hover:bg-muted/60"
                          }`}
                      >
                        <span>{cat}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <section className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group relative overflow-hidden rounded-md border border-border/70 bg-background/80 shadow-md transition hover:shadow-lg md:col-span-2 xl:col-span-3"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr]">
                    {featured.imageUrl && (
                      <div className="relative h-56 sm:h-64 md:h-full overflow-hidden min-h-[220px]">
                        <Image
                          src={featured.imageUrl}
                          alt={featured.title}
                          height={480}
                          width={720}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="relative p-5 sm:p-7 md:p-8">
                      <p className="inline-flex items-center rounded-full border border-fuchsia-300 bg-fuchsia-100 px-3 py-1 text-xs font-medium text-fuchsia-500 shadow-sm backdrop-blur">
                        Featured
                      </p>
                      <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                        {featured.title}
                      </h2>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                        {featured.excerpt}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span>{featured.author}</span>
                        <span>·</span>
                        <span>{featured.date}</span>
                      </div>
                      {featured.tags && featured.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {featured.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              )}

              {others.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground mt-6">
                No posts match your criteria.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
