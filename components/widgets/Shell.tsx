"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function Shell({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {pathname == "/docs" ? "" : <Navbar />}
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
