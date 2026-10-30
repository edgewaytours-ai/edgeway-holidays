import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sliders, ShieldCheck, Headset, Palmtree } from "lucide-react";

export default function DestinationsAndWhyUs() {
  const destinations = [
    {
      name: "Arugam Bay",
      tag: "Surf & Beach",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Ella",
      tag: "Mountains & Nature",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Sigiriya",
      tag: "Ancient Rock Fortress",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Kandy",
      tag: "Ancient Rock Fortress",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Kandy",
      tag: "Culture & Temples",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Mirissa",
      tag: "Whale Watching",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Yala",
      tag: "Wildlife & Safari",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Trincomalee",
      tag: "Beaches & Diving",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const whyUsFeatures = [
    {
      icon: Compass,
      title: "Local Expertise",
      description: "Born in Sri Lanka, sharing authentic experiences",
    },
    {
      icon: Sliders,
      title: "Personalized Trips",
      description: "Custom itineraries to match your style",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Pricing",
      description: "No hidden costs, clear inclusions",
    },
    {
      icon: Headset,
      title: "Support 24/7",
      description: "We're here before, during and after your trip",
    },
  ];

  return (
    <section id="destinations" className="py-10 md:py-12 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Top Destinations Grid (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-end justify-between mb-5">
              <div>
                <span className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
                  Top Destinations
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#0A3B32] mt-1 font-normal">
                  Explore Famous Places in Sri Lanka
                </h2>
              </div>

              <Link
                href="#all-destinations"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A3B32] hover:text-[#10B981] transition-colors"
              >
                <span>View All Destinations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Destination cards 4x2 grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-grow">
              {destinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="group relative h-32 sm:h-36 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-end p-2.5"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="relative z-10">
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-[10px] text-slate-300 truncate mt-0.5">
                      {dest.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Travel With EdgewayTours (5 cols) */}
          <div
            id="why-us"
            className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-xs relative overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle Palm Silhouette Background */}
            <div className="absolute -bottom-6 -right-6 text-slate-100/70 pointer-events-none">
              <Palmtree className="w-44 h-44 opacity-20 text-[#0A3B32]" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase block">
                Why Travel With EdgewayTours
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#0A3B32] mt-1 mb-6 font-normal">
                The Edgeway Difference
              </h3>

              {/* 2x2 Clean Grid of Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                {whyUsFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0A3B32] flex items-center justify-center shrink-0 group-hover:bg-[#0A3B32] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                          {feat.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>Trusted by 1,000+ global travelers</span>
              <span className="text-[#0A3B32] font-semibold">100% Sri Lankan Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
