import {CharacterCel} from "../micro-scene-01/CharacterCel";
import {
  OBSERVER_HEIGHT,
  OBSERVER_STAGE_X,
  ROOM_BASELINE_Y,
} from "./PerformanceTestRoom";

export const ACTION_DURATION = 96;

export const CelActionBaseline: React.FC = () => (
  <>
    <CharacterCel
      pose="neutral-alert"
      stageX={OBSERVER_STAGE_X}
      baselineY={ROOM_BASELINE_Y}
      height={OBSERVER_HEIGHT}
      from={0}
      durationInFrames={18}
    />
    <CharacterCel
      pose="reach-extinguisher"
      stageX={OBSERVER_STAGE_X + 65}
      baselineY={ROOM_BASELINE_Y}
      height={OBSERVER_HEIGHT}
      from={18}
      durationInFrames={34}
    />
    <CharacterCel
      pose="self-correct-recoil"
      stageX={OBSERVER_STAGE_X + 35}
      baselineY={ROOM_BASELINE_Y}
      height={OBSERVER_HEIGHT}
      from={52}
      durationInFrames={ACTION_DURATION - 52}
    />
  </>
);
