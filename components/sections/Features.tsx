import React from 'react';
import ChatBotView from '../widgets/ChatBotView';
import Image from 'next/image';
import AI_Option from "@/assets/images/AI option.png";
import AI_Processes from "@/assets/images/AI Processes.png";
import VoiceToText from "@/assets/images/Voice to text.png";
import ChatbotView from "@/assets/images/Beedy AI.png";
import { FEATURES_EN } from '@/lib/constants/en';

const Features = () => {
  return (
    <div className='w-full px-[6%] sm:px-[8%] md:px-[12%] space-y-20 py-20'>
      <div className="space-y-6 py-4">
        <div className="w-full space-y-4 flex flex-col items-center justify-center">
          <span className="text-xs text-neutral-600 font-normal px-4 py-1 rounded-full shadow border border-border">Features</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">Solve Your Biggest Tasks Challenges</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {FEATURES_EN.map((feature, i) => {
            return (
              <div key={i + 1} className="rounded-lg bg-white shadow border-border p-5 space-y-2 sm:space-y-6">
                <feature.icon className='text-yellow-500 size-8' />
                <h2 className="text-lg font-semibold text-foreground">{feature.title}</h2>
                <p className="text-sm font-thin text-neutral-800">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden md:block relative w-full">
        <div className="absolute z-25 -bottom-5 -left-10 rounded-lg p-3 bg-white/10 backdrop-blur-xs border border-border">
          <Image src={AI_Processes} alt='AI Processes' className="w-72 h-auto object-cover rounded-lg" height={720} width={720} />
        </div>
        <div className="absolute z-25 -top-15 right-1/5 rounded-lg p-3 bg-white/10 backdrop-blur-xs border border-border">
          <Image src={AI_Option} alt='AI Processes' className="w-48 h-auto object-cover rounded-lg" height={720} width={720} />
        </div>
        <div className="absolute z-25 bottom-1/6 -right-10 rounded-lg p-3 bg-white/10 backdrop-blur-xs border border-border">
          <Image src={VoiceToText} alt='AI Processes' className="w-80 h-auto object-cover rounded-lg" height={720} width={720} />
        </div>
        <div className="w-full mx-auto block">
          <ChatBotView>
            <div className="relative w-full h-full overflow-b-hidden">
              <div className="absolute z-5 inset-x-12 top-12 rounded-t-2xl p-3 bg-white/10 backdrop-blur-xs border border-border">
                <Image src={ChatbotView} alt='Chatbot View' className="w-full h-auto object-cover rounded-xl border border-border" height={720} width={1080} />
              </div>
            </div>
          </ChatBotView>
        </div>
      </div>
    </div>
  );
}

export default Features;
