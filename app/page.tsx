import React from "react";
import HomeSection from "./home/page";
import LogsSection from "./logs/page";
import StacksSection from "./stacks/page";
import AboutMeSection from "./aboutme/page";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans selection:bg-zinc-800">
      <main className="w-full h-screen  scroll-smooth relative">
        <HomeSection />
        <LogsSection />
        <StacksSection />
        <AboutMeSection />
      </main>
    </div>
  );
}
