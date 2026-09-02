import {CharacterPose, mixPose, POSES, PoseName} from "./poses";

type PoseKeyframe = {
  frame: number;
  pose: PoseName;
};

const LAB_KEYFRAMES: PoseKeyframe[] = [
  {frame: 0, pose: "neutral"},
  {frame: 28, pose: "neutral"},
  {frame: 43, pose: "point"},
  {frame: 58, pose: "point"},
  {frame: 75, pose: "inspect"},
  {frame: 92, pose: "inspect"},
  {frame: 107, pose: "recoil"},
  {frame: 132, pose: "recoil"},
  {frame: 151, pose: "neutral"},
  {frame: 185, pose: "neutral"},
  {frame: 204, pose: "point"},
  {frame: 222, pose: "point"},
  {frame: 239, pose: "neutral"},
];

export const getLabPose = (frame: number): CharacterPose => {
  const steppedFrame = Math.floor(frame / 2) * 2;
  const nextIndex = LAB_KEYFRAMES.findIndex(
    (keyframe) => keyframe.frame >= steppedFrame,
  );

  if (nextIndex <= 0) {
    return POSES[LAB_KEYFRAMES[0].pose];
  }

  if (nextIndex === -1) {
    return POSES[LAB_KEYFRAMES[LAB_KEYFRAMES.length - 1].pose];
  }

  const previous = LAB_KEYFRAMES[nextIndex - 1];
  const next = LAB_KEYFRAMES[nextIndex];
  const progress =
    (steppedFrame - previous.frame) / (next.frame - previous.frame);

  return mixPose(POSES[previous.pose], POSES[next.pose], progress);
};

