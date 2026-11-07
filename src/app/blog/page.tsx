"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  User,
  Sparkles,
  ChevronRight,
  Share2,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "guide" | "wildlife" | "culture" | "surf" | "food" | "cost" | "itinerary";
  categoryLabel: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
  "id": "private-car-with-driver-vs-self-drive-sri-lanka",
  "title": "Private Car with Driver vs Self-Drive Sri Lanka (2027)",
  "excerpt": "Planning a trip? Compare private car with driver vs self-drive in Sri Lanka. Fuel, mountain roads, traffic scams, and real costs in our 2027 guide.",
  "category": "cost",
  "categoryLabel": "Transport & Cost",
  "image": "/images/private-car-with-driver-vs-self-drive-sri-lanka.jpg",
  "date": "November 2026",
  "readTime": "8 min read",
  "author": "Ruwan Senanayake",
  "featured": false
},
  {
    id: "hire-driver-in-sri-lanka",
    title: "Hire Driver in Sri Lanka: 7 Mistakes (Avoid Scams)",
    excerpt:
      "Planning to hire a driver in Sri Lanka? Avoid these 7 costly mistakes, commission scams, and hidden fees. Read our 2027 guide to book with peace of mind.",
    category: "guide",
    categoryLabel: "Driver & Transport",
    image: "/images/hire-driver-in-sri-lanka.jpg",
    date: "November 2026",
    readTime: "8 min read",
    author: "Malik Fernando",
    featured: true,
  },
  {
    id: "sri-lanka-10-day-itinerary-private-driver",
    title: "Sri Lanka 10-Day Private Tour Itinerary with Driver (2027 Complete Guide)",
    excerpt:
      "The ultimate 10-day Sri Lanka itinerary covering Sigiriya, Kandy, Ella scenic train, Yala safari, and Galle with an English-speaking private driver.",
    category: "guide",
    categoryLabel: "Tour Itinerary",
    image: "/images/hero-sigiriya.jpg",
    date: "November 2026",
    readTime: "9 min read",
    author: "Edgeway Tours Specialist",
    featured: false,
  },
  {
    id: "cost-of-private-driver-sri-lanka",
    title: "Cost of Private Driver in Sri Lanka (2027 Price Guide & Hidden Fees)",
    excerpt:
      "How much does a private driver in Sri Lanka really cost? Transparent breakdown of daily rates, vehicle types, tolls, tips, and avoiding hidden charges.",
    category: "guide",
    categoryLabel: "Cost & Budget",
    image: "/images/tour-ella.jpg",
    date: "November 2026",
    readTime: "7 min read",
    author: "Pradeep Wickramasinghe",
    featured: false,
  },
  {
    id: "scenic-train-kandy-ella",
    title: "The Complete Guide to the Scenic Blue Train from Kandy to Ella",
    excerpt:
      "Everything you need to know about booking 1st vs 2nd class reserved seats, timetable schedules, crossing the iconic 1921 Nine Arch Bridge, and baggage transfers.",
    category: "guide",
    categoryLabel: "Train Journeys",
    image: "/images/tour-ella.jpg",
    date: "October 2026",
    readTime: "6 min read",
    author: "Ruwan Senanayake",
    featured: false,
  },
  {
    id: "best-time-weather-guide",
    title: "Best Time to Visit Sri Lanka: Month-by-Month Weather Breakdown",
    excerpt:
      "Navigating Sri Lanka's unique dual monsoon system. Learn why there is always a sunny beach waiting on either the southern coast or the eastern coast no matter what month you arrive.",
    category: "guide",
    categoryLabel: "Travel Planning",
    image: "/images/hero-sigiriya.jpg",
    date: "October 18, 2024",
    readTime: "8 min read",
    author: "Malik Fernando",
    featured: false,
  },
  {
    id: "wildlife-safaris-beyond-yala",
    title: "Top 7 Wildlife Safaris in Sri Lanka: Beyond Just Yala",
    excerpt:
      "From the world-famous Minneriya elephant gathering to the quiet leopard trails of Wilpattu and blue whale pods off Mirissa, explore Sri Lanka's biodiversity beyond the crowded tracks.",
    category: "wildlife",
    categoryLabel: "Wildlife & Safari",
    image: "/images/tour-yala.jpg",
    date: "October 12, 2024",
    readTime: "7 min read",
    author: "Ruwan Senanayake",
    featured: false,
  },
  {
    id: "arugam-bay-surf-guide",
    title: "A Surfer's Guide to Arugam Bay & The Southern Coast",
    excerpt:
      "World-class right-hand point breaks, laid-back beach cafes, sunset lagoon boat rides, and season-by-season swell breakdowns for beginner to advanced wave riders.",
    category: "surf",
    categoryLabel: "Surfing & Ocean",
    image: "/images/tour-arugam.jpg",
    date: "October 05, 2024",
    readTime: "5 min read",
    author: "Malik Fernando",
    featured: false,
  },
  {
    id: "temple-etiquette-clothing",
    title: "What to Wear at Sri Lankan Temples: Respectful Traveler's Guide",
    excerpt:
      "Essential cultural etiquette for visiting Sigiriya, Dambulla Cave Temple, and the sacred Temple of the Tooth in Kandy. Dress codes, shoe removal, and photography ethics explained.",
    category: "culture",
    categoryLabel: "Culture & Etiquette",
    image: "/images/exp-culture.jpg",
    date: "September 28, 2024",
    readTime: "4 min read",
    author: "Pradeep Wickramasinghe",
    featured: false,
  },
  {
    id: "authentic-sri-lankan-food",
    title: "10 Authentic Sri Lankan Dishes You Must Try Beyond Rice & Curry",
    excerpt:
      "Crispy egg hoppers, spicy coconut pol sambol, sizzling street kottu roti, and clay-pot sour fish ambul thiyal: embark on an unforgettable culinary journey across the island.",
    category: "food",
    categoryLabel: "Food & Culinary",
    image: "/images/exp-local.jpg",
    date: "September 20, 2024",
    readTime: "6 min read",
    author: "Pradeep Wickramasinghe",
    featured: false,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Header Hero */}
        <section className="relative bg-[#063D34] text-white py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <BookOpen className="w-3.5 h-3.5" />
                <span>The Edgeway Journal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                Sri Lanka Travel Stories, <br />
                <span className="text-amber-400">Guides & Local Insights</span>
              </h1>
              <p className="mt-4 text-base text-emerald-100/90 leading-relaxed">
                Expert tips, curated travel stories, and practical advice from our native guides to help you experience Sri Lanka to the fullest.
              </p>
            </div>

            {/* Filter Tabs & Search */}
            <div className="mt-8 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {[
                  { id: "all", label: "All Stories" },
                  { id: "guide", label: "Travel Guides" },
                  { id: "wildlife", label: "Wildlife" },
                  { id: "culture", label: "Culture" },
                  { id: "surf", label: "Surf & Beach" },
                  { id: "food", label: "Food & Culinary" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === tab.id
                        ? "bg-amber-400 text-slate-900 shadow-sm font-bold"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Editorial Banner */}
        {selectedCategory === "all" && !searchQuery && featuredPost && (
          <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 sm:h-80 lg:h-auto min-h-[280px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#063D34] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Featured Story
                </div>
              </div>

              <div className="p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {featuredPost.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A3B32] hover:text-[#063D34] leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                      RS
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">{featuredPost.author}</span>
                      <span className="text-[10px] text-slate-400">Lead Wildlife Naturalist</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063D34] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0A3B32]">
                {selectedCategory === "all" ? "Latest Travel Stories" : `${selectedCategory.toUpperCase()} Articles`}
              </h3>
              <span className="text-xs text-slate-500">
                {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0A3B32] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.categoryLabel}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h4 className="text-base font-bold font-serif text-slate-900 group-hover:text-[#063D34] transition-colors leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">By {post.author}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="font-bold text-[#0A3B32] hover:underline inline-flex items-center gap-1"
                      >
                        Read More <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription Box */}
        <section className="bg-emerald-950 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Stay Inspired
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mt-2">
              Get Sri Lanka Travel Secret Guides in Your Inbox
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 mt-2">
              Monthly seasonal updates, insider restaurant finds, and newly opened boutique eco-lodges. No spam, ever.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to EdgewayTours travel stories!");
              }}
              className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-xs text-slate-900 bg-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
