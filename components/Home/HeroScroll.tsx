"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { details } from "../../constants/constant";
const HeroScroll = () => {
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto mt-20 flex flex-col gap-15"
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold font-montserrat text-center">
        Our Processes
      </h1>

      {/* Cards */}
      <div className="w-full flex flex-col items-center gap-24">
        {details.map((item) => (
          <div
            key={item.id}
            className="w-full p-16 rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500"
          >
            {/* Upper */}
            <div className="relative flex justify-center items-center mb-12">
              <Image
                src={item.img2}
                alt=""
                width={60}
                height={60}
                className="absolute left-0 w-15 h-15 rounded-full bg-green-200 p-2.5 object-contain"
              />
              <h2 className="text-3xl font-semibold font-montserrat text-center">
                {item.title}
              </h2>
            </div>

            {/* Lower */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <p className="w-1/2 font-poppins text-lg">{item.description}</p>

              <div className="relative w-1/2 h-87.5 rounded-[20px] ">
                <Image src={item.img1} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroScroll;
