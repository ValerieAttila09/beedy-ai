import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Code, CodeHeader, CodeBlock } from "@/components/animate-ui/components/animate/code";

export default function DocsIndex() {
  return (
    <div className="relative max-w-7xl md:mx-auto px-4 py-4">
      <div className="md:grid md:grid-cols-12 md:gap-8">
        {/* main content */}
        <div className="md:col-span-8 lg:col-span-9">
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">What's New</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Release Notes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h1 id="welcome" className="text-4xl font-extrabold mb-4">Welcome to Beedy AI Docs</h1>
          <p className="md:text-lg text-muted-foreground mb-4">
            Beedy is a powerful AI model platform. These docs cover model architecture, MCP server setup, CLI usage, SDKs, and everything you need to integrate intelligent features into your app.
          </p>
          <p className="text-md text-muted-foreground mb-8">
            The documentation is constantly updated—check this page for the <strong className="text-primary"> latest announcements</strong> and detailed walkthroughs across our product areas. Use the sidebar to navigate by topic or explore beyond with the search box above.
          </p>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Latest Updates</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li><Link href="/docs/whats-new/release-notes">Release notes</Link> for version 3.2 are live.</li>
              <li>New <Link href="/docs/edge-cache/rules">cache rule configurations</Link> added.</li>
              <li>Updated <Link href="/docs/api/authentication">API authentication</Link> docs with OAuth examples.</li>
            </ul>
          </div>

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
            <Link
              href="/docs/api/authentication"
              className="block p-6 border rounded-lg hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">API Reference</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse the full API specification, auth details, and error codes.
              </p>
              <span className="mt-4 inline-block text-sm text-primary">
                View API docs →
              </span>
            </Link>
            <Link
              href="/docs/sdk/cli"
              className="block p-6 border rounded-lg hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">CLI & Tools</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Install the Beedy CLI, generate keys, and manage your models from the terminal.
              </p>
              <span className="mt-4 inline-block text-sm text-primary">
                Open CLI docs →
              </span>
            </Link>
          </div>

          {/* callout section */}
          <h2 id="product-guides" className="text-2xl font-semibold mb-4">Product Guides</h2>
          <div className="bg-accent border border-border rounded-lg p-6 flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                What are you waiting for?
              </h3>
              <p className="text-muted-foreground mb-4">
                It only takes minutes to set up Beedy and see where you can scale and optimize your GraphQL infrastructure.
              </p>
              <form className="flex max-w-md relative">
                <Input
                  type="text"
                  placeholder="Your API endpoint …"
                  className="bg-white w-full flex-1 px-3 py-2 border rounded"
                />
                <Button
                  type="submit"
                  variant={'outline'}
                  className="absolute right-0 bg-neutral-50 text-neutral-700 hover:text-black cursor-pointer px-4 py-2 rounded-s-none rounded-r"
                >
                  Get Started
                </Button>
              </form>
            </div>
            {/* animated code snippet */}
            <Code code={`npx beedy serve --backend-port 4000
> Getting dependencies …
> Creating local dev environment …
> A Beedy service for your local GraphQL API is now running at
  http://localhost:5800/`} className="flex-1">
              <CodeHeader copyButton>Terminal</CodeHeader>
              <CodeBlock cursor lang="bash" />
            </Code>
          </div>
        </div>

        {/* right-hand table of contents placeholder */}
        <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
          <div className="sticky top-18">
            <div className="text-sm font-semibold mb-2">On this page</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <a href="#welcome" className="hover:text-primary">Welcome to Beedy Docs</a>
              </li>
              <li>
                <a href="#fast-path" className="hover:text-primary">Fast Path</a>
              </li>
              <li>
                <a href="#product-guides" className="hover:text-primary">Product Guides</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">From Engineering Blog</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
