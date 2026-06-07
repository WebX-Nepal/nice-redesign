import { Icon } from "@iconify/react";

interface Stat {
  value: string;
  label: string;
}

interface AchievementsProps {
  title: string[];
  stats: Stat[];
}

export default function Achievements({ title, stats }: AchievementsProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-xl bg-linear-to-b from-[#037ecb] to-[#2089CA]">

      {/* Title — full width on mobile, left column on desktop */}
      <div className="w-full md:flex-1 flex flex-col justify-center px-8 py-10 md:py-12 border-b-2 md:border-b-0 md:border-r-2 border-white">
        {title.map((line, i) => (
          <h2 key={i} className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {line}
          </h2>
        ))}
      </div>

      <div className="grid grid-cols-2 md:contents">
        {stats.map((s, i) => {
          const isRightCol = i % 2 === 1;
          const isLastRow = i >= stats.length - (stats.length % 2 === 0 ? 2 : 1);

          return (
            <div
              key={s.label}
              className={[
                "flex flex-col items-center justify-center gap-2 px-6 py-8 md:py-12 text-center md:flex-1",
                !isRightCol ? "border-r-2 border-gray-200" : "",
                !isLastRow ? "border-b-2 border-gray-200" : "",
                "md:border-b-0",
                i < stats.length - 1 ? "md:border-r-2 md:border-gray-200" : "md:border-r-0",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="text-3xl md:text-4xl font-bold text-white">{s.value}</span>
              <span className="text-xs md:text-sm text-white/80">{s.label}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}