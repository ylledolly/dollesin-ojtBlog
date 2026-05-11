import React from "react";
import { ScrapbookCanvas } from "@/components/scrapbook/scrapbook-canvas";

export default function HomeSection() {
  return (
    <section 
      id="home" 
      // Changed overflow-hidden to overflow-visible or simply removed it
      // Added h-screen to ensure it takes up exactly the viewport
      className="relative min-h-screen w-full flex items-center justify-center bg-black text-white snap-start"
    >
      <div className="w-full h-full absolute inset-0 overflow-visible">
         <ScrapbookCanvas />
      </div>
    </section>
  );
}
