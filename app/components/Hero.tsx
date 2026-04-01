"use client";

import { useState } from "react";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, TypeWriter, MagneticButton, TiltCard } from "./animations";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column: Intro */}
        <div className="order-2 lg:order-1 p-6 md:p-10 stitch-b lg:border-r lg:border-white/10 flex flex-col justify-center relative bg-gradient-to-b from-transparent to-black/20">
        <div className="w-full relative z-10">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-zinc-300 to-zinc-50"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              <TypeWriter 
                lines={["TURNING YOUR", "IDEAS INTO", "DIGITAL MAGIC"]}
                delay={0.8}
                showCursor={true}
                cursorClassName="text-zinc-500 font-light ml-1"
              />
            </h1>
            
            <FadeIn delay={2.2} duration={0.6}>
              <p className="text-zinc-400/90 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide mb-8 max-w-lg font-light">
                I specialize in architecting reliable and scalable backend systems, while building interactive frontends using React and Next.js. My focus is on creating end-to-end digital experiences that are robust, performant, and timeless.
              </p>
            </FadeIn>

            <FadeIn delay={2.5} duration={0.6}>
              <div className="flex flex-wrap gap-5">
                <MagneticButton strength={0.25}>
                  <a href="/Rohit_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-zinc-100 text-zinc-900 px-8 py-4 text-[11px] font-sans font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 border border-zinc-100 cursor-pointer inline-block text-center rounded-sm">
                    Read Resume
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 px-8 py-4 text-[11px] font-sans font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300 hover:border-white/20 cursor-pointer rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
                  >
                    Contact
                  </button>
                </MagneticButton>
              </div>
            </FadeIn>

            <FadeIn delay={2.8} duration={0.6}>
              <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8">
                 <div className="group">
                    <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-5 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-br from-zinc-400 to-zinc-700 rounded-full inline-block"></span>
                      Expertise
                    </h4>
                    <ul className="space-y-3 text-sm font-medium">
                       <li className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform cursor-default">
                         <span className="w-1 h-1 bg-zinc-700 rounded-full group-hover/item:bg-zinc-300 transition-colors shadow-[0_0_5px_rgba(255,255,255,0.2)]"></span>
                         <span className="text-zinc-400/80 group-hover/item:text-zinc-100 transition-colors">Frontend Architecture</span>
                       </li>
                       <li className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform cursor-default">
                         <span className="w-1 h-1 bg-zinc-700 rounded-full group-hover/item:bg-zinc-300 transition-colors shadow-[0_0_5px_rgba(255,255,255,0.2)]"></span>
                         <span className="text-zinc-400/80 group-hover/item:text-zinc-100 transition-colors">Scalable Systems</span>
                       </li>
                       <li className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform cursor-default">
                         <span className="w-1 h-1 bg-zinc-700 rounded-full group-hover/item:bg-zinc-300 transition-colors shadow-[0_0_5px_rgba(255,255,255,0.2)]"></span>
                         <span className="text-zinc-400/80 group-hover/item:text-zinc-100 transition-colors">Reliable Architecture</span>
                       </li>
                    </ul>
                 </div>
                 <div className="group">
                     <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-5 flex items-center gap-2">
                       <span className="w-2 h-2 bg-gradient-to-br from-zinc-400 to-zinc-700 rounded-full inline-block"></span>
                       Focus
                     </h4>
                     <ul className="space-y-3 text-sm font-medium">
                        <li className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform cursor-default">
                          <span className="w-1 h-1 bg-zinc-700 rounded-full group-hover/item:bg-zinc-300 transition-colors shadow-[0_0_5px_rgba(255,255,255,0.2)]"></span>
                          <span className="text-zinc-400/80 group-hover/item:text-zinc-100 transition-colors">Performance</span>
                        </li>
                        <li className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform cursor-default">
                          <span className="w-1 h-1 bg-zinc-700 rounded-full group-hover/item:bg-zinc-300 transition-colors shadow-[0_0_5px_rgba(255,255,255,0.2)]"></span>
                          <span className="text-zinc-400/80 group-hover/item:text-zinc-100 transition-colors">Reliability</span>
                        </li>
                        <li className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform cursor-default">
                          <span className="w-1 h-1 bg-zinc-700 rounded-full group-hover/item:bg-zinc-300 transition-colors shadow-[0_0_5px_rgba(255,255,255,0.2)]"></span>
                          <span className="text-zinc-400/80 group-hover/item:text-zinc-100 transition-colors">Interactions</span>
                        </li>
                     </ul>
                 </div>
                 <div className="flex items-end lg:items-start xl:items-end">
                    <div className="bg-white/[0.02] p-5 border-l border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-500 rounded-r-sm backdrop-blur-sm">
                        <p className="font-serif italic text-sm leading-relaxed text-zinc-300 font-medium">
                          "Good design is as little design as possible."
                        </p>
                        <p className="text-[9px] font-sans font-bold tracking-[0.2em] text-zinc-500 mt-3 uppercase">— Dieter Rams</p>
                    </div>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Column: Image & Connect */}
        <div className="order-1 lg:order-2 p-6 md:p-10 flex flex-col items-center justify-center relative">
          
          {/* Aesthetic Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-800/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Image Card */}
          <div className="w-full max-w-md relative z-10">
            <FadeIn delay={0.5} duration={0.8} direction="none">
              <TiltCard tiltAmount={12} glareEnabled={true}>
                <motion.div 
                  className="border border-white/10 bg-zinc-950/80 backdrop-blur-sm p-2 md:p-3 shadow-[0_8px_30px_rgba(0,0,0,0.8)] mb-6 rounded-sm relative group"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.9)",
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none" />

                  <div className="relative aspect-square w-full border border-white/5 bg-zinc-900 overflow-hidden rounded-[2px]">
                     <Image 
                       src="/cool.png" 
                       alt="The Developer"
                       fill
                       className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                     />
                  </div>
                </motion.div>
              </TiltCard>
            </FadeIn>
            
            <FadeIn delay={0.7} duration={0.5}>
              <div className="text-center mb-10">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                    Fig A. The Developer
                </span>
              </div>
            </FadeIn>

            {/* Status Badge */}
            <FadeIn delay={0.9} duration={0.5}>
              <div className="flex items-center justify-center gap-3 mb-10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                </span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Available for Work</span>
                <span className="text-zinc-700 text-xs">•</span>
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Remote</span>
              </div>
            </FadeIn>

            {/* Divider */}
            <motion.div 
              className="w-full h-px stitch-t border-white/10 mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />

            {/* Connect Links */}
            <FadeIn delay={1.1} duration={0.6}>
              <div className="w-full mb-8">
                <h3 className="font-sans text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-6 text-center">Connect</h3>
                <div className="flex flex-wrap justify-center gap-5">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] border-b border-transparent group-hover:border-zinc-300 transition-all pb-0.5">Email</span>
                  </button>
                  <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group hover:-translate-y-0.5">
                    <Linkedin className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] border-b border-transparent group-hover:border-zinc-300 transition-all pb-0.5">LinkedIn</span>
                  </a>
                  <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group hover:-translate-y-0.5">
                    <Twitter className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] border-b border-transparent group-hover:border-zinc-300 transition-all pb-0.5">Twitter</span>
                  </a>
                  <a href="https://github.com/Rohit-Bhardwaj10/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group hover:-translate-y-0.5">
                    <Github className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] border-b border-transparent group-hover:border-zinc-300 transition-all pb-0.5">GitHub</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Divider */}
            <motion.div 
              className="w-full h-px stitch-t border-white/10 mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />

            {/* Tech Stack */}
            <FadeIn delay={1.3} duration={0.6}>
              <div className="w-full text-center">
                <h3 className="font-sans text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-5">Core Stack</h3>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
                  <span className="font-sans text-[11px] font-bold tracking-[0.1em] text-zinc-300 uppercase">Next.js <span className="text-zinc-600 ml-1">19</span></span>
                  <span className="font-sans text-[11px] font-bold tracking-[0.1em] text-zinc-300 uppercase">Express <span className="text-zinc-600 ml-1">15</span></span>
                  <span className="font-mono text-xs text-zinc-400">TypeScript</span>
                  <span className="font-mono text-xs text-zinc-400">Tailwind <span className="text-zinc-600">4.0</span></span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="stitch-b"></div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
