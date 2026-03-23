'use client'
import Image from 'next/image';
import { ImagePlayer } from '../image-player';

const IMAGES = [
 "/hero/imageplay/burj_khalifa.jpg",
  "/hero/imageplay/quatar_doha.jpg",
  "/hero/imageplay/saudi_jeedah.jpg",
  "/hero/imageplay/kuwait.jpg",
  "/hero/imageplay/oman.jpg",
  "/hero/imageplay/bahrin.jpg",
];

export default function DemoOne() {
  return (<div className="h-full w-full flex items-center justify-center">
      <ImagePlayer
        images={IMAGES}
        interval={2000}
        renderImage={(src) => (
          <Image
            src={src}
            width={400}
            height={300}
            className="size-full h-auto max-h-full max-w-xl object-cover inline-block align- rounded-3xl"
            alt="showcalse"
          />
        )}
      />
    </div>)
}


