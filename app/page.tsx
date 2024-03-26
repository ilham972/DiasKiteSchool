import Camp from "@/components/Home/Camp";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Guide from "@/components/Home/Guide";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/pricing";
import Testimonial from "@/components/Home/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Camp />
      <Guide />
      <Testimonial />
      <Pricing />
      <FAQ />
    </>
  );
}
