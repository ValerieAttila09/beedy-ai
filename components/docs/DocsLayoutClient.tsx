"use client";

import React from "react";
import DocSidebar from "./DocSidebar";
import { useDocsSidebarStore } from "@/lib/store/use-doc-sidebar";
import { Menu, X } from "lucide-react";
import DocsNavbar from "../widgets/DocsNavbar";
import gsap from "gsap";

export default function DocsLayoutClient({ children }: { children: React.ReactNode }) {
  const { isOpen, toggleDocsSidebar } = useDocsSidebarStore();
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const tlRef = React.useRef<gsap.core.Timeline | null>(null);

  React.useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return;
    // create timeline once
    tlRef.current = gsap.timeline({ paused: true })
      .fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
      )
      .fromTo(
        panelRef.current,
        { x: -300, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.3, ease: 'power2.out' },
        0
      );
  }, []);

  React.useEffect(() => {
    if (!tlRef.current || !overlayRef.current) return;
    if (isOpen) {
      overlayRef.current.classList.remove('pointer-events-none');
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
      overlayRef.current.classList.add('pointer-events-none');
    }
  }, [isOpen]);

  return (
    <div className="flex min-h-screen max-w-[95rem] mx-auto">
      <DocsNavbar />

      {/* desktop sidebar */}
      <DocSidebar />

      {/* mobile sidebar overlay */}
      <div
        ref={overlayRef}
        className="md:hidden fixed inset-0 z-50 pointer-events-none opacity-0"
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-black opacity-25"
          onClick={toggleDocsSidebar}
        />
        <div
          ref={panelRef}
          className="relative bg-white w-64 h-full shadow-lg p-6 overflow-y-auto -translate-x-full"
        >
          <div className="flex justify-end mb-4">
            <button onClick={toggleDocsSidebar} aria-label="Close menu">
              <X className="size-5" />
            </button>
          </div>
          <DocSidebar />
        </div>
      </div>

      <main className="flex-1 pt-14 p-2 md:ml-64">{/* account for sidebar width and header */}
        {children}
      </main>


    </div>
  );
}
