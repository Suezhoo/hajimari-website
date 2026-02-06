import gsap from "gsap";
import { useEffect, useRef } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function MouseTrailGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    // -------------------------
    // Config
    // -------------------------
    const BASE_ROTATION = -35; // degrees (slight tilt like a real cursor)
    const FOLLOW = 0.2; // cursor smoothing
    const SPAWN_DIST = 12;

    // -------------------------
    // Mouse state
    // -------------------------
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let prevMouseX = mouseX;
    let prevMouseY = mouseY;

    let lastTrailX = mouseX;
    let lastTrailY = mouseY;

    // Quick setters (fast + clean)
    const setCursorX = gsap.quickSetter(cursor, "x", "px");
    const setCursorY = gsap.quickSetter(cursor, "y", "px");
    const setCursorRot = gsap.quickSetter(cursor, "rotation", "deg");

    // Initial cursor placement (never starts at 0,0)
    gsap.set(cursor, { x: currentX, y: currentY, rotation: BASE_ROTATION });

    const spawnTrail = (x: number, y: number) => {
      const trail = document.createElement("div");

      const size = 5 + Math.random() * 6;
      const isCorrupted = Math.random() < 0.15;

      const color = isCorrupted
        ? { h: 15 + Math.random() * 25, s: 95, l: 60 }
        : { h: 175 + Math.random() * 25, s: 85, l: 65 };

      trail.style.position = "fixed";
      trail.style.left = "30px";
      trail.style.top = "25px";
      trail.style.width = `${size}px`;
      trail.style.height = `${size}px`;
      trail.style.borderRadius = "50%";
      trail.style.pointerEvents = "none";
      trail.style.zIndex = "9999";

      trail.style.background = isCorrupted
        ? `radial-gradient(circle,
            hsla(${color.h}, ${color.s}%, ${color.l}%, 0.9),
            hsla(${color.h}, ${color.s}%, ${color.l - 15}%, 0.5),
            transparent
          )`
        : `radial-gradient(circle,
            hsla(${color.h}, ${color.s}%, ${color.l}%, 0.7),
            hsla(${color.h}, ${color.s}%, ${color.l - 10}%, 0.3),
            transparent
          )`;

      trail.style.boxShadow = isCorrupted
        ? `0 0 ${size * 2}px hsla(${color.h}, ${color.s}%, ${color.l}%, 0.7),
           0 0 ${size * 3}px hsla(${color.h}, ${color.s}%, ${color.l}%, 0.4)`
        : `0 0 ${size * 1.5}px hsla(${color.h}, ${color.s}%, ${color.l}%, 0.5)`;

      container.appendChild(trail);

      const offsetX = (Math.random() - 0.5) * (isCorrupted ? 8 : 15);
      const offsetY = (Math.random() - 0.5) * (isCorrupted ? 8 : 15);

      gsap.set(trail, {
        x: x + offsetX,
        y: y + offsetY,
        xPercent: -50,
        yPercent: -50,
        scale: 0.4,
        opacity: 1,
      });

      gsap.to(trail, {
        duration: isCorrupted ? 0.2 : 0.12,
        scale: isCorrupted ? 1.3 : 1,
        ease: isCorrupted ? "power2.out" : "sine.out",
      });

      gsap.to(trail, {
        duration: isCorrupted ? 1.8 : 1.0,
        opacity: 0,
        scale: isCorrupted ? 0.8 : 0.2,
        y: `+=${isCorrupted ? -5 : -18}`,
        x: `+=${(Math.random() - 0.5) * (isCorrupted ? 10 : 20)}`,
        ease: isCorrupted ? "power1.out" : "sine.out",
        delay: 0.1,
        onComplete: () => trail.remove(),
      });
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const d = Math.hypot(mouseX - lastTrailX, mouseY - lastTrailY);
      if (d < SPAWN_DIST) return;

      lastTrailX = mouseX;
      lastTrailY = mouseY;

      spawnTrail(mouseX, mouseY);
    };

    const tickerFn = () => {
      // Smooth follow
      currentX += (mouseX - currentX) * FOLLOW;
      currentY += (mouseY - currentY) * FOLLOW;

      // Velocity-based sway
      const vx = mouseX - prevMouseX;
      const vy = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      const swing = clamp(vx * 0.6 + vy * 0.1, -28, 28);

      // Apply (base tilt + swing)
      setCursorX(currentX);
      setCursorY(currentY);
      setCursorRot(BASE_ROTATION + swing);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    gsap.ticker.add(tickerFn);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tickerFn);
      // cleanup any remaining trail nodes (optional but nice)
      container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
      `}</style>

      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9999, mixBlendMode: "screen" }}
      />

      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none"
        style={{
          width: 34,
          height: 58,
          zIndex: 10000,
          // aligns mouse to tip; GSAP handles x/y/rotation
          transform: "translate(-50%, -6%)",
          transformOrigin: "50% 6%",
          willChange: "transform",
        }}
      >
        <img
          src="/cursor-ofuda-smaller.svg"
          alt=""
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            userSelect: "none",
          }}
        />
      </div>
    </>
  );
}
