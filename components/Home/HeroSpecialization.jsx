"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cards } from "@/constants/constant";

gsap.registerPlugin(ScrollTrigger);

const HeroSpecialization = () => {


  return (
    <div className="hero-specialization flex flex-col items-center gap-8 max-w-7xl mx-auto mt-20 relative ">

      <h1 className="text-3xl font-bold font-montserrat ">
          WHY CHOOSE US
        </h1>
      <div className="w-full grid grid-cols-2 gap-5">
        
        {cards.map((card, index) => (
          <div
            key={index}
            className={
              "my-container relative flex flex-col border-2 border-[#525252] rounded-2xl px-10 py-20 duration-300"
            }
            style={{ backgroundColor: card.bgColor }}
          >
            <div className="my-absolute-button absolute top-3 right-3 w-9 h-9 rounded-full bg-[#bbf7d0] p-2">
              <Image src={card.icon} width={40} height={40} alt={card.title} />
            </div>

            <div className="description flex flex-col gap-6">
              <h3 className="flex gap-5 items-center font-semibold font-montserrat text-[1.5vw]">
                <span className="text-blue-500">{card.number}</span>{" "}
                {card.title}
              </h3>
              <p className="font-poppins text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSpecialization;
