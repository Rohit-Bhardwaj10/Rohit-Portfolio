"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Stamp from "./Stamp";
import { FadeIn } from "./animations";
import CommandPalette from "./CommandPalette";
import ContactModal from "./ContactModal";

export default function Header() {
  const [date, setDate] = useState("");
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-US", { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  return (
    <>
    <motion.header 
      className="border-b border-solid border-white/10 mb-0 bg-[#050505]/70 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Bar */}
      <FadeIn delay={0.1} duration={0.5}>
        <div className="flex justify-between items-center py-1.5 text-[8px] md:text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-zinc-500 px-4 md:px-8">
          <div className="flex gap-4">
            <span className="text-zinc-300">Vol. 01</span>
            <span className="hidden md:inline">Digital Edition</span>
          </div>
          <div className="text-zinc-400">
            {date}
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:inline opacity-60">Late Night Protocol</span>
            <CommandPalette onContactOpen={() => setContactOpen(true)} />
          </div>
        </div>
      </FadeIn>


    </motion.header>
    <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
  </>
  );
}
