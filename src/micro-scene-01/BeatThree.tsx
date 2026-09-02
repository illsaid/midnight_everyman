import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {ExitArrow, FireExtinguisher} from "./AlarmProps";
import {BeatThreeCharacters, EXIT_FRAME} from "./CharacterStaging";
import {Exterior, HouseInterior} from "./HouseInterior";

export const BeatThree: React.FC<{showText?: boolean}> = ({showText = true}) => {
  const frame = useCurrentFrame();
  const steppedFrame = Math.floor(frame / 2) * 2;
  const outside = steppedFrame >= EXIT_FRAME;

  return (
    <AbsoluteFill style={{overflow: "hidden"}}>
      {outside ? <Exterior /> : <HouseInterior doorOpen={steppedFrame >= 42} />}
      {!outside ? <FireExtinguisher /> : null}
      <BeatThreeCharacters />
      {!outside ? <ExitArrow frame={steppedFrame} /> : null}
      {showText ? (
      <Interactive.Div
        name="Wrong move label"
        style={{
          position: "absolute",
          left: 105,
          top: 92,
          zIndex: 10,
          color: "#242622",
          fontSize: 48,
          fontWeight: 900,
          letterSpacing: 5,
          opacity: interpolate(frame, [8, 14, 50, 60], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        DON&apos;T DELAY.
      </Interactive.Div>
      ) : null}
      {showText ? (
      <Interactive.Div
        name="Final safety instruction"
        style={{
          position: "absolute",
          left: 110,
          bottom: 115,
          zIndex: 10,
          color: "#242622",
          fontSize: 51,
          fontWeight: 900,
          letterSpacing: 5,
          lineHeight: 1.22,
          opacity: interpolate(frame, [78, 86, 119], [0, 1, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [78, 90], ["-28px 0px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        GET OUT.<br />STAY OUT.<br />CALL 911.
      </Interactive.Div>
      ) : null}
    </AbsoluteFill>
  );
};

