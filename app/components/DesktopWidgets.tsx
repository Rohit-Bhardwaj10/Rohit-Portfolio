"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import Image from 'next/image';
import { Clock, BookOpen, ArrowUpRight, Calendar } from 'lucide-react';
import Link from "next/link";

const quotes = [
  { text: "Avoidance doesn't eliminate pain — it compounds it.", author: "CB • WRITING" },
  { text: "First, solve the problem. Then, write the code.", author: "JOHN JOHNSON" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "OSCAR WILDE" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "CORY HOUSE" },
  { text: "Simplicity is the soul of efficiency.", author: "AUSTIN FREEMAN" },
  { text: "Before software can be reusable it first has to be usable.", author: "RALPH JOHNSON" },
  { text: "Make it work, make it right, make it fast.", author: "KENT BECK" }
];

const writings = [
  {
    date: "Oct 22, 2025",
    title: "The Centralized Core of Decentralization",
    description: "Examining the reliance of decentralized networks on centralized cloud providers and efficient infrastructure patterns.",
    tag: "#Web3",
    readTime: "6 min read",
  },
  {
    date: "Jun 9, 2025",
    title: "A Developer's Dilemma",
    description: "Between Perfection and Shipping. Exploring the balance between writing perfect code and actually getting products out the door.",
    tag: "#Thoughts",
    readTime: "5 min read",
  },
];

interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string | null;
  songUrl: string;
}

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-base font-mono font-bold text-zinc-200 tracking-widest tabular-nums">{time}</p>
      <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">IST · UTC +5:30</p>
    </div>
  );
}

