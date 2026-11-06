import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Edgeway Tours",
    "alternateName": "Edgeway Holidays",
    "url": "https://edgewayholidays.com",
    "logo": "https://edgewayholidays.com/images/hero-sigiriya.jpg",
    "image": "https://edgewayholidays.com/images/hero-sigiriya.jpg",
    "description":
      "Authentic Sri Lanka tours and holiday experiences crafted by locals. Private chauffeur guide tours, wildlife safaris, cultural journeys, and bespoke travel packages.",
    "telephone": "+94759986585",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressLocality": "Sri Lanka",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 7.8731,
      "longitude": 80.7718,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "sameAs": [
      "https://www.facebook.com",
      "https://www.instagram.com",
      "https://www.tripadvisor.com",
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FBFDFB] text-slate-800 antialiased selection:bg-[#0A3B32] selection:text-white overflow-x-hidden w-full relative">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
