import Header from "./components/Header";
import Hero from "./components/Hero";
import AnimatedSections from "./components/AnimatedSections";
import TechStack from "./components/TechStack";
import { projectsData } from "./data/projects";

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured);

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
        <AnimatedSections projects={featuredProjects} />
      </main>

      <footer className="bg-zinc-950 text-zinc-400 p-8 md:p-12 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-zinc-100 mb-2">ROHIT BHARDWAJ</h2>
            <p className="text-xs font-mono">© 2025 . All rights reserved.</p>
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
