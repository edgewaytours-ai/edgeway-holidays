import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Palmtree, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

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
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: 3 Reviews Matching Width of Destinations (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3.5 gap-3">
              <div>
                <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                  Traveller Experiences
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#063D34] mt-0.5 font-normal">
                  What Our Guests Say
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="#reviews"
                  className="text-xs font-semibold text-[#063D34] hover:text-[#10B981] transition-colors"
                >
                  View All Reviews →
                </Link>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Previous review"
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#063D34] transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#063D34] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonials 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-grow">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFDFB] rounded-2xl p-4 border border-slate-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* User Header */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-slate-200">
                        <Image
                          src={rev.avatar}
                          alt={rev.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                          {rev.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1">
                          <span>{rev.flag}</span>
                          <span>{rev.country}</span>
                        </span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
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

          {/* Right Column: CTA Matching Width of Why Us (5 cols) */}
          <div
            id="plan-trip"
            className="lg:col-span-5 rounded-2xl bg-[#072B24] text-white p-6 relative overflow-hidden flex flex-col justify-between shadow-md"
          >
            {/* Background tropical glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
                Ready for your next adventure?
              </span>

              <h3 className="text-xl sm:text-2xl font-serif font-normal leading-tight mt-1.5 text-white">
                Plan Your Sri Lanka Trip with Local Experts
              </h3>

              <p className="text-xs text-slate-300 font-light mt-2 leading-relaxed">
                Tell us where you want to go and what you love. We craft a completely customized itinerary tailored to your schedule.
              </p>
            </div>

            <div className="relative z-10 mt-6 space-y-2.5">
              <Link
                href="/plan-your-trip"
                className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0ea271] text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-full w-full shadow-md transition-transform hover:scale-[1.02]"
              >
                <span>Customize Your Trip Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Edgeway%20Tours,%20I%20would%20like%20to%20plan%20a%20private%20trip%20to%20Sri%20Lanka.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full w-full shadow-md transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp ({siteConfig.whatsappDisplay})</span>
              </a>

              {/* Handwritten Script Sign-off */}
              <div className="mt-3 flex items-center justify-end gap-1.5 text-white/90">
                <span className="font-script text-base rotate-[-3deg]">
                  Explore Sri Lanka Differently
                </span>
                <Palmtree className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
