import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Star,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  Check,
  X,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Calendar,
  Send,
  ArrowLeft,
} from "lucide-react";
import { popularToursData, TourDetail } from "@/data/toursData";

export const dynamic = "force-static";

export function generateStaticParams() {
  return popularToursData.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = popularToursData.find((t) => t.slug === slug || t.id === slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200/80 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0A3B32]">Home</Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-[#0A3B32]">Tours</Link>
            <span>/</span>
            <span className="font-semibold text-slate-800 truncate">{tour.title}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative bg-[#063D34] text-white py-14 lg:py-18 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/10 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                  {tour.duration}
                </span>
                {tour.badge && (
                  <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    {tour.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight">
                {tour.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-100">
                <div className="flex items-center gap-1 text-amber-300 font-bold">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span>{tour.rating}</span>
                  <span className="text-white/80 font-normal">({tour.reviewsCount} reviews)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                  <span>{tour.location}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-emerald-300" />
                  <span>{tour.tourType}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content & Sticky Booking Form Grid */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left 2 Columns: Tour Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Featured Photo */}
                <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-md">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Overview */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                  <h2 className="text-xl font-bold font-serif text-[#0A3B32]">
                    Tour Overview
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {tour.fullOverview}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Tour Highlights
                    </h3>
                    <ul className="space-y-2">
                      {tour.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Itinerary Timeline */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl font-bold font-serif text-[#0A3B32] mb-6">
                    Full Day Schedule & Itinerary
                  </h2>
                  <div className="relative border-l-2 border-emerald-200 ml-3 space-y-6 pl-5 py-2">
                    {tour.itinerary.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[27px] top-0.5 w-3.5 h-3.5 rounded-full bg-[#063D34] ring-4 ring-white" />
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {step.time}
                        </span>
                        <h4 className="font-bold text-sm text-slate-900 mt-1">
                          {step.activity}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      What Is Included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tour.included.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-rose-800 mb-3 flex items-center gap-1.5">
                      <X className="w-4 h-4 text-rose-500" />
                      What Is Excluded
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tour.excluded.map((exc, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-rose-50/50 text-xs text-slate-600">
                          <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Booking / Inquiry Card */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-lg">
                  <div className="pb-4 border-b border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block leading-none">Starting from</span>
                      <span className="text-3xl font-extrabold text-[#063D34]">US$ {tour.price}</span>
                      <span className="text-xs text-slate-500 ml-1">/ person</span>
                    </div>
                    <span className="text-xs font-bold bg-emerald-50 text-[#063D34] px-2.5 py-1 rounded-md">
                      Best Price Guaranteed
                    </span>
                  </div>

                  {/* Fast Booking CTA */}
                  <div className="mt-5 space-y-3">
                    <a
                      href={`https://wa.me/94771234567?text=Hello%20EdgewayTours,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(
                        tour.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-sm hover:brightness-105 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Instantly on WhatsApp</span>
                    </a>

                    <Link
                      href={`/plan-your-trip?tour=${tour.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#063D34] hover:bg-[#042A24] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                    >
                      <span>Customize / Request Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Free cancellation up to 24 hrs before</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>Private vehicle & certified driver-guide</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>Duration: {tour.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Back to Tours link */}
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#063D34] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Browse All Other Tours</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
