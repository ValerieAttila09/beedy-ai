import Image from 'next/image';
import React from 'react'
import { FlickeringGrid } from '../ui/flickering-grid';

const ChatBotView = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background relative h-[780px] w-full overflow-hidden rounded-2xl border">
      <FlickeringGrid
        className="absolute inset-0 z-1 w-full h-full"
        squareSize={6}
        gridGap={6}
        color="#56d364"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={2160}
        width={2160}
      />
      <div className="absolute z-5 inset-0 bg-transparent">
        {children}
      </div>
    </div>
  );
}

export default ChatBotView