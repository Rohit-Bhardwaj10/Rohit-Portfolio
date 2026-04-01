"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Blocks, Wrench } from "lucide-react";

const categories = [
  {
    name: "Frontend",
    desc: "UX architecture & component systems.",
    icon: <Terminal className="w-4 h-4" />,
    tools: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ]
  },
  {
    name: "Backend",
    desc: "Scalable APIs & systems logic.",
    icon: <Database className="w-4 h-4" />,
    tools: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
      { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ]
  },
  {
    name: "Web3",
    desc: "Smart contracts & trustless protocols.",
    icon: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" 
        alt="Web3" 
        className="w-4 h-4 object-contain brightness-0 invert" 
      />
    ),
    tools: [
      { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg" },
      { name: "Hardhat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg" },
      { name: "Ethereum", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" },
      { name: "Solana", icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" },
    ]
  },
  {
    name: "DevOps",
    desc: "Infrastructure & system monitoring.",
    icon: <Wrench className="w-4 h-4" />,
    tools: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
    ]
  }
];

export default function TechStack() {
  return (
    <section className="w-full py-20 bg-transparent relative border-y border-white/10 overflow-hidden group/stack">
      
      {/* Huge Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] lg:text-[300px] font-serif font-black text-white/[0.015] pointer-events-none select-none group-hover/stack:text-white/[0.025] transition-colors duration-1000 tracking-tighter z-0 whitespace-nowrap">
        ARSENAL
      </div>
      
      {/* Aesthetic ambient lighting for tech stack */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center justify-between mb-12 pb-5 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 tracking-tight uppercase drop-shadow-sm">
              Arsenal
            </h2>
            <div className="h-6 w-[1px] bg-white/20" />
            <p className="font-sans text-[9px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              Tech / Infrastructure // 01
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white/[0.02] backdrop-blur-sm group hover:bg-white/[0.04] p-6 flex flex-col gap-6 rounded-[2px] border border-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              {/* Card top edge gradient effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Sidebar Info */}
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-100 text-zinc-900 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 rounded-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-zinc-400 text-xs font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {cat.desc}
                </p>
              </div>

              {/* Tools Grid - Colored Logos Visible by Default */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {cat.tools.map((tool) => (
                  <div 
                    key={tool.name}
                    className="flex flex-col items-center gap-2 p-3 bg-black/40 border border-white/5 rounded-sm hover:-translate-y-1 transition-all duration-300 hover:border-white/10 group/item"
                  >
                    <div className="w-5 h-5 flex items-center justify-center filter drop-shadow-md group-hover/item:scale-110 transition-transform">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tool.icon} alt={tool.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <span className="font-sans text-[8px] uppercase font-bold tracking-[0.2em] text-zinc-400 group-hover/item:text-zinc-200 transition-colors text-center w-full">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
