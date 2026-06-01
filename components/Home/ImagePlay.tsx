"use client";
import Image from "next/image";

export const IMAGES = [
  {
    src: "/hero/imageplay/burj_khalifa.jpg",
    country: "UAE",
    flag: "/flags/united.png",
  },
  {
    src: "/hero/imageplay/quatar_doha.jpg",
    country: "Qatar",
    flag: "/flags/qatar.jpg",
  },
  {
    src: "/hero/imageplay/saudi_jeedah.jpg",
    country: "Saudi Arabia",
    flag: "/flags/saudi.png",
  },
  {
    src: "/hero/imageplay/kuwait.jpg",
    country: "Kuwait",
    flag: "/flags/kuwait.png",
  },
  {
    src: "/hero/imageplay/oman.jpg",
    country: "Oman",
    flag: "/flags/oman.png",
  },
  {
    src: "/hero/imageplay/bahrin.jpg",
    country: "Bahrain",
    flag: "/flags/bahrain.png",
  },
  {
    src: "/hero/imageplay/malaysia.jpg",
    country: "Malaysia",
    flag: "/flags/malaysia-flag.jpg",
  },
];

export type ImageItem = (typeof IMAGES)[number];
export default function ImagePlay({ index }: { index: number }) {
  return (
    <div className="h-full w-full">
      {/* <Image
        src={IMAGES[index]}
        fill
        className="object-cover transition-opacity duration-500"
        alt="country showcase"
      /> */}
    </div>
  );
}
