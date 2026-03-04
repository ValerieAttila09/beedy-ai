"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogCard, { BlogCardProps } from "@/components/blog/BlogCard";
import { Search, ChevronDown } from "lucide-react";

const POSTS: BlogCardProps[] = [
  {
    slug: "release-notes-3-2",
    title: "Release Notes v3.2: Faster Docs, Better Auth, Smoother Onboarding",
    excerpt:
      "A quick tour of what shipped in v3.2—improved documentation flows, clearer API authentication examples, and quality-of-life updates across the platform.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=Release+Notes",
    author: "Beedy AI Team",
    date: "2026-03-01",
    tags: ["Product", "Docs", "API"],
  },
  {
    slug: "what-is-beedy-core-concepts",
    title: "What is Beedy AI? Core Concepts You Should Know",
    excerpt:
      "Beedy AI is a modern conversational AI platform for 24/7 support, seamless integrations, and analytics. Here are the core concepts and terminology that make the platform click.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=Core+Concepts",
    author: "Priya Nair",
    date: "2026-02-18",
    tags: ["Docs", "Product", "Terminology"],
  },
  {
    slug: "quickstart-from-zero-to-first-assistant",
    title: "Quickstart: From Zero to Your First Beedy Assistant in Minutes",
    excerpt:
      "A practical walkthrough of your first setup: connect a channel, test a conversation, and iterate safely before rolling out to real customers.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=Quickstart",
    author: "Aisha Rahman",
    date: "2026-02-10",
    tags: ["Getting Started", "Integrations", "Product"],
  },
  {
    slug: "seamless-integration-playbook",
    title: "Seamless Integration Playbook: Email, Chat, CRM, and Webhooks",
    excerpt:
      "How teams connect Beedy AI to existing workflows without rewrites—channels, connectors, webhooks, and the mental model for reliable routing.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=Integrations",
    author: "Marco Silva",
    date: "2026-01-29",
    tags: ["Integrations", "API", "Workflows"],
  },
  {
    slug: "advanced-analytics-what-to-measure",
    title: "Advanced Analytics: What to Measure in AI Support Conversations",
    excerpt:
      "Dashboards are only useful if the metrics are. Here’s how to track resolution rate, deflection, escalations, and where to focus improvements.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=Analytics",
    author: "Owen Park",
    date: "2026-01-12",
    tags: ["Analytics", "Product", "Operations"],
  },
  {
    slug: "api-authentication-oauth-keys",
    title: "API Authentication in Beedy AI: Keys, OAuth, and Safer Defaults",
    excerpt:
      "A security-minded overview of how to authenticate requests, rotate credentials, and avoid common pitfalls when integrating Beedy AI via API.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=API+Auth",
    author: "Dr. Lena Kovács",
    date: "2025-12-22",
    tags: ["API", "Security", "Docs"],
  },
  {
    slug: "rate-limits-and-errors-that-scale",
    title: "Rate Limits & Error Codes: Designing Clients That Scale",
    excerpt:
      "Learn how to build resilient clients: backoff strategies, interpreting error codes, and how to keep user experience stable under load.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=Rate+Limits",
    author: "Diego Alvarez",
    date: "2025-12-05",
    tags: ["API", "Engineering", "Reliability"],
  },
  {
    slug: "graphql-metrics-quickstart",
    title: "GraphQL Metrics Quickstart: Visibility Before Optimization",
    excerpt:
      "Before you tune performance, you need signal. Here’s how to start collecting GraphQL metrics and turn logs into actionable insights.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=GraphQL+Metrics",
    author: "Ravi Patel",
    date: "2025-11-20",
    tags: ["GraphQL Metrics", "Analytics", "Engineering"],
  },
  {
    slug: "edge-cache-rules-and-invalidation",
    title: "Edge Cache Rules & Invalidation: Keep GraphQL Fast and Correct",
    excerpt:
      "Caching is easy until it isn’t. We break down cache rules, scopes, key fields, and safe invalidation patterns for real apps.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=Edge+Cache",
    author: "Maya Chen",
    date: "2025-11-03",
    tags: ["Edge Cache", "GraphQL", "Performance"],
  },
  {
    slug: "cli-and-mcp-server-local-dev",
    title: "CLI + MCP Server: A Local Dev Setup That Feels Instant",
    excerpt:
      "Spin up the MCP server, iterate on configuration, and validate integrations locally. This is the workflow we recommend for fast, safe development.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=CLI+%2B+MCP",
    author: "Beedy AI Team",
    date: "2025-10-14",
    tags: ["SDKs & Tools", "Getting Started", "Docs"],
  },
];

const CATEGORIES = [
  "All",
  "Product",
  "Getting Started",
  "Docs",
  "Integrations",
  "Analytics",
  "API",
  "Security",
  "GraphQL Metrics",
  "Edge Cache",
  "SDKs & Tools",
];

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
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-purple-50/60 dark:to-slate-950/60">
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
                      <div className="relative h-56 sm:h-64 md:h-full min-h-[220px]">
                        <img
                          src={featured.imageUrl}
                          alt={featured.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/20 md:bg-gradient-to-r md:from-black/10 md:via-black/10 md:to-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent md:hidden" />
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
