"use client";
import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiNestjs, SiTailwindcss, SiShadcnui } from "react-icons/si";
import { motion } from "motion/react";
import ShinyText from "@/components/reactbits/ShinyText";

const stackItems = [
  { 
    name: "Nest.js", 
    category: "Framework",
    color: "#822e4d",
    bgColor: "bg-[#822e4d]",
    borderColor: "border-[#822e4d]",
    character: "/stacks/37.png",
    logo: SiNestjs
  },
  { 
    name: "Shadcn UI & Radix UI", 
    category: "Components",
    color: "#e6baa0",
    bgColor: "bg-[#e6baa0]",
    borderColor: "border-[#e6baa0]",
    character: "/stacks/39.png",
    logo: SiShadcnui
  },
  { 
    name: "TailwindCSS", 
    category: "Styling",
    color: "#dd5340",
    bgColor: "bg-[#dd5340]",
    borderColor: "border-[#dd5340]",
    character: "/stacks/38.png",
    logo: SiTailwindcss
  },
  { 
    name: "Next.js", 
    category: "Framework",
    color: "#eec047",
    bgColor: "bg-[#eec047]",
    borderColor: "border-[#eec047]",
    character: "/stacks/36.png",
    logo: SiNextdotjs
  },
];

export default function StacksPage() {
  return (
    <section id="stacks" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Responsive: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:gap-16 gap-12">
          
          {/* Left Side - Title & Description */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:h-fit">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
              <ShinyText text="The" color="#b5b5b5" shineColor="#ffffff" speed={2} spread={120} />
              <br />
              <ShinyText text="Stacks" color="#b5b5b5" shineColor="#ffffff" speed={2} spread={120} />
            </h1>
            <p className="mt-6 text-zinc-400 text-lg font-light max-w-sm">
              A purposeful integration of modern technologies and frameworks used to engineer our Payroll Management System. This collection represents the tools I mastered to bridge the gap between intuitive UI/UX design and robust full-stack functionality.
            </p>
          </div>

          {/* Right Side - Content Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stackItems.map((item, index) => {
                const LogoIcon = item.logo;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`${item.bgColor} ${item.borderColor} text-white border-2 rounded-3xl p-8 h-72 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-white/5`}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top Section - Category & Title */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
                          {item.category}
                        </p>
                        <LogoIcon size={24} className="text-white/40 group-hover:text-white group-hover:rotate-12 transition-all duration-500" />
                      </div>
                      <h3 className="mt-6 font-serif text-4xl md:text-5xl tracking-tight leading-[0.9]">
                        {item.name}
                      </h3>
                    </div>

                    {/* Character Image - Positioned bottom right */}
                    <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-out">
                      <Image
                        src={item.character}
                        alt={`${item.name} character`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain drop-shadow-2xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
