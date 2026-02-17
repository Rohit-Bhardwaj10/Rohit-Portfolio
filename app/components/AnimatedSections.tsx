"use client";

import {
  ScrollFadeIn,
  AnimatedTimeline,
  TimelineItem,
  TextScramble,
} from "./animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ThroughMyLens from "./ThroughMyLens";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  github: string;
}

interface AnimatedSectionsProps {
  projects: Project[];
}

export default function AnimatedSections({ projects }: AnimatedSectionsProps) {
  return (
    <>
      {/* Row 1: Featured Works & Professional Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Main Content Area (Projects) */}
        <div className="lg:col-span-8 stitch-b lg:stitch-br">
          {/* Section Header */}
          <ScrollFadeIn delay={0} duration={0.6}>
            <div className="px-6 py-3 md:px-8 md:py-4 stitch-b lg:stitch-br flex justify-between items-end bg-[#C4BCB2] relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                <span className="md:hidden">Featured Works</span>
                <TextScramble
                  className="hidden md:inline-block"
                  text="Featured Works"
                  duration={1}
                />
              </h2>
              <span className="font-mono text-xs text-zinc-700 mb-1 uppercase tracking-widest">
                Selected Projects • 2023-2025
              </span>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <ScrollFadeIn
                key={index}
                delay={0.1 * index}
                duration={0.5}
                direction={index % 2 === 0 ? "left" : "right"}
                className="h-full"
              >
                <div
                  className={`
                    ${index % 2 === 0 ? "desktop-stitch-br" : "desktop-stitch-b"} 
                    h-full
                  `}
                >
                  <ProjectCard {...project} index={index} />
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>

        {/* Sidebar Area (Experience) */}
        <div className="lg:col-span-4 stitch-b flex flex-col">
          <ScrollFadeIn delay={0.1} duration={0.6}>
            <div className="px-6 py-3 md:px-8 md:py-4 stitch-b bg-[#C4BCB2] relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">
                <span className="md:hidden">Experience</span>
                <TextScramble
                  className="hidden md:inline-block"
                  text="Experience"
                  duration={1.2}
                />
              </h2>
            </div>
          </ScrollFadeIn>

          {/* Animated Timeline with Draw Effect (B3) */}
          <AnimatedTimeline>
            {/* Experience Item 1 */}
            <TimelineItem index={0} isFirst={true}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-lg font-bold uppercase tracking-wider text-zinc-900">
                  BarterNow
                </h3>
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mt-1 sm:mt-0">
                  oct 2025 - Jan 2026
                </span>
              </div>
              <p className="font-serif italic text-zinc-700 mb-3 text-base">
                Backend Developer Intern
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base font-medium">
                Working on scalable backend architecture, optimizing database
                performance, and building robust API services. Implemented
                caching strategies and query optimization to improve response
                times. Collaborated with cross-functional teams to design and
                develop RESTful APIs serving thousands of daily users.
              </p>
            </TimelineItem>

            {/* Experience Item 2 */}
            <TimelineItem index={1} isLast={true}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-lg font-bold uppercase tracking-wider text-zinc-900">
                  Freelance
                </h3>
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mt-1 sm:mt-0">
                  2025 - Present
                </span>
              </div>
              <p className="font-serif italic text-zinc-700 mb-3 text-base">
                Full Stack Developer
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base font-medium">
                Developed multiple end-to-end production-grade systems and
                developer tools, focusing on performance, scalability, and clean
                code architecture. Built responsive web applications using
                modern frameworks and delivered projects that handled high
                traffic loads.
              </p>
            </TimelineItem>
          </AnimatedTimeline>
        </div>
      </div>

      {/* Row 2: Recent Writings & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Recent Writings (Col 8) */}
        <div className="lg:col-span-8 stitch-b lg:stitch-br">
          {/* Section Header */}
          <ScrollFadeIn delay={0} duration={0.6}>
            <div className="px-6 py-2 md:px-8 md:py-3 stitch-b lg:stitch-br flex justify-between items-end bg-[#C4BCB2] relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                <span className="md:hidden">Recent Writings</span>
                <TextScramble
                  className="hidden md:inline-block"
                  text="Recent Writings"
                  duration={1}
                />
              </h2>
              <span className="font-mono text-xs text-zinc-700 mb-1 uppercase tracking-widest">
                Thoughts & Insights
              </span>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <ScrollFadeIn
              delay={0.1}
              duration={0.5}
              direction="left"
              className="h-full"
            >
              <div className="desktop-stitch-r p-6 md:p-8 flex flex-col h-full">
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
                  Oct 22, 2025
                </span>
                <Link
                  href="https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3 hover:underline cursor-pointer">
                    The Centralized Core of Decentralization
                  </h3>
                </Link>
                <p className="text-zinc-600 leading-relaxed mb-6 flex-1 font-medium">
                  Rethinking Web3's Infrastructure. Examining the reliance of
                  decentralized networks on centralized cloud providers and
                  efficient infrastructure patterns.
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider">
                    #Web3
                  </span>
                </div>
                <div className="pt-4 stitch-t flex items-center gap-6">
                  <Link
                    href="https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 transition-colors"
                  >
                    <BookOpen size={14} />
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn
              delay={0.2}
              duration={0.5}
              direction="right"
              className="h-full"
            >
              <div className="p-6 md:p-8 flex flex-col h-full">
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
                  Jun 9, 2025
                </span>
                <Link
                  href="https://medium.com/@beastslayer23456/backend-scaling-strategies-for-high-traffic-systems-16c8d3ffccd2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3 hover:underline cursor-pointer">
                    Backend Scaling Strategies
                  </h3>
                </Link>
                <p className="text-zinc-600 leading-relaxed mb-6 flex-1 font-medium">
                  A deep dive into load balancing, database sharding, and
                  caching strategies for building high-traffic, resilient
                  systems.
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider">
                    #SystemDesign
                  </span>
                </div>
                <div className="pt-4 stitch-t flex items-center gap-6">
                  <Link
                    href="https://medium.com/@beastslayer23456/backend-scaling-strategies-for-high-traffic-systems-16c8d3ffccd2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 transition-colors"
                  >
                    <BookOpen size={14} />
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Education (Col 4) */}
        <div className="lg:col-span-4 flex flex-col stitch-b">
          <ScrollFadeIn delay={0.1} duration={0.6}>
            <div className="px-6 py-2 md:px-8 md:py-3 stitch-b flex items-end bg-[#C4BCB2] relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">
                <span className="md:hidden">Education</span>
                <TextScramble
                  className="hidden md:inline-block"
                  text="Education"
                  duration={0.8}
                />
              </h2>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2} duration={0.5}>
            <div className="px-6 py-4 md:px-8 md:py-6">
              <h3 className="font-serif font-bold text-lg mb-1">
                ABES Engineering College, AKTU
              </h3>
              <p className="text-zinc-700 mb-1">
                Bachelor in Computer Science and Engineering
              </p>
              <p className="font-mono text-xs text-zinc-600">
                Sept 2023 - May 2027
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* Photography Section (Ended) */}
      <ThroughMyLens />
    </>
  );
}
