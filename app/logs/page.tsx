import ShinyText from "@/components/reactbits/ShinyText";
import React from "react";
import LogsStackClient from "./LogsStackClient";

export default function LogsPage() {
  return (
    <section id="logs" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Responsive: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:gap-16 gap-12 items-start">
          
          {/* Left Side - Title & Description */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:h-fit">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
              <ShinyText text="The" color="#b5b5b5" shineColor="#ffffff" speed={2} spread={120} />
              <br />
              <ShinyText text="Logs" color="#b5b5b5" shineColor="#ffffff" speed={2} spread={120} />
            </h1>
            <p className="mt-8 text-zinc-400 text-lg font-light max-w-sm">
              A chronological record of my 486-hour internship journey, documenting the transition from classroom theory to professional software development. These entries detail the weekly milestones, technical challenges, and collaborative breakthroughs encountered while building our enterprise systems.
            </p>
          </div>

          {/* Right Side - Content Grid */}
          <div className="w-full lg:w-2/3">
            <LogsStackClient />
          </div>

        </div>
      </div>
    </section>
  );
}
