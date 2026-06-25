"use client";
import { useState } from "react";
import { homeSections } from "@/constants/constant";
import { Icon } from "@iconify/react";
import ContainerWrapper from "../shared/ContainerWrapper";
import Button from "../shared/Button";
import Badge from "./shared/Badge";
import CTABanner from "./shared/CTABanner";

const Main = () => {
  const [active, setActive] = useState(0);
  const current = homeSections[active];

  return (
    <section className="py-24">
      <ContainerWrapper className="h-fit">
        {/* Header */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Badge
              icon="mdi:briefcase-outline"
              label="What We Offer"
            />
            <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
              Our <span className="text-[#2089CA]">Services.</span>
            </h2>
            <p className="text-zinc-500 max-w-lg leading-relaxed text-base md:text-lg">
              Skilled, verified Nepali workers deployed across the Gulf Region from
              construction sites to five-star hotels.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homeSections.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-xl border border-gray-300 hover:border-[#2089CA]/40 overflow-hidden p-4 bg-[#F3F3F4] hover:bg-[#EEF6FC] flex flex-col gap-5 transition-colors duration-300 cursor-pointer"
              >
                {/* Icon + Tag row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 flex items-center justify-center bg-[#2089CA] rounded-full shrink-0">
                    <Icon
                      icon={item.icon ?? "mdi:briefcase"}
                      width="22"
                      className="text-white"
                    />
                  </div>
                  <span className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full py-1.5 px-3">
                    <p className="text-xs font-bold text-[#2089CA]">{item.tag}</p>
                  </span>
                </div>

                {/* Content — lifts up on hover */}
                <div className="flex flex-col gap-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-[1.2rem] font-bold text-zinc-900 group-hover:text-[#2089CA] leading-snug  tracking-[-0.01em] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-[0.8rem] leading-relaxed tracking-[0.01em]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
            <CTABanner
            btntitle="Contact Us"
            desc="We&apos;ll match the right workers for your needs."
            href="/contact"
            icon="mdi:phone"
            title="Need a custom solution?"
            />
        </div>


        {/* Main layout */}

      </ContainerWrapper>
    </section>
  );
};

export default Main;
