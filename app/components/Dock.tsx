"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { 
  User, Briefcase, Code, BookOpen, Mail, FileText, Cpu, Github, Twitter, Linkedin, Images
} from "lucide-react";
import Link from "next/link";
import { useWindowContext, WindowId } from "../context/WindowContext";

type DockItem = {
  label: string;
  icon: React.ElementType;
  id?: WindowId;
  href?: string;
  isExternal?: boolean;
  action?: string;
};

const dockItems: DockItem[] = [
  { label: 'About', icon: User, id: 'about' },
  { label: 'Experience', icon: Briefcase, id: 'experience' },
  { label: 'Projects', icon: Code, id: 'projects' },
  { label: 'Tech Stack', icon: Cpu, id: 'techstack' },
  { label: 'Writings', icon: BookOpen, id: 'writings' },
  { label: 'Gallery', icon: Images, id: 'gallery' },
  { label: 'Resume', icon: FileText, href: '/Rohit_CV.pdf', isExternal: true },
  { label: 'Contact', icon: Mail, id: 'contact' },
];

const socialItems = [
  { label: 'Github', icon: Github, href: 'https://github.com/Rohit-Bhardwaj10/', isExternal: true },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/dev-rohitbhardwaj/', isExternal: true },
  { label: 'Twitter', icon: Twitter, href: 'https://x.com/whoisrohit45', isExternal: true },
];

function DockIcon({ 
  item, 
  isActive, 
  mouseX, 
  onClick 
}: { 
  item: DockItem; 
  isActive?: boolean; 
  mouseX: MotionValue; 
  onClick?: (e: React.MouseEvent) => void 
}) {
  let ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 64, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;

  const innerProps = {
    className: "relative flex items-center justify-center rounded-xl text-zinc-400 hover:text-white transition-colors duration-200 outline-none",
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const content = (
    <>
      <Icon className="w-1/2 h-1/2" />
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
      )}
    </>
  );

  return (
    <div className="relative group flex items-end justify-center w-10 h-10">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1a1a1a] border border-white/10 text-white text-[10px] font-bold font-sans uppercase tracking-widest rounded-md whitespace-nowrap pointer-events-none z-50"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 flex items-end justify-center">
        {item.id ? (
          <motion.button
            ref={ref as any}
            style={{ width, height: width }}
            onClick={(e) => onClick && onClick(e as any)}
            {...innerProps}
          >
            {content}
          </motion.button>
        ) : item.href ? (
          <motion.a
            ref={ref as any}
            style={{ width, height: width }}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            onClick={(e) => onClick && onClick(e as any)}
            {...innerProps}
          >
            {content}
          </motion.a>
        ) : (
          <motion.div
            ref={ref as any}
            style={{ width, height: width }}
            {...innerProps}
          >
            {content}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Dock() {
  const { openWindow, activeWindowId } = useWindowContext();
  let mouseX = useMotionValue(Infinity);

  const handleItemClick = (e: React.MouseEvent, item: DockItem) => {
    if (item.id) {
      e.preventDefault();
      openWindow(item.id, item.label);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 p-2 rounded-2xl bg-[#111]/80 backdrop-blur-xl border border-white/10 shadow-2xl h-14"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {dockItems.map((item) => (
          <DockIcon 
            key={item.label} 
            item={item} 
            isActive={activeWindowId === item.id} 
            mouseX={mouseX}
            onClick={(e) => handleItemClick(e, item)}
          />
        ))}

        <div className="w-[1px] h-6 bg-white/10 mx-2" />

        {socialItems.map((item) => (
          <DockIcon 
            key={item.label} 
            item={item} 
            mouseX={mouseX}
          />
        ))}
      </motion.div>
    </div>
  );
}
