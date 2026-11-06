"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.defaultWhatsAppMessage
  )}`;

  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6 flex flex-col items-end gap-2"
    >
      {/* Quick helper tooltip */}
      <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 text-xs text-slate-700 animate-bounce duration-1000">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-medium">Online | Need a custom Sri Lanka itinerary?</span>
      </div>

      {/* Main floating action button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our Sri Lanka Tour Specialist on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
      >
        {/* Pulsing ring behind button */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-xs animate-ping opacity-75 group-hover:opacity-100" />

        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 fill-current relative z-10 flex-shrink-0"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>

        <span className="font-semibold text-xs sm:text-sm tracking-wide relative z-10">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
