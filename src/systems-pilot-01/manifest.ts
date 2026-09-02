export const FPS = 24;
export const TOTAL_FRAMES = 1518;
export const VOICEOVER_FILE = "voiceover/pilot-01/wrong-fuel-systems-v1.mp3";

export const scenes = [
  {id: "mismatch", start: 0, duration: 190, title: "THE MISMATCH"},
  {id: "stop", start: 190, duration: 151, title: "DON'T START IT"},
  {id: "circulation", start: 341, duration: 195, title: "CONTAINED → CIRCULATING"},
  {id: "comparison", start: 536, duration: 329, title: "TWO FAILURE PATTERNS"},
  {id: "rule", start: 865, duration: 222, title: "THE RULE"},
  {id: "decision", start: 1087, duration: 250, title: "WHAT TO DO"},
  {id: "conclusion", start: 1337, duration: 181, title: "STOP BEFORE YOU START"},
] as const;

export const palette = {
  paper: "#EEE5CF",
  paperLight: "#F7F0DE",
  ink: "#242622",
  teal: "#356F70",
  tealLight: "#88AAA5",
  coral: "#E66B51",
  coralDark: "#B94738",
  mustard: "#E5B83F",
  white: "#FFF9E9",
  gray: "#8B8C82",
} as const;

export type SceneManifestItem = (typeof scenes)[number];
