"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Compass,
  Briefcase,
  Car,
  User,
  Calendar,
  Play,
  ArrowRight,
  ChevronDown,
  Check,
  MapPin,
  Clock,
  Sparkles,
  Plane,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"tours" | "packages" | "transfers" | "custom">("tours");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Tours Form State
  const [tourDestination, setTourDestination] = useState("Sigiriya & Cultural Triangle");
  const [tourDate, setTourDate] = useState("Dec - Apr (Peak Season)");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Packages Form State
  const [selectedPackage, setSelectedPackage] = useState("10-Day Complete Sri Lanka Circuit");
  const [packageDuration, setPackageDuration] = useState("8 - 10 Days");
  const [packageVehicle, setPackageVehicle] = useState("Toyota KDH Luxury Van (3-6 Pax)");

  // Transfers Form State
  const [pickupLocation, setPickupLocation] = useState("Colombo Airport (CMB)");
  const [dropoffDestination, setDropoffDestination] = useState("Mirissa / South Coast");
  const [transferVehicle, setTransferVehicle] = useState("Sedan Car (1-2 Pax) · $80-$95");
  const [transferDate, setTransferDate] = useState("Today / Upcoming");

  // Custom Trip Form State
  const [customDestinations, setCustomDestinations] = useState<string[]>([
    "Sigiriya",
    "Ella",
    "Yala Safari",
    "Mirissa",
  ]);
  const [customDuration, setCustomDuration] = useState("7 - 9 Days");
  const [customStyle, setCustomStyle] = useState("Private Chauffeur Tour");

  const toggleCustomDestination = (dest: string) => {
    setCustomDestinations((prev) =>
      prev.includes(dest) ? prev.filter((d) => d !== dest) : [...prev, dest]
    );
  };

  const handleToursSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    const el = document.getElementById("popular-tours");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/tours");
    }
  };

  const handlePackagesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    const el = document.getElementById("packages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/tours");
    }
  };

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    const message = encodeURIComponent(
      `Hello Edgeway Holidays and Tours! I would like to book a private transfer from ${pickupLocation} to ${dropoffDestination} (${transferVehicle}). Date: ${transferDate}. Please confirm quote and driver availability.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    router.push("/plan-your-trip");
  };

  return (
    <section className="relative w-full bg-[#031713] overflow-visible">
      {/* Invisible backdrop to close any open dropdown menu on click outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-30 cursor-default"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      {/* 100% Full Width Hero Background */}
      <div className="relative w-full min-h-[560px] lg:min-h-[620px] flex flex-col justify-between pt-8 sm:pt-10 pb-20 lg:pb-28">
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

        {/* Content Container */}
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
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              More Than a Trip
              <br />
              <span>A Real Sri Lanka </span>
              <span className="font-script text-amber-300 text-4xl sm:text-6xl lg:text-7xl font-light inline-block transform -rotate-2 ml-1">
                Experience
              </span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-200/90 leading-relaxed font-light max-w-xl">
              Wild safaris, ancient kingdoms, tropical beaches and authentic local experiences — explore Sri Lanka with people who know and love this island.
            </p>

            {/* Buttons Row */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#popular-tours"
                className="inline-flex items-center gap-2 bg-[#0A4D3E] hover:bg-[#073A2F] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Tours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2.5 bg-black/35 hover:bg-black/50 text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full transition-all"
              >
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#0A3B32] flex items-center justify-center shadow-xs">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                </span>
                <span>
                  Watch Video <span className="text-[10px] sm:text-[11px] text-slate-300 ml-1">1:30 min</span>
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Row Inside Hero: Search Widget Container */}
          <div className="relative w-full flex items-end justify-between -mb-24 sm:-mb-28 lg:-mb-32 z-40 max-w-full">
            <div className="w-full lg:max-w-[1080px] xl:max-w-[1100px] min-w-0">
              {/* Folder-Style Attached Tabs */}
              <div className="grid grid-cols-4 w-full sm:flex sm:w-auto items-end gap-1 sm:gap-1.5 pl-0 sm:pl-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("tours");
                    setActiveDropdown(null);
                  }}
                  className={`w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "tours"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">Tours</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("packages");
                    setActiveDropdown(null);
                  }}
                  className={`w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "packages"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">Packages</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("transfers");
                    setActiveDropdown(null);
                  }}
                  className={`w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "transfers"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">Transfers</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("custom");
                    setActiveDropdown(null);
                  }}
                  className={`w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "custom"
                      ? "bg-[#063D34] text-white shadow-xs"
                      : "bg-[#E6ECE9] text-slate-700 hover:bg-[#d8e2de]"
                  }`}
                >
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate sm:hidden">Custom</span>
                  <span className="hidden sm:inline">Custom Trip</span>
                </button>
              </div>

              {/* Main White Search Bar */}
              <div className="relative bg-white rounded-b-2xl sm:rounded-tr-2xl shadow-[0_16px_40px_rgba(0,0,0,0.16)] border border-slate-100 p-3 sm:p-4 w-full">
                {/* 1. TOURS SEARCH FORM */}
                {activeTab === "tours" && (
                  <form
                    onSubmit={handleToursSubmit}
                    className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5 md:gap-0"
                  >
                    {/* Destination Field & Dropdown */}
                    <div className="relative flex-[1.3] min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "tourDest" ? null : "tourDest")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <MapPin className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Destination / Tour
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {tourDestination}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "tourDest" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Popular Destinations
                          </div>
                          {[
                            "Sigiriya & Cultural Triangle",
                            "Kandy & Tea Country",
                            "Ella & Scenic Highlands",
                            "Yala National Park Safari",
                            "Mirissa & South Coast",
                            "Galle Dutch Fort",
                            "Nuwara Eliya (Little England)",
                            "Bentota & West Coast Beaches",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setTourDestination(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                tourDestination === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {tourDestination === item && <Check className="w-3.5 h-3.5 text-[#063D34]" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Date Field & Dropdown */}
                    <div className="relative flex-1 min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "tourDate" ? null : "tourDate")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Travel Season / Month
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {tourDate}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "tourDate" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Select Season Window
                          </div>
                          {[
                            "Dec - Apr (Peak South Season)",
                            "May - Sep (East Coast Sunshine)",
                            "Next 30 Days (Immediate Trip)",
                            "November - December 2026",
                            "January - February 2027",
                            "March - April 2027",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setTourDate(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                tourDate === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {tourDate === item && <Check className="w-3.5 h-3.5 text-[#063D34]" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Travellers Field & Counter Dropdown */}
                    <div className="relative flex-1 min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "tourGuests" ? null : "tourGuests")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <User className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Travellers
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {adults} Adults{children > 0 ? `, ${children} Kids` : ""}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "tourGuests" && (
                        <div className="absolute top-full left-0 md:right-0 md:left-auto mt-2 w-full md:w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="flex items-center justify-between py-2 border-b border-slate-100">
                            <div>
                              <div className="text-xs font-bold text-slate-800">Adults</div>
                              <div className="text-[10px] text-slate-400">Age 12+ years</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => setAdults(Math.max(1, adults - 1))}
                                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-bold text-slate-900 w-4 text-center">
                                {adults}
                              </span>
                              <button
                                type="button"
                                onClick={() => setAdults(adults + 1)}
                                className="w-7 h-7 rounded-full bg-[#063D34] text-white flex items-center justify-center hover:bg-[#042A24]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between py-2 mt-2">
                            <div>
                              <div className="text-xs font-bold text-slate-800">Children</div>
                              <div className="text-[10px] text-slate-400">Under 12 years</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => setChildren(Math.max(0, children - 1))}
                                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-bold text-slate-900 w-4 text-center">
                                {children}
                              </span>
                              <button
                                type="button"
                                onClick={() => setChildren(children + 1)}
                                className="w-7 h-7 rounded-full bg-[#063D34] text-white flex items-center justify-center hover:bg-[#042A24]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setActiveDropdown(null)}
                            className="w-full mt-3 py-2 bg-[#063D34] text-white text-xs font-bold rounded-xl hover:bg-[#042A24] transition-colors"
                          >
                            Apply Travellers
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      className="bg-[#063D34] hover:bg-[#042A24] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 md:ml-2.5 cursor-pointer hover:shadow-md"
                    >
                      <span>Search Tours</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}

                {/* 2. PACKAGES SEARCH FORM */}
                {activeTab === "packages" && (
                  <form
                    onSubmit={handlePackagesSubmit}
                    className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5 md:gap-0"
                  >
                    {/* Package Style */}
                    <div className="relative flex-[1.3] min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "pkgStyle" ? null : "pkgStyle")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Briefcase className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Multi-Day Package
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {selectedPackage}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "pkgStyle" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-88 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Curated Itinerary Packages
                          </div>
                          {[
                            "10-Day Complete Sri Lanka Circuit",
                            "7-Day Classic Island Highlights",
                            "5-Day Cultural Triangle & Hill Country",
                            "8-Day Wildlife Safari & Southern Beaches",
                            "12-Day Luxury Boutique Honeymoon",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setSelectedPackage(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                selectedPackage === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {selectedPackage === item && <Check className="w-3.5 h-3.5 text-[#063D34]" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Duration */}
                    <div className="relative flex-1 min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "pkgDuration" ? null : "pkgDuration")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Clock className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Trip Duration
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {packageDuration}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "pkgDuration" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Choose Duration
                          </div>
                          {["5 - 7 Days", "8 - 10 Days", "11 - 14 Days", "15+ Days Extended"].map(
                            (item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setPackageDuration(item);
                                  setActiveDropdown(null);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                  packageDuration === item
                                    ? "bg-emerald-50 text-[#063D34] font-bold"
                                    : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <span>{item}</span>
                                {packageDuration === item && (
                                  <Check className="w-3.5 h-3.5 text-[#063D34]" />
                                )}
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Vehicle */}
                    <div className="relative flex-1 min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "pkgVehicle" ? null : "pkgVehicle")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Car className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Private Vehicle
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {packageVehicle}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "pkgVehicle" && (
                        <div className="absolute top-full left-0 md:right-0 md:left-auto mt-2 w-full md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Included Vehicle Standards
                          </div>
                          {[
                            "Private AC Sedan (1-2 Pax)",
                            "Toyota KDH Luxury Van (3-6 Pax)",
                            "Executive SUV / Mini-Coach (7+ Pax)",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setPackageVehicle(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                packageVehicle === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {packageVehicle === item && (
                                <Check className="w-3.5 h-3.5 text-[#063D34]" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      className="bg-[#063D34] hover:bg-[#042A24] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 md:ml-2.5 cursor-pointer hover:shadow-md"
                    >
                      <span>Explore Packages</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}

                {/* 3. TRANSFERS SEARCH FORM */}
                {activeTab === "transfers" && (
                  <form
                    onSubmit={handleTransferSubmit}
                    className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5 md:gap-0"
                  >
                    {/* Pickup Location */}
                    <div className="relative flex-[1.2] min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "pickup" ? null : "pickup")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Plane className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Pickup From
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {pickupLocation}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "pickup" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Pickup Point
                          </div>
                          {[
                            "Colombo Airport (CMB)",
                            "Colombo City Hotel",
                            "Negombo Beach Hotels",
                            "Galle / Unawatuna",
                            "Kandy Cultural City",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setPickupLocation(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                pickupLocation === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {pickupLocation === item && <Check className="w-3.5 h-3.5 text-[#063D34]" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Dropoff Destination */}
                    <div className="relative flex-[1.2] min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "dropoff" ? null : "dropoff")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <MapPin className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Drop-Off To
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {dropoffDestination}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "dropoff" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Direct Expressway Transfer
                          </div>
                          {[
                            "Mirissa / South Coast",
                            "Galle Dutch Fort",
                            "Sigiriya / Habarana",
                            "Kandy Cultural City",
                            "Ella Highlands",
                            "Hiriketiya / Tangalle",
                            "Bentota / Ahungalla",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setDropoffDestination(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                dropoffDestination === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {dropoffDestination === item && (
                                <Check className="w-3.5 h-3.5 text-[#063D34]" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Transfer Vehicle & Rates */}
                    <div className="relative flex-1 min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "transVeh" ? null : "transVeh")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Car className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Vehicle & Fare
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {transferVehicle}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "transVeh" && (
                        <div className="absolute top-full left-0 md:right-0 md:left-auto mt-2 w-full md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            All-Inclusive Rates (Tolls Included)
                          </div>
                          {[
                            "Sedan Car (1-2 Pax) · $80-$95",
                            "Toyota KDH Van (3-6 Pax) · $110-$130",
                            "Luxury VIP SUV · $150-$180",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setTransferVehicle(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                transferVehicle === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {transferVehicle === item && (
                                <Check className="w-3.5 h-3.5 text-[#063D34]" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button: Instant WhatsApp */}
                    <button
                      type="submit"
                      className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 md:ml-2.5 cursor-pointer hover:shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950 stroke-none" />
                      <span>Book on WhatsApp</span>
                    </button>
                  </form>
                )}

                {/* 4. CUSTOM TRIP FORM */}
                {activeTab === "custom" && (
                  <form
                    onSubmit={handleCustomSubmit}
                    className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5 md:gap-0"
                  >
                    {/* Destinations Selection */}
                    <div className="relative flex-[1.4] min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "customDest" ? null : "customDest")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Pick Places to Visit
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {customDestinations.length > 0
                              ? customDestinations.join(" · ")
                              : "Choose Destinations"}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "customDest" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                            Tap to Select Destinations:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "Sigiriya",
                              "Kandy",
                              "Ella",
                              "Yala Safari",
                              "Mirissa",
                              "Galle Fort",
                              "Nuwara Eliya",
                              "Trincomalee",
                              "Arugam Bay",
                              "Colombo",
                            ].map((dest) => {
                              const isSelected = customDestinations.includes(dest);
                              return (
                                <button
                                  key={dest}
                                  type="button"
                                  onClick={() => toggleCustomDestination(dest)}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                    isSelected
                                      ? "bg-[#063D34] text-white font-bold"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  {isSelected ? `✓ ${dest}` : `+ ${dest}`}
                                </button>
                              );
                            })}
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(null)}
                            className="w-full mt-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                          >
                            Done Selecting
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Trip Length */}
                    <div className="relative flex-1 min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "customLength" ? null : "customLength")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Clock className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Trip Length
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {customDuration}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "customLength" && (
                        <div className="absolute top-full left-0 mt-2 w-full md:w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Preferred Duration
                          </div>
                          {["3 - 5 Days", "6 - 8 Days", "7 - 9 Days", "10 - 14 Days", "15+ Days"].map(
                            (item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setCustomDuration(item);
                                  setActiveDropdown(null);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                  customDuration === item
                                    ? "bg-emerald-50 text-[#063D34] font-bold"
                                    : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <span>{item}</span>
                                {customDuration === item && (
                                  <Check className="w-3.5 h-3.5 text-[#063D34]" />
                                )}
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block w-px h-9 bg-slate-200 mx-2 shrink-0" />

                    {/* Travel Style */}
                    <div className="relative flex-1 min-w-0">
                      <div
                        onClick={() =>
                          setActiveDropdown(activeDropdown === "customStyle" ? null : "customStyle")
                        }
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <User className="w-4 h-4 text-[#063D34] shrink-0" />
                        <div className="flex flex-col min-w-0 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Travel Style
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                            {customStyle}
                          </span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-auto" />
                      </div>

                      {activeDropdown === "customStyle" && (
                        <div className="absolute top-full left-0 md:right-0 md:left-auto mt-2 w-full md:w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Select Style
                          </div>
                          {[
                            "Private Chauffeur Tour",
                            "Couples & Honeymoon Luxury",
                            "Family Vacation with Kids",
                            "Active Wildlife & Adventure",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setCustomStyle(item);
                                setActiveDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium text-left transition-colors ${
                                customStyle === item
                                  ? "bg-emerald-50 text-[#063D34] font-bold"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item}</span>
                              {customStyle === item && (
                                <Check className="w-3.5 h-3.5 text-[#063D34]" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button: Design Custom Trip */}
                    <button
                      type="submit"
                      className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 md:ml-2.5 cursor-pointer hover:shadow-md"
                    >
                      <Sparkles className="w-4 h-4 fill-slate-950 stroke-none" />
                      <span>Design Custom Trip</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
