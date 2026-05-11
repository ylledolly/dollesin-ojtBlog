"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShinyText from "@/components/reactbits/ShinyText";

export default function AboutMeSection() {
  return (
    <section id="aboutme" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side - Image/SVG Container */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-square">
                {/* Identification Card with Hover Wiggle */}
                <motion.div
                  className="relative z-10 w-full h-full cursor-pointer"
                  whileHover={{ 
                    rotate: [-3, 3, -3, 3, 0],
                    transition: { 
                      duration: 0.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Image
                    src="/images/about_me.svg"
                    alt="About Me Illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain drop-shadow-2xl relative z-10"
                    priority
                  />
                </motion.div>
                
                {/* Decorative Elements - Outside the Hover Trigger */}
                <motion.div
                  className="absolute -top-10 -right-10 w-24 h-24 z-20 pointer-events-none hidden lg:block"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Image src="/images/14.png" alt="Cherry Decoration" fill className="object-contain" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-12 -left-12 w-28 h-28 z-20 pointer-events-none hidden lg:block"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -15, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Image src="/images/14.png" alt="Cherry Decoration" fill className="object-contain" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-16 w-16 h-16 z-0 pointer-events-none opacity-50 hidden lg:block"
                  animate={{ 
                    x: [0, -10, 0],
                    rotate: [0, 20, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Image src="/images/14.png" alt="Cherry Decoration" fill className="object-contain" />
                </motion.div>

                {/* Additional Stickers */}
                <motion.div
                  className="absolute -top-16 left-1/4 w-30 h-30 z-0 pointer-events-none hidden lg:block"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                >
                   <Image src="/images/49.png" alt="Sticker" fill className="object-contain" />
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -right-16 w-30 h-30 z-30 pointer-events-none opacity-80 hidden lg:block"
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear"
                  }}
                >
                  <Image src="/images/50.png" alt="Sticker" fill className="object-contain" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 right-10 w-30 h-30 z-20 pointer-events-none hidden lg:block"
                  animate={{ 
                    x: [0, 10, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <Image src="/images/53.png" alt="Sticker" fill className="object-contain" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex flex-col">
            <header className="mb-8">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
                <ShinyText text="About" color="#b5b5b5" shineColor="#ffffff" speed={2} spread={120} />
                <br />
                <ShinyText text="Me" color="#b5b5b5" shineColor="#ffffff" speed={2} spread={120} />
              </h2>
              <div className="h-1 w-20 bg-white/20 mt-6 rounded-full" />
            </header>

            <article className="space-y-6 text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-white first-letter:leading-none first-letter:mt-1">
                Hi, I&apos;m <span className="text-white font-medium italic">Karylle Dollesin</span>, a 4th-year IT student. 
                This space is where I document my 486-hour journey as a Full-stack Developer intern at 
                <span className="text-white/90 border-b border-white/20"> Quanby Solutions, Inc.</span>
              </p>
              
              <p>
                Here, I share my journey from designing intuitive UI/UX to implementing complex backend systems, 
                showcasing the technical growth and professional milestones that have shaped my path toward 
                becoming a software developer.
              </p>

              <div className="pt-8 flex items-center gap-4 group">
                <div className="w-12 h-px bg-white/20 group-hover:w-20 transition-all duration-500" />
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/40 group-hover:text-white transition-colors">
                  OJT Blog 2026
                </span>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
