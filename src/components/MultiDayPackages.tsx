"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  X,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
} from "lucide-react";
import { multiDayPackagesData, PackageDetail } from "@/data/toursData";

export default function MultiDayPackages() {
  const [activePackageModal, setActivePackageModal] = useState<PackageDetail | null>(null);
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryGuests, setInquiryGuests] = useState(2);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handlePackageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <section
      id="packages"
      className="relative py-12 lg:py-16 text-white overflow-hidden scroll-mt-24"
    >
      {/* 100% Full-bleed background panoramic image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sigiriya.jpg"
          alt="Sri Lanka Tropical Coastline Background"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#063D34]/85 via-[#063D34]/70 to-[#063D34]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.2em] block">
              MULTI-DAY SRI LANKA PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1 font-normal">
              Complete Sri Lanka Holidays
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
              Carefully designed itineraries to match your interests, budget and travel style.
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-white/20 transition-all self-start sm:self-auto shrink-0"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {multiDayPackagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-slate-800"
            >
              {/* Image & Tag */}
              <div
                className="relative h-44 w-full overflow-hidden cursor-pointer"
                onClick={() => {
                  setActivePackageModal(pkg);
                  setInquirySubmitted(false);
                }}
              >
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-3 py-0.5 rounded-full shadow-xs ${pkg.tagColor}`}
                >
                  {pkg.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    onClick={() => {
                      setActivePackageModal(pkg);
                      setInquirySubmitted(false);
                    }}
                    className="font-bold text-slate-900 text-base group-hover:text-[#0A3B32] transition-colors leading-snug cursor-pointer"
                  >
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Footer / Price & Button */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block leading-none">
                      From
                    </span>
                    <span className="text-base font-bold text-[#0A3B32]">
                      US$ {pkg.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActivePackageModal(pkg);
                      setInquirySubmitted(false);
                    }}
                    className="inline-flex items-center gap-1 bg-[#0A3B32] hover:bg-[#072620] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MULTI-DAY PACKAGE ITINERARY MODAL */}
      {activePackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col text-slate-900">
            {/* Header Image */}
            <div className="relative h-56 sm:h-64 w-full shrink-0">
              <Image
                src={activePackageModal.image}
                alt={activePackageModal.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

              <button
                onClick={() => setActivePackageModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className={`inline-block text-[10px] font-bold px-3 py-0.5 rounded-full mb-1.5 ${activePackageModal.tagColor}`}>
                  {activePackageModal.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight">
                  {activePackageModal.title}
                </h3>
                <div className="text-xs text-emerald-300 mt-0.5 flex items-center gap-3">
                  <span>{activePackageModal.duration}</span>
                  <span>•</span>
                  <span>From US$ {activePackageModal.price} per person</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 flex-1">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Holiday Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activePackageModal.overview}
                </p>
              </div>

              {/* Day-by-Day Timeline */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Day-by-Day Itinerary
                </h4>
                <div className="space-y-3">
                  {activePackageModal.days.map((d) => (
                    <div key={d.dayNumber} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#0A3B32] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        D{d.dayNumber}
                      </span>
                      <div>
                        <h5 className="font-bold text-xs text-slate-900">{d.title}</h5>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{d.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  What&apos;s Included In This Package
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activePackageModal.included.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                {inquirySubmitted ? (
                  <div className="text-center py-4 space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-sm text-[#0A3B32]">Package Inquiry Received!</h5>
                    <p className="text-xs text-slate-600">
                      We will email your full day-by-day customized PDF quotation to <strong>{inquiryEmail}</strong> within 24 hours.
                    </p>
                    <a
                      href={`https://wa.me/94771234567?text=Hello%20EdgewayTours,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(activePackageModal.title)}%20package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold mt-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handlePackageSubmit} className="space-y-3">
                    <div className="font-bold text-xs text-[#0A3B32] uppercase tracking-wider">
                      Request Full Itinerary & Custom Dates
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="p-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A3B32]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="p-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A3B32]"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-slate-500">Free cancellation & custom route edits</span>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-[#0A3B32] hover:bg-[#072620] text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        Get Free Itinerary PDF
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 px-6 flex items-center justify-between">
              <Link
                href={`/plan-your-trip`}
                className="text-xs font-bold text-[#0A3B32] hover:underline inline-flex items-center gap-1"
              >
                <span>Customize This Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setActivePackageModal(null)}
                className="px-4 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
