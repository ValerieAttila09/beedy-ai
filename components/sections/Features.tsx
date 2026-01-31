import React from 'react'
import ChatBotView from '../widgets/ChatBotView'
import Image from 'next/image'
import ChatbotView from "@/assets/images/BeedyAI.png"
import { FEATURES_EN } from '@/lib/constants/en'

const Features = () => {
  return (
    <div className='w-full px-[6%] sm:px-[8%] md:px-[12%] space-y-6 py-10'>
      <div className="space-y-6 py-4">
        <div className="w-full space-y-4 flex flex-col items-center justify-center">
          <span className="text-md text-neutral-600 font-normal px-4 py-2 rounded-full shadow border-border">Features</span>
          <h1 className="text-5xl font-semibold text-foreground">Solve Your Biggest Tasks Challenges</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          {FEATURES_EN.map((feature, i) => {
            return (
              <div key={i + 1} className="rounded-lg bg-white shadow border-border p-5 space-y-6">
                <feature.icon className='text-yellow-500 size-8' />
                <h2 className="text-lg font-semibold text-foreground">{feature.title}</h2>
                <p className="text-sm font-thin text-neutral-800">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full mx-auto block">
        <ChatBotView>
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute z-5 inset-x-12 top-12 rounded-t-2xl p-3 bg-white/10 backdrop-blur-xs border border-border">
              <Image src={ChatbotView} alt='Chatbot View' className="w-full h-auto object-cover rounded-xl border border-border" height={720} width={1080}/>
            </div>
          </div>
        </ChatBotView>
      </div>
    </div>
  )
}

export default Features
