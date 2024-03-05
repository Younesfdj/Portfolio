import HomePage from "@/components/HomePage";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import TechnologiesSection from "@/components/Technologies";
import { HeroParallax } from "@/components/ui/hero-parallax";

import linkdin from "../../public/linkedin.svg"
import github from "../../public/github.svg"
import twitter from "../../public/twitter.svg"

import amanshop from "../../public/amanshop.png"
import kbnet from "../../public/kbnet.png"
import animeMania from "../../public/anime-mania.png"
import chatIo from "../../public/chat-io.png"
import confia from "../../public/confia.png"
import myPortfolio from "../../public/my-portfolio.png"

import { Poppins } from "next/font/google"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"]
})

export default function Home() {
  const products = [
    {
      title: "Chat.io",
      link: "https://github.com/Younesfdj/Chat.io",
      thumbnail: chatIo,
    },
    {
      title: "Kbnet Landing Page",
      link: "https://kbnet-website.vercel.app",
      thumbnail: kbnet,
    },
    {
      title: "Ecommerce Website",
      link: "https://amanshopdz2.vercel.app",
      thumbnail: amanshop,
    },
    {
      title: "Hotel Management Frontend",
      link: "https://github.com/Younesfdj/confia-intern",
      thumbnail: confia,
    },
    {
      title: "My Portfolio",
      link: "https://younesfdj.vercel.app",
      thumbnail: myPortfolio,
    },

  ]
  const navitems = [
    {
      link: "https://www.linkdin.com",
      icon: linkdin,
      alt: "linkdin"
    },
    {
      link: "https://www.github.com",
      icon: github,
      alt: "github"
    },
    {
      link: "https://www.twitter.com",
      icon: twitter,
      alt: "twitter"
    },
  ]

  return (
    <div className={`${poppins.className} `}>
      <FloatingNav navItems={navitems} />
      <HomePage />
      <WorkExperienceSection />
      <TechnologiesSection />
      <HeroParallax products={products} />
    </div>

  );
}
