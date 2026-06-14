"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="flex flex-col relative z-10 w-full overflow-y-auto overflow-x-hidden h-full">
      <div className="px-4 md:px-6 h-[60px] md:h-[72px] border-b border-solid border-white/10 flex justify-between items-center bg-zinc-950/40 backdrop-blur-md sticky top-0 z-20 w-full shrink-0">
        <h2 className="text-lg md:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
          Experience
        </h2>
        <span className="font-sans text-[9px] text-zinc-500 font-bold tracking-[0.3em]">VOL. 02</span>
      </div>

      <div className="p-4 md:p-6 space-y-6 md:space-y-8 pr-2 md:pr-4">
        {/* Exp 1 */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="group/item relative"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-tighter group-hover/item:text-white transition-colors flex items-center gap-2">
                BarterNow
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </h3>
              <p className="font-serif italic text-sm text-zinc-400">Backend Intern</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="font-mono text-[11px] text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">'25 — '26</span>
              <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Noida, IN</span>
            </div>
          </div>
          <div className="pl-6 border-l border-solid border-white/10 group-hover/item:border-white/30 transition-all duration-500 relative">
            <motion.div
              className="absolute top-0 -left-[1px] w-[2px] h-0 bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-zinc-400 leading-relaxed text-xs md:text-sm font-medium mb-4">
              Performance-critical backend infrastructure for a high-traffic barter system. Architected the core API layer and optimized service-to-service communication.
            </p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'Node.js', 'PostgreSQL', 'Prisma'].map(tech => (
                <span key={tech} className="text-[9px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-400 border border-white/10 bg-white/5 px-2 py-0.5 rounded-[2px] group-hover/item:text-zinc-100 group-hover/item:border-white/20 transition-all duration-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Exp 2 */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="group/item relative"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-tighter group-hover/item:text-white transition-colors">Freelance</h3>
              <p className="font-serif italic text-sm text-zinc-400">Full Stack Engineer</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="font-mono text-[11px] text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">Current</span>
              <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Remote</span>
            </div>
          </div>
          <div className="pl-6 border-l border-solid border-white/10 group-hover/item:border-white/30 transition-all duration-500 relative">
            <motion.div
              className="absolute top-0 -left-[1px] w-[2px] h-0 bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-zinc-400 leading-relaxed text-xs md:text-sm font-medium mb-4">
              Delivering end-to-end production systems for diverse clients. Focus on performance optimization, clean code patterns, and modern frontend architectures.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Node.js', 'AWS', 'GO'].map(tech => (
                <span key={tech} className="text-[9px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-400 border border-white/10 bg-white/5 px-2 py-0.5 rounded-[2px] group-hover/item:text-zinc-100 group-hover/item:border-white/20 transition-all duration-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
