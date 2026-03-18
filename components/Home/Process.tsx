import React from "react";

const Process = () => {
  return (
    <div className="relative max-w-7xl mx-auto mt-20 h-screen">
      <h1 className="text-3xl font-bold font-montserrat text-center">
        Our Processes
      </h1>
      <div className="absolute left-1/2 top-15  w-1 h-full bg-black" />

      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-white border border-gray-500 flex items-center justify-center font-semibold">
        1
      </div>

      <div className="absolute top-55 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-white border border-gray-500 flex items-center justify-center font-semibold">
        2
      </div>

      <div className="absolute top-90 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-white border border-gray-500 flex items-center justify-center font-semibold">
        3
      </div>

      <div className="absolute top-125 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-white border border-gray-500 flex items-center justify-center font-semibold">
        4
      </div>

      <div className="absolute top-160 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-white border border-gray-500 flex items-center justify-center font-semibold">
        5
      </div>

      <div className="absolute left-0 w-[40%] bg-white p-6 rounded-2xl shadow-md border ">
        <h3 className="font-semibold font-montserrat text-lg">
          Inquiry Submission
        </h3>
        <p className="font-poppins">
          The client submits a hiring request detailing the number of workers,
          job roles, and project requirements. This helps us understand your
          workforce needs clearly.
        </p>
      </div>

      <div className="absolute top-45 right-0 w-[40%] bg-white p-6 rounded-2xl shadow-md border">
        <h3 className="font-semibold font-montserrat text-lg">
          Requirement Discussion
        </h3>
        <p className="font-poppins">
          Our team connects with you to discuss the requirements in detail,
          including skills, experience, and deployment timelines, ensuring
          complete clarity.
        </p>
      </div>
      <div className="absolute top-80 left-0 w-[40%] bg-white p-6 rounded-2xl shadow-md border ">
        <h3 className="font-semibold font-montserrat text-lg">
          Candidate Selection
        </h3>
        <p className="font-poppins">
          We present a list of pre-screened and qualified candidates for your approval, allowing 
          you to select workers who perfectly match your project needs.
        </p>
      </div>

      <div className="absolute top-115 right-0 w-[40%] bg-white p-6 rounded-2xl shadow-md border">
        <h3 className="font-semibold font-montserrat text-lg">
          Documentation & Processing
        </h3>
        <p className="font-poppins">
          Our team handles all legal and administrative paperwork, including contracts, visas, and 
          travel arrangements, making the recruitment process hassle-free.
        </p>
      </div>

      <div className="absolute top-150 left-0 w-[40%] bg-white p-6 rounded-2xl shadow-md border ">
        <h3 className="font-semibold font-montserrat text-lg">
          Deployment
        </h3>
        <p className="font-poppins">
          Selected workers are deployed to your project sites in the Gulf countries efficiently and on time, 
          ready to contribute from day one.
        </p>
      </div>

      <div className="absolute right-[50%] top-30  w-32 h-1 bg-black" />
      <div className="absolute left-[50%] top-65  w-32 h-1 bg-black" />
      <div className="absolute right-[50%] top-100  w-32 h-1 bg-black" />
      <div className="absolute left-[50%] top-135  w-32 h-1 bg-black" />
      <div className="absolute right-[50%] top-170  w-32 h-1 bg-black" />
    </div>
  );
};

export default Process;
