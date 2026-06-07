import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

export const industries = [
  {
    title: "Construction Companies",
    description:
      "We provide skilled construction workers for projects of all sizes, from masons and carpenters to electricians and steel fixers. ",
    image: "/About/industries/construction.jpg",
  },
  {
    title: "Hotels & Restaurants",
    description:
      "Our hospitality staff includes experienced chefs, waiters, housekeeping professionals, and front desk personnel. They are ",
    image: "/About/industries/hospitality.jpg",
  },
  {
    title: "Facility Management",
    description:
      "We supply trained personnel for cleaning, maintenance, and overall facility operations. From managing day-to-day upkeep to ",
    image: "/About/industries/facility.jpg",
  },
  {
    title: "Logistics & Warehousing",
    description:
      "Our logistics and warehouse staff are skilled in inventory management, loading and unloading, and shipment handling. They work ",
    image: "/About/industries/warehousing.jpg",
  },
];

const Details = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold font-montserrat text-center">
          Powering Businesses Across{" "}
          <span className="text-[#2089CA]">Key Industries</span>
        </h1>

        <p className="text-sm md:text-lg text-neutral-500 text-center max-w-3xl mx-auto">
          From construction sites to luxury hotels, we provide skilled manpower
          tailored to your industry’s unique needs. Reliable, efficient, and
          ready to scale your workforce anytime.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {industries.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-10  ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}>
            <div className="w-1/2 h-70 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4 p-6">
              <h1 className="text-3xl font-bold font-montserrat  text-[#2089CA]">
                {item.title}
              </h1>
              <p className="text-sm md:text-lg text-neutral-500 ">
                {item.description}
              </p>
              <Button>Learn in Detail</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
