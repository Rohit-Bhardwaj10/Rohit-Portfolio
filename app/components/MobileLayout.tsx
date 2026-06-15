"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  User,
  Briefcase,
  Code,
  Cpu,
  BookOpen,
  Mail,
  FileText,
  Github,
  Linkedin,
  Twitter,
  Clock,
  Send,
  Loader2,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { projectsData } from "../data/projects";
import ContactModal from "./ContactModal";

/* ─── Utility ─────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "About", icon: User, href: "#about" },
  { label: "Experience", icon: Briefcase, href: "#experience" },
  { label: "Projects", icon: Code, href: "#projects" },
  { label: "Stack", icon: Cpu, href: "#stack" },
  { label: "Writings", icon: BookOpen, href: "#writings" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const SOCIAL = [
  { label: "GitHub", icon: Github, href: "https://github.com/Rohit-Bhardwaj10/" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/dev-rohitbhardwaj/" },
  { label: "Twitter", icon: Twitter, href: "https://x.com/whoisrohit45" },
];

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
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", invert: true },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg" },
];

const writings = [
  {
    date: "Oct 22, 2025",
    title: "The Centralized Core of Decentralization",
    description: "Examining the reliance of decentralized networks on centralized cloud providers.",
    tag: "#Web3",
    href: "https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da",
    readTime: "6 min read",
  },
  {
    date: "Jun 9, 2025",
    title: "A Developer's Dilemma",
    description: "Between Perfection and Shipping — balancing clean code with shipping speed.",
    tag: "#Thoughts",
    href: "https://dev.to/rohit_bhardwaj_94db62db7b/a-developer-s-dilemma-between-perfection-and-shipping-21h",
    readTime: "5 min read",
  },
];

/* ─── Section divider ─────────────────────────────────────────── */
function SectionLabel({ vol, children }: { vol: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-8 pb-4 border-b border-dashed border-white/10">
      <h2 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 tracking-tight uppercase">
        {children}
      </h2>
      <span className="font-mono text-[9px] text-zinc-600 font-bold uppercase tracking-[0.3em]">{vol}</span>
    </div>
  );
}

