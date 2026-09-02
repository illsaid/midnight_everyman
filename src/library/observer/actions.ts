import type {ObserverCelId} from "./cels";

export type ObserverActionDefinition = {
  readonly id: string;
  readonly label: string;
  readonly durationInFrames: number;
  readonly loop: boolean;
  readonly directional: boolean;
  readonly anchorBehavior: string;
  readonly phases: readonly {
    readonly cel: ObserverCelId;
    readonly from: number;
    readonly durationInFrames: number;
  }[];
  readonly description: string;
};

export const observerActions = {
  runAway: {
    id: "run-away",
    label: "RUN AWAY",
    durationInFrames: 60,
    loop: false,
    directional: true,
    anchorBehavior: "Registered feet; translated 1750 px toward the exit.",
    phases: [
      {cel: "shockLarge", from: 0, durationInFrames: 10},
      {cel: "fearBrace", from: 10, durationInFrames: 7},
      {cel: "runAwayKey", from: 17, durationInFrames: 43},
    ],
    description: "Register danger, brace, then exit in one decisive burst.",
  },
  jumpForJoy: {
    id: "jump-for-joy",
    label: "JUMP FOR JOY",
    durationInFrames: 60,
    loop: false,
    directional: false,
    anchorBehavior: "Registered ground anchor follows a 180 px vertical arc.",
    phases: [
      {cel: "joyOpen", from: 0, durationInFrames: 12},
      {cel: "jumpJoyKey", from: 12, durationInFrames: 33},
      {cel: "joyOpen", from: 45, durationInFrames: 15},
    ],
    description: "Open celebration, airborne extreme, then a clean landing.",
  },
} as const satisfies Record<string, ObserverActionDefinition>;

export type ObserverActionId = keyof typeof observerActions;
