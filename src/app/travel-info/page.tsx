"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HelpCircle,
  Sun,
  ShieldCheck,
  CreditCard,
  FileText,
  Train,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Plane,
  HeartPulse,
  Compass,
  AlertCircle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "booking" | "safety" | "logistics" | "food";
}

const faqs: FAQItem[] = [
  {
    category: "safety",
    question: "Is Sri Lanka safe for international tourists and families?",
    answer:
      "Yes, absolutely. Sri Lanka is consistently ranked among the safest and most hospitable travel destinations globally. Violent crime against tourists is extremely rare. Locals are world-renowned for their warmth, friendliness, and respect for guests. With a dedicated EdgewayTours private chauffeur-guide, you have a trusted local companion with you at all times.",
  },
  {
    category: "booking",
    question: "What is included in an EdgewayTours private itinerary?",
    answer:
      "Our standard private packages include: private air-conditioned vehicle (car, SUV, or micro-van based on group size), licensed English-speaking tourist driver-guide, fuel, highway tolls, parking charges, driver's accommodation & meals, hotel accommodations with daily breakfast, reserved scenic train tickets, and all specified safari jeep excursions. International flights and personal lunches/dinners are typically excluded unless requested.",
  },
  {
    category: "logistics",
    question: "How do we get tickets for the famous Kandy to Ella train?",
    answer:
      "Sri Lanka Railways releases reserved train seats 30 days in advance, and tickets frequently sell out within minutes. When you book a multi-day tour package with EdgewayTours, our team reserves and secures your 1st class or 2nd class reserved seats in advance on your behalf. Your private driver transports your heavy luggage by road, meeting you on the platform at Ella station when you disembark!",
  },
  {
    category: "food",
    question: "Can you accommodate Halal, Vegetarian, Vegan, or Gluten-Free diets?",
    answer:
      "Yes, effortlessly. Sri Lankan cuisine is naturally one of the friendliest in the world for plant-based and gluten-free eaters — traditional curries are cooked with pure coconut milk, rice flour, and fresh spices rather than wheat or dairy. Certified Halal meat is widely available island-wide, and all our partner hotels and village lunch spots accommodate dietary requirements with advance notice.",
  },
  {
    category: "booking",
    question: "What is your booking deposit and cancellation policy?",
    answer:
      "To confirm your custom private tour, we require a modest 20% deposit. The remaining balance can be settled 14 days before arrival or upon arrival in Colombo. If your international flight is cancelled or your travel plans change up to 14 days prior to departure, your deposit is fully refundable or transferable to any future date within 24 months.",
  },
  {
    category: "logistics",
    question: "What should I wear when visiting Buddhist and Hindu temples?",
    answer:
      "Modesty and respect are paramount. Both men and women must cover their shoulders and knees. Hats and footwear must be removed before entering temple compounds (we recommend wearing slip-on shoes and bringing an extra pair of socks, as stone pavements can get warm in the midday sun). White or light-colored clothing is traditional and appreciated.",
  },
];

