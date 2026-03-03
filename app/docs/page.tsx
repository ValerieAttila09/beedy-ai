import React from "react";
import Link from "next/link";

export default function DocsIndex() {
  return (
    <div className="relative max-w-7xl mx-auto py-16 px-4">
      <div className="md:grid md:grid-cols-12 md:gap-8">
        {/* main content */}
        <div className="md:col-span-8 lg:col-span-9">
          <h1 id="welcome" className="text-4xl font-extrabold mb-4">Welcome to Beedy AI Docs</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find Beedy guides, resources, and references to reduce infrastructure
            cost, understand APIs, and quickly ship features.
          </p>

          {/* quick path cards */}
          <h2 id="fast-path" className="text-2xl font-semibold mb-4">Fast Path</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link
              href="/docs/get-started/quickstart"
              className="block p-6 border rounded-lg hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">Beedy Quickstart</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Get up and running with Beedy in minutes.
              </p>
              <span className="mt-4 inline-block text-sm text-primary">
                Learn more →
              </span>
            </Link>
            <Link
              href="/docs/graphql-metrics/start"
              className="block p-6 border rounded-lg hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">Metrics Quickstart</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Start collecting performance data from your GraphQL API.
              </p>
              <span className="mt-4 inline-block text-sm text-primary">
                Get Started →
              </span>
            </Link>
            <Link
              href="/docs/edge-cache/quickstart"
              className="block p-6 border rounded-lg hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">Edge Cache Quickstart</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Cache GraphQL responses on the edge for ultra‑fast performance.
              </p>
              <span className="mt-4 inline-block text-sm text-primary">
                Start Caching →
              </span>
            </Link>
          </div>

          {/* callout section */}
          <h2 id="product-guides" className="text-2xl font-semibold mb-4">Product Guides</h2>
          <div className="bg-primary/5 border border-primary rounded-lg p-8 flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                What are you waiting for?
              </h3>
              <p className="text-muted-foreground mb-4">
                It only takes minutes to set up Beedy and see where you can scale
                and optimize your GraphQL infrastructure.
              </p>
              <form className="flex max-w-md">
                <input
                  type="text"
                  placeholder="Your API endpoint …"
                  className="flex-1 px-3 py-2 border rounded-l"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r"
                >
                  Get Started
                </button>
              </form>
            </div>
            <pre className="bg-surface p-4 rounded-lg overflow-x-auto text-xs flex-1">
              <code>
                {`npx beedy serve --backend-port 4000
> Getting dependencies …
> Creating local dev environment …
> A Beedy service for your local GraphQL API is now running at
  http://localhost:5800/`}
              </code>
            </pre>
          </div>
        </div>

        {/* right-hand table of contents placeholder */}
        <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
          <div className="sticky top-24">
            <div className="text-sm font-semibold mb-2">On this page</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <a href="#welcome" className="hover:text-primary">
                  Welcome to Beedy Docs
                </a>
              </li>
              <li>
                <a href="#fast-path" className="hover:text-primary">
                  Fast Path
                </a>
              </li>
              <li>
                <a href="#product-guides" className="hover:text-primary">
                  Product Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  From Engineering Blog
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
