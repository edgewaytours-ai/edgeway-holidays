import { Users, ShieldCheck, Star, Award, Headset, Leaf } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: Users,
      title: "1K+",
      subtitle: "Happy Travellers",
    },
    {
      icon: ShieldCheck,
      title: "Local",
      subtitle: "Sri Lankan Team",
    },
    {
      icon: Star,
      title: "4.9/5",
      subtitle: "Customer Rating",
    },
    {
      icon: Award,
      title: "Trusted Guides",
      subtitle: "& Partners",
    },
    {
      icon: Headset,
      title: "24/7",
      subtitle: "Support",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      subtitle: "Tourism",
    },
  ];

  return (
    <section className="pt-24 sm:pt-28 pb-10 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#0A3B32] flex items-center justify-center shrink-0 group-hover:bg-[#0A3B32] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 leading-tight">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
