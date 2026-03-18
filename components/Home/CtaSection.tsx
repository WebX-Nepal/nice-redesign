import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const CtaSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-10">
      <div className="text-center">
        <p className="text-3xl font-bold font-montserrat">
          We connect you with the best talent!
        </p>
      </div>

      <div className="w-full flex gap-10">
        <div className="w-1/2 flex flex-col text-center gap-5">
          <h1 className="text-2xl font-semibold font-montserrat">
            {" "}
            Looking for Reliable Workforce?
          </h1>

          <p className="text-lg font-poppins">Get in touch with us today!</p>

          <p className="text-lg font-poppins">
            Fill the form for quick assistance
          </p>

          <div className="w-full h-104 relative">
            <Image
              src="/office/hands.jpg"
              alt="trust"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="w-1/2 ">
          <form className="space-y-10">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Country"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Required Workers"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Job Type"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Contact (Email / WhatsApp)"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-center">
              <Button>Send Hiring Inquiry</Button>
            </div>

            {/* Micro trust */}
            <p className="text-lg font-poppins text-center">
              We will respond within 24 hours
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
