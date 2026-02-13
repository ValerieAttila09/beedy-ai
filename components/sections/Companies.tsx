import React from 'react';
import {HERO_SECTION_EN} from "@/lib/constants/en";
import {MarqueeAnimation} from "@/components/widgets/MarqueeAnimation";

const Companies = () => {
  return (
    <div className="w-full px-[6%] sm:px-[8%] md:px-[12%] py-20 space-y-8">
      <div className="block mx-auto max-w-3xl space-y-4">
        <div className="space-y-2">
          <h3 className="sm:text-center sm:text-4xl text-3xl md:text-5xl font-medium text-foreground">{HERO_SECTION_EN.supports}</h3>
          <p className="sm:text-center font-normal text-neutral-600">Our Company has been supported  and collaborated with many companies.</p>
        </div>
      </div>
      <MarqueeAnimation />
    </div>
  )
}

export default Companies;