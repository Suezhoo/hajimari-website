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
        scrub: true,
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed w-full z-50">
      <div className="nav-grid my-gutter-y text-ink">
        <div className="col-span-full flex justify-between -mx-2 px-2 py-3 anim-nav duration-300">
          <div className="nav-bold">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
