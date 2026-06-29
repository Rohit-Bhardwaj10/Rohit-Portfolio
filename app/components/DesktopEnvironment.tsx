"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowContext } from '../context/WindowContext';
import DraggableWindow from './DraggableWindow';

// Import the actual content components
import TechStack from './TechStack';
import Experience from './Experience';
import Projects from './Projects';
import Writings from './Writings';
import Contact from './Contact';
import GalleryWindow from './GalleryWindow';
import { projectsData } from '../data/projects';
import DesktopWidgets from './DesktopWidgets';

export default function DesktopEnvironment() {
  const { windows } = useWindowContext();

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {/* 
        The container itself is pointer-events-none so we can click through to the Desktop (Hero), 
        but we re-enable pointer-events on the actual windows.
      */}
      <DesktopWidgets />

      <AnimatePresence>
        {windows.some(w => !w.isMinimized) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-auto z-20"
          />
        )}
      </AnimatePresence>
      {windows.map((w) => {
        const isContact = w.id === 'contact';
        const isAbout = w.id === 'about';
        let defaultSize = { width: 750, height: 500 };
        
        if (isContact) {
          defaultSize = { width: 400, height: 550 };
        } else if (isAbout) {
          defaultSize = { width: 600, height: 550 };
        } else if (w.id === 'gallery') {
          defaultSize = { width: 900, height: 620 };
        }

        return (
          <div key={w.id} className="pointer-events-auto">
            <DraggableWindow id={w.id} defaultSize={defaultSize}>
              {w.id === 'techstack' && <TechStack />}
              {w.id === 'experience' && <Experience />}
              {w.id === 'projects' && <Projects projects={projectsData} />}
              {w.id === 'writings' && <Writings />}
              {w.id === 'contact' && <Contact />}
              {w.id === 'gallery' && <GalleryWindow />}
              {w.id === 'about' && (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden bg-[#09090b]">
                  {/* Cool minimal top line */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-30 blur-[2px]"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors group">
                      <span className="text-4xl font-light text-zinc-400 group-hover:text-zinc-200 transition-colors">R</span>
                    </div>
                    
                    <h2 className="text-3xl font-medium text-zinc-100 tracking-wide mb-1">Rohit Bhardwaj</h2>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Full Stack Engineer</p>
                    
                    {/* Cool separator line */}
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6"></div>
                    
                    <div className="max-w-md space-y-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <p>
                        I specialize in architecting reliable and scalable backend systems, while building interactive frontends using <span className="text-zinc-200">React</span> and <span className="text-zinc-200">Next.js</span>.
                      </p>
                      <p>
                        My focus is on creating end-to-end digital experiences that are robust, performant, and completely timeless.
                      </p>
                    </div>
                    
                    <div className="mt-10 flex gap-6">
                      <a href="https://github.com/Rohit-Bhardwaj10" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors">GitHub</a>
                      <a href="https://x.com/whoisrohit45" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors">Twitter</a>
                      <a href="https://www.linkedin.com/in/dev-rohitbhardwaj/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors">LinkedIn</a>
                    </div>
                  </div>
                </div>
              )}
              {/* Add more window content mappings here as needed */}
            </DraggableWindow>
          </div>
        );
      })}
    </div>
  );
}
