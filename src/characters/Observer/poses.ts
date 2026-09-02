export type PoseName =
  | "neutral"
  | "point"
  | "inspect"
  | "recoil"
  | "lieDown";

export type CharacterPose = {
  body: number;
  head: number;
  rearUpperArm: number;
  rearForearm: number;
  frontUpperArm: number;
  frontForearm: number;
  rearThigh: number;
  rearShin: number;
  frontThigh: number;
  frontShin: number;
};

export const POSES: Record<PoseName, CharacterPose> = {
  neutral: {
    body: 0,
    head: 0,
    rearUpperArm: 8,
    rearForearm: -4,
    frontUpperArm: -7,
    frontForearm: 5,
    rearThigh: 2,
    rearShin: -2,
    frontThigh: -2,
    frontShin: 2,
  },
  point: {
    body: -3,
    head: -4,
    rearUpperArm: 18,
    rearForearm: -28,
    frontUpperArm: -76,
    frontForearm: -8,
    rearThigh: 3,
    rearShin: -3,
    frontThigh: -3,
    frontShin: 3,
  },
  inspect: {
    body: 5,
    head: 10,
    rearUpperArm: -34,
    rearForearm: -58,
    frontUpperArm: 31,
    frontForearm: 74,
    rearThigh: 4,
    rearShin: -4,
    frontThigh: -4,
    frontShin: 4,
  },
  recoil: {
    body: -14,
    head: -11,
    rearUpperArm: -128,
    rearForearm: 34,
    frontUpperArm: -48,
    frontForearm: -72,
    rearThigh: 22,
    rearShin: -28,
    frontThigh: -18,
    frontShin: 24,
  },
  lieDown: {
    body: -78,
    head: 10,
    rearUpperArm: 16,
    rearForearm: -8,
    frontUpperArm: -10,
    frontForearm: 8,
    rearThigh: 7,
    rearShin: -7,
    frontThigh: -7,
    frontShin: 7,
  },
};

export const mixPose = (
  from: CharacterPose,
  to: CharacterPose,
  progress: number,
): CharacterPose => {
  const eased = progress * progress * (3 - 2 * progress);
  return Object.fromEntries(
    Object.keys(from).map((key) => {
      const poseKey = key as keyof CharacterPose;
      return [poseKey, from[poseKey] + (to[poseKey] - from[poseKey]) * eased];
    }),
  ) as CharacterPose;
};

