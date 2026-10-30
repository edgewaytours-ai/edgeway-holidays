"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PopularTours() {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const tours = [
    {
      id: "yala",
      title: "Yala Wildlife Safari",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      reviewsCount: "120+",
      duration: "Half-day / Full-day",
      tourType: "Private or Group",
      price: "75",
      badge: null,
    },
    {
      id: "sigiriya",
      title: "Sigiriya & Dambulla Tour",
      image: "https://images.unsplash.com/photo-1620619767280-73249d9629b5?q=80&w=800&auto=format&fit=crop",
      rating: "4.8",
      reviewsCount: "100+",
      duration: "Full day tour",
      tourType: "Private tour",
      price: "90",
      badge: null,
    },
    {
      id: "arugam",
      title: "Surf Lessons in Arugam Bay",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      reviewsCount: "150+",
      duration: "2 hours",
      tourType: "All equipment included",
      price: "35",
      badge: "Best Seller",
    },
    {
      id: "ella",
      title: "Ella Scenic Day Tour",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
      rating: "4.8",
      reviewsCount: "110+",
      duration: "Full day tour",
      tourType: "Private tour",
      price: "80",
      badge: null,
    },
  ];

  return (
    <section id="popular-tours" className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Design */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">
              Popular Tours
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#063D34] mt-1 font-normal">
              Handpicked Sri Lanka Tours
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#all-tours"
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
          {tours.map((tour) => {
            const isFav = favorites[tour.id];
            return (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div className="relative h-48 w-full overflow-hidden">
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
                    onClick={() => toggleFavorite(tour.id)}
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
                      ({tour.reviewsCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#063D34] transition-colors leading-snug">
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

                    <Link
                      href={`#tour-${tour.id}`}
                      className="inline-flex items-center gap-1.5 bg-[#063D34] hover:bg-[#042A24] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
