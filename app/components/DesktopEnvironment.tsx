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
import { projectsData } from '../data/projects';
import DesktopWidgets from './DesktopWidgets';

export default function DesktopEnvironment() {
  const { windows } = useWindowContext();

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
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
          defaultSize = { width: 350, height: 450 };
        }

        return (
          <div key={w.id} className="pointer-events-auto">
            <DraggableWindow id={w.id} defaultSize={defaultSize}>
              {w.id === 'techstack' && <TechStack />}
              {w.id === 'experience' && <Experience />}
              {w.id === 'projects' && <Projects projects={projectsData} />}
              {w.id === 'writings' && <Writings />}
              {w.id === 'contact' && <Contact />}
              {w.id === 'about' && (
                <div className="p-8 md:p-12 text-zinc-300 font-serif leading-relaxed">
                  <h2 className="text-3xl text-white mb-6">About Me</h2>
                  <p className="mb-4">
                    I specialize in architecting reliable and scalable backend systems, while building interactive frontends using React and Next.js. My focus is on creating end-to-end digital experiences that are robust, performant, and completely timeless.
                  </p>
                  <p>
                    This portfolio was redesigned into a macOS-style windowing system to demonstrate advanced state management and Framer Motion capabilities.
                  </p>
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
