import Image from "next/image";
import { Icon } from "@iconify/react";

const milestones = [
  { year: "2005", label: "Founded in Kathmandu, Nepal" },
  { year: "2008", label: "First Gulf deployment to UAE" },
  { year: "2015", label: "Expanded to 6 Gulf countries" },
  { year: "2024", label: "2,000+ workers successfully deployed" },
];

const OurStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/About/nice-building.webp"
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

          {/* Right content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
                <Icon icon="mdi:book-open-outline" width="16" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                Two Decades of{" "}
                <span className="text-[#2089CA]">Bridging Talent</span>
              </h2>
              <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
                Founded in 2005, Nice Manpower Recruitment Agency was born from
                a simple mission — bridge the gap between skilled professionals
                in Nepal and the growing demand for quality manpower in the
                Gulf.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                From humble beginnings, we grew into a reliable partner for both
                job seekers and Gulf-based companies, facilitating thousands of
                successful placements and building lasting relationships built
                on trust and transparency.
              </p>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2089CA] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">
                      {m.year}
                    </span>
                  </div>
                  <p className="text-zinc-700 text-sm font-medium leading-snug">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
