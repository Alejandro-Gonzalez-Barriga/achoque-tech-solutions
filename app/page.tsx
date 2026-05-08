import { HomeCTA } from "@/components/sections/home/cta";
import { HomeHero } from "@/components/sections/home/hero";
import { HomePortfolio } from "@/components/sections/home/portfolio";
import { HomeProcess } from "@/components/sections/home/process";
import { HomeServices } from "@/components/sections/home/services";
import { HomeTechnologies } from "@/components/sections/home/technologies";
import { HomeTestimonials } from "@/components/sections/home/testimonials";
import { HomeWhy } from "@/components/sections/home/why";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeWhy />
      <HomeProcess />
      <HomeTechnologies />
      <HomePortfolio />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}
