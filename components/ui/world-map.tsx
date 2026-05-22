"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string, icon: string };
  }>;
  lineColor?: string;
}

// Full SVG canvas size that dotted-map generates
const MAP_W = 1000;
const MAP_H = 495;

// Crop to South Asia + Gulf — adjust to taste
const CROP = { x: 550, y: 100, w: 380, h: 250 };

export function WorldMap({ dots = [], lineColor = "#2089CA" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: "transparent",
  });

  // Standard equirectangular — works correctly with the SVG image dimensions
  const projectPoint = (lat: number, lng: number) => ({
    x: (lng + 180) * (MAP_W / 360),
    y: (90 - lat) * (MAP_H / 180),
  });

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 40;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="bg-white rounded-lg relative font-sans w-full">
      <svg
        ref={svgRef}
        viewBox={`${CROP.x} ${CROP.y} ${CROP.w} ${CROP.h}`}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Map image — always full size, viewBox does the cropping */}
        <image
          href={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          x="0"
          y="0"
          width={MAP_W}
          height={MAP_H}
        />

        {/* Animated arc paths */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        {/* Pulsing dots + logo */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-group-${i}`}>
              <g>
                <circle cx={start.x} cy={start.y} r="3" fill={lineColor} opacity="0.4">
                  <animate attributeName="r" from="3" to="10" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle cx={start.x} cy={start.y} r="3" fill={lineColor} />
                <image href="/nice-logo.png" x={start.x - 8} y={start.y - 8} width="16" height="16" />
              </g>
              <g>
                {/* <circle cx={end.x} cy={end.y} r="3" fill={lineColor} opacity="0.4">
                  <animate attributeName="r" from="3" to="10" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle cx={end.x} cy={end.y} r="3" fill={lineColor} /> */}
                <image className="rounded-md" href={dot.end.icon} x={end.x - 8} y={end.y - 8} width="12" height="12" />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}