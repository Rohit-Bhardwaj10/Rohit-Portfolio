"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

import { Project } from "../data/projects";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col relative z-10 w-full overflow-y-auto overflow-x-hidden h-full">
      <div className="px-4 md:px-6 h-[60px] md:h-[72px] border-b border-white/10 flex justify-between items-center w-full shrink-0">
        <h2 className="text-lg md:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
          Projects
        </h2>
        <span className="font-sans text-[9px] text-zinc-500 font-bold tracking-[0.3em]">VOL. 01</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 h-full w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`border-white/10 ${index % 2 === 0 ? "md:border-r" : ""} border-b h-full backdrop-blur-sm`}
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