/* ─── Mobile Nav ─────────────────────────────────────────────── */
function MobileNav() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    );
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center px-5 py-3">
          <div className="flex flex-col">
            <span className="font-serif text-sm font-bold text-zinc-100 leading-tight">Rohit Bhardwaj</span>
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.2em]">{date}</span>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <nav className="p-4 grid grid-cols-3 gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all text-zinc-400 hover:text-white active:scale-95"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="flex gap-4 justify-center pb-5 border-t border-white/5 pt-4">
              {SOCIAL.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Hero Section ───────────────────────────────────────────── */
function MobileHero({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative px-5 pt-10 pb-14 overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(161,161,170,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 flex gap-5 items-start mb-8">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] bg-zinc-900"
        >
          <div className="relative w-full h-full">
            <Image
              src="/jpeg.jpeg"
              alt="Rohit Bhardwaj"
              fill
              className="object-cover object-[center_20%] grayscale"
            />
          </div>
        </motion.div>

        {/* Name + Role */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center pt-1"
        >
          <h1
            className="text-3xl font-bold text-zinc-100 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Rohit<br />Bhardwaj
          </h1>
          <p className="mt-1.5 text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.18em]">
            Full Stack Engineer
          </p>
          {/* Status */}
          <div className="mt-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)] animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 font-bold">Available</span>
          </div>
        </motion.div>
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="border-l-2 border-zinc-700 pl-4 mb-8"
      >
        <p className="text-zinc-400 text-sm leading-relaxed font-light">
          I specialize in architecting reliable and scalable backend systems, while building interactive frontends using
          React and Next.js. My focus is on creating end-to-end digital experiences that are robust, performant, and
          completely timeless.
        </p>
      </motion.div>

      {/* Info Pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="grid grid-cols-2 gap-3 mb-8"
      >
        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-3 flex items-center gap-2.5">
          <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
          <div>
            <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">Local Time</p>
            <p className="text-xs font-mono text-zinc-300 font-bold">IST (UTC +5:30)</p>
          </div>
        </div>
        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-3">
          <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider mb-1">Focus</p>
          <div className="flex flex-wrap gap-1">
            {["TypeScript", "Go", "Next.js"].map((t) => (
              <span key={t} className="px-1.5 py-0.5 bg-white/5 rounded text-[8px] text-zinc-300 font-mono font-bold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex gap-3"
      >
        <button
          onClick={onContact}
          className="flex-1 bg-zinc-100 text-zinc-900 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center justify-center gap-2 hover:bg-white transition-colors active:scale-95"
        >
          Start Project <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
        <a
          href="/Rohit_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 border border-white/10 rounded-sm hover:text-white hover:border-white/20 transition-all active:scale-95"
        >
          <FileText className="w-3.5 h-3.5" /> CV
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex justify-center mt-10"
      >
        <div className="flex flex-col items-center gap-1.5 text-zinc-600">
          <span className="font-mono text-[8px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

/* ─── About Section ──────────────────────────────────────────── */
function MobileAbout() {
  return (
    <section id="about" className="px-5 py-14 border-t border-dashed border-white/10">
      <SectionLabel vol="Vol. 00">About</SectionLabel>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-zinc-400 text-sm leading-relaxed">
          I'm a Full Stack & Backend Engineer focused on creating end-to-end digital experiences that are robust,
          performant, and timeless. I architect reliable and scalable backend systems while building interactive
          frontends using React and Next.js.
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed">
          This portfolio was redesigned into a macOS-style windowing system to demonstrate advanced state management and
          Framer Motion capabilities — you're viewing the mobile-optimised version.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["Backend", "Frontend", "Web3", "System Design", "Open Source"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 border border-white/10 bg-white/[0.03] rounded-sm text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Experience Section ─────────────────────────────────────── */
const experiences = [
  {
    company: "BarterNow",
    role: "Backend Intern",
    period: "'25 — '26",
    location: "Noida, IN",
    active: true,
    description:
      "Performance-critical backend infrastructure for a high-traffic barter system. Architected the core API layer and optimized service-to-service communication.",
    tags: ["JavaScript", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    company: "Freelance",
    role: "Full Stack Engineer",
    period: "Current",
    location: "Remote",
    active: false,
    description:
      "Delivering end-to-end production systems for diverse clients. Focus on performance optimization, clean code patterns, and modern frontend architectures.",
    tags: ["Next.js", "TypeScript", "Node.js", "AWS", "GO"],
  },
];

function MobileExperience() {
  return (
    <section id="experience" className="px-5 py-14 border-t border-dashed border-white/10">
      <SectionLabel vol="Vol. 02">Experience</SectionLabel>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-base font-bold text-zinc-100 uppercase tracking-tighter flex items-center gap-2">
                  {exp.company}
                  {exp.active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                  )}
                </h3>
                <p className="font-serif italic text-sm text-zinc-500">{exp.role}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">
                  {exp.period}
                </span>
                <p className="font-mono text-[9px] text-zinc-600 mt-1 uppercase tracking-widest">{exp.location}</p>
              </div>
            </div>
            <div className="pl-4 border-l border-white/10 relative">
              <motion.div
                className="absolute top-0 -left-[1px] w-[2px] h-0 bg-white/30"
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                viewport={{ once: true }}
              />
              <p className="text-zinc-400 text-xs leading-relaxed mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold font-mono uppercase tracking-[0.15em] text-zinc-500 border border-white/10 bg-white/[0.03] px-2 py-0.5 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Projects Section ───────────────────────────────────────── */
function MobileProjects() {
  return (
    <section id="projects" className="px-5 py-14 border-t border-dashed border-white/10">
      <SectionLabel vol="Vol. 01">Projects</SectionLabel>
      <div className="space-y-8">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-base font-bold text-zinc-100 uppercase tracking-tighter">{project.title}</h3>
                <p className="font-serif italic text-sm text-zinc-500">Personal Project</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-[10px] text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">
                  {project.year}
                </span>
                <div className="flex gap-2">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="pl-4 border-l border-white/10 relative">
              <motion.div
                className="absolute top-0 -left-[1px] w-[2px] h-0 bg-white/30"
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                viewport={{ once: true }}
              />
              <p className="text-zinc-400 text-xs leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold font-mono uppercase tracking-[0.15em] text-zinc-500 border border-white/10 bg-white/[0.03] px-2 py-0.5 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Tech Stack Section ─────────────────────────────────────── */
function MobileStack() {
  return (
    <section id="stack" className="px-5 py-14 border-t border-dashed border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-[100px] font-serif font-black text-white/[0.015] pointer-events-none select-none tracking-tighter">
        ARSENAL
      </div>
      <SectionLabel vol="Stack // 01">Arsenal</SectionLabel>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-4 gap-3 relative z-10"
      >
        {allTools.map((tool, idx) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.02 }}
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/15 transition-all aspect-square"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.icon}
              alt={tool.name}
              className={`w-7 h-7 object-contain ${tool.invert ? "brightness-0 invert opacity-90" : ""}`}
            />
            <span className="font-mono text-[7px] uppercase font-bold tracking-wider text-zinc-600 text-center truncate w-full px-0.5">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─── Writings Section ───────────────────────────────────────── */
function MobileWritings() {
  return (
    <section id="writings" className="px-5 py-14 border-t border-dashed border-white/10">
      <SectionLabel vol="Thoughts">Writings</SectionLabel>
      <div className="space-y-6">
        {writings.map((post, i) => (
          <motion.a
            key={i}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="block group"
          >
            <div className="p-4 border border-white/8 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 shrink-0 transition-colors mt-0.5" />
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed mb-3">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-zinc-500 border border-white/10 bg-white/5 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  {post.tag}
                </span>
                <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ─── GitHub Section ─────────────────────────────────────────── */
function MobileGithub() {
  return (
    <section className="px-5 py-14 border-t border-dashed border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-[80px] font-serif font-black text-white/[0.015] pointer-events-none select-none tracking-tighter">
        COMMITS
      </div>
      <SectionLabel vol="Contributions // 02">Code History</SectionLabel>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full overflow-x-auto bg-black/20 border border-white/5 rounded-xl p-4 relative z-10"
      >
        <GitHubCalendar
          username="Rohit-Bhardwaj10"
          colorScheme="dark"
          blockSize={8}
          blockMargin={3}
          fontSize={9}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#18181b", "#064e3b", "#059669", "#10b981", "#34d399"],
          }}
        />
      </motion.div>
      <div className="mt-4 flex justify-center relative z-10">
        <a
          href="https://github.com/Rohit-Bhardwaj10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors group text-[10px] font-mono font-bold uppercase tracking-[0.15em]"
        >
          <Github className="w-4 h-4" />
          @Rohit-Bhardwaj10
        </a>
      </div>
    </section>
  );
}

/* ─── Contact Section ────────────────────────────────────────── */
function MobileContact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-5 py-14 border-t border-dashed border-white/10">
      <SectionLabel vol="Let's Talk">Contact</SectionLabel>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
          Have a project in mind or just want to say hi? Drop me a message — I'll get back to you.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-950/30 border border-emerald-900/50 p-6 rounded-xl text-center"
            >
              <p className="text-emerald-400 font-serif font-bold text-xl mb-1">Message Sent!</p>
              <p className="text-emerald-600 font-mono text-[10px] uppercase tracking-widest">I'll get back to you soon</p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 font-serif text-base placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-sm"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 font-serif text-base placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-sm"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 font-serif text-base placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-zinc-100 text-zinc-900 py-4 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-colors rounded-sm disabled:opacity-70 active:scale-[0.99]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
              <p className="text-center font-mono text-[9px] text-zinc-600 uppercase tracking-wider">
                Or reach me at{" "}
                <a href="mailto:beastslayer23456@gmail.com" className="underline hover:text-zinc-400">
                  beastslayer23456@gmail.com
                </a>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function MobileFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="flex flex-col items-center gap-6">
        <p
          className="text-2xl font-bold text-zinc-800"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Rohit Bhardwaj
        </p>
        <div className="flex gap-4">
          {SOCIAL.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:text-white hover:bg-white/10 transition-all"
                aria-label={s.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
        <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest text-center">
          © {new Date().getFullYear()} · Designed &amp; Built by Rohit Bhardwaj
        </p>
      </div>
    </footer>
  );
}

/* ─── Main Export ────────────────────────────────────────────── */
export default function MobileLayout() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 relative">
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-gradient" style={{ background: "radial-gradient(circle at center,transparent 0%,rgba(0,0,0,0.5) 100%)" }} />

      <div className="relative z-10">
        <MobileNav />

        <main>
          <MobileHero onContact={() => setIsContactOpen(true)} />
          <MobileAbout />
          <MobileExperience />
          <MobileProjects />
          <MobileStack />
          <MobileWritings />
          <MobileGithub />
          <MobileContact />
        </main>

        <MobileFooter />
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
