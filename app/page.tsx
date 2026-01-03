import Header from "./components/Header";
import Hero from "./components/Hero";
import AnimatedSections from "./components/AnimatedSections";
import TechStack from "./components/TechStack";

export default function Home() {
  const projects = [
    {
      title: "Flashmon",
      description: "A lightweight CLI tool for auto-reloading Node.js applications on file changes, similar to Nodemon but with improved performance and cleaner logging.",
      tags: ["TypeScript", "Node.js", "Commander.js", "Chokidar"],
      year: "2024",
      link: "#",
      github: "https://github.com/Rohit-Bhardwaj10/flashmon"
    },
    {
      title: "DePIN Uptime Monitor",
      description: "A monitoring and rewards system for decentralized validators. Tracks uptime, logs performance, and automates payouts via on-chain execution.",
      tags: ["Next.js", "PostgreSQL", "Solana", "Docker"],
      year: "2024",
      link: "#",
      github: "https://github.com/Rohit-Bhardwaj10/stay-up"
    },
    {
      title: "Events Flow",
      description: "A full-stack event management platform for creating, listing, and registering for events with integrated online payments via Razorpay.",
      tags: ["TypeScript", "Next.js", "Razorpay"],
      year: "2024",
      link: "#",
      github: "https://github.com/Rohit-Bhardwaj10/EventFlow"
    },
    {
      title: "DHiree",
      description: "Decentralized freelance platform connecting developers with companies. Ensures transparent job postings and secure payments via Ethereum smart contracts.",
      tags: ["React", "Solidity", "Hardhat", "IPFS"],
      year: "2024",
      link: "#",
      github: "https://github.com/Rohit-Bhardwaj10/D-Hiree"
    }
  ];

  return (
    <div className="min-h-screen text-zinc-900 bg-[#C4BCB2] relative">
      {/* Grain texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          zIndex: 9999,
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.5) 0.5px, transparent 0.5px)',
          backgroundSize: '2px 2px',
          opacity: 0.15,
          mixBlendMode: 'multiply'
        }}
      />
      <Header />
      
      <main>
        <Hero />
        <TechStack />
        <AnimatedSections projects={projects} />
      </main>

      <footer className="bg-zinc-900 text-zinc-400 p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-zinc-100 mb-2">ROHIT BHARDWAJ</h2>
            <p className="text-xs font-mono">© 2025 The Dev Chronicles. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
            <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Rohit-Bhardwaj10/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
