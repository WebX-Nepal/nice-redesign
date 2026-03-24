import Image from "next/image";
import { Icon } from "@iconify/react";

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full">
            <Icon
              icon="mdi:lightning-bolt"
              width="16"
              className="text-orange-400"
            />
            How We Empower
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            From Nepal to the Gulf —{" "}
            <span className="text-[#2089CA]">Fully Prepared</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl text-base md:text-lg leading-relaxed">
            Every worker we deploy goes through a rigorous empowerment program —
            training, certification, documentation, and ongoing support.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 bg-zinc-50 border border-zinc-100 rounded-2xl p-5"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Icon icon={s.icon} width="22" className="text-[#2089CA]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empowerment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {empowerments.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-zinc-100 rounded-2xl p-7 hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-[#2089CA] transition-colors duration-300">
                <Icon
                  icon={item.icon}
                  width="22"
                  className="text-[#2089CA] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