function SpotifyWidget() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [prevTitle, setPrevTitle] = useState<string | null>(null);

  const fetchTrack = async () => {
    try {
      const res = await fetch('/api/spotify');
      const data = await res.json();
      setConfigured(data.configured);
      if (data.track) {
        if (data.track.title !== prevTitle) {
          setPrevTitle(data.track.title);
        }
        setTrack(data.track);
      }
    } catch {
      // silently fail
    }
  };

  useEffect(() => {
    fetchTrack();
    // Poll every 30 seconds
    const interval = setInterval(fetchTrack, 30_000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SpotifyLogo = () => (
    <svg className="w-6 h-6 text-emerald-400 absolute opacity-60" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.56.3z" />
    </svg>
  );

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="absolute bottom-32 left-[30%] md:left-[35%] bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-72 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group flex items-center justify-between"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      {/* Drag Handle */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />

      {/* Not configured — show static fallback */}
      {configured === false && (
        <div className="flex items-center gap-4 mt-2 w-full">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-900 to-zinc-900 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <SpotifyLogo />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Spotify</span>
            <p className="text-xs font-sans font-bold text-zinc-400 leading-tight italic">Not Playing</p>
          </div>
        </div>
      )}

      {/* Configured but loading */}
      {configured === null && (
        <div className="flex items-center gap-4 mt-2 w-full">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-900 to-zinc-900 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-pulse">
            <SpotifyLogo />
          </div>
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="h-2 w-20 bg-white/10 rounded animate-pulse" />
            <div className="h-2 w-28 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      )}

      {/* Live data */}
      {configured === true && track && (
        <AnimatePresence mode="wait">
          <motion.div
            key={track.title}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 mt-2 w-full"
          >
            {/* Album Art or Spotify logo */}
            <div className="w-10 h-10 rounded-lg border border-emerald-500/20 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.2)] shrink-0 bg-zinc-900">
              {track.albumArt ? (
                <Image
                  src={track.albumArt}
                  alt={track.album}
                  fill
                  className="object-cover"
                  sizes="40px"
                  unoptimized
                />
              ) : (
                <div className="bg-gradient-to-br from-emerald-900 to-zinc-900 w-full h-full flex items-center justify-center">
                  <SpotifyLogo />
                </div>
              )}
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
                {track.isPlaying ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.6)]" />
                    Now Playing
                  </>
                ) : (
                  'Last Played'
                )}
              </span>
              <p className="text-xs font-sans font-bold text-zinc-200 leading-tight truncate">{track.title}</p>
              <p className="text-[10px] font-sans text-zinc-400 truncate">{track.artist}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Equalizer bars — only when playing */}
      {track?.isPlaying && (
        <div className="mt-2 flex gap-[2px] items-end h-4 pb-1 pr-1 shrink-0">
          <motion.div animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-1 bg-emerald-500/80 rounded-t-sm" />
          <motion.div animate={{ height: [10, 14, 10] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2, ease: "easeInOut" }} className="w-1 bg-emerald-500 rounded-t-sm" />
          <motion.div animate={{ height: [6, 12, 6] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4, ease: "easeInOut" }} className="w-1 bg-emerald-500/80 rounded-t-sm" />
        </div>
      )}

      {/* Paused / not playing bars */}
      {configured === true && track && !track.isPlaying && (
        <div className="mt-2 flex gap-[2px] items-end h-4 pb-1 pr-1 shrink-0 opacity-30">
          <div style={{ height: 4 }} className="w-1 bg-emerald-500/80 rounded-t-sm" />
          <div style={{ height: 8 }} className="w-1 bg-emerald-500 rounded-t-sm" />
          <div style={{ height: 6 }} className="w-1 bg-emerald-500/80 rounded-t-sm" />
        </div>
      )}
    </motion.div>
  );
}

function BlogWidget() {
  const latestPost = writings[0];

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 w-80 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.5 }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />

      <div className="mb-4 flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-400/80" />
          <span className="font-sans text-[11px] text-zinc-300 font-bold uppercase tracking-widest">
            Latest Writing
          </span>
        </div>
        <a 
          href="https://rohitsblog.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[9px] font-mono text-zinc-500 hover:text-emerald-400 transition-colors uppercase tracking-widest group/link"
        >
          View All
          <ArrowUpRight size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <Link href="/blogs" className="block group-post">
        <h3 className="text-sm font-bold text-zinc-100 group-hover/post:text-emerald-400 transition-colors leading-snug mb-2">
          {latestPost.title}
        </h3>
        <p className="text-[13px] text-zinc-400 group-hover/post:text-zinc-300 leading-relaxed mb-4 line-clamp-3">
          {latestPost.description}
        </p>
        
        <div className="flex items-center justify-between">
          <time className="text-[10px] font-mono text-zinc-500">
            {latestPost.date}
          </time>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-400 group-hover/post:text-emerald-400 transition-colors flex items-center gap-1">
            Read
            <ArrowUpRight size={12} className="group-hover/post:translate-x-0.5 group-hover/post:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function DesktopWidgets() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Quote Widget */}
      <motion.div
        drag
        dragMomentum={false}
        className="hidden xl:block absolute top-48 right-8 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-56 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.5 }}
      >
        {/* Drag Handle Indicator */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />

        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-serif text-[15px] leading-relaxed text-zinc-300 mt-2 mb-6">
            "{quotes[currentQuote].text}"
          </p>

          <div className="flex items-center gap-2 mb-4">
            {quotes.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentQuote ? 'w-4 bg-zinc-400' : 'w-1.5 bg-zinc-700'}`}
              />
            ))}
          </div>

          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
            — {quotes[currentQuote].author}
          </p>
        </motion.div>
      </motion.div>

      {/* Spotify Widget */}
      <SpotifyWidget />

      {/* Blog Widget */}
      <BlogWidget />

      {/* Github Widget positioned at bottom right */}
      <motion.div
        drag
        dragMomentum={false}
        className="absolute bottom-10 right-8 md:bottom-30 md:right-12 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group hidden xl:block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />

        <div className="mb-3 flex items-center justify-between mt-1">
          <p className="font-sans text-[14px] text-zinc-400 font-bold uppercase tracking-widest">
            GitHub Contributions
          </p>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
        </div>

        <div className="w-full max-w-full overflow-hidden flex justify-center pb-2 scale-90 origin-center">
          <GitHubCalendar
            username="Rohit-Bhardwaj10"
            colorScheme="dark"
            blockSize={8}
            blockMargin={3}
            fontSize={10}
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#18181b', '#064e3b', '#059669', '#10b981', '#34d399']
            }}
          />
        </div>
      </motion.div>
      {/* Status Widget */}
      <motion.div
        drag
        dragMomentum={false}
        className="hidden xl:block absolute top-24 right-8 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-56 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />
        <div className="flex items-center gap-2 mt-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Status</span>
        </div>
        <p className="text-xs text-zinc-300 font-sans font-semibold leading-snug">
          Available for new opportunities
        </p>
      </motion.div>

      {/* Local Time Widget (Hidden as per new layout) */}
      {/* 
      <motion.div
        drag
        dragMomentum={false}
        className="hidden xl:block absolute top-48 right-8 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-56 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.5 }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />
        <div className="flex items-center gap-2 mt-2 mb-2">
          <Clock className="w-3 h-3 text-zinc-500" />
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Local Time</span>
        </div>
        <LiveClock />
      </motion.div>
      */}

      {/* Current Focus Widget
      <motion.div
        drag
        dragMomentum={false}
        className="hidden xl:block absolute top-[19rem] right-8 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-56 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 pointer-events-auto cursor-grab active:cursor-grabbing group"
        initial={{ y: -26, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block mt-2 mb-3">
          Current Focus
        </span>
        <div className="flex flex-wrap gap-1.5">
          {['Golang', 'Distributed Systems'].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/5 border border-white/8 rounded-md text-[9px] text-zinc-300 font-mono font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div> */}
    </>
  );
}
