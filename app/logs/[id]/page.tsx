import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getLogEntry } from "@/lib/logs-data";
import LogImagesClient from "./LogImagesClient";
import { IoArrowBackOutline } from "react-icons/io5";

export default async function LogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = getLogEntry(id);

  if (!entry) {
    return (
      <section className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/#logs" className="text-zinc-400 hover:text-white transition">
            Back
          </Link>
          <h1 className="mt-8 font-serif text-5xl">Log not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/#logs"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition group w-fit"
          >
            <IoArrowBackOutline className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>
          <span className="text-zinc-500 text-sm">{entry.date}</span>
        </div>

        <h1 className="mt-8 sm:mt-10 font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
          {entry.title}
        </h1>

        {/* Documentation Images - Above Narrative */}
        <div className="mt-12">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Documentation</h2>
          {entry.images.length === 0 ? (
            <div className="rounded-2xl border-2 border-zinc-800 bg-zinc-900/50 p-8 md:p-12 text-zinc-400 text-center italic">
              No documentation images available for this entry.
            </div>
          ) : (
            <LogImagesClient images={entry.images} title={entry.title} />
          )}
        </div>

        {/* Narrative - Below Images */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">The Narrative</h2>
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light italic">
              {entry.description}
            </p>
            <div className="space-y-6">
              {entry.narrative.map((p, idx) => (
                <p key={idx} className="text-zinc-400 leading-relaxed text-base md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation - Next/Prev Week */}
        <div className="mt-24 pt-8 border-t border-white/5 flex items-center justify-between">
          <div>
            {parseInt(id) > 1 && (
              <Link
                href={`/logs/${(parseInt(id) - 1).toString().padStart(2, "0")}`}
                className="group flex flex-col items-start"
              >
                <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2 group-hover:text-white transition-colors">Previous Week</span>
                <span className="text-2xl font-serif text-white/50 group-hover:text-white transition-colors">W{(parseInt(id) - 1).toString().padStart(2, "0")}</span>
              </Link>
            )}
          </div>

          <div>
            {parseInt(id) < 12 && (
              <Link
                href={`/logs/${(parseInt(id) + 1).toString().padStart(2, "0")}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2 group-hover:text-white transition-colors">Next Week</span>
                <span className="text-2xl font-serif text-white/50 group-hover:text-white transition-colors">W{(parseInt(id) + 1).toString().padStart(2, "0")}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
