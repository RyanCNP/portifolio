export function LightSweep() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Light Sweep - linha diagonal */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(
            135deg,
            transparent 0%,
            transparent 25%,
            rgba(59, 130, 246, 0.08) 35%,
            rgba(139, 92, 246, 0.12) 50%,
            rgba(59, 130, 246, 0.08) 65%,
            transparent 75%,
            transparent 100%
          )`,
                    backgroundSize: '300% 300%',
                    animation: 'lightSweep 21s infinite linear, lightFade 21s infinite ease-in-out',
                }}
            />

            <style>{`
        @keyframes lightSweep {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes lightFade {
          0% {
            opacity: 0;
          }
          33% {
            opacity: 1;
          }
          67% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
        </div>
    )
}
