import {Easing, Interactive, interpolate} from "remotion";

export const CeilingAlarm: React.FC<{
  frame: number;
  x?: number;
  y?: number;
}> = ({frame, x = 940, y = 90}) => {
  const steppedFrame = Math.floor(frame / 2) * 2;
  return (
    <Interactive.Svg
      name="Ceiling alarm"
      viewBox="0 0 360 230"
      style={{
        position: "absolute",
        left: x - 180,
        top: y,
        width: 360,
        height: 230,
        zIndex: 7,
        scale: interpolate(steppedFrame % 24, [0, 4, 12, 23], [1, 1.07, 1, 1], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          output: "perceptual-scale",
        }),
      }}
    >
      <ellipse cx="180" cy="55" rx="92" ry="39" fill="#242622" />
      <ellipse cx="180" cy="47" rx="84" ry="35" fill="#f4eddc" stroke="#242622" strokeWidth="7" />
      <ellipse cx="180" cy="49" rx="27" ry="12" fill="#d16e55" stroke="#242622" strokeWidth="5" />
      {[0, 1, 2].map((index) => (
        <path
          key={index}
          d={`M ${95 + index * 28} 88 Q ${75 + index * 28} 130 ${53 + index * 30} 158`}
          fill="none"
          stroke="#d16e55"
          strokeWidth="12"
          strokeLinecap="round"
          opacity={interpolate(
            steppedFrame % 24,
            [index * 3, index * 3 + 2, index * 3 + 9, index * 3 + 12],
            [0, 1, 1, 0],
            {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
          )}
        />
      ))}
      {[0, 1, 2].map((index) => (
        <path
          key={index}
          d={`M ${265 - index * 28} 88 Q ${285 - index * 28} 130 ${307 - index * 30} 158`}
          fill="none"
          stroke="#d16e55"
          strokeWidth="12"
          strokeLinecap="round"
          opacity={interpolate(
            steppedFrame % 24,
            [index * 3, index * 3 + 2, index * 3 + 9, index * 3 + 12],
            [0, 1, 1, 0],
            {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
          )}
        />
      ))}
    </Interactive.Svg>
  );
};

export const FireExtinguisher: React.FC<{x?: number; y?: number}> = ({
  x = 175,
  y = 300,
}) => (
  <Interactive.Svg
    name="Fire extinguisher"
    viewBox="0 0 250 520"
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: 250,
      height: 520,
      zIndex: 4,
    }}
  >
    <rect x="40" y="64" width="172" height="415" rx="38" fill="#242622" opacity="0.18" />
    <rect x="28" y="52" width="172" height="415" rx="38" fill="#c94f45" stroke="#242622" strokeWidth="10" />
    <path d="M74 52 L74 17 L151 17 L166 51" fill="#242622" />
    <path d="M91 19 L145 5 L172 26 L154 43" fill="#242622" />
    <path d="M166 39 C226 62 218 132 214 202" fill="none" stroke="#242622" strokeWidth="12" />
    <rect x="55" y="165" width="118" height="155" rx="5" fill="#eee5cf" stroke="#242622" strokeWidth="7" />
    <path d="M76 205 L153 205 M76 234 L153 234 M76 263 L137 263" stroke="#d16e55" strokeWidth="10" />
  </Interactive.Svg>
);

export const ExitArrow: React.FC<{frame: number}> = ({frame}) => (
  <Interactive.Div
    name="Exit arrow"
    style={{
      position: "absolute",
      right: 450,
      top: 420,
      width: 300,
      height: 120,
      backgroundColor: "#d5a84c",
      clipPath: "polygon(0 31%, 64% 31%, 64% 0, 100% 50%, 64% 100%, 64% 69%, 0 69%)",
      zIndex: 8,
      opacity: interpolate(frame, [36, 42, 70, 76], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      translate: interpolate(frame, [36, 52], ["-35px 0px", "0px 0px"], {
        easing: Easing.bezier(0.16, 1, 0.3, 1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    }}
  />
);

