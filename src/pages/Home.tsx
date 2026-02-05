import { VignetteOverlay } from "../components/overlay/VignetteOverlay";
import Hero from "../components/Hero";
import GameDescription from "../components/GameDescription";
import EnergyStates from "../components/EnergyStates";
import GrainOverlay from "../components/overlay/GrainOverlay";

const Home = () => {
  return (
    <main id="home" className="relative">
      {/* overlays */}
      <GrainOverlay />
      <VignetteOverlay />

      <Hero />
      <GameDescription />
      <EnergyStates />
    </main>
  );
};

export default Home;
