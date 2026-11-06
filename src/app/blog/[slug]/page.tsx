import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
  Share2,
} from "lucide-react";
import { blogPostsData } from "@/data/blogData";
import { siteConfig } from "@/data/siteConfig";

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Edgeway Tours",
    };
  }

  return {
    title: `${post.metaTitle} | Edgeway Tours Sri Lanka`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://edgewayholidays.com${post.image}`,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://edgewayholidays.com/blog/${post.slug}`,
    },
  };

  const faqJsonLd = post.content.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.content.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200/80 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0A3B32]">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0A3B32]">
              Travel Guides
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-800 truncate">
              {post.title}
            </span>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-white py-10 lg:py-14 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                {post.categoryLabel}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#0A3B32] font-normal leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A3B32] text-white flex items-center justify-center font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900">
                    {post.author}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {post.authorRole}
                  </span>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0A3B32]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Articles</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-4 sm:-mt-6">
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-12">
          {/* Intro Box */}
          <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-5 rounded-r-xl text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
            {post.content.intro}
          </div>

          {/* WhatsApp Direct Inquire Box */}
          <div className="bg-gradient-to-br from-[#063D34] to-[#0A4D3E] text-white rounded-2xl p-6 sm:p-7 shadow-md mb-10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest block">
                FREE TRAVEL PLANNING HOTLINE
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-serif mt-1">
                Need a private chauffeur driver for this trip?
              </h2>
              <p className="text-xs text-slate-200 mt-1 max-w-md">
                Chat directly with our local tour manager on WhatsApp. Get custom day-by-day itineraries and transparent pricing in 15 minutes.
              </p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Edgeway%20Tours,%20I%20am%20reading%20your%20guide%20(${encodeURIComponent(
                post.title
              )})%20and%20would%20like%20to%20plan%20a%20private%20tour.`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-lg transition-transform transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A3B32] font-serif mb-3">
                  {section.heading}
                </h2>
                <p className="text-slate-600 mb-4">{section.body}</p>

                {section.list && (
                  <ul className="space-y-2.5 mt-4">
                    {section.list.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* FAQ Section */}
          {post.content.faq && post.content.faq.length > 0 && (
            <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs">
              <div className="flex items-center gap-2 text-[#0A3B32] mb-6">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl sm:text-2xl font-bold font-serif">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {post.content.faq.map((item, faqIdx) => (
                  <div
                    key={faqIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.q}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Action Card */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#063D34] to-[#0A4D3E] text-white text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Ready to Explore Sri Lanka in 2027?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-lg mx-auto">
              Tell us what you want to see and our local specialists will craft your dream itinerary with a private driver.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/plan-your-trip"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A3B32] font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors"
              >
                <span>Customize Your Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Edgeway%20Tours,%20I'd%20like%20to%20ask%20a%20few%20questions%20about%20traveling%20in%20Sri%20Lanka.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ({siteConfig.whatsappDisplay})</span>
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
