"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ImagePlay from "./ImagePlay";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const countries = ["UAE", "Qatar", "Saudi", "Kuwait", "Oman", "Bahrain"];

const stats = [
  { icon: "mdi:account-group", value: "2,000+", label: "Workers Deployed" },
  { icon: "mdi:earth", value: "7+", label: "Countries Served" },
  { icon: "mdi:shield-check", value: "Licensed", label: "Govt. Approved" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" },
    );
  }, [index]);

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 lg:px-0 flex items-center pt-16">
      <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20 items-center py-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#2089CA] animate-pulse" />
            Trusted Manpower Recruitment Agency
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-bold leading-[1.15] tracking-tight text-zinc-900">
            Reliable Workforce <br className="hidden md:block" />
            from Nepal to{" "}
            <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
              <span ref={textRef} className="inline-block text-[#2089CA]">
                {countries[index]}
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg">
            We connect skilled, verified Nepali workers with top employers
            across the Gulf and beyond — handling everything from recruitment to
            deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#2089CA] rounded-full hover:bg-[#1a70a8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Request Manpower
            </Link>
            <a
              href="#process"
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-zinc-700 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors duration-200"
            >
              <Icon icon="mdi:play-circle-outline" width="18" />
              View Our Process
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-zinc-100">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon={stat.icon}
                    width="20"
                    className="text-[#2089CA]"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-zinc-900 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="w-full lg:w-1/2 h-[420px] md:h-[520px] relative">
          {/* Decorative blobs */}
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

          <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-200">
            <ImagePlay index={index} />

            {/* Country label overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm flex items-center gap-2">
                <Icon
                  icon="mdi:map-marker"
                  className="text-[#2089CA]"
                  width="16"
                />
                <span className="text-sm font-semibold text-zinc-800">
                  {countries[index]}
                </span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm flex items-center gap-1.5">
                <Icon
                  icon="mdi:check-decagram"
                  className="text-green-500"
                  width="16"
                />
                <span className="text-xs font-medium text-zinc-700">
                  Verified Placements
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
