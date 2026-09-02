import {interpolate, Sequence, useCurrentFrame} from "remotion";
import {LibraryCel} from "../library/observer/LibraryCel";
import {palette} from "./manifest";
import {Arrow, clamp, enter, SceneStage, SystemIcon} from "./shared";
import {FxPulseRings, FxStarburst, useFxMode} from "./fx";

const nodes = ["tank", "pump", "lines", "injectors", "engine"] as const;

export const SceneConclusion: React.FC = () => {
  const frame = useCurrentFrame();
  const fx = useFxMode();
  const attempt = interpolate(frame, [18, 62], [0, 1], clamp);
  const barrier = enter(frame, 62, 8);
  const final = enter(frame, 136, 10);

  return (
    <SceneStage title="STOP BEFORE YOU START" number="07">
      <FxStarburst progress={final} origin={[0.5, 0.5]} opacity={0.14} zIndex={2} />
      <FxPulseRings x={623} y={406} progress={interpolate(frame, [50, 66, 92], [0, 0.62, 1], clamp)} maxRadius={190} />
      <div
        style={{
          position: "absolute",
          left: 75,
          right: 75,
          top: 255,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: 1 - final,
        }}
      >
        {nodes.map((kind, index) => (
          <div key={kind} style={{display: "contents"}}>
            <div style={{scale: fx ? enter(frame, index * 8, 9) : 1}}>
              <SystemIcon kind={kind} active={index === 0} />
            </div>
            {index < nodes.length - 1 ? (
              <svg viewBox="0 0 115 90" style={{width: 105, height: 90}}>
                <Arrow x1={10} y1={45} x2={104} y2={45} color={palette.ink} width={8} />
              </svg>
            ) : null}
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: 260 + 330 * attempt,
          top: 386,
          width: 40,
          height: 40,
          borderRadius: 22,
          backgroundColor: palette.coral,
          border: `5px solid ${palette.ink}`,
          opacity: 1 - final,
          zIndex: 15,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 604,
          top: 284,
          width: 38,
          height: 360,
          backgroundColor: palette.ink,
          border: `8px solid ${palette.coral}`,
          opacity: barrier * (1 - final),
          translate: `0px ${interpolate(barrier, [0, 1], [-330, 0], clamp)}px`,
          zIndex: 18,
        }}
      />

      <div style={{position: "absolute", left: 124, bottom: 180, width: 500, opacity: (1 - final) * enter(frame, 10, 8)}}>
        <div style={{fontSize: 33, fontWeight: 900, letterSpacing: 3}}>CONTAMINATION</div>
        <div style={{height: 13, marginTop: 12, backgroundColor: palette.coral}} />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          opacity: final,
          scale: interpolate(final, [0, 1], [0.84, 1], {...clamp, output: "perceptual-scale"}),
          zIndex: 24,
        }}
      >
        <div style={{width: 1220, textAlign: "center", paddingBottom: 55}}>
          <div style={{fontSize: 88, lineHeight: 0.98, fontWeight: 900, letterSpacing: 4}}>STOP BEFORE<br />YOU START</div>
          <div style={{height: 16, backgroundColor: palette.coral, margin: "30px auto 24px", width: fx ? 880 * final : 880}} />
          <div style={{fontSize: 31, fontWeight: 900, letterSpacing: 2.6}}>KEEP CONTAMINATION FROM BECOMING CIRCULATION</div>
          <div style={{fontSize: 22, fontWeight: 700, marginTop: 28}}>Follow the procedure for your specific vehicle.</div>
        </div>
      </div>

      <Sequence from={102} durationInFrames={79} layout="none">
        <LibraryCel cel="reliefSigh" stageX={1635} stageY={1010} scale={0.66} />
      </Sequence>
    </SceneStage>
  );
};
