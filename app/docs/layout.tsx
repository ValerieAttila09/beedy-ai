import type { Metadata } from "next";
import React from "react";
import DocSidebar from "../../components/docs/DocSidebar";

export const metadata: Metadata = {
  title: "Docs - Beedy AI",
  description: "Technical documentation and guides for Beedy AI",
};

import { useDocsSidebarStore } from "@/lib/store/use-doc-sidebar";
import { Menu, X } from "lucide-react";

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isOpen, toggleDocsSidebar } = useDocsSidebarStore();

  return (
    <div className="flex min-h-screen">
      {/* desktop sidebar */}
      <DocSidebar />

      {/* mobile header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-border z-40">
        <div className="flex items-center justify-between px-4 py-2">
          <button onClick={toggleDocsSidebar} aria-label="Toggle docs menu">
            <Menu className="size-5" />
          </button>
          <span className="font-semibold">Docs</span>
          <div />
        </div>
      </header>

      {/* mobile sidebar overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black opacity-25"
            onClick={toggleDocsSidebar}
          />
          <div className="relative bg-white w-64 h-full shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-end mb-4">
              <button onClick={toggleDocsSidebar} aria-label="Close menu">
                <X className="size-5" />
              </button>
            </div>
            <DocSidebar />
          </div>
        </div>
      )}

      <main className="flex-1 pt-14 p-8 md:ml-64">{/* account for sidebar width and header */}
        {children}
      </main>
    </div>
  );
}
