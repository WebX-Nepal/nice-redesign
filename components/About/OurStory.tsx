import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex gap-10">
      <div className="w-1/2 pt-6 flex flex-col gap-10">
        <h1 className="text-3xl font-bold font-montserrat text-[#2089CA]">
          Our Story
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-sm md:text-lg text-neutral-500">
            Founded in 2007, Nice Manpower Recruitment Agency was born out of a
            simple but powerful mission: to bridge the gap between skilled
            professionals in Nepal and the growing demand for quality manpower
            in the Gulf region.
          </p>
          <p className="text-sm md:text-lg text-neutral-500">
            From our humble beginnings, we focused on building trust,
            transparency, and excellence in recruitment. Over the years, we have
            grown into a reliable partner for both job seekers and Gulf-based
            companies, facilitating thousands of successful placements and
            fostering lasting relationships.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-100 relative">
        <Image
          src="/about/about.jpg"
          alt="our story"
          fill
          className="object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/20 rounded-4xl"></div>
      </div>
    </div>
  );
};

export default OurStory;
