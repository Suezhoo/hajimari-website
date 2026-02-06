import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // coarse pointer = touch-first devices (most phones/tablets)
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches || navigator.maxTouchPoints > 0);

    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return isTouch;
}

export default function MouseTrailGSAP() {
  const isTouch = useIsTouchDevice();

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouch) return;

    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    const BASE_ROTATION = -35;
    const FOLLOW = 0.2;
    const SPAWN_DIST = 12;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let prevMouseX = mouseX;
    let prevMouseY = mouseY;

    let lastTrailX = mouseX;
    let lastTrailY = mouseY;

    const setCursorX = gsap.quickSetter(cursor, "x", "px");
    const setCursorY = gsap.quickSetter(cursor, "y", "px");
    const setCursorRot = gsap.quickSetter(cursor, "rotation", "deg");

    gsap.set(cursor, { x: currentX, y: currentY, rotation: BASE_ROTATION });

    const spawnTrail = (x: number, y: number) => {
      const trail = document.createElement("div");

      const size = 5 + Math.random() * 6;
      const isCorrupted = Math.random() < 0.15;

      const color = isCorrupted
        ? { h: 15 + Math.random() * 25, s: 95, l: 60 }
        : { h: 175 + Math.random() * 25, s: 85, l: 65 };

      trail.style.position = "fixed";
      trail.style.left = "25px";
      trail.style.top = "35px";
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
      currentX += (mouseX - currentX) * FOLLOW;
      currentY += (mouseY - currentY) * FOLLOW;

      const vx = mouseX - prevMouseX;
      const vy = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      const swing = clamp(vx * 0.6 + vy * 0.1, -28, 28);

      setCursorX(currentX);
      setCursorY(currentY);
      setCursorRot(BASE_ROTATION + swing);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    gsap.ticker.add(tickerFn);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tickerFn);
      container.innerHTML = "";
    };
  }, [isTouch]);

  return (
    <>
      {/* Only hide the native cursor on non-touch */}
      {!isTouch && (
        <style>{`
          * { cursor: none !important; }
        `}</style>
      )}

      {/* Don’t render on touch at all */}
      {!isTouch && (
        <>
          <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 9999, mixBlendMode: "screen" }}
          />

          <div
            ref={cursorRef}
            className="fixed pointer-events-none"
            style={{
              width: 34,
              height: 58,
              zIndex: 10000,
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
      )}
    </>
  );
}
