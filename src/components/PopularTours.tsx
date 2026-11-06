"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  Heart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  CheckCircle2,
  Calendar,
  MapPin,
  ShieldCheck,
  Send,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { popularToursData, TourDetail } from "@/data/toursData";
import { siteConfig } from "@/data/siteConfig";

export default function PopularTours() {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [activeModalTour, setActiveModalTour] = useState<TourDetail | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"overview" | "itinerary" | "included" | "book">("overview");

  // Booking Form Inside Modal
  const [bookingDate, setBookingDate] = useState("");
  const [travelersCount, setTravelersCount] = useState(2);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestWhatsApp, setGuestWhatsApp] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openTourModal = (tour: TourDetail) => {
    setActiveModalTour(tour);
    setActiveModalTab("overview");
    setBookingSuccess(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <section id="popular-tours" className="py-12 lg:py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              POPULAR TOURS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#063D34] mt-1 font-normal">
              Handpicked Sri Lanka Tours
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#063D34] hover:text-[#10B981] transition-colors"
            >
              <span>View All Tours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Carousel Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous tours"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#063D34] hover:text-[#063D34] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                aria-label="Next tours"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#063D34] hover:text-[#063D34] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularToursData.map((tour) => {
            const isFav = favorites[tour.id];
            return (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div
                  className="relative h-48 w-full overflow-hidden cursor-pointer"
                  onClick={() => openTourModal(tour)}
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Best Seller Pill Badge (Card 3) */}
                  {tour.badge && (
                    <span className="absolute top-3 left-3 bg-[#F59E0B] text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {tour.badge}
                    </span>
                  )}

                  {/* Wishlist White Circle Heart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(tour.id);
                    }}
                    type="button"
                    aria-label="Save to wishlist"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-xs flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>

                  {/* White Rating Pill Overlapping Bottom Left (Matching Design) */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md shadow-md text-xs font-bold text-slate-800">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    <span>{tour.rating}</span>
                    <span className="text-slate-400 font-normal text-[11px]">
                      ({tour.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3
                      onClick={() => openTourModal(tour)}
                      className="font-bold text-slate-900 text-base group-hover:text-[#063D34] transition-colors leading-snug cursor-pointer"
                    >
                      {tour.title}
                    </h3>

                    {/* Specs List */}
                    <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{tour.tourType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & View Details Action */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block leading-none">
                        From
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#063D34]">
                        US$ {tour.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openTourModal(tour)}
                      className="inline-flex items-center gap-1.5 bg-[#063D34] hover:bg-[#042A24] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* COMPREHENSIVE TOUR DETAILS MODAL */}
      {activeModalTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col">
            {/* Modal Header Image */}
            <div className="relative h-60 sm:h-72 w-full shrink-0">
              <Image
                src={activeModalTour.image}
                alt={activeModalTour.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalTour(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badge & Location */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#0A3B32] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {activeModalTour.duration}
                </span>
                {activeModalTour.badge && (
                  <span className="bg-[#F59E0B] text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {activeModalTour.badge}
                  </span>
                )}
              </div>

              {/* Title & Specs on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs text-amber-300 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeModalTour.location}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    <span>{activeModalTour.rating} ({activeModalTour.reviewsCount} reviews)</span>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight">
                  {activeModalTour.title}
                </h3>
                <div className="mt-1 text-sm font-semibold text-emerald-200">
                  From US$ {activeModalTour.price} / person • {activeModalTour.tourType}
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 flex items-center gap-2 overflow-x-auto scrollbar-none">
              {[
                { id: "overview", label: "Overview & Highlights" },
                { id: "itinerary", label: "Full Itinerary" },
                { id: "included", label: "What's Included" },
                { id: "book", label: "Book / Inquire" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveModalTab(tab.id as any)}
                  className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                    activeModalTab === tab.id
                      ? "border-[#063D34] text-[#063D34]"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Tab Content */}
            <div className="p-5 sm:p-7 flex-1 space-y-6">
              {/* TAB 1: OVERVIEW */}
              {activeModalTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      About This Experience
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {activeModalTour.fullOverview}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Tour Highlights
                    </h4>
                    <ul className="space-y-2">
                      {activeModalTour.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between text-xs text-[#063D34]">
                    <div>
                      <span className="font-bold block">Need a custom pickup point?</span>
                      <span className="text-slate-600">We pick up from any hotel, villa, or resort island-wide.</span>
                    </div>
                    <button
                      onClick={() => setActiveModalTab("book")}
                      className="px-4 py-2 bg-[#063D34] text-white font-bold rounded-xl text-xs hover:bg-[#042A24]"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: DETAILED ITINERARY */}
              {activeModalTab === "itinerary" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Step-by-Step Schedule
                  </h4>
                  <div className="relative border-l-2 border-emerald-200 ml-3 space-y-6 pl-5 py-2">
                    {activeModalTour.itinerary.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[27px] top-0.5 w-3.5 h-3.5 rounded-full bg-[#063D34] ring-4 ring-white" />
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {step.time}
                        </span>
                        <h5 className="font-bold text-sm text-slate-900 mt-1">
                          {step.activity}
                        </h5>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: INCLUDED & EXCLUDED */}
              {activeModalTab === "included" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      What Is Included
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalTour.included.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-3 flex items-center gap-1.5">
                      <X className="w-4 h-4 text-rose-500" />
                      What Is Excluded
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalTour.excluded.map((exc, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-rose-50/50 text-xs text-slate-600">
                          <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Important Traveler Notes
                    </h4>
                    <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                      {activeModalTour.importantInfo.map((info, i) => (
                        <li key={i}>{info}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 4: BOOKING / INQUIRY */}
              {activeModalTab === "book" && (
                <div>
                  {bookingSuccess ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold font-serif text-[#063D34]">
                        Inquiry Received!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                        Thank you {guestName || "traveler"}. We have received your booking request for <strong>{activeModalTour.title}</strong>. Our tour manager will contact you at <strong>{guestEmail}</strong> within 3 hours to confirm availability and pickup details.
                      </p>

                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20EdgewayTours,%20I%20am%20inquiring%20about%20booking%20the%20${encodeURIComponent(
                            activeModalTour.title
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Instant Confirmation on WhatsApp</span>
                        </a>
                        <button
                          onClick={() => setActiveModalTour(null)}
                          className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-[#063D34]">
                        <div>
                          <strong>{activeModalTour.title}</strong>
                          <span className="block text-slate-500">From US$ {activeModalTour.price} per person</span>
                        </div>
                        <span className="bg-[#063D34] text-white px-2.5 py-1 rounded-md text-[11px] font-bold">
                          {activeModalTour.tourType}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Preferred Tour Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Number of Guests
                          </label>
                          <select
                            value={travelersCount}
                            onChange={(e) => setTravelersCount(Number(e.target.value))}
                            className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#063D34] bg-white"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, "9+ (Private Group)"].map((n, i) => (
                              <option key={i} value={typeof n === "number" ? n : 10}>
                                {n} {n === 1 ? "Guest" : "Guests"}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John Smith"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={guestEmail}
                            onChange={(e) => setGuestEmail(e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          WhatsApp / Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={guestWhatsApp}
                          onChange={(e) => setGuestWhatsApp(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">
                          Zero upfront payment required to inquire
                        </span>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#063D34] hover:bg-[#042A24] text-white text-xs font-bold shadow-md transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Booking Request</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Modal Bottom Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 px-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Licensed Sri Lanka Tourist Chauffeur-Guides</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Edgeway%20Tours,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    activeModalTour.title
                  )}%20tour.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
                <Link
                  href={`/tours/${activeModalTour.slug}`}
                  className="text-xs font-bold text-[#063D34] hover:underline inline-flex items-center gap-1"
                >
                  <span>Full Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setActiveModalTour(null)}
                  className="px-4 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
