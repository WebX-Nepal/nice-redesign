import Hero from "@/components/Home/Hero";
import AboutNice from "@/components/Home/AboutNice";
import CtaSection from "@/components/Home/CtaSection";
import { Globe } from "@/components/Home/Globe";
import Process from "@/components/Home/Process";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Main from "../components/Home/Main";
import Outlets from "@/components/Home/Outlets";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutNice />
      <WhyChooseUs />
      <Globe />
      <Main />
      <Process />
      <Outlets />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
