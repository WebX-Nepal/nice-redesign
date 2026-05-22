
import { Icon } from "@iconify/react";
import ContainerWrapper from "../shared/ContainerWrapper";
import Badge from "../Home/shared/Badge";
import Achievements from "../About/Achivements";
import Image from "next/image";
import Button from "../shared/Button";
const empowerments = [
  {
    icon: "mdi:school-outline",
    title: "Pre-Departure Training",
    desc: "Workers undergo structured training covering job-specific skills, safety protocols, and Gulf workplace culture before deployment.",
  },
  {
    icon: "mdi:certificate-outline",
    title: "Skill Certification",
    desc: "Each candidate is assessed and certified in their trade — ensuring employers receive workers who are ready from day one.",
  },
  {
    icon: "mdi:translate",
    title: "Language & Communication",
    desc: "Basic Arabic and English communication training is provided to help workers integrate smoothly into Gulf work environments.",
  },
  {
    icon: "mdi:heart-pulse",
    title: "Health & Safety Briefing",
    desc: "All workers complete a health screening and safety orientation covering Gulf-specific regulations and workplace standards.",
  },
  {
    icon: "mdi:file-document-check-outline",
    title: "Documentation Support",
    desc: "We handle all visa, contract, and travel documentation — workers arrive fully prepared with zero paperwork stress.",
  },
  {
    icon: "mdi:headset",
    title: "Post-Deployment Support",
    desc: "Our team stays in contact after deployment to ensure worker welfare and resolve any issues quickly.",
  },
];

const stats = [
  { value: "2,000+", label: "Workers Deployed", icon: "mdi:account-group" },
  { value: "95%", label: "Placement Success Rate", icon: "mdi:chart-line" },
  {
    value: "3–6 Weeks",
    label: "Avg. Training Duration",
    icon: "mdi:calendar-clock",
  },
  { value: "7+", label: "Gulf Countries", icon: "mdi:earth" },
];

const ChooseUs = () => {
  return (
    <section className="py-24 font-fustat">
      <ContainerWrapper className="h-fit">
        {/* Header */}
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <Badge
                icon="mdi:lightning-bolt"
                label="How We Empower"
              />
              <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
                From Nepal to the Gulf
                <br className="hidden md:block" />
                <span className="text-[#2089CA]">
                  - Fully Prepared.
                </span>
              </h2>
              <p className="text-base md:text-lg  text-zinc-500 leading-relaxed">
                Every worker we deploy goes through a rigorous empowerment program —
                training, certification, documentation, and ongoing support.
              </p>
              <Button
                icon="mdi:arrow-right"
                label="Hire Now"
                href="/contact"
                className="w-fit"
              />

            </div>
            <div className="relative h-100 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/design.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/20 to-transparent" />

            </div>
          </div>

          <Achievements stats={stats} title={["Growing", "Confidence"]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {empowerments.map((item, i) => (
              <div key={i} className="relative flex items-start gap-5 bg-[#F3F3F4] border border-gray-300 hover:border-[#2089CA]/40 rounded-2xl p-4  md:p-7 hover:shadow-md  transition-all duration-300 overflow-hidden">

                {/* Large background step number */}
                <span className="absolute -right-1 -top-1 md:-right-2 md:-top-3 text-5xl md:text-[4.5rem] font-black text-[#2089CA]/20  leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-gray-300 flex items-center justify-center shrink-0 group-hover:bg-[#2089CA] transition-colors duration-300 z-10">
                  <Icon icon={item.icon} width="22" className="text-[#2089CA]" />
                </div>

                {/* Text */}
                <div className="z-10">
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



      </ContainerWrapper>
    </section>
  );
};

export default ChooseUs;
