"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Star,
  Users,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Heart,
} from "lucide-react";

interface Experience {
  id: string;
  title: string;
  badge: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestLocations: string[];
  idealSeason: string;
  difficulty: "Easy" | "Moderate" | "Active";
  suitableFor: string;
  popularTour: {
    title: string;
    duration: string;
    price: string;
    link: string;
  };
}

const experiencesData: Experience[] = [
  {
    id: "wildlife",
    title: "Wildlife & Safari Expeditions",
    badge: "Big 5 of Sri Lanka",
    image: "/images/exp-wildlife.jpg",
    tagline: "Track Leopards, Asian Elephants & Blue Whales in Their Natural Habitat",
    description:
      "Sri Lanka is one of the world's premier biodiversity hotspots and the best place in Asia to witness large mammals in the wild. From the dense leopard territories of Yala and Wilpattu to the majestic annual elephant gathering at Minneriya and giant blue whales gliding off Mirissa, your encounters are up-close, ethical, and guided by expert naturalists.",
    highlights: [
      "Highest leopard density in the world in Yala Block 1",
      "Witness 'The Gathering' of up to 300 wild elephants at Minneriya reservoir",
      "Ethical marine safaris to spot blue whales, sperm whales, and pods of spinner dolphins",
      "Over 400 recorded bird species, including 34 endemics in Sinharaja Rainforest",
    ],
    bestLocations: ["Yala National Park", "Udawalawe", "Minneriya / Kaudulla", "Wilpattu", "Mirissa Marine Shelf"],
    idealSeason: "Year-Round (Yala: Feb-Jun, Minneriya: Jul-Oct, Mirissa Whales: Nov-Apr)",
    difficulty: "Easy",
    suitableFor: "Families, Nature Lovers, Photographers",
    popularTour: {
      title: "Yala Wildlife Safari (Private Jeep)",
      duration: "Half-day / Full-day",
      price: "$75",
      link: "/tours#popular-tours",
    },
  },
  {
    id: "culture",
    title: "Culture, Ancient Cities & Kingdoms",
    badge: "2,500+ Years of History",
    image: "/images/exp-culture.jpg",
    tagline: "Ascend Ancient Palaces, Painted Cave Temples & Sacred Relics",
    description:
      "Step back through millennia of civilization within Sri Lanka's renowned Cultural Triangle. Wander through the monumental brick stupas of Anuradhapura, marvel at the preserved stone carvings of medieval Polonnaruwa, climb King Kashyapa's sky fortress at Sigiriya, and feel the sacred incense of the Temple of the Tooth in Kandy.",
    highlights: [
      "Scale the sheer 5th-century rock fortress of Sigiriya with its ancient cloud frescoes",
      "Wander 5 sacred painted caves holding 150+ Buddha statues at Dambulla",
      "Experience the evening drumming and pooja ceremony at the Temple of the Sacred Tooth Relic",
      "Explore the 17th-century ocean ramparts of Galle Dutch Fort",
    ],
    bestLocations: ["Sigiriya", "Dambulla", "Kandy", "Anuradhapura", "Polonnaruwa", "Galle Fort"],
    idealSeason: "December to April & July to September",
    difficulty: "Moderate",
    suitableFor: "History Buffs, Couples, Cultural Explorers",
    popularTour: {
      title: "Sigiriya & Dambulla Heritage Day Tour",
      duration: "Full day tour",
      price: "$90",
      link: "/tours#popular-tours",
    },
  },
  {
    id: "beach",
    title: "Beach, Surfing & Ocean Escapes",
    badge: "1,340 km of Coastline",
    image: "/images/exp-beach.jpg",
    tagline: "Golden Sands, Peeling Point Breaks & Turquoise Lagoons",
    description:
      "Blessed with two distinct monsoon seasons, Sri Lanka always has a sunny coast waiting for you. Ride world-class right-hand point breaks in laid-back Arugam Bay, snorkel among live coral reefs with sea turtles at Pigeon Island, or sip fresh king coconuts beneath coconut palms in tropical Mirissa and Hiriketiya.",
    highlights: [
      "Surf legendary right-hand point breaks at Arugam Bay Main Point and Whiskey Point",
      "Beginner-friendly surf coaching and board rentals in Weligama Bay",
      "Snorkel with reef sharks and green turtles in Pigeon Island National Park",
      "Sunset beachfront dining with fresh catches grilled with island spices",
    ],
    bestLocations: ["Arugam Bay", "Mirissa", "Hiriketiya", "Weligama", "Trincomalee / Nilaveli"],
    idealSeason: "South/West: Nov - Apr | East Coast: May - Oct",
    difficulty: "Easy",
    suitableFor: "Beach Lovers, Surfers, Honeymooners, Families",
    popularTour: {
      title: "Surf Lessons in Arugam Bay",
      duration: "2 hours",
      price: "$35",
      link: "/tours#popular-tours",
    },
  },
  {
    id: "adventure",
    title: "Adventure, Highlands & Nature Trekking",
    badge: "Peaks, Waterfalls & Trains",
    image: "/images/exp-adventure.jpg",
    tagline: "Ride the Blue Mountain Train & Summit Misty Mountain Peaks",
    description:
      "For thrill-seekers and wilderness trekkers, Sri Lanka's emerald highlands offer an exhilarating playground. Ride the world's most scenic colonial railway over the Nine Arch Bridge, hike Little Adam's Peak at sunrise, stand above 1,000-meter drop-offs at Horton Plains World's End, or conquer Grade 3 rapids in Kitulgala.",
    highlights: [
      "Take the legendary scenic blue train through mountain cloud forests from Kandy to Ella",
      "Hike to the breathtaking precipice of World's End at Horton Plains National Park",
      "White-water rafting and canyoning on the Kelani River in Kitulgala",
      "Multi-day ridge trekking in the untouched UNESCO Knuckles Mountain Range",
    ],
    bestLocations: ["Ella", "Nuwara Eliya", "Horton Plains", "Kitulgala", "Knuckles Range"],
    idealSeason: "January to May & August to September",
    difficulty: "Active",
    suitableFor: "Hikers, Adventure Travelers, Active Groups",
    popularTour: {
      title: "Ella Scenic Highlands Day Tour",
      duration: "Full day tour",
      price: "$80",
      link: "/tours#popular-tours",
    },
  },
  {
    id: "local",
    title: "Local Village & Authentic Culinary",
    badge: "Genuine Island Culture",
    image: "/images/exp-local.jpg",
    tagline: "Clay Pot Cooking, Artisan Crafts & Warm Sri Lankan Hospitality",
    description:
      "Go far beyond ordinary tourist buffets to experience the genuine soul of Sri Lanka. Join a local rural family in an authentic mud-brick village home, pluck fresh tea leaves on misty Ceylon tea estates, learn traditional cinnamon peeling, and master the complex spices of authentic clay-pot coconut curries.",
    highlights: [
      "Hands-on culinary masterclass: cook 5 authentic Sri Lankan curries and coconut sambol",
      "Traditional catamaran boat ride across lotus-covered village lakes in Hiriwadunna",
      "Walk among organic tea bushes with estate pluckers and taste rare single-origin teas",
      "Visit generational spice gardens and understand Ceylon cinnamon, cardamom, and clove cultivation",
    ],
    bestLocations: ["Hiriwadunna Village", "Kandy Highlands", "Galle Cinnamon Islands", "Ella Tea Plantations"],
    idealSeason: "Year-Round",
    difficulty: "Easy",
    suitableFor: "Foodies, Families, Cultural Travelers",
    popularTour: {
      title: "Village Feast & Catamaran Lake Experience",
      duration: "3.5 hours",
      price: "$45",
      link: "/tours",
    },
  },
  {
    id: "multiday",
    title: "Complete Island Multi-Day Journeys",
    badge: "All-Inclusive Holiday Packages",
    image: "/images/exp-multiday.jpg",
    tagline: "Seamless Tailored Journeys with Private Chauffeur & Handpicked Hotels",
    description:
      "Take the hassle out of island logistics. Our multi-day itineraries blend wildlife safaris, ancient kingdoms, scenic mountain train journeys, and relaxing coastal beach stays into one seamless private holiday. Enjoy dedicated private AC transport, expert local driver-guides, and curated boutique accommodations.",
    highlights: [
      "Dedicated air-conditioned private vehicle and English-speaking licensed guide throughout",
      "Carefully paced itineraries avoiding exhausting long travel days",
      "Handpicked boutique eco-lodges, colonial tea bungalows, and beachfront resorts",
      "Guaranteed train reservations on the scenic Kandy-Ella railway line",
    ],
    bestLocations: ["Island-Wide (Cultural Triangle, Hill Country, Coast & Safari)"],
    idealSeason: "Customized to the best coast and season of your travel dates",
    difficulty: "Easy",
    suitableFor: "Families, Couples, Private Groups, First-Time Visitors",
    popularTour: {
      title: "Sri Lanka Highlights 7D/6N Package",
      duration: "7 Days • 6 Nights",
      price: "$690",
      link: "/tours#packages",
    },
  },
];

