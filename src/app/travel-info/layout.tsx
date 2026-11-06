import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Lanka Travel Guide 2027 | Visa, Weather, Currency & Packing Tips",
  description:
    "Essential travel advice for visiting Sri Lanka. Learn about tourist visas (ETA), best months to visit, train reservations, currency exchange, and packing essentials.",
  openGraph: {
    title: "Sri Lanka Travel Guide 2027 | Visa, Weather, Currency & Packing Tips",
    description:
      "Essential travel advice for visiting Sri Lanka. Learn about tourist visas (ETA), best months to visit, train reservations, currency exchange, and packing essentials.",
  },
};

export default function TravelInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
