export interface TourDetail {
  id: string;
  slug: string;
  title: string;
  category: "wildlife" | "culture" | "beach" | "nature";
  image: string;
  rating: string;
  reviewsCount: string;
  duration: string;
  tourType: string;
  price: string;
  badge?: string | null;
  location: string;
  shortDescription: string;
  fullOverview: string;
  highlights: string[];
  itinerary: {
    time: string;
    activity: string;
    description: string;
  }[];
  included: string[];
  excluded: string[];
  importantInfo: string[];
}

export const popularToursData: TourDetail[] = [
  {
    id: "yala",
    slug: "yala-wildlife-safari",
    title: "Yala Wildlife Safari",
    category: "wildlife",
    image: "/images/tour-yala.jpg",
    rating: "4.9",
    reviewsCount: "120+",
    duration: "Half-day / Full-day",
    tourType: "Private or Group",
    price: "75",
    badge: null,
    location: "Yala National Park, Ruhuna",
    shortDescription: "Track elusive Sri Lankan leopards, wild Asian elephants, and sloth bears in Sri Lanka's premier national park.",
    fullOverview:
      "Spanning nearly 1,000 square kilometers on the southeastern shores of Sri Lanka, Yala National Park boasts the highest leopard density in the world. Our private safari expeditions feature modified high-clearance 4x4 open-top safari jeeps, an experienced local driver, and an eagle-eyed wildlife tracker who knows the recent movements of the park's famous resident leopards.",
    highlights: [
      "Track Sri Lankan leopards (Panthera pardus kotiya) across rocky outcrops and scrubland",
      "Witness wild Asian elephant herds, spotted deer, wild boars, and sloth bears",
      "Spectacular coastal scenery along Palatupana beach dunes and Manik Ganga river",
      "Birdwatching paradise: over 215 bird species including painted storks, hornbills, and sea eagles",
      "Safe, high-visibility seating with charging ports and wide-angle photography angles",
    ],
    itinerary: [
      {
        time: "05:30 AM",
        activity: "Hotel Pickup & Transfer",
        description: "Your private safari jeep picks you up directly from your hotel or resort in Yala, Tissamaharama, or Kirinda.",
      },
      {
        time: "06:00 AM",
        activity: "Park Gate Entrance at Dawn",
        description: "Enter Yala Block 1 right as the gates open. Early morning is prime hunting time for leopards and active birds.",
      },
      {
        time: "06:15 AM - 09:30 AM",
        activity: "Deep Wilderness Safari Game Drive",
        description: "Navigate through dense jungle tracks, checking waterholes, rocky escarpments, and known leopard resting trees.",
      },
      {
        time: "09:30 AM",
        activity: "Riverbank / Coastal Picnic Break",
        description: "Rest and enjoy a picnic breakfast with fresh tropical fruits, Ceylon tea, and snacks near the Manik Ganga river crossing.",
      },
      {
        time: "10:00 AM - 11:30 AM",
        activity: "Elephant & Birding Drive",
        description: "Visit the lagoons and marshlands to spot bathing Asian elephants, mugger crocodiles, and colorful wading birds.",
      },
      {
        time: "11:45 AM",
        activity: "Return to Hotel",
        description: "Safe drop-off back at your hotel or onward transfer with your Edgeway chauffeur.",
      },
    ],
    included: [
      "Private 4x4 open-top Toyota safari jeep with cushioned elevated seating",
      "Certified National Wildlife Tracker and experienced English-speaking driver",
      "All Yala National Park entrance admission tickets, wildlife department fees & VAT",
      "Door-to-door hotel pickup & drop-off (Yala, Tissamaharama, Kataragama, Kirinda)",
      "Chilled bottled water and seasonal fresh tropical fruit snacks",
      "High-power optical binoculars for guest use during the safari",
    ],
    excluded: [
      "Gratuities for safari tracker and driver (recommended $5-$10)",
      "Personal travel insurance",
      "Breakfast pack (can be provided by your hotel upon request)",
    ],
    importantInfo: [
      "Morning safaris depart at 05:30 AM; afternoon safaris depart at 02:30 PM.",
      "Wear neutral, earth-toned clothing (greens, browns, beiges). Avoid bright neon colors.",
      "Bring sunscreen, sunglasses, a hat, and a camera with a telephoto zoom lens (200mm+ recommended).",
    ],
  },
  {
    id: "sigiriya",
    slug: "sigiriya-dambulla-tour",
    title: "Sigiriya & Dambulla Tour",
    category: "culture",
    image: "/images/tour-sigiriya.jpg",
    rating: "4.8",
    reviewsCount: "100+",
    duration: "Full day tour",
    tourType: "Private tour",
    price: "90",
    badge: null,
    location: "Cultural Triangle, Central Province",
    shortDescription: "Climb the ancient 5th-century Lion Rock fortress and explore the sacred painted cave temples of Dambulla.",
    fullOverview:
      "Embark on an unforgettable journey through two UNESCO World Heritage jewels in Sri Lanka's cultural heartland. Stand in awe beneath the towering 200-meter monolith of Sigiriya Lion Rock, engineered by King Kashyapa in 477 AD. Admire 1,500-year-old heavenly maiden frescoes, walk the historic mirror wall, and wander through five ancient cave sanctuaries at Dambulla adorned with vibrant murals and 153 gilded Buddha statues.",
    highlights: [
      "Ascend 1,200 steps through the colossal Lion Paws to King Kashyapa's summit palace ruins",
      "View the world-renowned 5th-century Sigiriya maiden frescoes preserved in natural rock niches",
      "Stroll the ancient symmetrical royal pleasure water gardens and landscaped boulder terraces",
      "Explore the UNESCO Dambulla Cave Temple complex dating back to the 1st century BC",
      "Authentic rural village feast with 5 curries served in traditional clay pots over wood fires",
    ],
    itinerary: [
      {
        time: "07:00 AM",
        activity: "Hotel Departure",
        description: "Pickup from your hotel in Kandy, Dambulla, or Sigiriya in a private air-conditioned vehicle.",
      },
      {
        time: "08:15 AM",
        activity: "Climb Sigiriya Lion Rock Fortress",
        description: "Early morning ascent before the midday heat. Pass through the water gardens, mirror wall, and Lion Gate to the summit.",
      },
      {
        time: "11:30 AM",
        activity: "Sigiriya Archaeological Museum",
        description: "Gain deeper context with models of ancient hydraulic technology and excavated royal artifacts.",
      },
      {
        time: "12:45 PM",
        activity: "Authentic Village Lunch",
        description: "Enjoy a traditional Sri Lankan village buffet with fragrant red rice, lotus root curry, pol sambol, and papadam.",
      },
      {
        time: "02:30 PM",
        activity: "Dambulla Royal Cave Temple",
        description: "Climb to the sacred cliff-side caves containing centuries of Buddhist art and a massive 14-meter reclining Buddha carved from solid rock.",
      },
      {
        time: "04:30 PM",
        activity: "Scenic Countryside Return Drive",
        description: "Stop at a roadside fruit stall for fresh king coconuts before arriving safely back at your hotel.",
      },
    ],
    included: [
      "Private air-conditioned vehicle with fuel, tolls, and licensed English-speaking chauffeur-guide",
      "Official UNESCO entrance tickets to Sigiriya Rock Fortress ($36 USD value included)",
      "Official UNESCO entrance tickets to Dambulla Cave Temple complex",
      "Delicious traditional clay-pot village lunch buffet",
      "Door-to-door hotel pickup and return drop-off",
      "Chilled bottled water and cooling towels throughout the day",
    ],
    excluded: [
      "Personal purchases and souvenirs",
      "Tips for chauffeur-guide and local site guides",
    ],
    importantInfo: [
      "Climbing Sigiriya involves approximately 1,200 stairs. Wear comfortable walking shoes.",
      "At Dambulla Temple, shoulders and knees must be covered. Footwear must be removed before entering the sacred cave complex.",
    ],
  },
  {
    id: "arugam",
    slug: "surf-lessons-in-arugam-bay",
    title: "Surf Lessons in Arugam Bay",
    category: "beach",
    image: "/images/tour-arugam.jpg",
    rating: "4.9",
    reviewsCount: "150+",
    duration: "2 hours",
    tourType: "All equipment included",
    price: "35",
    badge: "Best Seller",
    location: "Arugam Bay & Pottuvil, East Coast",
    shortDescription: "Catch world-class right-hand point breaks with ISA certified local surf instructors in Arugam Bay.",
    fullOverview:
      "Arugam Bay is ranked among the top ten surf destinations in the world, celebrated for its long, peeling right-hand waves and warm turquoise waters. Whether you are catching your very first wave or seeking to refine your trimming and cutbacks on point breaks, our certified local instructors ensure a fun, safe, and empowering session customized to your level.",
    highlights: [
      "1-on-1 or small group coaching (max 2 students per instructor) for dedicated attention",
      "Safe introduction to ocean dynamics: wave selection, pop-up technique, and board balance",
      "Surf spot matched to daily swell conditions: Baby Point, Whiskey Point, or Peanut Farm",
      "Premium soft-top learner boards and fiberglass progression boards provided",
      "Complimentary GoPro action photos and video feedback to capture your wave rides",
    ],
    itinerary: [
      {
        time: "00:00 - 00:20",
        activity: "Beach Safety & Technique Briefing",
        description: "Learn board positioning, pop-up mechanics on the sand, paddling efficiency, and ocean etiquette.",
      },
      {
        time: "00:20 - 01:40",
        activity: "Coached Ocean Wave Riding",
        description: "Hit the gentle breaking waves with your instructor right beside you, pushing you into perfect peelers and giving instant coaching feedback.",
      },
      {
        time: "01:40 - 02:00",
        activity: "Cool Down & Debrief",
        description: "Paddle back to the beach, review GoPro wave footage, and sip a fresh king coconut under the palm trees.",
      },
    ],
    included: [
      "2 full hours with certified ISA (International Surfing Association) local surf instructor",
      "Surfboard rental (soft-top for beginners or epoxy performance board for intermediates)",
      "Surf leash, wax, and UV-protective rash guard",
      "Tuk-tuk transfer to the designated surf spot (Whiskey Point / Elephant Rock if required)",
      "Fresh tender king coconut drink after the session",
      "High-resolution digital photos and GoPro videos of your best rides",
    ],
    excluded: [
      "Sunscreen (please apply reef-safe water-resistant sunscreen beforehand)",
      "Gratuity for surf coach",
    ],
    importantInfo: [
      "No prior surfing experience required! Basic swimming ability is recommended.",
      "Sessions run at sunrise (06:30 AM) and late afternoon (04:00 PM) when ocean winds are lightest.",
    ],
  },
  {
    id: "ella",
    slug: "ella-scenic-day-tour",
    title: "Ella Scenic Day Tour",
    category: "nature",
    image: "/images/tour-ella.jpg",
    rating: "4.8",
    reviewsCount: "110+",
    duration: "Full day tour",
    tourType: "Private tour",
    price: "80",
    badge: null,
    location: "Ella, Central Highlands",
    shortDescription: "Experience the iconic 1921 Nine Arch Bridge, Little Adam's Peak, cascading Ravana Falls, and lush Ceylon tea estates.",
    fullOverview:
      "Perched high in the misty southern highlands of Sri Lanka, Ella is a paradise of panoramic mountain passes, emerald tea terraces, and historic colonial engineering. This private full-day tour takes you to the finest viewpoints, allows you to watch the iconic blue train cross the nine arches, and lets you taste authentic single-estate Ceylon tea right where it is grown.",
    highlights: [
      "Stand above the magnificent 1921 Nine Arch Bridge and watch colonial trains cross beneath the jungle canopy",
      "Gentle scenic hike up Little Adam's Peak through rolling tea bushes with 360-degree mountain vistas",
      "Visit the thundering 25-meter Ravana Falls and hear the ancient Ramayana legend",
      "Guided tour of an authentic working Ceylon tea factory and master tea-tasting flight",
      "Lunch at a panoramic mountainside cafe overlooking Ella Gap and misty ravines",
    ],
    itinerary: [
      {
        time: "08:00 AM",
        activity: "Hotel Pickup in Ella",
        description: "Private air-conditioned pickup from your accommodation in Ella or Bandarawela.",
      },
      {
        time: "08:30 AM",
        activity: "Nine Arch Bridge Train Crossing",
        description: "Walk down through lush tea gardens to the bridge in time to witness the morning blue train cross over the stone viaduct.",
      },
      {
        time: "10:30 AM",
        activity: "Little Adam's Peak Trek",
        description: "A gentle 45-minute trail winding through tea terraces to the summit ridge, offering jaw-dropping views over Ella Rock.",
      },
      {
        time: "12:30 PM",
        activity: "Panoramic Mountain Lunch",
        description: "Relax at a celebrated hillside restaurant overlooking Ella Gap with views down to the southern coastal plains.",
      },
      {
        time: "02:00 PM",
        activity: "Ceylon Tea Factory & Tasting",
        description: "Discover the orthodox manufacture of world-famous Ceylon black, green, and silver tip teas with a factory specialist.",
      },
      {
        time: "03:45 PM",
        activity: "Ravana Falls & Ravana Cave",
        description: "Visit the legendary cascade of Ravana Falls and photograph the gushing mountain waters.",
      },
      {
        time: "05:00 PM",
        activity: "Return Drop-Off",
        description: "Safe transfer back to your hotel or drop-off at an Ella town cafe for evening dining.",
      },
    ],
    included: [
      "Private air-conditioned vehicle with dedicated English-speaking chauffeur-guide",
      "Halpewatte Ceylon Tea Factory guided entry and tea tasting session",
      "All fuel, highway tolls, and parking fees",
      "Door-to-door hotel pickup and drop-off in Ella or Bandarawela",
      "Chilled bottled water and refreshing towels",
    ],
    excluded: [
      "Lunch and drinks (driver will recommend wonderful scenic dining options)",
      "Tips for chauffeur-guide and tea factory specialist",
    ],
    importantInfo: [
      "Bring comfortable walking or running shoes for the trails at Little Adam's Peak and Nine Arch Bridge.",
      "Mornings can be crisp while afternoons are warm; dressing in light layers is ideal.",
    ],
  },
];

