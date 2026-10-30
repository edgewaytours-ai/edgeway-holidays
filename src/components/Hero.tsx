"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Calendar,
  Users,
  Search,
  Play,
  MapPin,
  Car,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"tours" | "packages" | "transfers" | "custom">("tours");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2 travellers");

  return (
    <section className="relative pt-6 pb-20 md:pb-28 overflow-visible">
      {/* Hero Banner Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background Image with Cinematic Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2000&auto=format&fit=crop"
              alt="Sigiriya Rock Fortress panoramic view, Sri Lanka"
              fill
              priority
              className="object-cover object-center transform scale-105 transition-transform duration-1000"
            />
            {/* Dark green gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#041a16]/90 via-[#06241F]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041a16]/80 via-transparent to-black/30" />
          </div>

          {/* Top Row: Subtitle + Floating Handwritten Callout */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              Sri Lanka Tours & Experiences
            </div>

            {/* Handwritten Floating Text & Location */}
            <div className="hidden md:flex flex-col items-end text-right">
              <div className="font-script text-white/90 text-2xl lg:text-3xl rotate-[-4deg] tracking-wide drop-shadow-md select-none">
                Nature • Culture • Adventure • People
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/80 mt-2 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Sigiriya, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Center Content: Main Headline & Actions */}
          <div className="relative z-10 max-w-2xl my-auto py-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              More Than a Trip
              <br />
              <span className="text-white">A Real Sri Lanka </span>
              <span className="font-script text-amber-300 text-5xl sm:text-6xl lg:text-7xl font-light inline-block transform -rotate-1 ml-1">
                Experience
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200/90 leading-relaxed font-light max-w-xl">
              Wild safaris, ancient kingdoms, tropical beaches and authentic local experiences — explore Sri Lanka with people who know and love this island.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#popular-tours"
                className="inline-flex items-center gap-2 bg-[#0A3B32] hover:bg-[#072620] text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0A3B32]/40 transition-all transform hover:-translate-y-0.5"
              >
                Explore Our Tours
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 text-sm sm:text-base font-medium px-5 py-3 rounded-full transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-white text-[#0A3B32] flex items-center justify-center shadow-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Video <span className="text-xs text-slate-300 ml-1">1:30 min</span></span>
              </button>
            </div>
          </div>

          {/* Spacer for bottom bar layout */}
          <div className="h-10 sm:h-12" />
        </div>

        {/* Floating Search / Booking Widget Bar */}
        <div className="relative z-30 -mt-16 sm:-mt-20 max-w-5xl mx-auto">
          {/* Card Wrapper */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-3 sm:p-5">
            {/* Tabs Header */}
            <div className="flex items-center gap-2 sm:gap-3 border-b border-slate-100 pb-3 mb-4 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("tours")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "tours"
                    ? "bg-[#0A3B32] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0A3B32] hover:bg-slate-50"
                }`}
              >
                <Compass className="w-4 h-4" />
                Tours
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("packages")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "packages"
                    ? "bg-[#0A3B32] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0A3B32] hover:bg-slate-50"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Packages
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("transfers")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "transfers"
                    ? "bg-[#0A3B32] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0A3B32] hover:bg-slate-50"
                }`}
              >
                <Car className="w-4 h-4" />
                Transfers
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("custom")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "custom"
                    ? "bg-[#0A3B32] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0A3B32] hover:bg-slate-50"
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                Custom Trip
              </button>
            </div>

            {/* Form Fields Grid */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Searching for tours to ${destination || "Sri Lanka"} for ${travellers}!`);
              }}
              className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center"
            >
              {/* Destination */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Destination
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where do you want to go?"
                    className="bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none truncate"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                <Calendar className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Select dates"
                    className="bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none truncate"
                  />
                </div>
              </div>

              {/* Travellers */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                <Users className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Travellers
                  </label>
                  <input
                    type="text"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    placeholder="2 travellers"
                    className="bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none truncate"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full h-full min-h-[52px] bg-[#0A3B32] hover:bg-[#072B24] text-white font-semibold text-sm rounded-xl px-6 flex items-center justify-center gap-2 shadow-md shadow-[#0A3B32]/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Search Tours</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
