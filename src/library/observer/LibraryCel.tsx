import {Img, Interactive, staticFile, type EffectsProp} from "remotion";
import {observerCels, type ObserverCelId} from "./cels";

/**
 * Places a registered cel by its ground-contact anchor.
 *
 * `stageX` / `stageY` are where the character's feet go on the 1920x1080
 * stage. The component derives the box from the cel's own measured geometry,
 * so a cel with an outstretched arm and a cel standing straight both land with
 * their feet on the same mark. Nothing here is tuned per pose - if a cel sits
 * wrong, the registry entry is wrong, not the call site.
 *
 * `from` / `durationInFrames` are the hold window, expressed relative to the
 * enclosing beat. They are Sequence-native, so each cel is a draggable track
 * in the Studio timeline and mounting is a hard cut.
 */
export const LibraryCel: React.FC<{
  cel: ObserverCelId;
  stageX: number;
  stageY: number;
  from?: number;
  durationInFrames?: number;
  /** Multiplies the cel's registered nativeScale. 1 = drawn size. */
  scale?: number;
  opacity?: number;
  rotate?: string;
  translate?: string;
  /** Mirrors the drawing. The anchor mirrors with it. */
  flip?: boolean;
  effects?: EffectsProp;
}> = ({
  cel,
  stageX,
  stageY,
  from,
  durationInFrames,
  scale = 1,
  opacity = 1,
  rotate = "0deg",
  translate = "0px 0px",
  flip = false,
  effects,
}) => {
  const def = observerCels[cel];
  const [canvasWidth, canvasHeight] = def.canvas;
  const [anchorX, anchorY] = def.anchor;

  const drawn = def.nativeScale * scale;
  const width = canvasWidth * drawn;
  const height = canvasHeight * drawn;

  // Mirroring moves the anchor to the opposite side of the canvas.
  const effectiveAnchorX = flip ? 1 - anchorX : anchorX;

  return (
    <Interactive.Div
      name={`Observer: ${cel}`}
      from={from}
      durationInFrames={durationInFrames}
      showInTimeline
      style={{
        position: "absolute",
        left: stageX - effectiveAnchorX * width,
        top: stageY - anchorY * height,
        width,
        height,
        opacity,
        rotate,
        translate,
        // Rotation pivots on the feet, which is what a drawing resting on the
        // ground should do.
        transformOrigin: `${effectiveAnchorX * 100}% ${anchorY * 100}%`,
        zIndex: 5,
      }}
    >
      <Img
        name={`${cel} cel`}
        src={staticFile(def.file)}
        effects={effects}
        style={{
          width: "100%",
          height: "100%",
          // Mirror the artwork inside its own box. The box was already placed
          // using the mirrored anchor, so the feet stay on the mark.
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      />
    </Interactive.Div>
  );
};
