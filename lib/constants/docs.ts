export interface DocNavItem {
  title: string;
  href?: string;
  children?: DocNavItem[];
}

// sample navigation structure inspired by screenshot
export const DOCS_NAV_DATA: DocNavItem[] = [
  {
    title: "What’s New",
    children: [
      { title: "Release Notes", href: "/docs/whats-new/release-notes" },
      { title: "Changelog", href: "/docs/whats-new/changelog" },
      { title: "Upcoming Features", href: "/docs/whats-new/upcoming" },
    ],
  },
  {
    title: "Overview",
    children: [
      { title: "What is Beedy?", href: "/docs/overview/what-is-beedy" },
      { title: "Core Concepts", href: "/docs/overview/concepts" },
      { title: "Terminology", href: "/docs/overview/terminology" },
    ],
  },
  {
    title: "Getting Started",
    children: [
      { title: "Quickstart", href: "/docs/getting-started/quickstart" },
      { title: "Install CLI", href: "/docs/getting-started/cli" },
      { title: "Run the MCP Server", href: "/docs/getting-started/mcp-server" },
      { title: "Local Development", href: "/docs/getting-started/local" },
    ],
  },
  {
    title: "GraphQL Metrics",
    children: [
      { title: "About GraphQL Metrics", href: "/docs/graphql-metrics/about" },
      { title: "Get Started with Metrics", href: "/docs/graphql-metrics/start" },
      { title: "Metrics Logging Plugins", href: "/docs/graphql-metrics/plugins" },
      { title: "Get Metrics with the Edge Proxy", href: "/docs/graphql-metrics/edge" },
      { title: "Build a Metrics Logging Call", href: "/docs/graphql-metrics/call" },
      { title: "Schema Registry Metrics", href: "/docs/graphql-metrics/schema" },
    ],
  },
  {
    title: "GraphQL Edge Cache",
    children: [
      { title: "Edge Cache Quickstart", href: "/docs/edge-cache/quickstart" },
      { title: "Cache Rules", href: "/docs/edge-cache/rules" },
      { title: "Scopes", href: "/docs/edge-cache/scopes" },
      { title: "Key Fields", href: "/docs/edge-cache/key-fields" },
      { title: "Cache Directives", href: "/docs/edge-cache/directives" },
      { title: "Invalidation Methods", href: "/docs/edge-cache/invalidation" },
      { title: "Purging API", href: "/docs/edge-cache/purging" },
      { title: "Debugging the cache", href: "/docs/edge-cache/debugging" },
      { title: "CacheGuard", href: "/docs/edge-cache/cacheguard" },
      { title: "Optimizing the cache hit rate", href: "/docs/edge-cache/optimizing" },
    ],
  },
  {
    title: "API Reference",
    children: [
      { title: "Authentication", href: "/docs/api/authentication" },
      { title: "Errors & Codes", href: "/docs/api/errors" },
      { title: "Rate Limits", href: "/docs/api/rate-limits" },
      { title: "Model Endpoints", href: "/docs/api/models" },
    ],
  },
  {
    title: "SDKs & Tools",
    children: [
      { title: "JavaScript SDK", href: "/docs/sdk/js" },
      { title: "Python SDK", href: "/docs/sdk/py" },
      { title: "CLI", href: "/docs/sdk/cli" },
    ],
  },
];
