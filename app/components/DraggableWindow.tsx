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
    // Calculate a cascading offset based on zIndex to prevent complete overlap
    const offset = windowState ? (windowState.zIndex - 100) * 30 : 0;
    
    return {
      x: typeof window !== 'undefined' ? (window.innerWidth / 2) - (defaultSize.width / 2) + offset : 0,
      y: typeof window !== 'undefined' ? (window.innerHeight / 2) - (defaultSize.height / 2) + offset : 0
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
        initial={{ opacity: 0, scale: 0.95, ...initialPos }}
        animate={
          windowState.isMaximized 
            ? { x: 0, y: 0, width: '100vw', height: '100vh', opacity: 1, scale: 1, borderRadius: 0 }
            : { width: defaultSize.width, height: defaultSize.height, opacity: 1, scale: 1, borderRadius: 12 }
        }
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
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
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center group"
            >
              <X className="w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center group"
            >
              <Minus className="w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center group"
            >
              <Maximize2 className="w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
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
