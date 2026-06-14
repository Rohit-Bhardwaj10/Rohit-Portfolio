import Header from "./components/Header";
import Hero from "./components/Hero";
import Dock from "./components/Dock";
import { WindowProvider } from "./context/WindowContext";
import DesktopEnvironment from "./components/DesktopEnvironment";

export default function Home() {
  return (
    <WindowProvider>
      <div className="h-screen text-foreground bg-background relative overflow-hidden w-full">
        {/* Structural grid pattern */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            zIndex: 9999,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
            opacity: 0.15,
            mixBlendMode: 'screen'
          }}
        />
        
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
      </div>
    </WindowProvider>
  );
}
