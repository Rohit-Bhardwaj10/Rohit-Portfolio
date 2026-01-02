"use client";

import { useEffect, useState } from "react";
import Stamp from "./Stamp";

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
    <header className="border-b-4 border-zinc-900 mb-0">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 stitch-b text-[10px] md:text-xs font-mono uppercase tracking-widest px-4 md:px-8">
        <div className="flex gap-4">
          <span>Vol. 01</span>
          <span className="hidden md:inline">Print Edition</span>
        </div>
        <div>
          {date}
        </div>
        <div className="flex gap-4 items-center">
          <span className="hidden md:inline">Late Night Edition</span>
        </div>
      </div>

      {/* Main Masthead */}
      <div className="text-center py-8 md:py-12 px-4 relative">
        <div className="absolute top-4 right-4 md:top-8 md:right-20 lg:right-40 transform rotate-12 opacity-80 pointer-events-none">
           <Stamp />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight leading-none mb-2">
            Rohit Bhardwaj
        </h1>
        <div className="flex items-center justify-center gap-4 text-xs md:text-sm font-bold tracking-[0.2em] text-zinc-700 uppercase">
          <span className="flex-1 h-[1px] bg-zinc-500 max-w-[100px]"></span>
          <span>Friendly Neighbourhood Builder</span>
          <span className="flex-1 h-[1px] bg-zinc-500 max-w-[100px]"></span>
        </div>
      </div>
    </header>
  );
}
