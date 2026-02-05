export function VignetteOverlay() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background: `
          linear-gradient(to right, rgba(0,0,0,0.35), transparent 10%, transparent 90%, rgba(0,0,0,0.35)),
          linear-gradient(to bottom, rgba(0,0,0,0.25), transparent 0%, transparent 90%, rgba(0,0,0,0.25))
        `,
      }}
    />
  );
}
