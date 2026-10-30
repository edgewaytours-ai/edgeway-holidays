import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ExperienceSection from "@/components/ExperienceSection";
import PopularTours from "@/components/PopularTours";
import MultiDayPackages from "@/components/MultiDayPackages";
import DestinationsAndWhyUs from "@/components/DestinationsAndWhyUs";
import ReviewsAndCta from "@/components/ReviewsAndCta";
import TravelBlog from "@/components/TravelBlog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with Floating Search Engine */}
        <Hero />

        {/* 3. Trust & Social Proof Bar */}
        <TrustBar />

        {/* 4. Explore by Experience (6 Card Grid) */}
        <ExperienceSection />

        {/* 5. Popular Tours (Handpicked Sri Lanka Tours) */}
        <PopularTours />

        {/* 6. Multi-Day Packages (Complete Sri Lanka Holidays) */}
        <MultiDayPackages />

        {/* 7. Top Destinations & Why Travel with EdgewayTours */}
        <DestinationsAndWhyUs />

        {/* 8. Traveller Testimonials & Plan Your Adventure CTA */}
        <ReviewsAndCta />

        {/* 9. Travel Inspiration / Blog */}
        <TravelBlog />
      </main>

      {/* 10. Forest Green Footer */}
      <Footer />
    </div>
  );
}
