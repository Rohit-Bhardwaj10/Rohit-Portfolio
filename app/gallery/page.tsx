"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

const allPhotos = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpeg",
  "/image6.jpeg",
  "/image7.jpeg",
  "/image8.jpeg",
  "/image9.jpeg",
  "/image10.jpeg",
  "/image11.jpeg",
  "/image12.jpeg",
  "/image13.jpeg",
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 selection:bg-zinc-100 selection:text-[#0A0A0B] flex flex-col">
      
      {/* Navbar Brutalist */}
      <nav className="fixed top-0 w-full z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto flex h-20 items-center justify-between border-b border-zinc-800/50 border-solid">
          <Link 
            href="/" 
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-100 font-bold hover:text-zinc-400 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Return Home
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Photography Archival</span>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="pt-40 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-zinc-800 relative w-full overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-zinc-100 leading-[1.1] uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Visual <br className="hidden md:block"/> Narratives<span className="text-zinc-500">.</span>
        </motion.h1>
         <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed font-sans opacity-90 border-l-2 border-zinc-800 pl-6"
        >
          A comprehensive collection of moments frozen in time. Exploring dramatic lighting, 
          authentic composition, and human emotion through the medium of photography.
        </motion.p>
      </div>

      {/* Brutalist Masonry Gallery Engine */}
      <div className="flex-grow px-6 md:px-12 py-16 max-w-[1600px] mx-auto w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {allPhotos.map((src, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 60, filter: "blur(15px)", scale: 0.95 }}
               whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
               transition={{ duration: 1.2, delay: (i % 4) * 0.15, ease: [0.16, 1, 0.3, 1] }}
               viewport={{ once: true, margin: "-50px" }}
               className="relative break-inside-avoid group cursor-zoom-in"
               onClick={() => setSelectedPhoto(src)}
             >
                <div className="relative w-full border border-zinc-800 overflow-hidden bg-zinc-900">
                   <img 
                      src={src} 
                      alt={`Captured Moment ${i}`} 
                      className="w-full h-auto object-cover filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      loading="lazy" 
                   />
                   
                   {/* Overlay Border & Background on Hover */}
                   <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-white/5 border-4 border-transparent group-hover:border-zinc-800/50 transition-all duration-500 pointer-events-none" />
                   
                   {/* Elegant Brutalist Tag */}
                   <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="bg-[#0A0A0B] px-3 py-1.5 border border-zinc-800 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-100 font-bold">
                          Fig {String(i + 1).padStart(2, '0')}
                        </span>
                     </div>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Global Footer */}
      <footer className="bg-[#0A0A0B] border-t border-solid border-white/10 text-zinc-400 py-6 px-6 md:py-8 md:px-12 w-full mt-auto relative overflow-hidden group/footer">
        {/* Backdrop Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45px] sm:text-[65px] md:text-[100px] lg:text-[130px] font-serif font-black text-white/[0.02] pointer-events-none select-none group-hover/footer:text-white/[0.04] transition-colors duration-1000 tracking-tighter z-0 whitespace-nowrap">
          ROHIT SHIPS
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1600px] mx-auto w-full relative z-10">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-zinc-100 mb-2 group-hover/footer:text-white transition-colors">ROHIT BHARDWAJ</h2>
            <p className="text-xs font-mono text-zinc-500">© {new Date().getFullYear()} . All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs font-mono uppercase tracking-widest flex-wrap justify-center">
            <a href="/Rohit_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Resume</a>
            <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">LinkedIn</a>
            <a href="https://github.com/Rohit-Bhardwaj10/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Github</a>
          </div>
        </div>
      </footer>

      {/* Brutalist Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0B]/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-zinc-100 hover:text-[#0A0A0B] bg-zinc-900 hover:bg-zinc-100 border border-zinc-700 hover:border-zinc-100 p-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none translate-x-0 hover:translate-x-[4px] hover:translate-y-[4px] transition-all z-[110]"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={24} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-[85vh] md:h-[90vh] flex items-center justify-center p-3 md:p-4 bg-zinc-950 border border-zinc-800 shadow-[16px_16px_0px_0px_rgba(255,255,255,0.05)]"
              onClick={(e) => e.stopPropagation()}
            >
               <div className="relative w-full h-full border border-zinc-900 bg-zinc-950 relative">
                  <Image
                    src={selectedPhoto}
                    alt="Selected Highlight Photography"
                    fill
                    className="object-contain"
                    priority
                  />
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
