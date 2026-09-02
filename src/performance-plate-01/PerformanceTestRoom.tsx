import {AbsoluteFill, Interactive} from "remotion";
import {FireExtinguisher} from "../micro-scene-01/AlarmProps";
import {CanonicalAsset} from "./CanonicalAsset";

export const ROOM_BASELINE_Y = 955;
export const OBSERVER_STAGE_X = 910;
export const OBSERVER_HEIGHT = 690;

export const PerformanceTestRoom: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: "#F5EBD6", overflow: "hidden"}}>
    <Interactive.Div
      name="Paper wall"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#F5EBD6",
        backgroundImage:
          "radial-gradient(circle at 30% 20%, rgba(36,38,34,0.035) 0 1px, transparent 1.5px)",
        backgroundSize: "9px 9px",
      }}
    />
    <Interactive.Div
      name="Coral wall panel"
      style={{
        position: "absolute",
        left: 95,
        top: 110,
        width: 560,
        height: 600,
        backgroundColor: "#BD4E3D",
        clipPath: "polygon(2% 7%, 98% 0, 93% 96%, 0 100%)",
        opacity: 0.9,
      }}
    />
    <Interactive.Div
      name="Teal wall panel"
      style={{
        position: "absolute",
        right: -70,
        top: 65,
        width: 540,
        height: 650,
        backgroundColor: "#9BC2BD",
        clipPath: "polygon(0 0, 100% 8%, 96% 100%, 8% 93%)",
      }}
    />
    <Interactive.Div
      name="Floor"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 205,
        backgroundColor: "#D8C8AA",
        clipPath: "polygon(0 24%, 100% 0, 100% 100%, 0 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 174,
        height: 8,
        backgroundColor: "#242622",
        opacity: 0.82,
      }}
    />

    <CanonicalAsset
      name="Canonical lounge chair"
      file="furniture/lounge-chair.svg"
      x={105}
      baselineY={955}
      width={405}
    />
    <CanonicalAsset
      name="Canonical floor lamp"
      file="furniture/floor-lamp.svg"
      x={475}
      baselineY={940}
      width={300}
      zIndex={1}
    />
    <CanonicalAsset
      name="Canonical tulip side table"
      file="furniture/tulip-side-table.svg"
      x={1420}
      baselineY={965}
      width={330}
      zIndex={3}
    />
    <div style={{scale: "0.49", transformOrigin: "0 0"}}>
      <FireExtinguisher x={3050} y={730} />
    </div>
  </AbsoluteFill>
);