export interface PackageDetail {
  id: string;
  slug: string;
  title: string;
  tag: string;
  tagColor: string;
  duration: string;
  price: string;
  image: string;
  overview: string;
  highlights: string[];
  days: {
    dayNumber: number;
    title: string;
    description: string;
  }[];
  included: string[];
}

export const multiDayPackagesData: PackageDetail[] = [
  {
    id: "highlights",
    slug: "sri-lanka-highlights",
    title: "Sri Lanka Highlights",
    tag: "Classic",
    tagColor: "bg-[#10B981] text-white",
    duration: "7 Days • 6 Nights",
    price: "690",
    image: "/images/hero-sigiriya.jpg",
    overview:
      "The quintessential Sri Lanka journey. Experience the cultural wonders of Sigiriya and Dambulla, the sacred city of Kandy, the scenic mountain train to Ella, a thrilling leopard safari in Yala, and relaxation on southern golden beaches.",
    highlights: [
      "Climb Sigiriya Lion Rock and visit Dambulla Cave Temples",
      "Temple of the Tooth and Peradeniya Royal Botanical Gardens in Kandy",
      "Scenic blue train ride from Kandy through misty tea valleys to Ella",
      "4x4 open safari jeep game drive in Yala National Park",
      "Relaxation on the palm-fringed beaches of Mirissa & Galle Fort tour",
    ],
    days: [
      { dayNumber: 1, title: "Arrival at Colombo (BIA) & Transfer to Sigiriya", description: "Meet your private chauffeur-guide, scenic drive to the Cultural Triangle, check-in to eco-resort." },
      { dayNumber: 2, title: "Sigiriya Lion Rock & Minneriya Elephant Gathering", description: "Climb the ancient rock fortress at sunrise, afternoon jeep safari to witness hundreds of wild elephants." },
      { dayNumber: 3, title: "Dambulla Caves & Sacred City of Kandy", description: "Explore the golden cave temple, drive to Kandy, visit the Temple of the Sacred Tooth Relic." },
      { dayNumber: 4, title: "The World-Famous Scenic Train to Ella", description: "Board the iconic blue train through the mountains, cross the Nine Arch Bridge, check-in at Ella." },
      { dayNumber: 5, title: "Little Adam's Peak & Yala Leopard Safari", description: "Morning hike in Ella, descend to the southern plains, afternoon 4x4 game drive in Yala National Park." },
      { dayNumber: 6, title: "Mirissa Golden Coast & Galle Dutch Fort", description: "Drive along the southern coast, visit the colonial UNESCO ramparts of Galle Fort, beach sunset dinner." },
      { dayNumber: 7, title: "Southern Coast to Colombo Airport Departure", description: "Morning leisure on the beach, highway transfer to Colombo BIA airport for your departure flight." },
    ],
    included: [
      "6 nights in curated 4-star boutique hotels with daily breakfast",
      "Dedicated air-conditioned private vehicle and licensed English chauffeur-guide throughout",
      "Reserved 2nd class seats on the scenic Kandy to Ella train",
      "Private 4x4 safari jeep and entrance tickets to Yala National Park",
      "All entrance tickets: Sigiriya Lion Rock, Dambulla Caves, Temple of the Tooth",
      "All fuel, highway tolls, parking fees, and driver expenses",
    ],
  },
  {
    id: "adventure",
    slug: "coast-and-adventure",
    title: "Coast & Adventure",
    tag: "Adventure",
    tagColor: "bg-[#0EA5E9] text-white",
    duration: "10 Days • 9 Nights",
    price: "890",
    image: "/images/pkg-adventure.jpg",
    overview:
      "Engineered for thrill-seekers, hikers, and wave riders. From white-water rafting in Kitulgala to high mountain ridge treks in Knuckles, surfing point breaks in Arugam Bay, and ocean whale watching off Mirissa.",
    highlights: [
      "Grade 3 white-water rafting & canyoning on the Kelani River",
      "Multi-day hiking in the UNESCO Knuckles Range and Ella Rock",
      "3 days of surfing point breaks and lagoon safaris in Arugam Bay",
      "Deep ocean blue whale watching boat safari in Mirissa",
      "Campfire under the stars in an eco-adventure wilderness camp",
    ],
    days: [
      { dayNumber: 1, title: "Arrival & Transfer to Kitulgala Rainforest", description: "Check into riverside eco-lodge, sunset river swimming." },
      { dayNumber: 2, title: "Kitulgala White Water Rafting & Waterfall Jumps", description: "Raft Grade 3 rapids, jungle canyoning, transfer to Kandy." },
      { dayNumber: 3, title: "Knuckles Mountain Range Ridge Trek", description: "Full-day guided trek through cloud forests and crystal waterfalls." },
      { dayNumber: 4, title: "Kandy to Ella Mountain Trail", description: "Train ride to Ella, hike Little Adam's Peak and Ravana Falls." },
      { dayNumber: 5, title: "Ella Rock Hike & Transfer to Arugam Bay", description: "Challenging morning hike, drive to the east coast surfing mecca." },
      { dayNumber: 6, title: "Arugam Bay Surf & Whiskey Point", description: "Morning surf coaching, afternoon beach relaxation." },
      { dayNumber: 7, title: "Kumana Safari & Sunset Lagoon Boat Ride", description: "Spot wild elephants and leopards in Kumana, watch birds in Pottuvil lagoon." },
      { dayNumber: 8, title: "Arugam Bay to Mirissa South Coast", description: "Scenic southern drive, arrive at Mirissa beach." },
      { dayNumber: 9, title: "Mirissa Blue Whale Watching & Surf", description: "Early morning boat safari for blue whales, afternoon Weligama surf." },
      { dayNumber: 10, title: "Galle Fort & Airport Departure", description: "Explore historic Galle Fort, express transfer to Colombo airport." },
    ],
    included: [
      "9 nights in boutique surf lodges and adventure eco-resorts with breakfast",
      "All adventure gear, licensed raft guides, surfboards, and trekking permits",
      "Private AC transport with active, outdoors-oriented chauffeur-guide",
      "Whale watching boat cruise and national park safaris",
    ],
  },
  {
    id: "family",
    slug: "family-discovery-tour",
    title: "Family Discovery Tour",
    tag: "Family",
    tagColor: "bg-[#F59E0B] text-white",
    duration: "8 Days • 7 Nights",
    price: "990",
    image: "/images/pkg-family.jpg",
    overview:
      "A gently paced, fun-filled holiday designed specifically for parents and children. Safe wildlife encounters, turtle hatcheries, interactive village cooking classes, and family-friendly beach resorts with swimming pools.",
    highlights: [
      "Wild elephant safaris at Udawalawe with guaranteed elephant sightings",
      "Sea turtle conservation center: release baby hatchlings into the sea",
      "Scenic blue train ride with private compartment and window views",
      "Hands-on village cooking class: cook rotis and fresh coconut sambol",
      "Spacious family suites at beachfront resorts with kid-friendly pools",
    ],
    days: [
      { dayNumber: 1, title: "Arrival & Coastal Beach Check-In (Negombo)", description: "Gentle recovery after flight, pool time at seaside resort." },
      { dayNumber: 2, title: "Pinnawala Elephant Sanctuary & Sigiriya", description: "See elephants bathing in the river, drive to Cultural Triangle." },
      { dayNumber: 3, title: "Pidurangala Viewpoint & Village Bullock Cart", description: "Gentle family nature walk, catamaran ride across village lake." },
      { dayNumber: 4, title: "Kandy Royal Botanical Gardens & Cultural Dance", description: "Walk through giant bamboo groves, watch fire-eating Kandyan dancers." },
      { dayNumber: 5, title: "Scenic Train to Nuwara Eliya & Tea Estates", description: "Train ride to Little England, pick tea leaves at an organic estate." },
      { dayNumber: 6, title: "Udawalawe Elephant Safari", description: "Open jeep safari to see wild elephant mothers and baby calves." },
      { dayNumber: 7, title: "Mirissa Beach & Sea Turtle Conservation", description: "Visit the sea turtle sanctuary, swim in safe shallow reef lagoons." },
      { dayNumber: 8, title: "Galle Fort Walk & Colombo Airport", description: "Gelato walk inside Galle Fort, comfortable highway return to airport." },
    ],
    included: [
      "7 nights in family-friendly 4-star hotels with swimming pools & breakfast",
      "Spacious private micro-van with child safety booster seats upon request",
      "All family entrance passes, boat rides, and national park jeep safaris",
    ],
  },
  {
    id: "luxury",
    slug: "sri-lanka-luxury-escape",
    title: "Sri Lanka Luxury Escape",
    tag: "Private",
    tagColor: "bg-[#7C3AED] text-white",
    duration: "Custom Itinerary",
    price: "1,290",
    image: "/images/pkg-luxury.jpg",
    overview:
      "Sri Lanka's ultimate bespoke luxury holiday. Stay in world-renowned Relais & Châteaux tea planter bungalows, cliffside private pool villas, and ultra-luxury safari glamping tents, accompanied by a senior executive chauffeur.",
    highlights: [
      "Luxury accommodation at Ceylon Tea Trails, Wild Coast Tented Lodge, or Cape Weligama",
      "Gourmet dining: multi-course wine-paired dinners and private beach barbecues",
      "Private naturalist-led VIP game drives in Yala with champagne sundowners",
      "First-class panoramic train journey with private reserved saloon",
      "Private catamaran sailing and secluded coastal swimming coves",
    ],
    days: [
      { dayNumber: 1, title: "VIP Airport Meet & Luxury Heritage Villa", description: "Fast-track VIP arrival, transfer to historic colonial estate." },
      { dayNumber: 2, title: "Sigiriya Private Dawn Ascent & Helicopter Option", description: "Exclusive early rock access, private picnic breakfast." },
      { dayNumber: 3, title: "Kandy Cultural Immersion & Royal Suites", description: "Private pooja blessing at Temple of the Tooth, 5-star colonial luxury." },
      { dayNumber: 4, title: "Ceylon Tea Trails Bungalow Experience", description: "Stay in an authentic restored British planter's bungalow with butler service." },
      { dayNumber: 5, title: "Tea Trails to Yala Luxury Safari Glamping", description: "Arrive at luxury cocoon tented suites on the edge of the wilderness." },
      { dayNumber: 6, title: "Exclusive VIP Leopard Safaris", description: "Dawn and dusk game drives with senior naturalists, champagne bush breakfast." },
      { dayNumber: 7, title: "Cape Weligama Oceanfront Cliff Villa", description: "Private infinity pool villa, ocean sunset dinner under the stars." },
    ],
    included: [
      "Luxury 5-star & boutique Relais & Châteaux accommodations",
      "Executive luxury vehicle (Mercedes / Lexus / Land Cruiser) with senior guide",
      "Gourmet breakfast and curated culinary experiences included",
      "VIP private safaris, train transfers, and 24/7 dedicated concierge",
    ],
  },
];
