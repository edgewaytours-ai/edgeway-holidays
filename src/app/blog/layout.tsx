import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Lanka Travel Blog & Insider Guides | Edgeway Tours",
  description:
    "Read insider Sri Lanka travel tips, scenic train guides, wildlife safari advice, and month-by-month weather guides written by certified local travel guides.",
  openGraph: {
    title: "Sri Lanka Travel Blog & Insider Guides | Edgeway Tours",
    description:
      "Read insider Sri Lanka travel tips, scenic train guides, wildlife safari advice, and month-by-month weather guides written by certified local travel guides.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
