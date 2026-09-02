import {AbsoluteFill, Sequence} from "remotion";
import {
  PerformanceTestRoom,
  ROOM_BASELINE_Y,
} from "../../performance-plate-01/PerformanceTestRoom";
import {ObserverAction} from "./ObserverAction";

const SCENE_DURATION = 72;

const ActionTitle: React.FC<{title: string; subtitle: string}> = ({
  title,
  subtitle,
}) => (
  <div
    style={{
      position: "absolute",
      left: 72,
      top: 52,
      color: "#242622",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}
  >
    <div style={{fontSize: 48, fontWeight: 900, letterSpacing: 5}}>
      {title}
    </div>
    <div
      style={{
        marginTop: 8,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: 2,
        color: "#356F70",
      }}
    >
      {subtitle}
    </div>
  </div>
);

const RunAwayScene: React.FC = () => (
  <AbsoluteFill>
    <PerformanceTestRoom />
    <ActionTitle
      title="ACTION PACK 01 - RUN AWAY"
      subtitle="SHOCK / BRACE / EXIT BURST"
    />
    <Sequence from={6} durationInFrames={60} layout="none">
      <ObserverAction
        action="runAway"
        stageX={390}
        stageY={ROOM_BASELINE_Y}
        scale={0.88}
      />
    </Sequence>
  </AbsoluteFill>
);

const JumpForJoyScene: React.FC = () => (
  <AbsoluteFill>
    <PerformanceTestRoom />
    <ActionTitle
      title="ACTION PACK 02 - JUMP FOR JOY"
      subtitle="JOY HOLD / AIRBORNE EXTREME / LAND"
    />
    <Sequence from={6} durationInFrames={66} layout="none">
      <ObserverAction
        action="jumpForJoy"
        stageX={1040}
        stageY={ROOM_BASELINE_Y}
        scale={0.78}
      />
    </Sequence>
  </AbsoluteFill>
);

export const ACTION_PACK_SHOWCASE_DURATION = SCENE_DURATION * 2;

export const ActionPackShowcase: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: "#F5EBD6"}}>
    <Sequence durationInFrames={SCENE_DURATION}>
      <RunAwayScene />
    </Sequence>
    <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}>
      <JumpForJoyScene />
    </Sequence>
  </AbsoluteFill>
);
