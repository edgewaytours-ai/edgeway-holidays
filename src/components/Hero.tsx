"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Briefcase,
  Car,
  User,
  Search,
  Calendar,
  Play,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"tours" | "packages" | "transfers" | "custom">("tours");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2 travellers");

  return (
    <section className="relative w-full bg-[#031713] overflow-visible">
      {/* 100% Full Width Hero Background */}
      <div className="relative w-full min-h-[560px] lg:min-h-[620px] flex flex-col justify-between pt-8 sm:pt-10 pb-20 lg:pb-24">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-sigiriya.jpg"
            alt="Sigiriya Rock Fortress panoramic view, Sri Lanka"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Natural Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#05201A]/60 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031713] via-transparent to-black/20" />
        </div>

        {/* Content Container (Aligned With Header and TrustBar Grid) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-between">
          {/* Top Row: Subtitle Tag & Right Callout */}
          <div className="flex items-start justify-between w-full">
            <span className="text-[11px] font-bold text-white tracking-[0.22em] uppercase">
              Sri Lanka Tours & Experiences
            </span>

            {/* Handwritten Floating Text */}
            <div className="hidden md:flex flex-col items-end text-right">
              <div className="font-script text-white/95 text-2xl lg:text-3xl rotate-[-3deg] tracking-wide drop-shadow-md select-none">
                Nature Culture Adventure People
              </div>
            </div>
          </div>

          {/* Main Title & Action Row */}
          <div className="max-w-2xl my-auto py-6 lg:py-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              More Than a Trip
              <br />
              <span>A Real Sri Lanka </span>
              <span className="font-script text-amber-300 text-5xl sm:text-6xl lg:text-7xl font-light inline-block transform -rotate-2 ml-1">
                Experience
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-200/90 leading-relaxed font-light max-w-xl">
              Wild safaris, ancient kingdoms, tropical beaches and authentic local experiences — explore Sri Lanka with people who know and love this island.
            </p>

            {/* Buttons Row */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="#popular-tours"
                className="inline-flex items-center gap-2 bg-[#0A4D3E] hover:bg-[#073A2F] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Tours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2.5 bg-black/35 hover:bg-black/50 text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all"
              >
                <span className="w-7 h-7 rounded-full bg-white text-[#0A3B32] flex items-center justify-center shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>
                  Watch Video <span className="text-[11px] text-slate-300 ml-1">1:30 min</span>
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Row Inside Hero: Left Search Widget */}
          <div className="relative w-full flex items-end justify-between -mb-28 lg:-mb-32 z-30">
            {/* Search Box Sized to Reach Sustainable Tourism Icon */}
            <div className="w-full lg:max-w-[1080px] xl:max-w-[1100px]">
              {/* Folder-Style Attached Tabs */}
              <div className="flex items-end gap-1.5 pl-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("tours")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === "tours"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>Tours</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("packages")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "packages"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Packages</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("transfers")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "transfers"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <Car className="w-4 h-4" />
                  <span>Transfers</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("custom")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "custom"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Custom Trip</span>
                </button>
              </div>

              {/* Main White Search Bar */}
              <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-slate-100 p-3 sm:p-3.5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Searching tours for ${destination || "Sri Lanka"} (${travellers})`);
                  }}
                  className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5 md:gap-0"
                >
                  {/* Field 1: Destination */}
                  <div className="flex-[1.2] flex items-center gap-3 px-3.5 py-2 min-w-0">
                    <Search className="w-4 h-4 text-slate-500 shrink-0" />
                    <div className="flex flex-col min-w-0 w-full">
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-tight">
                        Destination
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Where do you want to go?"
                        className="bg-transparent text-xs sm:text-sm text-slate-700 placeholder-slate-400 font-medium focus:outline-none truncate mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                  {/* Field 2: Date */}
                  <div className="flex-1 flex items-center gap-3 px-3.5 py-2 min-w-0">
                    <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                    <div className="flex flex-col min-w-0 w-full">
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-tight">
                        Date
                      </label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Select dates"
                        className="bg-transparent text-xs sm:text-sm text-slate-700 placeholder-slate-400 font-medium focus:outline-none truncate mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                  {/* Field 3: Travellers */}
                  <div className="flex-1 flex items-center gap-3 px-3.5 py-2 min-w-0">
                    <User className="w-4 h-4 text-slate-700 shrink-0" />
                    <div className="flex flex-col min-w-0 w-full">
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-tight">
                        Travellers
                      </label>
                      <input
                        type="text"
                        value={travellers}
                        onChange={(e) => setTravellers(e.target.value)}
                        placeholder="2 travellers"
                        className="bg-transparent text-xs sm:text-sm text-slate-700 placeholder-slate-400 font-medium focus:outline-none truncate mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    className="bg-[#063D34] hover:bg-[#042A24] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 md:ml-2.5"
                  >
                    <span>Search Tours</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
