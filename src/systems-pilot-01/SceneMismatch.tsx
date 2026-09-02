import {interpolate, Sequence, useCurrentFrame} from "remotion";
import {LibraryCel} from "../library/observer/LibraryCel";
import {palette} from "./manifest";
import {Card, clamp, enter, MiniCar, SceneStage, Stamp} from "./shared";
import {FxPulseRings, useFxMode} from "./fx";

export const SceneMismatch: React.FC = () => {
  const frame = useCurrentFrame();
  const fx = useFxMode();
  const select = interpolate(frame, [56, 91], [0, 1], clamp);
  const flow = interpolate(frame, [92, 150], [0, 1], clamp);
  const gallons = interpolate(frame, [104, 170], [0, 3], clamp);

  return (
    <SceneStage title="THE MISMATCH" number="01">
      <Card
        style={{
          position: "absolute",
          left: 105,
          top: 175,
          width: 525,
          height: 670,
          padding: 30,
          opacity: enter(frame, 8, 12),
          translate: `${interpolate(frame, [8, 24], [-90, 0], clamp)}px 0px`,
        }}
      >
        <div style={{fontSize: 25, fontWeight: 900, letterSpacing: 3, marginBottom: 25}}>SELECT FUEL</div>
        <div
          style={{
            height: 210,
            border: `5px solid ${palette.ink}`,
            backgroundColor: palette.tealLight,
            display: "grid",
            placeItems: "center",
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: 4,
          }}
        >
          GASOLINE
        </div>
        <div
          style={{
            marginTop: 24,
            height: 210,
            border: `5px solid ${palette.ink}`,
            background: fx
              ? `linear-gradient(to top, ${palette.mustard} 0%, ${palette.mustard} ${select * 100}%, ${palette.white} ${select * 100}%, ${palette.white} 100%)`
              : select > 0.55 ? palette.mustard : palette.white,
            display: "grid",
            placeItems: "center",
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: 4,
            translate: `0px ${select > 0.92 ? 5 : 0}px`,
            boxShadow: select > 0.92 ? "inset 0 8px 0 rgba(36,38,34,0.24)" : "none",
          }}
        >
          DIESEL
        </div>
        <div
          style={{
            position: "absolute",
            left: 405,
            top: 112 + select * 235,
            width: 74,
            height: 74,
            borderRadius: 38,
            backgroundColor: palette.coral,
            border: `7px solid ${palette.ink}`,
            display: "grid",
            placeItems: "center",
            fontSize: 39,
            fontWeight: 900,
            scale: fx ? interpolate(select, [0, 0.75, 1], [0.82, 1.18, 1], {...clamp, output: "perceptual-scale"}) : 1,
            rotate: fx ? `${interpolate(select, [0, 0.75, 1], [-18, 8, 0], clamp)}deg` : "0deg",
          }}
        >
          ✓
        </div>
      </Card>

      <FxPulseRings
        x={547}
        y={324 + select * 235}
        progress={interpolate(frame, [68, 92, 122], [0, 0.72, 1], clamp)}
        color={palette.mustard}
        maxRadius={105}
      />

      <div
        style={{
          position: "absolute",
          left: 940,
          top: 250,
          width: 870,
          height: 540,
          opacity: enter(frame, 16, 12),
          translate: `${interpolate(frame, [16, 32], [100, 0], clamp)}px 0px`,
          scale: fx ? 1 + Math.sin(frame * 0.24) * flow * 0.008 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 0,
            padding: "13px 23px 11px",
            backgroundColor: palette.teal,
            color: palette.white,
            border: `5px solid ${palette.ink}`,
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: 2.5,
          }}
        >
          GASOLINE VEHICLE
        </div>
        <MiniCar tankFill={flow * 0.35} />
        <div
          style={{
            position: "absolute",
            right: 138,
            bottom: -5,
            width: 320,
            padding: "12px 18px",
            textAlign: "center",
            backgroundColor: palette.ink,
            color: palette.paper,
            fontSize: 25,
            fontWeight: 900,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          WRONG FUEL: {gallons.toFixed(1)} GAL
        </div>
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 8, pointerEvents: "none"}}>
        <defs>
          <marker id="mismatch-arrow" markerWidth="36" markerHeight="30" refX="30" refY="15" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L32,15 L0,30 Z" fill={palette.coral} />
          </marker>
        </defs>
        <path
          d="M616 590 C650 370 730 258 940 255 C1070 252 1175 255 1285 280"
          fill="none"
          stroke={palette.coral}
          strokeWidth="15"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - flow}
          markerEnd={flow > 0.92 ? "url(#mismatch-arrow)" : undefined}
        />
      </svg>

      <Sequence from={24} durationInFrames={112} layout="none">
        <LibraryCel cel="neutralAlert" stageX={790} stageY={1008} scale={0.7} />
      </Sequence>
      <Sequence from={136} durationInFrames={54} layout="none">
        <LibraryCel cel="suspiciousSquint" stageX={790} stageY={1008} scale={0.72} />
      </Sequence>

      <Stamp
        style={{
          position: "absolute",
          left: 785,
          top: 170,
          opacity: enter(frame, 142, 10),
          scale: enter(frame, 142, 10),
          zIndex: 20,
        }}
      >
        MISMATCH
      </Stamp>
    </SceneStage>
  );
};
