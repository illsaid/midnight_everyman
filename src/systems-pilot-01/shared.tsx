import type {ReactNode} from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {palette} from "./manifest";
import {FxSurface} from "./fx";

export const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

export const enter = (frame: number, from = 0, duration = 10) =>
  interpolate(frame, [from, from + duration], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

export const SceneStage: React.FC<{
  title: string;
  number: string;
  children: ReactNode;
}> = ({title, number, children}) => {
  const frame = useCurrentFrame();
  const grainSeed = Math.floor(frame / 2) * 2 + Number(number);

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        backgroundColor: palette.paper,
        color: palette.ink,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <svg
        viewBox="0 0 1920 1080"
        style={{position: "absolute", inset: 0, width: "100%", height: "100%"}}
      >
        <path d="M0 885 C420 825 760 930 1135 870 C1465 817 1710 835 1920 795 V1080 H0Z" fill="#E7DCC3" />
        <circle cx="1705" cy="155" r="250" fill={palette.paperLight} opacity="0.75" />
        <path d="M-50 290 C230 140 500 155 760 285" fill="none" stroke={palette.tealLight} strokeWidth="24" opacity="0.13" />
      </svg>

      <div
        style={{
          position: "absolute",
          left: 62,
          top: 48,
          display: "flex",
          alignItems: "center",
          gap: 16,
          zIndex: 30,
          opacity: enter(frame, 0, 8),
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 26,
            display: "grid",
            placeItems: "center",
            backgroundColor: palette.ink,
            color: palette.paper,
            fontSize: 23,
            fontWeight: 900,
          }}
        >
          {number}
        </div>
        <div style={{fontSize: 24, fontWeight: 900, letterSpacing: 3.2}}>{title}</div>
      </div>

      {children}

      <FxSurface seed={Number(number) * 37} />

      <svg
        viewBox="0 0 1920 1080"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 90,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          opacity: 0.07,
        }}
      >
        <filter id={`systems-grain-${number}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed={grainSeed} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="1920" height="1080" filter={`url(#systems-grain-${number})`} />
      </svg>
      <AbsoluteFill
        style={{
          zIndex: 91,
          pointerEvents: "none",
          boxShadow: "inset 0 0 82px rgba(31,28,20,0.3)",
          opacity: 0.5,
        }}
      />
    </AbsoluteFill>
  );
};

export const Card: React.FC<{
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
}> = ({children, style, color = palette.white}) => (
  <div
    style={{
      backgroundColor: color,
      border: `5px solid ${palette.ink}`,
      borderRadius: 20,
      boxShadow: `10px 12px 0 ${palette.ink}`,
      ...style,
    }}
  >
    {children}
  </div>
);

export const Stamp: React.FC<{
  children: ReactNode;
  color?: string;
  style?: React.CSSProperties;
}> = ({children, color = palette.coral, style}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 24px 10px",
      border: `5px solid ${color}`,
      color,
      fontSize: 31,
      fontWeight: 900,
      letterSpacing: 2.5,
      rotate: "-2deg",
      ...style,
    }}
  >
    {children}
  </div>
);

export const Arrow: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  progress?: number;
  width?: number;
}> = ({x1, y1, x2, y2, color = palette.ink, progress = 1, width = 9}) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const endX = x1 + dx * progress;
  const endY = y1 + dy * progress;
  const angle = Math.atan2(dy, dx);
  const head = 22;

  return (
    <g>
      <line x1={x1} y1={y1} x2={endX} y2={endY} stroke={color} strokeWidth={width} strokeLinecap="round" />
      {progress > 0.94 ? (
        <path
          d={`M ${endX} ${endY} L ${endX - head * Math.cos(angle - 0.55)} ${endY - head * Math.sin(angle - 0.55)} L ${endX - head * Math.cos(angle + 0.55)} ${endY - head * Math.sin(angle + 0.55)} Z`}
          fill={color}
        />
      ) : null}
    </g>
  );
};

export const MiniCar: React.FC<{tankFill?: number; opacity?: number}> = ({tankFill = 0, opacity = 1}) => (
  <svg viewBox="0 0 780 390" style={{width: "100%", height: "100%", opacity}}>
    <path d="M92 254 L135 171 L255 151 L345 69 L535 65 L648 151 L710 178 L731 257 Z" fill={palette.tealLight} stroke={palette.ink} strokeWidth="12" strokeLinejoin="round" />
    <path d="M274 150 L365 87 L518 87 L608 150 Z" fill={palette.paperLight} stroke={palette.ink} strokeWidth="10" />
    <path d="M415 88 V151 M525 88 L607 150" stroke={palette.ink} strokeWidth="9" />
    <path d="M105 258 H724 V300 H100 Z" fill={palette.white} stroke={palette.ink} strokeWidth="11" />
    <circle cx="224" cy="293" r="66" fill={palette.ink} />
    <circle cx="224" cy="293" r="38" fill={palette.paperLight} stroke={palette.teal} strokeWidth="9" />
    <circle cx="610" cy="293" r="66" fill={palette.ink} />
    <circle cx="610" cy="293" r="38" fill={palette.paperLight} stroke={palette.teal} strokeWidth="9" />
    <rect x="478" y="220" width="120" height="70" rx="18" fill={palette.paperLight} stroke={palette.ink} strokeWidth="9" />
    <rect x="487" y={281 - 52 * tankFill} width="102" height={52 * tankFill} rx="10" fill={palette.coral} />
    <text x="538" y="214" textAnchor="middle" fill={palette.ink} fontSize="25" fontWeight="900">TANK</text>
  </svg>
);

export const SystemIcon: React.FC<{
  kind: "tank" | "pump" | "lines" | "injectors" | "engine";
  active?: boolean;
  label?: string;
}> = ({kind, active = false, label}) => {
  const fill = active ? palette.coral : palette.white;
  return (
    <div style={{width: 245, display: "flex", flexDirection: "column", alignItems: "center", gap: 16}}>
      <svg viewBox="0 0 190 170" style={{width: 190, height: 170}}>
        {kind === "tank" ? <rect x="25" y="42" width="140" height="94" rx="24" fill={fill} stroke={palette.ink} strokeWidth="10" /> : null}
        {kind === "pump" ? (
          <>
            <rect x="30" y="35" width="130" height="110" rx="18" fill={fill} stroke={palette.ink} strokeWidth="10" />
            <circle cx="95" cy="90" r="32" fill="none" stroke={palette.ink} strokeWidth="10" strokeDasharray="12 8" />
          </>
        ) : null}
        {kind === "lines" ? (
          <>
            <path d="M20 65 H170 M20 108 H170" stroke={active ? palette.coral : palette.teal} strokeWidth="18" strokeLinecap="round" />
            <circle cx="60" cy="65" r="8" fill={palette.ink} /><circle cx="130" cy="108" r="8" fill={palette.ink} />
          </>
        ) : null}
        {kind === "injectors" ? [45, 78, 111, 144].map((x) => <path key={x} d={`M${x} 38 V103 L${x - 9} 132 H${x + 9} L${x} 103`} fill={fill} stroke={palette.ink} strokeWidth="8" strokeLinejoin="round" />) : null}
        {kind === "engine" ? (
          <path d="M27 63 H72 L89 38 H137 V62 H161 V134 H31 Z" fill={fill} stroke={palette.ink} strokeWidth="10" strokeLinejoin="round" />
        ) : null}
      </svg>
      <div style={{fontSize: 25, fontWeight: 900, letterSpacing: 1.8}}>{label ?? kind.toUpperCase()}</div>
    </div>
  );
};
