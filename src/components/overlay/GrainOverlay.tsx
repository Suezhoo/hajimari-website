export default function GrainOverlay() {
  return (
    <>
      {/* grain */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          backgroundImage: "url(/textures/grain-texture-1.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "512px 512px",
          mixBlendMode: "soft-light",
          opacity: 0.11,
        }}
      />
    </>
  );
}
