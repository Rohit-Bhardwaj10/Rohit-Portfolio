"use client";

import { motion } from "framer-motion";

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Docker", 
  "Solidity",
  "TailwindCSS",
  "Framer Motion",
  "AWS",
  "Git",
  "Figma",
  "Solana",
  "Hardhat",
];

export default function TechStack() {
  return (
    <div className="w-full py-12 md:py-16 overflow-hidden bg-[#C4BCB2] stitch-b flex items-center relative group">
      {/* Label */}
      <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-[#C4BCB2] pr-4 hidden md:block">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 border-b border-zinc-900/10 pb-1">
          The Arsenal
        </span>
      </div>

      {/* Gradient Masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-[1px] w-20 bg-gradient-to-r from-[#C4BCB2] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-[1px] w-20 bg-gradient-to-l from-[#C4BCB2] to-transparent z-10" />

      {/* Marquee Container */}
      <div className="flex whitespace-nowrap marquee-container hover:pause-animation">
        {/* We duplicate the array 3 times to ensure seamless looping */}
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex items-center gap-12 md:gap-20 shrink-0 animate-marquee">
            <span className="text-4xl md:text-6xl font-serif font-black text-transparent stroke-text hover:text-zinc-900 transition-colors duration-300 cursor-default">
              {tech}
            </span>
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #27272a;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }

        .marquee-container.hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
