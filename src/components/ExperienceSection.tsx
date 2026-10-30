import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trees, Landmark, Waves, Mountain, Utensils, TrainTrack } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Wildlife & Safaris",
      description: "National parks & amazing wildlife",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=800&auto=format&fit=crop",
      icon: Trees,
    },
    {
      title: "Culture & Heritage",
      description: "Ancient cities, temples & history",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
      icon: Landmark,
    },
    {
      title: "Beach & Surf",
      description: "Surf lessons, beach trips & coastal experiences",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
      icon: Waves,
    },
    {
      title: "Adventure & Nature",
      description: "Hiking, trekking & outdoor activities",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      icon: Mountain,
    },
    {
      title: "Local Experiences",
      description: "Village visits, food & authentic culture",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      icon: Utensils,
    },
    {
      title: "Multi-Day Tours",
      description: "Complete Sri Lanka holiday packages",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
      icon: TrainTrack,
    },
  ];

  return (
    <section id="experiences" className="py-16 md:py-24 bg-[#FBFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
              Explore by Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0A3B32] mt-2 font-normal">
              Discover Sri Lanka Your Way
            </h2>
          </div>

          <Link
            href="#all-experiences"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A3B32] hover:text-[#10B981] transition-colors group"
          >
            <span>View All Experiences</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-5"
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
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-3 group-hover:bg-[#10B981] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2 font-light">
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
