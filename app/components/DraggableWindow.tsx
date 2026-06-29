"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowContext, WindowId } from '../context/WindowContext';
import { Maximize2, Minus, X } from 'lucide-react';

interface DraggableWindowProps {
  id: WindowId;
  children: React.ReactNode;
  defaultSize?: { width: number, height: number };
}

export default function DraggableWindow({ id, children, defaultSize = { width: 800, height: 600 } }: DraggableWindowProps) {
  const { windows, closeWindow, toggleMaximize, minimizeWindow, focusWindow } = useWindowContext();
  const windowState = windows.find(w => w.id === id);
  const windowRef = useRef<HTMLDivElement>(null);
  
  const [initialPos] = useState(() => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    if (window.innerWidth < 1024) return { x: 0, y: 0 };
    const cascade = (windowState?.openIndex ?? 0) * 30;
    return {
      x: (window.innerWidth / 2) - (defaultSize.width / 2) + cascade,
      y: (window.innerHeight / 2) - (defaultSize.height / 2) + cascade,
    };
  });

  if (!windowState || windowState.isMinimized) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={windowRef}
        drag={!windowState.isMaximized}
        dragMomentum={false}
        dragElastic={0}
        onMouseDown={() => focusWindow(id)}
        initial={{ opacity: 0, scale: 0.85, ...initialPos }}
        animate={
          windowState.isMaximized 
            ? { x: 0, y: 0, width: '100vw', height: '100vh', opacity: 1, scale: 1, borderRadius: 0 }
            : { width: defaultSize.width, height: defaultSize.height, opacity: 1, scale: 1, borderRadius: 12 }
        }
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ type: 'spring', damping: 24, stiffness: 170, mass: 0.6 }}
        style={{ zIndex: windowState.zIndex }}
        className={`absolute flex flex-col overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]/90 backdrop-blur-xl ${
          windowState.isMaximized ? 'top-0 left-0' : ''
        }`}
      >
        {/* Mac-style Title Bar */}
        <div className="h-10 flex items-center justify-between px-4 border-b border-white/10 bg-black/40 select-none cursor-move">
          <div className="flex gap-2 items-center">
            <button 
              onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
              className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center group shadow-sm border border-red-600/50"
            >
              <X className="w-3 h-3 text-red-950 opacity-100 font-bold" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}
              className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center group shadow-sm border border-green-600/50"
            >
              <Maximize2 className="w-2.5 h-2.5 text-green-950 opacity-100 font-bold" />
            </button>
          </div>
          <div className="font-sans text-[10px] font-bold tracking-widest uppercase text-zinc-500">
            {windowState.title}
          </div>
          <div className="w-16" /> {/* Spacer for symmetry */}
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
