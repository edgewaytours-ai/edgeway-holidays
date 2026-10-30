import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function MultiDayPackages() {
  const packages = [
    {
      id: "highlights",
      title: "Sri Lanka Highlights",
      duration: "7 Days • 6 Nights",
      price: "690",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
      tag: "Classic",
      tagColor: "bg-emerald-600 text-white",
    },
    {
      id: "adventure",
      title: "Coast & Adventure",
      duration: "10 Days • 9 Nights",
      price: "890",
      image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop",
      tag: "Adventure",
      tagColor: "bg-sky-600 text-white",
    },
    {
      id: "family",
      title: "Family Discovery Tour",
      duration: "8 Days • 7 Nights",
      price: "990",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=800&auto=format&fit=crop",
      tag: "Family",
      tagColor: "bg-amber-600 text-white",
    },
    {
      id: "luxury",
      title: "Sri Lanka Luxury Escape",
      duration: "Custom Itinerary",
      price: "1,290",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
      tag: "Private",
      tagColor: "bg-amber-800 text-amber-100",
    },
  ];

  return (
    <section className="relative py-20 bg-[#07241F] text-white overflow-hidden">
      {/* Background Subtle Gradient & Tropical Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
          alt="Sri Lanka coastline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#07241F]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase">
              Multi-Day Sri Lanka Packages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mt-2 font-normal">
              Complete Sri Lanka Holidays
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-xl">
              Carefully designed itineraries to match your interests, budget and travel style.
            </p>
          </div>

          <Link
            href="#all-packages"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 transition-all self-start sm:self-end"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-slate-800"
            >
              {/* Image & Tag */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm ${pkg.tagColor}`}
                >
                  {pkg.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#0A3B32] transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Footer / Price & Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                      From
                    </span>
                    <span className="text-lg font-bold text-[#0A3B32]">
                      US$ {pkg.price}
                    </span>
                  </div>

                  <Link
                    href={`#package-${pkg.id}`}
                    className="inline-flex items-center gap-1 bg-[#0A3B32] hover:bg-[#072620] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
