import { div } from 'framer-motion/client';
import React from 'react'

const recruitmentSteps = [
  {
    title: "Client Requirement",
    description:
      "Understanding the unique needs of our clients, we begin the recruitment process by carefully analyzing and defining the specific requirements for the ideal candidate.",
  },
  {
    title: "Labor Pre-Approval",
    description:
      "Prior to initiating recruitment efforts, we secure labor pre-approval to ensure a streamlined and compliant process, aligning with regulatory standards.",
  },
  {
    title: "Advertising Publishing",
    description:
      "Leveraging targeted advertising channels, we strategically publish job opportunities, maximizing visibility to attract a diverse pool of qualified candidates.",
  },
  {
    title: "Screening & Short Listing",
    description:
      "Rigorous screening processes are employed to meticulously evaluate applicants, resulting in a shortlist of candidates who best match the outlined client requirements.",
  },
  {
    title: "Candidate Interview",
    description:
      "Conducting comprehensive interviews, we delve into the candidates’ skills, experiences, and cultural fit, ensuring alignment with both client needs and organizational values.",
  },
  {
    title: "Practical Trade Testing",
    description:
      "To validate practical skills, candidates undergo thorough trade testing, allowing us to assess their hands-on capabilities and suitability for the specified roles.",
  },
];

const OurServices = () => {
  return (
    <div className='layout mt-16 col-center h-[92vh] gap-10'>
        <h1 className='font-bold text-6xl'>
            What services do <br />
            we provide?
        </h1>

        <p className='text-lg'>At Nice Recruiting Agency, we are dedicated to providing comprehensive manpower solutions that empower businesses to succeed. Our services range from permanent and contract staffing to executive search, skill development, and outsourcing.</p>

        <div className='grid grid-cols-3 gap-8'>
            {recruitmentSteps.map((steps,index)=>(
                <div key={index} className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm 
                     transform transition duration-300 hover:scale-105 hover:shadow-lg
                     flex flex-col'>
                    <h3 className='text-xl font-bold pb-4 '>{steps.title}</h3>
                    <p>{steps.description}</p>
                </div>
            )
            )}
        </div>


    </div>
  )
}

export default OurServices