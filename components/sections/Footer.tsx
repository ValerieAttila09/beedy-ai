import React from 'react';
import { FOOTER_SECTION_EN } from '@/lib/constants/en';
import { Icons } from '@/lib/constants/icons';
import { Twitter, Github, Send, Download } from 'lucide-react';

const AppBadge: React.FC<{ label: string }> = ({ label }) => (
  <a aria-label={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/95 text-sm font-medium text-neutral-800 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1" href="#">
    <Download size={16} />
    <span>{label}</span>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-8">
        {/* Top row with brand and badges */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
              <Icons.beedyAI />
            </div>
            <div>
              <div className="font-semibold">{FOOTER_SECTION_EN.brand.name}</div>
              <div className="text-sm text-neutral-500">{FOOTER_SECTION_EN.brand.tagline}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden sm:block text-sm text-neutral-600 mr-4">{FOOTER_SECTION_EN.brand.tagline}</div>
            <div className="flex items-center gap-2">
              {FOOTER_SECTION_EN.brand.badges.map((b) => (
                <AppBadge key={b.label} label={b.label} />
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-border/50" />

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {FOOTER_SECTION_EN.sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-semibold mb-3">{s.title}</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                {s.links.map((l) => (
                  <li key={l.title}><a href={l.href} className="hover:underline hover:text-neutral-800 transition-colors">{l.title}</a></li>
                ))}
              </ul>
              {s.title === 'Legal' && (
                <div className="mt-4">
                  <div className="text-sm font-semibold mb-2">Social</div>
                  <div className="flex items-center gap-3">
                    <a href={FOOTER_SECTION_EN.social[0].href} aria-label="Twitter" className="p-2 rounded-md bg-white/95 hover:bg-neutral-100 transition-transform transform hover:scale-105"><Twitter size={18} /></a>
                    <a href={FOOTER_SECTION_EN.social[1].href} aria-label="Github" className="p-2 rounded-md bg-white/95 hover:bg-neutral-100 transition-transform transform hover:scale-105"><Github size={18} /></a>
                    <a href={FOOTER_SECTION_EN.social[2].href} aria-label="Discord" className="p-2 rounded-md bg-white/95 hover:bg-neutral-100 transition-transform transform hover:scale-105"><Send size={18} /></a>
                    <a href={FOOTER_SECTION_EN.social[3].href} aria-label="Telegram" className="p-2 rounded-md bg-white/95 hover:bg-neutral-100 transition-transform transform hover:scale-105"><Send size={18} /></a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-neutral-500 text-center">{FOOTER_SECTION_EN.copyright}</div>
      </div>
    </footer>
  )
}

export default Footer