"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock, ArrowUpRight } from "lucide-react";

// In a real app, this data might come from MDX files or a CMS.
const writings = [
  {
    id: "centralized-core-decentralization",
    date: "Oct 22, 2025",
    title: "The Centralized Core of Decentralization",
    description: "Examining the reliance of decentralized networks on centralized cloud providers and efficient infrastructure patterns.",
    tag: "#Web3",
    readTime: "6 min read",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-zinc-300 leading-relaxed font-light">
          Examining the reliance of decentralized networks on centralized cloud providers and efficient infrastructure patterns.
        </p>
        <p>
          The promise of Web3 has always been decentralization. A network owned by its users, free from the monopolistic control of Big Tech. However, if you peek beneath the hood of most major blockchain nodes, indexers, and RPC providers, you'll find a startling reality: the vast majority of "decentralized" infrastructure is hosted on AWS, Google Cloud, and Azure.
        </p>
        <h3 className="text-2xl font-bold text-zinc-100 mt-12 mb-4">The Infrastructure Paradox</h3>
        <p>
          When a centralized cloud region goes down, it often takes a significant portion of Web3 with it. This paradox—building censorship-resistant protocols on top of highly centralized, censorable infrastructure—is one of the most pressing challenges in the space today.
        </p>
        <p>
          Running a high-performance blockchain node requires substantial compute, memory, and bandwidth. For most operators, spinning up an EC2 instance is vastly easier and more reliable than racking physical servers in a colocation facility.
        </p>
        <blockquote className="border-l-2 border-emerald-500 pl-6 py-2 my-8 italic text-zinc-400 bg-emerald-500/5 rounded-r-lg">
          "We are building unbreakable protocols on top of breakable infrastructure."
        </blockquote>
        <h3 className="text-2xl font-bold text-zinc-100 mt-12 mb-4">Moving Towards True Decentralization</h3>
        <p>
          To truly realize the vision of Web3, we need to push for bare-metal adoption, incentivize home staking, and develop more efficient consensus clients that can run on consumer hardware. Only then can we remove the centralized core of our decentralized future.
        </p>
      </div>
    )
  },
  {
    id: "developers-dilemma",
    date: "Jun 9, 2025",
    title: "A Developer's Dilemma",
    description: "Between Perfection and Shipping. Exploring the balance between writing perfect code and actually getting products out the door.",
    tag: "#Thoughts",
    readTime: "5 min read",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-zinc-300 leading-relaxed font-light">
          Between Perfection and Shipping. Exploring the balance between writing perfect code and actually getting products out the door.
        </p>
        <p>
          Every engineer faces it: the quiet, gnawing voice that says, "This could be cleaner. This could be more abstracted. We should refactor this before it goes live." It's the developer's dilemma—the eternal tug-of-war between the desire for technical perfection and the business necessity of shipping.
        </p>
        <h3 className="text-2xl font-bold text-zinc-100 mt-12 mb-4">The Cost of Perfection</h3>
        <p>
          Perfect code is a myth. By the time you've written the "perfect" abstraction, the requirements have likely changed. The time spent polishing a feature that no one uses is time stolen from building a feature that could have changed the trajectory of the product.
        </p>
        <p>
          I've seen startups fail not because their code was bad, but because their code was too good. They spent months building highly scalable, microservice-based architectures for a product that hadn't even found product-market fit yet.
        </p>
        <h3 className="text-2xl font-bold text-zinc-100 mt-12 mb-4">Shipping is a Feature</h3>
        <p>
          Shipping forces reality upon your code. It exposes it to real users, real edge cases, and real latency. The best engineers know when to cut corners safely and when to incur technical debt intentionally.
        </p>
        <p>
          Write code that is easy to delete, not easy to extend. Ship the feature. See if people care. If they do, you'll have the revenue and the mandate to rewrite it properly. If they don't, you just saved yourself months of unnecessary engineering.
        </p>
      </div>
    )
  },
];

export default function BlogsPage() {
  const [selectedPostId, setSelectedPostId] = useState<string>(writings[0].id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activePost = writings.find(p => p.id === selectedPostId) || writings[0];

  if (!mounted) return null;

  return (
    <div className="h-screen w-full bg-[#0A0A0B] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col overflow-hidden">
      
      {/* Top Navbar */}
      <nav className="shrink-0 w-full z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800/60">
        <div className="px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Journal
          </span>
          <div className="w-16" /> {/* Spacer to keep Journal centered */}
        </div>
      </nav>

      {/* Main Split Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar - Post List */}
        <div className="w-full md:w-[380px] lg:w-[420px] shrink-0 border-r border-zinc-800/60 bg-[#0A0A0B]/50 flex flex-col h-full z-10">
          <div className="p-6 border-b border-zinc-800/60 shrink-0">
            <h1 className="text-3xl font-bold text-zinc-100 mb-2 uppercase tracking-tighter" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Writings.
            </h1>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Thoughts on distributed systems, architecture, and the craft of software.
            </p>
          </div>
          
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 px-3 space-y-1">
            {writings.map((post) => {
              const isActive = selectedPostId === post.id;
              return (
                <button
                  key={post.id}
                  onClick={() => setSelectedPostId(post.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 relative group ${
                    isActive 
                      ? "bg-zinc-900/80 border-zinc-800/80 shadow-lg" 
                      : "bg-transparent border-transparent hover:bg-zinc-900/40"
                  } border`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-emerald-500 rounded-r-full shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    />
                  )}
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] font-mono uppercase tracking-widest font-bold px-1.5 py-0.5 rounded ${isActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800/50 text-zinc-500'}`}>
                      {post.tag}
                    </span>
                    <time className="text-[10px] font-mono text-zinc-500">{post.date}</time>
                  </div>
                  
                  <h3 className={`text-sm font-bold leading-snug mb-1.5 transition-colors ${isActive ? 'text-zinc-100' : 'text-zinc-300 group-hover:text-zinc-200'}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed font-light">
                    {post.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Area - Post Content */}
        <div className="hidden md:flex flex-1 flex-col h-full bg-[#0c0c0e] relative overflow-hidden">
          
          {/* Subtle background gradient */}
          <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-900/5 to-transparent pointer-events-none" />

          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth relative z-10">
            <AnimatePresence mode="wait">
              <motion.article
                key={activePost.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-3xl mx-auto px-10 py-20 min-h-full flex flex-col"
              >
                {/* Header */}
                <header className="mb-14">
                  <div className="flex items-center gap-4 mb-6 text-sm text-zinc-400">
                    <span className="font-mono text-emerald-400 tracking-widest uppercase text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">
                      {activePost.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <time className="font-mono">{activePost.date}</time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span className="font-mono">{activePost.readTime}</span>
                    </div>
                  </div>
                  
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 uppercase tracking-tighter leading-[1.1] mb-8"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {activePost.title}
                  </h1>
                  
                  <div className="h-px w-full bg-gradient-to-r from-zinc-800 to-transparent" />
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-zinc max-w-none prose-p:text-[15px] prose-p:leading-[1.8] prose-p:text-zinc-300 prose-headings:text-zinc-100 prose-headings:font-bold prose-a:text-emerald-400 hover:prose-a:text-emerald-300 transition-colors prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-500/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:font-normal prose-blockquote:text-zinc-400">
                  {activePost.content}
                </div>
                
                {/* Footer of the article */}
                <footer className="mt-auto pt-24 pb-8">
                  <div className="border-t border-zinc-800/60 pt-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400">
                        RB
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-200">Rohit Bhardwaj</p>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5">Software Engineer</p>
                      </div>
                    </div>
                  </div>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}