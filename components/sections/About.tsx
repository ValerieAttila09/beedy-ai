"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_SECTION_EN } from '@/lib/constants/en';
import { AnimatedBeamDemo } from '../widgets/AnimatedBeam';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">{ABOUT_SECTION_EN.title}</h2>
          <p className="mt-4 text-neutral-600">{ABOUT_SECTION_EN.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_SECTION_EN.points.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-lg border bg-white shadow-sm">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <AnimatedBeamDemo />
        </div>
      </div>
    </section>
  );
}

export default About