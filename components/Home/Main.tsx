"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeSections, sections } from "@/constants/constant";
import Button from "../ui/Button";

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
    <div className="max-w-7xl mx-auto h-screen flex flex-col items-center justify-center gap-20 ">
      <div className="flex flex-col gap-10 rounded-[25px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold font-montserrat ">
            Our <span className="text-[#2089CA]">Services</span>
          </h1>

          <p className="text-sm md:text-lg text-neutral-500 leading-tight max-w-2xl">
            Nice Recruiting Agency has been a trusted partner for Gulf companies
            seeking skilled Nepali workers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeSections.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-4 p-4 rounded-3xl border border-zinc-400 cursor-pointer"
            >
              <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover  rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-between   gap-3">
                <h2 className="text-lg font-semibold font-montserrat text-[#2089CA]">
                  {item.title}
                </h2>

                <p className="text-gray-500 h-24 text-sm font-poppins leading-relaxed">
                  {item.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
        <Button>View more</Button>
      </div>
    </div>
  );
};

export default Main;
