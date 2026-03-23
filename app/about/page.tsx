import AboutUs from "@/components/About/AboutUs";
import Legal from "@/components/About/Legal";
import Members from "@/components/About/Members";
import MissionAndVision from "@/components/About/MissionAndVision";
import OurStory from "@/components/About/OurStory";
import Trust from "@/components/About/Trust";

export default function About() {
  return (
    <div>
      <AboutUs />
      <OurStory />
      <MissionAndVision />
      <Trust />
      <Members />
      <Legal />
      {/* <Chairman />
      <Leaders />
      <CoreValues /> */}
    </div>
  );
}