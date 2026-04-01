"use client";

import { useState } from "react";
import { Mail, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, TypeWriter, MagneticButton, TiltCard } from "./animations";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full border-b border-solid border-white/5">
        
        {/* Left Column: Massive Typography & Philosophy (55% width) */}
        <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 relative flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-dashed border-white/10 bg-gradient-to-b from-black/0 via-zinc-950/20 to-black/40 overflow-hidden">
          
          {/* Aesthetic glowing gradient source */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-500/10 via-zinc-800/5 to-transparent blur-[100px] pointer-events-none rounded-full" />

          {/* Fading aesthetic grid overlay */}
          <div 
             className="absolute inset-0 pointer-events-none"
             style={{
                backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
                WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)'
             }}
          />

          <div className="w-full relative z-10">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[70px] xl:text-[85px] font-bold leading-[0.95] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-tr from-zinc-400 via-zinc-100 to-zinc-50 uppercase drop-shadow-md"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              <TypeWriter 
                lines={["TURNING YOUR", "IDEAS INTO", "DIGITAL MAGIC"]}
                delay={0.8}
                showCursor={true}
                cursorClassName="text-zinc-600 font-light ml-2"
              />
            </h1>
            
            <FadeIn delay={2.2} duration={0.8}>
              <div className="mt-8 mb-10 border-l-2 border-zinc-700 pl-6">
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed tracking-wide max-w-lg font-light">
                  I specialize in architecting reliable and scalable backend systems, while building interactive frontends using React and Next.js. My focus is on creating end-to-end digital experiences that are robust, performant, and completely timeless.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={2.5} duration={0.6}>
              <div className="flex flex-wrap items-center gap-6">
                <MagneticButton strength={0.25}>
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="bg-zinc-100 text-zinc-900 px-8 py-4 text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-sm flex items-center gap-2"
                  >
                    Start Project <ArrowUpRight className="w-4 h-4" />
                  </button>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <a 
                    href="/Rohit_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative px-6 py-4 text-xs font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-zinc-300 transition-all duration-300 overflow-hidden inline-block"></span>
                    Read Resume
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={2.8} duration={0.8}>
            <div className="mt-16 pt-8 border-t border-dashed border-white/10 hidden md:flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                   <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse"></span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-zinc-500 text-[9px] uppercase tracking-[0.3em] font-bold">Location</span>
                   <span className="text-zinc-300 text-xs font-mono">India / Remote</span>
                 </div>
              </div>
              
              <div className="text-right flex flex-col items-end">
                  <p className="font-serif italic text-sm text-zinc-400 max-w-[200px]">
                    "Good design is as little design as possible."
                  </p>
                  <p className="text-[9px] font-sans font-bold tracking-[0.2em] text-zinc-600 mt-2 uppercase">— Dieter Rams</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Visual + Bento Details (45% width) */}
        <div className="w-full lg:w-[45%] flex flex-col bg-black/10">
          
          {/* Top Half: Graphic Focus */}
          <div className="relative flex-1 min-h-[400px] lg:min-h-0 p-8 flex items-center justify-center border-b border-dashed border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="absolute top-6 right-6 z-20">
              <FadeIn delay={0.9} duration={0.5}>
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-emerald-400 uppercase">Available</span>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.5} duration={0.8} direction="none" className="w-full max-w-sm relative z-10">
              <TiltCard tiltAmount={10} glareEnabled={true}>
                <motion.div 
                  className="border border-white/10 bg-zinc-950 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-sm relative"
                  whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.9)", borderColor: "rgba(255,255,255,0.2)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative aspect-square w-full border border-white/5 bg-zinc-900 overflow-hidden rounded-[2px]">
                     <Image 
                       src="/cool.png" 
                       alt="The Developer"
                       fill
                       className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                     />
                  </div>
                </motion.div>
              </TiltCard>
            </FadeIn>

            <span className="absolute bottom-6 left-6 font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600 -rotate-90 origin-bottom-left">
               Fig A.
            </span>
          </div>

          {/* Bottom Half: Bento Details */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {/* Expertise Grid */}
             <FadeIn delay={1.1} duration={0.5} className="bg-[#050505] p-6 sm:p-8 flex flex-col justify-center">
                 <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-6 flex items-center gap-2">
                   Expertise
                 </h4>
                 <ul className="space-y-4 text-xs font-mono text-zinc-400">
                    <li className="hover:text-zinc-100 transition-colors cursor-default">— Architecture</li>
                    <li className="hover:text-zinc-100 transition-colors cursor-default">— Backends</li>
                    <li className="hover:text-zinc-100 transition-colors cursor-default">— Frontends</li>
                 </ul>
             </FadeIn>

             {/* Stack Grid */}
             <FadeIn delay={1.2} duration={0.5} className="bg-[#050505] p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
                 <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-6">
                   Core Stack
                 </h4>
                 <div className="flex flex-col gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex justify-between items-center group cursor-default hover:text-white transition-colors">TypeScript <span className="text-zinc-700 text-[10px]">TS</span></span>
                    <span className="flex justify-between items-center group cursor-default hover:text-white transition-colors">Next.js <span className="text-zinc-700 text-[10px]">19</span></span>
                    <span className="flex justify-between items-center group cursor-default hover:text-white transition-colors">Express <span className="text-zinc-700 text-[10px]">API</span></span>
                 </div>
             </FadeIn>

             {/* Connect Full Width */}
             <FadeIn delay={1.3} duration={0.5} className="col-span-2 bg-[#050505] p-6 sm:p-8 border-t border-dashed border-white/10 flex items-center justify-between">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold hidden sm:block">Network</span>
                <div className="flex w-full sm:w-auto justify-between sm:justify-end gap-6 sm:gap-8">
                  <a href="https://github.com/Rohit-Bhardwaj10/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <button onClick={() => setIsContactOpen(true)} className="text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
             </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Separator is removed as the bento handles it, or keep a solid border */}
      <div className="border-b border-solid border-white/5"></div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
