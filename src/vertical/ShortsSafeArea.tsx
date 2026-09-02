import {AbsoluteFill} from "remotion";

export const SHORT_WIDTH = 1080;
export const SHORT_HEIGHT = 1920;

/**
 * YouTube Shorts interface exclusion zones.
 *
 * The player draws the channel name, title, description and engagement icons
 * over the video. Reported figures move as YouTube changes the interface, so
 * these are deliberately conservative: roughly 225px of chrome at the top and
 * roughly 575px at the bottom, plus a column of action buttons down the right.
 *
 * The consequence is worth stating plainly, because it is not obvious: the
 * genuinely safe region of a 1080x1920 Short is about 1080x1120. That is very
 * close to SQUARE. A Short is not a tall canvas to stage into - it is a square
 * canvas with decorative bleed above and below.
 */
export const SAFE_TOP = 225;
export const SAFE_BOTTOM = SHORT_HEIGHT - 575;
export const SAFE_RIGHT = SHORT_WIDTH - 150;
export const SAFE_LEFT = 40;

export const SAFE_HEIGHT = SAFE_BOTTOM - SAFE_TOP;

/** Diagnostic overlay. Never include this in a delivered render. */
export const SafeAreaGuides: React.FC = () => (
  <AbsoluteFill style={{zIndex: 99, pointerEvents: "none"}}>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: SAFE_TOP,
        backgroundColor: "rgba(189, 78, 61, 0.28)",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: SAFE_BOTTOM,
        bottom: 0,
        backgroundColor: "rgba(189, 78, 61, 0.28)",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: SAFE_RIGHT,
        right: 0,
        top: SAFE_TOP,
        height: SAFE_HEIGHT,
        backgroundColor: "rgba(189, 78, 61, 0.18)",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: SAFE_LEFT,
        top: SAFE_TOP,
        width: SAFE_RIGHT - SAFE_LEFT,
        height: SAFE_HEIGHT,
        border: "3px dashed rgba(53, 111, 112, 0.9)",
      }}
    />
  </AbsoluteFill>
);
