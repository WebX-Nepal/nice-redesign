import Image from "next/image";
import React from "react";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "10,000+", label: "Workers Deployed" },
  { number: "6+", label: "Gulf Countries Served" },
  { number: "500+", label: "Hiring Partners" },
];

const reasons = [
  {
    title: "Proven Recruitment Process",
    desc: "We follow a structured and transparent hiring process, ensuring every candidate is carefully screened and verified before deployment.",
  },
  {
    title: "Reliable & Skilled Workforce",
    desc: "Our workers are selected based on skill, experience, and work ethic, meeting the standards required by Gulf companies.",
  },
  {
    title: "Fast & Timely Deployment",
    desc: "We ensure quick mobilization of workers to meet your project deadlines without compromising quality.",
  },
  {
    title: "Long-Term Client Relationships",
    desc: "We build lasting partnerships by consistently delivering dependable manpower solutions to our clients.",
  },
];

const Trust = () => {
  return (
    <div className="w-full flex flex-col mt-20 gap-4">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className=" flex flex-col gap-3 ">
          <h1 className="text-2xl md:text-3xl font-bold font-montserrat">
            Why Global Companies{" "}
            <span className="text-[#2089CA]">Trust Us</span>
          </h1>
          <p className="text-sm md:text-lg max-w-2xl leading-tight font-poppins text-neutral-600">
            Trusted by companies across the Gulf for reliable, skilled, and
            timely manpower solutions.
          </p>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((item, i) => (
            <div
              key={i}
              className="w-full flex flex-col items-center gap-2 p-6 rounded-xl "
            >
              <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-[#2089CA]">
                {item.number}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-montserrat text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full min-h-[60vh] flex items-center">
        <Image
          src="/About/about_hero.jpg"
          alt="Nice Recruiting Agency"
          fill
          priority
          className="object-cover blur-[4px]"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="p-6 backdrop-blur-xs bg-white/10  rounded-xl flex flex-col items-center gap-4 text-center"
              >
                <h3 className="text-base md:text-lg font-semibold font-montserrat text-[#2089CA]">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm font-poppins leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
