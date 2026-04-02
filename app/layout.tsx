import type { Metadata } from "next";
import { Titillium_Web, Quicksand, Montserrat, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import CustomCursor from "./components/CustomCursor";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
 title: "Rohit Bhardwaj - Portfolio",
  description: "Developer Portfolio - Rohit Bhardwaj",
  openGraph: {
    title: "Rohit Bhardwaj - Portfolio",
    description: "Developer Portfolio - Rohit Bhardwaj",
    url: "https://rohitships.tech",
    siteName: "Rohit Portfolio",
    images: [
      {
        url: "/cool.png", // MUST be absolute
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titillium.variable} ${quicksand.variable} ${montserrat.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans relative`}
      >
        {/* Abstract Dark Theme Background */}
        <div className="fixed inset-0 z-[-2] bg-[#050505]" />
        
        {/* Glowing Orb / Gradient Top */}
        <div className="fixed inset-0 z-[-1] pointer-events-none flex justify-center">
          <div className="w-[80vw] h-[500px] bg-gradient-to-b from-zinc-800/20 to-transparent blur-[120px] rounded-full translate-y-[-50%]" />
        </div>

        {/* Minimal Grid Pattern Overlay */}
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "64px 64px", backgroundPosition: "center center" }} />

        {/* Noise overlay for texture */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
