import {interpolate, Sequence, useCurrentFrame} from "remotion";
import {LibraryCel} from "../library/observer/LibraryCel";
import {palette} from "./manifest";
import {Card, clamp, enter, SceneStage} from "./shared";
import {FxPulseRings, FxStarburst, useFxMode} from "./fx";

export const SceneStop: React.FC = () => {
  const frame = useCurrentFrame();
  const fx = useFxMode();
  const approach = interpolate(frame, [20, 76], [0, 1], clamp);
  const warning = enter(frame, 88, 8);
  const impact = interpolate(frame, [82, 89, 98, 112], [0, 1, 0.35, 0], clamp);

  return (
    <SceneStage title="DON'T START IT" number="02">
      <FxStarburst progress={impact} origin={[0.69, 0.47]} opacity={0.2} />
      <FxPulseRings x={1320} y={506} progress={interpolate(frame, [78, 92, 116], [0, 0.62, 1], clamp)} maxRadius={320} />
      <Sequence durationInFrames={88} layout="none">
        <LibraryCel cel="pointRight" stageX={570} stageY={1000} scale={0.86} />
      </Sequence>
      <Sequence from={88} durationInFrames={63} layout="none">
        <LibraryCel cel="selfCorrectRecoil" stageX={570} stageY={1000} scale={0.82} />
      </Sequence>

      <Card
        style={{
          position: "absolute",
          left: 1010,
          top: 205,
          width: 620,
          height: 610,
          display: "grid",
          placeItems: "center",
          opacity: enter(frame, 5, 12),
          translate: fx ? `${Math.sin(frame * 2.7) * impact * 13}px ${Math.cos(frame * 2.2) * impact * 8}px` : "0px 0px",
        }}
      >
        <div
          style={{
            width: 390,
            height: 390,
            borderRadius: 210,
            backgroundColor: palette.coral,
            border: `16px solid ${palette.ink}`,
            display: "grid",
            placeItems: "center",
            color: palette.white,
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: 5,
            translate: `0px ${interpolate(approach, [0, 1], [0, 18], clamp)}px`,
            scale: fx && frame < 88 ? 1 + Math.sin(frame * 0.22) * 0.018 : 1,
            boxShadow: `0 ${interpolate(approach, [0, 1], [28, 6], clamp)}px 0 ${palette.coralDark}`,
          }}
        >
          START
        </div>
      </Card>

      <div
        style={{
          position: "absolute",
          left: 925 + approach * 250,
          top: 455,
          width: 0,
          height: 0,
          borderTop: "32px solid transparent",
          borderBottom: "32px solid transparent",
          borderLeft: `66px solid ${palette.mustard}`,
          filter: `drop-shadow(4px 5px 0 ${palette.ink})`,
          opacity: 1 - warning,
          zIndex: 20,
        }}
      />

      <svg viewBox="0 0 1920 1080" style={{position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 24, pointerEvents: "none", opacity: warning}}>
        <circle cx="1320" cy="506" r="250" fill="none" stroke={palette.ink} strokeWidth="34" pathLength="1" strokeDasharray="1" strokeDashoffset={fx ? 1 - warning : 0} />
        <line x1="1142" y1="328" x2="1498" y2="684" stroke={palette.ink} strokeWidth="40" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={fx ? 1 - warning : 0} />
      </svg>

      <div
        style={{
          position: "absolute",
          left: 690,
          bottom: 78,
          width: 1130,
          padding: "22px 30px 18px",
          backgroundColor: palette.ink,
          color: palette.paper,
          textAlign: "center",
          fontSize: 58,
          fontWeight: 900,
          letterSpacing: 3.5,
          opacity: warning,
          translate: `0px ${interpolate(warning, [0, 1], [90, 0], clamp)}px`,
          zIndex: 26,
        }}
      >
        DO NOT START THE ENGINE
      </div>
    </SceneStage>
  );
};
