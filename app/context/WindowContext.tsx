"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type WindowId = 'about' | 'experience' | 'projects' | 'techstack' | 'writings' | 'contact';

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMaximized: boolean;
  isMinimized: boolean;
  zIndex: number;
}

interface WindowContextType {
  windows: WindowState[];
  openWindow: (id: WindowId, title: string) => void;
  closeWindow: (id: WindowId) => void;
  toggleMaximize: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  activeWindowId: WindowId | null;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<WindowId | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(100);

  const focusWindow = useCallback((id: WindowId) => {
    setHighestZIndex((prev) => prev + 1);
    setWindows((prev) => 
      prev.map(w => w.id === id ? { ...w, zIndex: highestZIndex + 1, isMinimized: false } : w)
    );
    setActiveWindowId(id);
  }, [highestZIndex]);

  const openWindow = useCallback((id: WindowId, title: string) => {
    setWindows((prev) => {
      const existing = prev.find(w => w.id === id);
      if (existing) {
        // Already exists, just focus it and un-minimize if needed
        return prev;
      }
      // Open new window
      return [...prev, { id, title, isOpen: true, isMaximized: false, isMinimized: false, zIndex: highestZIndex + 1 }];
    });
    setHighestZIndex((prev) => prev + 1);
    setActiveWindowId(id);
  }, [highestZIndex]);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => prev.filter(w => w.id !== id));
    setActiveWindowId((prev) => prev === id ? null : prev);
  }, []);

  const toggleMaximize = useCallback((id: WindowId) => {
    setWindows((prev) => 
      prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)
    );
    focusWindow(id);
  }, [focusWindow]);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => 
      prev.map(w => w.id === id ? { ...w, isMinimized: true } : w)
    );
    setActiveWindowId((prev) => prev === id ? null : prev);
  }, []);

  return (
    <WindowContext.Provider value={{
      windows,
      openWindow,
      closeWindow,
      toggleMaximize,
      minimizeWindow,
      focusWindow,
      activeWindowId
    }}>
      {children}
    </WindowContext.Provider>
  );
}

export function useWindowContext() {
  const context = useContext(WindowContext);
  if (context === undefined) {
    throw new Error('useWindowContext must be used within a WindowProvider');
  }
  return context;
}
