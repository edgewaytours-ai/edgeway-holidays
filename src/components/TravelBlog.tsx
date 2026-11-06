import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";

export default function TravelBlog() {
  const articles = [
    {
      slug: "sri-lanka-10-day-itinerary-private-driver",
      date: "Nov 2026",
      title: "Sri Lanka 10-Day Private Tour Itinerary with Driver",
      excerpt: "Sigiriya, Kandy, Ella scenic blue train, Yala safari, and Galle Fort with a private chauffeur.",
      image: "/images/hero-sigiriya.jpg",
    },
    {
      slug: "cost-of-private-driver-sri-lanka",
      date: "Nov 2026",
      title: "Cost of Private Driver in Sri Lanka (2027 Price Guide)",
      excerpt: "Daily rates, fuel, toll charges, driver lodging, and tips explained with zero hidden fees.",
      image: "/images/tour-ella.jpg",
    },
    {
      slug: "scenic-train-kandy-ella",
      date: "Oct 2026",
      title: "Complete Guide to the Kandy to Ella Scenic Blue Train",
      excerpt: "1st vs 2nd class reserved seats, timetable schedules, Nine Arch Bridge photo spots & luggage transfer.",
      image: "/images/tour-ella.jpg",
    },
  ];

  return (
    <section id="blog" className="py-10 md:py-12 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
              Travel Inspiration
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0A3B32] mt-1 font-normal">
              Latest from Our Travel Blog
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A3B32] hover:text-[#10B981] transition-colors group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with subtle floating circle */}
              <Link href={`/blog/${post.slug}`} className="relative h-48 w-full overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0A3B32] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              {/* Text content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 mb-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#0A3B32] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A3B32] group-hover:text-[#10B981] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
