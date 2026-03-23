import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const CtaSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold font-montserrat ">
          We connect you with the{" "}
          <span className="text-[#2089CA]">best talent!</span>
        </h1>
        <p className="text-sm md:text-lg text-neutral-500  max-w-2xl leading-tight">
          Nice Recruiting Agency has been a trusted partner for Gulf companies
          seeking skilled Nepali workers.
        </p>
      </div>

      <div className="w-full  bg-[url('/flags/gulf.png')] bg-cover rounded-3xl">
        <div className="w-full flex gap-10 p-8 rounded-3xl bg-white/40 backdrop-blur-xs border border-white/20 shadow-sm ">
        <div className="w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold font-montserrat text-[#2089CA]">
            {" "}
            Scale Your Team with Pre-Vetted Talent
          </h1>

          <p className="text-lg font-poppins">Get in touch with us today!</p>

          </div>

          <div className="w-full h-110 relative">
            <Image
              src="/office/workers.jpg"
              alt="trust"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <form className="space-y-8">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Country"
              className="w-full p-3 border  border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full p-3 border  border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Required Workers"
              className="w-full p-3 border  border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Job Type"
              className="w-full p-3 border  border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Contact (Email / WhatsApp)"
              className="w-full p-3 border  border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Micro trust */}
            
          </form>
          <div className="flex flex-col gap-2">
              <Button>Send Hiring Inquiry</Button>
              <p className="text-sm font-poppins">
              We will respond within 24 hours
            </p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CtaSection;
