"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
      <div className="flex justify-between items-center py-2 border-b border-zinc-300 border-dashed text-[10px] md:text-xs font-mono uppercase tracking-widest px-4 md:px-8">
        <div className="flex gap-4">
          <span>Vol. 01</span>
          <span className="hidden md:inline">Print Edition</span>
        </div>
        <div>
          {date}
        </div>
        <div className="flex gap-4 items-center">
          <span className="hidden md:inline">Price: Free</span>
          <button className="hover:bg-zinc-100 p-1 rounded-full transition-colors">
            <Sun size={14} className="dark:hidden" />
            <Moon size={14} className="hidden dark:block" />
          </button>
        </div>
      </div>

      {/* Main Masthead */}
      <div className="text-center py-8 md:py-12 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight leading-none mb-2">
            Rohit Bhardwaj
        </h1>
        <div className="flex items-center justify-center gap-4 text-xs md:text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
          <span className="flex-1 h-[1px] bg-zinc-300 max-w-[100px]"></span>
          <span>Friendly Neighbourhood Builder</span>
          <span className="flex-1 h-[1px] bg-zinc-300 max-w-[100px]"></span>
        </div>
      </div>
    </header>
  );
}
