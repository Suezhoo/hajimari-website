const GameDescription = () => {
  return (
    <section
      id="game-description"
      className="grid-container--fullscreen relative rounded-t-8xl bg-surface text-ink content-center"
    >
      {/* Mobile-first: full width, stacked.
          Desktop (lg): your original 2-column layout. */}
      <div className="col-span-12 lg:col-start-1 lg:col-span-5 flex flex-col gap-5 text-left">
        <div className="flex flex-col w-fit gap-2.5">
          <h2 className="title uppercase">Game Concept</h2>
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

      <div className="col-span-12 mt-14 lg:mt-0 lg:col-start-8 lg:col-span-5 flex flex-col gap-5 text-left lg:text-right">
        <div className="flex flex-col w-fit gap-2.5 lg:items-end lg:self-end">
          <h2 className="title uppercase">World and setting</h2>
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
