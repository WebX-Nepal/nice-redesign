"use client";
import { WorldMap } from "@/components/ui/world-map";
import Image from "next/image";
import logo from "@/public/nice-logo.png";
import { Icon } from "@iconify/react";

const destinations = [
  { country: "UAE", icon: "twemoji:flag-united-arab-emirates" },
  { country: "Qatar", icon: "twemoji:flag-qatar" },
  { country: "Saudi Arabia", icon: "twemoji:flag-saudi-arabia" },
  { country: "Kuwait", icon: "twemoji:flag-kuwait" },
  { country: "Oman", icon: "twemoji:flag-oman" },
  { country: "Bahrain", icon: "twemoji:flag-bahrain" },
];

// Nepal → Gulf countries (real coordinates)
const NEPAL = { lat: 27.7172, lng: 85.324 }; // Kathmandu

export function Globe() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
              <Icon icon="mdi:earth" width="16" />
              Global Reach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Our Global <span className="text-[#2089CA]">Presence</span>
            </h2>
            <p className="text-zinc-500 max-w-xl leading-relaxed">
              Connecting skilled Nepali workers with top employers across the
              Gulf region — reliably, legally, and efficiently.
            </p>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3 w-fit">
            <Image
              src={logo}
              alt="Nice Manpower"
              className="w-24 object-contain"
            />
            <div className="w-px h-8 bg-zinc-200" />
            <div>
              <p className="text-xs text-zinc-400 font-medium">Trusted Since</p>
              <p className="text-sm font-bold text-zinc-800">2005</p>
            </div>
          </div>
        </div>

        {/* Destination pills */}
        <div className="flex flex-wrap gap-2 mb-2">
          {destinations.map((d) => (
            <div
              key={d.country}
              className="flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm"
            >
              <Icon icon={d.icon} width="16" />
              {d.country}
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <WorldMap
        dots={[
          { start: NEPAL, end: { lat: 25.2048, lng: 55.2708 } }, // UAE Dubai
          { start: NEPAL, end: { lat: 25.2854, lng: 51.531 } }, // Qatar Doha
          { start: NEPAL, end: { lat: 24.7136, lng: 46.6753 } }, // Saudi Riyadh
          { start: NEPAL, end: { lat: 29.3759, lng: 47.9774 } }, // Kuwait
          { start: NEPAL, end: { lat: 23.5859, lng: 58.4059 } }, // Oman Muscat
          { start: NEPAL, end: { lat: 26.2235, lng: 50.5876 } }, // Bahrain
        ]}
      />
    </section>
  );
}
