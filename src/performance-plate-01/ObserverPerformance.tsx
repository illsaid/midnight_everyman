import {colorKey} from "@remotion/effects/color-key";
import {Video} from "@remotion/media";
import {Interactive, staticFile} from "remotion";
import {CelActionBaseline} from "./CelActionBaseline";

export const PERFORMANCE_CLIP_PATH =
  "performance/incoming/observer-reach-stop-recoil-green-v1.mp4";

export type ObserverPerformanceProps = {
  readonly clip?: string;
  readonly stageX: number;
  readonly baselineY: number;
  readonly height: number;
  readonly flip?: boolean;
  readonly keyColor?: string;
  readonly similarity?: number;
  readonly smoothness?: number;
  readonly spillSuppression?: number;
  readonly subjectHeightRatio?: number;
  readonly subjectBaselineRatio?: number;
  readonly showFallback?: boolean;
};

/**
 * Reusable character-only performance plate.
 *
 * Acquisition convention: 16:9 locked frame, full figure centered, body fills
 * 82% of frame height, feet land at 92% of frame height, chroma #00B140.
 * These two ratios let stageX, baselineY and height retain the same meaning as
 * CharacterCel without shot-specific cropping.
 */
export const ObserverPerformance: React.FC<ObserverPerformanceProps> = ({
  clip = "",
  stageX,
  baselineY,
  height,
  flip = false,
  keyColor = "#00B140",
  similarity = 0.18,
  smoothness = 0.08,
  spillSuppression = 0.3,
  subjectHeightRatio = 0.82,
  subjectBaselineRatio = 0.92,
  showFallback = true,
}) => {
  if (!clip) {
    return showFallback ? <CelActionBaseline /> : null;
  }

  const plateHeight = height / subjectHeightRatio;
  const plateWidth = (plateHeight * 16) / 9;

  return (
    <Interactive.Div
      name="Observer performance plate"
      style={{
        position: "absolute",
        left: stageX - plateWidth / 2,
        top: baselineY - plateHeight * subjectBaselineRatio,
        width: plateWidth,
        height: plateHeight,
        scale: flip ? "-1 1" : 1,
        transformOrigin: "50% 100%",
        zIndex: 5,
      }}
    >
      <Video
        src={staticFile(clip)}
        muted
        effects={[
          colorKey({
            keyColor,
            similarity,
            smoothness,
            spillSuppression,
          }),
        ]}
        style={{width: "100%", height: "100%"}}
        objectFit="contain"
      />
    </Interactive.Div>
  );
};
