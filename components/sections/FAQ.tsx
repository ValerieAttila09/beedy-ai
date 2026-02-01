"use client";

import React, { useState } from 'react';
import { FAQ_SECTION_EN } from '@/lib/constants/en';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = FAQ_SECTION_EN.categories;
  const currentItems = categories[categoryIndex].items;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold">Frequently asked questions.</motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Categories */}
          <div className="md:col-span-1">
            <div className="hidden md:block border rounded-lg overflow-hidden">
              <ul className="divide-y">
                {categories.map((c, idx) => (
                  <li key={c.title}>
                    <button onClick={() => { setCategoryIndex(idx); setOpenIndex(0); }} className={`w-full text-left p-4 hover:bg-neutral-50 ${idx === categoryIndex ? 'bg-neutral-50 font-semibold' : 'text-neutral-700'}`}>
                      {c.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile select */}
            <div className="md:hidden">
              <select value={categoryIndex} onChange={(e) => { setCategoryIndex(Number(e.target.value)); setOpenIndex(0); }} className="w-full rounded-lg border p-3">
                {categories.map((c, idx) => <option key={c.title} value={idx}>{c.title}</option>)}
              </select>
            </div>
          </div>

          {/* Items */}
          <div className="md:col-span-3">
            <div className="space-y-4">
              {currentItems.map((item, idx) => {
                const open = openIndex === idx;
                return (
                  <div key={item.question} className="border rounded-lg overflow-hidden">
                    <button aria-expanded={open} onClick={() => setOpenIndex(open ? null : idx)} className="w-full text-left p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.question}</h3>
                      </div>
                      <div className={`ml-4 text-neutral-500 transition-transform ${open ? 'rotate-180' : ''}`}><ChevronDown /></div>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-4 pb-4">
                          <p className="text-neutral-600">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