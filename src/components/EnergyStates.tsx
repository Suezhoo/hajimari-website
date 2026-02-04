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
      {/* Header spanning columns 2-11 */}
      <div className="col-start-2 col-end-12 flex flex-col">
        <p className="text-sm uppercase tracking-wide">Energy States</p>
        {/* Three energy state titles - each takes ~3 columns */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2
              className={`title cursor-pointer transition-all ${
                activeState === "flowing"
                  ? "font-bold"
                  : "font-normal opacity-50"
              }`}
              onClick={() => setActiveState("flowing")}
            >
              Flowing
            </h2>
            <div
              className={`h-[2px] bg-white transition-all duration-300 ${
                activeState === "flowing"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2
              className={`title cursor-pointer transition-all ${
                activeState === "transition"
                  ? "font-bold"
                  : "font-normal opacity-50"
              }`}
              onClick={() => setActiveState("transition")}
            >
              Transition
            </h2>
            <div
              className={`h-[2px] bg-white transition-all duration-300 ${
                activeState === "transition"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2
              className={`title cursor-pointer transition-all ${
                activeState === "corrupted"
                  ? "font-bold"
                  : "font-normal opacity-50"
              }`}
              onClick={() => setActiveState("corrupted")}
            >
              Corrupted
            </h2>
            <div
              className={`h-[2px] bg-white transition-all duration-300 ${
                activeState === "corrupted"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Image on the left - columns 2-8 */}
      <div className="col-start-2 col-end-9 row-start-3">
        <img
          src={stateContent[activeState].image}
          alt={`${activeState} energy state visualization`}
          className="w-full h-[65vh] object-cover transition-opacity duration-300"
        />
      </div>

      {/* Text content on the right - columns 9-11 */}
      <div className="col-start-9 col-span-3 row-start-3 flex flex-col justify-center gap-5">
        {stateContent[activeState].paragraphs.map(
          (text: string, index: number) => (
            <p key={index} className="body-text-regular">
              {text}
            </p>
          ),
        )}
      </div>
    </section>
  );
};

export default EnergyStates;
