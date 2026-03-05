import { BlogCardProps } from "@/components/blog/BlogCard";
import Blog1 from "../../assets/images/Beedy AI.png";
import Blog2 from "../../assets/images/blog/114855705_7e6c3088-8d5d-4f20-9144-fe5ddc23cd01.jpg";
import Blog3 from "../../assets/images/blog/135611.jpg";
import Blog4 from "../../assets/images/blog/13693435_1908.i121.070.isometric artificial intelligence flowchart.jpg";
import Blog5 from "../../assets/images/blog/2151719564.jpg";
import Blog6 from "../../assets/images/blog/43868972_2304.i039.012.S.m004.c13.AI generated art AI powered content creation isometric.jpg";
import Blog7 from "../../assets/images/blog/43868977_2304.i039.017.F.m004.c9.AI generated art AI powered content creation isometric.jpg";
import Blog8 from "../../assets/images/blog/83331.jpg";
import Blog9 from "../../assets/images/blog/aerps-com-5e4Zlblkvks-unsplash.jpg";
import Blog10 from "../../assets/images/blog/dell-dpbXgTh0Lac-unsplash.jpg";

const POSTS: BlogCardProps[] = [
  {
    slug: "release-notes-3-2",
    title: "Release Notes v3.2: Faster Docs, Better Auth, Smoother Onboarding",
    excerpt:
      "A quick tour of what shipped in v3.2—improved documentation flows, clearer API authentication examples, and quality-of-life updates across the platform.",
    imageUrl: Blog1,
    author: "Beedy AI Team",
    date: "2026-03-01",
    tags: ["Product", "Docs", "API"],
  },
  {
    slug: "what-is-beedy-core-concepts",
    title: "What is Beedy AI? Core Concepts You Should Know",
    excerpt:
      "Beedy AI is a modern conversational AI platform for 24/7 support, seamless integrations, and analytics. Here are the core concepts and terminology that make the platform click.",
    imageUrl: Blog2,
    author: "Priya Nair",
    date: "2026-02-18",
    tags: ["Docs", "Product", "Terminology"],
  },
  {
    slug: "quickstart-from-zero-to-first-assistant",
    title: "Quickstart: From Zero to Your First Beedy Assistant in Minutes",
    excerpt:
      "A practical walkthrough of your first setup: connect a channel, test a conversation, and iterate safely before rolling out to real customers.",
    imageUrl: Blog3,
    author: "Aisha Rahman",
    date: "2026-02-10",
    tags: ["Getting Started", "Integrations", "Product"],
  },
  {
    slug: "seamless-integration-playbook",
    title: "Seamless Integration Playbook: Email, Chat, CRM, and Webhooks",
    excerpt:
      "How teams connect Beedy AI to existing workflows without rewrites—channels, connectors, webhooks, and the mental model for reliable routing.",
    imageUrl: Blog4,
    author: "Marco Silva",
    date: "2026-01-29",
    tags: ["Integrations", "API", "Workflows"],
  },
  {
    slug: "advanced-analytics-what-to-measure",
    title: "Advanced Analytics: What to Measure in AI Support Conversations",
    excerpt:
      "Dashboards are only useful if the metrics are. Here’s how to track resolution rate, deflection, escalations, and where to focus improvements.",
    imageUrl: Blog5,
    author: "Owen Park",
    date: "2026-01-12",
    tags: ["Analytics", "Product", "Operations"],
  },
  {
    slug: "api-authentication-oauth-keys",
    title: "API Authentication in Beedy AI: Keys, OAuth, and Safer Defaults",
    excerpt:
      "A security-minded overview of how to authenticate requests, rotate credentials, and avoid common pitfalls when integrating Beedy AI via API.",
    imageUrl: Blog6,
    author: "Dr. Lena Kovács",
    date: "2025-12-22",
    tags: ["API", "Security", "Docs"],
  },
  {
    slug: "rate-limits-and-errors-that-scale",
    title: "Rate Limits & Error Codes: Designing Clients That Scale",
    excerpt:
      "Learn how to build resilient clients: backoff strategies, interpreting error codes, and how to keep user experience stable under load.",
    imageUrl: Blog7,
    author: "Diego Alvarez",
    date: "2025-12-05",
    tags: ["API", "Engineering", "Reliability"],
  },
  {
    slug: "graphql-metrics-quickstart",
    title: "GraphQL Metrics Quickstart: Visibility Before Optimization",
    excerpt:
      "Before you tune performance, you need signal. Here’s how to start collecting GraphQL metrics and turn logs into actionable insights.",
    imageUrl: Blog8,
    author: "Ravi Patel",
    date: "2025-11-20",
    tags: ["GraphQL Metrics", "Analytics", "Engineering"],
  },
  {
    slug: "edge-cache-rules-and-invalidation",
    title: "Edge Cache Rules & Invalidation: Keep GraphQL Fast and Correct",
    excerpt:
      "Caching is easy until it isn’t. We break down cache rules, scopes, key fields, and safe invalidation patterns for real apps.",
    imageUrl: Blog9,
    author: "Maya Chen",
    date: "2025-11-03",
    tags: ["Edge Cache", "GraphQL", "Performance"],
  },
  {
    slug: "cli-and-mcp-server-local-dev",
    title: "CLI + MCP Server: A Local Dev Setup That Feels Instant",
    excerpt:
      "Spin up the MCP server, iterate on configuration, and validate integrations locally. This is the workflow we recommend for fast, safe development.",
    imageUrl: Blog10,
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

export { POSTS, CATEGORIES };