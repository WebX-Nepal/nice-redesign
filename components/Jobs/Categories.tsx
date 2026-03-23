import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const jobCategories = [
  {
    title: "Construction Workers",
    description:
      "Skilled labor for construction sites, masons, carpenters, and electricians.",
    icon: "/jobs/construction_workers.jpg",
    positions: 5,
  },
  {
    title: "Hospitality Staff",
    description:
      "Chefs, waiters, housekeeping, and front desk staff for hotels & restaurants.",
    icon: "/jobs/hospitality_staff.jpg",
    positions: 3,
  },
  {
    title: "Security Personnel",
    description:
      "Trained security guards and supervisors to protect your premises.",
    icon: "/jobs/security.jpg",
    positions: 4,
  },
  {
    title: "General Labor",
    description:
      "Warehouse workers, helpers, and cleaners for various industries.",
    icon: "/jobs/general_labour.jpg",
    positions: 6,
  },
  {
    title: "Construction Workers",
    description:
      "Skilled labor for construction sites, masons, carpenters, and electricians.",
    icon: "/jobs/construction_workers.jpg",
    positions: 5,
  },
  {
    title: "Hospitality Staff",
    description:
      "Chefs, waiters, housekeeping, and front desk staff for hotels & restaurants.",
    icon: "/jobs/hospitality_staff.jpg",
    positions: 3,
  },
  {
    title: "Security Personnel",
    description:
      "Trained security guards and supervisors to protect your premises.",
    icon: "/jobs/security.jpg",
    positions: 4,
  },
  {
    title: "General Labor",
    description:
      "Warehouse workers, helpers, and cleaners for various industries.",
    icon: "/jobs/general_labour.jpg",
    positions: 6,
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl font-bold font-montserrat text-[#2089CA]">
          Search by Category
        </h2>
        <a href="#" className=" font-semibold">
          All Categories &rarr;
        </a>
      </div>

      <div className="grid grid-cols-4 rounded-2xl gap-10 pb-4">
        {jobCategories.map((category, index) => (
          <div
            key={index}
            className=" rounded-2xl flex flex-col items-center pb-8 text-center shadow hover:shadow-lg transition"
          >
            <div className="w-full h-40 mb-4 relative">
              <Image
                src={category.icon}
                alt={category.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#2089CA]">{category.title}</h3>
            <p className="text-sm text-neutral-500 mb-4">
              {category.positions} open positions
            </p>
            <Button>View Jobs</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
