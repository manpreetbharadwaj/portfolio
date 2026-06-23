import { useState, useRef, useEffect, useLayoutEffect, useMemo } from "react";
import { Heart, MapPin } from "lucide-react";

// ✏️ Customize your ask here — that's all you need to change
const QUESTION = "Will you go on a date with me?";
const EYEBROW = "Just one question";
const INITIAL_HINT = "No pressure, but I really hope it's a yes.";
const CONFIRM_TITLE = "It's a date!";
const CONFIRM_MESSAGE = "I'll pick the place — you bring the playlist.";

const DODGE_MESSAGES = [
  "Oops, almost!",
  "So close 😏",
  "Not today!",
  "I'm faster than I look",
  "This is good cardio, honestly",
  "Yes is the only button that works, fyi",
  "I'll just wait here then",
  "Okay but actually, just say yes",
  "I'm staying right here... kidding",
  "Seriously. Yes. That's the button.",
];

const CONFETTI_COLORS = ["#E8728B", "#E8C170", "#F8D9DE"];

export default function RomanticAsk() {
  const [yesPressed, setYesPressed] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [roaming, setRoaming] = useState(false);
  const [noPos, setNoPos] = useState({ left: 0, top: 0 });

  const noBtnRef = useRef<HTMLButtonElement>(null);
  const noSizeRef = useRef({ width: 120, height: 48 });
  const lastDodgeRef = useRef(0);

  useLayoutEffect(() => {
    if (noBtnRef.current && !roaming) {
      const rect = noBtnRef.current.getBoundingClientRect();
      noSizeRef.current = { width: rect.width, height: rect.height };
    }
  }, [roaming]);

  function dodge() {
    const now = Date.now();
    if (now - lastDodgeRef.current < 120) return; // debounce rapid re-triggers
    lastDodgeRef.current = now;

    const { width: bw, height: bh } = noSizeRef.current;
    const margin = 20;
    const maxLeft = Math.max(margin, window.innerWidth - bw - margin);
    const maxTop = Math.max(margin, window.innerHeight - bh - margin - 40);

    const left = margin + Math.random() * (maxLeft - margin);
    const top = margin + Math.random() * (maxTop - margin);

    setNoPos({ left, top });
    setRoaming(true);
    setDodgeCount((c) => c + 1);
  }

  useEffect(() => {
    if (yesPressed) return;
    function handlePointerMove(e:any) {
      const btn = noBtnRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (dist < 110) dodge();
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [yesPressed]);

  useEffect(() => {
    function handleResize() {
      if (!roaming) return;
      setNoPos((p) => ({
        left: Math.min(p.left, Math.max(20, window.innerWidth - noSizeRef.current.width - 20)),
        top: Math.min(p.top, Math.max(20, window.innerHeight - noSizeRef.current.height - 20)),
      }));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [roaming]);

  const confetti = useMemo(() => {
    if (!yesPressed) return [];
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.4,
      duration: 3 + Math.random() * 2.5,
      size: 12 + Math.random() * 14,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      rotate: Math.random() * 360,
    }));
  }, [yesPressed]);

  const yesScale = Math.min(1 + dodgeCount * 0.06, 1.55);
  const noScale = Math.max(1 - dodgeCount * 0.045, 0.55);
  const hint =
    dodgeCount === 0
      ? INITIAL_HINT
      : DODGE_MESSAGES[Math.min(dodgeCount - 1, DODGE_MESSAGES.length - 1)];

  return (
    <div className="rd-root">
      <style>{`
        .rd-root {
          --bg-deep: #2B1B2E;
          --bg-deep-2: #46243A;
          --coral: #E8728B;
          --coral-deep: #D85777;
          --gold: #E8C170;
          --cream: #FBF1EA;
          --blush: #F8D9DE;
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(120% 120% at 20% 10%, var(--bg-deep-2) 0%, var(--bg-deep) 60%);
          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--cream);
          box-sizing: border-box;
        }
        .rd-root *{ box-sizing: border-box; }

        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');

        .rd-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.35;
          pointer-events: none;
        }
        .rd-blob-a { width: 320px; height: 320px; background: var(--coral); top: -60px; left: -60px; animation: rd-float 18s ease-in-out infinite alternate; }
        .rd-blob-b { width: 260px; height: 260px; background: var(--gold); bottom: -40px; right: -40px; animation: rd-float 22s ease-in-out infinite alternate-reverse; }
        .rd-blob-c { width: 200px; height: 200px; background: var(--blush); top: 40%; right: 10%; animation: rd-float 15s ease-in-out infinite alternate; }
        @keyframes rd-float {
          0% { transform: translate(0,0); }
          50% { transform: translate(24px,-28px); }
          100% { transform: translate(-18px,18px); }
        }

        .rd-stage {
          position: relative;
          z-index: 2;
          max-width: 600px;
          padding: 2rem 1.5rem;
          text-align: center;
        }
        .rd-eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--blush);
          opacity: 0.75;
          margin: 0 0 0.9rem;
        }
        .rd-headline {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 600;
          font-size: clamp(2rem, 6vw, 3.4rem);
          line-height: 1.15;
          margin: 0 0 1.1rem;
        }
        .rd-hint {
          font-size: 1rem;
          color: var(--blush);
          opacity: 0.9;
          min-height: 1.4em;
          margin: 0 0 2.4rem;
        }
        .rd-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .rd-yes {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--coral), var(--coral-deep));
          color: var(--cream);
          font-family: inherit;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 999px;
          padding: 0.9rem 1.8rem;
          cursor: pointer;
          box-shadow: 0 12px 30px -8px rgba(232,114,139,0.55);
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), filter 0.2s ease;
        }
        .rd-yes:hover { filter: brightness(1.08); }
        .rd-yes:active { filter: brightness(0.94); }
        .rd-yes:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--gold), 0 12px 30px -8px rgba(232,114,139,0.55); }

        .rd-no {
          background: transparent;
          color: var(--blush);
          font-family: inherit;
          font-weight: 600;
          font-size: 1rem;
          border: 1.5px solid rgba(248,217,222,0.45);
          border-radius: 999px;
          padding: 0.85rem 1.6rem;
          cursor: pointer;
          transition: transform 0.22s ease;
        }
        .rd-no:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--gold); }
        .rd-no-roaming {
          position: fixed !important;
          margin: 0;
          z-index: 60;
          transition: left 0.32s cubic-bezier(.34,1.56,.64,1), top 0.32s cubic-bezier(.34,1.56,.64,1), transform 0.22s ease;
        }
        .rd-spacer { display: inline-block; }

        .rd-confirm {
          position: relative;
          z-index: 2;
          max-width: 560px;
          padding: 2rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: rd-fadeUp 0.6s ease both;
        }
        .rd-confirm-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.14);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold);
          margin-bottom: 1.1rem;
        }
        .rd-confirm-title {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 600;
          font-size: clamp(2.2rem, 7vw, 3.8rem);
          margin: 0 0 0.75rem;
        }
        .rd-confirm-message {
          font-size: 1.1rem;
          color: var(--blush);
          opacity: 0.95;
          margin: 0;
        }
        @keyframes rd-fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .rd-confetti-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .rd-confetti-piece {
          position: absolute;
          top: -10%;
          animation: rd-fall linear infinite;
        }
        @keyframes rd-fall {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 0.95; }
          100% { top: 110%; opacity: 0.2; }
        }

        @media (prefers-reduced-motion: reduce) {
          .rd-blob, .rd-confetti-piece, .rd-confirm { animation: none !important; }
          .rd-yes, .rd-no, .rd-no-roaming { transition: none !important; }
        }

        @media (max-width: 420px) {
          .rd-stage, .rd-confirm { padding: 1.5rem 1rem; }
        }
      `}</style>

      <div className="rd-blob rd-blob-a" />
      <div className="rd-blob rd-blob-b" />
      <div className="rd-blob rd-blob-c" />

      {!yesPressed ? (
        <main className="rd-stage">
          <p className="rd-eyebrow">{EYEBROW}</p>
          <h1 className="rd-headline">{QUESTION}</h1>
          <p className="rd-hint" aria-live="polite">{hint}</p>

          <div className="rd-actions">
            <button
              type="button"
              className="rd-yes"
              style={{ transform: `scale(${yesScale})` }}
              onClick={() => setYesPressed(true)}
            >
              Yes, let's go <Heart size={18} strokeWidth={2.5} fill="currentColor" />
            </button>

            {roaming && (
              <span
                className="rd-spacer"
                style={{ width: noSizeRef.current.width, height: noSizeRef.current.height }}
              />
            )}

            <button
              type="button"
              ref={noBtnRef}
              className={`rd-no ${roaming ? "rd-no-roaming" : ""}`}
              style={
                roaming
                  ? { left: noPos.left, top: noPos.top, transform: `scale(${noScale})` }
                  : { transform: `scale(${noScale})` }
              }
              onPointerDown={(e) => { e.preventDefault(); dodge(); }}
              onPointerEnter={dodge}
              onFocus={dodge}
              onClick={(e) => e.preventDefault()}
            >
              No
            </button>
          </div>
        </main>
      ) : (
        <main className="rd-confirm">
          <div className="rd-confetti-layer" aria-hidden="true">
            {confetti.map((c) => (
              <Heart
                key={c.id}
                className="rd-confetti-piece"
                size={c.size}
                color={c.color}
                fill={c.color}
                style={{
                  left: `${c.left}%`,
                  animationDelay: `${c.delay}s`,
                  animationDuration: `${c.duration}s`,
                  transform: `rotate(${c.rotate}deg)`,
                }}
              />
            ))}
          </div>
          <div className="rd-confirm-icon">
            <MapPin size={28} />
          </div>
          <h1 className="rd-confirm-title">{CONFIRM_TITLE}</h1>
          <p className="rd-confirm-message">{CONFIRM_MESSAGE}</p>
        </main>
      )}
    </div>
  );
}
