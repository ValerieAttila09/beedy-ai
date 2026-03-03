import React, { useState } from "react";
import Link from "next/link";
import BlogCard, { BlogCardProps } from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import { Search } from "lucide-react";

// mock data
const POSTS: BlogCardProps[] = [
  {
    slug: "design-in-the-age-of-ai",
    title: "Design In The Age Of AI: How to adapt lazily.",
    excerpt:
      "With beedy, you can unleash your inner Gen Z and just stop caring about anything else.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=AI+Image",
    author: "Aznayun G. Wu",
    date: "Jun 25, 2025",
    tags: ["UI/UX", "Design System", "Sleep & Care"],
  },
  {
    slug: "building-reactive-ui",
    title: "Building a reactive UI with signals",
    excerpt: "Learn how reactive primitives simplify your front-end code.",
    imageUrl: "https://via.placeholder.com/1200x600.png?text=UI+Image",
    author: "Kazi Miyazono",
    date: "Jul 10, 2025",
    tags: ["UI/UX", "User Interface"],
  },
  // additional posts...
];

const CATEGORIES = ["All", "Design", "Gen Z Stuff", "User Interface", "User Experience"];

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = POSTS.filter((p) => {
    if (selectedCategory !== "All") {
      if (!p.tags?.includes(selectedCategory)) return false;
    }
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  // treat first as featured
  const [featured, ...others] = filtered;

  return (
    <div className="relative max-w-[1200px] mx-auto py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Browse Our Resources</h1>
        <p className="text-lg text-muted-foreground">
          We provide tips and resources from industry leaders. For real.
        </p>
      </header>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="block mb-12 relative rounded-lg overflow-hidden shadow-lg group"
        >
          {featured.imageUrl && (
            <img
              src={featured.imageUrl}
              alt={featured.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h2 className="text-3xl font-bold leading-tight">
              {featured.title}
            </h2>
            <div className="mt-2 flex items-center gap-4 text-sm">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{featured.date}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {featured.tags?.map((t) => (
                <span
                  key={t}
                  className="bg-border bg-opacity-50 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Link>
      )}

      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
        <BlogFilter
          categories={CATEGORIES}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search blog..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">
          No posts match your criteria.
        </p>
      )}
    </div>
  );
}
