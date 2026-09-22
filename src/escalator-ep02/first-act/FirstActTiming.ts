export const FIRST_ACT_FPS = 24;
export const OPENING_REDO_FRAMES = 589;
export const MAIN_VO_TRIM_BEFORE_FRAMES = 513;
export const FIRST_ACT_END_FRAME = 1895;

export const openingCue = {
  cameraman: 256,
  safetyMechanism: 324,
  immediateHalt: 416,
  sabotage: 484,
  machineDanger: 535,
} as const;

/** Absolute composition frames. The retained main VO begins at source frame 513. */
export const cue = {
  stoppedAsDesigned: 590,
  hereAreFour: 644,
  hongKongSlot: 762,
  romeSlot: 879,
  moscowSlot: 970,
  jingzhouSlot: 1069,
  fourRealAccidents: 1178,
  escalatorLooksLikeStaircase: 1294,
  bicycleChain: 1370,
  stripAway: 1400,
  loopingSprockets: 1504,
  returningBeneath: 1546,
  upsideDown: 1577,
  detectorsWatch: 1603,
  switchesWatch: 1649,
  brakesWait: 1697,
  eachLayer: 1758,
  hongKongMarch2017: 1847,
} as const;
