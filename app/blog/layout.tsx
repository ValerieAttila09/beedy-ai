import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog - Beedy AI",
  description: "Read articles, tutorials, and announcements from Beedy AI.",
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
    </div>
  );
}
