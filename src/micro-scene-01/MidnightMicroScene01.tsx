import {AbsoluteFill, Sequence, useCurrentFrame} from "remotion";
import {BeatOne} from "./BeatOne";
import {BeatThree} from "./BeatThree";
import {BeatTwo} from "./BeatTwo";

/**
 * Paper grain and edge falloff.
 *
 * The turbulence seed advances on twos, so the grain resettles with the
 * character rather than sitting over the frame as a fixed decal. Holding the
 * seed still is what made earlier renders read as flat PNGs on a background.
 *
 * This is deliberately an SVG filter and not a `<Solid>` carrying
 * `@remotion/effects`. Introducing any canvas into the frame flips Chrome to
 * LCD subpixel antialiasing and puts colour fringes on every letter of the
 * typography; no CSS on the React side suppresses it. Effects remain correct
 * for cel- and prop-level work, where no text is involved.
 */
const Finish: React.FC = () => {
  const frame = useCurrentFrame();
  const grainSeed = Math.floor(frame / 2) * 2;

  return (
    <>
      <svg
        viewBox="0 0 1920 1080"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 90,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          opacity: 0.09,
        }}
      >
        <filter id="micro-scene-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.66"
            numOctaves="3"
            seed={grainSeed}
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="1920" height="1080" filter="url(#micro-scene-paper-noise)" />
      </svg>
      <AbsoluteFill
        style={{
          zIndex: 91,
          pointerEvents: "none",
          boxShadow: "inset 0 0 95px rgba(31, 28, 20, 0.38)",
          opacity: 0.62,
        }}
      />
    </>
  );
};

/**
 * `showText` strips the headline typography only - the copy a compositor would
 * naturally re-set in an external editor. The diagram labels inside beat two
 * (the numerals and their captions) stay, because they are locked to the pulse
 * graphics and carry the information the scene exists to deliver.
 */
export const MidnightMicroScene01: React.FC<{showText?: boolean}> = ({
  showText = true,
}) => (
  <AbsoluteFill
    style={{
      backgroundColor: "#eee5cf",
      color: "#242622",
      fontFamily: "Arial, Helvetica, sans-serif",
      overflow: "hidden",
    }}
  >
    <Sequence durationInFrames={108} name="Beat 1 - Alarm sounds">
      <BeatOne showText={showText} />
    </Sequence>
    <Sequence from={108} durationInFrames={132} name="Beat 2 - Pattern comparison">
      <BeatTwo showText={showText} />
    </Sequence>
    <Sequence from={240} durationInFrames={120} name="Beat 3 - Correct response">
      <BeatThree showText={showText} />
    </Sequence>
    <Finish />
  </AbsoluteFill>
);
