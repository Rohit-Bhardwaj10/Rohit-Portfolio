"use client";

import {
  ScrollFadeIn,
  TextScramble,
} from "./animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ThroughMyLens from "./ThroughMyLens";
import { ArrowUpRight, BookOpen, ArrowRight } from "lucide-react";

import { Project } from "../data/projects";

interface AnimatedSectionsProps {
  projects: Project[];
}

export default function AnimatedSections({ projects }: AnimatedSectionsProps) {
  return (
    <>
      {/* Row 1: Featured & History Balance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-solid border-white/10">
        {/* Experience / History - Prominent Modern Sidebar */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-solid border-white/10 bg-gradient-to-b from-transparent to-black/20 relative overflow-hidden group/sidebar">
          {/* Subtle Background Watermark - Minimalist and integrated */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] font-serif font-black text-white/[0.015] -rotate-90 pointer-events-none select-none group-hover/sidebar:text-white/[0.03] transition-colors duration-1000 tracking-tighter">
            LOGBOOK
          </div>

          <div className="h-full flex flex-col relative z-10 w-full overflow-hidden">
            <div className="px-6 md:px-8 h-[88px] border-b border-solid border-white/10 flex justify-between items-center bg-zinc-950/40 backdrop-blur-md sticky top-0 z-20 w-full shrink-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
                <span className="md:hidden">Experience</span>
                <TextScramble
                  className="hidden md:inline-block"
                  text="Experience"
                  duration={1.2}
                />
              </h2>
              <span className="font-sans text-[9px] text-zinc-500 font-bold tracking-[0.3em]">VOL. 02</span>
            </div>

            <div className="p-6 md:p-8 space-y-10 pr-4">
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
                    <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tighter group-hover/item:text-white transition-colors flex items-center gap-2">
                      BarterNow
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </h3>
                    <p className="font-serif italic text-base text-zinc-400">Backend Intern</p>
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
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-medium mb-6">
                    Performance-critical backend infrastructure for a high-traffic barter system. Architected the core API layer and optimized service-to-service communication.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Node.js', 'PostgreSQL', 'Prisma'].map(tech => (
                      <span key={tech} className="text-[10px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-400 border border-white/10 bg-white/5 px-2.5 py-1 rounded-[2px] group-hover/item:text-zinc-100 group-hover/item:border-white/20 transition-all duration-500">
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
                    <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tighter group-hover/item:text-white transition-colors">Freelance</h3>
                    <p className="font-serif italic text-base text-zinc-400">Full Stack Engineer</p>
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
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-medium mb-6">
                    Delivering end-to-end production systems for diverse clients. Focus on performance optimization, clean code patterns, and modern frontend architectures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'Node.js', 'AWS', 'GO'].map(tech => (
                      <span key={tech} className="text-[10px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-400 border border-white/10 bg-white/5 px-2.5 py-1 rounded-[2px] group-hover/item:text-zinc-100 group-hover/item:border-white/20 transition-all duration-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 p-6 md:p-8 pt-0 flex flex-col justify-end opacity-60 group-hover/sidebar:opacity-100 transition-opacity">
              <div className="font-mono text-[10px] space-y-1 uppercase tracking-widest text-zinc-300 font-black">
                <div>[SYSTEM::READY]</div>
                <div>[INDEX_FETCHED]</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects - Column Header */}
        <div className="lg:col-span-7 flex flex-col relative group/projects overflow-hidden">

          {/* Subtle Background Watermark for Projects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-serif font-black text-white/[0.015] pointer-events-none select-none group-hover/projects:text-white/[0.03] transition-colors duration-1000 tracking-tighter z-0">
            WORKS
          </div>

          <div className="px-6 md:px-8 h-[88px] border-b border-white/10 flex justify-between items-center bg-zinc-950/40 backdrop-blur-md sticky top-0 z-20 w-full shrink-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
              <span className="md:hidden">Projects</span>
              <TextScramble
                className="hidden md:inline-block"
                text="Projects"
                duration={1}
              />
            </h2>
            <Link
              href="/projects"
              className="font-sans text-[9px] md:text-[10px] text-zinc-400 hover:text-zinc-100 uppercase tracking-[0.2em] transition-all font-bold group flex items-center gap-2 border-b border-white/10 hover:border-zinc-300 pb-0.5"
            >
              See More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 h-full">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className={`border-white/10 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""} h-full backdrop-blur-sm`}
              >
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Recent Writings & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden group/bottom">

        {/* Shared Bottom Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-serif font-black text-white/[0.015] pointer-events-none select-none group-hover/bottom:text-white/[0.03] transition-colors duration-1000 tracking-tighter z-0 whitespace-nowrap">
          INSIGHTS
        </div>

        {/* Recent Writings (Col 8) */}
        <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-solid border-white/10 relative z-10 backdrop-blur-sm">
          {/* Section Header */}
          <div className="px-6 md:px-8 h-[88px] flex justify-between items-center bg-zinc-950/40 backdrop-blur-md relative z-20 border-b border-solid border-white/10 shrink-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
              <span className="md:hidden">Recent Writings</span>
              <TextScramble
                className="hidden md:inline-block"
                text="Recent Writings"
                duration={1}
              />
            </h2>
            <span className="font-sans text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em] mb-1">
              Thoughts & Insights
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 h-full w-full">
            <ScrollFadeIn
              delay={0.1}
              duration={0.5}
              direction="left"
              className="h-full border-b md:border-b-0 md:border-r border-white/10"
            >
              <div className="p-6 md:p-8 flex flex-col h-full group/post hover:bg-white/[0.02] transition-colors relative">
                <span className="font-sans font-bold text-[9px] text-zinc-500 uppercase tracking-[0.3em] mb-5 bg-white/5 border border-white/5 px-2.5 py-1 rounded-[2px] w-max">
                  Oct 22, 2025
                </span>
                <Link
                  href="https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 mb-4 group-hover/post:from-white group-hover/post:to-zinc-300 transition-all duration-300 cursor-pointer w-fit line-clamp-2 leading-snug">
                    The Centralized Core of Decentralization
                  </h3>
                </Link>
                <p className="text-zinc-400/80 leading-relaxed mb-6 font-light">
                  Rethinking Web3's Infrastructure. Examining the reliance of
                  decentralized networks on centralized cloud providers and
                  efficient infrastructure patterns.
                </p>
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[9px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-300 border border-white/10 bg-white/5 px-2 py-0.5 rounded-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                    #Web3
                  </span>
                </div>
                <div className="mt-auto pt-5 border-t border-white/10 group-hover/post:border-white/20 flex items-center gap-6 transition-colors w-full">
                  <Link
                    href="https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-100 transition-colors group/link"
                  >
                    <BookOpen size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                    <span className="border-b border-transparent group-hover/link:border-zinc-300 transition-all pb-0.5 mt-0.5">Read Article</span>
                    <ArrowUpRight size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn
              delay={0.2}
              duration={0.5}
              direction="right"
              className="h-full border-b md:border-b-0 border-white/10 md:border-none"
            >
              <div className="p-6 md:p-8 flex flex-col h-full group/post hover:bg-white/[0.02] transition-colors relative">
                <span className="font-sans font-bold text-[9px] text-zinc-500 uppercase tracking-[0.3em] mb-5 bg-white/5 border border-white/5 px-2.5 py-1 rounded-[2px] w-max">
                  Jun 9, 2025
                </span>
                <Link
                  href="https://medium.com/@beastslayer23456/backend-scaling-strategies-for-high-traffic-systems-16c8d3ffccd2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 mb-4 group-hover/post:from-white group-hover/post:to-zinc-300 transition-all duration-300 cursor-pointer w-fit line-clamp-2 leading-snug">
                    Backend Scaling Strategies
                  </h3>
                </Link>
                <p className="text-zinc-400/80 leading-relaxed mb-6 font-light">
                  A deep dive into load balancing, database sharding, and
                  caching strategies for building high-traffic, resilient
                  systems.
                </p>
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[9px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-300 border border-white/10 bg-white/5 px-2 py-0.5 rounded-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                    #SystemDesign
                  </span>
                </div>
                <div className="mt-auto pt-5 border-t border-white/10 group-hover/post:border-white/20 flex items-center gap-6 transition-colors w-full">
                  <Link
                    href="https://medium.com/@beastslayer23456/backend-scaling-strategies-for-high-traffic-systems-16c8d3ffccd2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-100 transition-colors group/link"
                  >
                    <BookOpen size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                    <span className="border-b border-transparent group-hover/link:border-zinc-300 transition-all pb-0.5 mt-0.5">Read Article</span>
                    <ArrowUpRight size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Education (Col 4) */}
        <div className="lg:col-span-4 flex flex-col border-b lg:border-b-0 border-white/10 relative z-10 backdrop-blur-sm group/edu overflow-hidden">
          <div className="px-6 md:px-8 h-[88px] flex justify-between items-center bg-zinc-950/40 backdrop-blur-md relative z-20 border-b border-solid border-white/10 w-full">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 w-full">
              <span className="md:hidden">Education</span>
              <TextScramble
                className="hidden md:inline-block"
                text="Education"
                duration={0.8}
              />
            </h2>
          </div>
          <div className="flex-1 w-full bg-transparent hover:bg-white/[0.02] transition-colors relative">
            <ScrollFadeIn delay={0.2} duration={0.5} className="h-full w-full">
              <div className="p-6 md:p-8 h-full flex flex-col w-full relative">
                <h3 className="font-serif font-bold text-lg md:text-xl mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 w-fit">
                  ABES Engineering College, AKTU
                </h3>
                <p className="text-zinc-400/80 mb-8 font-light leading-relaxed">
                  Bachelor in Computer Science and Engineering. Focusing on scalable system design and modern frontend architectures.
                </p>
                <div className="mt-auto pt-5 border-t border-white/10 group-hover/edu:border-white/20 transition-colors w-full">
                  <p className="font-sans text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em] bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-[2px] w-max">
                    Sept '23 — May '27
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>

      <ThroughMyLens />
    </>
  );
}
