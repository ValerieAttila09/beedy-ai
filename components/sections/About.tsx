"use client";

import {ABOUT_SECTION_EN, HERO_SECTION_EN} from '@/lib/constants/en';
import Image from 'next/image';
import AboutUsImage from "../../assets/images/joel-filipe-VuwAfoHpxgs-unsplash.jpg"
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {MarqueeAnimation} from "@/components/widgets/MarqueeAnimation";

const About = () => {
  return (
    <section className="w-full min-h-screen px-[6%] sm:px-[8%] md:px-[12%] py-20">
      <div className="container relative grid grid-cols-12 gap-6 sm:gap-8">
        <div className="hidden col-span-4" />
        <div className="col-span-4 space-y-4 sticky top-20 self-start">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded bg-neutral-100" />
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
        <div className="col-span-8 space-y-6">
          <div className="max-w-xl space-y-6">
            <h1 className="text-6xl font-bold text-foreground">{ABOUT_SECTION_EN.title}</h1>
            <p className="text-lg font-medium text-neutral-700">{ABOUT_SECTION_EN.description}</p>
          </div>
          <div className="w-full grid grid-cols-2">
            <h3 className="text-2xl col-span-1 font-semibold text-neutral-900">{ABOUT_SECTION_EN.corePhilosophyTitle}</h3>
            <p className="text-base col-span-1 font-normal text-neutral-700">{ABOUT_SECTION_EN.corePhilosophy}</p>
          </div>
          <Image src={AboutUsImage} alt='About us image' width={720} height={480} className='w-full h-auto object-cover rounded-lg' />
          <div className="w-full">
            <h3 className="text-2xl font-semibold text-neutral-900">Beedy AI Founders</h3>
            <div className="w-full">
              {ABOUT_SECTION_EN.founders.map((founder, i) => {
                return (
                  <div key={founder.name} className="border-b last:border-0 border-border py-6 flex items-center justify-between">
                    <div className="flex items-center justify-start gap-8">
                      <span className="text-md font-thin text-neutral-500">{i + 1}</span>
                      <span className="text-md text-neutral-900 font-medium">{founder.name}</span>
                    </div>
                    <span className="text-neutral-600 font-normal text-md">{founder.role}</span>
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