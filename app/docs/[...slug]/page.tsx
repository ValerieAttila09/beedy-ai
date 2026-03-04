import React from "react";
import { notFound } from "next/navigation";

interface Params {
  slug?: string[];
}

// placeholder data for demonstration; real implementation will read mdx/files
const DUMMY_PAGES: Record<string, string> = {
  "get-started/quickstart": "## Beedy Quickstart\nFollow these steps to get started...",
  "get-started/what-is-beedy": "## What is Beedy?\nBeedy is...",
};

// we don't statically pre-generate any pages in this placeholder version
// so the route remains dynamic and params.slug will always be defined.
export async function generateStaticParams() {
  return [];
}

export default function DocPage({ params }: { params: Params }) {
  if (!params.slug) {
    // should not happen due to catch-all, but guard just in case
    notFound();
  }

  const slugPath = params.slug!.join("/");
  const content = DUMMY_PAGES[slugPath];
  if (!content) {
    // fallback to not found or a generic placeholder
    return (
      <div className="prose mx-auto py-16">
        <h1>Page not found</h1>
        <p>The documentation page &ldquo;{slugPath}&rdquo; does not exist yet.</p>
      </div>
    );
  }

  return (
    <div className="prose mx-auto py-16">
      {/* this simple rendering demonstrates markdown content */}
      <h1 className="capitalize">
        {params.slug![params.slug!.length - 1].replace(/-/g, " ")}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
