import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function MultiDayPackages() {
  const packages = [
    {
      id: "highlights",
      title: "Sri Lanka Highlights",
      duration: "7 Days • 6 Nights",
      price: "690",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
      tag: "Classic",
      tagColor: "bg-[#10B981] text-white",
    },
    {
      id: "adventure",
      title: "Coast & Adventure",
      duration: "10 Days • 9 Nights",
      price: "890",
      image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop",
      tag: "Adventure",
      tagColor: "bg-sky-500 text-white",
    },
    {
      id: "family",
      title: "Family Discovery Tour",
      duration: "8 Days • 7 Nights",
      price: "990",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=800&auto=format&fit=crop",
      tag: "Family",
      tagColor: "bg-amber-500 text-white",
    },
    {
      id: "luxury",
      title: "Sri Lanka Luxury Escape",
      duration: "Custom Itinerary",
      price: "1,290",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
      tag: "Private",
      tagColor: "bg-amber-700 text-amber-100",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 text-white overflow-hidden">
      {/* Background Tropical Beach Coastline Panorama Matching Design */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&auto=format&fit=crop"
          alt="Sri Lanka tropical coast"
          fill
          className="object-cover object-center"
        />
        {/* Subtle cinematic gradient so text is crisp and ocean is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d18]/90 via-[#031d18]/70 to-[#031d18]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021411]/90 via-transparent to-[#031d18]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[11px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
              Multi-Day Sri Lanka Packages
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mt-1 font-normal">
              Complete Sri Lanka Holidays
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-200 font-light max-w-xl">
              Carefully designed itineraries to match your interests, budget and travel style.
            </p>
          </div>

          <Link
            href="#all-packages"
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 transition-all self-start sm:self-end"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-slate-800"
            >
              {/* Image & Tag */}
              <div className="relative h-44 w-full overflow-hidden">
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
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#0A3B32] transition-colors leading-snug">
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

                  <Link
                    href={`#package-${pkg.id}`}
                    className="inline-flex items-center gap-1 bg-[#0A3B32] hover:bg-[#072620] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
