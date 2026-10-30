import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";

export default function TravelBlog() {
  const articles = [
    {
      id: "arugam-bay-guide",
      date: "15 Oct 2024",
      title: "A Complete Guide to Arugam Bay",
      excerpt: "Surf spots, things to do, where to stay and travel tips.",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "yala-safari-guide",
      date: "10 Oct 2024",
      title: "Yala Safari Guide: What to Expect",
      excerpt: "Wildlife, best times to visit and useful tips.",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "ella-travel-guide",
      date: "05 Oct 2024",
      title: "Ella Travel Guide for First-Time Visitors",
      excerpt: "Top attractions, hiking trails and local experiences.",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-[#F8FAF9]">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
              Travel Inspiration
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0A3B32] mt-2 font-normal">
              Latest from Our Travel Blog
            </h2>
          </div>

          <Link
            href="#all-articles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A3B32] hover:text-[#10B981] transition-colors group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with subtle floating circle */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0A3B32] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#0A3B32] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link
                    href={`#post-${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A3B32] group-hover:text-[#10B981] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
