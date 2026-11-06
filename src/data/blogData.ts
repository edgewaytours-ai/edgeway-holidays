export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "itinerary" | "guide" | "cost" | "wildlife" | "culture";
  categoryLabel: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      list?: string[];
    }[];
    faq?: {
      q: string;
      a: string;
    }[];
  };
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "hire-driver-in-sri-lanka",
    title: "Hire Driver in Sri Lanka: 7 Mistakes (Avoid Scams)",
    metaTitle: "Hire Driver in Sri Lanka: 7 Mistakes (Avoid Scams)",
    metaDescription:
      "Planning to hire driver in sri lanka? Avoid these 7 costly mistakes, commission scams, and hidden fees. Read our 2027 guide to book with peace of mind.",
    category: "guide",
    categoryLabel: "Driver & Transport",
    image: "/images/hire-driver-in-sri-lanka.jpg",
    date: "November 2026",
    readTime: "8 min read",
    author: "Malik Fernando",
    authorRole: "Senior Chauffeur Guide",
    featured: true,
    content: {
      intro:
        "If you plan to hire driver in sri lanka, knowing what red flags to avoid can save you hundreds of dollars and protect your holiday from frustrating tourist commission traps. An all-inclusive quote from a certified tour operator includes vehicle fuel, highway tolls, insurance, and the chauffeur's lodging.",
      sections: [
        {
          heading: "Mistake 1: Choosing Unrealistically Cheap Quotes ($35 to $45 / Day)",
          body: "Fuel alone across Sri Lanka's mountains costs $20 to $30 daily. Drivers quoting $35 operate at a loss and make up their money through the 'Commission Circuit'—pressuring you to visit overpriced spice gardens, gem mines, and batik shops where they receive up to 40% kickback commissions.",
          list: [
            "Always choose verified tour operators who guarantee 0% forced commission shopping stops.",
            "Confirm that your driver focuses entirely on your chosen itinerary, not commercial showrooms.",
          ],
        },
        {
          heading: "Mistake 2: Overlooking Expressway Tolls & Fuel Surcharges",
          body: "Sri Lanka has modern high-speed expressways connecting Colombo Airport, the Cultural Triangle, Galle, and Hambantota. Toll gates cost between 300 to 1,000 LKR per passage.",
          list: [
            "Confirm in writing that all Southern Expressway, Central Expressway, and Airport Expressway tolls are included.",
            "Verify that fuel is unlimited for your agreed travel route with zero mileage surcharges.",
          ],
        },
        {
          heading: "Mistake 3: Not Clarifying Where the Driver Sleeps",
          body: "While established 3-star, 4-star, and luxury resorts offer free driver quarters, secluded Airbnb villas and homestays do not. If driver accommodation is not included, unverified drivers will demand $15 to $25 cash per night from you.",
          list: [
            "Edgeway Tours builds driver accommodation allowance into every quote so you never pay extra.",
          ],
        },
        {
          heading: "Mistake 4: Hiring Unlicensed Freelancers Without Commercial Insurance",
          body: "Many social media freelancers drive on standard private car insurance. If an accident occurs, tourist passengers are not legally covered. Always verify that your chauffeur holds an official Sri Lanka Tourism Development Authority (SLTDA) license.",
        },
        {
          heading: "Mistake 5: Overlooking Vehicle Air Conditioning & Luggage Capacity",
          body: "With tropical coastal temperatures hovering between 30°C and 34°C, working air conditioning is essential. Ensure your contract specifies a modern AC sedan (1–2 guests) or a spacious Toyota KDH luxury van (3–6 guests with large suitcases).",
        },
        {
          heading: "Mistake 6: Paying 100% Upfront Before Meeting Your Driver",
          body: "Never wire full payment in advance to unverified individuals. Edgeway Tours operates on a 15% deposit guarantee—you lock in your dates with just 15%, and pay the remaining balance in cash after arriving in Sri Lanka.",
        },
        {
          heading: "Mistake 7: Creating an Unrealistic Rushed Schedule",
          body: "Mountain roads behind tea trucks can turn a 100 km drive into a 4-hour journey. Work with your tour specialist to design a sensible, relaxed itinerary that allows you to experience the island without exhaustion.",
        },
      ],
      faq: [
        {
          q: "How far in advance should I hire driver in sri lanka?",
          a: "For the peak season (December to April), you should book at least 4 to 8 weeks in advance to secure top-rated English-speaking chauffeurs and newer vehicles.",
        },
        {
          q: "Can my driver help buy train tickets for Kandy to Ella?",
          a: "Yes! Edgeway Tours assists guests in securing reserved 1st and 2nd class train seats 30 days before travel, while your driver safely transfers your heavy luggage ahead to your Ella hotel.",
        },
        {
          q: "Do we have to pay for the driver's meals?",
          a: "No. Your chauffeur manages their own lunch and meals during touring hours. You are never obligated to buy meals for your driver.",
        },
      ],
    },
  },
  {
    slug: "sri-lanka-10-day-itinerary-private-driver",
    title: "Sri Lanka 10-Day Private Tour Itinerary with Driver (2027 Complete Guide)",
    metaTitle: "Sri Lanka 10-Day Private Tour Itinerary with Driver (2027 Guide)",
    metaDescription:
      "The ultimate 10-day Sri Lanka itinerary covering Sigiriya, Kandy, Ella scenic train, Yala safari, and Galle with an English-speaking private driver.",
    category: "itinerary",
    categoryLabel: "Tour Itinerary",
    image: "/images/hero-sigiriya.jpg",
    date: "November 2026",
    readTime: "9 min read",
    author: "Edgeway Tours Specialist",
    authorRole: "Head of Itinerary Design",
    featured: true,
    content: {
      intro:
        "Planning a holiday to Sri Lanka? Covering the Cultural Triangle, mist-shrouded tea plantations, iconic train rides, and leopard safaris within 10 days is the sweet spot for first-time and returning visitors. Having an experienced English-speaking private driver eliminates the stress of navigating rural roads and train ticket shortages.",
      sections: [
        {
          heading: "Days 1–3: Cultural Triangle (Sigiriya, Dambulla & Minneriya)",
          body: "Arrive at Bandaranaike International Airport (CMB) in Colombo and meet your private chauffeur guide. Head directly to the Cultural Triangle.",
          list: [
            "Day 1: Arrive, transfer to Sigiriya/Habarana, relax after your flight.",
            "Day 2: Early morning climb of the iconic 5th-century Sigiriya Lion Rock Fortress before midday heat. Afternoon Minneriya Elephant Gathering Safari.",
            "Day 3: Explore the Golden Dambulla Cave Temple featuring 150+ Buddha statues and ancient murals, then drive towards the hill capital of Kandy.",
          ],
        },
        {
          heading: "Days 4–5: Kandy & The Sacred Hill Capital",
          body: "Surrounded by misty mountains and tropical rainforests, Kandy is the spiritual heart of the island.",
          list: [
            "Day 4: Visit the Sacred Temple of the Tooth Relic (Sri Dalada Maligawa), stroll around Kandy Lake, and wander through the Royal Botanical Gardens of Peradeniya.",
            "Day 5: Scenic drive up into tea country (Nuwara Eliya). Stop at Ramboda Falls and tour an authentic Ceylon tea plantation and processing factory.",
          ],
        },
        {
          heading: "Days 6–7: The Blue Train to Ella & Nine Arch Bridge",
          body: "Board the world-famous blue train from Nanu Oya to Ella while your private chauffeur transports your heavy luggage ahead to your hotel.",
          list: [
            "Day 6: Spectacular 3.5-hour train ride through tea terraces, waterfalls, and mountain tunnels. Arrive in Ella and watch the sunset at Little Adam's Peak.",
            "Day 7: Sunrise walk to the iconic Nine Arch Bridge to watch the morning train pass. Hike to Diyaluma Falls or Ravana Pool Club.",
          ],
        },
        {
          heading: "Days 8–9: Yala Safari & The Southern Coast (Mirissa / Galle)",
          body: "Descend from the mountains into the southern wilderness and historic coastline.",
          list: [
            "Day 8: Dawn 4x4 open-top jeep safari in Yala National Park tracking leopards, elephants, and sloth bears. Afternoon drive along the south coast to Mirissa.",
            "Day 9: Relax on tropical sandy beaches, watch stilt fishermen in Weligama, and explore the cobblestone UNESCO World Heritage Galle Dutch Fort at sunset.",
          ],
        },
        {
          heading: "Day 10: Colombo City & Departure",
          body: "Drive smoothly along the Southern Expressway directly to Colombo or the airport for your flight home, filled with lifetime memories.",
        },
      ],
      faq: [
        {
          q: "How much does a 10-day private driver in Sri Lanka cost?",
          a: "A private English-speaking chauffeur guide in a modern air-conditioned vehicle typically costs $60 to $80 per day, which includes vehicle, fuel, highway toll charges, parking, driver accommodation, and driver meals.",
        },
        {
          q: "Can this 10-day itinerary be customized?",
          a: "Yes! Edgeway Tours tailors every itinerary to your exact flight times, preferred pace, and hotel choices.",
        },
      ],
    },
  },
  {
    slug: "cost-of-private-driver-sri-lanka",
    title: "Cost of Private Driver in Sri Lanka (2027 Price Guide & Tips)",
    metaTitle: "Cost of Private Driver in Sri Lanka 2027: Rates, Fuel & Tips",
    metaDescription:
      "How much does a private driver in Sri Lanka cost? Transparent breakdown of daily rates, vehicle types, tolls, tips, and avoiding hidden fees.",
    category: "cost",
    categoryLabel: "Cost & Budget",
    image: "/images/tour-ella.jpg",
    date: "November 2026",
    readTime: "7 min read",
    author: "Pradeep Wickramasinghe",
    authorRole: "Senior Chauffeur Guide",
    featured: false,
    content: {
      intro:
        "Hiring a private driver is widely considered the best, safest, and most convenient way to explore Sri Lanka. But international travelers often wonder: How much does it really cost, and what hidden fees should you watch out for? Here is a 100% transparent guide.",
      sections: [
        {
          heading: "Average Daily Rates for a Private Driver in Sri Lanka",
          body: "In 2026/2027, the standard market price for a professional, tourist-board licensed English-speaking chauffeur guide ranges as follows:",
          list: [
            "Sedan Car (1–2 passengers): $55 – $70 USD per day",
            "Mini Van / KDH Luxury Van (3–6 passengers): $75 – $95 USD per day",
            "Large Van / Commuter (7–12 passengers): $100 – $130 USD per day",
          ],
        },
        {
          heading: "What Is Included in an All-Inclusive Rate?",
          body: "When booking with a reputable tour operator like Edgeway Tours, your daily quote includes:",
          list: [
            "Comfortable air-conditioned private vehicle dedicated exclusively to your group",
            "Unlimited fuel for the agreed itinerary",
            "All Southern Expressway & Airport Expressway toll fees",
            "Driver's meals and driver's accommodation allowance across all cities",
            "Parking fees, vehicle commercial insurance, and government tourist licenses",
          ],
        },
        {
          heading: "What About Tipping Your Driver in Sri Lanka?",
          body: "Tipping is customary and greatly appreciated in Sri Lanka. If you are pleased with your driver's service, local guidance, and punctuality, the standard tip is between 3,000 LKR to 5,000 LKR ($10 – $15 USD) per day from the total traveling group.",
        },
      ],
      faq: [
        {
          q: "Do I have to book a hotel room for the driver?",
          a: "No! Most quality 3-star, 4-star, and boutique hotels in Sri Lanka provide free driver quarters. In cases where the hotel doesn't have driver quarters, the driver's accommodation allowance is already included in your Edgeway Tours package.",
        },
        {
          q: "How can I book a verified driver for 2027?",
          a: "Simply contact us on WhatsApp with your travel dates and passenger count to receive a firm, transparent quote within 15 minutes.",
        },
      ],
    },
  },
  {
    slug: "scenic-train-kandy-ella",
    title: "The Complete Guide to the Scenic Blue Train from Kandy to Ella",
    metaTitle: "Scenic Blue Train Kandy to Ella: Tickets, Timetable & Guide",
    metaDescription:
      "Everything you need to know about booking 1st vs 2nd class reserved seats, timetable schedules, Nine Arch Bridge photo spots, and private baggage transfers.",
    category: "guide",
    categoryLabel: "Train Journeys",
    image: "/images/tour-ella.jpg",
    date: "October 2026",
    readTime: "6 min read",
    author: "Ruwan Senanayake",
    authorRole: "Hill Country Specialist",
    featured: false,
    content: {
      intro:
        "The train journey between Kandy and Ella is celebrated globally as one of the most breathtaking railway journeys on earth. Winding through misty emerald tea plantations, cloud forests, cascading waterfalls, and mountain tunnels, it is a centerpiece of any Sri Lanka itinerary.",
      sections: [
        {
          heading: "Which Class Should You Book? 1st vs 2nd vs 3rd Class",
          body: "Understanding the different carriage options is essential for a great trip:",
          list: [
            "2nd Class Reserved (Recommended): The favorite choice among travelers. The windows and carriage doors open freely, allowing cool mountain breezes and incredible photography opportunities.",
            "1st Class Air-Conditioned: Features sealed windows and plush reserved seating. Comfortable, but you cannot open the windows or lean out for photos.",
            "Observation Car: Attached to select morning trains with large rear-facing panoramic glass windows.",
          ],
        },
        {
          heading: "The Luggage Dilemma: Solved with a Private Driver",
          body: "Sri Lankan train carriages have very limited luggage storage space, and carrying large suitcases onto crowded trains can be stressful. When you travel with Edgeway Tours, you can board the train with just a camera daypack while your private driver transports all heavy luggage ahead directly to your Ella hotel.",
        },
        {
          heading: "Best Side to Sit on the Train",
          body: "For the segment between Kandy (or Nanu Oya) and Ella, sitting on the RIGHT side gives you the best initial valley views, while the LEFT side provides sweeping vistas of tea estates as you approach Ella Rock and Demodara.",
        },
      ],
      faq: [
        {
          q: "How far in advance do train tickets open?",
          a: "Reserved Sri Lanka Railway tickets open exactly 30 days prior to the travel date and often sell out within hours. Edgeway Tours can arrange reserved seat bookings for our guests in advance.",
        },
      ],
    },
  },
];
