import type { Metadata } from "next";
import Hero from "@/components/Services/Hero";
import OurServices from "@/components/Services/OurServices";

export const metadata: Metadata = {
  title: "Our Services | Nice Recruiting Agency",
  description:
    "Explore our manpower services — construction workers, hospitality staff, security personnel, general labour, facility management and driver & logistics for Gulf employers.",
};

export default function Services() {
  return (
    <div>
      <Hero />
      <OurServices />
    </div>
  );
}
