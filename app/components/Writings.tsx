"use client";

import Link from "next/link";
import { ScrollFadeIn } from "./animations";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Writings() {
  return (
    <div className="flex flex-col relative z-10 w-full overflow-y-auto overflow-x-hidden h-full">
      <div className="px-4 md:px-6 h-[60px] md:h-[72px] flex justify-between items-center bg-zinc-950/40 backdrop-blur-md relative z-20 border-b border-solid border-white/10 shrink-0">
        <h2 className="text-lg md:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
          Recent Writings
        </h2>
        <span className="font-sans text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em] mb-1">
          Thoughts & Insights
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 h-full w-full">
        <ScrollFadeIn
          delay={0.1}
          duration={0.5}
          direction="left"
          className="h-full border-b md:border-b-0 md:border-r border-white/10"
        >
          <div className="p-4 md:p-5 flex flex-col h-full group/post hover:bg-white/[0.02] transition-colors relative">
            <span className="font-sans font-bold text-[8px] text-zinc-500 uppercase tracking-[0.3em] mb-3 bg-white/5 border border-white/5 px-2 py-0.5 rounded-[2px] w-max">
              Oct 22, 2025
            </span>
            <Link
              href="https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg md:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 mb-2 group-hover/post:from-white group-hover/post:to-zinc-300 transition-all duration-300 cursor-pointer w-fit line-clamp-2 leading-snug">
                The Centralized Core of Decentralization
              </h3>
            </Link>
            <p className="text-zinc-400/80 text-xs leading-relaxed mb-4 font-light">
              Rethinking Web3's Infrastructure. Examining the reliance of
              decentralized networks on centralized cloud providers and
              efficient infrastructure patterns.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[8px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-300 border border-white/10 bg-white/5 px-2 py-0.5 rounded-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                #Web3
              </span>
            </div>
            <div className="mt-auto pt-3 border-t border-white/10 group-hover/post:border-white/20 flex items-center gap-6 transition-colors w-full">
              <Link
                href="https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-100 transition-colors group/link"
              >
                <BookOpen size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                <span className="border-b border-transparent group-hover/link:border-zinc-300 transition-all pb-0.5 mt-0.5">Read Article</span>
                <ArrowUpRight size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn
          delay={0.2}
          duration={0.5}
          direction="right"
          className="h-full border-b md:border-b-0 border-white/10 md:border-none"
        >
          <div className="p-4 md:p-5 flex flex-col h-full group/post hover:bg-white/[0.02] transition-colors relative">
            <span className="font-sans font-bold text-[8px] text-zinc-500 uppercase tracking-[0.3em] mb-3 bg-white/5 border border-white/5 px-2 py-0.5 rounded-[2px] w-max">
              Jun 9, 2025
            </span>
            <Link
              href="https://dev.to/rohit_bhardwaj_94db62db7b/a-developer-s-dilemma-between-perfection-and-shipping-21h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg md:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 mb-2 group-hover/post:from-white group-hover/post:to-zinc-300 transition-all duration-300 cursor-pointer w-fit line-clamp-2 leading-snug">
                A Developer's Dilemma
              </h3>
            </Link>
            <p className="text-zinc-400/80 text-xs leading-relaxed mb-4 font-light">
              Between Perfection and Shipping. Exploring the balance between writing perfect code and actually getting products out the door.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[8px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-300 border border-white/10 bg-white/5 px-2 py-0.5 rounded-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                #Thoughts
              </span>
            </div>
            <div className="mt-auto pt-3 border-t border-white/10 group-hover/post:border-white/20 flex items-center gap-6 transition-colors w-full">
              <Link
                href="https://dev.to/rohit_bhardwaj_94db62db7b/a-developer-s-dilemma-between-perfection-and-shipping-21h"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-100 transition-colors group/link"
              >
                <BookOpen size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                <span className="border-b border-transparent group-hover/link:border-zinc-300 transition-all pb-0.5 mt-0.5">Read Article</span>
                <ArrowUpRight size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
