import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Lanka Experiences | Wildlife Safaris, Heritage & Hill Country",
  description:
    "Immerse yourself in authentic Sri Lanka travel experiences: Leopard safaris in Yala, scenic train rides from Kandy to Ella, surfing in Weligama, and cultural heritage tours.",
  openGraph: {
    title: "Sri Lanka Experiences | Wildlife Safaris, Heritage & Hill Country",
    description:
      "Immerse yourself in authentic Sri Lanka travel experiences: Leopard safaris in Yala, scenic train rides from Kandy to Ella, surfing in Weligama, and cultural heritage tours.",
  },
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
