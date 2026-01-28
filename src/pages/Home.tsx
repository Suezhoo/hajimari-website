import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="page-container-grid">
        <div className="col-start-2 col-end-7 flex flex-col-reverse gap-[80px]">
          <p className="body-text-regular order-4">
            A wave-based roguelite shooter
          </p>
          <h1 className="hero-title order-3 pb-[20px]">Project Hajimari</h1>
          <div className="flex flex-col gap-[5] order-2">
            <p className="body-text-regular">Set in a world shaped by energy</p>
            <p className="body-text-regular">As your energy grows, so do you</p>
          </div>
          <div className="h-1/4 order-1"></div>
        </div>
      </div>

      {/* Flow energy section */}
      <div className="page-container-grid">
        <div className="col-start-5 col-end-13 text-right flex flex-col justify-center gap-[128px]">
          <p className="anchor">
            In Hajimari's world, spiritual energy flows naturally through all
            living beings.
          </p>
          <p className="body-text-regular">
            Most humans live unaware ofit, relying on this energy to sustain
            life without ever learning to control it.
          </p>
          <p className="body-text-regular">
            As long as this flow remains uninterrupted, the world exists in a
            fragile but stable balance.
          </p>
        </div>
      </div>

      {/* Transition energy section */}
      <div className="page-container-grid">
        {/* Right / top block */}
        <div className="col-start-6 col-end-12 row-start-3 row-end-7 text-right">
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
        <div className="col-start-2 col-end-8 row-start-8 row-end-12">
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
      </div>

      {/* Corrupted energy section */}
      <div className="page-container flex flex-col justify-end gap-[64px]">
        <div className="flex justify-between gap-[256px]">
          <p className="anchor">
            The awakend are rare individuals capable of perceiving and
            reclaiming corrupted energy.
          </p>
          <p className="body-text-regular">
            By destroying demons and their cores, they absorb this energy to
            grow stronger.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="body-text-regular">
            Pushing back corruption and protecting humanity.
          </p>
          <p className="body-text-regular">
            But balance is never permant, survival depends on constant
            adaptation and restraint.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
