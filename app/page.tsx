import Camp from "@/components/Home/Camp";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Guide from "@/components/Home/Guide";
import Hero from "@/components/Home/Hero";
import HowWeWork from "@/components/Home/HowWeWork";
import Pricing from "@/components/Home/pricing";
import Testimonial from "@/components/Home/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dias kite surfing school in srilanka",
  description:
    "Dias kite surfinng school is the place to master the kite surfing skill for adventure lovers, the best kitesurfing school and kite surf center in Sri Lanka! Book kitesurfing lessons and accomendation guide for Eat, Sleep and Kite  directly with Dias! with the best instructors in Kalpitiya Lagoon BOOK A Call NOW and get free guide from dias!",
};

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <Features />
      <Camp />
      <Guide />
      <Testimonial />
      <Pricing />
      <FAQ />
    </>
  );
}
