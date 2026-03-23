"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function Globe() {
  return (
    <div className=" py-20 dark:bg-black bg-white w-full h-[120vh]">
      <div className="max-w-7xl mx-auto ">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Our Global{" "}
          <span className="text-[#2089CA]">
            Presence
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl leading-tight py-4">
          Nice Recruiting Agency has been a trusted partner for Gulf companies
          seeking skilled Nepali workers.
        </p>
      </div>
      <WorldMap
         dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, 
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, 
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, 
            end: { lat: -15.7975, lng: -47.8919 }, 
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, 
            end: { lat: 38.7223, lng: -9.1393 }, 
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, 
            end: { lat: 28.6139, lng: 77.209 }, 
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: 43.1332, lng: 131.9113 }, 
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: -1.2921, lng: 36.8219 }, 
          },
        ]}
      />
    </div>
  );
}