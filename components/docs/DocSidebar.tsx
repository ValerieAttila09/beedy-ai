"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { DOCS_NAV_DATA, DocNavItem } from "@/lib/constants/docs";

// recursive component for nested nav items
function NavItem({ item, level = 0 }: { item: DocNavItem; level?: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;

  // highlight if current path starts with the item href
  const isActive = item.href ? pathname?.startsWith(item.href) : false;

  return (
    <li>
      <div
        className={`flex items-center justify-between text-sm font-medium ${level > 0 ? "pl-4 border-l border-border py-1.5" : "py-1"} ${isActive ? "text-primary" : "text-neutral-600"}`}
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
            className="text-sm cursor-pointer"
          >
            {open ? "-" : "+"}
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="mt-1">
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
    <aside className="hidden md:flex fixed bottom-0 top-8 w-64 bg-white flex-col px-6 py-10 overflow-y-auto">
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
