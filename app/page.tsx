import Hero from "@/components/Home/Hero";
import AboutNice from "@/components/Home/AboutNice";
import CtaSection from "@/components/Home/CtaSection";
import { Globe } from "@/components/Home/Globe";
import Process from "@/components/Home/Process";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Main from "../components/Home/Main";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <GlobalPresence /> */}
      <Globe />
      <Main />
      <WhyChooseUs />
      {/* <HeroSpecialization /> */}
      {/* <HeroScroll /> */}
      <Process />
      <Testimonials />
      {/* <CompanyProfile /> */}
      <AboutNice />
      <CtaSection />
      {/* <Slider /> */}
    </div>
  );
}
