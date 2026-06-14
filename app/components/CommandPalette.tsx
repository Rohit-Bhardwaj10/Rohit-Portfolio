"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  FileText,
  Mail,
  Twitter,
  Linkedin,
  Folder,
  Hash,
  Terminal,
  User,
  ChevronRight,
  Zap,
  X,
} from "lucide-react";

interface Command {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
  keywords?: string[];
}

interface CommandPaletteProps {
  onContactOpen?: () => void;
}

// ── Draggable floating "About" window ──────────────────────────────────────
function AboutWindow({ onClose }: { onClose: () => void }) {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0, origX: 0, origY: 0 });
  const [pos, setPos] = useState({ x: 60, y: 60 });

  const onMouseDown = (e: React.MouseEvent) => {
    dragRef.current = { isDragging: true, startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
    e.preventDefault();
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging) return;
      setPos({ x: dragRef.current.origX + e.clientX - dragRef.current.startX, y: dragRef.current.origY + e.clientY - dragRef.current.startY });
    };
    const onMouseUp = () => { dragRef.current.isDragging = false; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp); };
  }, []);

  return (
    <motion.div
      ref={windowRef}
      className="fixed z-[10001] w-[520px] rounded-xl overflow-hidden bg-[#111111] border border-white/[0.08] shadow-[0_32px_100px_rgba(0,0,0,0.95)]"
      style={{ left: pos.x, top: pos.y }}
      initial={{ opacity: 0, scale: 0.92, y: -12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -8 }}
      transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
    >
      {/* ── Title bar ── */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] select-none"
        onMouseDown={onMouseDown}
        data-drag-handle="true"
      >
        {/* macOS traffic lights */}
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full bg-[#FF5F57] cursor-pointer flex items-center justify-center group"
            onClick={onClose}
          >
            <X size={6} className="opacity-0 group-hover:opacity-100 text-[#7a0000] transition-opacity" />
          </div>
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Centered label */}
        <span className="absolute left-1/2 -translate-x-1/2 text-[11px] font-medium text-zinc-500 tracking-widest uppercase">
          About
        </span>

        {/* Right spacer to balance dots */}
        <div className="w-[52px]" />
      </div>

      {/* ── Body ── */}
      <div className="px-10 pt-10 pb-8 flex flex-col gap-5">
        {/* Big name */}
        <div>
          <h2 className="text-[42px] leading-[1.05] font-black text-zinc-100 tracking-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Rohit<br />Bhardwaj
          </h2>
          <p className="mt-3 text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-[0.2em]">
            Full Stack / Backend Engineer
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.07]" />

        {/* Bio */}
        <p className="text-zinc-400 text-[14px] leading-[1.75] font-light">
          Building systems at the intersection of{" "}
          <span className="text-zinc-200">performance-critical backends</span> and{" "}
          <span className="text-zinc-200">high-fidelity frontends</span>. 
          Scalable APIs, on-chain protocols, and developer tools. 
          Occasionally writes about Go and clean architecture.
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="border-t border-white/[0.07]" />

        {/* Bottom bar — avatar + handle + socials */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 border border-white/10 flex items-center justify-center text-zinc-300 font-serif font-black text-base shrink-0">
            R
          </div>

          {/* Handle + location */}
          <div>
            <p className="text-[11px] font-mono font-semibold text-zinc-300 uppercase tracking-widest">@whoisrohit45</p>
            <p className="text-[10px] font-mono text-zinc-600">India · {new Date().getFullYear() - 2001}</p>
          </div>

          {/* Social icons */}
          <div className="ml-auto flex items-center gap-4">
            <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" title="Twitter">
              <Twitter size={16} className="text-zinc-600 hover:text-zinc-200 transition-colors" />
            </a>
            <a href="https://github.com/Rohit-Bhardwaj10/" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={16} className="text-zinc-600 hover:text-zinc-200 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={16} className="text-zinc-600 hover:text-zinc-200 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


// ── Main command palette ────────────────────────────────────────────────────
export default function CommandPalette({ onContactOpen }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const commands: Command[] = [
    // Navigation
    {
      id: "nav-projects",
      label: "Go to Projects",
      description: "View all featured works",
      icon: <Folder size={15} />,
      category: "Navigate",
      keywords: ["works", "portfolio", "code"],
      action: () => scrollTo("projects-section"),
    },
    {
      id: "nav-experience",
      label: "Go to Experience",
      description: "My work history & roles",
      icon: <User size={15} />,
      category: "Navigate",
      keywords: ["work", "job", "career", "history"],
      action: () => scrollTo("experience-section"),
    },
    {
      id: "nav-stack",
      label: "Go to Tech Stack",
      description: "Tools & technologies I use",
      icon: <Hash size={15} />,
      category: "Navigate",
      keywords: ["tools", "technologies", "react", "node"],
      action: () => scrollTo("techstack-section"),
    },
    {
      id: "nav-writings",
      label: "Go to Writings",
      description: "Articles & blog posts",
      icon: <FileText size={15} />,
      category: "Navigate",
      keywords: ["blog", "articles", "posts"],
      action: () => scrollTo("writings-section"),
    },
    // Projects
    {
      id: "proj-flashmon",
      label: "Flashmon",
      description: "CLI auto-reloader for Node.js",
      icon: <Zap size={15} />,
      category: "Projects",
      keywords: ["cli", "node", "typescript"],
      action: () => { window.open("https://github.com/Rohit-Bhardwaj10/flashmon", "_blank"); setIsOpen(false); },
    },
    {
      id: "proj-depin",
      label: "DePIN Uptime Monitor",
      description: "Decentralized validator monitoring",
      icon: <Zap size={15} />,
      category: "Projects",
      keywords: ["solana", "blockchain", "web3", "docker"],
      action: () => { window.open("https://github.com/Rohit-Bhardwaj10/stay-up", "_blank"); setIsOpen(false); },
    },
    {
      id: "proj-events",
      label: "Events Flow",
      description: "Full-stack event management platform",
      icon: <Zap size={15} />,
      category: "Projects",
      keywords: ["nextjs", "razorpay", "payments"],
      action: () => { window.open("https://github.com/Rohit-Bhardwaj10/EventFlow", "_blank"); setIsOpen(false); },
    },
    {
      id: "proj-dhiree",
      label: "DHiree",
      description: "Decentralized freelance platform",
      icon: <Zap size={15} />,
      category: "Projects",
      keywords: ["solidity", "ethereum", "hardhat", "ipfs"],
      action: () => { window.open("https://github.com/Rohit-Bhardwaj10/D-Hiree", "_blank"); setIsOpen(false); },
    },
    {
      id: "proj-cache",
      label: "Semantic Cache Proxy",
      description: "LLM caching proxy — 85% cost reduction",
      icon: <Zap size={15} />,
      category: "Projects",
      keywords: ["go", "llm", "prometheus", "grafana"],
      action: () => { window.open("https://github.com/Rohit-Bhardwaj10/smart-cache-proxy", "_blank"); setIsOpen(false); },
    },
    // Contact
    {
      id: "contact-email",
      label: "Get in Touch",
      description: "Open the contact form",
      icon: <Mail size={15} />,
      category: "Contact",
      keywords: ["email", "hire", "work", "contact"],
      action: () => { setIsOpen(false); onContactOpen?.(); },
    },
    {
      id: "social-github",
      label: "GitHub Profile",
      description: "@Rohit-Bhardwaj10",
      icon: <Github size={15} />,
      category: "Social",
      keywords: ["code", "repos", "open source"],
      action: () => { window.open("https://github.com/Rohit-Bhardwaj10/", "_blank"); setIsOpen(false); },
    },
    {
      id: "social-linkedin",
      label: "LinkedIn",
      description: "dev-rohitbhardwaj",
      icon: <Linkedin size={15} />,
      category: "Social",
      keywords: ["professional", "connect"],
      action: () => { window.open("https://www.linkedin.com/in/dev-rohitbhardwaj/", "_blank"); setIsOpen(false); },
    },
    {
      id: "social-twitter",
      label: "Twitter / X",
      description: "@whoisrohit45",
      icon: <Twitter size={15} />,
      category: "Social",
      keywords: ["tweet", "x"],
      action: () => { window.open("https://x.com/whoisrohit45", "_blank"); setIsOpen(false); },
    },
    {
      id: "resume",
      label: "Download Resume",
      description: "Get my latest CV",
      icon: <FileText size={15} />,
      category: "Contact",
      keywords: ["cv", "pdf", "hire"],
      action: () => { window.open("/Rohit_CV.pdf", "_blank"); setIsOpen(false); },
    },
    // About — opens floating window instead of alert
    {
      id: "easter-terminal",
      label: "Who is Rohit?",
      description: "Open quick-profile card",
      icon: <Terminal size={15} />,
      category: "About",
      keywords: ["about", "bio", "info"],
      action: () => { setIsOpen(false); setShowAbout(true); },
    },
  ];

  const filtered = query.trim()
    ? commands.filter((c) => {
        const q = query.toLowerCase();
        return (
          c.label.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.keywords?.some((k) => k.includes(q))
        );
      })
    : commands;

  const grouped = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  const flat = Object.values(grouped).flat();

  const open = useCallback(() => { setIsOpen(true); setQuery(""); setSelectedIndex(0); }, []);
  const close = useCallback(() => { setIsOpen(false); setQuery(""); }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); isOpen ? close() : open(); }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, open, close]);

  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 50); }, [isOpen]);
  useEffect(() => { setSelectedIndex(0); }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => Math.min(i + 1, flat.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); flat[selectedIndex]?.action(); }
  };

  const categoryColors: Record<string, string> = {
    Navigate: "text-blue-400",
    Projects: "text-emerald-400",
    Contact: "text-violet-400",
    Social: "text-amber-400",
    About: "text-zinc-400",
  };

  let globalIdx = 0;

  return (
    <>
      {/* Trigger hint button */}
      <button
        onClick={open}
        className="hidden md:flex items-center gap-2 font-mono text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors border border-white/10 hover:border-white/20 px-2.5 py-1.5 rounded-md bg-white/[0.02] hover:bg-white/[0.04] group"
        title="Open command palette (Ctrl+K)"
      >
        <Terminal size={11} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        <span className="tracking-widest uppercase">Ctrl K</span>
      </button>

      {/* Floating About Window */}
      <AnimatePresence>
        {showAbout && <AboutWindow onClose={() => setShowAbout(false)} />}
      </AnimatePresence>

      {/* Command Palette */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={close}
            />

            {/* Palette panel */}
            <motion.div
              className="fixed top-[15%] left-1/2 z-[9999] w-full max-w-[580px] -translate-x-1/2"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="mx-4 rounded-xl bg-zinc-950 border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden">
                {/* Search bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                  <Terminal size={14} className="text-zinc-500 shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 outline-none font-mono"
                  />
                  <kbd className="text-[9px] font-mono text-zinc-600 border border-white/10 px-1.5 py-0.5 rounded">ESC</kbd>
                </div>

                {/* Results */}
                <div className="max-h-[360px] overflow-y-auto overscroll-contain">
                  {flat.length === 0 ? (
                    <div className="py-10 text-center text-zinc-600 font-mono text-xs">
                      No results for &quot;{query}&quot;
                    </div>
                  ) : (
                    Object.entries(grouped).map(([cat, cmds]) => (
                      <div key={cat}>
                        <div className={`px-4 pt-3 pb-1 text-[9px] font-bold font-mono uppercase tracking-[0.25em] ${categoryColors[cat] ?? "text-zinc-500"}`}>
                          {cat}
                        </div>
                        {cmds.map((cmd) => {
                          const myIdx = globalIdx++;
                          const isSelected = myIdx === selectedIndex;
                          return (
                            <button
                              key={cmd.id}
                              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors group cursor-pointer ${
                                isSelected
                                  ? "bg-white/[0.06] text-zinc-100"
                                  : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                              }`}
                              onMouseEnter={() => setSelectedIndex(myIdx)}
                              onClick={cmd.action}
                            >
                              <span className={`shrink-0 opacity-60 group-hover:opacity-100 transition-opacity ${isSelected ? "opacity-100" : ""}`}>
                                {cmd.icon}
                              </span>
                              <span className="flex-1 min-w-0">
                                <span className="block text-sm font-medium font-sans truncate">{cmd.label}</span>
                                {cmd.description && (
                                  <span className="block text-[10px] text-zinc-600 truncate font-mono">{cmd.description}</span>
                                )}
                              </span>
                              <ChevronRight
                                size={12}
                                className={`shrink-0 opacity-0 group-hover:opacity-40 transition-opacity ${isSelected ? "opacity-40" : ""}`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2.5 border-t border-white/10 flex items-center gap-4 bg-zinc-950/80">
                  <span className="font-mono text-[9px] text-zinc-600 flex items-center gap-1.5">
                    <kbd className="border border-white/10 px-1 py-0.5 rounded text-[8px]">↑↓</kbd> navigate
                  </span>
                  <span className="font-mono text-[9px] text-zinc-600 flex items-center gap-1.5">
                    <kbd className="border border-white/10 px-1 py-0.5 rounded text-[8px]">↵</kbd> open
                  </span>
                  <span className="ml-auto font-mono text-[9px] text-zinc-700 flex items-center gap-1">
                    <ArrowUpRight size={9} />
                    rohitships.tech
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
