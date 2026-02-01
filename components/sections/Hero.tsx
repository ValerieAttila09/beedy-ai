import { cn } from '@/lib/utils'
import React from 'react'
import { AnimatedGridPattern } from '../ui/animated-grid-pattern'
import { Button } from '../ui/button'
import { MarqueeAnimation } from '../widgets/MarqueeAnimation'
import { HERO_SECTION_EN } from '@/lib/constants/en'
import AI_Prompt from '../kokonutui/ai-prompt'

const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden border p-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={2}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%]"
        )}
      />
      <div className="asbolute inset-0 z-20 pt-6 sm:pt-8 bg-transparent">
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 sm:gap-12">
          <div className="max-w-3xl flex flex-col items-center justify-center gap-3">
            <h1 className="text-6xl font-bold text-center">{HERO_SECTION_EN.title}</h1>
            {/* <p className="text-lg text-center text-neutral-700 font-normal">{HERO_SECTION_EN.description}</p>
            <div className="flex items-center gap-2">
              <Button className='rounded-full! bg-blue-500 hover:bg-blue-600' size={'lg'}>{HERO_SECTION_EN.button}</Button>
              <Button variant={'outline'} className='rounded-full!' size={'lg'}>{HERO_SECTION_EN.button2}</Button>
            </div> */}
          </div>
          <div className="w-full pt-6 flex items-center">
            {/* <div className="w-full flex items-center justify-center">
              <h3 className="text-md font-medium text-center text-neutral-500">{HERO_SECTION_EN.supports}</h3>
            </div>
            <MarqueeAnimation /> */}
            <AI_Prompt />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero