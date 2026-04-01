"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Stamp from "./Stamp";
import { FadeIn } from "./animations";

export default function Header() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-US", { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  return (
    <motion.header 
      className="border-b border-solid border-white/10 mb-0 bg-[#050505]/70 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Bar */}
      <FadeIn delay={0.1} duration={0.5}>
        <div className="flex justify-between items-center py-2 border-b border-solid border-white/10 text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-zinc-500 px-4 md:px-8">
          <div className="flex gap-4">
            <span className="text-zinc-300">Vol. 01</span>
            <span className="hidden md:inline">Digital Edition</span>
          </div>
          <div className="text-zinc-400">
            {date}
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:inline opacity-60">Late Night Protocol</span>
          </div>
        </div>
      </FadeIn>

      {/* Main Masthead */}
      <div className="text-center py-8 md:py-14 px-4 relative overflow-hidden">
        {/* Aesthetic Background Glow specific to header */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none blur-xl" />

        {/* Stamp - desktop only */}
        <motion.div 
          className="hidden md:block absolute md:top-8 md:right-20 lg:right-40 transform rotate-12 opacity-80 pointer-events-none"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 0.8, scale: 1, rotate: 12 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
           <Stamp />
        </motion.div>
        
        <FadeIn delay={0.2} duration={0.7}>
          <h1 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-3 text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 drop-shadow-sm tracking-tight"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
              ROHIT BHARDWAJ
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} duration={0.5}>
          <div className="flex items-center justify-center gap-4 text-[10px] md:text-xs font-sans font-bold tracking-[0.4em] text-zinc-400 uppercase mt-4">
            <motion.span 
              className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent max-w-[120px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ originX: 0.5 }}
            />
            <span className="text-zinc-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Friendly Neighbourhood Builder</span>
            <motion.span 
              className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent max-w-[120px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ originX: 0.5 }}
            />
          </div>
        </FadeIn>
      </div>
    </motion.header>
  );
}
