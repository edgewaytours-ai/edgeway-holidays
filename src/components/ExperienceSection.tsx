import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trees, Landmark, Waves, Mountain, Utensils, TrainTrack } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Wildlife & Safaris",
      description: "National parks & amazing wildlife",
      image: "/images/exp-wildlife.jpg",
      icon: Trees,
    },
    {
      title: "Culture & Heritage",
      description: "Ancient cities, temples & history",
      image: "/images/exp-culture.jpg",
      icon: Landmark,
    },
    {
      title: "Beach & Surf",
      description: "Surf lessons, beach trips & coastal experiences",
      image: "/images/exp-beach.jpg",
      icon: Waves,
    },
    {
      title: "Adventure & Nature",
      description: "Hiking, trekking & outdoor activities",
      image: "/images/exp-adventure.jpg",
      icon: Mountain,
    },
    {
      title: "Local Experiences",
      description: "Village visits, food & authentic culture",
      image: "/images/exp-local.jpg",
      icon: Utensils,
    },
    {
      title: "Multi-Day Tours",
      description: "Complete Sri Lanka holiday packages",
      image: "/images/exp-multiday.jpg",
      icon: TrainTrack,
    },
  ];

  return (
    <section id="experiences" className="py-10 md:py-12 bg-[#FBFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">
              Explore by Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#063D34] mt-1 font-normal">
              Discover Sri Lanka Your Way
            </h2>
          </div>

          <Link
            href="#all-experiences"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#063D34] hover:text-[#10B981] transition-colors group"
          >
            <span>View All Experiences</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="group relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-end p-4"
              >
                {/* Background Image */}
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-2 group-hover:bg-[#10B981] transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-2 font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
