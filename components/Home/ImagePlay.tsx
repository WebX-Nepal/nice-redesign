"use client";
import Image from "next/image";

export const IMAGES = [
  {
    src: "/hero/imageplay/burj_khalifa.avif",
    country: "UAE",
    flag: "/flags/united.avif",
  },
  {
    src: "/hero/imageplay/quatar_doha.avif",
    country: "Qatar",
    flag: "/flags/qatar.avif",
  },
  {
    src: "/hero/imageplay/saudi_jeedah.avif",
    country: "Saudi Arabia",
    flag: "/flags/saudi.avif",
  },
  {
    src: "/hero/imageplay/kuwait.avif",
    country: "Kuwait",
    flag: "/flags/kuwait.avif",
  },
  {
    src: "/hero/imageplay/oman.avif",
    country: "Oman",
    flag: "/flags/oman.avif",
  },
  {
    src: "/hero/imageplay/bahrin.avif",
    country: "Bahrain",
    flag: "/flags/bahrain.avif",
  },
  {
    src: "/hero/imageplay/malaysia.avif",
    country: "Malaysia",
    flag: "/flags/malaysia-flag.avif",
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
