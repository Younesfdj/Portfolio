import HomePage from "@/components/HomePage";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import TechnologiesSection from "@/components/Technologies";
import { HeroParallax } from "@/components/ui/hero-parallax";
import CommunitySection from "@/components/CommunitySection";

import { products } from "../data";
import { navitems } from "../data";



import { Poppins } from "next/font/google"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"]
})

export default function Home() {
  console.log(products);

  return (
    <div className={`${poppins.className} bg-black`}>
      <FloatingNav navItems={navitems} />
      <HomePage />
      <WorkExperienceSection />
      <TechnologiesSection />
      <HeroParallax products={products} />
      <CommunitySection />
    </div>

  );
}
