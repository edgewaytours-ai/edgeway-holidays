import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edgewayholidays.com"),
  title: "EDGEWAYTOURS | Explore Sri Lanka Differently",
  description:
    "Authentic Sri Lanka tours and holiday experiences crafted by locals who love their island. Discover safaris, ancient kingdoms, beaches, and scenic railways.",
  verification: {
    google: "IErtFBv6zjRRQG-vzDnoNb2Cj-H7jsHyf5smixIqjF4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBFDFB] text-slate-800 antialiased selection:bg-[#0A3B32] selection:text-white overflow-x-hidden w-full relative">
        {children}
      </body>
    </html>
  );
}
