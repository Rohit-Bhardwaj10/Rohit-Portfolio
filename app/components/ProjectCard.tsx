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
      className="h-full bg-transparent border border-zinc-900/30 group-hover:border-zinc-900 p-4 md:p-6 flex flex-col justify-between relative group overflow-hidden"
      whileHover={{ 
        scale: 1.02,
        backgroundColor: "#d4cdc3",
      }}
      transition={{ 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Subtle shadow on hover */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
        whileHover={{ boxShadow: "12px 12px 0px 0px rgba(0,0,0,0.15)" }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Technical Mark */}
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-zinc-900/20 group-hover:border-zinc-900/40 transition-colors" />
      
      {/* Watermark Index */}
      <div className="absolute -bottom-4 -right-4 text-[120px] font-serif font-bold text-zinc-900/5 group-hover:text-zinc-900/10 transition-colors pointer-events-none select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start mb-4">
        <span className="font-serif text-3xl font-bold text-zinc-900/30 group-hover:text-zinc-900/50 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-900 px-2 py-0.5 rounded-full border border-zinc-900/30 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-[#C4BCB2] transition-all">
          {year}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 mb-4">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-sans font-medium">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 4).map((tag, i) => (
          <motion.span 
            key={tag}
            className="text-zinc-600 group-hover:text-zinc-900 text-[10px] font-bold font-mono uppercase tracking-wider px-2 py-1 border border-zinc-900/10 group-hover:border-zinc-900/30 rounded transition-all"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex gap-3 pt-3 border-t border-zinc-900/10 group-hover:border-zinc-900/20 transition-colors">
        {github && (
          <Link 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-transparent border border-zinc-900 bg-zinc-900 text-[#C4BCB2] transition-all duration-200"
          >
            <Github size={14} />
            <span>Source</span>
          </Link>
        )}
        {link && link !== "#" && (
          <Link 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-900 text-[#C4BCB2] hover:bg-zinc-800 transition-all duration-200"
          >
            <span>Visit</span>
            <ArrowUpRight size={14} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
