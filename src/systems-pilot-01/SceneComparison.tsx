import {interpolate, useCurrentFrame} from "remotion";
import {palette} from "./manifest";
import {Card, clamp, enter, SceneStage} from "./shared";
import {useFxMode} from "./fx";

const Symptom: React.FC<{text: string; from: number; frame: number}> = ({text, from, frame}) => (
  <div
    style={{
      padding: "10px 16px 8px",
      backgroundColor: palette.coral,
      border: `4px solid ${palette.ink}`,
      color: palette.white,
      fontSize: 23,
      fontWeight: 900,
      letterSpacing: 1.5,
      opacity: enter(frame, from, 8),
      translate: `${interpolate(frame, [from, from + 10], [30, 0], clamp)}px 0px`,
    }}
  >
    {text}
  </div>
);

export const SceneComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const fx = useFxMode();
  const rightActive = interpolate(frame, [162, 180], [0, 1], clamp);
  const wear = interpolate(frame, [55, 145], [0, 1], clamp);
  const power = interpolate(frame, [184, 275], [1, 0.4], clamp);
  const piston = Math.round(interpolate(frame % 24, [0, 12, 24], [0, 46, 0], clamp) / 8) * 8;

  return (
    <SceneStage title="TWO FAILURE PATTERNS" number="04">
      <Card
        style={{
          position: "absolute",
          left: 70,
          top: 150,
          width: 850,
          height: 820,
          padding: 28,
          opacity: 1 - rightActive * 0.55,
        }}
      >
        <div style={{fontSize: 39, fontWeight: 900, letterSpacing: 2.8, textAlign: "center"}}>GASOLINE → DIESEL ENGINE</div>
        <div style={{fontSize: 23, fontWeight: 800, letterSpacing: 2, textAlign: "center", color: palette.teal, marginTop: 8}}>HIGH-PRESSURE FUEL SYSTEM</div>

        <svg viewBox="0 0 760 460" style={{width: "100%", height: 470, marginTop: 18}}>
          <rect x="135" y="75" width="490" height="290" rx="42" fill={palette.tealLight} stroke={palette.ink} strokeWidth="13" />
          <circle cx="300" cy="220" r="92" fill={palette.white} stroke={palette.ink} strokeWidth="13" />
          <circle cx="460" cy="220" r="92" fill={palette.white} stroke={palette.ink} strokeWidth="13" />
          <circle cx="300" cy="220" r="62" fill={palette.teal} stroke={palette.ink} strokeWidth="10" strokeDasharray="20 12" strokeDashoffset={fx ? -frame * 2.2 : 0} />
          <circle cx="460" cy="220" r="62" fill={palette.teal} stroke={palette.ink} strokeWidth="10" strokeDasharray="20 12" strokeDashoffset={fx ? frame * 2.2 : 0} />
          <path d="M340 122 C370 170 390 270 420 318" fill="none" stroke={palette.mustard} strokeWidth={Math.max(2, 28 * (1 - wear))} strokeLinecap="round" strokeDasharray={fx ? "18 9" : undefined} strokeDashoffset={fx ? frame * 2.4 : 0} />
          <text x="380" y="54" textAnchor="middle" fill={palette.ink} fontSize="28" fontWeight="900">FUEL-LUBRICATED COMPONENTS</text>
          {wear > 0.2 ? [0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M${355 + i * 18} ${155 + i * 31} l${18 + i * 3} ${-18 + i * 2}`} stroke={palette.coralDark} strokeWidth="8" strokeLinecap="round" opacity={wear} />
          )) : null}
          {wear > 0.4 ? [0, 1, 2, 3].map((i) => (
            <circle key={i} cx={555 + i * 28} cy={315 + (i % 2) * 20} r={7 + i} fill={palette.coralDark} opacity={wear} />
          )) : null}
          <path d="M615 307 H704" stroke={palette.ink} strokeWidth="15" strokeLinecap="round" />
          <path d="M704 277 V338" stroke={palette.ink} strokeWidth="12" />
        </svg>

        <div style={{display: "flex", justifyContent: "center", gap: 18}}>
          <div style={{padding: "13px 17px", backgroundColor: palette.mustard, border: `4px solid ${palette.ink}`, fontSize: 25, fontWeight: 900, opacity: enter(frame, 75, 10)}}>LUBRICATION ↓</div>
          <div style={{padding: "13px 17px", backgroundColor: palette.coral, color: palette.white, border: `4px solid ${palette.ink}`, fontSize: 25, fontWeight: 900, opacity: enter(frame, 110, 10)}}>PUMP / INJECTOR RISK ↑</div>
        </div>
      </Card>

      <Card
        style={{
          position: "absolute",
          right: 70,
          top: 150,
          width: 850,
          height: 820,
          padding: 28,
          opacity: 0.45 + rightActive * 0.55,
          translate: fx ? `${interpolate(rightActive, [0, 1], [42, 0], clamp)}px 0px` : "0px 0px",
        }}
      >
        <div style={{fontSize: 39, fontWeight: 900, letterSpacing: 2.8, textAlign: "center"}}>DIESEL → GASOLINE ENGINE</div>
        <div style={{fontSize: 23, fontWeight: 800, letterSpacing: 2, textAlign: "center", color: palette.teal, marginTop: 8}}>SPARK-IGNITION CYLINDER</div>

        <svg viewBox="0 0 760 475" style={{width: "100%", height: 475, marginTop: 15}}>
          <path d="M190 75 H570 V400 H190 Z" fill={palette.paperLight} stroke={palette.ink} strokeWidth="13" />
          <path d={`M215 ${330 - piston} H545 V405 H215 Z`} fill={palette.tealLight} stroke={palette.ink} strokeWidth="12" />
          <path d={`M380 ${405 - piston} V458`} stroke={palette.ink} strokeWidth="20" strokeLinecap="round" />
          <path d="M348 30 H412 V120 L380 151 L348 120 Z" fill={palette.white} stroke={palette.ink} strokeWidth="11" />
          <path d="M360 103 L332 142 M400 103 L428 142" stroke={palette.ink} strokeWidth="8" />
          {frame > 176 ? (
            <path d="M332 153 L285 212 L355 197 L380 268 L411 201 L477 222 L428 154" fill={palette.mustard} stroke={palette.coralDark} strokeWidth="9" opacity={0.55 + 0.45 * Math.abs(Math.sin(frame * 0.35))} style={fx ? {filter: `drop-shadow(0 0 ${10 + Math.abs(Math.sin(frame * 0.35)) * 18}px ${palette.mustard})`} : undefined} />
          ) : null}
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse key={i} cx={250 + i * 70} cy={190 + (i % 2) * 68} rx={rightActive > 0.5 ? 20 : 9} ry={rightActive > 0.5 ? 28 : 9} fill={rightActive > 0.5 ? palette.coral : palette.mustard} stroke={palette.ink} strokeWidth="5" opacity={0.45 + rightActive * 0.55} />
          ))}
          <rect x="586" y="130" width="70" height="260" rx="34" fill={palette.white} stroke={palette.ink} strokeWidth="10" />
          <rect x="600" y={145 + 225 * (1 - power)} width="42" height={225 * power} rx="20" fill={power > 0.65 ? palette.teal : palette.coral} />
          <text x="621" y="425" textAnchor="middle" fill={palette.ink} fontSize="23" fontWeight="900">POWER</text>
          {fx && frame > 232 ? [0, 1, 2, 3].map((index) => {
            const age = Math.max(0, frame - 232 - index * 11);
            return (
              <circle
                key={index}
                cx={520 + Math.sin(index * 2.1) * 28}
                cy={112 - age * 1.35}
                r={12 + age * 0.45}
                fill={palette.ink}
                opacity={Math.max(0, 0.42 - age / 105)}
              />
            );
          }) : null}
        </svg>

        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12}}>
          <Symptom text="HARD START" from={198} frame={frame} />
          <Symptom text="MISFIRE" from={220} frame={frame} />
          <Symptom text="SMOKE" from={242} frame={frame} />
          <Symptom text="POWER ↓" from={264} frame={frame} />
        </div>
      </Card>

      <div style={{position: "absolute", left: 948, top: 180, width: 24, height: 750, backgroundColor: palette.ink}} />
    </SceneStage>
  );
};
