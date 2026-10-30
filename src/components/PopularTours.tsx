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
      rating: 4.9,
      reviewsCount: 120,
      duration: "Half-day / Full-day",
      tourType: "Private or Group",
      price: 75,
      badge: null,
    },
    {
      id: "sigiriya",
      title: "Sigiriya & Dambulla Tour",
      image: "https://images.unsplash.com/photo-1620619767280-73249d9629b5?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      reviewsCount: 100,
      duration: "Full day tour",
      tourType: "Private tour",
      price: 90,
      badge: null,
    },
    {
      id: "arugam",
      title: "Surf Lessons in Arugam Bay",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
      rating: 4.9,
      reviewsCount: 150,
      duration: "2 hours",
      tourType: "All equipment included",
      price: 35,
      badge: "Best Seller",
    },
    {
      id: "ella",
      title: "Ella Scenic Day Tour",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      reviewsCount: 110,
      duration: "Full day tour",
      tourType: "Private tour",
      price: 80,
      badge: null,
    },
  ];

  return (
    <section id="popular-tours" className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
              Popular Tours
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0A3B32] mt-1 font-normal">
              Handpicked Sri Lanka Tours
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#all-tours"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A3B32] hover:text-[#10B981] transition-colors"
            >
              <span>View All Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Carousel Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous tours"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0A3B32] hover:text-[#0A3B32] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                aria-label="Next tours"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0A3B32] hover:text-[#0A3B32] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tours.map((tour) => {
            const isFav = favorites[tour.id];
            return (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badges */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* Badge */}
                  {tour.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-[#F59E0B] text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {tour.badge}
                    </span>
                  )}

                  {/* Favorite Heart Button */}
                  <button
                    onClick={() => toggleFavorite(tour.id)}
                    type="button"
                    aria-label="Save to wishlist"
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isFav ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>

                  {/* Rating Tag */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-white text-[11px] font-semibold">
                    <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                    <span>{tour.rating}</span>
                    <span className="text-slate-300 font-normal">
                      ({tour.reviewsCount}+ reviews)
                    </span>
                  </div>
                </div>

                {/* Tour Info */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#0A3B32] transition-colors leading-snug">
                      {tour.title}
                    </h3>

                    <div className="mt-2.5 space-y-1 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{tour.tourType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block leading-none">
                        From
                      </span>
                      <span className="text-base font-bold text-[#0A3B32]">
                        US$ {tour.price}
                      </span>
                    </div>

                    <Link
                      href={`#tour-${tour.id}`}
                      className="inline-flex items-center gap-1 bg-[#0A3B32] hover:bg-[#072B24] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors shadow-xs"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
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
