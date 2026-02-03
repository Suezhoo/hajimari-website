import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const NavigationBar = () => {
  useLayoutEffect(() => {
    const heroEl = document.querySelector("#hero");

    if (!heroEl) {
      console.warn("ScrollTrigger: #hero not found");
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroEl,
        start: "top bottom",
        end: "bottom 10%",
        onLeave: () => {
          document.querySelector(".anim-nav")?.classList.add("nav-scrolled");
        },
        onEnterBack: () => {
          document.querySelector(".anim-nav")?.classList.remove("nav-scrolled");
        },
      });

      ScrollTrigger.refresh(); // important when layout includes fixed layers
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed w-full z-50">
      <div className="anim-nav flex justify-between items-center my-gutter-y mx-gutter-x text-ink p-2 duration-300">
        <div className="nav-bold">
          <p>PROJECT</p>
          <p>HAJIMARI</p>
        </div>

        <div className="flex nav-medium nav-items-gap">
          <p>ABOUT</p>
          <p>DEVLOG</p>
          <p>ROADMAP</p>
          <p>PATCH NOTES</p>
          <p>TECH</p>
        </div>
        <div className="nav-medium text-right">
          <p>PRE-ALPHA</p>
          <p>V0.0.1</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
