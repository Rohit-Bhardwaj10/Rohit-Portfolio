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
      className="border-b-4 border-zinc-900 mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Bar */}
      <FadeIn delay={0.1} duration={0.5}>
        <div className="flex justify-between items-center py-2 stitch-b text-[10px] md:text-xs font-mono uppercase tracking-widest px-4 md:px-8">
          <div className="flex gap-4">
            <span>Vol. 01</span>
            <span className="hidden md:inline">Print Edition</span>
          </div>
          <div>
            {date}
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:inline opacity-50">Late Night Edition</span>
          </div>
        </div>
      </FadeIn>

      {/* Main Masthead */}
      <div className="text-center py-8 md:py-12 px-4 relative overflow-hidden">
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
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight leading-none mb-2">
              Rohit Bhardwaj
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} duration={0.5}>
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm font-bold tracking-[0.2em] text-zinc-700 uppercase">
            <motion.span 
              className="flex-1 h-[1px] bg-zinc-500 max-w-[100px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ originX: 1 }}
            />
            <span>Friendly Neighbourhood Builder</span>
            <motion.span 
              className="flex-1 h-[1px] bg-zinc-500 max-w-[100px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ originX: 0 }}
            />
          </div>
        </FadeIn>
      </div>
    </motion.header>
  );
}
