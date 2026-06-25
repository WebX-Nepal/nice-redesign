"use client";
import { WorldMap } from "@/components/ui/world-map";
import { Icon } from "@iconify/react";
import ContainerWrapper from "../shared/ContainerWrapper";
import { IMAGES } from "../Home/ImagePlay";
import Globe3DDemo from "../3d-globe-demo";
import NepalGulfGlobe from "../3d-globe-demo";
const flagMap = Object.fromEntries(IMAGES.map((img) => [img.country, img.flag]));
const destinations = [
  { country: "UAE", icon: "twemoji:flag-united-arab-emirates" },
  { country: "Qatar", icon: "twemoji:flag-qatar" },
  { country: "Saudi Arabia", icon: "twemoji:flag-saudi-arabia" },
  { country: "Kuwait", icon: "twemoji:flag-kuwait" },
  { country: "Oman", icon: "twemoji:flag-oman" },
  { country: "Bahrain", icon: "twemoji:flag-bahrain" },
  { country: "Malaysia", icon: "twemoji:flag-malaysia" },
  { country: "Other countries", icon: "mdi:globe" },
];

// Nepal → Gulf countries (real coordinates)
const NEPAL = { lat: 15.8, lng: 84 }; // Kathmandu

export function Globe() {
  return (
    <section className="pt-24  w-full">
      <ContainerWrapper className="h-full">
        {/* Header */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon icon="mdi:earth" width="16" />
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
              Our <span className="text-[#2089CA]">Global Reach.</span>
            </h2>
            <p className="text-zinc-500 max-w-lg leading-relaxed text-base md:text-lg">
              Connecting skilled Nepali workers with top employers across the
              Gulf region reliably, legally, and efficiently.
            </p>
            <div className="flex flex-wrap gap-2 ">
              {destinations.map((d) => (
                <div
                  key={d.country}
                  className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1.5 text-sm font-medium text-zinc-900 shadow-sm"
                >
                  <Icon icon={d.icon} width="16" />
                  {d.country}
                </div>
              ))}

            </div>

          </div>
             <NepalGulfGlobe/>

        </div>


      </ContainerWrapper>
      {/* Map */}

    </section>
  );
}
