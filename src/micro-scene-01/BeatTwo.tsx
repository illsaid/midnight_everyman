import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {BeatTwoCharacters} from "./CharacterStaging";

const PulseGroup: React.FC<{
  count: 3 | 4;
  color: string;
  side: "left" | "right";
  frame: number;
}> = ({count, color, side, frame}) => (
  <Interactive.Div
    name={`${count}-pulse group`}
    style={{
      position: "absolute",
      left: side === "left" ? 105 : 1285,
      top: 285,
      width: 530,
      height: 410,
      zIndex: 5,
      opacity: interpolate(frame, [8, 18, 118, 130], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 530,
        display: "flex",
        justifyContent: "center",
        gap: 34,
        alignItems: "flex-end",
      }}
    >
      {Array.from({length: count}).map((_, index) => (
        <div
          key={index}
          style={{
            width: 28,
            height: 128 + index * 25,
            borderRadius: 20,
            backgroundColor: color,
            rotate: side === "left" ? `${-10 + index * 6}deg` : `${10 - index * 5}deg`,
            scale: interpolate(frame % 28, [index * 3, index * 3 + 4, index * 3 + 12], [0.72, 1.08, 1], {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              output: "perceptual-scale",
            }),
          }}
        />
      ))}
    </div>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 196,
        textAlign: "center",
        color,
        fontSize: 170,
        lineHeight: 1,
        fontWeight: 900,
      }}
    >
      {count}
    </div>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 350,
        textAlign: "center",
        color: "#242622",
        fontSize: count === 3 ? 35 : 31,
        fontWeight: 900,
        letterSpacing: 4,
      }}
    >
      {count === 3 ? "SMOKE / FIRE" : "CARBON MONOXIDE"}
    </div>
  </Interactive.Div>
);

export const BeatTwo: React.FC<{showText?: boolean}> = ({showText = true}) => {
  const frame = useCurrentFrame();
  const steppedFrame = Math.floor(frame / 2) * 2;
  return (
    <AbsoluteFill style={{overflow: "hidden", backgroundColor: "#eee5cf"}}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #e4a08d 0%, #eee5cf 42%, #eee5cf 58%, #9bc2bd 100%)",
        }}
      />
      <PulseGroup count={3} color="#bd4e3d" side="left" frame={steppedFrame} />
      <PulseGroup count={4} color="#356f70" side="right" frame={steppedFrame} />
      <BeatTwoCharacters />
      {showText ? (
      <Interactive.Div
        name="Pattern matters title"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 72,
          textAlign: "center",
          color: "#242622",
          fontSize: 50,
          fontWeight: 900,
          letterSpacing: 7,
          opacity: interpolate(frame, [0, 10, 112, 128], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          zIndex: 10,
        }}
      >
        THE PATTERN MATTERS.
      </Interactive.Div>
      ) : null}
    </AbsoluteFill>
  );
};

