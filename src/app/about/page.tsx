"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Users,
  Heart,
  Globe2,
  Award,
  Sparkles,
  Leaf,
  CheckCircle,
  ArrowRight,
  Compass,
  Star,
  MapPin,
  Clock,
  PhoneCall,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ruwan Senanayake",
      role: "Lead Wildlife Naturalist & Co-Founder",
      bio: "Born near the borders of Yala, Ruwan has spent over 14 years tracking leopards and wild Asian elephants. A certified SLTDA National Chauffeur-Guide.",
      specialty: "Yala, Wilpattu & Birdwatching",
      image: "/images/tour-yala.jpg",
    },
    {
      name: "Pradeep Wickramasinghe",
      role: "Cultural Heritage & Ancient Kingdoms Specialist",
      bio: "Archaeological enthusiast with a passion for Ceylon history. Pradeep brings the ancient stones of Sigiriya and Polonnaruwa to vibrant life.",
      specialty: "Cultural Triangle & Kandy",
      image: "/images/tour-sigiriya.jpg",
    },
    {
      name: "Malik Fernando",
      role: "Highland & Ocean Expedition Guide",
      bio: "Avid mountaineer and certified ISA surf instructor. Malik knows every hidden trail in Ella and secret point breaks along the southern coast.",
      specialty: "Ella, Knuckles & Arugam Bay",
      image: "/images/tour-arugam.jpg",
    },
  ];

  const milestones = [
    { number: "1,000+", label: "Happy Global Travelers" },
    { number: "4.9 / 5", label: "Average Review Rating" },
    { number: "100%", label: "Locally Sri Lankan Owned" },
    { number: "12+", label: "Years Experience on Island" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* About Hero */}
        <section className="relative bg-[#063D34] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <Compass className="w-3.5 h-3.5" />
                <span>Our Story & Mission</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                We Don&apos;t Just Show Sri Lanka. <br />
                <span className="text-amber-400">We Help You Feel It.</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                EdgewayTours was founded on a simple promise: to share the raw beauty, deep ancient culture, and heartfelt hospitality of Sri Lanka through the eyes of the people who call this paradise home.
              </p>
            </div>
          </div>
        </section>

        {/* Milestone Stats Bar */}
        <section className="bg-white border-b border-slate-200/80 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {milestones.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0A3B32] font-serif">
                    {item.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Narrative Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Text */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  The Edgeway Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A3B32] font-serif mt-2 leading-tight">
                  Tired of Generic Tour Buses and Commission Trap Shops?
                </h2>
                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    For years, mass tourism in Sri Lanka followed a frustrating pattern: large impersonal tour coaches, rushed 15-minute photo stops, and endless detours into overpriced souvenir shops.
                  </p>
                  <p>
                    We built <strong>EdgewayTours</strong> to offer the exact opposite. When you travel with us, you are paired with a dedicated, licensed English-speaking chauffeur-guide in a comfortable private air-conditioned vehicle. You travel at your own pace, stop whenever you spot a wild peacock or a roadside king coconut vendor, and savor genuine local meals cooked over firewood in rural village homes.
                  </p>
                  <p>
                    Whether it&apos;s securing prime morning seats on the iconic blue train through the tea hills, tracking leopards in secluded corners of Yala, or catching sunset point breaks in Arugam Bay, we tailor every moment around what inspires you.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/plan-your-trip"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#063D34] hover:bg-[#042A24] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                  >
                    <span>Plan Your Trip With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/tours"
                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:border-[#063D34] text-xs sm:text-sm font-bold transition-colors"
                  >
                    Explore Tours
                  </Link>
                </div>
              </div>

              {/* Right Visual Collage */}
              <div className="relative">
                <div className="relative h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-sigiriya.jpg"
                    alt="Travelers viewing Sigiriya with EdgewayTours"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <p className="text-xs italic">
                      &ldquo;EdgewayTours turned our Sri Lankan journey from a standard holiday into the most meaningful adventure of our lives.&rdquo;
                    </p>
                    <span className="block text-[11px] font-bold text-amber-300 mt-2">
                      — Sophie & David (Melbourne, Australia)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Excellence */}
        <section className="bg-white py-16 lg:py-20 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Why Travel With Us
              </span>
              <h2 className="text-3xl font-extrabold text-[#0A3B32] font-serif mt-2">
                The Four Pillars of Edgeway
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Built on deep local roots, uncompromising safety, and a dedication to honest hospitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#0A3B32] text-base">100% Local Expertise</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Every itinerary is designed and executed by native Sri Lankans who know the secret timings, quiet viewpoints, and best village cooks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#0A3B32] text-base">Custom Tailored to You</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  No cookie-cutter schedules. Modify activities, change hotel tiers, linger longer at spots you love, or take relaxed morning starts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#0A3B32] text-base">Transparent Pricing</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Never worry about hidden driver allowances, fuel surcharges, or unexpected tolls. All terms are clearly stated upfront.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#0A3B32] text-base">Sustainable Tourism</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Strict ethical wildlife policies (zero captive elephant rides), plastic reduction, and direct financial support for rural families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Tourism Commitment */}
        <section id="sustainability" className="py-16 bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Ethical & Sustainable Travel
                </span>
                <h2 className="text-3xl font-extrabold font-serif mt-2 text-white">
                  Preserving Sri Lanka for Generations to Come
                </h2>
                <p className="text-sm text-emerald-100/90 mt-4 leading-relaxed">
                  Sri Lanka&apos;s wildlife and delicate ecosystems are a global treasure. We believe travel should leave destinations better than we found them.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-white block">Strict Wild Elephant Ethics:</strong>
                      <span className="text-emerald-100/80">We strictly refuse to support captive elephant riding, unnatural bathing shows, or chained animal attractions. We only visit wild national parks where animals roam freely.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-white block">Supporting Rural Livelihoods:</strong>
                      <span className="text-emerald-100/80">Our village lunches, catamaran boat rides, and cooking classes put 100% of activity fees directly into the hands of local rural families.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-white block">Plastic Reduction Initiative:</strong>
                      <span className="text-emerald-100/80">We provide reusable filtered water refills and actively participate in coastal beach cleanup drives across Mirissa and Arugam Bay.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <div className="bg-emerald-950/60 p-6 sm:p-8 rounded-3xl border border-emerald-700/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Certified Tourism Partner</h4>
                    <p className="text-xs text-emerald-200">Registered with Sri Lanka Tourism Development Authority</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Every driver-guide affiliated with EdgewayTours holds valid government tourist chauffeur licenses, comprehensive commercial passenger insurance, and verified background checks.
                </p>
                <div className="mt-5 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs">
                  <span className="text-emerald-300">24/7 Island Support Hotline:</span>
                  <span className="font-bold text-white">+94 77 123 4567</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Showcase */}
        <section id="team" className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                The People Behind Your Trip
              </span>
              <h2 className="text-3xl font-extrabold text-[#0A3B32] font-serif mt-2">
                Meet Our Lead Guides
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Passionate storytellers, defensive drivers, and wildlife spotters with years of field experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((guide, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative h-60 w-full">
                    <Image
                      src={guide.image}
                      alt={guide.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold text-amber-300 block uppercase tracking-wider">
                        {guide.specialty}
                      </span>
                      <h4 className="text-lg font-bold font-serif">{guide.name}</h4>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-700 block mb-2">{guide.role}</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{guide.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
