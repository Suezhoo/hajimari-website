import { useState } from "react";

type EnergyState = "flowing" | "transition" | "corrupted";

interface StateContent {
  image: string;
  paragraphs: string[];
}

const EnergyStates = () => {
  const [activeState, setActiveState] = useState<EnergyState>("flowing");

  const stateContent: Record<EnergyState, StateContent> = {
    flowing: {
      image: "/assets/flowing-energy-state.png",
      paragraphs: [
        "In Hajimari's world, spiritual energy flows naturally through all living beings.",
        "Most humans live unaware of it, relying on this energy to sustain life without ever learning to control it.",
        "As long as this flow remains uninterrupted, the world exists in a fragile but stable balance.",
      ],
    },
    transition: {
      image: "/assets/transition-energy-state.png",
      paragraphs: [
        "When spiritual energy is left unmanaged, it does not disappear, it accumulates.",
        "In places where this energy stagnates, it becomes distorted.",
        "Giving rise to corrupted zones and demonic entities.",
        "These zones grow more dangerous over time, threatening those unable to defend themselves.",
      ],
    },
    corrupted: {
      image: "/assets/corrupted-energy-state.png",
      paragraphs: [
        "The awakened are rare individuals capable of perceiving and reclaiming corrupted energy.",
        "By destroying demons and their cores, they absorb this energy to grow stronger.",
        "Pushing back corruption and protecting humanity.",
        "But balance is never permanent, survival depends on constant adaptation and restraint.",
      ],
    },
  };

  return (
    <section
      id="energy-states"
      className="grid-container--fullscreen relative bg-surface text-white content-center gap-5"
    >
      {/* Header: full width on mobile, centered grid area on desktop */}
      <div className="col-span-12 lg:col-start-2 lg:col-end-12 flex flex-col">
        <p className="text-sm uppercase tracking-wide">Energy States</p>

        {/* Tabs: stack on mobile, row on desktop */}
        <div className="mt-3 flex justify-between gap-3 sm:flex-row sm:justify-between sm:gap-6">
          {(
            [
              ["flowing", "Flowing"],
              ["transition", "Transition"],
              ["corrupted", "Corrupted"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveState(key)}
              className="group w-fit text-left"
            >
              <h2
                className={`title cursor-pointer transition-all ${
                  activeState === key ? "font-bold" : "font-normal opacity-50"
                }`}
              >
                {label}
              </h2>
              <div
                className={`h-0.5 bg-accent transition-all duration-300 ${
                  activeState === key ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content: stack (image then text) on mobile, side-by-side on desktop */}
      <div className="col-span-12 lg:col-start-2 lg:col-end-9 lg:row-start-3">
        <img
          src={stateContent[activeState].image}
          alt={`${activeState} energy state visualization`}
          className="h-[38vh] w-full object-cover transition-opacity duration-300 sm:h-[50vh] lg:h-[65vh]"
        />
      </div>

      <div className="col-span-12 mt-8 lg:mt-0 lg:col-start-9 lg:col-span-3 lg:row-start-3 flex flex-col justify-center gap-5">
        {stateContent[activeState].paragraphs.map((text, index) => (
          <p key={index} className="body-text-regular">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default EnergyStates;
