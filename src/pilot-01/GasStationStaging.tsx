import {AbsoluteFill, Img, staticFile} from "remotion";
import {LibraryCel} from "../library/observer/LibraryCel";
import {RasterCutout} from "./RasterCutout";

export const GasStationStaging: React.FC = () => (
  <AbsoluteFill
    style={{
      overflow: "hidden",
      backgroundColor: "#F5EBD6",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}
  >
    <Img
      src={staticFile("assets-canon/automotive/gas-station-background-v1.jpg")}
      style={{width: "100%", height: "100%", objectFit: "cover"}}
    />

    <svg
      viewBox="0 0 1920 1080"
      style={{position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1}}
    >
      <path
        d="M 435 665 C 420 875, 620 965, 855 625"
        fill="none"
        stroke="#242622"
        strokeWidth="19"
        strokeLinecap="round"
      />
      <path
        d="M 435 665 C 420 875, 620 965, 855 625"
        fill="none"
        stroke="#356F70"
        strokeWidth="11"
        strokeLinecap="round"
      />
    </svg>

    <RasterCutout
      file="assets-canon/automotive/fuel-pump-v2.png"
      canvas={[1792, 1008]}
      bounds={[664, 117, 1125, 887]}
      width={225}
      left={275}
      bottom={195}
      zIndex={3}
    />

    <div
      style={{
        position: "absolute",
        left: 352,
        top: 615,
        width: 138,
        color: "#242622",
        textAlign: "center",
        fontSize: 18,
        fontWeight: 900,
        letterSpacing: 1.5,
        zIndex: 4,
      }}
    >
      DIESEL
    </div>

    <RasterCutout
      file="assets-canon/automotive/sedan-v2.png"
      canvas={[2816, 1536]}
      bounds={[409, 451, 2472, 1164]}
      width={1110}
      left={690}
      bottom={105}
      flip
      zIndex={2}
    />

    <svg
      viewBox="0 0 1920 1080"
      style={{position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1}}
    >
      <path
        d="M 790 650 L 1015 612 L 1225 612 L 1385 628 L 1490 770 L 805 770 Z"
        fill="#87A8A3"
        opacity="0.92"
      />
    </svg>

    <LibraryCel
      cel="reachExtinguisher"
      stageX={650}
      stageY={945}
      scale={0.68}
    />

    <RasterCutout
      file="assets-canon/automotive/fuel-nozzle-v2.png"
      canvas={[1792, 1008]}
      bounds={[239, 234, 1552, 786]}
      width={150}
      left={824}
      bottom={425}
      rotate="-12deg"
      zIndex={7}
    />

    <div
      style={{
        position: "absolute",
        left: 54,
        top: 46,
        padding: "15px 20px 13px",
        backgroundColor: "rgba(245,235,214,0.88)",
        border: "3px solid #242622",
        color: "#242622",
        fontSize: 25,
        fontWeight: 900,
        letterSpacing: 3,
        zIndex: 10,
      }}
    >
      PILOT 01 - SPATIAL STAGING
    </div>
  </AbsoluteFill>
);
