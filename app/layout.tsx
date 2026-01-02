import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rohit Bhardwaj - Portfolio",
  description: "Developer Portfolio - The Dev Chronicles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased bg-[#C4BCB2] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
