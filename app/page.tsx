"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dock from "./components/Dock";
import { WindowProvider } from "./context/WindowContext";
import DesktopEnvironment from "./components/DesktopEnvironment";
import CommandPalette from "./components/CommandPalette";
import MobileLayout from "./components/MobileLayout";

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile(1024);

  // Avoid layout flash — show nothing until viewport is measured
  if (isMobile === null) {
    return (
      <div className="h-screen w-full bg-[#050505] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
      </div>
    );
  }

  if (isMobile) {
    return (
      <WindowProvider>
        <MobileLayout />
      </WindowProvider>
    );
  }

  return (
    <WindowProvider>
      <div className="h-screen text-foreground bg-background relative overflow-hidden w-full">
        {/* Header sits on top */}
        <div className="relative z-50">
          <Header />
        </div>

        {/* The Desktop Background (Hero) */}
        <main className="h-full w-full overflow-hidden">
          <Hero />
        </main>

        {/* Floating Windows Environment */}
        <DesktopEnvironment />

        {/* The Dock */}
        <Dock />

        {/* Global Command Palette — fixed bottom-right */}
        <CommandPalette />
      </div>
    </WindowProvider>
  );
}
