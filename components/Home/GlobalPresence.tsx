import { about } from "@/constants/constant";
import Image from "next/image";
import React from "react";
import ContainerWrapper from "../shared/ContainerWrapper";

const GlobalPresence = () => {
  return (
    <div className="w-full h-screen py-24">
      <ContainerWrapper>
      <div className="flex flex-col gap-10">
          <h1 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
            Our <span className="text-[#2089CA]">Global Presence.</span>
          </h1>

        <p className="text-center text-lg font-poppins max-w-150 mx-auto">
          Nice Recruiting Agency has been a trusted partner for Gulf companies
          seeking skilled Nepali workers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
        {about.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4  rounded-2xl w-full"
          >
            <h2 className="text-3xl font-bold ">
              {item.number}
            </h2>
            <p className="text-lg font-poppins">{item.title}</p>
          </div>
        ))}
      </div>
    </ContainerWrapper>
    {/* <div className="relative w-full h-125">
        <Image
          src="/flags/gulf1.png"
          alt="gulf img"
          fill
          className="object-contain"
        />
      </div> */}
    </div>
  );
};

export default GlobalPresence;
