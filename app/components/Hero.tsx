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
        <div className="order-2 lg:order-1 p-6 md:p-8 stitch-b lg:border-r lg:border-zinc-900/15 flex flex-col justify-center">
        <div className="w-full relative z-10">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]  mb-4 text-zinc-900"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              <TypeWriter 
                lines={["TURNING YOUR", "IDEAS INTO", "DIGITAL MAGIC"]}
                delay={0.8}
                showCursor={true}
                cursorClassName="text-zinc-400 font-light ml-1"
              />
            </h1>
            
            <FadeIn delay={2.2} duration={0.6}>
              <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight mb-6 max-w-lg">
                I specialize in architecting reliable and scalable backend systems, while building interactive frontends using React and Next.js. My focus is on creating end-to-end digital experiences that are robust, performant, and timeless.
              </p>
            </FadeIn>

            <FadeIn delay={2.5} duration={0.6}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton strength={0.25}>
                  <a href="/Rohit_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 text-zinc-50 px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-[5px_5px_0px_0px_#71717a] hover:shadow-[2px_2px_0px_0px_#71717a] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border border-zinc-900 cursor-pointer inline-block text-center">
                    Read Resume
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="border border-zinc-900 bg-transparent text-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all hover:bg-zinc-50 cursor-pointer"
                  >
                    Contact
                  </button>
                </MagneticButton>
              </div>
            </FadeIn>

            <FadeIn delay={2.8} duration={0.6}>
              <div className="mt-12 pt-8 border-t border-zinc-900/15 grid grid-cols-2 md:grid-cols-3 gap-6">
                 <div className="group">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-700 mb-4">Expertise</h4>
                    <ul className="space-y-2 text-sm font-medium">
                       <li className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                         <span className="w-1 h-1 bg-zinc-400 rounded-full group-hover/item:bg-zinc-900 transition-colors"></span>
                         <span className="text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Frontend Architecture</span>
                       </li>
                       <li className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                         <span className="w-1 h-1 bg-zinc-400 rounded-full group-hover/item:bg-zinc-900 transition-colors"></span>
                         <span className="text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Scalable Systems</span>
                       </li>
                       <li className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                         <span className="w-1 h-1 bg-zinc-400 rounded-full group-hover/item:bg-zinc-900 transition-colors"></span>
                         <span className="text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Reliable Architecture</span>
                       </li>
                    </ul>
                 </div>
                 <div className="group">
                     <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-700 mb-4">Focus</h4>
                     <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                          <span className="w-1 h-1 bg-zinc-400 rounded-full group-hover/item:bg-zinc-900 transition-colors"></span>
                          <span className="text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Performance</span>
                        </li>
                        <li className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                          <span className="w-1 h-1 bg-zinc-400 rounded-full group-hover/item:bg-zinc-900 transition-colors"></span>
                          <span className="text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Reliability</span>
                        </li>
                        <li className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                          <span className="w-1 h-1 bg-zinc-400 rounded-full group-hover/item:bg-zinc-900 transition-colors"></span>
                          <span className="text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Interactions</span>
                        </li>
                     </ul>
                 </div>
                 <div>
                    <div className="bg-zinc-100/50 p-4 border-l border-zinc-900/30 hover:border-zinc-900 transition-colors">
                        <p className="font-sans italic text-sm leading-relaxed text-zinc-700">
                          "Good design is as little design as possible."
                        </p>
                        <p className="text-[10px] font-mono text-zinc-600 mt-2 uppercase">— Dieter Rams</p>
                    </div>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Column: Image & Connect */}
        <div className="order-1 lg:order-2 p-6 md:p-8 flex flex-col items-center justify-center">
          {/* Image Card */}
          <div className="w-full max-w-md">
            <FadeIn delay={0.5} duration={0.8} direction="none">
              <TiltCard tiltAmount={12} glareEnabled={true}>
                <motion.div 
                  className="border border-zinc-900 bg-white p-2 md:p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4"
                  whileHover={{ 
                    boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-square w-full border border-zinc-200 bg-zinc-50 overflow-hidden">
                     <Image 
                       src="/cool.png" 
                       alt="The Developer"
                       fill
                       className="object-cover object-top filter grayscale contrast-125"
                     />
                  </div>
                </motion.div>
              </TiltCard>
            </FadeIn>
            
            <FadeIn delay={0.7} duration={0.5}>
              <div className="text-center mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                    Fig A. The Developer
                </span>
              </div>
            </FadeIn>

            {/* Status Badge */}
            <FadeIn delay={0.9} duration={0.5}>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-700">Available for Work</span>
                <span className="text-zinc-600">•</span>
                <span className="font-mono text-xs text-zinc-600">Remote</span>
              </div>
            </FadeIn>

            {/* Divider */}
            <motion.div 
              className="w-full h-px stitch-t mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />

            {/* Connect Links */}
            <FadeIn delay={1.1} duration={0.6}>
              <div className="w-full mb-6">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-900 font-bold mb-4 text-center">Connect</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors group"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wide group-hover:underline underline-offset-2">Email</span>
                  </button>
                  <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors group">
                    <Linkedin className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wide group-hover:underline underline-offset-2">LinkedIn</span>
                  </a>
                  <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors group">
                    <Twitter className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wide group-hover:underline underline-offset-2">Twitter</span>
                  </a>
                  <a href="https://github.com/Rohit-Bhardwaj10/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors group">
                    <Github className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wide group-hover:underline underline-offset-2">GitHub</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Divider */}
            <motion.div 
              className="w-full h-px stitch-t mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />

            {/* Tech Stack */}
            <FadeIn delay={1.3} duration={0.6}>
              <div className="w-full text-center">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-900 font-bold mb-4">Core Stack</h3>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  <span className="font-mono text-xs text-zinc-700">Next.js <span className="text-zinc-600">19</span></span>
                  <span className="font-mono text-xs text-zinc-700">Express <span className="text-zinc-600">15</span></span>
                  <span className="font-mono text-xs text-zinc-700">TypeScript</span>
                  <span className="font-mono text-xs text-zinc-700">Tailwind <span className="text-zinc-600">4.0</span></span>
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
