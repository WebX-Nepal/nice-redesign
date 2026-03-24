import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const stats = [
  { value: "20+", label: "Years of Experience", icon: "mdi:calendar-check" },
  { value: "2,000+", label: "Workers Deployed", icon: "mdi:account-group" },
  { value: "7+", label: "Gulf Countries", icon: "mdi:earth" },
  { value: "100%", label: "Govt. Licensed", icon: "mdi:shield-check" },
];

const highlights = [
  "Government-licensed recruitment agency based in Nepal",
  "Specialized in Gulf region manpower deployment",
  "End-to-end handling — visa, travel, documentation",
  "Dedicated support team in Kathmandu & Dubai",
];

export default function AboutNice() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image collage */}
          <div className="relative grid grid-cols-2 gap-4 h-[540px]">
            {/* Main tall image */}
            <div className="relative row-span-2 rounded-2xl overflow-hidden">
              <Image
                src="/office/about_girl.jpg"
                alt="Nice Manpower team"
                fill
                className="object-cover"
              />
            </div>
            {/* Top right */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/office/nepal.jpg"
                alt="Nepal office"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom right */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/office/dubai.jpg"
                alt="Dubai office"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#2089CA] text-white rounded-2xl px-6 py-5 shadow-xl z-10">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-blue-100 text-sm mt-0.5">
                Years Serving the Gulf
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 -left-4 bg-white border border-zinc-100 rounded-xl px-4 py-3 shadow-lg z-10 flex items-center gap-2">
              <Icon
                icon="mdi:shield-check"
                className="text-green-500"
                width="20"
              />
              <span className="text-sm font-semibold text-zinc-800">
                Govt. Licensed
              </span>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
                <Icon icon="mdi:information-outline" width="16" />
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                Build Your Workforce <br className="hidden md:block" />
                with <span className="text-[#2089CA]">Confidence</span>
              </h2>
              <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
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
                  className="flex items-center gap-3 text-zinc-700 text-base"
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

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 bg-zinc-50 rounded-xl p-4 border border-zinc-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon icon={s.icon} width="20" className="text-[#2089CA]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-zinc-900">{s.value}</p>
                    <p className="text-xs text-zinc-500">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#2089CA] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a70a8] transition-colors duration-200"
              >
                Hire Now
                <Icon icon="mdi:arrow-right" width="18" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 border border-zinc-200 text-zinc-700 font-semibold px-7 py-3.5 rounded-full hover:bg-zinc-50 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
