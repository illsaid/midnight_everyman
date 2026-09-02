import {Img, staticFile} from "remotion";

export const RasterCutout: React.FC<{
  file: string;
  canvas: readonly [number, number];
  bounds: readonly [number, number, number, number];
  width: number;
  left: number;
  bottom: number;
  flip?: boolean;
  rotate?: string;
  zIndex?: number;
}> = ({
  file,
  canvas,
  bounds,
  width,
  left,
  bottom,
  flip = false,
  rotate = "0deg",
  zIndex = 2,
}) => {
  const [canvasWidth, canvasHeight] = canvas;
  const [boundLeft, boundTop, boundRight, boundBottom] = bounds;
  const scale = width / (boundRight - boundLeft);
  const height = (boundBottom - boundTop) * scale;

  return (
    <div
      style={{
        position: "absolute",
        left,
        bottom,
        width,
        height,
        overflow: "hidden",
        scale: flip ? "-1 1" : "1 1",
        rotate,
        transformOrigin: "50% 100%",
        zIndex,
      }}
    >
      <Img
        src={staticFile(file)}
        style={{
          position: "absolute",
          left: -boundLeft * scale,
          top: -boundTop * scale,
          width: canvasWidth * scale,
          height: canvasHeight * scale,
        }}
      />
    </div>
  );
};
