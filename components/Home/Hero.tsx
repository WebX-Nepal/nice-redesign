"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContainerWrapper from "../shared/ContainerWrapper";
import VerticalImages from "./VerticalImages";
import Button from "../shared/Button";
import { scrollToSection } from "@/lib/utils";
import Typewriter from "../shared/TypeWriter";

gsap.registerPlugin(ScrollTrigger);

const countries = [
  "UAE.",
  "Qatar.",
  "Saudi.",
  "Kuwait.",
  "Oman.",
  "Bahrain.",
];

const stats = [
  {
    icon: "mdi:account-group",
    value: "2,000+",
    label: "Workers Deployed",
  },
  {
    icon: "mdi:earth",
    value: "7+",
    label: "Countries Served",
  },
  {
    icon: "mdi:shield-check",
    value: "Licensed",
    label: "Govt. Approved",
  },
  {
    icon: "mdi:calendar-check",
    value: "20+",
    label: "Years of Experience",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const textRef = useRef<HTMLSpanElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Country rotation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % countries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Text animation
  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      {
        y: "20%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, [index]);

  // Parallax scroll animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const shared = {
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      };

      if (col1Ref.current) {
        gsap.to(col1Ref.current, {
          y: "-200px",
          ...shared,
        });
      }

      if (col2Ref.current) {
        gsap.to(col2Ref.current, {
          y: "200px",
          ...shared,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <ContainerWrapper className="flex items-center justify-center h-full w-full">
      <div
        ref={sectionRef}
        className="mt-18.5 relative w-full h-[calc(100dvh-84px)] rounded-xl pt-[1.5px]"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <div className="flex flex-row h-full justify-between">
            {/* Left */}
            <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-10 justify-center h-full">
              <h1 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
                Reliable Workforce <br />
                from Nepal to{" "}
                <span ref={textRef} className="inline-block text-[#2089CA]">
                  {countries[index]}
                </span>
              </h1>

              <div className="grid grid-cols-2 gap-2 w-full sm:w-fit items-center">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full py-1.5 px-3 min-w-0"
                  >
                    <Icon
                      icon={stat.icon}
                      width="15"
                      className="text-[#2089CA] shrink-0"
                    />

                    <span className="text-xs font-bold text-[#2089CA] shrink-0">
                      {stat.value}
                    </span>

                    <span className="text-xs text-zinc-500 truncate">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full bg-gray-300 h-px" />

              <p className="text-sm md:text-base lg:text-lg text-zinc-500 leading-relaxed">
                We connect skilled, verified Nepali workers with top employers
                across the Gulf and beyond — handling everything from
                recruitment to deployment.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
                <Button
                  className="flex justify-center w-full sm:w-auto"
                  href="/contact"
                  icon="mdi:account-group"
                  label="Request Manpower"
                />

                <button
                  onClick={() => scrollToSection("process")}
                  className="flex w-full sm:w-auto justify-center items-center bg-white gap-2 cursor-pointer px-4 md:px-6 py-2.5 text-sm md:text-base h-11 md:h-12 font-semibold text-zinc-900 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors duration-200"
                >
                  <Icon icon="mdi:chevron-down" width="18" />
                  View Our Process
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="hidden w-0 md:block md:w-[45%] h-full overflow-hidden relative -mt-2">
              <VerticalImages />
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Hero;