import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {CeilingAlarm} from "./AlarmProps";
import {BeatOneCharacters} from "./CharacterStaging";
import {HouseInterior} from "./HouseInterior";

export const BeatOne: React.FC<{showText?: boolean}> = ({showText = true}) => {
  const frame = useCurrentFrame();
  const steppedFrame = Math.floor(frame / 2) * 2;

  return (
    <AbsoluteFill style={{overflow: "hidden"}}>
      <HouseInterior />
      <CeilingAlarm frame={steppedFrame} />
      <BeatOneCharacters />
      {showText ? (
      <Interactive.Div
        name="Beat one headline"
        style={{
          position: "absolute",
          left: 112,
          top: 92,
          zIndex: 10,
          color: "#242622",
          fontSize: 52,
          fontWeight: 900,
          letterSpacing: 4,
          opacity: interpolate(frame, [0, 8, 80, 98], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        AN ALARM SOUNDS.
      </Interactive.Div>
      ) : null}
      {showText ? (
      <Interactive.Div
        name="Beat one instruction"
        style={{
          position: "absolute",
          right: 535,
          bottom: 118,
          zIndex: 10,
          color: "#242622",
          fontSize: 60,
          fontWeight: 900,
          letterSpacing: 8,
          opacity: interpolate(frame, [70, 78, 104], [0, 1, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [70, 84], ["-24px 0px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        GET OUT.
      </Interactive.Div>
      ) : null}
    </AbsoluteFill>
  );
};

