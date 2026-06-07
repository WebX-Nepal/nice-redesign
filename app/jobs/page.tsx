import type { Metadata } from "next";
import Categories from "@/components/Jobs/Categories";
import ChooseUs from "@/components/Jobs/ChooseUs";
import Hero from "@/components/Jobs/Hero";
import TrainingSection from "@/components/Jobs/Training";

// export const metadata: Metadata = {
//   title: "Our Talents | Nice Recruiting Agency",
//   description:
//     "Explore our pool of trained, certified Nepali talent — construction workers, hospitality staff, security personnel and more, all Gulf-ready and fully empowered.",
// };

export default function Jobs() {
  return (
    <div>
      <ChooseUs />
      <Categories />
      <TrainingSection/>
    </div>
  );
}
