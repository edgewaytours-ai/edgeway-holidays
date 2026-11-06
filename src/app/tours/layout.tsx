import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handpicked Sri Lanka Tours & Holiday Packages | Edgeway Tours",
  description:
    "Explore handpicked Sri Lanka day tours, multi-day holiday packages, wildlife safaris, and scenic train journeys with private tourist chauffeurs.",
  openGraph: {
    title: "Handpicked Sri Lanka Tours & Holiday Packages | Edgeway Tours",
    description:
      "Explore handpicked Sri Lanka day tours, multi-day holiday packages, wildlife safaris, and scenic train journeys with private tourist chauffeurs.",
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
