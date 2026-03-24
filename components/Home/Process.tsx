"use client";
import { steps } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stepIcons = [
  "mdi:file-document-edit-outline",
  "mdi:account-voice",
  "mdi:account-search",
  "mdi:file-certificate-outline",
  "mdi:airplane-takeoff",
];

const Process = () => {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section className="py-24 bg-zinc-950" id="process">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon
                icon="mdi:clipboard-list-outline"
                width="16"
                className="text-[#2089CA]"
              />
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Our Hiring <span className="text-[#2089CA]">Process</span>
            </h2>
            <p className="text-zinc-400 max-w-lg text-base md:text-lg leading-relaxed">
              A simple 5-step process — from your first inquiry to workers
              arriving on-site.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2.5 bg-[#2089CA]"
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left — active image */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] lg:h-auto">
            <Image
              key={active}
              src={current.image}
              alt={current.title}
              fill
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

            {/* Step badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#2089CA] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                Step {active + 1} of {steps.length}
              </span>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon
                    icon={stepIcons[active]}
                    width="20"
                    className="text-white"
                  />
                </div>
                <h3 className="text-white font-bold text-2xl">
                  {current.title}
                </h3>
              </div>
              {/* Points preview */}
              <div className="flex flex-wrap gap-2">
                {current.points.map((p, i) => (
                  <span
                    key={i}
                    className="bg-white/10 backdrop-blur-sm border border-white/15 text-zinc-200 text-xs px-3 py-1 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — step list */}
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group w-full text-left flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer
                  ${
                    i === active
                      ? "bg-[#2089CA] border-[#2089CA] shadow-lg shadow-blue-900/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
              >
                {/* Number */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                  ${i === active ? "bg-white/20" : "bg-white/10"}`}
                >
                  <Icon
                    icon={stepIcons[i]}
                    width="22"
                    className={i === active ? "text-white" : "text-zinc-400"}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300
                      ${i === active ? "text-blue-200" : "text-zinc-500"}`}
                    >
                      Step {step.id}
                    </span>
                  </div>
                  <h3
                    className={`font-bold text-base transition-colors duration-300
                    ${i === active ? "text-white" : "text-zinc-300"}`}
                  >
                    {step.title}
                  </h3>
                  {i === active && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {step.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-blue-100 text-sm"
                        >
                          <Icon
                            icon="mdi:check-circle"
                            width="14"
                            className="text-blue-200 shrink-0"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Arrow */}
                <Icon
                  icon="mdi:arrow-right"
                  width="18"
                  className={`shrink-0 transition-all duration-300 ${
                    i === active
                      ? "text-white"
                      : "text-zinc-600 group-hover:text-zinc-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2089CA] rounded-full transition-all duration-500"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
          <span className="text-zinc-400 text-xs font-semibold shrink-0">
            {active + 1} / {steps.length} steps
          </span>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 rounded-2xl px-8 py-7">
          <div>
            <p className="text-white font-bold text-xl">
              Ready to start the process?
            </p>
            <p className="text-zinc-400 text-base mt-1">
              Submit your inquiry today and we&apos;ll get back within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 bg-[#2089CA] text-white font-bold px-7 py-3.5 rounded-full text-base hover:bg-[#1a70a8] transition-colors duration-200"
          >
            Start Hiring
            <Icon icon="mdi:arrow-right" width="18" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
