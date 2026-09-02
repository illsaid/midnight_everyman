import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  random,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {getLabPose} from "./characters/Observer/actions";
import {
  ExpressionName,
  Observer,
  PaletteName,
} from "./characters/Observer/Observer";

export type CharacterLabProps = {
  title: string;
  showLabels: boolean;
  motionIntensity: number;
};

const Backdrop: React.FC<{variant: number}> = ({variant}) => {
  if (variant === 1) {
    return (
      <AbsoluteFill style={{backgroundColor: "#d5a84c"}}>
        <div style={{position: "absolute", inset: "9% 7%", border: "9px solid #292925", backgroundColor: "#efe6cd"}} />
        <div style={{position: "absolute", left: 110, top: 170, width: 490, height: 600, backgroundColor: "#477c7a", clipPath: "polygon(0 8%, 92% 0, 100% 92%, 9% 100%)"}} />
        <div style={{position: "absolute", right: 130, top: 120, width: 620, height: 470, borderRadius: "50%", backgroundColor: "#d66c50"}} />
      </AbsoluteFill>
    );
  }

  if (variant === 2) {
    return (
      <AbsoluteFill style={{backgroundColor: "#273143"}}>
        <div style={{position: "absolute", left: -80, top: 120, width: 940, height: 740, borderRadius: "50%", backgroundColor: "#425a6d"}} />
        <div style={{position: "absolute", right: 110, top: 90, width: 720, height: 720, backgroundColor: "#b9535a", clipPath: "polygon(50% 0, 100% 46%, 72% 100%, 8% 80%, 0 20%)"}} />
        <div style={{position: "absolute", left: 160, bottom: 90, width: 1600, height: 18, backgroundColor: "#e1bd61"}} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{backgroundColor: "#eee5cf"}}>
      <div style={{position: "absolute", left: 80, top: 70, width: 1760, height: 860, border: "8px solid #252622"}} />
      <div style={{position: "absolute", left: 160, top: 160, width: 590, height: 610, backgroundColor: "#d46b4f", clipPath: "polygon(5% 12%, 92% 0, 100% 89%, 0 100%)"}} />
      <div style={{position: "absolute", right: 170, top: 120, width: 690, height: 650, backgroundColor: "#4d7c7b", clipPath: "polygon(0 0, 100% 10%, 87% 100%, 9% 91%)"}} />
    </AbsoluteFill>
  );
};

const currentExpression = (frame: number): ExpressionName => {
  if (frame >= 92 && frame < 145) return "alarmed";
  if (frame >= 58 && frame < 92) return "skeptical";
  if (frame >= 185) return "delighted";
  return "neutral";
};

const currentAction = (frame: number) => {
  if (frame < 32) return "NEUTRAL / IDLE";
  if (frame < 60) return "POINT";
  if (frame < 94) return "INSPECT PROP";
  if (frame < 132) return "RECOIL";
  if (frame < 185) return "SCALE + OCCLUDE";
  return "PALETTE + RESET";
};

export const CharacterLab: React.FC<CharacterLabProps> = ({
  title,
  showLabels,
  motionIntensity,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const steppedFrame = Math.floor(frame / 2) * 2;
  const pose = getLabPose(steppedFrame);
  const backgroundVariant = frame < 132 ? 0 : frame < 185 ? 1 : 2;
  const palette: PaletteName = frame < 185 ? "broadcast" : "night";
  const blinkCycle = steppedFrame % 83;

  return (
    <AbsoluteFill style={{backgroundColor: "#eee5cf", overflow: "hidden", fontFamily: "Arial, Helvetica, sans-serif"}}>
      <Backdrop variant={backgroundVariant} />

      <Interactive.Div
        name="Observer character"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 420,
          height: 900,
          zIndex: 2,
          translate: interpolate(
            steppedFrame,
            [0, 115, 151, 178, 210, 239],
            ["690px 105px", "690px 105px", "1330px -160px", "1330px -160px", "720px 105px", "690px 105px"],
            {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          ),
          scale: interpolate(
            steppedFrame,
            [0, 115, 151, 178, 210, 239],
            [0.93, 0.93, 0.2, 0.2, 0.93, 0.93],
            {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              output: "perceptual-scale",
            },
          ),
          rotate: `${(random(`character-jitter-${Math.floor(frame / 2)}`) - 0.5) * motionIntensity}deg`,
          transformOrigin: "50% 100%",
        }}
      >
        <Observer
          pose={pose}
          expression={currentExpression(steppedFrame)}
          palette={palette}
          blink={blinkCycle > 78}
          showClock={steppedFrame >= 58 && steppedFrame < 96}
        />
      </Interactive.Div>

      {frame >= 132 && frame < 185 ? (
        <Interactive.Div
          name="Foreground counter"
          style={{
            position: "absolute",
            left: 1010,
            bottom: 70,
            width: 760,
            height: 315,
            zIndex: 3,
            backgroundColor: "#282925",
            clipPath: "polygon(4% 0, 100% 10%, 94% 100%, 0 92%)",
            borderTop: "18px solid #efe6cd",
          }}
        />
      ) : null}

      {showLabels ? (
        <>
          <Interactive.Div
            name="Lab title"
            style={{
              position: "absolute",
              left: 120,
              top: 118,
              zIndex: 5,
              color: backgroundVariant === 2 ? "#efe6cd" : "#242521",
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: 7,
            }}
          >
            {title}
          </Interactive.Div>
          <Interactive.Div
            name="Current action"
            style={{
              position: "absolute",
              left: 120,
              bottom: 100,
              zIndex: 5,
              color: "#242521",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            {currentAction(frame)} · {Math.round(frame / fps * 10) / 10}s
          </Interactive.Div>
        </>
      ) : null}

      <svg viewBox="0 0 1920 1080" width="100%" height="100%" style={{position: "absolute", inset: 0, zIndex: 9, pointerEvents: "none", mixBlendMode: "multiply", opacity: 0.12}}>
        <filter id="paper-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="8" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="1920" height="1080" filter="url(#paper-noise)" />
      </svg>
      <AbsoluteFill style={{zIndex: 10, pointerEvents: "none", boxShadow: "inset 0 0 110px rgba(25, 24, 19, 0.48)", opacity: 0.72}} />
    </AbsoluteFill>
  );
};
