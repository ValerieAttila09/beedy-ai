"use client";

import React, { useState } from 'react';
import { PRICING_SECTION_EN } from '@/lib/constants/en';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Users,
  Mail,
  MessageSquare,
  Headphones,
  BarChart,
  Zap,
  Layers,
  Package,
  Clock,
  Wrench,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={16} />,
  Lock: <Lock size={16} />,
  Users: <Users size={16} />,
  Mail: <Mail size={16} />,
  MessageSquare: <MessageSquare size={16} />,
  Headphones: <Headphones size={16} />,
  BarChart: <BarChart size={16} />,
  Zap: <Zap size={16} />,
  Layers: <Layers size={16} />,
  Package: <Package size={16} />,
  Clock: <Clock size={16} />,
  Wrench: <Wrench size={16} />,
};

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 min-h-screen bg-background w-full px-[6%] sm:px-[8%] md:px-[12%]">
      <div className="container sm:mx-auto sm:px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Choose the right plan for you</h2>
          <p className="mt-3 text-neutral-600">50k+ developers trust us • Cancel any time, without any hassle</p>

          <div className="mt-6 inline-flex items-center rounded-full bg-neutral-100 p-1">
            <button onClick={() => setBilling('monthly')} className={`px-5 py-2 cursor-pointer rounded-full ${billing === 'monthly' ? 'bg-white shadow-sm' : 'bg-transparent text-neutral-600'}`}>Monthly</button>
            <button onClick={() => setBilling('yearly')} className={`px-5 py-2 cursor-pointer rounded-full ${billing === 'yearly' ? 'bg-white shadow-sm' : 'bg-transparent text-neutral-600'}`}>Yearly <span className="ml-2 bg-neutral-900 text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span></button>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-4">
          {PRICING_SECTION_EN.plans.map((plan) => (
            <motion.div
              whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12)' }}
              key={plan.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.21 }}
              className={`flex flex-col justify-between rounded-xl border bg-white shadow-sm relative`}
            >
              {plan.popular && <div className="absolute -top-3 left-5 inline-block px-3 py-1 bg-neutral-900 text-white rounded-full text-xs font-semibold">Popular</div>}
              <div className="">
                <div className="space-y-2">
                  <div className="border-b border-border pb-3 px-6 pt-6 bg-accent rounded-t-xl">
                    <h3 className="text-lg/4 font-semibold">{plan.title}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{plan.credits}</p>
                  </div>
                  <div className="text-right flex items-baseline gap-1 px-6">
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{billing === 'monthly' ? plan.priceMonthly : plan.priceYearly}</div>
                    <div className="text-sm text-neutral-500">{billing === 'monthly' ? '/mo' : '/yr'}</div>
                  </div>
                </div>

                <p className="px-6 mt-4 text-sm text-neutral-600">{plan.description}</p>

                <ul className="mt-5 grid gap-3 text-sm text-neutral-600 px-6">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3">
                      <div className="mt-1 text-neutral-700 shrink-0 w-6 h-6 flex items-center justify-center rounded-sm bg-neutral-50 border">{ICON_MAP[f.icon || 'MessageSquare']}</div>
                      <div className="leading-tight">{f.label}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 px-3 pb-3">
                <button className="w-full rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white py-3 font-medium shadow">{plan.cta}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing;