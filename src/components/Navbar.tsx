"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Palm & Wave Emblem */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-11 h-11 rounded-full bg-[#0A3B32] flex items-center justify-center text-white shadow-md shadow-[#0A3B32]/15 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-none stroke-current stroke-[1.8] text-[#10B981]"
              >
                {/* Palm tree and wave curve */}
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#0A3B32] font-bold text-sm tracking-wide relative py-1.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0A3B32] after:rounded-full"
            >
              Home
            </Link>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2">
                <span>Tours</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2">
                <span>Destinations</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2">
                <span>Experiences</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2">
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 text-slate-700 hover:text-[#0A3B32] font-semibold text-sm transition-colors py-2">
                <span>Travel Info</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>
          </nav>

          {/* Right Action Icons & CTA Button */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              type="button"
              aria-label="Search website"
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-[#0A3B32] hover:bg-slate-100 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="#plan-trip"
              className="inline-flex items-center gap-2 bg-[#0A3B32] hover:bg-[#072822] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
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
              href="#popular-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Tours
            </Link>
            <Link
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Destinations
            </Link>
            <Link
              href="#experiences"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Experiences
            </Link>
            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              About
            </Link>
            <Link
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Travel Info
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="#plan-trip"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#0A3B32] text-white font-semibold py-3 rounded-full shadow-sm"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
