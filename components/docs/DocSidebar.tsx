"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { DOCS_NAV_DATA, DocNavItem } from "@/lib/constants/docs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "../ui/separator";

// recursive component for nested nav items
function NavItem({ item, level = 0 }: { item: DocNavItem; level?: number }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(isMobile ? false : true);
  const hasChildren = item.children && item.children.length > 0;

  // highlight if current path starts with the item href
  const isActive = item.href ? pathname?.startsWith(item.href) : false;

  return (
    <li>
      <div
        className={`flex items-center justify-between text-sm font-medium ${level > 0 ? "pl-4 border-l border-border py-1.5" : `py-1 ${isMobile ? "text-neutral-600 text-lg font-normal uppercase" : ""}`} ${isActive ? "text-primary" : ""}`}
      >
        <Link
          href={item.href || "#"}
          className={`truncate hover:text-primary w-full ${isMobile ? "text-2xl" : "text-sm"}`}
          onClick={() => hasChildren && !isMobile && setOpen((o) => !o)}
        >
          {item.title}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Collapse section" : "Expand section"}
            className={`cursor-pointer ${isMobile ? "text-2xl" : "text-sm"}`}
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

interface DocSidebarProps {
  // when true the sidebar is rendered without responsive hiding and fixed positioning
  mobile?: boolean;
}

export default function DocSidebar({ mobile = false }: DocSidebarProps) {
  // base classes; hide on small screens unless mobile override
  const baseClass = mobile
    ? "flex relative w-full h-full bg-white flex-col px-6 py-10 overflow-y-auto"
    : "hidden md:flex fixed bottom-0 top-8 w-64 bg-white flex-col px-6 py-10 overflow-y-auto";

    const isMobile = useIsMobile();

  return (
    <aside className={baseClass}>
      <nav>
        {isMobile ? (
          <div className="flex flex-col gap-2 mb-6">
            <h3 className="text-lg mb-2 font-medium text-neutral-600">MENU</h3>
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/" className="text-2xl font-semibold">
                <span className="">Home</span>
              </Link>
              <Link href="/docs" className="text-2xl font-semibold">
                <span className="">Docs</span>
              </Link>
              <Link href="/blog" className="text-2xl font-semibold">
                <span className="">Blog</span>
              </Link>
            </div>
          </div>
        ) : null}
        <Separator className="my-4" />
        <ul className="space-y-2">
          {DOCS_NAV_DATA.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
