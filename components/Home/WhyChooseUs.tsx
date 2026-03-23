import { cards } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="hero-specialization flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto h-screen relative ">
      <div className="flex w-full flex-col gap-5">
        <h1 className="text-3xl font-bold font-montserrat ">
          WHY <span className="text-[#2089CA]">CHOOSE US</span>
        </h1>
        <p className="text-sm md:text-lg text-neutral-500 leading-tight max-w-2xl ">
          Nice Recruiting Agency has been a trusted partner for Gulf companies
          seeking skilled Nepali workers.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {cards.map((card, index) => (
          <div key={index} className="group relative rounded-4xl  w-full h-[60vh]  ">
            <div className="relative h-full w-full rounded-4xl overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover  rounded-4xl transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
   
            <div className="absolute inset-0 bg-black/40 rounded-4xl"></div>

            <div className="absolute z-50 bottom-[0%] rounded-4xl backdrop-blur-md h-30 w-full p-4 flex items-center justify-center">
              <h1 className="text- text-lg text-zinc-100 font-montserrat text-center">
                {card.title}
              </h1>
            </div>
            <Icon
              icon={card.icon}
              width="40"
              height="40"
              className="text-[#F37023] z-50 m-1 absolute top-0 right-0 m-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
