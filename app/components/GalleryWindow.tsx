"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/image1.jpeg", "/image2.jpeg", "/image3.jpeg", "/image4.jpeg",
  "/image5.jpeg", "/image6.jpeg", "/image7.jpeg", "/image8.jpeg",
  "/image9.jpeg", "/image10.jpeg", "/image11.jpeg", "/image12.jpeg",
  "/image13.jpeg",
];

export default function GalleryWindow() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected((s) => (s !== null ? (s - 1 + photos.length) % photos.length : null));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % photos.length : null));

  return (
    <div className="h-full flex flex-col bg-[#0c0c0c] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">Visual Archive</h2>
          <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider mt-0.5">{photos.length} captures</p>
        </div>
        <span className="font-mono text-[9px] text-zinc-700 uppercase tracking-[0.25em]">Photography</span>
      </div>

      {/* Masonry Grid */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
        <div className="columns-2 sm:columns-3 gap-3 space-y-3">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative break-inside-avoid cursor-zoom-in group overflow-hidden rounded-lg border border-white/5 hover:border-white/15 transition-colors"
              onClick={() => setSelected(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              {/* Fig tag */}
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest bg-black/80 text-zinc-300 px-2 py-0.5 rounded-sm">
                  Fig {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/20 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/20 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-[85%] max-h-[85%] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[selected]}
                alt={`Photo ${selected + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                {selected + 1} / {photos.length}
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/20 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