export default function ExperiencesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredExperiences = experiencesData.filter((exp) => {
    if (selectedFilter === "all") return true;
    return exp.id === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Header Hero */}
        <section className="relative bg-[#063D34] text-white py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explore Sri Lanka Differently</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                Signature Sri Lankan <span className="text-amber-400">Experiences</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                Whether you dream of close encounters with wild leopards, paddling world-class waves, tasting hot clay-pot curries in a rural village, or scaling 1,500-year-old rock fortresses, every journey with EdgewayTours is thoughtfully curated.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { id: "all", label: "All Experiences" },
                { id: "wildlife", label: "🐘 Wildlife & Safaris" },
                { id: "culture", label: "🏛️ Culture & Heritage" },
                { id: "beach", label: "🏄 Beach & Surfing" },
                { id: "adventure", label: "🥾 Adventure & Nature" },
                { id: "local", label: "🍛 Village & Culinary" },
                { id: "multiday", label: "✨ Multi-Day Journeys" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedFilter === filter.id
                      ? "bg-amber-400 text-slate-900 shadow-md scale-105"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Detailed Listing */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {filteredExperiences.map((exp, index) => (
              <div
                key={exp.id}
                id={exp.id}
                className={`bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all p-6 sm:p-8 lg:p-10 flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Visual Image Side */}
                <div className="w-full lg:w-1/2 relative h-72 sm:h-96 rounded-2xl overflow-hidden group shrink-0">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#0A3B32] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {exp.badge}
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div>
                      <span className="block text-[10px] text-white/70 uppercase font-semibold">Pace / Level</span>
                      <span className="font-bold">{exp.difficulty}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-white/70 uppercase font-semibold">Best For</span>
                      <span className="font-bold">{exp.suitableFor}</span>
                    </div>
                  </div>
                </div>

                {/* Content Details Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                    <Compass className="w-4 h-4" />
                    <span>Curated Experience</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A3B32] font-serif leading-tight">
                    {exp.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                    {exp.tagline}
                  </p>

                  <p className="text-sm text-slate-700 leading-relaxed mt-4">
                    {exp.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-5 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Signature Highlights
                    </div>
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Top Locations Tags */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-500">Key Locations:</span>
                      {exp.bestLocations.map((loc, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md font-medium"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-semibold">Featured Tour</span>
                      <span className="text-xs font-bold text-slate-900">{exp.popularTour.title}</span>
                      <span className="text-xs text-emerald-700 font-semibold ml-2">from {exp.popularTour.price}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={exp.popularTour.link}
                        className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:text-[#0A3B32] hover:border-[#0A3B32] text-xs font-bold text-center transition-colors"
                      >
                        View Tour
                      </Link>
                      <Link
                        href={`/plan-your-trip?experience=${exp.id}`}
                        className="px-5 py-2.5 rounded-xl bg-[#063D34] hover:bg-[#042A24] text-white text-xs font-bold shadow-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Custom Trip</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Finder Callout */}
        <section className="bg-emerald-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
              Can&apos;t choose just one experience?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-emerald-200/90 leading-relaxed">
              That&apos;s the magic of Sri Lanka — you can track wild leopards at dawn, hike through emerald tea plantations by noon, and catch sunset waves on the southern coast in the same week.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/plan-your-trip"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm shadow-md transition-transform hover:scale-105"
              >
                Create a Combined Multi-Experience Itinerary
              </Link>
              <Link
                href="/tours"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
              >
                Browse All Tours
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
