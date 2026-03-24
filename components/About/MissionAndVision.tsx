import Image from "next/image";
import { Icon } from "@iconify/react";

const items = [
  {
    type: "Mission",
    icon: "mdi:target",
    color: "bg-blue-50 text-[#2089CA]",
    accent: "border-[#2089CA]",
    image: "/About/mission.jpg",
    text: "To bridge the gap between talent and opportunity by delivering skilled, verified Nepali workers to Gulf employers through a transparent, ethical, and efficient recruitment process.",
    points: [
      "Ethical hiring practices",
      "Full legal compliance",
      "Worker welfare first",
    ],
  },
  {
    type: "Vision",
    icon: "mdi:eye-outline",
    color: "bg-orange-50 text-orange-500",
    accent: "border-orange-400",
    image: "/About/vision.jpg",
    text: "To become the most reliable human resource provider in the region — ensuring dignity for workers, growth for employers, and a stronger Nepal-Gulf workforce bridge.",
    points: [
      "Regional market leader",
      "Dignified employment",
      "Long-term partnerships",
    ],
  },
];

const MissionAndVision = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full">
            <Icon icon="mdi:compass-outline" width="16" />
            What Drives Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            Our Mission <span className="text-[#2089CA]">&amp; Vision</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.type}
              className={`bg-white rounded-3xl border-t-4 ${item.accent} shadow-sm overflow-hidden`}
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.type}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-zinc-950/50" />
                <div className="absolute top-5 left-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}
                  >
                    <Icon icon={item.icon} width="24" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5">
                  <span className="text-white font-bold text-2xl">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-5">
                <p className="text-zinc-600 text-base leading-relaxed">
                  {item.text}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-zinc-700 text-sm font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon
                          icon="mdi:check"
                          width="12"
                          className="text-[#2089CA]"
                        />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
