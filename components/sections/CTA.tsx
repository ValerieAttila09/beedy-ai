"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CTA_SECTION_EN } from '@/lib/constants/en';
import { Book, MonitorPlay } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Book: <Book size={24} />,
  MonitorPlay: <MonitorPlay size={24} />,
};

const CTA = () => {
  return (
    <section className="py-16 bg-muted border-y border-border w-full px-[6%] sm:px-[8%] md:px-[12%] ">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left content */}
            <div className="p-8">
              <span className="inline-block bg-neutral-100 text-sm text-neutral-700 px-3 py-1 rounded-full">Get Started</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-neutral-900">{CTA_SECTION_EN.title}</h3>
              <p className="mt-3 text-neutral-600 max-w-xl">{CTA_SECTION_EN.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-black text-white px-5 py-2 font-semibold hover:opacity-95 transition">{CTA_SECTION_EN.ctaPrimary}</button>
                {CTA_SECTION_EN.ctaSecondary && <button className="rounded-full border border-neutral-200 text-neutral-700 px-4 py-2 hover:bg-neutral-50 transition">{CTA_SECTION_EN.ctaSecondary}</button>}
              </div>
            </div>

            {/* Right content */}
            <div className="border-t md:border-t-0 md:border-l border-border/50">
              <div className="flex flex-col justify-between">
                {CTA_SECTION_EN.items.map((it) => (
                  <div key={it.title} className="cursor-pointer min-h-36 flex items-start gap-4 p-6 hover:bg-neutral-100 transition first:border-b border-border">
                    <div className="p-4 rounded-full flex items-center justify-center text-foreground">{ICON_MAP[it.icon]}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900">{it.title}</h4>
                      <p className="text-md text-neutral-600">{it.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA