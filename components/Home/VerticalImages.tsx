"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "./ImagePlay";

const TICKER_ITEMS = [...IMAGES, ...IMAGES, ...IMAGES];

export default function VerticalImages() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;

      ctx = gsap.context(() => {
        // col1
        gsap.to(col1Ref.current, {
          y: "-50%",
          ease: "none",
          duration: 80,
          repeat: -1,
        });

        // col2
        gsap.fromTo(
          col2Ref.current,
          { y: "-50%" },
          {
            y: "0%",
            ease: "none",
            duration: 80,
            repeat: -1,
          }
        );
      });
    };

    init();

    return () => ctx?.revert();
  }, []);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="grid grid-cols-2 gap-2 h-full">

        {/* col 1 */}
        <div className="overflow-hidden h-full">
          <div ref={col1Ref} className="flex flex-col gap-2">
            {TICKER_ITEMS.map((item, i) => (
              <div key={i} className="relative h-48 shrink-0 overflow-hidden rounded-xl">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={item.src}
                  fill
                  className="object-cover brightness-80"
                  alt={item.country}
                />
                <div className="absolute z-10 top-2 right-2 flex items-center gap-1.5 bg-black/40 border border-gray-600 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="h-3 w-5 relative">
                    <Image
                      src={item.flag}
                      fill
                      alt={item.country}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-sm"
                    />
                  </div>
                  <span className="text-xs text-white font-medium">{item.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* col 2 */}
        <div className="overflow-hidden h-full">
          <div ref={col2Ref} className="flex flex-col gap-2">
            {[...TICKER_ITEMS].reverse().map((item, i) => (
              <div key={i} className="relative aspect-9/16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={item.src}
                  fill
                  className="object-cover brightness-80"
                  alt={item.country}
                />
                <div className="absolute z-10 top-2 right-2 flex items-center gap-1.5 bg-black/40 border border-gray-600 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="h-3 w-5 relative">
                    <Image
                      src={item.flag}
                      fill
                      alt={item.country}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-sm"
                    />
                  </div>
                  <span className="text-xs text-white font-medium">{item.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Blur fade top */}
      <div
        className="backdrop-blur-sm absolute top-0 left-0 right-0 h-12 pointer-events-none z-10"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      {/* Blur fade bottom */}
      <div
        className="backdrop-blur-xl absolute bottom-0 left-0 right-0 h-18 pointer-events-none z-10"
        style={{
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}