export default function TravelInfoPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");

  const filteredFaqs = faqs.filter(
    (faq) => activeFaqCategory === "all" || faq.category === activeFaqCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#063D34] text-white py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <FileText className="w-3.5 h-3.5" />
                <span>Sri Lanka Travel Handbook</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                Essential Sri Lanka <br />
                <span className="text-amber-400">Travel Advice & FAQs</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                Everything you need to know before visiting Sri Lanka: dual monsoon weather seasons, visa applications, train bookings, currency tips, and answers to common traveler questions.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Nav Anchor Bar */}
        <section className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 overflow-x-auto py-3.5 text-xs font-bold text-slate-700 scrollbar-none">
            <a href="#visa" className="hover:text-[#0A3B32] whitespace-nowrap">
              1. Visa & Entry (ETA)
            </a>
            <a href="#best-time" className="hover:text-[#0A3B32] whitespace-nowrap">
              2. Weather & Best Time
            </a>
            <a href="#train" className="hover:text-[#0A3B32] whitespace-nowrap">
              3. Scenic Train Tips
            </a>
            <a href="#money" className="hover:text-[#0A3B32] whitespace-nowrap">
              4. Currency & Money
            </a>
            <a href="#faq" className="hover:text-[#0A3B32] whitespace-nowrap">
              5. Frequently Asked Questions
            </a>
          </div>
        </section>

        {/* 1. Visa & Entry Guidelines */}
        <section id="visa" className="py-14 scroll-mt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0A3B32] flex items-center justify-center font-bold">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-[#0A3B32]">
                    1. Visa & Entry Regulations (ETA)
                  </h2>
                  <p className="text-xs text-slate-500">Official Electronic Travel Authorization guidelines</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">Apply Online (ETA)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Most nationalities require an Electronic Travel Authorization (ETA) prior to arrival. Apply via the official government portal (<code className="text-emerald-700 font-bold">eta.gov.lk</code>). Standard tourist visas are valid for 30 days with double entry.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">Passport Validity</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your passport must be valid for a minimum of 6 months from your scheduled date of entry into Sri Lanka, with at least two blank visa pages.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">SIM Cards & Internet</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-speed 4G tourist SIM cards (Dialog and Mobitel) can be purchased right outside the baggage claim at Colombo Bandaranaike International Airport (BIA) for around $10-$15 with 20-50GB data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Weather & Best Time Guide */}
        <section id="best-time" className="py-10 scroll-mt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-[#0A3B32]">
                    2. Dual Monsoon Weather: When to Visit Where
                  </h2>
                  <p className="text-xs text-slate-500">Sri Lanka is a genuine year-round holiday destination</p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 mb-6 text-xs text-[#0A3B32] leading-relaxed">
                <strong>Key Insight:</strong> Sri Lanka experiences two contrasting monsoons. When one side of the island gets rain, the opposite coast enjoys dry, golden sunshine and calm turquoise seas. No matter what month you arrive, a perfect sunny beach is always waiting!
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-[#063D34] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Region</th>
                      <th className="p-3">Prime Months (Sunny & Dry)</th>
                      <th className="p-3">Monsoon / Rainy Season</th>
                      <th className="p-3">Top Highlights During Season</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">South & West Coast (Mirissa, Galle, Bentota, Weligama)</td>
                      <td className="p-3 text-emerald-700 font-bold">December – April</td>
                      <td className="p-3 text-slate-500">May – September</td>
                      <td className="p-3 text-slate-600">Blue whale watching, calm swimming seas, golden sunsets</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">East Coast (Arugam Bay, Trincomalee, Nilaveli)</td>
                      <td className="p-3 text-emerald-700 font-bold">May – October</td>
                      <td className="p-3 text-slate-500">November – January</td>
                      <td className="p-3 text-slate-600">World-class surf breaks, Pigeon Island coral snorkeling</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa)</td>
                      <td className="p-3 text-emerald-700 font-bold">January – September</td>
                      <td className="p-3 text-slate-500">October – December</td>
                      <td className="p-3 text-slate-600">Lion Rock climbs, elephant gathering at Minneriya (Jul-Oct)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Central Highlands (Ella, Kandy, Nuwara Eliya)</td>
                      <td className="p-3 text-emerald-700 font-bold">January – May & August – September</td>
                      <td className="p-3 text-slate-500">October – November</td>
                      <td className="p-3 text-slate-600">Scenic train ride, tea estate walks, Horton Plains trekking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Train Travel Guide */}
        <section id="train" className="py-10 scroll-mt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-[#0A3B32]">
                    3. The Kandy to Ella Scenic Train Guide
                  </h2>
                  <p className="text-xs text-slate-500">Voted one of the most picturesque railway journeys on earth</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900">Class Selection: 1st vs 2nd Class</h4>
                  <p>
                    <strong>2nd Class Reserved (Recommended for Photography):</strong> Open windows and doors permit the classic Sri Lanka train photo, refreshing mountain breezes, and panoramic views of endless tea plantations.
                  </p>
                  <p>
                    <strong>1st Class Air-Conditioned:</strong> Sealed panoramic windows with fixed air conditioning. Very comfortable for travelers sensitive to heat, but windows cannot be opened for photography.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900">The Edgeway Luggage Advantage</h4>
                  <p>
                    Sri Lankan trains have tight aisles and minimal luggage storage. Hauling heavy suitcases onto crowded carriages can be stressful.
                  </p>
                  <p className="p-3 bg-emerald-50 rounded-xl text-[#0A3B32] font-medium border border-emerald-100">
                    With an EdgewayTours private tour, your private chauffeur takes your suitcases securely in the car while you enjoy the scenic 3.5 to 5-hour train journey with just a small daypack. Your driver greets you right on the platform when you pull into Ella station!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Money & Tipping Guidelines */}
        <section id="money" className="py-10 scroll-mt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-[#0A3B32]">
                    4. Currency, ATMs & Tipping Etiquette
                  </h2>
                  <p className="text-xs text-slate-500">Managing your finances smoothly in Sri Lanka</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1.5 text-sm">Currency & Cash</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Official currency is the Sri Lankan Rupee (LKR). While mid-to-high-end hotels and restaurants accept Visa/Mastercard, keep small LKR cash bills (Rs. 100, 500, 1000) for fruit stalls, tuk-tuks, and village shops.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1.5 text-sm">ATM Accessibility</h4>
                  <p className="text-slate-600 leading-relaxed">
                    ATMs are easily accessible across major towns (Commercial Bank, Sampath Bank, and Hatton National Bank accept international cards). Inform your home bank before traveling to prevent anti-fraud card freezes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1.5 text-sm">Tipping Customs</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Tipping is customary and deeply appreciated. Recommended guidelines: Chauffeur-guide: $10 - $15 USD per day for exceptional service; Safari jeep tracker: $5 - $8 USD; Luggage porters: Rs. 200 - 500 per bag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Interactive FAQ Accordion */}
        <section id="faq" className="py-14 scroll-mt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Got Questions?
              </span>
              <h2 className="text-3xl font-extrabold text-[#0A3B32] font-serif mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Click any question below to see detailed answers and travel recommendations.
              </p>

              {/* Category tabs */}
              <div className="mt-6 flex items-center justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {[
                  { id: "all", label: "All Questions" },
                  { id: "booking", label: "Booking & Deposits" },
                  { id: "safety", label: "Safety & Health" },
                  { id: "logistics", label: "Trains & Logistics" },
                  { id: "food", label: "Food & Dietary" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFaqCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeFaqCategory === cat.id
                        ? "bg-[#063D34] text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion List */}
            <div className="max-w-3xl mx-auto space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-[#0A3B32]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0A3B32]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#063D34] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Have a specific question?</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mt-1">
                Chat Directly With Our Local Specialists
              </h3>
              <p className="text-sm text-emerald-100/90 mt-2">
                We are based right here in Sri Lanka and always happy to answer questions regarding routes, weather, or custom itineraries.
              </p>
            </div>
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 shrink-0"
            >
              <span>Ask Our Trip Planner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
