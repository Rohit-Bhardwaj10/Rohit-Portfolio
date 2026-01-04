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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titillium.variable} ${quicksand.variable} ${montserrat.variable} ${playfair.variable} antialiased bg-[#C4BCB2] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
