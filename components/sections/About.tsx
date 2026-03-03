"use client";

import {ABOUT_SECTION_EN, HERO_SECTION_EN} from '@/lib/constants/en';
import Image from 'next/image';
import AboutUsImage from "../../assets/images/joel-filipe-VuwAfoHpxgs-unsplash.jpg"
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {MarqueeAnimation} from "@/components/widgets/MarqueeAnimation";
import BeedyLogo from "../../assets/icons/logo-beedy-ai-new.png";

const About = () => {
  return (
    <section className="w-full min-h-screen px-[6%] sm:px-[8%] md:px-[12%] py-20">
      <div className="container relative grid sm:grid-cols-12 gap-6 sm:gap-8">
        <div className="sm:hidden sm:col-span-4" />
        <div className="sm:col-span-4 border-b border-border sm:border-b-0 space-y-4 py-4 sm:py-0 sm:sticky sm:top-20 sm:self-start">
          <div className="flex items-center gap-2 sm:p-0">
            <div className="h-8 w-8 overflow-hidden">
              <Image src={BeedyLogo} alt='Beedy Logo' width={48} height={48} className='w-full h-full object-cover'/>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-xl/6">Beedy AI</h3>
              <span className="text-xs text-neutral-600">{ABOUT_SECTION_EN.subtitle}</span>
            </div>
          </div>
          <Link href={"/"} className='flex items-center gap-2 group hover:underline transition-all'>
            <span className="text-2xl font-normal text-neutral-600 group-hover:text-foreground">Start Prompting</span>
            <ArrowUpRight className='size-6 text-neutral-600 group-hover:text-foreground' />
          </Link>
        </div>
        <div className="sm:col-span-8 space-y-6">
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">{ABOUT_SECTION_EN.title}</h1>
            <p className="text-base sm:text-md md:text-lg font-normal text-neutral-700">{ABOUT_SECTION_EN.description}</p>
          </div>
          <div className="w-full grid sm:grid-cols-2 gap-2 sm:gap-0">
            <h3 className="text-xl sm:text-2xl sm:col-span-1 font-semibold text-neutral-900">{ABOUT_SECTION_EN.corePhilosophyTitle}</h3>
            <p className="text-base sm:col-span-1 font-thin text-neutral-700">{ABOUT_SECTION_EN.corePhilosophy}</p>
          </div>
          <Image src={AboutUsImage} alt='About us image' width={720} height={480} className='w-full h-auto object-cover rounded-lg' />
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Beedy AI Founders</h3>
            <div className="w-full">
              {ABOUT_SECTION_EN.founders.map((founder, i) => {
                return (
                  <div key={founder.name} className="border-b last:border-0 border-border py-6 flex items-center justify-between">
                    <div className="flex items-center justify-start gap-8">
                      <span className="text-sm font-thin text-neutral-500">{i + 1}</span>
                      <span className="text-sm text-neutral-900 font-medium">{founder.name}</span>
                    </div>
                    <span className="text-neutral-600 font-normal text-sm">{founder.role}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-sm font-thin text-neutral-600">{ABOUT_SECTION_EN.closingNote}</p>
        </div>
      </div>
    </section>
  );
}

export default About