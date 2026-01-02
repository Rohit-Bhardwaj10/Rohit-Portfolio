import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:border-b border-zinc-300 border-dashed">
      {/* Left Column: Intro */}
      <div className="order-2 lg:order-1 p-6 md:p-8 lg:border-r border-b lg:border-b-0 border-zinc-300 border-dashed flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight mb-4 text-zinc-900">
            MEET YOUR <br/>
            NEW FAVOURITE <br/>
            DEVELOPER
          </h1>
          
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-lg">
            I specialize in architecting reliable and scalable backend systems, while building interactive frontends using React and Next.js. My focus is on creating end-to-end digital experiences that are robust, performant, and timeless.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-zinc-900 text-zinc-50 px-8 py-4 text-sm font-bold uppercase tracking-widest shadow-[5px_5px_0px_0px_#71717a] hover:shadow-[2px_2px_0px_0px_#71717a] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border border-zinc-900">
              Read Resume
            </button>
            <button className="border border-zinc-900 bg-transparent text-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-widest shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all hover:bg-zinc-50">
              Contact
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900/20 border-dashed grid grid-cols-2 md:grid-cols-3 gap-8">
             <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">Expertise</h4>
                <ul className="space-y-2 text-sm font-medium">
                   <li className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                     Frontend Architecture
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                     Scalable Systems
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                     Reliable Architecture
                   </li>
                </ul>
             </div>
             <div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">Focus</h4>
                 <ul className="space-y-2 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                      Performance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                      Reliability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                      Interactions
                    </li>
                 </ul>
             </div>
             <div>
                <div className="bg-zinc-200/50 p-4 border-l-2 border-zinc-900">
                    <p className="font-serif italic text-sm leading-relaxed text-zinc-700">
                      "Good design is as little design as possible."
                    </p>
                    <p className="text-[10px] font-mono text-zinc-500 mt-2 uppercase">— Dieter Rams</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image & Connect */}
      <div className="order-1 lg:order-2 p-6 md:p-8 flex flex-col items-center justify-center">
        {/* Image Card */}
        <div className="w-full max-w-md">
          <div className="border border-zinc-900 bg-white p-2 md:p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4">
            <div className="relative aspect-square w-full border border-zinc-200 bg-zinc-50 overflow-hidden">
               <Image 
                 src="/image.png" 
                 alt="The Developer"
                 fill
                 className="object-cover object-top filter grayscale contrast-125"
               />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Fig A. The Developer
            </span>
          </div>

          {/* Divider */}
          <div className="w-full h-px border-t border-zinc-300 border-dashed mb-8"></div>

          {/* Connect Section */}
          <div className="w-full grid grid-cols-2 gap-8">
            <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">Connect</h3>
                <div className="flex flex-col gap-4">
                    <a href="#" className="flex items-center gap-3 group">
                        <Mail className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900" />
                        <span className="font-mono text-sm uppercase tracking-wider text-zinc-700 group-hover:underline decoration-1 underline-offset-4">Email</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 group">
                        <Linkedin className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900" />
                        <span className="font-mono text-sm uppercase tracking-wider text-zinc-700 group-hover:underline decoration-1 underline-offset-4">LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 group">
                        <Twitter className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900" />
                        <span className="font-mono text-sm uppercase tracking-wider text-zinc-700 group-hover:underline decoration-1 underline-offset-4">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 group">
                        <Github className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900" />
                        <span className="font-mono text-sm uppercase tracking-wider text-zinc-700 group-hover:underline decoration-1 underline-offset-4">GitHub</span>
                    </a>
                </div>
            </div>

            {/* Toolkit Section */}
            <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">Toolkit</h3>
                <div className="flex flex-col gap-4">
                     <span className="font-mono text-sm uppercase tracking-wider text-zinc-700">Next.Js <span className="text-zinc-400">19</span></span>
                     <span className="font-mono text-sm uppercase tracking-wider text-zinc-700">Express.Js <span className="text-zinc-400">15</span></span>
                     <span className="font-mono text-sm uppercase tracking-wider text-zinc-700">TypeScript</span>
                     <span className="font-mono text-sm uppercase tracking-wider text-zinc-700">Tailwind <span className="text-zinc-400">4.0</span></span>
                </div>
            </div>
          </div>
          
          <div className="w-full mt-12 pt-8 border-t border-zinc-300 border-dashed grid grid-cols-2 gap-8">
             <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">Location</h3>
                <p className="font-serif text-lg">Remotely Available</p>
             </div>
             <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">Status</h3>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="font-serif text-lg leading-none">Available</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
