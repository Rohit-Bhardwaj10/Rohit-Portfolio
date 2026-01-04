"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Solidity", category: "Web3" },
  { name: "Tailwind", category: "Styling" },
  { name: "Hardhat", category: "Web3" },
  { name: "AWS", category: "Cloud" },
  { name: "Figma", category: "Design" },
  { name: "Solana", category: "Web3" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Version Control" },
  { name: "Bun", category: "Runtime" },
];

export default function TechStack() {
  // Split technologies into two overlapping arrays for visual balance
  const row1 = technologies.slice(0, 8);
  const row2 = technologies.slice(8);

  return (
    <div className="w-full py-6 overflow-hidden bg-[#C4BCB2] relative flex flex-col gap-3 stitch-b">
      
      {/* Side Label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-zinc-900 py-0.5 px-2 hidden md:block border-y border-r border-[#C4BCB2]/20 shadow-xl shadow-zinc-900/10">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4BCB2] leading-none">
          The Arsenal
        </span>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-5" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
      />

      {/* Row 1 - Moving Left */}
      <div className="relative flex overflow-hidden border-y-2 border-zinc-900 bg-zinc-900/5 py-2">
        <MarqueeRow items={[...row1, ...row1, ...row1, ...row1]} direction="left" speed={20} />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#C4BCB2] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#C4BCB2] to-transparent z-10" />
      </div>

      {/* Row 2 - Moving Right */}
      <div className="relative flex overflow-hidden border-b-2 border-zinc-900 bg-zinc-900/5 py-2">
         <MarqueeRow items={[...row2, ...row2, ...row2, ...row2]} direction="right" speed={20} />
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#C4BCB2] to-transparent z-10" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#C4BCB2] to-transparent z-10" />
      </div>

    </div>
  );
}

const MarqueeRow = ({ items, direction, speed }: { items: typeof technologies, direction: "left" | "right", speed: number }) => {
  return (
    <motion.div 
      className="flex gap-6 whitespace-nowrap px-6"
      animate={{ 
        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] 
      }}
      transition={{ 
        ease: "linear", 
        duration: speed, 
        repeat: Infinity 
      }}
      style={{ width: "fit-content" }}
    >
      {items.map((tech, i) => (
        <TechChip key={`${tech.name}-${i}`} name={tech.name} category={tech.category} />
      ))}
    </motion.div>
  );
};

const TechChip = ({ name, category }: { name: string, category: string }) => {
  return (
    <div className="group relative">
        <div className="
          relative z-10
          flex items-center gap-3 
          px-6 py-3 
          border-2 border-zinc-900 
          bg-[#C4BCB2] 
          hover:bg-zinc-900 
          hover:-translate-y-1 hover:-translate-x-1
          transition-all duration-200
          cursor-default
        ">
          <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full group-hover:bg-[#C4BCB2] transition-colors" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none text-zinc-900 group-hover:text-[#C4BCB2] transition-colors uppercase">
              {name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
              {category}
            </span>
          </div>
        </div>
        {/* Shadow Plate */}
        <div className="absolute inset-0 bg-zinc-900/20 translate-x-1 translate-y-1 -z-0" />
    </div>
  );
};
