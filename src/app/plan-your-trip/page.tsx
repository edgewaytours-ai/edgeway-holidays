"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Compass,
  Check,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  ShieldCheck,
  Send,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function PlanYourTripPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    "Sigiriya",
    "Ella",
  ]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([
    "Wildlife Safaris",
    "Culture & Ancient Fortresses",
  ]);
  const [duration, setDuration] = useState<string>("7-9 Days");
  const [travelMonth, setTravelMonth] = useState<string>("Within 3 Months");
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [hotelTier, setHotelTier] = useState<string>("Boutique & Eco-Lodges (4-Star)");
  const [travelPace, setTravelPace] = useState<string>("Balanced (Highlights + Leisure)");

  // Contact Info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const destinationOptions = [
    { id: "Sigiriya", label: "Sigiriya & Dambulla", desc: "Ancient Lion Rock & Cave Temples", icon: "🏛️" },
    { id: "Ella", label: "Ella & Tea Highlands", desc: "Nine Arch Bridge & Mountain Views", icon: "🚂" },
    { id: "Kandy", label: "Kandy Cultural City", desc: "Temple of the Sacred Tooth & Lake", icon: "🌺" },
    { id: "Yala", label: "Yala National Park", desc: "Leopard Safari & Coastal Wilderness", icon: "🐆" },
    { id: "Mirissa", label: "Mirissa & South Coast", desc: "Whale Watching & Coconut Palm Beach", icon: "🐋" },
    { id: "Arugam", label: "Arugam Bay (East Coast)", desc: "World-Class Surfing & Chill Cafes", icon: "🏄" },
    { id: "Trincomalee", label: "Trincomalee & Nilaveli", desc: "Pristine White Sands & Pigeon Island", icon: "🤿" },
    { id: "Galle", label: "Galle Dutch Fort", desc: "Colonial Ramparts & Boutique Cobblestones", icon: "🏰" },
    { id: "NuwaraEliya", label: "Nuwara Eliya", desc: "Little England & Ceylon Tea Hills", icon: "🍃" },
  ];

  const experienceOptions = [
    { id: "Wildlife Safaris", label: "Wildlife & Jeep Safaris", desc: "Leopards, elephants & exotic birds" },
    { id: "Culture & Ancient Fortresses", label: "Ancient Kingdoms & Culture", desc: "Palaces, temples & archaeological wonders" },
    { id: "Beach & Surfing", label: "Beaches & Ocean Escapes", desc: "Surf breaks, coral snorkeling & sunsets" },
    { id: "Mountain Trekking & Trains", label: "Highland Trekking & Scenic Trains", desc: "Nine Arch Bridge train ride & peak hikes" },
    { id: "Village Feasts & Cooking", label: "Village Feasts & Clay Pot Cooking", desc: "Authentic local meals with rural families" },
  ];

  const toggleDestination = (name: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  const toggleExperience = (exp: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Header Hero */}
        <section className="relative bg-[#063D34] text-white py-14 lg:py-18 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Free Custom Itinerary & Quote</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
              Design Your Dream <span className="text-amber-400">Sri Lanka Trip</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Tell us your preferences, travel dates, and travel style. Our local travel designers in Colombo will create a customized day-by-day itinerary with verified hotel suggestions and transparent pricing.
            </p>
          </div>
        </section>

        {/* Step Indicator Bar */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between text-xs font-bold text-slate-500">
            <button
              onClick={() => setCurrentStep(1)}
              className={`flex items-center gap-2 ${currentStep >= 1 ? "text-[#0A3B32]" : ""}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  currentStep >= 1 ? "bg-[#0A3B32] text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                1
              </div>
              <span className="hidden sm:inline">Destinations</span>
            </button>
            <div className={`h-0.5 flex-1 mx-3 ${currentStep >= 2 ? "bg-[#0A3B32]" : "bg-slate-200"}`} />

            <button
              onClick={() => setCurrentStep(2)}
              className={`flex items-center gap-2 ${currentStep >= 2 ? "text-[#0A3B32]" : ""}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  currentStep >= 2 ? "bg-[#0A3B32] text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                2
              </div>
              <span className="hidden sm:inline">Experiences</span>
            </button>
            <div className={`h-0.5 flex-1 mx-3 ${currentStep >= 3 ? "bg-[#0A3B32]" : "bg-slate-200"}`} />

            <button
              onClick={() => setCurrentStep(3)}
              className={`flex items-center gap-2 ${currentStep >= 3 ? "text-[#0A3B32]" : ""}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  currentStep >= 3 ? "bg-[#0A3B32] text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                3
              </div>
              <span className="hidden sm:inline">Trip Details</span>
            </button>
            <div className={`h-0.5 flex-1 mx-3 ${currentStep >= 4 ? "bg-[#0A3B32]" : "bg-slate-200"}`} />

            <button
              onClick={() => setCurrentStep(4)}
              className={`flex items-center gap-2 ${currentStep >= 4 ? "text-[#0A3B32]" : ""}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  currentStep >= 4 ? "bg-[#0A3B32] text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                4
              </div>
              <span className="hidden sm:inline">Get Quote</span>
            </button>
          </div>
        </section>

        {/* Multi-Step Interactive Form Content */}
        <section className="py-10 lg:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-10">
              {/* STEP 1: DESTINATIONS */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                      Step 1 of 4
                    </span>
                    <h2 className="text-2xl font-bold font-serif text-[#0A3B32] mt-1">
                      Where would you like to visit?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Select all regions and highlights that interest you (or leave blank if you&apos;d like us to recommend).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {destinationOptions.map((dest) => {
                      const isSelected = selectedDestinations.includes(dest.id);
                      return (
                        <div
                          key={dest.id}
                          onClick={() => toggleDestination(dest.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? "border-[#063D34] bg-emerald-50/60 shadow-xs ring-2 ring-[#063D34]/20"
                              : "border-slate-200 hover:border-slate-300 bg-white"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <span className="text-2xl mb-2">{dest.icon}</span>
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${
                                isSelected
                                  ? "bg-[#063D34] text-white"
                                  : "border border-slate-300 text-transparent"
                              }`}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900">{dest.label}</h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">{dest.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      {selectedDestinations.length} destination{selectedDestinations.length === 1 ? "" : "s"} selected
                    </span>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063D34] hover:bg-[#042A24] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                    >
                      <span>Next: Select Experiences</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: EXPERIENCES */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                      Step 2 of 4
                    </span>
                    <h2 className="text-2xl font-bold font-serif text-[#0A3B32] mt-1">
                      What travel styles excite you?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Pick the activities and memories you want included in your Sri Lanka adventure.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {experienceOptions.map((exp) => {
                      const isSelected = selectedExperiences.includes(exp.id);
                      return (
                        <div
                          key={exp.id}
                          onClick={() => toggleExperience(exp.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? "border-[#063D34] bg-emerald-50/60 shadow-xs ring-2 ring-[#063D34]/20"
                              : "border-slate-200 hover:border-slate-300 bg-white"
                          }`}
                        >
                          <div>
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900">{exp.label}</h4>
                            <p className="text-xs text-slate-500 mt-0.5">{exp.desc}</p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 ${
                              isSelected
                                ? "bg-[#063D34] text-white"
                                : "border border-slate-300 text-transparent"
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063D34] hover:bg-[#042A24] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                    >
                      <span>Next: Duration & Hotel Tier</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: TRIP DETAILS */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                      Step 3 of 4
                    </span>
                    <h2 className="text-2xl font-bold font-serif text-[#0A3B32] mt-1">
                      Dates, Duration & Accommodation
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Help us match the right pace, vehicle size, and hotel categories for your party.
                    </p>
                  </div>

                  {/* Duration Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Trip Duration
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {["3 - 5 Days", "6 - 8 Days", "9 - 12 Days", "13+ Days"].map((dur) => (
                        <button
                          key={dur}
                          type="button"
                          onClick={() => setDuration(dur)}
                          className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                            duration === dur
                              ? "bg-[#063D34] text-white border-[#063D34]"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Travel Window */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      When do you plan to travel?
                    </label>
                    <select
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#063D34] bg-white text-slate-900"
                    >
                      <option>Within 1 Month</option>
                      <option>Within 3 Months</option>
                      <option>In 3 - 6 Months</option>
                      <option>Later this Year</option>
                      <option>Just browsing / flexible</option>
                    </select>
                  </div>

                  {/* Travelers Count */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Adults (12+ yrs)
                      </label>
                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-sm text-slate-900">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Children (Under 12)
                      </label>
                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-sm text-slate-900">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Tier */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Preferred Hotel Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { title: "Comfort 3-Star", sub: "Clean, scenic local hotels" },
                        { title: "Boutique & Eco-Lodges (4-Star)", sub: "Charming tea bungalows & villas" },
                        { title: "5-Star Luxury & Resorts", sub: "Premium luxury island sanctuaries" },
                      ].map((tier) => (
                        <button
                          key={tier.title}
                          type="button"
                          onClick={() => setHotelTier(tier.title)}
                          className={`p-3.5 rounded-xl text-left border transition-all ${
                            hotelTier === tier.title
                              ? "bg-[#063D34] text-white border-[#063D34]"
                              : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <div className="font-bold text-xs">{tier.title}</div>
                          <div className={`text-[10px] mt-0.5 ${hotelTier === tier.title ? "text-emerald-200" : "text-slate-500"}`}>
                            {tier.sub}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063D34] hover:bg-[#042A24] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & FINAL SUBMISSION */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                      Step 4 of 4
                    </span>
                    <h2 className="text-2xl font-bold font-serif text-[#0A3B32] mt-1">
                      Where should we send your custom itinerary?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Our travel designers will formulate your proposal and email you within 24 hours. No obligation.
                    </p>
                  </div>

                  {/* Summary of selections */}
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-[#0A3B32]">
                    <div className="font-bold uppercase tracking-wider text-[10px] text-emerald-800 mb-1">
                      Itinerary Summary
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <span><strong>Duration:</strong> {duration}</span>
                      <span><strong>Party:</strong> {adults} Adults, {children} Kids</span>
                      <span><strong>Hotels:</strong> {hotelTier}</span>
                      <span><strong>Timing:</strong> {travelMonth}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#063D34] text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#063D34] text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+44 7911 123456"
                        className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#063D34] text-slate-900"
                      />
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Helpful for rapid itinerary sharing & instant questions
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g. United Kingdom, Australia, USA"
                        className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#063D34] text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Special Requests, Dietary Needs, or Must-See Sights
                    </label>
                    <textarea
                      rows={3}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Celebrating our anniversary, interested in tea picking, vegetarian food..."
                      className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#063D34] text-slate-900"
                    />
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs sm:text-sm font-extrabold shadow-lg transition-transform hover:scale-105"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Free Custom Itinerary</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 text-center shadow-2xl relative">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-serif text-[#0A3B32]">
              Ayubowan, {fullName || "Traveler"}!
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We have received your custom Sri Lanka trip request. Our local tour designer will formulate your tailored day-by-day itinerary and email it to <strong className="text-slate-900">{email}</strong> within 24 hours.
            </p>

            <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-left space-y-1 text-slate-600">
              <div><strong>Trip Length:</strong> {duration}</div>
              <div><strong>Travelers:</strong> {adults} Adults, {children} Children</div>
              <div><strong>Hotels:</strong> {hotelTier}</div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/94771234567?text=Hello%20EdgewayTours,%20I%20just%20submitted%20a%20trip%20request%20on%20your%20website!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-sm hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <Link
                href="/"
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 py-2"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
