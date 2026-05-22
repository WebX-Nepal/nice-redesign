"use client";
import { Globe3D, GlobeMarker, GlobeConnection } from "@/components/ui/3d-globe";

const markers: GlobeMarker[] = [
  { lat: 28.0, lng: 84.0, src: "https://flagcdn.com/w320/np.png", label: "Nepal", isOrigin: true },
  { lat: 24.47, lng: 54.37, src: "https://flagcdn.com/w320/ae.png", label: "UAE" },
  { lat: 25.28, lng: 51.52, src: "https://flagcdn.com/w320/qa.png", label: "Qatar" },
  { lat: 24.69, lng: 46.72, src: "https://flagcdn.com/w320/sa.png", label: "Saudi Arabia" },
  { lat: 29.36, lng: 47.97, src: "https://flagcdn.com/w320/kw.png", label: "Kuwait" },
  { lat: 23.59, lng: 58.41, src: "https://flagcdn.com/w320/om.png", label: "Oman" },
  { lat: 26.0, lng: 50.55, src: "https://flagcdn.com/w320/bh.png", label: "Bahrain" },
];

// Arrows flowing FROM nepal to gulf
const connections: GlobeConnection[] = [
  { from: "Nepal", to: "UAE", color: "#ffffff", animationOffset: 0.0 },
  { from: "Nepal", to: "Qatar", color: "#ffffff", animationOffset: 0.18 },
  { from: "Nepal", to: "Saudi Arabia", color: "#ffffff", animationOffset: 0.36 },
  { from: "Nepal", to: "Kuwait", color: "#ffffff", animationOffset: 0.54 },
  { from: "Nepal", to: "Oman", color: "#ffffff", animationOffset: 0.72 },
  { from: "Nepal", to: "Bahrain", color: "#ffffff", animationOffset: 0.90 },
];

export default function NepalGulfGlobe() {
  return (
    <Globe3D
      markers={markers}
      connections={connections}
      config={{
        initialRotation: {
          x: 0.35,
          y: -2.8,
        },
        showAtmosphere: false,
        atmosphereColor: "#87ceeb",
        atmosphereIntensity: 0.5,
        atmosphereBlur: 4,
        enableZoom: false,
        autoRotateSpeed: 0.01,
        maxDistance: 5,
        minDistance: 6
      }}
      onMarkerClick={(m) => console.log("Clicked:", m.label)}
      onMarkerHover={(m) => { if (m) console.log("Hovering:", m.label); }}
    />
  );
}