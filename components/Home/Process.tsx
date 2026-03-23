import { circle, lines, steps } from "@/constants/constant";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <div className="max-w-7xl mx-auto h-[145vh] flex flex-col gap-10 ">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold font-montserrat ">
          Our <span className="text-[#2089CA]">Processes</span>
        </h1>
        <p className="text-sm md:text-lg text-neutral-500 leading-tight max-w-2xl ">
          Nice Recruiting Agency has been a trusted partner for Gulf companies
          seeking skilled Nepali workers.
        </p>
      </div>

      <div className="relative h-screen">
        <div className="absolute left-1/2 top-15  w-0.75 h-full bg-zinc-300" />

        {circle.map((item) => (
          <div
            key={item.id}
            className={`absolute ${item.position} left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-white border-3 border-zinc-300 flex items-center justify-center font-semibold`}
          >
            {item.no}
          </div>
        ))}

        <div className="relative w-full ">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`absolute w-[30%] bg-white p-6 z-50 rounded-2xl shadow-md border-3 border-zinc-300 ${step.position} flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold font-montserrat text-lg text-[#2089CA]">
                  {step.title}
                </h3>

                <Image
                  src={step.image}
                  alt="step1"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>

              <ul className="space-y-4">
                {step.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-poppins text-sm"
                  >
                    <span className="w-5 h-5 flex items-center justify-center border rounded-full text-xs">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {lines.map((item) => (
          <div
            key={item.id}
            className={`absolute ${item.location} ${item.position}  w-35 h-0.75 bg-zinc-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
