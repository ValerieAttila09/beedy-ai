"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { DOCS_NAV_DATA, DocNavItem } from "@/lib/constants/docs";
import React from "react";

// recursive component for nested nav items
function NavItem({ item, level = 0 }: { item: DocNavItem; level?: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  // highlight if current path starts with the item href
  const isActive = item.href ? pathname?.startsWith(item.href) : false;

  return (
    <li>
      <div
        className={`flex items-center justify-between text-sm font-medium py-1 ${level > 0 ? "pl-4" : ""
          } ${isActive ? "text-primary" : ""}`}
      >
        <Link
          href={item.href || "#"}
          className="truncate hover:text-primary w-full"
          onClick={() => hasChildren && setOpen((o) => !o)}
        >
          {item.title}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Collapse section" : "Expand section"}
            className="ml-2 text-xs"
          >
            {open ? "-" : "+"}
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="mt-1 space-y-1">
          {item.children!.map((child) => (
            <NavItem key={child.title} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function DocSidebar() {
  return (
    <aside className="hidden md:flex fixed inset-y-0 w-64 bg-white border-r border-border flex-col p-6 overflow-y-auto">
      <div className="mb-6">
        <Link href="/docs" className="text-lg font-semibold">
          Beedy Docs
        </Link>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search docs..."
            className="w-full pl-8 pr-2 py-1 border rounded text-sm"
          />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Press <kbd className="px-1 py-0.5 bg-border rounded">⌘K</kbd> to search
        </div>
      </div>
      <nav>
        <ul className="space-y-2">
          {DOCS_NAV_DATA.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
