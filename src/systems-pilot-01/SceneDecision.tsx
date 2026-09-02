import {interpolate, Sequence, useCurrentFrame} from "remotion";
import {LibraryCel} from "../library/observer/LibraryCel";
import {palette} from "./manifest";
import {Arrow, Card, clamp, enter, SceneStage} from "./shared";
import {useFxMode} from "./fx";

const Step: React.FC<{text: string; symbol: string; color: string; frame: number; from: number}> = ({text, symbol, color, frame, from}) => {
  const fx = useFxMode();
  const pulse = interpolate(frame, [from, from + 8, from + 22], [0, 1, 0], clamp);
  return <div
    style={{
      height: 104,
      border: `5px solid ${palette.ink}`,
      backgroundColor: color,
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: "12px 20px",
      opacity: enter(frame, from, 8),
      translate: `${interpolate(frame, [from, from + 12], [-32, 0], clamp)}px 0px`,
      scale: fx ? 1 + pulse * 0.035 : 1,
      boxShadow: fx ? `inset ${12 * pulse}px 0 0 ${palette.mustard}` : "none",
    }}
  >
    <div style={{width: 60, height: 60, borderRadius: 32, backgroundColor: palette.ink, color: palette.paper, display: "grid", placeItems: "center", fontSize: 30, fontWeight: 900}}>{symbol}</div>
    <div style={{fontSize: 27, fontWeight: 900, letterSpacing: 1.6}}>{text}</div>
  </div>;
};

export const SceneDecision: React.FC = () => {
  const frame = useCurrentFrame();
  const fx = useFxMode();
  const noBranch = enter(frame, 12, 14);
  const yesBranch = enter(frame, 132, 14);
  return (
    <SceneStage title="WHAT TO DO" number="06">
      <div
        style={{
          position: "absolute",
          left: 650,
          top: 132,
          width: 620,
          height: 150,
          backgroundColor: palette.mustard,
          border: `6px solid ${palette.ink}`,
          clipPath: "polygon(11% 0, 89% 0, 100% 50%, 89% 100%, 11% 100%, 0 50%)",
          display: "grid",
          placeItems: "center",
          fontSize: 44,
          fontWeight: 900,
          letterSpacing: 3,
          opacity: enter(frame, 0, 10),
          scale: fx ? 1 + Math.sin(frame * 0.12) * 0.012 : 1,
        }}
      >
        ENGINE STARTED?
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2}}>
        <Arrow x1={890} y1={282} x2={520} y2={375} color={palette.teal} progress={enter(frame, 12, 14)} width={12} />
        <Arrow x1={1030} y1={282} x2={1400} y2={375} color={palette.coral} progress={enter(frame, 132, 14)} width={12} />
        {fx && noBranch > 0 && noBranch < 1 ? <circle cx={890 + (520 - 890) * noBranch} cy={282 + (375 - 282) * noBranch} r="14" fill={palette.mustard} stroke={palette.ink} strokeWidth="5" /> : null}
        {fx && yesBranch > 0 && yesBranch < 1 ? <circle cx={1030 + (1400 - 1030) * yesBranch} cy={282 + (375 - 282) * yesBranch} r="14" fill={palette.mustard} stroke={palette.ink} strokeWidth="5" /> : null}
      </svg>

      <Card style={{position: "absolute", left: 110, top: 350, width: 680, height: 590, padding: 24}}>
        <div style={{fontSize: 58, fontWeight: 900, color: palette.teal, textAlign: "center", marginBottom: 18}}>NO</div>
        <div style={{display: "grid", gap: 17}}>
          <Step text="LEAVE IT OFF" symbol="1" color={palette.tealLight} frame={frame} from={24} />
          <Step text="CHECK VEHICLE PROCEDURE" symbol="2" color={palette.tealLight} frame={frame} from={62} />
          <Step text="ARRANGE DRAIN / SERVICE / TOW" symbol="3" color={palette.tealLight} frame={frame} from={100} />
        </div>
      </Card>

      <Card style={{position: "absolute", right: 110, top: 350, width: 680, height: 590, padding: 24}}>
        <div style={{fontSize: 58, fontWeight: 900, color: palette.coralDark, textAlign: "center", marginBottom: 18}}>YES</div>
        <div style={{display: "grid", gap: 17}}>
          <Step text="STOP SAFELY" symbol="1" color="#F1A08C" frame={frame} from={142} />
          <Step text="SWITCH IT OFF" symbol="2" color="#F1A08C" frame={frame} from={172} />
          <Step text="DO NOT RESTART" symbol="3" color="#F1A08C" frame={frame} from={202} />
        </div>
      </Card>

      <Sequence durationInFrames={138} layout="none">
        <LibraryCel cel="compareHands" stageX={960} stageY={1016} scale={0.52} />
      </Sequence>
      <Sequence from={138} durationInFrames={112} layout="none">
        <LibraryCel cel="fearBrace" stageX={960} stageY={1016} scale={0.55} />
      </Sequence>
    </SceneStage>
  );
};
