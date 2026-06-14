"use client";

import { motion } from "framer-motion";

const allTools = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invert: true },
  { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg" },
  { name: "Hardhat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg" },
  { name: "Ethereum", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg", invert: true },
  { name: "Solana", icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", invert: true },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
];

export default function TechStack() {
  return (
    <section id="techstack-section" className="w-full py-12 md:py-16 bg-transparent relative border-y border-dashed border-white/10 overflow-hidden group/stack">
      
      {/* Huge Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] lg:text-[300px] font-serif font-black text-white/[0.015] pointer-events-none select-none group-hover/stack:text-white/[0.025] transition-colors duration-1000 tracking-tighter z-0 whitespace-nowrap">
        ARSENAL
      </div>
      
      {/* Aesthetic ambient lighting for tech stack */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center justify-between mb-10 pb-5 border-b border-dashed border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 tracking-tight uppercase drop-shadow-sm">
              Arsenal
            </h2>
            <div className="h-6 w-[1px] bg-white/20" />
            <p className="font-sans text-[9px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              Tech Stack // 01
            </p>
          </div>
        </div>

        {/* Central Display of Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 relative z-10 py-4 max-w-5xl mx-auto">
          {allTools.map((tool, idx) => {
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.02 }}
                className="relative group/item"
              >
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 40 }}
                  className="flex flex-col items-center justify-center gap-3 w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden"
                >
                  {/* Glossy top edge */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle radial glow on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center filter drop-shadow-md group-hover/item:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 relative z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className={`max-w-full max-h-full object-contain ${
                        // @ts-ignore - invert added dynamically
                        tool.invert ? 'brightness-0 invert opacity-90' : ''
                      }`} 
                    />
                  </div>
                  
                  <span className="font-sans text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em] text-zinc-500 group-hover/item:text-zinc-200 transition-colors text-center w-full relative z-10 px-1 truncate">
                    {tool.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
