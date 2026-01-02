import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  year: string;
}

export default function ProjectCard({ title, description, tags, link, github, year }: ProjectProps) {
  return (
    <div className="flex flex-col h-full p-6 md:p-8">
      <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3">{title}</h3>
      
      <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-zinc-400 text-[10px] font-mono uppercase tracking-wider">
            #{tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-zinc-300 border-dashed flex gap-6">
        {link && (
            <Link 
              href={link} 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <ArrowUpRight size={14} />
              LIVE
            </Link>
        )}
        {github && (
            <Link 
              href={github} 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <Github size={14} />
              GITHUB
            </Link>
        )}
      </div>
    </div>
  );
}
