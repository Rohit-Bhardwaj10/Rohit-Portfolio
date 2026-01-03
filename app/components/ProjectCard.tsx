import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <div className="relative h-full p-6 md:p-8 flex flex-col">
      {/* Project number - top corner */}
      <div className="absolute top-4 right-4">
        <span className="text-5xl md:text-6xl font-serif font-black text-zinc-900/10 leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Year badge */}
      <div className="mb-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 border border-zinc-400 px-2 py-1">
          {year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 mb-4 pr-12 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-zinc-700 text-sm md:text-base leading-relaxed mb-6 flex-1 line-clamp-3">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="pt-4 stitch-t flex items-center gap-6">
        {github && (
          <Link 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <Github size={14} />
            <span>Github</span>
            <ArrowUpRight size={14} />
          </Link>
        )}
        {link && link !== "#" && (
          <Link 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <ExternalLink size={14} />
            <span>Live</span>
          </Link>
        )}
      </div>
    </div>
  );
}
