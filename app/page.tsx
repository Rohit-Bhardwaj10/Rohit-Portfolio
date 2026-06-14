import Header from "./components/Header";
import Hero from "./components/Hero";
import AnimatedSections from "./components/AnimatedSections";
import TechStack from "./components/TechStack";
import GithubGraph from "./components/GithubGraph";
import { projectsData } from "./data/projects";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground bg-background relative overflow-x-hidden w-full">
      {/* Structural grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9999,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.15,
          mixBlendMode: 'screen'
        }}
      />
      <Header />

      <main>
        <Hero />
        <TechStack />
        <GithubGraph />
        <AnimatedSections projects={projectsData} />
      </main>

      <footer className="bg-zinc-950 text-zinc-400 py-6 px-6 md:py-8 md:px-12 border-t border-solid border-white/10 relative overflow-hidden group/footer mt-auto">
        {/* Backdrop Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45px] sm:text-[65px] md:text-[100px] lg:text-[130px] font-serif font-black text-white/[0.02] pointer-events-none select-none group-hover/footer:text-white/[0.04] transition-colors duration-1000 tracking-tighter z-0 whitespace-nowrap">
          ROHIT SHIPS
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 w-full">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-zinc-100 mb-2 group-hover/footer:text-white transition-colors">ROHIT BHARDWAJ</h2>
            <p className="text-xs font-mono">© {new Date().getFullYear()} . All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
            <a href="/Rohit_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
            <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Rohit-Bhardwaj10/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
