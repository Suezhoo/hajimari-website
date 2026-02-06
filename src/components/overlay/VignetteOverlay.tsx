export function VignetteOverlay() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background: `
          linear-gradient(to top, rgba(0,0,0,0.12), transparent 10%),
          linear-gradient(to bottom, rgba(0,0,0,0.12), transparent 10%),
          linear-gradient(to left, rgba(0,0,0,0.1), transparent 3%),
          linear-gradient(to right, rgba(0,0,0,0.1), transparent 3%)
        `,
      }}
    />
  );
}
