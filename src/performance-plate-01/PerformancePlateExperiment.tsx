import {AbsoluteFill, Sequence, useCurrentFrame} from "remotion";
import {ACTION_DURATION, CelActionBaseline} from "./CelActionBaseline";
import {ObserverPerformance} from "./ObserverPerformance";
import {
  OBSERVER_HEIGHT,
  OBSERVER_STAGE_X,
  PerformanceTestRoom,
  ROOM_BASELINE_Y,
} from "./PerformanceTestRoom";

const PassLabel: React.FC<{label: string; waiting?: boolean}> = ({
  label,
  waiting = false,
}) => (
  <div
    style={{
      position: "absolute",
      left: 80,
      top: 58,
      padding: "16px 24px 13px",
      backgroundColor: waiting ? "#BD4E3D" : "#242622",
      color: "#F5EBD6",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: 3,
      zIndex: 20,
    }}
  >
    {label}
  </div>
);

const CelPass: React.FC = () => (
  <AbsoluteFill>
    <PerformanceTestRoom />
    <CelActionBaseline />
    <PassLabel label="A · THREE-CEL BASELINE" />
  </AbsoluteFill>
);

const PerformancePass: React.FC<{clip?: string}> = ({clip = ""}) => (
  <AbsoluteFill>
    <PerformanceTestRoom />
    <ObserverPerformance
      clip={clip}
      stageX={OBSERVER_STAGE_X}
      baselineY={ROOM_BASELINE_Y}
      height={OBSERVER_HEIGHT}
    />
    <PassLabel
      waiting={!clip}
      label={clip ? "B · PERFORMANCE PLATE" : "B · AWAITING GENERATED CLIP"}
    />
  </AbsoluteFill>
);

export type PerformancePlateExperimentProps = {
  readonly clip?: string;
};

export const PerformancePlateExperiment: React.FC<
  PerformancePlateExperimentProps
> = ({clip = ""}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: "#F5EBD6"}}>
      <Sequence durationInFrames={ACTION_DURATION} premountFor={12}>
        <CelPass />
      </Sequence>
      <Sequence
        from={ACTION_DURATION}
        durationInFrames={ACTION_DURATION}
        premountFor={12}
      >
        <PerformancePass clip={clip} />
      </Sequence>
      <div
        style={{
          position: "absolute",
          right: 68,
          bottom: 42,
          color: "#242622",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 2,
          zIndex: 30,
        }}
      >
        {frame < ACTION_DURATION ? "CEL" : "PLATE"} · {String(frame % ACTION_DURATION).padStart(2, "0")}/95
      </div>
    </AbsoluteFill>
  );
};
