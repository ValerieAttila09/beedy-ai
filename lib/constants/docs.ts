export interface DocNavItem {
  title: string;
  href?: string;
  children?: DocNavItem[];
}

// sample navigation structure inspired by screenshot
export const DOCS_NAV_DATA: DocNavItem[] = [
  {
    title: "What’s New",
    href: "/docs/whats-new",
  },
  {
    title: "Get Started",
    children: [
      { title: "What is Beedy?", href: "/docs/get-started/what-is-beedy" },
      { title: "Beedy Quickstart", href: "/docs/get-started/quickstart" },
      { title: "Cookie Support", href: "/docs/get-started/cookie-support" },
      { title: "Add a Custom Domain", href: "/docs/get-started/custom-domain" },
      { title: "Gradually Enable Beedy", href: "/docs/get-started/gradual" },
      { title: "Setup in CI", href: "/docs/get-started/ci" },
      { title: "Local Development", href: "/docs/get-started/local" },
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
];
