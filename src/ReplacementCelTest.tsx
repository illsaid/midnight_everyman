import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export type ReplacementCelTestProps = {
  showLabels: boolean;
};

const Background: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: "#ebe2cb"}}>
    <div
      style={{
        position: "absolute",
        left: 96,
        top: 76,
        width: 1728,
        height: 928,
        border: "9px solid #252622",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 174,
        top: 172,
        width: 620,
        height: 642,
        backgroundColor: "#d16e55",
        clipPath: "polygon(3% 12%, 92% 0, 100% 87%, 0 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 170,
        top: 132,
        width: 690,
        height: 666,
        backgroundColor: "#4c7c7a",
        clipPath: "polygon(0 0, 100% 11%, 87% 100%, 9% 91%)",
      }}
    />
  </AbsoluteFill>
);

const Cel: React.FC<{
  name: "neutral" | "recoil";
  opacity: number;
  scale: number;
  translate: string;
  rotate: string;
}> = ({name, opacity, scale, translate, rotate}) => (
  <Interactive.Div
    name={`${name} replacement cel`}
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: 1254,
      height: 1254,
      opacity,
      scale,
      translate,
      rotate,
      transformOrigin: "50% 82%",
      zIndex: 3,
    }}
  >
    <Img
      name={`${name} cel image`}
      src={staticFile(`characters/observer/${name}.png`)}
      style={{width: "100%", height: "100%", objectFit: "contain"}}
    />
  </Interactive.Div>
);

export const ReplacementCelTest: React.FC<ReplacementCelTestProps> = ({
  showLabels,
}) => {
  const frame = useCurrentFrame();
  const steppedFrame = Math.floor(frame / 2) * 2;
  const recoilVisible = steppedFrame >= 60 && steppedFrame < 100;

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        backgroundColor: "#ebe2cb",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Background />

      <Cel
        name="neutral"
        opacity={recoilVisible ? 0 : 1}
        translate={interpolate(
          steppedFrame,
          [0, 38, 58, 100, 119],
          ["332px -128px", "332px -128px", "300px -128px", "360px -128px", "332px -128px"],
          {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        )}
        scale={interpolate(
          steppedFrame,
          [0, 38, 58, 100, 119],
          [0.76, 0.76, 0.72, 0.8, 0.76],
          {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          },
        )}
        rotate={interpolate(
          steppedFrame,
          [0, 42, 58, 100, 119],
          ["0deg", "0deg", "-3deg", "2deg", "0deg"],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        )}
      />

      <Cel
        name="recoil"
        opacity={recoilVisible ? 1 : 0}
        translate={interpolate(
          steppedFrame,
          [58, 62, 88, 100],
          ["325px -122px", "360px -152px", "380px -162px", "350px -132px"],
          {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        )}
        scale={interpolate(
          steppedFrame,
          [58, 64, 88, 100],
          [0.72, 0.83, 0.83, 0.76],
          {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          },
        )}
        rotate={interpolate(
          steppedFrame,
          [58, 64, 88, 100],
          ["-5deg", "0deg", "2deg", "0deg"],
          {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        )}
      />

      {showLabels ? (
        <>
          <Interactive.Div
            name="Experiment title"
            style={{
              position: "absolute",
              left: 122,
              top: 108,
              zIndex: 5,
              color: "#252622",
              fontSize: 35,
              fontWeight: 800,
              letterSpacing: 7,
            }}
          >
            REPLACEMENT CEL TEST 01
          </Interactive.Div>
          <Interactive.Div
            name="Pose label"
            style={{
              position: "absolute",
              left: 122,
              bottom: 18,
              zIndex: 5,
              color: "#252622",
              fontSize: 27,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            {recoilVisible ? "EXTREME RECOIL CEL" : "NEUTRAL CEL"}
          </Interactive.Div>
        </>
      ) : null}

      <svg
        viewBox="0 0 1920 1080"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 9,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          opacity: 0.1,
        }}
      >
        <filter id="cel-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="3"
            seed="12"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="1920" height="1080" filter="url(#cel-paper-noise)" />
      </svg>
      <AbsoluteFill
        style={{
          zIndex: 10,
          pointerEvents: "none",
          boxShadow: "inset 0 0 100px rgba(28, 26, 20, 0.42)",
          opacity: 0.66,
        }}
      />
    </AbsoluteFill>
  );
};
