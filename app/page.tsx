import Hero from "@/components/Home/Hero";
// import Main from "@/components/HeroSection/main/Main";
// alias wasn’t resolving at build time, fallback to a relative path:
import Main from "../components/Home/Main";
import HeroScroll from "@/components/Home/HeroScroll";
import HeroSpecialization from "@/components/Home/HeroSpecialization";
import { Slider } from "@/components/Home/Slider";
import TopCountries from "@/components/Home/TopCountries";
import { Testimonials } from "@/components/Home/Testimonials";
import CompanyProfile from "@/components/Home/CompanyProfile";
import CtaSection from "@/components/Home/CtaSection";
import GlobalPresence from "@/components/Home/GlobalPresence";
import Process from "@/components/Home/Process";
import { Globe } from "@/components/Home/Globe";

export default function Home() {
  return (
    <div >
      <Hero />
      {/* <GlobalPresence /> */}
      <Globe />
      <Main />
      <HeroSpecialization />
      {/* <HeroScroll /> */}
      <Process />
      <Testimonials />
      <CompanyProfile />
      <CtaSection />
      <Slider />
    </div>
  );
}
