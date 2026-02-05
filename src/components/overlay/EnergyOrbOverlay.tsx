"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

type Point = { x: number; y: number };

export default function EnergyOrbOverlay() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const homeContainer =
      (document.querySelector("#home") as HTMLElement) || null;
    const markers = Array.from(
      document.querySelectorAll(".marker"),
    ) as HTMLElement[];
    const corruptedDiv =
      (document.querySelector("#corrupted") as HTMLElement) || null;

    const homeContainerR = homeContainer?.getBoundingClientRect();

    if (!homeContainerR || !corruptedDiv) return;

    const anchorPoints: Point[] = markers.map((m: Element) => {
      const r = m.getBoundingClientRect();

      return {
        x: r.x - homeContainerR.x,
        y: r.y - homeContainerR.y,
      };
    });

    // Set initial starting point
    gsap.set("#orb", {
      x: anchorPoints[0].x,
      y: anchorPoints[0].y,
    });

    const ctx = gsap.context(() => {
      // Activate scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: homeContainer,
          start: "clamp(top center)",
          endTrigger: corruptedDiv,
          end: "clamp(top center)",
          scrub: 1,
        },
      });

      // Animate on timeline through points controlled by scroll trigger
      tl.to("#orb", {
        duration: 5,
        ease: "none",
        motionPath: {
          path: anchorPoints,
          curviness: 1.5,
        },
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 pointer-events-none z-30">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <g id="orb">
          <circle cx="0" cy="0" r="30" fill="white" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
