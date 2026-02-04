import React from 'react';
import {HERO_SECTION_EN} from "@/lib/constants/en";
import {MarqueeAnimation} from "@/components/widgets/MarqueeAnimation";

const Companies = () => {
  return (
    <div className="w-full px-[6%] sm:px-[8%] md:px-[12%] py-20 space-y-4">
      <div className="block mx-auto max-w-3xl space-y-4">
        <div className="space-y-2">
          <h3 className="text-center sm:text-5xl text-4xl font-medium text-foreground">{HERO_SECTION_EN.supports}</h3>
          <p className="text-center md font-normal text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, accusantium aspernatur dignissimos excepturi fugit minima molestias nobis odit perspiciatis quo ratione saepe voluptatibus.</p>
        </div>
      </div>
      <MarqueeAnimation />
    </div>
  )
}

export default Companies;