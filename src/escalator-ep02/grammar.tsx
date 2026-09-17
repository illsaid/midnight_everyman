import {AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';

/**
 * Motion grammar v2 — shared vocabulary.
 * Spec: docs/02-creative/motion-grammar-v2.md. Approved 2026-09-17.
 *
 * A move lands inside 6-12 frames and then stops dead. Between moves the frame is
 * still. Cues are cut into 3-4 framings. Parts are drawn as objects, not symbols.
 */

export const palette = {
  paper: '#EEE5CF',
  paperLight: '#F7F0DE',
  cutaway: '#C9C1AC',
  panel: '#F5EBD6',
  reference: '#C9C1AC',
  ink: '#242622',
  inkMid: '#4A4A42',
  inkMute: '#7C7566',
  coral: '#BD4E3D',
  mustard: '#D5A84C',
  teal: '#356F70',
  olive: '#78975D',
} as const;

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const OUT = Easing.bezier(0.2, 0.9, 0.25, 1);

/** The only easing helper. Overshoots 5% at 68% of its length, then settles. */
export const land = (frame: number, at: number, from: number, to: number, len = 7) =>
  interpolate(
    frame,
    [at, at + len * 0.68, at + len],
    [from, to + (to - from) * 0.05, to],
    {...clamp, easing: OUT},
  );

/** Linear, no overshoot. For things that must not bounce — a circuit, a measurement. */
export const move = (frame: number, at: number, from: number, to: number, len = 7) =>
  interpolate(frame, [at, at + len], [from, to], {...clamp, easing: OUT});

/**
 * Camera. Puts native-drawing point (px, py) at frame centre at scale s.
 * Every shot is framed with this — guessing at translate/scale leaves dead space,
 * which is the same defect as not moving at all.
 */
export const look = (px: number, py: number, s: number) =>
  `translate(${960 - px * s} ${540 - py * s}) scale(${s})`;

export const paperTexture: React.CSSProperties = {
  backgroundColor: palette.paper,
  backgroundImage:
    'radial-gradient(circle at 25% 20%, rgba(36,38,34,0.035) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(36,38,34,0.025) 0 1px, transparent 1.4px)',
  backgroundSize: '17px 17px, 23px 23px',
};

export const Stage: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{...paperTexture, color: palette.ink, overflow: 'hidden'}}>
    {children}
  </AbsoluteFill>
);

/** Hard cut to a new framing inside a cue. */
export const Shot: React.FC<{from: number; to: number; children: React.ReactNode}> = ({
  from,
  to,
  children,
}) => (
  <Sequence from={from} durationInFrames={to - from} layout="none">
    {children}
  </Sequence>
);

/** Push that lands in `len` frames and then holds dead still. */
export const PushIn: React.FC<{
  children: React.ReactNode;
  from: number;
  to: number;
  origin: string;
  len?: number;
}> = ({children, from, to, origin, len = 10}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        transformOrigin: origin,
        scale: `${interpolate(frame, [0, len], [from, to], {
          ...clamp,
          easing: OUT,
          output: 'perceptual-scale',
        })}`,
      }}
    >
      {children}
    </div>
  );
};

/** Tapered shaft, solid head, snaps on from the tail. */
export const Arrow: React.FC<{
  x: number;
  y: number;
  angle: number;
  length: number;
  at: number;
  colour?: string;
}> = ({x, y, angle, length, at, colour = palette.coral}) => {
  const frame = useCurrentFrame();
  const grow = land(frame, at, 0, 1, 7);
  if (grow <= 0) return null;
  const L = length * grow;
  return (
    <svg
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: length + 60,
        height: 120,
        overflow: 'visible',
        rotate: `${angle}deg`,
        transformOrigin: '0px 60px',
      }}
    >
      <path d={`M0 54 L${Math.max(L - 44, 0)} 50 L${Math.max(L - 44, 0)} 70 L0 66 Z`} fill={colour} />
      <path d={`M${L - 46} 32 L${L} 60 L${L - 46} 88 Z`} fill={colour} />
    </svg>
  );
};

/** Type that lands, with a rule that draws after it. */
export const Slam: React.FC<{
  at: number;
  left: number;
  top: number;
  eyebrow?: string;
  text: string;
  size?: number;
  colour?: string;
  rule?: boolean;
}> = ({at, left, top, eyebrow, text, size = 78, colour = palette.ink, rule = true}) => {
  const frame = useCurrentFrame();
  const inn = land(frame, at, 0, 1, 6);
  if (inn <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        opacity: Math.min(inn * 1.6, 1),
        translate: `${(1 - inn) * -26}px 0px`,
        fontFamily: 'Arial, sans-serif',
        whiteSpace: 'pre-line',
      }}
    >
      {eyebrow ? (
        <div
          style={{
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: 5,
            color: palette.inkMute,
            marginBottom: 9,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div
        style={{fontSize: size, fontWeight: 700, letterSpacing: 1, lineHeight: 1.04, color: colour}}
      >
        {text}
      </div>
      {rule ? (
        <div
          style={{
            height: 8,
            width: land(frame, at + 3, 0, 196, 8),
            backgroundColor: colour,
            marginTop: 14,
          }}
        />
      ) : null}
    </div>
  );
};

/** A small caption that does not need a rule. */
export const Caption: React.FC<{
  at: number;
  left: number;
  top: number;
  text: string;
  colour?: string;
  size?: number;
}> = ({at, left, top, text, colour = palette.inkMute, size = 26}) => {
  const frame = useCurrentFrame();
  const inn = land(frame, at, 0, 1, 5);
  if (inn <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        opacity: Math.min(inn * 1.8, 1),
        translate: `0px ${(1 - inn) * 14}px`,
        fontFamily: 'Arial, sans-serif',
        fontSize: size,
        fontWeight: 700,
        letterSpacing: 3.2,
        color: colour,
        whiteSpace: 'pre-line',
        backgroundColor: palette.paper,
        boxShadow: `0 0 0 14px ${palette.paper}`,
      }}
    >
      {text}
    </div>
  );
};

/** Cast shadow on the sheet. Every part that sits on the paper gets one. */
export const Shadow: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
}> = ({x, y, w, h, r = 6}) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={palette.ink} opacity={0.13} />
);
