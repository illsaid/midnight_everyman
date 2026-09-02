import {AbsoluteFill} from "remotion";
import {CharacterCel, type AlarmPose} from "../micro-scene-01/CharacterCel";

export const PERFORMANCE_CHROMA = "#00B140";

export const ReferencePlate: React.FC<{
  pose: AlarmPose;
}> = ({pose}) => (
  <AbsoluteFill style={{backgroundColor: PERFORMANCE_CHROMA, overflow: "hidden"}}>
    <CharacterCel
      pose={pose}
      stageX={960}
      baselineY={994}
      height={820}
    />
  </AbsoluteFill>
);

export const ObserverPerformanceStartReference: React.FC = () => (
  <ReferencePlate pose="neutral-alert" />
);

export const ObserverPerformanceEndReference: React.FC = () => (
  <ReferencePlate pose="self-correct-recoil" />
);
