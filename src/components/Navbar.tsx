"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X, Palmtree, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#0A3B32] flex items-center justify-center text-white shadow-md shadow-[#0A3B32]/20 transition-transform group-hover:scale-105">
              <Palmtree className="w-6 h-6 text-[#10B981]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0A3B32] leading-none">
                EDGEWAY<span className="text-[#0F4C3A] font-extrabold">TOURS</span>
              </span>
              <span className="text-[10px] tracking-[0.22em] text-slate-500 font-semibold uppercase mt-1">
                Explore Sri Lanka Differently
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-[#0A3B32] font-semibold text-sm hover:text-[#10B981] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0A3B32]"
            >
              Home
            </Link>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-slate-700 hover:text-[#0A3B32] font-medium text-sm transition-colors py-2">
                Tours <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-slate-700 hover:text-[#0A3B32] font-medium text-sm transition-colors py-2">
                Destinations <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-slate-700 hover:text-[#0A3B32] font-medium text-sm transition-colors py-2">
                Experiences <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-slate-700 hover:text-[#0A3B32] font-medium text-sm transition-colors py-2">
                About <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-slate-700 hover:text-[#0A3B32] font-medium text-sm transition-colors py-2">
                Travel Info <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              aria-label="Search"
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:text-[#0A3B32] hover:bg-slate-100 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="#plan-trip"
              className="inline-flex items-center gap-2 bg-[#0A3B32] hover:bg-[#072B24] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Plan Your Trip
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A3B32] rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
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
              className="text-[#0A3B32] font-semibold text-base py-1"
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
              About Us
            </Link>
            <Link
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#0A3B32] font-medium text-base py-1"
            >
              Travel Blog
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
