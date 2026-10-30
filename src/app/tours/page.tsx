"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Star,
  Clock,
  Users,
  Heart,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [bookingTour, setBookingTour] = useState<string | null>(null);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allTours = [
    {
      id: "yala",
      title: "Yala Wildlife Safari",
      category: "wildlife",
      image: "/images/tour-yala.jpg",
      rating: "4.9",
      reviewsCount: "120+",
      duration: "Half-day / Full-day",
      tourType: "Private or Group",
      price: "75",
      badge: null,
      description: "Track elusive Sri Lankan leopards, wild Asian elephants, and sloth bears in Sri Lanka's premier national park.",
    },
    {
      id: "sigiriya",
      title: "Sigiriya & Dambulla Tour",
      category: "culture",
      image: "/images/tour-sigiriya.jpg",
      rating: "4.8",
      reviewsCount: "100+",
      duration: "Full day tour",
      tourType: "Private tour",
      price: "90",
      badge: null,
      description: "Climb the ancient 5th-century Lion Rock fortress and explore the sacred painted cave temples of Dambulla.",
    },
    {
      id: "arugam",
      title: "Surf Lessons in Arugam Bay",
      category: "beach",
      image: "/images/tour-arugam.jpg",
      rating: "4.9",
      reviewsCount: "150+",
      duration: "2 hours",
      tourType: "All equipment included",
      price: "35",
      badge: "Best Seller",
      description: "Catch world-class right-hand point breaks with ISA certified local surf instructors in Arugam Bay.",
    },
    {
      id: "ella",
      title: "Ella Scenic Day Tour",
      category: "nature",
      image: "/images/tour-ella.jpg",
      rating: "4.8",
      reviewsCount: "110+",
      duration: "Full day tour",
      tourType: "Private tour",
      price: "80",
      badge: null,
      description: "Visit the Nine Arch Bridge, hike Little Adam's Peak, and witness the roaring Ravana Falls in the misty highlands.",
    },
    {
      id: "pkg-highlights",
      title: "Sri Lanka Highlights Classic Tour",
      category: "multiday",
      image: "/images/tour-ella.jpg",
      rating: "5.0",
      reviewsCount: "85+",
      duration: "7 Days • 6 Nights",
      tourType: "Complete Package",
      price: "690",
      badge: "Popular Package",
      description: "The quintessential Sri Lanka journey: Sigiriya, Kandy Temple of the Tooth, scenic train, and coastal beaches.",
    },
    {
      id: "pkg-adventure",
      title: "Coast & Adventure Expedition",
      category: "multiday",
      image: "/images/pkg-adventure.jpg",
      rating: "4.9",
      reviewsCount: "64+",
      duration: "10 Days • 9 Nights",
      tourType: "Adventure & Watersports",
      price: "890",
      badge: "Adventure",
      description: "White water river rafting in Kitulgala, surfing in Arugam Bay, and trekking the knuckles mountain range.",
    },
    {
      id: "pkg-family",
      title: "Family Discovery Tour",
      category: "multiday",
      image: "/images/pkg-family.jpg",
      rating: "4.9",
      reviewsCount: "92+",
      duration: "8 Days • 7 Nights",
      tourType: "Family Friendly",
      price: "990",
      badge: "Family Favorite",
      description: "Gentle nature walks, open-top elephant safaris, turtle conservation hatcheries, and child-friendly luxury stays.",
    },
    {
      id: "pkg-luxury",
      title: "Sri Lanka Luxury Romantic Escape",
      category: "multiday",
      image: "/images/pkg-luxury.jpg",
      rating: "5.0",
      reviewsCount: "48+",
      duration: "Custom Itinerary",
      tourType: "Private Chauffeur & 5-Star",
      price: "1,290",
      badge: "Luxury VIP",
      description: "Private chauffeur-driven luxury travel, private tea planter bungalows, helicopter transfers, and secluded beach villas.",
    },
  ];

  const filteredTours = allTours.filter((tour) => {
    const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory;
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFB]">
      <Navbar />

      <main className="flex-grow">
        {/* Page Hero Banner */}
        <section className="relative py-16 bg-[#041A16] text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/hero-sigiriya.jpg"
              alt="Sri Lanka Tours"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#041A16]/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 tracking-[0.25em] uppercase">
              Curated Sri Lanka Journeys
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif mt-2 font-normal">
              Find Your Perfect Sri Lanka Tour
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              From exciting wildlife game drives to private 10-day island discovery packages, explore Sri Lanka with dedicated local guides.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar Section */}
        <section className="py-8 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {[
                  { id: "all", label: "All Tours" },
                  { id: "wildlife", label: "Wildlife & Safari" },
                  { id: "culture", label: "Culture & Heritage" },
                  { id: "beach", label: "Beach & Surf" },
                  { id: "nature", label: "Nature & Hiking" },
                  { id: "multiday", label: "Multi-Day Packages" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? "bg-[#063D34] text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by tour name or keyword..."
                  className="w-full bg-slate-50 border border-slate-200 text-xs rounded-full py-2.5 pl-10 pr-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Showing {filteredTours.length} Experiences
              </span>
              <span className="text-xs text-slate-400">
                Prices in USD • All taxes & permits included
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTours.map((tour) => {
                const isFav = favorites[tour.id];
                return (
                  <div
                    key={tour.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Image Area */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {tour.badge && (
                        <span className="absolute top-3 left-3 bg-[#F59E0B] text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                          {tour.badge}
                        </span>
                      )}

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

                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md shadow-md text-xs font-bold text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                        <span>{tour.rating}</span>
                        <span className="text-slate-400 font-normal text-[11px]">
                          ({tour.reviewsCount})
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base group-hover:text-[#063D34] transition-colors leading-snug">
                          {tour.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed font-light">
                          {tour.description}
                        </p>

                        <div className="mt-4 space-y-1.5 text-xs text-slate-600">
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

                      {/* Pricing and Action */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block leading-none uppercase tracking-wider">
                            From
                          </span>
                          <span className="text-lg font-bold text-[#063D34]">
                            US$ {tour.price}
                          </span>
                        </div>

                        <button
                          onClick={() => setBookingTour(tour.title)}
                          className="inline-flex items-center gap-1.5 bg-[#063D34] hover:bg-[#042A24] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                        >
                          <span>Inquire Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modal for Quick Tour Inquiry */}
        {bookingTour && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Direct Tour Booking
                </span>
                <button
                  onClick={() => setBookingTour(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                Inquire about {bookingTour}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Leave your preferred dates and our local trip designer will confirm availability within 2 hours.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you! Your inquiry for ${bookingTour} has been sent to our team.`);
                  setBookingTour(null);
                }}
                className="mt-5 space-y-3"
              >
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Travellers
                    </label>
                    <input
                      type="number"
                      defaultValue={2}
                      min={1}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063D34]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#063D34] hover:bg-[#042A24] text-white font-bold text-xs py-3 rounded-xl mt-4 shadow-md transition-all"
                >
                  Send Inquiry to Sri Lanka Team
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
