import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Sri Lanka Destinations Guide | Sigiriya, Ella, Kandy, Yala & Mirissa",
  description:
    "Discover the most iconic travel destinations in Sri Lanka. From the ancient rock fortress of Sigiriya to the tea estates of Ella and the beaches of Mirissa.",
  openGraph: {
    title: "Top Sri Lanka Destinations Guide | Sigiriya, Ella, Kandy, Yala & Mirissa",
    description:
      "Discover the most iconic travel destinations in Sri Lanka. From the ancient rock fortress of Sigiriya to the tea estates of Ella and the beaches of Mirissa.",
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
