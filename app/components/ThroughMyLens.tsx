"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./animations";

const previewPhotos = [
  "/image10.jpeg",
  "/image1.jpeg",
  "/image2.jpeg",
  "/image6.jpeg",
];

export default function ThroughMyLens() {
  return (
    <section className="w-full border-y border-solid border-white/10 lg:border-r bg-gradient-to-b from-black/20 via-black/40 to-black/20 py-16 relative overflow-hidden backdrop-blur-md">
      
      {/* Aesthetic Background Glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none" />

      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12 w-full">
           
           <div className="flex flex-col max-w-lg">
             <div className="flex items-center gap-4 mb-4">
                <span className="w-2 h-2 bg-gradient-to-br from-zinc-200 to-zinc-500 rounded-full inline-block shadow-[0_0_10px_rgba(255,255,255,0.3)]"></span>
                <h2 className="font-sans text-[11px] uppercase tracking-[0.3em] text-zinc-400 font-semibold">
                  Side Quest
                </h2>
             </div>
             
             <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-500 mb-5 font-bold tracking-tight">
               Through My Lens
             </h3>
             <p className="font-sans text-sm md:text-base text-zinc-400/80 leading-relaxed mb-8 font-light max-w-md">
               A personal archive of moments frozen in time. Exploring dramatic lighting, composition, and human emotion away from the keyboard.
             </p>
             <MagneticButton strength={0.25}>
               <Link 
                 href="/gallery"
                 className="group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-zinc-300 font-bold border border-white/10 bg-white/5 px-8 py-4 rounded-sm hover:bg-white/10 hover:text-white hover:-translate-y-1 hover:border-white/20 transition-all duration-300 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)] w-max"
               >
                 View Photography Archive
                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </MagneticButton>
           </div>

           <div className="flex gap-4 md:gap-6 w-full lg:w-auto overflow-x-auto pb-6 lg:pb-0 scrollbar-hide snap-x object-contain relative perspective">
             {previewPhotos.map((src, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 30, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="shrink-0 relative w-[140px] h-[190px] md:w-[180px] md:h-[240px] border border-white/10 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.8)] bg-zinc-950/80 p-2 group transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:border-white/20"
                >
                   <div className="relative w-full h-full border border-white/5 overflow-hidden rounded-sm bg-zinc-900">
                     <Image 
                       src={src} 
                       alt={`Preview ${i}`} 
                       fill
                       className="object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
                       sizes="(max-width: 768px) 140px, 180px"
                     />
                   </div>
                </motion.div>
             ))}
           </div>

        </div>
      </div>
    </section>
  );
}
