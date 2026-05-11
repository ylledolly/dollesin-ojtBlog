"use client";

import React from "react";
import { ScrapbookItem } from "./scrapbook-item";
import TextType from "@/components/reactbits/TextType";

export const ScrapbookCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* Central Title */}
      <div className="absolute z-0 text-center pointer-events-none px-4">
        <h1 className="text-white text-6xl md:text-8xl lg:text-[100px] font-serif leading-[0.8] opacity-90 select-none tracking-tighter pointer-events-none">
          Hi, I&apos;m<br />
          <span className="relative left-2 md:left-[35px]">
            <TextType
              className="relative inline-block italic min-w-[180px] md:min-w-[280px]"
              text={["Karylle", "Kah", "Ylle"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeed={undefined}
              cursorBlinkDuration={0.5}
            />
          </span>
        </h1>
      </div>

      
      {/* Top Left Area - Beads spelling ASHLEIGH */}
      <ScrapbookItem 
        src="/images/21.png" 
        alt="L bead" 
        initialX="-415px" 
        initialY="-108px" 
        width={60} 
        height={60} 
        rotation={-15}
        zIndex={10}
      />
      <ScrapbookItem 
        src="/images/22.png" 
        alt="L bead2" 
        initialX="-368px" 
        initialY="-115px" 
        width={60} 
        height={60} 
        rotation={5}
        zIndex={11}
      />
      <ScrapbookItem 
        src="/images/23.png" 
        alt="E bead" 
        initialX="-330px" 
        initialY="-117px" 
        width={60} 
        height={60} 
        rotation={-5}
        zIndex={12}
      />
      <ScrapbookItem 
        src="/images/20.png" 
        alt="Y bead" 
        initialX="-461px" 
        initialY="-113px" 
        width={60} 
        height={60} 
        rotation={10}
        zIndex={13}
      />
    

      {/* Middle Left Area */}
      <ScrapbookItem 
        src="/images/camera.png" 
        alt="Pink Camera" 
        initialX="-300px" 
        initialY="-20px" 
        width={350} 
        height={350} 
        rotation={-4}
        zIndex={20}
        priority={true}
      />

      <ScrapbookItem 
        src="/images/28.png" 
        alt="Arrow" 
        initialX="-540px" 
        initialY="22px" 
        width={190} 
        height={190} 
        rotation={-4}
        zIndex={20}
      />
      <ScrapbookItem 
        src="/images/19.png" 
        alt="CD" 
        initialX="320px" 
        initialY="22px" 
        width={250} 
        height={250} 
        rotation={5}
        zIndex={41}
        spin={true}
        spinDuration={4}
      />
      <ScrapbookItem 
        src="/images/24.png" 
        alt="Flowers Left" 
        initialX="230px" 
        initialY="-116px" 
        width={130} 
        height={130} 
        rotation={-15}
        zIndex={15}
      />

      {/* Center Price Tag */}
      <ScrapbookItem 
        src="/images/25.png" 
        alt="Price Tag" 
        initialX="8px" 
        initialY="146px" 
        width={60} 
        height={40} 
        rotation={-12}
        zIndex={45}
      />

      <ScrapbookItem 
        src="/images/27.png" 
        alt="Jewelry Pot" 
        initialX="-498px" 
        initialY="222px" 
        width={300} 
        height={300} 
        rotation={8}
        zIndex={12}
      />
      <ScrapbookItem 
        src="/images/26.png" 
        alt="Small Blue Flower Right" 
        initialX="-103px" 
        initialY="-120px" 
        width={70} 
        height={70} 
        rotation={20}
        zIndex={11}
      />

      {/* Bottom Left Area */}
      <ScrapbookItem 
        src="/images/5.png" 
        alt="Button pink" 
        initialX="520px" 
        initialY="27px" 
        width={150} 
        height={150} 
        rotation={-5}
        zIndex={35}
      />
      <ScrapbookItem 
        src="/images/15.png" 
        alt="Pink Travel Card" 
        initialX="-292px" 
        initialY="252px" 
        width={280} 
        height={280} 
        rotation={15}
        zIndex={42}
      />
      <ScrapbookItem 
        src="/images/16.png" 
        alt="Yellow Travel Card" 
        initialX="-210px" 
        initialY="266px" 
        width={280} 
        height={280} 
        rotation={-15}
        zIndex={42}
      />
      <ScrapbookItem 
        src="/images/17.png" 
        alt="Pink PG13 Ticket" 
        initialX="141px" 
        initialY="232px" 
        width={150} 
        height={150} 
        rotation={-8}
        zIndex={41}
      />
      
      {/* Bottom Center Area */}
      <ScrapbookItem 
        src="/images/14.png" 
        alt="Cherries" 
        initialX="11px" 
        initialY="260px" 
        width={180} 
        height={180} 
        rotation={-15}
        zIndex={50}
        hoverSwing={true}
      />
      
      <ScrapbookItem 
        src="/images/18.png" 
        alt="Studio Jam Poster" 
        initialX="331px" 
        initialY="177px" 
        width={260} 
        height={320} 
        rotation={-5}
        zIndex={55}
      />
      
      {/* Bottom Right Area */}
      <ScrapbookItem 
        src="/images/2.png" 
        alt="Mushroom card" 
        initialX="551px" 
        initialY="230px" 
        width={200} 
        height={200} 
        rotation={10}
        zIndex={30}
      />

      <ScrapbookItem 
        src="/images/35.png" 
        alt="Mean Girls Cd" 
        initialX="551px" 
        initialY="230px" 
        width={200} 
        height={200} 
        rotation={10}
        zIndex={30}
        holographic={true}
      />

      <ScrapbookItem 
        src="/images/34.png" 
        alt="Vintage Flipped Phone" 
        initialX="420px" 
        initialY="-100px" 
        width={200} 
        height={200} 
        rotation={-15}
        zIndex={10}
      />
    </div>
  );
};
