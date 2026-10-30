import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, PenTool, Tag, MessageCircle, Palmtree } from "lucide-react";

export default function DestinationsAndWhyUs() {
  const destinations = [
    {
      name: "Arugam Bay",
      tag: "Surf & Beach",
      image: "/images/tour-arugam.jpg",
    },
    {
      name: "Ella",
      tag: "Mountains & Nature",
      image: "/images/tour-ella.jpg",
    },
    {
      name: "Sigiriya",
      tag: "Ancient Rock Fortress",
      image: "/images/tour-sigiriya.jpg",
    },
    {
      name: "Kandy",
      tag: "Ancient Rock Fortress",
      image: "/images/exp-culture.jpg",
    },
    {
      name: "Kandy",
      tag: "Culture & Temples",
      image: "/images/exp-wildlife.jpg",
    },
    {
      name: "Mirissa",
      tag: "Whale Watching",
      image: "/images/dest-mirissa.jpg",
    },
    {
      name: "Yala",
      tag: "Wildlife & Safari",
      image: "/images/tour-yala.jpg",
    },
    {
      name: "Trincomalee",
      tag: "Beaches & Diving",
      image: "/images/dest-trinco.jpg",
    },
  ];

  const whyUsFeatures = [
    {
      icon: ShieldCheck,
      title: "Local Expertise",
      description: "Born in Sri Lanka, sharing authentic experiences",
    },
    {
      icon: PenTool,
      title: "Personalized Trips",
      description: "Custom itineraries to match your style",
    },
    {
      icon: Tag,
      title: "Transparent Pricing",
      description: "No hidden costs, clear inclusions",
    },
    {
      icon: MessageCircle,
      title: "Support 24/7",
      description: "We're here before, during and after your trip",
    },
  ];

  return (
    <section id="destinations" className="py-8 md:py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Top Destinations 8 in One Row (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-end justify-between mb-3.5">
              <div>
                <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                  Top Destinations
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#063D34] mt-0.5 font-normal">
                  Explore Famous Places in Sri Lanka
                </h2>
              </div>

              <Link
                href="#all-destinations"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#063D34] hover:text-[#10B981] transition-colors"
              >
                <span>View All Destinations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Exact 8-Card Single Row Matching Design Screenshot */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 flex-grow">
              {destinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="group relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-end p-2"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  <div className="relative z-10">
                    <h3 className="text-xs font-bold text-white leading-tight truncate">
                      {dest.name}
                    </h3>
                    <p className="text-[9px] text-slate-300 truncate mt-0.5 font-light">
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
            className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-100 shadow-xs relative overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle Tropical Palm Background Sketch on the Right */}
            <div className="absolute -bottom-4 -right-4 text-[#063D34]/15 pointer-events-none">
              <Palmtree className="w-36 h-36" />
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase block mb-4">
                Why Travel With EdgewayTours
              </span>

              {/* 4 Pillars In One Row with Large Circle Outline Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center relative z-10">
                {whyUsFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center group">
                      <div className="w-11 h-11 rounded-full border border-slate-200 bg-slate-50/50 flex items-center justify-center text-[#063D34] group-hover:border-[#063D34] group-hover:bg-[#063D34] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 leading-tight mt-2.5">
                        {feat.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-snug font-light">
                        {feat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Proof Note */}
            <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-[11px] text-slate-400 font-light relative z-10">
              <span>Trusted by 1,000+ global travelers</span>
              <span className="text-[#063D34] font-semibold">100% Sri Lankan Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
