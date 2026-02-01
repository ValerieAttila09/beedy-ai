"use client";

import React, { useEffect, useRef } from 'react';
import { NAVBAR_MENU_DATA } from '@/lib/constants';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tlRef.current = gsap.timeline({ paused: true })
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.2, ease: 'power2.out' }, 0)
      .fromTo(panelRef.current, { x: '-100%' }, { x: '0%', duration: 0.35, ease: 'power3.out' }, 0);

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (open) {
      if (overlayRef.current) overlayRef.current.style.pointerEvents = 'auto';
      tlRef.current?.play();
      document.body.style.overflow = 'hidden';
    } else {
      tlRef.current?.reverse();
      // ensure overlay doesn't intercept clicks when closed after animation
      const t = setTimeout(() => {
        if (overlayRef.current) overlayRef.current.style.pointerEvents = 'none';
      }, 350);
      document.body.style.overflow = '';
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="md:hidden">
      <div ref={overlayRef} onClick={onClose} className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none" />
      <aside ref={panelRef} className="fixed left-0 top-0 bottom-0 w-72 bg-white shadow-xl -translate-x-full" aria-hidden={!open}>
        <div className="p-4 border-b flex items-center justify-between">
          <div className="font-semibold">Menu</div>
          <button aria-label="Close menu" onClick={onClose}><X /></button>
        </div>
        <nav className="p-4">
          <ul className="space-y-3">
            {NAVBAR_MENU_DATA.map((m) => (
              <li key={m.title}><a href={m.href} className="block px-2 py-2 rounded hover:bg-muted">{m.title}</a></li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar