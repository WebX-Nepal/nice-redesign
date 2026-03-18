import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const partners = [
  {
    image: "/flags/bahrain.png",
    title: "Bahrain",
    description: "Understanding the unique needs of our Understanding Understanding the unique needs of our Understanding.",
  },
  {
    image: "/flags/kuwait.png",
    title: "Kuwait",
    description: "Prior to initiating recruitment efforts",
  },
  {
    image: "/flags/oman.png",
    title: "Oman",
    description: "Leveraging targeted advertising ",
  },
  {
    image: "/flags/qatar.jpg",
    title: "Qatar",
    description: "Rigorous screening processes are employed ",
  },
  {
    image: "/flags/saudi.png",
    title: "Saudi Arabia",
    description: "Conducting comprehensive interviews",
  },
  {
    image: "/flags/united.png",
    title: "United Arab Emirates",
    description: "To validate practical skills",
  },
];

const TopCountries = () => {
  return (
    <div className=" max-w-7xl mx-auto flex flex-col gap-10">
      <h1 className="text-3xl font-bold font-montserrat text-center">
        Countries Served
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-7xl gap-8 ">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center gap-10  p-6 shadow-md  hover:scale-105 duration-300 cursor-pointer"
          >
            <div className="relative w-1/3 h-20 mr-4 ">
              <Image src={partner.image} alt="bahrain" fill className="object-contain" />
            </div>

            <div className="w-2/3 flex flex-col gap-2">
              <h3 className="text-lg font-bold font-montserrat leading-tight">
                {partner.title}
              </h3>
              <p className="text-sm font-poppins">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCountries;
