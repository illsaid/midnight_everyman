import {Easing, interpolate, useCurrentFrame} from "remotion";
import {LibraryCel} from "./LibraryCel";
import {observerActions, type ObserverActionId} from "./actions";
import type {ObserverCelId} from "./cels";

type Direction = "left" | "right";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

export const ObserverAction: React.FC<{
  action: ObserverActionId;
  stageX: number;
  stageY: number;
  scale?: number;
  direction?: Direction;
}> = ({action, stageX, stageY, scale = 1, direction = "right"}) => {
  const frame = useCurrentFrame();
  const definition: (typeof observerActions)[ObserverActionId] =
    observerActions[action];
  const localFrame = Math.min(frame, definition.durationInFrames - 1);
  const directionSign = direction === "right" ? 1 : -1;

  const phase =
    definition.phases.find(
      ({from, durationInFrames}) =>
        localFrame >= from && localFrame < from + durationInFrames,
    ) ?? definition.phases[definition.phases.length - 1];
  const cel: ObserverCelId = phase.cel;
  let offsetX = 0;
  let offsetY = 0;
  let celScale = scale;
  let rotate = "0deg";

  if (action === "runAway") {
    offsetX =
      interpolate(localFrame, [17, 59], [0, 1750], {
        ...clamp,
        easing: Easing.bezier(0.33, 0, 0.2, 1),
      }) * directionSign;
    offsetY =
      localFrame >= 17
        ? -Math.abs(Math.sin((localFrame - 17) * 0.72)) * 14
        : 0;
    rotate = localFrame >= 17 ? `${-2 * directionSign}deg` : "0deg";
  } else {
    offsetY =
      localFrame <= 28
        ? interpolate(localFrame, [12, 28], [0, -180], {
            ...clamp,
            easing: Easing.out(Easing.cubic),
          })
        : interpolate(localFrame, [28, 45], [-180, 0], {
            ...clamp,
            easing: Easing.in(Easing.cubic),
          });
    celScale = localFrame >= 12 && localFrame < 45 ? scale * 1.035 : scale;
    rotate =
      localFrame >= 12 && localFrame < 45
        ? `${3 * directionSign}deg`
        : "0deg";
  }

  return (
    <LibraryCel
      cel={cel}
      stageX={stageX + offsetX}
      stageY={stageY + offsetY}
      scale={celScale}
      flip={direction === "left"}
      rotate={rotate}
    />
  );
};
