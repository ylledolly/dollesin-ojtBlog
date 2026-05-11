"use client";

import { motion } from "motion/react";
import { logEntries } from "@/lib/logs-data";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogsStackClient() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {logEntries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03, duration: 0.3, ease: "easeOut" }}
          onClick={() => router.push(`/logs/${entry.id}`)}
          className={`group cursor-pointer w-full aspect-square rounded-lg border border-white/10 ${entry.character.color} flex items-center justify-center text-white overflow-hidden relative transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-white/5`}
        >
          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl font-serif tracking-tighter opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
              W{entry.id}
            </span>
            <div className="mt-2 h-px w-0 group-hover:w-8 bg-white/40 transition-all duration-500" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
