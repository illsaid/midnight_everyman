import {AbsoluteFill, Sequence} from "remotion";
import {
  BEAT_ONE_DURATION,
  BEAT_THREE_DURATION,
  BEAT_TWO_DURATION,
  BeatOneCharacters,
  BeatThreeCharacters,
  BeatTwoCharacters,
} from "./CharacterStaging";

export type PassBackground = "transparent" | "chroma";

/** Chroma value chosen to sit far from every colour in the character palette. */
const CHROMA = "#00b140";

/**
 * Character-only plate.
 *
 * Renders exactly the same staging as the composed scene, at the same canvas
 * size and the same frame positions, with no set, prop or typography. Overlay
 * it at 0,0 in an external editor - do not reposition it, or it will no longer
 * agree with the Remotion scene.
 *
 * Chroma is the default because CapCut ignores the alpha side-channel of a VP9
 * WebM and renders the plate on black. The chroma value sits far from every
 * colour in the Observer palette, which contains no green, so the key measures
 * as very nearly lossless. Use `transparent` only for an editor known to
 * honour an alpha channel.
 */
export const ObserverAlarmPass: React.FC<{
  background?: PassBackground;
}> = ({background = "chroma"}) => (
  <AbsoluteFill
    style={{
      backgroundColor: background === "chroma" ? CHROMA : undefined,
      overflow: "hidden",
    }}
  >
    <Sequence durationInFrames={BEAT_ONE_DURATION} name="Beat 1 - characters">
      <BeatOneCharacters />
    </Sequence>
    <Sequence
      from={BEAT_ONE_DURATION}
      durationInFrames={BEAT_TWO_DURATION}
      name="Beat 2 - characters"
    >
      <BeatTwoCharacters />
    </Sequence>
    <Sequence
      from={BEAT_ONE_DURATION + BEAT_TWO_DURATION}
      durationInFrames={BEAT_THREE_DURATION}
      name="Beat 3 - characters"
    >
      <BeatThreeCharacters />
    </Sequence>
  </AbsoluteFill>
);
