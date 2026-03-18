"use client";
import Button from "@/components/ui/Button";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import SecondaryButton from "../ui/SecondaryButton";
import { div } from "framer-motion/client";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const countries = ["UAE", "Qatar", "Saudi Arabia", "Kuwait", "Oman", "Bahrain"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % countries.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: "100%",   // start BELOW container
        opacity: 0
      },
      {
        y: "0%",     // move INTO view
        opacity: 1,
        duration: 0.6,
        ease: "power4.out"
      }
    )
  }, [index])

  return (
    <div className="h-[90vh] max-w-7xl mx-auto flex gap-10 mt-16 ">

      <div className=" w-1/2 flex flex-col gap-5 justify-center ">
        <h1 className="text-md font-montserrat text-[#FF6900] font-semibold">
          Hire talented manpower
        </h1>

        <h1 className="text-3xl  md:text-5xl font-bold mb-4 max-w-5xl  font-montserrat ">
          Reliable Manpower Solutions from Nepal to the{"   "}
            <span className="inline-block h-[1em] overflow-hidden align-bottom">
        
        <span
          ref={textRef}
          className="inline-block text-[#2089CA]"
        >
          {countries[index]}
        </span>

      </span>
        </h1>

        <p className="text-lg md:text-xl  max-w-3xl font-poppins">
          Trusted by companies across UAE, Qatar, and Saudi Arabia for skilled
          and verified workforce.
        </p>

        <div className="flex gap-5">
          <p>✔ 2000+ Workers Ready</p>
          <p>✔ 10+ Countries Served</p>
          <p>✔ Licensed Agency</p>
        </div>

        <div className="flex gap-5">
          <Button>Request Manpower</Button>
          <SecondaryButton>View Our Process</SecondaryButton>
        </div>
      </div>

      <div className="w-1/2 h-full relative">
        <Image
          src="/hero/demo.jpg"
          alt="hero image"
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
