import Header from "./components/Header";
import Hero from "./components/Hero";
import Dock from "./components/Dock";
import { WindowProvider } from "./context/WindowContext";
import DesktopEnvironment from "./components/DesktopEnvironment";
import CommandPalette from "./components/CommandPalette";

export default function Home() {
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
