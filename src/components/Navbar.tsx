"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X, ArrowRight, Compass, MapPin, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        isScrolled
          ? "shadow-md border-b border-slate-200/80"
          : "border-b border-slate-100 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Palm & Wave Emblem */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-11 h-11 rounded-full bg-[#0A3B32] flex items-center justify-center text-white shadow-md shadow-[#0A3B32]/15 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-none stroke-current stroke-[1.8] text-[#10B981]"
              >
                <path d="M13 8c0-3-2-5-5-5 0 3 2 5 5 5z" />
                <path d="M13 8c2-3 4-4 7-3-1 3-3 5-7 3z" />
                <path d="M13 8c3 1 5 3 5 6-3 0-5-2-5-6z" />
                <path d="M13 8v13" />
                <path d="M5 20c3-1 6-1 9 0" />
                <path d="M3 17c4-1.5 8-1.5 12 0" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#0A3B32] leading-none">
                EDGEWAY<span className="text-[#0D4B3F]">TOURS</span>
              </span>
              <span className="text-[9px] tracking-[0.26em] text-slate-500 font-bold uppercase mt-1">
                Explore Sri Lanka Differently
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Rich Dropdowns */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-[#0A3B32] font-bold text-sm tracking-wide relative py-1.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0A3B32] after:rounded-full"
            >
              Home
            </Link>

            {/* Tours Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("tours")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/tours"
                className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2"
              >
                <span>Tours</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {activeDropdown === "tours" && (
                <div className="absolute top-full -left-4 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/tours"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <Compass className="w-4 h-4 text-[#0A3B32]" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">All Tours</div>
                      <div className="text-[10px] text-slate-500">Explore full catalog</div>
                    </div>
                  </Link>
                  <Link
                    href="/tours#popular-tours"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Handpicked Tours</div>
                      <div className="text-[10px] text-slate-500">Day trips & excursions</div>
                    </div>
                  </Link>
                  <Link
                    href="/tours#packages"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-4 h-4 rounded bg-emerald-100 text-[#0A3B32] flex items-center justify-center text-[10px] font-bold">7D</div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Multi-Day Packages</div>
                      <div className="text-[10px] text-slate-500">Complete island itineraries</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("destinations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/destinations"
                className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2"
              >
                <span>Destinations</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {activeDropdown === "destinations" && (
                <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/destinations"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#0A3B32]" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">All Destinations</div>
                      <div className="text-[10px] text-slate-500">Explore Sri Lanka by region</div>
                    </div>
                  </Link>
                  <div className="grid grid-cols-2 gap-1 pt-2 border-t border-slate-100">
                    <Link href="/destinations#sigiriya" className="p-2 text-xs text-slate-700 hover:text-[#0A3B32] hover:bg-slate-50 rounded-lg">
                      Sigiriya Rock
                    </Link>
                    <Link href="/destinations#ella" className="p-2 text-xs text-slate-700 hover:text-[#0A3B32] hover:bg-slate-50 rounded-lg">
                      Ella & Hills
                    </Link>
                    <Link href="/destinations#kandy" className="p-2 text-xs text-slate-700 hover:text-[#0A3B32] hover:bg-slate-50 rounded-lg">
                      Kandy Sacred City
                    </Link>
                    <Link href="/destinations#yala" className="p-2 text-xs text-slate-700 hover:text-[#0A3B32] hover:bg-slate-50 rounded-lg">
                      Yala Safari
                    </Link>
                    <Link href="/destinations#arugam" className="p-2 text-xs text-slate-700 hover:text-[#0A3B32] hover:bg-slate-50 rounded-lg">
                      Arugam Bay Surf
                    </Link>
                    <Link href="/destinations#mirissa" className="p-2 text-xs text-slate-700 hover:text-[#0A3B32] hover:bg-slate-50 rounded-lg">
                      Mirissa Whales
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Experiences Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("experiences")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/experiences"
                className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2"
              >
                <span>Experiences</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {activeDropdown === "experiences" && (
                <div className="absolute top-full -left-4 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link href="/experiences" className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32]">
                    🐘 Wildlife & Safaris
                  </Link>
                  <Link href="/experiences" className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32]">
                    🏛️ Culture & Heritage
                  </Link>
                  <Link href="/experiences" className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32]">
                    🏄 Beach & Surf Trips
                  </Link>
                  <Link href="/experiences" className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32]">
                    🥾 Adventure & Nature
                  </Link>
                  <Link href="/experiences" className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32]">
                    🍛 Local Village Experiences
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2"
              >
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {activeDropdown === "about" && (
                <div className="absolute top-full -left-4 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link href="/about" className="block p-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32] rounded-lg">
                    Our Story & Mission
                  </Link>
                  <Link href="/about#team" className="block p-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32] rounded-lg">
                    Local Guides & Team
                  </Link>
                  <Link href="/about#sustainability" className="block p-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32] rounded-lg">
                    Sustainable Tourism
                  </Link>
                </div>
              )}
            </div>

            {/* Travel Info Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("travel-info")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/travel-info"
                className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2"
              >
                <span>Travel Info</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {activeDropdown === "travel-info" && (
                <div className="absolute top-full -left-4 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link href="/travel-info#best-time" className="block p-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32] rounded-lg">
                    Best Time to Visit
                  </Link>
                  <Link href="/travel-info#tips" className="block p-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32] rounded-lg">
                    Essential Travel Tips
                  </Link>
                  <Link href="/travel-info#faq" className="block p-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32] rounded-lg">
                    Frequently Asked Questions
                  </Link>
                  <Link href="/blog" className="block p-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0A3B32] rounded-lg">
                    Travel Blog & Articles
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons & CTA Button */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/tours"
              aria-label="Search tours"
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-[#0A3B32] hover:bg-slate-100 transition-colors"
            >
              <Search className="w-4 h-4" />
            </Link>

            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-2 bg-[#063D34] hover:bg-[#042A24] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A3B32] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0A3B32] font-bold text-base py-1"
            >
              Home
            </Link>
            <Link
              href="/tours"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Tours & Packages
            </Link>
            <Link
              href="/destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Destinations
            </Link>
            <Link
              href="/experiences"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Experiences
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              About Us
            </Link>
            <Link
              href="/travel-info"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Travel Info & FAQs
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Travel Blog
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/plan-your-trip"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#063D34] text-white font-semibold py-3 rounded-full shadow-sm"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
