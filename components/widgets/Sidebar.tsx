"use client";

import React, { useEffect, useRef } from 'react';
import { NAVBAR_MENU_DATA } from '@/lib/constants';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { useSidebarStore } from '@/lib/store/use-sidebar';

const Sidebar = () => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const sidebarMenuRef = useRef<HTMLLIElement[]>([]);
  const { isOpen, toggleSidebar } = useSidebarStore();

  useEffect(() => {
    if (!panelRef.current) return;
    tlRef.current = gsap.timeline({ paused: true })
      .fromTo(panelRef.current, {
        opacity: 0,
        zIndex: 0
      }, {
        opacity: 1,
        zIndex: 40,
        duration: 0.15,
        ease: 'power2.out'
      }, 0)
      .fromTo(sidebarMenuRef.current, {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power2.out'
      });

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!tlRef.current || !panelRef.current) return;

    if (isOpen) {
      panelRef.current.classList.remove('pointer-events-none');
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
      panelRef.current.classList.add('pointer-events-none');
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <aside ref={panelRef} className="fixed inset-0 w-full bg-white transform z-0 opacity-0 pointer-events-none" aria-hidden={!isOpen}>
        <nav className="px-4 pt-18">
          <ul className="space-y-3">
            {NAVBAR_MENU_DATA.map((m, idx) => (
              <li ref={(el) => {
                if (el) sidebarMenuRef.current[idx] = el;
              }} key={m.title} className='opacity-0'
              >
                <a href={m.href} className="block px-2 py-2 rounded hover:bg-muted">{m.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;