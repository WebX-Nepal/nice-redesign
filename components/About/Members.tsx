import { cards, members } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Members = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold font-montserrat ">
          Our Core <span className="text-[#2089CA]">Members</span>
        </h1>
        {/* <p className="text-sm md:text-lg text-neutral-500 text-center max-w-2xl mx-auto">
          Nice Recruiting Agency has been a trusted partner for Gulf companies
          seeking skilled Nepali workers.
        </p> */}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {members.map((card, index) => (
          <div key={index} className="relative w-full h-[60vh]  ">
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover rounded-4xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-4xl"></div>

            <div className="absolute z-50 bottom-[0%] rounded-4xl backdrop-blur-md h-20 w-full p-6 flex items-center justify-center">
              <h1 className="text-white text-lg font-montserrat text-center">
                {card.title}
              </h1>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
