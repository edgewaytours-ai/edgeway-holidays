"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  Search,
  Sparkles,
  Sun,
  ShieldCheck,
  Check,
  X,
  ChevronRight,
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: "cultural" | "hill-country" | "south-coast" | "east-coast" | "wildlife";
  regionName: string;
  image: string;
  badge: string;
  bestTime: string;
  idealStay: string;
  highlights: string[];
  description: string;
  topAttractions: string[];
  weatherTip: string;
  featuredTour: string;
}

const destinationsData: Destination[] = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    tagline: "The Ancient Lion Rock & Cultural Heart",
    region: "cultural",
    regionName: "Cultural Triangle",
    image: "/images/tour-sigiriya.jpg",
    badge: "UNESCO World Heritage",
    bestTime: "Dec - Apr & Jul - Sep",
    idealStay: "2 - 3 Days",
    highlights: [
      "Climb the 5th-century Lion Rock fortress with ancient frescoes",
      "Panoramic sunrise views from Pidurangala Rock",
      "Dambulla Golden Cave Temple complex",
    ],
    description:
      "Rising 200 meters dramatically from the central plains, Sigiriya is an archaeological marvel engineered by King Kashyapa in the 5th century. Combined with nearby Dambulla cave temples and Minneriya elephant gatherings, it forms the undeniable jewel of Sri Lanka's Cultural Triangle.",
    topAttractions: ["Lion Rock Fortress", "Pidurangala Rock", "Dambulla Cave Temple", "Minneriya National Park", "Hiriwadunna Village Walk"],
    weatherTip: "Warm and dry most of the year. Climb early morning (6:30 AM) to beat the midday heat.",
    featuredTour: "Sigiriya & Dambulla Heritage Day Tour",
  },
  {
    id: "ella",
    name: "Ella",
    tagline: "Misty Tea Valleys & Scenic Railways",
    region: "hill-country",
    regionName: "Hill Country",
    image: "/images/tour-ella.jpg",
    badge: "Adventure & Hiking",
    bestTime: "Jan - May",
    idealStay: "2 - 4 Days",
    highlights: [
      "Watch trains cross the iconic 1921 Nine Arch Bridge",
      "Hike Little Adam's Peak & Ella Rock for dramatic ridge views",
      "Cascading Ravana Waterfall & emerald tea factory visits",
    ],
    description:
      "Ella is a tranquil mountain village nestled 1,041 meters up in the misty southern highlands. Renowned for its laid-back cafes, breathtaking hiking trails, and the world-famous Kandy-to-Ella scenic train journey, it is an essential stop for nature lovers and adventurers.",
    topAttractions: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock", "Ravana Falls", "Halpewatte Tea Factory", "Diyaluma Falls"],
    weatherTip: "Cool mountain breezes with mild afternoons. Pack a light fleece for crisp evenings.",
    featuredTour: "Ella Scenic Highlands Exploration Tour",
  },
  {
    id: "kandy",
    name: "Kandy",
    tagline: "The Sacred Royal Kingdom & Temple of the Tooth",
    region: "cultural",
    regionName: "Cultural Triangle",
    image: "/images/exp-culture.jpg",
    badge: "Sacred Cultural Capital",
    bestTime: "Dec - Apr",
    idealStay: "1 - 2 Days",
    highlights: [
      "The sacred Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
      "Peradeniya Royal Botanical Gardens with giant palms & orchid house",
      "Traditional Kandyan cultural dance and drumming performances",
    ],
    description:
      "Surrounded by misty green hills and centered around an idyllic lake, Kandy was the last independent royal kingdom of Sri Lanka before British colonization. It remains the spiritual heart of the island, holding the venerated relic of the Buddha's tooth.",
    topAttractions: ["Temple of the Tooth", "Kandy Lake Walk", "Royal Botanical Gardens", "Bahirawakanda Giant Buddha", "Udawatta Kele Forest"],
    weatherTip: "Comfortable subtropical climate. Modest temple attire (shoulders & knees covered) required.",
    featuredTour: "Kandy Royal Heritage & Botanical Day Tour",
  },
  {
    id: "yala",
    name: "Yala National Park",
    tagline: "Wild Leopard Wilderness & Coastal Savannah",
    region: "wildlife",
    regionName: "Wildlife Reserves",
    image: "/images/tour-yala.jpg",
    badge: "Highest Leopard Density",
    bestTime: "Feb - Jun",
    idealStay: "1 - 2 Days",
    highlights: [
      "Track Sri Lankan leopards (Panthera pardus kotiya)",
      "Wild Asian elephants, sloth bears, crocodiles & 215 bird species",
      "Coastal dunes and rugged scrubland safaris in open 4x4 jeeps",
    ],
    description:
      "Spanning nearly 1,000 square kilometers on Sri Lanka's southeast coast, Yala is Sri Lanka's most celebrated safari sanctuary. Its dense concentration of leopards, alongside majestic elephant herds and vibrant birdlife, makes every safari an unforgettable wildlife encounter.",
    topAttractions: ["Yala Block 1 Game Drives", "Palatupana Coastal Dunes", "Kumana Bird Sanctuary", "Bundala Wetland Ramsar Site", "Kataragama Sacred Shrine"],
    weatherTip: "Dry zone environment. Safaris run at dawn (5:30 AM) and late afternoon (2:30 PM) when wildlife is active.",
    featuredTour: "Yala Premier Wildlife Safari (Private Jeep)",
  },
  {
    id: "mirissa",
    name: "Mirissa & South Coast",
    tagline: "Whale Watching, Palm Groves & Sunset Vibes",
    region: "south-coast",
    regionName: "Southern Coast",
    image: "/images/dest-mirissa.jpg",
    badge: "Marine & Beach Paradise",
    bestTime: "Nov - Apr",
    idealStay: "3 - 5 Days",
    highlights: [
      "Blue whale & spinner dolphin watching expeditions in the deep Indian Ocean",
      "Coconut Tree Hill panoramic ocean viewpoint",
      "Secluded Secret Beach & beachfront seafood barbecues under the stars",
    ],
    description:
      "Mirissa represents the quintessential southern Sri Lankan beach experience: crescent-shaped golden sand bays lined with swaying palms, gentle surf breaks, and easy access to the deep ocean shelf where majestic blue whales migrate annually.",
    topAttractions: ["Coconut Tree Hill", "Blue Whale Watching", "Secret Beach", "Weligama Bay Surf", "Parrot Rock", "Hiriketiya Horseshoe Bay"],
    weatherTip: "Glorious dry sunny beach weather from November through April with calm turquoise waters.",
    featuredTour: "Mirissa Blue Whale Cruise & Coastal Day Tour",
  },
  {
    id: "arugam",
    name: "Arugam Bay",
    tagline: "World-Class Right Hand Point Breaks & Chill Vibes",
    region: "east-coast",
    regionName: "East Coast",
    image: "/images/tour-arugam.jpg",
    badge: "Surfing Capital",
    bestTime: "May - Oct",
    idealStay: "4 - 7 Days",
    highlights: [
      "Ride the world-renowned Main Point and Whiskey Point surf breaks",
      "Lagoon safaris to spot wild elephants crossing at sunset (Panama & Pottuvil)",
      "Vibrant beach cafes, yoga shalas, and laid-back surf culture",
    ],
    description:
      "Arugam Bay on Sri Lanka's remote southeastern coast is universally acknowledged among the top ten surf breaks on earth. When the southwest monsoon brings rain to the south coast, Arugam Bay enjoys pure sunshine, offshore breezes, and peeling right-hand waves.",
    topAttractions: ["Main Point Surf", "Whiskey Point", "Pottuvil Lagoon Safari", "Kudumbigala Monastery", "Kumana National Park"],
    weatherTip: "Peak dry surfing season is May to October. Warm tropical sea and sunny skies daily.",
    featuredTour: "Arugam Bay Surf & Lagoon Safari Excursion",
  },
  {
    id: "trincomalee",
    name: "Trincomalee & Nilaveli",
    tagline: "Pristine White Sands & Coral Marine Parks",
    region: "east-coast",
    regionName: "East Coast",
    image: "/images/dest-trinco.jpg",
    badge: "Snorkeling & White Beaches",
    bestTime: "Apr - Sep",
    idealStay: "3 - 5 Days",
    highlights: [
      "Snorkel with blacktip reef sharks & sea turtles at Pigeon Island Marine Park",
      "Perched cliffside Koneswaram Hindu Temple with Lover's Leap",
      "Powder-white beaches of Nilaveli and calm azure swimming waters",
    ],
    description:
      "Boasting one of the greatest natural deep-water harbors in the world, Trincomalee combines ancient Tamil cultural history with some of Sri Lanka's finest tranquil beaches. The crystal waters of Nilaveli and Pigeon Island offer unbeatable snorkeling and diving.",
    topAttractions: ["Pigeon Island Marine National Park", "Koneswaram Kovil", "Nilaveli Beach", "Fort Frederick", "Kanniya Hot Springs"],
    weatherTip: "Summer refuge from May to September while the southwest is wet. Clear calm seas.",
    featuredTour: "Pigeon Island Snorkeling & Trincomalee Coastal Trip",
  },
  {
    id: "galle",
    name: "Galle Fort",
    tagline: "17th-Century Dutch Ramparts & Boutique Cobblestones",
    region: "south-coast",
    regionName: "Southern Coast",
    image: "/images/pkg-luxury.jpg",
    badge: "Colonial Living Heritage",
    bestTime: "Nov - Apr",
    idealStay: "1 - 2 Days",
    highlights: [
      "Walk the ocean ramparts and historic Galle Lighthouse at golden hour",
      "Browse artisan boutique jewelers, gelato parlors, and art galleries",
      "Discover 400 years of Portuguese, Dutch, and British maritime architecture",
    ],
    description:
      "A UNESCO World Heritage fortress built by the Portuguese in 1588 and extensively fortified by the Dutch in the 1600s, Galle Fort is an enchanting, car-free living heritage site where historic architecture meets contemporary boutique living on the ocean's edge.",
    topAttractions: ["Galle Lighthouse", "Flag Rock Bastion", "Dutch Reformed Church", "Maritime Museum", "Pedlar Street Boutiques"],
    weatherTip: "Beautiful year-round with coastal breezes. Golden hour sunsets along the ramparts are unmissable.",
    featuredTour: "Galle Fort Colonial Walk & Cinnamon Island Experience",
  },
];

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesRegion = selectedRegion === "all" || dest.region === selectedRegion;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#063D34] text-white py-20 lg:py-24 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <Compass className="w-3.5 h-3.5" />
                <span>Sri Lanka Destinations Guide</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                Explore the Wonders of <span className="text-amber-400">Sri Lanka</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                From ancient rock fortresses and misty highland tea plantations to untouched golden coastlines and world-class wildlife safaris, discover every corner of this enchanted island.
              </p>
            </div>

            {/* Quick Search & Region Filter Bar */}
            <div className="mt-8 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search destination, attraction, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A3B32] text-slate-900 placeholder-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Region Pill Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {[
                  { id: "all", label: "All Regions" },
                  { id: "cultural", label: "Cultural Triangle" },
                  { id: "hill-country", label: "Hill Country" },
                  { id: "south-coast", label: "South Coast" },
                  { id: "east-coast", label: "East Coast" },
                  { id: "wildlife", label: "Wildlife" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedRegion(tab.id)}
                    className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                      selectedRegion === tab.id
                        ? "bg-[#063D34] text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Climate Quick Guide Banner */}
        <section className="bg-emerald-50/70 border-b border-emerald-100 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#0A3B32]">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="font-semibold">Sri Lanka Dual Climate Rule:</span>
              <span>Nov - Apr: South & West Coasts are prime. May - Sep: East Coast (Arugam & Trinco) is sunny & calm.</span>
            </div>
            <Link
              href="/travel-info#best-time"
              className="text-[#0A3B32] font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Full Climate Chart <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A3B32] font-serif">
                  Featured Destinations
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Showing {filteredDestinations.length} destination{filteredDestinations.length === 1 ? "" : "s"} across Sri Lanka
                </p>
              </div>
            </div>

            {filteredDestinations.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No destinations match your search</h3>
                <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                  Try clearing your search filters or browse all regions to see Sri Lanka&apos;s top highlights.
                </p>
                <button
                  onClick={() => {
                    setSelectedRegion("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-5 py-2 rounded-full bg-[#063D34] text-white text-xs font-semibold hover:bg-[#042A24]"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Destination Image with Badge */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Pill Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0A3B32] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                        {dest.badge}
                      </div>

                      {/* Region Tag */}
                      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {dest.regionName}
                      </div>

                      {/* Bottom Image Overlay: Title & Tagline */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="text-2xl font-bold font-serif">{dest.name}</h3>
                        <p className="text-xs text-white/90 line-clamp-1">{dest.tagline}</p>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      {/* Meta specs: Best Time & Ideal Stay */}
                      <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-100 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <div>
                            <span className="block text-[10px] text-slate-400 uppercase font-semibold">Best Season</span>
                            <span className="font-bold text-slate-800">{dest.bestTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <div>
                            <span className="block text-[10px] text-slate-400 uppercase font-semibold">Suggested Stay</span>
                            <span className="font-bold text-slate-800">{dest.idealStay}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 flex-1">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Key Experiences
                        </div>
                        <ul className="space-y-1.5">
                          {dest.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                        <button
                          onClick={() => setActiveModalDest(dest)}
                          className="text-xs font-bold text-[#0A3B32] hover:text-[#063D34] hover:underline"
                        >
                          Quick Overview
                        </button>

                        <Link
                          href={`/plan-your-trip?dest=${dest.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#063D34] hover:bg-[#042A24] text-white text-xs font-semibold shadow-xs transition-colors"
                        >
                          <span>Plan Visit</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Explore with EdgewayTours Banner */}
        <section className="bg-white py-14 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A3B32] text-sm">100% Local Chauffeur Guides</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Explore with licensed local driver-guides who know hidden viewpoints, secret trails, and authentic village eateries away from crowded tourist buses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A3B32] text-sm">Tailor-Made Route Planning</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Combine any destinations into a seamless custom private itinerary with private AC transport, premium boutique hotels, and flexible stops.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A3B32] text-sm">Transparent, All-Inclusive</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    No hidden mileage fees, fuel surprises, or commission trap stops. Complete clarity on what is included before you arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#063D34] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Custom Trip Planning</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mt-1">
                Can&apos;t decide where to go first?
              </h3>
              <p className="text-sm text-emerald-100/90 mt-2">
                Our local travel designers will craft an optimized island itinerary matching your travel dates, pace, and interests completely free of charge.
              </p>
            </div>
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 shrink-0"
            >
              <span>Build Custom Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Destination Quick Details Modal */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveModalDest(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5">
              <Image
                src={activeModalDest.image}
                alt={activeModalDest.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-xs font-bold bg-emerald-600 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  {activeModalDest.regionName}
                </span>
                <h3 className="text-2xl font-bold font-serif mt-1">{activeModalDest.name}</h3>
                <p className="text-xs text-white/90">{activeModalDest.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {activeModalDest.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold">Recommended Season:</span>
                <span className="font-bold text-slate-900">{activeModalDest.bestTime}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Suggested Duration:</span>
                <span className="font-bold text-slate-900">{activeModalDest.idealStay}</span>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Top Attractions & Things to Do
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalDest.topAttractions.map((attr, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-emerald-50 text-[#0A3B32] font-medium px-3 py-1 rounded-lg border border-emerald-100"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200/60 text-xs text-amber-900">
              <span className="font-bold">Traveler Tip: </span>
              {activeModalDest.weatherTip}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalDest(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close
              </button>
              <Link
                href={`/plan-your-trip?dest=${activeModalDest.id}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#063D34] hover:bg-[#042A24] text-white text-xs font-bold shadow-sm"
              >
                <span>Add {activeModalDest.name} to My Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
