import React from "react";

const GameDescription = () => {
  return (
    <section
      id="game-description"
      className="grid-container--fullscreen relative rounded-t-8xl bg-surface text-ink content-center"
    >
      {/* Left div - columns 1-5 */}
      <div className="col-start-1 col-span-5 flex flex-col gap-5 text-left">
        <div className="flex flex-col w-fit gap-2.5">
          <h2 className="title whitespace-nowrap uppercase">Game Concept</h2>
          <div className="h-0.5 w-[125%] bg-accent" />
        </div>
        <p>
          Project Hajimari is a{" "}
          <span className="font-bold">wave-based roguelite shooter</span>{" "}
          focused on constant movement, scaling power, and repeatable runs where
          the player grows stronger over time.
          <br /> <br />
          The overall goal is to create a game where simple mechanics gradually
          evolve into complex decision-making as enemy pressure increases,
          pushing the player to adapt, optimize builds, and survive increasingly
          intense encounters.
        </p>
      </div>

      {/* Right div - columns 8-12 */}
      <div className="col-start-8 col-span-5 flex flex-col gap-5 text-right">
        <div className="flex flex-col w-fit gap-2.5 items-end self-end">
          <h2 className="title whitespace-nowrap uppercase">
            World and setting
          </h2>
          <div className="h-0.5 w-[125%] bg-accent" />
        </div>
        <p>
          The world of <span className="font-bold">Hajimari</span> is a human
          world inspired by traditional Asian fantasy, where everyday life
          exists alongside unseen supernatural forces. While most people live
          normal lives, the world is quietly shaped by the flow of spiritual
          energy present in all living beings.
          <br /> <br />
          Most humans are unaware of this energy, its influence on their lives,
          or the consequences of its loss.
        </p>
      </div>
    </section>
  );
};

export default GameDescription;
