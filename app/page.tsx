import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";


export default function Home() {
  const projects = [
    {
      title: "Kisan Mitra",
      description: "An AI-powered agricultural advisory platform helping farmers with crop disease detection and market prices.",
      tags: ["Python", "Flask", "TensorFlow", "React"],
      year: "2024",
      link: "#",
      github: "#"
    },
    {
      title: "Crypt",
      description: "Secure file encryption and sharing platform using AES-256 encryption algorithm.",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      title: "Mindful",
      description: "A mental health tracking application with daily journals and mood analytics.",
      tags: ["React Native", "Firebase"],
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      title: "Spartan",
      description: "Fitness tracking dashboard for high-performance athletes.",
      tags: ["Vue.js", "D3.js", "Express"],
      year: "2022",
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-zinc-900 bg-paper-pattern">
      <Header />
      
      <main>
        <Hero />

        {/* Row 1: Featured Works & Professional Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Main Content Area (Projects) */}
          <div className="lg:col-span-8 lg:border-r border-b border-zinc-300 border-dashed">
             {/* Section Header */}
             <div className="px-6 py-3 md:px-8 md:py-4 border-b border-zinc-300 border-dashed flex justify-between items-end">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Featured Works</h2>
                <span className="font-mono text-xs text-zinc-500 mb-1 uppercase tracking-widest">Selected Projects • 2022-2024</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                  <div key={index} className={`
                    ${index % 2 === 0 ? 'md:border-r border-dashed' : ''} 
                    border-b border-zinc-300 border-dashed last:border-b-0
                  `}>
                    <ProjectCard {...project} />
                  </div>
                ))}
             </div>
          </div>

          {/* Sidebar Area (Experience) */}
          <div className="lg:col-span-4 border-b border-zinc-300 border-dashed flex flex-col">
              <div className="px-6 py-3 md:px-8 md:py-4 border-b border-zinc-300 border-dashed">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Professional Experience</h2>
              </div>
              <div className="px-6 py-4 md:px-8 md:py-6 flex flex-col gap-10">
                {/* Experience Item 1 */}
                <div>
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-bold uppercase tracking-wider text-zinc-900">Excelerate</h3>
                      <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Nov 2024 - Nov 2024</span>
                   </div>
                   <p className="font-serif italic text-zinc-500 mb-4">Data Engineer Early Intern</p>
                   <p className="text-zinc-600 leading-relaxed text-sm">
                     Assisted in building data pipelines and optimizing data flow. Collaborated with the team to improve data quality and accessibility.
                   </p>
                </div>
                {/* Experience Item 2 */}
                <div>
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-bold uppercase tracking-wider text-zinc-900">Headstarter AI</h3>
                      <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Aug 2024 - Sep 2024</span>
                   </div>
                   <p className="font-serif italic text-zinc-500 mb-4">Software Engineer Intern</p>
                   <p className="text-zinc-600 leading-relaxed text-sm">
                     Developed features for the AI-powered platform using Next.js. Implemented responsive UI components and integrated APIs.
                   </p>
                </div>
              </div>
          </div>
        </div>

        {/* Row 2: Recent Writings & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
           {/* Recent Writings (Col 8) */}
           <div className="lg:col-span-8 lg:border-r border-zinc-300 border-dashed">
             {/* Section Header */}
             <div className="px-6 py-2 md:px-8 md:py-3 border-b border-zinc-300 border-dashed flex justify-between items-end">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Recent Writings</h2>
                <span className="font-mono text-xs text-zinc-500 mb-1 uppercase tracking-widest">Thoughts & Insights</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2">
                 <div className="md:border-r border-b border-zinc-300 border-dashed p-6 md:p-8 flex flex-col h-full">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-3">Jan 12, 2025</span>
                    <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3 hover:underline">Understanding Distributed Systems</h3>
                    <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
                      A comprehensive guide to building resilient and scalable applications in the modern cloud era. Strategies for consistency and availability.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        <span className="text-zinc-400 text-[10px] font-mono uppercase tracking-wider">#Architecture</span>
                    </div>
                 </div>

                 <div className="border-b border-zinc-300 border-dashed p-6 md:p-8 flex flex-col h-full">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-3">Dec 28, 2024</span>
                    <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3 hover:underline">The Future of React</h3>
                    <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
                      Exploring Server Components, Suspense, and the evolution of frontend patterns. How these changes impact developer experience.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        <span className="text-zinc-400 text-[10px] font-mono uppercase tracking-wider">#Frontend</span>
                    </div>
                 </div>
             </div>
           </div>

           {/* Education (Col 4) */}
           <div className="lg:col-span-4 flex flex-col">
              <div className="px-6 py-2 md:px-8 md:py-3 border-b border-zinc-300 border-dashed">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Education</h2>
              </div>
              <div className="px-6 py-4 md:px-8 md:py-6">
                 <h3 className="font-serif font-bold text-lg mb-1">Bachelor of Technology</h3>
                 <p className="text-zinc-500 mb-1">Computer Science</p>
                 <p className="font-mono text-xs text-zinc-400">2021 - 2025</p>
              </div>
           </div>
        </div>
      </main>

      <footer className="border-t border-zinc-900 bg-zinc-900 text-zinc-400 p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-zinc-100 mb-2">SHORYA BANSAL</h2>
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
