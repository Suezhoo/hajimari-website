"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import MotionPathHelper from "gsap/MotionPathHelper";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, MotionPathHelper);

export default function EnergyOrbOverlay() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    const baseMotionPath = {
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5],
    };

    tl.to(
      "#orb",
      {
        ease: "none",
        motionPath: { ...baseMotionPath, start: 0.0, end: 0.35 },
      },
      0,
    );

    tl.to(
      "#orb",
      {
        ease: "none",
        motionPath: { ...baseMotionPath, start: 0.35, end: 0.7 },
      },
      0.35,
    );

    tl.to(
      "#orb",
      {
        ease: "none",
        motionPath: { ...baseMotionPath, start: 0.7, end: 1.0 },
      },
      0.7,
    );
  }, []);

  return (
    <div ref={rootRef} className="fixed inset-0 pointer-events-none z-50">
      <svg
        id="motionPath"
        className="w-full h-full"
        viewBox="0 0 984 3310"
        preserveAspectRatio="16:9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path"
          d="M85.131,68.885 C121.728,169.376 338.295,369.96 396.257,239.231 456.149,104.041 548.694,356.78 600.276,421.557 667.817,506.376 707.409,409.005 774.387,580.041 823.216,704.733 765.498,891.077 730.974,879.178 555.4884,818.6416 469.696,1029.288 468.982,1141.659 468.028,1289.919 218.811,1061.184 213.231,1304.46 211.28,1388.738 330.32,1451.349 260.089,1588.099 211.836,1681.909 133.383,1756.452 137.13,1868.673 140.133,1958.438 476.336,1899.065 502.519,1998.738 523.449,2078.4702 696.502,2165.728 703.43,2250.437 713.11555,2369.0233 746.044,2274.218 660.50345,2590.35856 609.93,2777.266 508.68496,2923.28196 512.575,2922.823"
          fill="none"
          stroke="#ff0000"
        />

        <g id="orb">
          <circle cx="50%" cy="50%" r="100" fill="white" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
