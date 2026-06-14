"use client";

import { Github, ExternalLink, ArrowUpRight, FolderOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  year: string;
  index?: number;
}

export default function ProjectCard({ title, description, tags, link, github, year, index = 0 }: ProjectProps) {
  return (
    <motion.div
      className="h-full bg-white/[0.01] p-4 md:p-5 flex flex-col justify-between relative group overflow-hidden border border-transparent rounded-[2px] backdrop-blur-sm"
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)"
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Background Index Watermark - Very subtle */}
      <div className="absolute -bottom-4 -right-4 text-7xl font-serif font-black text-zinc-100/[0.02] group-hover:text-zinc-100/[0.04] transition-colors pointer-events-none select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Aesthetic Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header - Narrower margin */}
        <div className="relative z-10 flex justify-between items-start mb-4">
          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
            {year} // {index < 9 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 mb-4">
          <h3 className="text-lg md:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 leading-tight mb-2 group-hover:from-white group-hover:to-zinc-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-zinc-400/80 text-xs leading-relaxed font-light line-clamp-2 group-hover:text-zinc-300/90 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-10 space-y-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-zinc-300 text-[8px] font-bold font-sans uppercase tracking-[0.2em] px-2 py-0.5 border border-white/10 rounded-sm bg-white/5 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons - Compact gap */}
        <div className="flex gap-4 pt-3 border-t border-white/5 group-hover:border-white/10 transition-colors">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-100 transition-colors group/link"
            >
              <Github size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
              <span className="border-b border-transparent group-hover/link:border-zinc-300 transition-all pb-0.5">Code</span>
            </Link>
          )}
          {link && link !== "#" && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-100 transition-colors group/link"
            >
              <ArrowUpRight size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
              <span className="border-b border-transparent group-hover/link:border-zinc-300 transition-all pb-0.5">Live</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}




