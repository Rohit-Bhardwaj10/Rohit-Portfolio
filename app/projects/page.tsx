import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import ScrollFadeIn from "../components/animations/ScrollFadeIn";

export default function ProjectsArchive() {
  return (
    <div className="min-h-screen text-zinc-100 bg-[#0A0A0B] relative overflow-x-hidden w-full flex flex-col font-sans selection:bg-zinc-100 selection:text-[#0A0A0B]">
      {/* Grid texture overlay matching globals.css */}
      <div className="fixed inset-0 pointer-events-none bg-paper-pattern opacity-30 mix-blend-screen" style={{ zIndex: 9999 }} />
      <div className="fixed inset-0 pointer-events-none bg-vignette opacity-80" style={{ zIndex: 9998 }} />
      
      {/* Top Nav */}
      <nav className="w-full flex justify-between items-center px-6 py-6 md:px-12 border-b border-zinc-800 relative z-10 bg-zinc-950/20 backdrop-blur-md">
        <div className="text-zinc-100 flex items-center gap-2">
           <Terminal size={18} className="text-zinc-100" />
           <span className="font-serif font-bold tracking-tight">ROHIT BHARDWAJ / INDEX</span>
        </div>
        <Link 
          href="/"
          className="group flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          EXIT TO HOME
        </Link>
      </nav>

      <main className="flex-grow flex flex-col w-full max-w-6xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24 relative z-10">
        {/* Header - Layout inspired by reference but Theme from Portfolio */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 text-zinc-500 mb-4 font-mono">
            <span className="text-[10px] tracking-widest">[ {projectsData.length < 10 ? `0${projectsData.length}` : projectsData.length} ] PROJECTS</span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-100 tracking-tight leading-none mb-6 uppercase"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Selected Projects<span className="text-zinc-500">.</span>
          </h1>
          
          <p className="text-zinc-400 max-w-xl text-base md:text-lg font-medium leading-relaxed font-sans opacity-90 border-l-2 border-zinc-800 pl-6">
            Open source experiments & production software. Built with intent. Shipped with care.
          </p>

        </div>

        {/* Clean Project Grid - Consistent with Portfolio Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1} direction="up" className="group h-full">
              <div className="border border-zinc-800 hover:border-zinc-600 transition-all duration-500 bg-zinc-950/50 hover:bg-zinc-950 rounded overflow-hidden flex flex-col h-full group">
                 {/* Card Header (Dots) - Portfolio Styles */}
                 <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-900 border-b border-zinc-800 group-hover:bg-zinc-800/80 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <span className="ml-auto text-[9px] text-zinc-500 font-mono tracking-widest uppercase font-bold">PKG-{index + 101}</span>
                 </div>
                 
                 <div className="p-6 md:p-8 flex flex-col h-full bg-transparent">
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-100 group-hover:translate-x-1 transition-transform tracking-tight">
                         {project.title}
                       </h3>
                       <span className="text-[10px] border border-zinc-700 text-zinc-400 px-2 py-0.5 rounded tracking-widest font-bold uppercase bg-zinc-900/50">Public</span>
                    </div>
                    
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-sans font-medium">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto flex flex-col gap-6">
                       <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[11px] text-zinc-400 group-hover:text-zinc-300 transition-colors uppercase tracking-[0.1em] font-bold font-mono bg-zinc-800/50 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                       </div>
                       
                       <div className="flex gap-4">
                          {project.github && (
                            <Link 
                              href={project.github}
                              className="flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-600 text-[10px] font-bold uppercase tracking-widest transition-all"
                            >
                              <Terminal size={12} />
                              SOURCE
                            </Link>
                          )}
                          {project.link !== "#" && (
                            <Link 
                              href={project.link || "#"}
                              className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-[#0A0A0B] hover:bg-white text-[10px] font-bold uppercase tracking-widest transition-all shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                              VISIT LIVE
                            </Link>
                          )}
                       </div>
                    </div>
                 </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </main>

      <footer className="w-full border-t border-solid border-white/10 py-6 px-6 md:py-8 md:px-12 mt-auto relative overflow-hidden group/footer">
         {/* Backdrop Watermark */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45px] sm:text-[65px] md:text-[100px] lg:text-[130px] font-serif font-black text-white/[0.02] pointer-events-none select-none group-hover/footer:text-white/[0.04] transition-colors duration-1000 tracking-tighter z-0 whitespace-nowrap">
            ROHIT SHIPS
         </div>

         <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-2">
               <span className="text-zinc-400 group-hover/footer:text-white transition-colors">ROHIT BHARDWAJ</span>
               <span className="opacity-30 hidden md:inline">/</span>
               <span>DEVELOPER PORTFOLIO © {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6">
               <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors underline-offset-4 hover:underline">TWITTER</a>
               <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors underline-offset-4 hover:underline">LINKEDIN</a>
               <a href="/Rohit_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors underline-offset-4 hover:underline text-zinc-400">RESUME</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
