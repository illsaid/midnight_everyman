import {Img, Interactive, staticFile} from "remotion";

export const CanonicalAsset: React.FC<{
  name: string;
  file: string;
  x: number;
  baselineY: number;
  width: number;
  zIndex?: number;
}> = ({name, file, x, baselineY, width, zIndex = 2}) => (
  <Interactive.Div
    name={name}
    style={{
      position: "absolute",
      left: x,
      bottom: 1080 - baselineY,
      width,
      zIndex,
    }}
  >
    <Img
      src={staticFile(`assets-canon/${file}`)}
      style={{display: "block", width: "100%"}}
    />
  </Interactive.Div>
);
