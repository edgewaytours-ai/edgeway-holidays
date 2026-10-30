import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Palmtree } from "lucide-react";

export default function ReviewsAndCta() {
  const reviews = [
    {
      name: "Emma R.",
      country: "Australia",
      flag: "🇦🇺",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      text: "“An amazing experience! The safari was incredible and our guide was so knowledgeable. Everything was well organized.”",
    },
    {
      name: "David K.",
      country: "United Kingdom",
      flag: "🇬🇧",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      text: "“We had the best time in Sri Lanka with EdgewayTours. Surfing in Arugam Bay, visiting Ella and Sigiriya - all perfectly arranged!”",
    },
    {
      name: "Sophie L.",
      country: "Canada",
      flag: "🇨🇦",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      text: "“Professional, responsive and genuinely caring. They created a custom itinerary for our family and it was a trip of a lifetime.”",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Reviews (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
                  Traveller Experiences
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#0A3B32] mt-1 font-normal">
                  What Our Guests Say
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="#reviews"
                  className="text-xs font-semibold text-[#0A3B32] hover:text-[#10B981] transition-colors"
                >
                  View All Reviews →
                </Link>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label="Previous review"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0A3B32] transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0A3B32] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonials 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFDFB] rounded-2xl p-5 border border-slate-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* User Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200">
                        <Image
                          src={rev.avatar}
                          alt={rev.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          {rev.name}
                        </h4>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <span>{rev.flag}</span>
                          <span>{rev.country}</span>
                        </span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      {rev.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Impact CTA Card (4 cols) */}
          <div
            id="plan-trip"
            className="lg:col-span-4 rounded-3xl bg-[#092B25] text-white p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            {/* Subtle background tropical glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[11px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
                Ready for your next adventure?
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-normal leading-tight mt-3 text-white">
                Plan Your Sri Lanka Trip with Local Experts
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light mt-3 leading-relaxed">
                Tell us where you want to go and what you love. We craft a completely customized itinerary tailored to your schedule.
              </p>
            </div>

            <div className="relative z-10 mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0ea271] text-slate-950 font-bold text-sm px-6 py-3.5 rounded-full w-full shadow-lg transition-transform hover:scale-[1.02]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Handwritten Script Sign-off */}
              <div className="mt-6 flex items-center justify-end gap-2 text-white/90">
                <span className="font-script text-xl rotate-[-3deg]">
                  Explore Sri Lanka Differently
                </span>
                <Palmtree className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
