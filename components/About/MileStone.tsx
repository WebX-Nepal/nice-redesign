const milestones = [
  { year: "2005", label: "Founded in Kathmandu, Nepal" },
  { year: "2008", label: "First Gulf deployment to UAE" },
  { year: "2015", label: "Expanded to 6 Gulf countries" },
  { year: "2024", label: "2,000+ workers successfully deployed" },
];

const DottedH = () => (
  <div
    className="h-[3px] flex-1"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, #2089CA 0px, #2089CA 6px, transparent 6px, transparent 12px)",
    }}
  />
);

const SolidLine = () => <div className="w-[3px] h-7 bg-[#2089CA]" />;

export default function MilestoneTimeline() {
  return (
    <div className="w-full pt-10">
      <div className="flex flex-col">

        {/* TOP ROW — even indices (0, 2): label → circle → line ↓ */}
        <div className="grid grid-cols-4">
          {milestones.map((m, i) => (
            <div key={i} className="flex flex-col items-center justify-end min-h-[110px]">
              {i % 2 === 0 && (
                <>
                  <p className="text-sm text-zinc-500 text-center max-w-[110px] leading-snug mb-2">
                    {m.label}
                  </p>
                  <div className="w-12 h-12 rounded-full bg-[#2089CA] flex items-center justify-center text-white text-xs font-medium leading-tight text-center">
                    {m.year}
                  </div>
                  <SolidLine />
                </>
              )}
            </div>
          ))}
        </div>

        {/* SPINE */}
        <div className="grid grid-cols-4 items-center relative h-1">
          <div className="absolute inset-y-0 flex items-center" style={{ left: "12.5%", right: "12.5%" }}>
            <DottedH />
          </div>
          {milestones.map((_, i) => (
            <div key={i} className="flex justify-center relative z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2089CA] ring-2 ring-[#2089CA]/30" />
            </div>
          ))}
        </div>

        {/* BOTTOM ROW — odd indices (1, 3): line ↓ → circle → label */}
        <div className="grid grid-cols-4">
          {milestones.map((m, i) => (
            <div key={i} className="flex flex-col items-center min-h-[110px]">
              {i % 2 !== 0 && (
                <>
                  <SolidLine />
                  <div className="w-12 h-12 rounded-full bg-[#2089CA] flex items-center justify-center text-white text-xs font-medium leading-tight text-center">
                    {m.year}
                  </div>
                  <p className="text-sm text-zinc-500 text-center max-w-[110px] leading-snug mt-2">
                    {m.label}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}