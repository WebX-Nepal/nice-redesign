import type { Metadata } from "next";
import AboutUs from "@/components/About/AboutUs";
import Legal from "@/components/About/Legal";
// import Members from "@/components/About/Members";
import MissionAndVision from "@/components/About/MissionAndVision";
import OurStory from "@/components/About/OurStory";
import Trust from "@/components/About/Trust";

export const metadata: Metadata = {
  title: "About Us | Nice Recruiting Agency",
  description:
    "Learn about Nice Recruiting Agency — Nepal's government-licensed manpower recruitment company with 20+ years of experience connecting skilled workers with Gulf employers.",
};

export default function About() {
  return (
    <div>
      <AboutUs />
      <OurStory />
      <MissionAndVision />
      <Trust />
      {/* <Members /> */}
      <Legal />
    </div>
  );
}
