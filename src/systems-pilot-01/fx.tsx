import {lightLeak} from "@remotion/effects/light-leak";
import {starburst} from "@remotion/effects/starburst";
import {createContext, useContext, type ReactNode} from "react";
import {AbsoluteFill, interpolate, Solid, useCurrentFrame} from "remotion";
import {palette} from "./manifest";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

const FxModeContext = createContext(false);

export const FxModeProvider: React.FC<{enabled: boolean; children: ReactNode}> = ({enabled, children}) => (
  <FxModeContext.Provider value={enabled}>{children}</FxModeContext.Provider>
);

export const useFxMode = () => useContext(FxModeContext);

export const FxSurface: React.FC<{seed: number}> = ({seed}) => {
  const enabled = useFxMode();
  const frame = useCurrentFrame();
  if (!enabled) return null;

  const driftX = (frame * 0.08 + seed * 3) % 24;
  const driftY = (frame * 0.05 + seed * 5) % 24;

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        zIndex: 88,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage: [
            "radial-gradient(circle, rgba(52,45,32,0.42) 0 0.7px, transparent 0.9px)",
            "radial-gradient(circle, rgba(255,255,255,0.5) 0 0.55px, transparent 0.75px)",
          ].join(","),
          backgroundPosition: `${driftX}px ${driftY}px, ${12 - driftX}px ${8 - driftY}px`,
          backgroundSize: "7px 7px, 11px 11px",
          mixBlendMode: "multiply",
          opacity: 0.12,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(52,45,32,0.05) 78%, rgba(52,45,32,0.15) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(${88 + (seed % 7)}deg, transparent 0 47%, rgba(255,255,255,0.12) 50%, transparent 53% 100%)`,
          backgroundSize: "100% 180px",
          backgroundPositionY: `${(seed * 41) % 180}px`,
          opacity: 0.22,
        }}
      />
    </AbsoluteFill>
  );
};

export const FxTransitionOverlay: React.FC<{seed: number; duration: number}> = ({seed, duration}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, Math.max(1, duration - 1)], [0, 1], clamp);

  return (
    <Solid
      width={1920}
      height={1080}
      effects={[lightLeak({seed, hueShift: seed % 2 === 0 ? 338 : 18, progress})]}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: interpolate(progress, [0, 0.32, 0.7, 1], [0, 0.3, 0.2, 0], clamp),
        mixBlendMode: "screen",
        pointerEvents: "none",
      }}
    />
  );
};

export const FxStarburst: React.FC<{
  progress: number;
  origin?: readonly [number, number];
  opacity?: number;
  zIndex?: number;
}> = ({progress, origin = [0.5, 0.5], opacity = 0.16, zIndex = 0}) => {
  const enabled = useFxMode();
  const frame = useCurrentFrame();
  if (!enabled || progress <= 0) return null;

  return (
    <Solid
      width={1920}
      height={1080}
      effects={[
        starburst({
          rays: 22,
          colors: [palette.mustard, palette.paperLight, palette.coral],
          rotation: frame * 0.35,
          smoothness: 0.16,
          origin,
        }),
      ]}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: opacity * progress,
        scale: interpolate(progress, [0, 1], [1.08, 1.16], {...clamp, output: "perceptual-scale"}),
        pointerEvents: "none",
        zIndex,
      }}
    />
  );
};

export const FxPulseRings: React.FC<{
  x: number;
  y: number;
  progress: number;
  color?: string;
  maxRadius?: number;
  zIndex?: number;
}> = ({x, y, progress, color = palette.coral, maxRadius = 120, zIndex = 18}) => {
  const enabled = useFxMode();
  if (!enabled || progress <= 0 || progress >= 1) return null;

  return (
    <svg
      viewBox="0 0 1920 1080"
      style={{position: "absolute", inset: 0, width: "100%", height: "100%", zIndex, pointerEvents: "none"}}
    >
      {[0, 1, 2].map((index) => {
        const shifted = Math.min(1, Math.max(0, progress * 1.65 - index * 0.24));
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={18 + shifted * maxRadius}
            fill="none"
            stroke={color}
            strokeWidth={Math.max(2, 10 - shifted * 7)}
            opacity={(1 - shifted) * 0.72}
          />
        );
      })}
    </svg>
  );
};
