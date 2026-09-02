/**
 * Observer cel registry.
 *
 * Every entry carries the geometry needed to place the drawing without tuning
 * it by eye. `anchor` is the figure's contact point with the ground, measured
 * from the artwork's own alpha channel, normalised against the canvas. It is
 * NOT the centre of the image: on `reachExtinguisher` the outstretched arm
 * pushes the bounding-box centre 94px away from the feet, which is why that
 * cel previously needed a hand-found `stageX` 125px off from its neighbours.
 *
 * Placing by anchor means a new cel drops onto a stage position and lands
 * correctly the first time. That is the entire reason a library is cheaper
 * than redrawing, so anchors are mandatory for every cel added here.
 *
 * `nativeScale` is the factor that renders this drawing at the character's
 * correct height on a 1920x1080 stage. Source sheets still vary in apparent
 * figure height, so extraction calculates this value for every new cel rather
 * than relying on a uniform master-sheet scale.
 */

/** The rhetorical job a cel performs, independent of subject matter. */
export type CelFunction =
  | "establish"
  | "register"
  | "compare"
  | "indicate"
  | "escalate"
  | "wrongMove"
  | "selfCorrect"
  | "resolve"
  | "consider"
  | "uncertain"
  | "protect"
  | "celebrate"
  | "escape"
  | "fatigue"
  | "confront";

export type CelDefinition = {
  readonly file: string;
  /** Intrinsic pixel size of the source PNG. */
  readonly canvas: readonly [number, number];
  /** Ground contact point, normalised to the canvas. Measured, not guessed. */
  readonly anchor: readonly [number, number];
  readonly nativeScale: number;
  readonly facing: "left" | "right";
  readonly fn: CelFunction;
  readonly tags?: readonly string[];
  readonly approval: "approved" | "candidate";
  readonly sourceSheet?: string;
  readonly panel?: number;
};

export const observerCels = {
  neutralAlert: {
    /** Present and waiting. The default hold. */
    file: "characters/observer/alarm/neutral-alert-v1.png",
    canvas: [184, 566],
    anchor: [0.5408, 0.9735],
    nativeScale: 1.1926,
    facing: "right",
    fn: "establish",
    approval: "approved",
  },
  startledAlarm: {
    /** Registers new information arriving from off-screen. */
    file: "characters/observer/alarm/startled-alarm-v1.png",
    canvas: [224, 620],
    anchor: [0.4487, 0.9758],
    nativeScale: 1.129,
    facing: "right",
    fn: "register",
    approval: "approved",
  },
  listenCount: {
    /** Weighs two things against each other. */
    file: "characters/observer/alarm/listen-count-v1.png",
    canvas: [220, 568],
    anchor: [0.3409, 0.9736],
    nativeScale: 1.2676,
    facing: "right",
    fn: "compare",
    approval: "approved",
  },
  reachExtinguisher: {
    /** Begins the instinctive but incorrect action. */
    file: "characters/observer/alarm/reach-extinguisher-v1.png",
    canvas: [387, 522],
    anchor: [0.2532, 0.9713],
    nativeScale: 1.3123,
    facing: "right",
    fn: "wrongMove",
    approval: "approved",
  },
  selfCorrectRecoil: {
    /** Stops the wrong action. Escalation beat. */
    file: "characters/observer/alarm/self-correct-recoil-v1.png",
    canvas: [295, 558],
    anchor: [0.3203, 0.9731],
    nativeScale: 1.2634,
    facing: "right",
    fn: "selfCorrect",
    approval: "approved",
  },
  outsidePhone: {
    /** Composed, acting correctly. Closing beat. */
    file: "characters/observer/alarm/outside-phone-v1.png",
    canvas: [198, 545],
    anchor: [0.4066, 0.9725],
    nativeScale: 1.3119,
    facing: "right",
    fn: "resolve",
    approval: "approved",
  },
  thinkChin: {
    file: "characters/observer/library/think-chin-v1.png",
    canvas: [165, 447],
    anchor: [0.4414, 0.962],
    nativeScale: 1.7032,
    facing: "right",
    fn: "consider",
    tags: ["think", "consider", "hold"],
    approval: "approved",
    sourceSheet: "sheet-a-information",
    panel: 1,
  },
  inspectForward: {
    file: "characters/observer/library/inspect-forward-v1.png",
    canvas: [212, 433],
    anchor: [0.3128, 0.9607],
    nativeScale: 1.7032,
    facing: "right",
    fn: "consider",
    tags: ["inspect", "curious", "look"],
    approval: "approved",
    sourceSheet: "sheet-a-information",
    panel: 2,
  },
  pointRight: {
    file: "characters/observer/library/point-right-v1.png",
    canvas: [308, 442],
    anchor: [0.2729, 0.9593],
    nativeScale: 1.7032,
    facing: "right",
    fn: "indicate",
    tags: ["point", "indicate", "explain"],
    approval: "approved",
    sourceSheet: "sheet-a-information",
    panel: 3,
  },
  presentOpen: {
    file: "characters/observer/library/present-open-v1.png",
    canvas: [282, 436],
    anchor: [0.324, 0.961],
    nativeScale: 1.7032,
    facing: "right",
    fn: "indicate",
    tags: ["present", "explain", "welcome"],
    approval: "approved",
    sourceSheet: "sheet-a-information",
    panel: 4,
  },
  compareHands: {
    file: "characters/observer/library/compare-hands-v1.png",
    canvas: [298, 438],
    anchor: [0.4756, 0.9612],
    nativeScale: 1.7032,
    facing: "right",
    fn: "compare",
    tags: ["compare", "weigh", "choice"],
    approval: "approved",
    sourceSheet: "sheet-a-information",
    panel: 5,
  },
  shrugConfused: {
    file: "characters/observer/library/shrug-confused-v1.png",
    canvas: [270, 435],
    anchor: [0.4571, 0.9609],
    nativeScale: 1.7032,
    facing: "right",
    fn: "uncertain",
    tags: ["shrug", "confused", "uncertain"],
    approval: "approved",
    sourceSheet: "sheet-a-information",
    panel: 6,
  },
  suspiciousSquint: {
    file: "characters/observer/library/suspicious-squint-v1.png",
    canvas: [165, 448],
    anchor: [0.412, 0.9621],
    nativeScale: 1.6588,
    facing: "right",
    fn: "uncertain",
    tags: ["suspicious", "skeptical", "doubt"],
    approval: "approved",
    sourceSheet: "sheet-b-emotion",
    panel: 1,
  },
  shockLarge: {
    file: "characters/observer/library/shock-large-v1.png",
    canvas: [316, 441],
    anchor: [0.6248, 0.9615],
    nativeScale: 1.6588,
    facing: "right",
    fn: "escalate",
    tags: ["shock", "surprise", "extreme"],
    approval: "approved",
    sourceSheet: "sheet-b-emotion",
    panel: 2,
  },
  fearBrace: {
    file: "characters/observer/library/fear-brace-v1.png",
    canvas: [167, 434],
    anchor: [0.431, 0.9608],
    nativeScale: 1.6588,
    facing: "right",
    fn: "protect",
    tags: ["fear", "brace", "danger"],
    approval: "approved",
    sourceSheet: "sheet-b-emotion",
    panel: 3,
  },
  panicHands: {
    file: "characters/observer/library/panic-hands-v1.png",
    canvas: [227, 447],
    anchor: [0.4793, 0.9597],
    nativeScale: 1.6588,
    facing: "right",
    fn: "escalate",
    tags: ["panic", "alarm", "escalate"],
    approval: "approved",
    sourceSheet: "sheet-b-emotion",
    panel: 4,
  },
  joyOpen: {
    file: "characters/observer/library/joy-open-v1.png",
    canvas: [385, 448],
    anchor: [0.4721, 0.9621],
    nativeScale: 1.6588,
    facing: "right",
    fn: "celebrate",
    tags: ["joy", "delight", "celebrate"],
    approval: "approved",
    sourceSheet: "sheet-b-emotion",
    panel: 5,
  },
  reliefSigh: {
    file: "characters/observer/library/relief-sigh-v1.png",
    canvas: [180, 447],
    anchor: [0.4892, 0.9597],
    nativeScale: 1.6588,
    facing: "right",
    fn: "resolve",
    tags: ["relief", "calm", "resolve"],
    approval: "approved",
    sourceSheet: "sheet-b-emotion",
    panel: 6,
  },
  sadSlump: {
    file: "characters/observer/library/sad-slump-v1.png",
    canvas: [180, 424],
    anchor: [0.4323, 0.9575],
    nativeScale: 1.7157,
    facing: "right",
    fn: "register",
    tags: ["sad", "defeat", "slump"],
    approval: "approved",
    sourceSheet: "sheet-c-physical",
    panel: 1,
  },
  angerProtest: {
    file: "characters/observer/library/anger-protest-v1.png",
    canvas: [301, 447],
    anchor: [0.3021, 0.962],
    nativeScale: 1.7157,
    facing: "right",
    fn: "confront",
    tags: ["anger", "protest", "confront"],
    approval: "approved",
    sourceSheet: "sheet-c-physical",
    panel: 2,
  },
  sleepyStanding: {
    file: "characters/observer/library/sleepy-standing-v1.png",
    canvas: [179, 440],
    anchor: [0.4127, 0.9591],
    nativeScale: 1.7157,
    facing: "right",
    fn: "fatigue",
    tags: ["sleepy", "tired", "droop"],
    approval: "approved",
    sourceSheet: "sheet-c-physical",
    panel: 3,
  },
  crouchCover: {
    file: "characters/observer/library/crouch-cover-v1.png",
    canvas: [238, 266],
    anchor: [0.4326, 0.9361],
    nativeScale: 1.7157,
    facing: "right",
    fn: "protect",
    tags: ["crouch", "cover", "danger"],
    approval: "approved",
    sourceSheet: "sheet-c-physical",
    panel: 4,
  },
  runAwayKey: {
    file: "characters/observer/library/run-away-key-v1.png",
    canvas: [365, 405],
    anchor: [0.8372, 0.958],
    nativeScale: 1.7157,
    facing: "right",
    fn: "escape",
    tags: ["run", "escape", "action-key"],
    approval: "approved",
    sourceSheet: "sheet-c-physical",
    panel: 5,
  },
  jumpJoyKey: {
    file: "characters/observer/library/jump-joy-key-v1.png",
    canvas: [293, 380],
    anchor: [0.5, 1.2126],
    nativeScale: 1.7157,
    facing: "right",
    fn: "celebrate",
    tags: ["jump", "joy", "action-key"],
    approval: "approved",
    sourceSheet: "sheet-c-physical",
    panel: 6,
  },
} as const satisfies Record<string, CelDefinition>;

export type ObserverCelId = keyof typeof observerCels;

/** Cels that perform a given rhetorical function. */
export const celsForFunction = (fn: CelFunction): ObserverCelId[] =>
  (Object.keys(observerCels) as ObserverCelId[]).filter(
    (id) => observerCels[id].fn === fn,
  );
