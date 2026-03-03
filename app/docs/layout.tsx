import type { Metadata } from "next";
import React from "react";
import DocsLayoutClient from "../../components/docs/DocsLayoutClient";

export const metadata: Metadata = {
  title: "Docs - Beedy AI",
  description: "Technical documentation and guides for Beedy AI",
};

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DocsLayoutClient>{children}</DocsLayoutClient>;
}
