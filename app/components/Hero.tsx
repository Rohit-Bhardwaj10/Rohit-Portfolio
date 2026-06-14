"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Linkedin, Twitter, Github, ArrowUpRight, Play, Pause, Volume2, Music, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, TypeWriter, MagneticButton, TiltCard } from "./animations";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">

        {/* Left Column: Massive Typography & Philosophy (55% width) */}
        <div className="w-full lg:w-[55%] px-8 pb-8 pt-2 md:px-12 md:pb-12 md:pt-2 lg:px-16 lg:pb-16 lg:pt-2 relative flex flex-col justify-between bg-gradient-to-b from-black/0 via-zinc-950/20 to-black/40 overflow-hidden">

          {/* Aesthetic glowing gradient source */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-500/10 via-zinc-800/5 to-transparent blur-[100px] pointer-events-none rounded-full" />



          <div className="w-full relative z-10 flex-1 flex flex-col justify-start mt-0 md:mt-2 lg:mt-2">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[90px] font-bold leading-[1.05] tracking-tight mb-4 text-zinc-100 drop-shadow-md"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Rohit Bhardwaj
            </h1>
            <p className="mt-4 text-[11px] sm:text-xs font-mono font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-8">
              Full Stack / Backend Engineer
            </p>

            <FadeIn delay={0.4} duration={0.8}>
              <div className="mt-4 mb-6 border-l-2 border-zinc-700 pl-6">
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed tracking-wide max-w-lg font-light">
                  I specialize in architecting reliable and scalable backend systems, while building interactive frontends using React and Next.js. My focus is on creating end-to-end digital experiences that are robust, performant, and completely timeless.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6} duration={0.6}>
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

          {/* Location and player removed */}
        </div>

        {/* Right Column: Visual + Bento Details (45% width) */}
        <div className="w-full lg:w-[45%] flex flex-col bg-black/10">

          <div className="relative flex-1 min-h-[350px] lg:min-h-0 px-8 pb-8 pt-4 lg:pt-12 flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:gap-12 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

            {/* The Image */}
            <FadeIn delay={0.5} duration={0.8} direction="none" className="w-full max-w-[320px] relative z-10 xl:ml-8 shrink-0">
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
                      className="object-cover object-top grayscale scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </motion.div>
              </TiltCard>
            </FadeIn>

            {/* Cool Widgets Area */}
            <FadeIn delay={0.7} duration={0.8} direction="none" className="hidden xl:flex flex-col gap-4 w-full max-w-[240px] z-10">
              {/* Widget 1: Availability */}
              <div className="bg-[#050505]/50 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col gap-2 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">Status</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans font-semibold">Available for new opportunities</p>
              </div>

              {/* Widget 2: Local Time */}
              <div className="bg-[#050505]/50 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col gap-2 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-zinc-500" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">Local Time</span>
                </div>
                <p className="text-sm text-zinc-300 font-sans font-semibold font-mono">IST (UTC +5:30)</p>
              </div>

              {/* Widget 3: Tech Focus */}
              <div className="bg-[#050505]/50 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col gap-3 hover:border-white/10 transition-colors">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">Current Focus</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 rounded-md text-[9px] text-zinc-300 font-mono font-bold">TypeScript</span>
                  <span className="px-2 py-1 bg-white/5 rounded-md text-[9px] text-zinc-300 font-mono font-bold">Golang</span>
                  <span className="px-2 py-1 bg-white/5 rounded-md text-[9px] text-zinc-300 font-mono font-bold">Next.js</span>
                </div>
              </div>
            </FadeIn>

            <span className="absolute bottom-6 left-6 font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600 -rotate-90 origin-bottom-left">

            </span>
          </div>


        </div>
      </div>



      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
