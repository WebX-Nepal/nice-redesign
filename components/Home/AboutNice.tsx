import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import Button from "../shared/Button";
import ContainerWrapper from "../shared/ContainerWrapper";
import Badge from "./shared/Badge";

const highlights = [
  "Government-licensed recruitment agency based in Nepal",
  "Specialized in Gulf region manpower deployment",
  "End-to-end handling — visa, travel, documentation",
  "Dedicated support team in Kathmandu & Dubai",
];

export default function AboutNice() {
  return (
    <section className="py-24">
      <ContainerWrapper className="h-fit">

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-0 items-center justify-between">

          {/* LEFT IMAGES */}
          <div className="relative w-full order-2 lg:order-1 md:w-[50%] flex flex-col md:flex-row gap-4 md:h-135">

            {/* Left large image — full width on mobile, flex-1 on desktop */}
            <div className="relative w-full md:flex-1 h-70 md:h-auto rounded-xl overflow-hidden">
              <Image
                src="/nepali-lady.avif"
                alt="Nice Manpower team"
                fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover brightness-90"
              />
            </div>

            {/* Right stacked images — 2x2 grid on mobile, vertical stack on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:w-[48%]">
              <div className="relative h-40 md:h-auto md:flex-1 rounded-xl overflow-hidden">
                <Image
                  src="/About/nice-building.avif"
                  alt="Nepal office"
                  fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover brightness-90"
                />
              </div>
              <div className="relative h-40 md:h-auto md:flex-1 rounded-xl overflow-hidden">
                <Image
                  src="/About/dubai.avif"
                  alt="Dubai office"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="brightness-90 object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-8 md:-top-12 -left-3 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-[#2089CA] border-2 border-white text-white rounded-full shadow-xl z-10 flex flex-col items-center justify-center text-center">
              <p className="text-2xl md:text-3xl font-bold leading-none">20+</p>
              <p className="text-blue-100 text-xs md:text-sm mt-1 leading-tight">
                Years Serving<br />the Gulf
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2 flex w-full lg:w-[45%] flex-col gap-10">

            {/* heading */}
            <div className="flex flex-col gap-4 w-[90%]">
              <Badge
                icon="mdi:information-outline"
                label="About Us"
              />

              <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
                Build Your Workforce
                <br className="hidden md:block" />
                with{" "}
                <span className="text-[#2089CA]">
                  Confidence.
                </span>
              </h2>

              <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
                With over two decades of experience in international
                recruitment, Nice Recruiting Agency delivers qualified,
                dependable workforce solutions to companies across the Gulf
                region.
              </p>
            </div>

            {/* Highlights */}
            <ul className="flex flex-col gap-3">
              {highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-zinc-500 text-base"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="14"
                      className="text-[#2089CA]"
                    />
                  </span>

                  {h}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">

              <Button
                icon="mdi:arrow-right"
                label="Hire Now"
                href="/contact"
              />

              <Link
                href="/about"
                className="flex px-6 py-2.5 h-12 items-center gap-3 border border-zinc-200 text-zinc-900 font-semibold rounded-full hover:bg-zinc-50 transition-colors duration-200"
              >
                <Icon icon="mdi:book-open-variant" width="18" />
                About Us
              </Link>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}