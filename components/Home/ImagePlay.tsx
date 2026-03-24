"use client";
import Image from "next/image";

export const IMAGES = [
  "/hero/imageplay/burj_khalifa.jpg",
  "/hero/imageplay/quatar_doha.jpg",
  "/hero/imageplay/saudi_jeedah.jpg",
  "/hero/imageplay/kuwait.jpg",
  "/hero/imageplay/oman.jpg",
  "/hero/imageplay/bahrin.jpg",
  "/office/nepal.jpg",
];

export default function ImagePlay({ index }: { index: number }) {
  return (
    <div className="h-full w-full">
      <Image
        src={IMAGES[index]}
        fill
        className="object-cover transition-opacity duration-500"
        alt="country showcase"
      />
    </div>
  );
}
