"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { STATS_SECTION_EN } from '@/lib/constants/en';
import { ChartContainer } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from 'recharts';

function useCount(target: number) {
  const [value, setValue] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let start = performance.now();
    const duration = 600;
    const from = 0;
    const to = target;

    function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (t < 1) ref.current = requestAnimationFrame(step);
    }

    ref.current = requestAnimationFrame(step);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [target]);

  return value;
}

const Stats = () => {
  const section = STATS_SECTION_EN;
  const [activeYear, setActiveYear] = useState(1);
  const year = section.years[activeYear];
  const parsedNumbers = useMemo(() => {
    return year.items.map((it) => {
      const raw = String(it.value);
      if (/\d+(\.\d+)?M/.test(raw)) {
        return Math.round(parseFloat(raw) * 1000000);
      }
      if (/\d+(\.\d+)?k/.test(raw)) {
        return Math.round(parseFloat(raw) * 1000);
      }
      if (/\d+%/.test(raw)) {
        return parseInt(raw.replace('%', ''), 10);
      }
      if (/~\d+/.test(raw)) {
        return parseInt(raw.replace(/[^0-9]/g, ''), 10);
      }
      const n = parseInt(raw.replace(/[^0-9]/g, ''), 10);
      return isNaN(n) ? 0 : n;
    });
  }, [year]);

  const counts = parsedNumbers.map((n) => useCount(n));
  const metricKeys = [
    { key: 'teams', label: 'Team Members' },
    { key: 'growth', label: 'Company Growth' },
    { key: 'customers', label: 'New Customers' },
    { key: 'revenue', label: 'Revenue' },
  ] as const;
  const [selectedMetric, setSelectedMetric] = useState<typeof metricKeys[number]['key']>('customers');
  const chartData = (year.timeline || []).map((pt) => ({ name: pt.label, value: (pt as any)[selectedMetric] ?? 0 }));
  const values = chartData.map((d) => d.value);
  const maxVal = Math.max(...values, 1);
  const yDomain: [number, number] = [0, Math.ceil(maxVal * 1.15)];

  function formatStat(label: string, value: number) {
    if (/growth/i.test(label)) return `${value}%`;
    if (/team/i.test(label)) {
      if (value >= 1000) return `${Math.round(value / 1000)}k+`;
      return `${value}`;
    }
    if (/customer/i.test(label)) {
      if (value >= 1000000) return `${(value / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
      if (value >= 1000) return `${Math.round(value / 1000)}k`;
      return `${value}`;
    }
    return `~${value}+`;
  }

  const countsFormatted = year.items.map((it, idx) => {
    const n = typeof it.value === 'number' ? it.value : parseInt(String(it.value).replace(/[^0-9]/g, ''), 10) || 0;
    return formatStat(it.label, counts[idx] || n);
  });

  function CustomTooltip({ active, payload, label }: any) {
    if (!active || !payload || !payload.length) return null;
    const p = payload[0];
    const val = p?.value;
    const metricLabel = metricKeys.find((m) => m.key === selectedMetric)?.label || selectedMetric;
    const formatted = formatStat(metricLabel, val);
    return (
      <div className="rounded-md border bg-white p-2 text-sm shadow">
        <div className="font-medium">{label}</div>
        <div className="text-xs text-neutral-600">{metricLabel}</div>
        <div className="font-mono font-semibold mt-1">{formatted}</div>
      </div>
    );
  }

  return (
    <section className="w-full px-[6%] sm:px-[8%] md:px-[12%] py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="text-5xl font-bold">{section.title}</h1>
            <p className="mt-4 text-neutral-600 max-w-xl">{section.description}</p>

            <div className="mt-8 flex gap-3">
              <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm" href="#">{section.ctaPrimary}</a>
              <a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm" href="#">{section.ctaSecondary}</a>
            </div>

            <div className="mt-8 flex gap-2 items-center">
              {metricKeys.map((m) => (
                <button key={m.key} onClick={() => setSelectedMetric(m.key)} aria-pressed={m.key === selectedMetric} className={`px-3 py-1 rounded-full text-sm ${m.key === selectedMetric ? 'bg-fuchsia-500 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                  {m.label}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {year.items.map((it, idx) => {
                const display = countsFormatted[idx];
                return (
                  <div key={it.label} className="flex flex-col">
                    <div className="text-3xl font-semibold">{display}</div>
                    <div className="text-sm text-neutral-500 mt-1">{it.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative rounded-xl border border-border overflow-hidden">
              <div className="w-full flex items-center justify-between border-b border-border">
                {section.years.map((y, i) => (
                  <button key={y.id} onClick={() => setActiveYear(i)} aria-pressed={i === activeYear} className={`w-full cursor-pointer p-3 text-sm ${i === activeYear ? 'bg-neutral-100 font-medium' : 'bg-white text-neutral-700'}`}>
                    {y.label}
                  </button>
                ))}
              </div>
              <ChartContainer id="stats" config={{ value: { label: 'Trend', color: '#ff8a4c' } }} className="h-full p-4">
                <LineChart data={chartData} margin={{ top: 6, right: 6, left: 12, bottom: 6 }}>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="#dfdfdf" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide domain={yDomain} />
                  <RechartsTooltip content={<CustomTooltip />} />
                  <Line type={"monotone"} dataKey="value" stroke="#df33f2" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} isAnimationActive animationDuration={600} />
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;