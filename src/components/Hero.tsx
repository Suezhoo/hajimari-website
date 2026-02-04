import gsap from "gsap";
import { useLayoutEffect } from "react";

const Hero = () => {
  useLayoutEffect(() => {
    const heroEl = document.querySelector("#hero");

    if (!heroEl) {
      console.warn("ScrollTrigger: #hero not found");
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".anim-scale-text",
        {
          scale: 1,
        },
        {
          scale: 0.8,
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom 10%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".anim-scale-img",
        {
          scale: 1,
        },
        {
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom 10%",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* FIXED HERO SCENE */}
      <div className="fixed w-screen h-screen">
        <img
          src="/assets/transition-energy-state.png"
          alt=""
          aria-hidden
          className="anim-scale-img absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        {/* dark overlay behind text */}
        <div className="absolute inset-0 bg-black/50" />
        {/* IMPORTANT: this container must be above the overlay */}
        <div className="page-container-grid relative h-full">
          <div className="col-start-2 col-end-7 h-full flex flex-col justify-end">
            {/* Single wrapper with animation class for all text */}
            <div className="anim-scale-text origin-left">
              <div className="flex flex-col gap-[80px] text-white mt-gutter-y">
                <p className="body-text-regular">
                  A wave-based roguelite shooter
                </p>
                <h1 className="hero-title pb-[20px]">Project Hajimari</h1>
                <div className="flex flex-col gap-[5px]">
                  <p className="body-text-regular">
                    Set in a world shaped by energy
                  </p>
                  <p className="body-text-regular">
                    As your energy grows, so do you
                  </p>
                </div>
                <div className="h-1/4" />
              </div>
            </div>
          </div>
          <div
            data-orb-anchor="hero"
            className="marker absolute right-[25%] top-[47%] h-3 w-3 rounded-full"
          />
        </div>
      </div>
      {/* HERO SPACER */}
      <section id="hero" className="anim-hero-exit relative h-screen" />
    </>
  );
};
export default Hero;
