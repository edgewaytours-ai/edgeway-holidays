import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Custom Sri Lanka Tour | Free Tailor-Made Itinerary Quote",
  description:
    "Design your dream Sri Lanka holiday with our local travel experts. Customized private driver itineraries, boutique hotels, and free quotes within 24 hours.",
  openGraph: {
    title: "Plan Your Custom Sri Lanka Tour | Free Tailor-Made Itinerary Quote",
    description:
      "Design your dream Sri Lanka holiday with our local travel experts. Customized private driver itineraries, boutique hotels, and free quotes within 24 hours.",
  },
};

export default function PlanYourTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
