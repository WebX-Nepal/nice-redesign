import Image from "next/image";
import { Icon } from "@iconify/react";

const stats = [
  { value: "20+", label: "Years Experience", icon: "mdi:calendar-check" },
  { value: "2,000+", label: "Workers Deployed", icon: "mdi:account-group" },
  { value: "7+", label: "Gulf Countries", icon: "mdi:earth" },
  { value: "500+", label: "Hiring Partners", icon: "mdi:handshake" },
];

const reasons = [
  {
    icon: "mdi:clipboard-check-outline",
    title: "Proven Recruitment Process",
    desc: "Structured and transparent hiring — every candidate is carefully screened and verified before deployment.",
  },
  {
    icon: "mdi:account-star-outline",
    title: "Reliable & Skilled Workforce",
    desc: "Workers selected based on skill, experience, and work ethic, meeting the standards required by Gulf companies.",
  },
  {
    icon: "mdi:clock-fast",
    title: "Fast & Timely Deployment",
    desc: "Quick mobilization of workers to meet your project deadlines without compromising quality.",
  },
  {
    icon: "mdi:handshake-outline",
    title: "Long-Term Partnerships",
    desc: "We build lasting relationships by consistently delivering dependable manpower solutions.",
  },
];

const Trust = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon
                icon="mdi:star-circle"
                width="16"
                className="text-orange-400"
              />
              Why Trust Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              Why Global Companies{" "}
              <span className="text-[#2089CA]">Trust Us</span>
            </h2>
            <p className="text-zinc-500 max-w-lg text-base md:text-lg leading-relaxed">
              Trusted by companies across the Gulf for reliable, skilled, and
              timely manpower solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-start gap-1">
                <span className="text-3xl font-bold text-zinc-900">
                  {s.value}
                </span>
                <span className="text-sm text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons grid over image */}
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="/About/about_hero.jpg"
            alt="Trust"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/75" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2089CA]/20 border border-[#2089CA]/30 flex items-center justify-center">
                  <Icon icon={r.icon} width="24" className="text-[#2089CA]" />
                </div>
                <h3 className="text-white font-bold text-base">{r.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
