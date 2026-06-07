import Image from "next/image";
import { Icon } from "@iconify/react";
import ContainerWrapper from "../shared/ContainerWrapper";
import Badge from "../Home/shared/Badge";
import Button from "../shared/Button";
const talents = [
  {
    title: "Construction Workers",
    description:
      "Masons, carpenters, steel fixers, electricians and plumbers trained for large-scale Gulf builds.",
    image: "/jobs/construction_workers.avif",
    icon: "mdi:hard-hat",
    count: "500+ deployed",
    skills: ["Masonry", "Carpentry", "Steel Fixing", "Electrical"],
  },
  {
    title: "Hospitality Staff",
    description:
      "Chefs, waiters, housekeeping and front desk staff trained to deliver five-star service.",
    image: "/jobs/hospitality_staff.avif",
    icon: "mdi:room-service",
    count: "300+ deployed",
    skills: ["Food Service", "Housekeeping", "Front Desk", "Kitchen"],
  },
  {
    title: "Security Personnel",
    description:
      "Disciplined, certified security guards trained in Gulf safety standards and protocols.",
    image: "/jobs/security.avif",
    icon: "mdi:shield-account",
    count: "400+ deployed",
    skills: ["Surveillance", "Access Control", "Emergency Response", "Patrol"],
  },
  {
    title: "General Labour",
    description:
      "Hardworking general workers for warehouses, cleaning, loading and operational roles.",
    image: "/jobs/general_labour.avif",
    icon: "mdi:account-wrench",
    count: "600+ deployed",
    skills: ["Warehousing", "Cleaning", "Loading", "Operations"],
  },
  {
    title: "Facility Management",
    description:
      "Experienced facility staff for maintenance and operations of commercial properties.",
    image: "/office/office.avif",
    icon: "mdi:office-building-cog",
    count: "150+ deployed",
    skills: ["Maintenance", "HVAC", "Plumbing", "Cleaning"],
  },
  {
    title: "Driver & Logistics",
    description:
      "Licensed drivers and logistics personnel for transport and fleet management roles.",
    image: "/jobs/grow.avif",
    icon: "mdi:truck-delivery",
    count: "200+ deployed",
    skills: ["Heavy Vehicle", "Light Vehicle", "Delivery", "Fleet Mgmt"],
  },
];

const Categories = () => {
  return (
    <>
      {/* Talent Categories */}
      <section className="pb-24 font-fustat">
        <ContainerWrapper className="h-fit">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge
                icon="mdi:account-group-outline"
                label="Talent Pool"
              />
              <h2 className="text-4xl  md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
                Our <span className="text-[#2089CA]">
                  Skilled Talents.
                </span>
              </h2>
              <p className="text-zinc-500 text-base md:text-lg leading-relaxed w-full md:w-[45%]">
                Every category below represents a pool of trained, certified,
                and Gulf-ready workers.
              </p>
              <Button
                icon="mdi:arrow-right"
                href="/contact"
                label="Request Talent"
                className="w-fit"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talents.map((talent, index) => (
                <div
                  key={index}
                  className="group bg-[#F3F3F4] border border-gray-300 hover:border-[#2089CA]/40  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <Image
                      src={talent.image}
                      alt={talent.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-zinc-950/30" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon icon={talent.icon} width="20" className="text-white" />
                    </div>
                    <div className="absolute top-3 right-3 bg-[#2089CA] text-white text-xs font-bold px-4 py-2 rounded-full">
                      {talent.count}
                    </div>
                                               
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-7 flex flex-col gap-4 flex-1">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-1">{talent.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{talent.description}</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {talent.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-zinc-600 border-blue-50 border bg-white px-2.5 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Button pushed to bottom */}
                    <div className="mt-auto">
                      <Button
                        icon="mdi:arrow-right"
                        href="/contact"
                        label="Request This Talent"
                        className="w-full flex justify-center"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </ContainerWrapper>
      </section>


    </>
  );
};

export default Categories;
