"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { IMAGES } from "./ImagePlay";

const TICKER_ITEMS = [...IMAGES, ...IMAGES, ...IMAGES];

export default function VerticalImages() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Column 1 scroll up
      gsap.to(col1Ref.current, {
        y: "-50%",
        ease: "none",
        duration: 80,
        repeat: -1,
      });

      // Column 2 scroll down
      gsap.fromTo(
        col2Ref.current,
        {
          y: "-50%",
        },
        {
          y: "0%",
          ease: "none",
          duration: 80,
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="grid grid-cols-2 gap-2 h-full">
        
        {/* Column 1 */}
        <div className="overflow-hidden h-full">
          <div ref={col1Ref} className="flex flex-col gap-2">
            {TICKER_ITEMS.map((item, i) => (
              <div
                key={i}
                className="relative h-48 shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={item.country}
                  fill
                  priority={i < 4}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-80"
                />

                {/* Country Badge */}
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-full border border-gray-600 bg-black/40 px-2 py-1 backdrop-blur-sm">
                  <div className="relative h-3 w-5 overflow-hidden rounded-sm">
                    <Image
                      src={item.flag}
                      alt={item.country}
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-xs font-medium text-white">
                    {item.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="overflow-hidden h-full">
          <div ref={col2Ref} className="flex flex-col gap-2">
            {[...TICKER_ITEMS].reverse().map((item, i) => (
              <div
                key={i}
                className="relative h-64 shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={item.country}
                  fill
                  priority={i < 4}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-80"
                />

                {/* Country Badge */}
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-full border border-gray-600 bg-black/40 px-2 py-1 backdrop-blur-sm">
                  <div className="relative h-3 w-5 overflow-hidden rounded-sm">
                    <Image
                      src={item.flag}
                      alt={item.country}
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-xs font-medium text-white">
                    {item.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Blur */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-16 backdrop-blur-md"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      {/* Bottom Blur */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 backdrop-blur-md"
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
}