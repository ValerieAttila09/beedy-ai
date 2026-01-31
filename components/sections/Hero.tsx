import { cn } from '@/lib/utils'
import React from 'react'
import { AnimatedGridPattern } from '../ui/animated-grid-pattern'
import { Button } from '../ui/button'
import { MarqueeAnimation } from '../widgets/MarqueeAnimation'

const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden border p-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={2}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%]"
        )}
      />
      <div className="asbolute inset-0 z-20 bg-transparent">
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 sm:gap-12">
          <div className="max-w-3xl flex flex-col items-center justify-center gap-3">
            <h1 className="text-6xl font-bold text-center">Unleash the Power of AI: Revolutionize Your Interactions with Beedy AI</h1>
            <p className="text-lg text-center text-neutral-700 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus sequi ut eaque fugiat quo aspernatur.</p>
            <div className="flex items-center gap-2">
              <Button className='rounded-full! bg-blue-500 hover:bg-blue-600' size={'lg'}>Get Started</Button>
              <Button variant={'outline'} className='rounded-full!' size={'lg'}>Read Docs</Button>
            </div>
          </div>
          <div className="pt-6">
            <div className="w-full flex items-center justify-center">
              <h3 className="text-md font-medium text-center text-neutral-500">Supported by many well-known companies</h3>
            </div>
            <MarqueeAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero