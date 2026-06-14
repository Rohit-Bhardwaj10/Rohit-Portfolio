"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function DesktopWidgets() {
  return (
    <>
      {/* Quote Widget */}
      <motion.div
        drag
        dragMomentum={false}
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 w-72 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* Drag Handle Indicator */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />

        <p className="font-serif text-[15px] leading-relaxed text-zinc-300 mt-2 mb-6">
          "Avoidance doesn't eliminate pain — it compounds it."
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <div className="w-4 h-1.5 rounded-full bg-zinc-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
        </div>

        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
          — CB • WRITING
        </p>
      </motion.div>

      {/* Spotify Widget */}
      <motion.div
        drag
        dragMomentum={false}
        className="absolute bottom-32 left-[30%] md:left-[35%] bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-72 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group flex items-center justify-between"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {/* Drag Handle Indicator */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />

        <div className="flex items-center gap-4 mt-2">
          <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center">
            <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.56.3z" />
            </svg>
          </div>
          <p className="text-xs font-mono text-zinc-400">not playing</p>
        </div>

        <div className="mt-2">
          <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.56.3z" />
          </svg>
        </div>
      </motion.div>

      {/* Visitors Widget */}

    </>
  );
}
