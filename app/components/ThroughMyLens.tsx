"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TextScramble } from "./animations";

const photos = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpeg",
  "/image6.jpeg",
  "/image7.jpeg",
];

export default function ThroughMyLens() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full stitch-b lg:stitch-r bg-[#C4BCB2] overflow-hidden">

      
      {/* Header */}
      <div className="px-6 py-4 md:px-8 md:py-6 flex justify-between items-end border-b border-zinc-900/10 border-dashed">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">
           <span className="md:hidden">Through My Lens</span>
           <TextScramble className="hidden md:inline-block" text="Through My Lens" duration={1.2} />
        </h2>
        
        {/* Mobile Swipe Hint */}
        <span className="md:hidden font-mono text-[10px] text-zinc-500 mb-1 uppercase tracking-widest animate-pulse">
          Swipe &rarr;
        </span>

        <span className="hidden md:inline font-mono text-xs text-zinc-700 mb-1 uppercase tracking-widest">
          Captured Moments
        </span>
      </div>

      {/* Film Strip */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-x-auto pb-6 pt-6 px-6 md:px-8 scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-6 md:gap-8 w-max">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              className="relative shrink-0 group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Photo Frame */}
              <div className="relative h-[200px] md:h-[240px] aspect-[4/5] md:aspect-[3/4] p-2 bg-white border border-zinc-200 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300 ease-out">
                <div className="relative w-full h-full overflow-hidden bg-zinc-100 filter md:grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={src}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-yellow-100/50 backdrop-blur-sm border border-white/20 rotate-[-2deg] shadow-sm transform" />
              </div>

              {/* Caption or Number */}
              <div className="mt-3 text-center">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                  No. {String(index + 1).padStart(3, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
