import Image from "next/image";
import { Icon } from "@iconify/react";
import ContainerWrapper from "../shared/ContainerWrapper";
import Button from "../shared/Button";
import MilestoneTimeline from "./MileStone";
import Badge from "../Home/shared/Badge";

const milestones = [
  { year: "2005", label: "Founded in Kathmandu, Nepal" },
  { year: "2008", label: "First Gulf deployment to UAE" },
  { year: "2015", label: "Expanded to 6 Gulf countries" },
  { year: "2024", label: "2,000+ workers successfully deployed" },
];

const OurStory = () => {
  return (
    <section className="py-24 font-fustat">
      <ContainerWrapper className="h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex flex-col gap-10 items-start justify-start w-full ">
            <div className="flex flex-col gap-4">
              <Badge 
              icon="mdi:book-open-outline"
              label="Our Story"
              />
              <h1 className="text-4xl  md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
                Two Decades of <br/><span className="text-[#2089CA]">
                  Bridging Talent.
                </span>
              </h1>

              <p className="text-zinc-500 text-base md:text-lg leading-relaxed ">
                Founded in 2005, Nice Manpower Recruitment Agency connects skilled workers from Nepal with trusted job opportunities in the Gulf. Over the years, we have helped thousands of people find employment while building strong relationships with companies through trust, quality, and transparency.
              </p>
              <Button
                icon="mdi:arrow-right"
                label="Hire Now"
                href="/contact"
                className="w-fit"
              />
            </div>


          </div>
          <div className="relative h-100 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/About/nice-building.avif"
              alt="Our Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
              <p className="text-white font-bold text-lg">Est. 2005</p>
              <p className="text-zinc-300 text-sm mt-1">
                Two decades of trusted recruitment
              </p>
            </div>
          </div>
        </div>
        <MilestoneTimeline />
      </ContainerWrapper>
    </section>
  );
};

export default OurStory;
