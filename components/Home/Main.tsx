"use client";
import Image from "next/image";
import { useState } from "react";
import { homeSections } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Main = () => {
  const [active, setActive] = useState(0);
  const current = homeSections[active];

  return (
    <section className="py-24 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
              <Icon icon="mdi:briefcase-outline" width="16" />
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Our <span className="text-[#2089CA]">Services</span>
            </h2>
            <p className="text-zinc-500 max-w-lg leading-relaxed text-sm md:text-base">
              Skilled, verified Nepali workers deployed across the Gulf — from
              construction sites to five-star hotels.
            </p>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-700 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all duration-200 w-fit"
          >
            All Services <Icon icon="mdi:arrow-right" width="16" />
          </Link>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — sticky image panel */}
          <div className="hidden lg:block sticky top-24 self-start">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                key={active}
                src={current.image}
                alt={current.title}
                fill
                className="object-cover transition-all duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/70 via-transparent to-transparent" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#2089CA] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {current.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {current.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed line-clamp-2">
                  {current.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 flex items-center gap-2 bg-white text-zinc-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors duration-200"
                >
                  {current.buttonText}
                  <Icon icon="mdi:arrow-right" width="15" />
                </Link>
              </div>

              {/* Counter */}
              <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {active + 1} / {homeSections.length}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {homeSections.map((_, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-[#2089CA]"
                      : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — service list */}
          <div className="flex flex-col gap-3">
            {homeSections.map((item, i) => (
              <button
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`group w-full text-left flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer
                  ${
                    i === active
                      ? "bg-[#2089CA] border-[#2089CA] shadow-lg shadow-blue-200"
                      : "bg-white border-zinc-100 hover:border-zinc-200 hover:shadow-sm"
                  }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                  ${i === active ? "bg-white/20" : "bg-blue-50"}`}
                >
                  <Icon
                    icon={item.icon ?? "mdi:briefcase"}
                    width="22"
                    className={i === active ? "text-white" : "text-[#2089CA]"}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3
                      className={`font-bold text-sm md:text-base truncate transition-colors duration-300
                      ${i === active ? "text-white" : "text-zinc-900"}`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 transition-colors duration-300
                      ${i === active ? "bg-white/20 text-white" : "bg-blue-50 text-[#2089CA]"}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed line-clamp-2 transition-colors duration-300
                    ${i === active ? "text-blue-100" : "text-zinc-500"}`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <Icon
                  icon="mdi:arrow-right"
                  width="18"
                  className={`shrink-0 transition-all duration-300 ${
                    i === active
                      ? "text-white translate-x-0"
                      : "text-zinc-300 -translate-x-1 group-hover:translate-x-0 group-hover:text-zinc-500"
                  }`}
                />
              </button>
            ))}

            {/* CTA strip */}
            <div className="mt-2 flex items-center justify-between gap-4 bg-zinc-900 rounded-2xl px-6 py-5">
              <div>
                <p className="text-white font-bold text-sm">
                  Need a custom solution?
                </p>
                <p className="text-zinc-400 text-xs mt-0.5">
                  We&apos;ll match the right workers for your needs.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 flex items-center gap-2 bg-[#2089CA] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1a70a8] transition-colors duration-200"
              >
                Contact Us
                <Icon icon="mdi:arrow-right" width="15" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
