import { type ReactNode, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import GrainOverlay from "../overlay/GrainOverlay";
import { VignetteOverlay } from "../overlay/VignetteOverlay";
import MouseTrailGSAP from "../MouseTrailGSAP";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis to requestAnimationFrame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen">
      <NavigationBar />
      <GrainOverlay />
      <VignetteOverlay />
      <MouseTrailGSAP />
      {children}
      <div className="relative h-25 bg-surface" />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
