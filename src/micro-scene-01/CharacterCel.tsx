import {Img, Interactive, staticFile, type EffectsProp} from "remotion";

export type AlarmPose =
  | "neutral-alert"
  | "startled-alarm"
  | "listen-count"
  | "reach-extinguisher"
  | "self-correct-recoil"
  | "outside-phone";

const files: Record<AlarmPose, string> = {
  "neutral-alert": "neutral-alert-v1.png",
  "startled-alarm": "startled-alarm-v1.png",
  "listen-count": "listen-count-v1.png",
  "reach-extinguisher": "reach-extinguisher-v1.png",
  "self-correct-recoil": "self-correct-recoil-v1.png",
  "outside-phone": "outside-phone-v1.png",
};

/**
 * A registered replacement cel.
 *
 * `from` and `durationInFrames` are the cel's hold window, expressed in frames
 * relative to the beat that contains it. They are Sequence-native props, so the
 * Remotion Studio draws each cel as its own timeline track and the in/out points
 * can be dragged instead of edited in code. Mounting is a hard cut by design -
 * do not fade a replacement cel in or out.
 */
export const CharacterCel: React.FC<{
  pose: AlarmPose;
  stageX: number;
  from?: number;
  durationInFrames?: number;
  baselineY?: number;
  height?: number;
  opacity?: number;
  scale?: number;
  rotate?: string;
  translate?: string;
  flip?: boolean;
  effects?: EffectsProp;
}> = ({
  pose,
  stageX,
  from,
  durationInFrames,
  baselineY = 970,
  height = 700,
  opacity = 1,
  scale = 1,
  rotate = "0deg",
  translate = "0px 0px",
  flip = false,
  effects,
}) => (
  <Interactive.Div
    name={`Observer: ${pose}`}
    from={from}
    durationInFrames={durationInFrames}
    showInTimeline
    style={{
      position: "absolute",
      left: stageX - 320,
      top: baselineY - height,
      width: 640,
      height,
      opacity,
      scale: flip ? `${-scale} ${scale}` : scale,
      rotate,
      translate,
      transformOrigin: "50% 100%",
      zIndex: 5,
    }}
  >
    <Img
      name={`${pose} cel`}
      src={staticFile(`characters/observer/alarm/${files[pose]}`)}
      effects={effects}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "50% 100%",
      }}
    />
  </Interactive.Div>
);
