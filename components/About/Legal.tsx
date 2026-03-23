import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const items = [
  {
    icon: "duo-icons:approved",
    title: "Government Approved",
    desc: "We are a licensed recruitment agency authorized by the Government of Nepal, ensuring full compliance with official regulations and international standards.",
  },
  {
    icon: "mdi:file-text-outline",
    title: "Legal Hiring Process",
    desc: "Every step, from candidate selection to visa processing, follows a structured and legally compliant process for smooth and risk-free recruitment.",
  },
  {
    icon: "fa-solid:handshake",
    title: "Ethical Recruitment",
    desc: "We maintain transparency, fair practices, and no hidden charges, ensuring ethical recruitment for both clients and workers.",
  },
  {
    icon: "solar:shield-bold",
    title: "Worker Protection",
    desc: "We ensure proper documentation, contracts, and worker welfare, promoting safe and secure employment abroad.",
  },
];

const Legal = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-10">
      <div className=" flex flex-col  gap-3 ">
        <h1 className="text-2xl md:text-3xl font-bold font-montserrat">
          Compliance & <span className="text-[#2089CA]">Transparency</span>
        </h1>
        <p className="text-sm md:text-lg font-poppins text-neutral-600 leading-tight max-w-2xl">
          We follow strict legal and ethical standards to ensure safe,
          transparent, and reliable recruitment for both clients and workers.
        </p>
      </div>

      <div className="flex gap-10">
        <div className="w-1/2 grid grid-cols-2 gap-6">
          <div className="relative col-span-2 h-100">
            <Image
              src="/About/legal.jpg"
              alt="Compliance and legal process"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl" />
          </div>

          <div className="relative h-62.5">
            <Image
              src="/About/legal2.jpg"
              alt="Legal process"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl" />
          </div>

          <div className="relative h-62.5">
            <Image
              src="/About/legal3.jpg"
              alt="Compliance"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl" />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-6">
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className="p-5 bg-white border border-gray-200 rounded-xl "
              >
                <div className="flex items-center justify-between p-2 rounded-lg">
                  <h3 className="font-semibold font-montserrat text-[#2089CA]">
                    {item.title}
                  </h3>
                  <Icon icon={item.icon} width="24" height="24" className="text-[#2089CA]" />
                </div>

                <p className="text-sm text-gray-600 mt-2 font-poppins leading-relaxed p-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Legal;
