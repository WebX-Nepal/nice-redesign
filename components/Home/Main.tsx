"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../ui/Button";
import { title } from "process";
import { div } from "framer-motion/client";
import TopCountries from "./TopCountries";
import { sections } from "@/constants/constant";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  // useGSAP(() => {
  //   gsap.from(".img, #details", {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".main",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-20 mt-20">

      <div className="flex flex-col gap-15 rounded-[25px]">
        <h1 className="text-3xl font-bold font-montserrat text-center">
          Our <span className="text-[#2089CA]">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-4 ">
          {sections.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col h-[60vh] bg-white rounded-2xl overflow-hidden"
            >

              <div className="relative h-80 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-2xl "
                  fill
                />
              </div>

              <div className="flex flex-col justify-center items-center p-8 gap-4">
                <div className="flex items-center gap-3">

                  <h2 className="text-orange-500 font-bold font-montserrat text-2xl">
                    {item.title}
                  </h2>
                </div>

                <p className="text-gray-600 font-poppins text-center">
                  {item.description}
                </p>

                {/* <div className="mt-auto pt-4">
                  <Button>
                    {item.buttonText}
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
