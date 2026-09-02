import {Easing, interpolate, useCurrentFrame} from "remotion";
import {CharacterCel} from "./CharacterCel";

/**
 * Character staging, isolated from sets, props and typography.
 *
 * These components are the single source of truth for where the Observer is
 * and what he is doing. They are consumed twice:
 *
 *   1. by the beats, to render the fully composed scene in Remotion, and
 *   2. by `ObserverAlarmPass`, to render a character-only plate over a
 *      transparent or chroma background for compositing in an external editor.
 *
 * Both consumers therefore stage the character identically by construction.
 * Do not inline character placement into a beat - it will drift from the plate.
 */

export const BEAT_ONE_DURATION = 108;
export const BEAT_TWO_DURATION = 132;
export const BEAT_THREE_DURATION = 120;

/** Frame within beat one where the neutral cel cuts to the startled cel. */
export const CEL_SWAP_FRAME = 42;

/** Frame within beat three where the reach cuts to the self-correction. */
export const RECOIL_FRAME = 36;

/** Frame within beat three where the scene cuts from interior to exterior. */
export const EXIT_FRAME = 78;

export const BeatOneCharacters: React.FC = () => {
  const steppedFrame = Math.floor(useCurrentFrame() / 2) * 2;

  return (
    <>
      <CharacterCel
        pose="neutral-alert"
        stageX={780}
        height={675}
        from={0}
        durationInFrames={CEL_SWAP_FRAME}
        translate={interpolate(
          steppedFrame,
          [0, 34, 40],
          ["0px 0px", "0px 0px", "8px 0px"],
          {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
        )}
      />
      <CharacterCel
        pose="startled-alarm"
        stageX={790}
        height={700}
        from={CEL_SWAP_FRAME}
        durationInFrames={BEAT_ONE_DURATION - CEL_SWAP_FRAME}
        scale={interpolate(steppedFrame, [42, 50], [0.94, 1], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          output: "perceptual-scale",
        })}
      />
    </>
  );
};

export const BeatTwoCharacters: React.FC = () => {
  const steppedFrame = Math.floor(useCurrentFrame() / 2) * 2;

  return (
    <CharacterCel
      pose="listen-count"
      stageX={960}
      height={720}
      from={0}
      durationInFrames={BEAT_TWO_DURATION}
      translate={interpolate(
        steppedFrame,
        [0, 14, 104, 126],
        ["0px 22px", "0px 0px", "0px 0px", "0px 18px"],
        {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      )}
    />
  );
};

export const BeatThreeCharacters: React.FC = () => {
  const steppedFrame = Math.floor(useCurrentFrame() / 2) * 2;

  return (
    <>
      <CharacterCel
        pose="reach-extinguisher"
        stageX={710}
        height={685}
        flip
        from={0}
        durationInFrames={RECOIL_FRAME}
        translate={interpolate(
          steppedFrame,
          [0, 26, 34],
          ["90px 0px", "20px 0px", "0px 0px"],
          {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        )}
      />
      <CharacterCel
        pose="self-correct-recoil"
        stageX={815}
        height={705}
        from={RECOIL_FRAME}
        durationInFrames={EXIT_FRAME - RECOIL_FRAME}
        scale={interpolate(steppedFrame, [36, 44], [0.93, 1], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          output: "perceptual-scale",
        })}
        rotate={interpolate(steppedFrame, [36, 46], ["-4deg", "0deg"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
      />
      <CharacterCel
        pose="outside-phone"
        stageX={1380}
        baselineY={980}
        height={715}
        from={EXIT_FRAME}
        durationInFrames={BEAT_THREE_DURATION - EXIT_FRAME}
        translate={interpolate(steppedFrame, [78, 90], ["50px 0px", "0px 0px"], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
      />
    </>
  );
};
