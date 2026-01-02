import { Terminal, Code2, Cpu, Globe } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 md:px-8 md:py-6 border-b border-zinc-300 border-dashed">
         <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Professional Experience</h2>
      </div>

      {/* Content */}
      <div className="px-6 py-6 md:px-8 md:py-8 flex flex-col gap-10">
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

       {/* Education Section */}
       <div className="mt-auto">
          <div className="px-6 py-4 md:px-8 md:py-6 border-t border-b border-zinc-300 border-dashed">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Education</h2>
          </div>
          <div className="px-6 py-6 md:px-8 md:py-8">
             <h3 className="font-serif font-bold text-lg mb-1">Bachelor of Technology</h3>
             <p className="text-zinc-500 mb-1">Computer Science</p>
             <p className="font-mono text-xs text-zinc-400">2021 - 2025</p>
          </div>
       </div>
    </div>
  );
}


