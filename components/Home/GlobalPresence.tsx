import { about } from "@/constants/constant";
import Image from "next/image";
import React from "react";

const GlobalPresence = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-10  mt-24">
      <div className="flex flex-col gap-5">
        <h1 className="text-center text-3xl font-bold font-montserrat">
          Our Global Presence
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
            <h2 className="text-3xl font-bold font-montserrat">
              {item.number}
            </h2>
            <p className="text-lg font-poppins">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="relative w-full h-125">
        <Image
          src="/flags/gulf1.png"
          alt="gulf img"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default GlobalPresence;
