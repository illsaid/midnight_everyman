import {interpolate, useCurrentFrame} from "remotion";
import {palette} from "./manifest";
import {clamp, enter, SceneStage, Stamp} from "./shared";
import {FxPulseRings, useFxMode} from "./fx";

export const SceneRule: React.FC = () => {
  const frame = useCurrentFrame();
  const fx = useFxMode();
  const awaken = interpolate(frame, [118, 166], [0, 1], clamp);
  const rule = enter(frame, 38, 10);
  const warning = fx ? enter(frame, 154, 12) : awaken > 0.74 ? 1 : 0;

  return (
    <SceneStage title="THE RULE" number="05">
      <FxPulseRings x={458} y={537} progress={interpolate(frame, [112, 140, 176], [0, 0.66, 1], clamp)} color={palette.mustard} maxRadius={285} />
      <div
        style={{
          position: "absolute",
          left: 180,
          top: 255,
          width: 565,
          height: 565,
          borderRadius: 300,
          border: `14px solid ${palette.ink}`,
          backgroundColor: palette.white,
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            width: 355,
            height: 355,
            borderRadius: 190,
            backgroundColor: awaken > 0.62 ? palette.coral : palette.teal,
            border: `12px solid ${palette.ink}`,
            color: palette.white,
            display: "grid",
            placeItems: "center",
            fontSize: 82,
            fontWeight: 900,
            letterSpacing: 6,
            rotate: `${interpolate(awaken, [0, 0.75, 1], [0, 36, 0], clamp)}deg`,
            scale: fx ? interpolate(awaken, [0, 0.62, 0.78, 1], [1, 1, 1.12, 1], {...clamp, output: "perceptual-scale"}) : 1,
          }}
        >
          {awaken > 0.62 ? "ON" : "OFF"}
        </div>
        <div style={{position: "absolute", top: -50, fontSize: 29, fontWeight: 900, letterSpacing: 2}}>IGNITION SWITCH</div>
      </div>

      <div style={{position: "absolute", left: 815, top: 230, width: 930, height: 530}}>
        <svg viewBox="0 0 930 530" style={{width: "100%", height: "100%"}}>
          <rect x="38" y="205" width="190" height="120" rx="28" fill={palette.coral} stroke={palette.ink} strokeWidth="12" />
          <text x="133" y="190" textAnchor="middle" fill={palette.ink} fontSize="29" fontWeight="900">TANK</text>
          <path d="M228 265 H700" stroke={palette.ink} strokeWidth="24" strokeLinecap="round" />
          <path d="M228 265 H700" stroke={palette.coral} strokeWidth="12" strokeLinecap="round" strokeDasharray="18 25" strokeDashoffset={-awaken * 500} />
          <rect x="700" y="190" width="190" height="150" rx="28" fill={awaken > 0.25 ? palette.coral : palette.white} stroke={palette.ink} strokeWidth="12" />
          <circle cx="795" cy="265" r="45" fill="none" stroke={palette.ink} strokeWidth="11" strokeDasharray="15 10" />
          <text x="795" y="180" textAnchor="middle" fill={palette.ink} fontSize="29" fontWeight="900">PUMP</text>
          <path d="M225 104 H704" stroke={palette.mustard} strokeWidth="13" strokeLinecap="round" strokeDasharray="22 18" strokeDashoffset={-awaken * 500} opacity={awaken} />
          <path d="M705 104 L770 161" stroke={palette.mustard} strokeWidth="13" strokeLinecap="round" opacity={awaken} />
          <text x="460" y="77" textAnchor="middle" fill={palette.ink} fontSize="27" fontWeight="900" opacity={awaken}>ELECTRICAL COMMAND</text>
          {fx && awaken > 0.03 ? (
            <circle cx={225 + 545 * awaken} cy={104 + Math.max(0, awaken - 0.88) * 460} r="16" fill={palette.mustard} stroke={palette.ink} strokeWidth="6" style={{filter: `drop-shadow(0 0 14px ${palette.mustard})`}} />
          ) : null}
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          right: 110,
          bottom: 130,
          width: 910,
          textAlign: "center",
          opacity: rule,
          translate: `0px ${interpolate(rule, [0, 1], [55, 0], clamp)}px`,
        }}
      >
        <div style={{fontSize: 42, fontWeight: 900, letterSpacing: 4, marginBottom: 15}}>WRONG FUEL?</div>
        <Stamp color={palette.coral} style={{fontSize: 53, backgroundColor: palette.paperLight}}>LEAVE THE IGNITION OFF</Stamp>
        <div style={{fontSize: 23, fontWeight: 800, letterSpacing: 2, marginTop: 18}}>CHECK THE PROCEDURE FOR YOUR VEHICLE</div>
      </div>

      {warning > 0 ? (
        <svg viewBox="0 0 1920 1080" style={{position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 22}}>
          <circle cx="458" cy="537" r="235" fill="none" stroke={palette.ink} strokeWidth="30" pathLength="1" strokeDasharray="1" strokeDashoffset={fx ? 1 - warning : 0} />
          <line x1="290" y1="369" x2="626" y2="705" stroke={palette.ink} strokeWidth="36" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={fx ? 1 - warning : 0} />
        </svg>
      ) : null}
    </SceneStage>
  );
};
