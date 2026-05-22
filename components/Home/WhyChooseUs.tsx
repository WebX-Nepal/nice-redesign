"use client";
import { cards } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../shared/ContainerWrapper";
import Badge from "./shared/Badge";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "2,000+", label: "Workers Deployed" },
  { value: "7+", label: "Gulf Countries" },
  { value: "100%", label: "Govt. Licensed" },
];

const WhyChooseUs = () => {
  return (
    <ContainerWrapper className="h-fit">
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-4">
          <Badge
            icon="mdi:star-circle"
            label="Why Partner With Us"
          />
          <h1 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
            Why <span className="text-[#2089CA]">Choose Us.</span>
          </h1>
          <p className="text-zinc-500 max-w-lg leading-relaxed text-base md:text-lg">
            Nice Recruiting Agency has been the Gulf&apos;s most trusted
            source for skilled, verified Nepali workers for over two decades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-gray-300 hover:border-[#2089CA]/40 overflow-hidden p-4 bg-[#F3F3F4] hover:bg-[#EEF6FC] text-zinc-900 h-[450px] cursor-pointer flex flex-col transition-colors duration-500"
            >
              {/* Image — fixed height */}
              <div className="h-[78%] relative rounded-xl overflow-hidden shrink-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover brightness-90 rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-end flex-1  relative translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out gap-2">

                <h1 className="text-[1.2rem] font-bold text-zinc-900 group-hover:text-[#2089CA] leading-snug  tracking-[-0.01em] transition-colors duration-500">
                  {card.title}
                </h1>


                <p className="text-zinc-600 text-[0.8rem] leading-relaxed tracking-[0.01em]">
                  Trusted, verified, and ready to deploy across the Gulf region.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default WhyChooseUs;
