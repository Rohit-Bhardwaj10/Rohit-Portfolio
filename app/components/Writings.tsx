"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

const writings = [
  {
    date: "Oct 22, 2025",
    title: "The Centralized Core of Decentralization",
    description: "Examining the reliance of decentralized networks on centralized cloud providers and efficient infrastructure patterns.",
    tag: "#Web3",
    href: "https://dev.to/rohit_bhardwaj_94db62db7b/the-centralized-core-of-decentralization-rethinking-web3s-infrastructure-40da",
    readTime: "6 min read",
  },
  {
    date: "Jun 9, 2025",
    title: "A Developer's Dilemma",
    description: "Between Perfection and Shipping. Exploring the balance between writing perfect code and actually getting products out the door.",
    tag: "#Thoughts",
    href: "https://dev.to/rohit_bhardwaj_94db62db7b/a-developer-s-dilemma-between-perfection-and-shipping-21h",
    readTime: "5 min read",
  },
];

export default function Writings() {
  return (
    <div className="flex flex-col relative z-10 w-full overflow-y-auto overflow-x-hidden h-full">
      <div className="px-4 md:px-6 h-[60px] md:h-[72px] border-b border-solid border-white/10 flex justify-between items-center bg-zinc-950/40 backdrop-blur-md sticky top-0 z-20 w-full shrink-0">
        <h2 className="text-lg md:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
          Recent Writings
        </h2>
        <span className="font-sans text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Thoughts &amp; Insights</span>
      </div>

      <div className="p-4 md:p-6 space-y-6 md:space-y-8 pr-2 md:pr-4">
        {writings.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 }}
            className="group/item relative"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <Link href={post.href} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-tighter group-hover/item:text-white transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="font-serif italic text-sm text-zinc-400">Essay / Blog</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-[11px] text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">{post.date}</span>
                <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{post.readTime}</span>
              </div>
            </div>
            <div className="pl-6 border-l border-solid border-white/10 group-hover/item:border-white/30 transition-all duration-500 relative">
              <motion.div
                className="absolute top-0 -left-[1px] w-[2px] h-0 bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "circOut", delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              />
              <p className="text-zinc-400 leading-relaxed text-xs md:text-sm font-medium mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-bold font-sans uppercase tracking-[0.2em] text-zinc-400 border border-white/10 bg-white/5 px-2 py-0.5 rounded-[2px] group-hover/item:text-zinc-100 group-hover/item:border-white/20 transition-all duration-500">
                  {post.tag}
                </span>
                <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-100 transition-colors group/link"
                >
                  <BookOpen size={11} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                  <span className="border-b border-transparent group-hover/link:border-zinc-300 transition-all pb-0.5 mt-0.5">Read</span>
                  <ArrowUpRight size={11} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
