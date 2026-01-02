import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";


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

        {/* Row 1: Featured Works & Professional Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Main Content Area (Projects) */}
          <div className="lg:col-span-8 stitch-b lg:stitch-br">
             {/* Section Header */}
             <div className="px-6 py-3 md:px-8 md:py-4 stitch-b flex justify-between items-end">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Featured Works</h2>
                <span className="font-mono text-xs text-zinc-700 mb-1 uppercase tracking-widest">Selected Projects • 2022-2024</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                  <div key={index} className={`
                    ${index % 2 === 0 ? 'md:stitch-br' : ''} 
                    stitch-b last:[background-image:none]
                  `}>
                    <ProjectCard {...project} />
                  </div>
                ))}
             </div>
          </div>

          {/* Sidebar Area (Experience) */}
          <div className="lg:col-span-4 stitch-b flex flex-col">
              <div className="px-6 py-3 md:px-8 md:py-4 stitch-b">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Professional Experience</h2>
              </div>
              <div className="px-6 py-4 md:px-8 md:py-6 flex flex-col gap-10">
                {/* Experience Item 1 */}
                <div>
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-bold uppercase tracking-wider text-zinc-900">BarterNow</h3>
                      <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">2024 - Present</span>
                   </div>
                   <p className="font-serif italic text-zinc-700 mb-4">Backend Developer Intern</p>
                   <p className="text-zinc-600 leading-relaxed text-sm">
                     Working on scalable backend architecture, optimizing database performance, and building robust API services.
                   </p>
                </div>
                {/* Experience Item 2 */}
                <div>
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-bold uppercase tracking-wider text-zinc-900">Freelance</h3>
                      <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">2023 - Present</span>
                   </div>
                   <p className="font-serif italic text-zinc-700 mb-4">Full Stack Developer</p>
                   <p className="text-zinc-600 leading-relaxed text-sm">
                     Developed multiple end-to-end production-grade systems and developer tools, focusing on performance, scalability, and clean code architecture.
                   </p>
                </div>
              </div>
          </div>
        </div>

        {/* Row 2: Recent Writings & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
           {/* Recent Writings (Col 8) */}
           <div className="lg:col-span-8 lg:stitch-r">
             {/* Section Header */}
             <div className="px-6 py-2 md:px-8 md:py-3 stitch-b flex justify-between items-end">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Recent Writings</h2>
                <span className="font-mono text-xs text-zinc-700 mb-1 uppercase tracking-widest">Thoughts & Insights</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2">
                 <div className="stitch-b md:stitch-r p-6 md:p-8 flex flex-col h-full">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Oct 22, 2025</span>
                    <Link href="https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da" target="_blank" rel="noopener noreferrer">
                      <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3 hover:underline cursor-pointer">The Centralized Core of Decentralization</h3>
                    </Link>
                    <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
                      Rethinking Web3’s Infrastructure. Examining the reliance of decentralized networks on centralized cloud providers and efficient infrastructure patterns.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider">#Web3</span>
                    </div>
                 </div>

                 <div className="p-6 md:p-8 flex flex-col h-full">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Jun 9, 2025</span>
                    <Link href="https://medium.com/@beastslayer23456/backend-scaling-strategies-for-high-traffic-systems-16c8d3ffccd2" target="_blank" rel="noopener noreferrer">
                      <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3 hover:underline cursor-pointer">Backend Scaling Strategies</h3>
                    </Link>
                    <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
                      A deep dive into load balancing, database sharding, and caching strategies for building high-traffic, resilient systems.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider">#SystemDesign</span>
                    </div>
                 </div>
             </div>
           </div>

           {/* Education (Col 4) */}
           <div className="lg:col-span-4 flex flex-col">
              <div className="px-6 py-2 md:px-8 md:py-3 stitch-b">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Education</h2>
              </div>
              <div className="px-6 py-4 md:px-8 md:py-6">
                 <h3 className="font-serif font-bold text-lg mb-1">ABES Engineering College, AKTU</h3>
                 <p className="text-zinc-700 mb-1">Bachelor in Computer Science and Engineering</p>
                 <p className="font-mono text-xs text-zinc-600">Sept 2023 - May 2027</p>
              </div>
           </div>
        </div>
      </main>

      <footer className="bg-zinc-900 text-zinc-400 p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-zinc-100 mb-2">ROHIT BHARDWAJ</h2>
            <p className="text-xs font-mono">© 2025 The Dev Chronicles. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
