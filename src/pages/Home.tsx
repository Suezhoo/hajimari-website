import GrainOverlay from "../components/overlay/GrainOverlay";
import { VignetteOverlay } from "../components/overlay/VignetteOverlay";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main id="home" className="relative">
      {/* overlays */}
      <GrainOverlay />
      <VignetteOverlay />
      {/* <EnergyOrbOverlay /> */}

      <Hero />

      {/* ===== CONTENT WRAPPER that overlaps the fixed hero bg ===== */}
      {/* Give it a background so it "covers" the hero image as it scrolls */}
      <div className="relative bg-surface rounded-t-8xl">
        {/* Flow energy section */}
        <section
          id="flowing"
          className="page-container-grid relative px-gutter-x"
        >
          <div
            data-orb-anchor="flowing"
            className="marker absolute left-[25%] top-[50%] h-3 w-3 rounded-full  bg-red-300"
          />

          <div className="col-start-5 col-end-13 text-right flex flex-col justify-center gap-[128px] relative">
            <p className="anchor">
              In Hajimari&apos;s world, spiritual energy flows naturally through
              all living beings.
            </p>
            <p className="body-text-regular">
              Most humans live unaware of it, relying on this energy to sustain
              life without ever learning to control it.
            </p>
            <p className="body-text-regular">
              As long as this flow remains uninterrupted, the world exists in a
              fragile but stable balance.
            </p>
          </div>
        </section>

        {/* Transition energy section */}
        <section
          id="transition"
          className="page-container-grid relative px-gutter-x"
        >
          <div
            data-orb-anchor="transition"
            className="marker absolute right-[45%] top-[50%] h-3 w-3 rounded-full"
          />

          {/* Right / top block */}
          <div className="col-start-2 col-end-8 row-start-3 row-end-7 text-left relative">
            <div className="flex flex-col gap-[clamp(16px,4vw,64px)]">
              <p className="anchor">When spiritual energy is left unmanaged,</p>
              <p className="body-text-regular">
                It does not disappear, it accumulates.
              </p>
              <p className="body-text-regular">
                In places where this energy stagnates, it becomes distorted.
              </p>
            </div>
          </div>

          {/* Left / bottom block */}
          <div className="col-start-2 col-end-8 row-start-8 row-end-12 relative z-20">
            <div className="flex flex-col gap-[64px]">
              <p className="anchor">
                Giving rise to corrupted zones and demonic entities
              </p>
              <p className="body-text-regular">
                These zones grow more dangerous over time,
              </p>
              <p className="body-text-regular">
                Threatening those unable to defend themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Corrupted energy section */}
        <section
          id="corrupted"
          className="page-container relative flex flex-col justify-end gap-[32px] px-gutter-x"
        >
          <div
            data-orb-anchor="corrupted"
            className="marker absolute left-1/2 top-1/3 h-3 w-3 -translate-x-1/2 rounded-full"
          />

          <div className="flex justify-between gap-[256px] relative z-20">
            <p className="anchor">
              The awakened are rare individuals capable of perceiving and
              reclaiming corrupted energy.
            </p>
            <p className="body-text-regular">
              By destroying demons and their cores, they absorb this energy to
              grow stronger.
            </p>
          </div>

          <div className="flex flex-col items-center relative z-20">
            <p className="body-text-regular">
              Pushing back corruption and protecting humanity.
            </p>
            <p className="body-text-regular">
              But balance is never permanent, survival depends on constant
              adaptation and restraint.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
