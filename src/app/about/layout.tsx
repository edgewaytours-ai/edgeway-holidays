import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Edgeway Tours | Local Sri Lanka Tour Specialists & Chauffeurs",
  description:
    "Meet the passionate local team behind Edgeway Tours. Over a decade of crafting authentic, responsible, and unforgettable Sri Lanka private holidays.",
  openGraph: {
    title: "About Edgeway Tours | Local Sri Lanka Tour Specialists & Chauffeurs",
    description:
      "Meet the passionate local team behind Edgeway Tours. Over a decade of crafting authentic, responsible, and unforgettable Sri Lanka private holidays.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
