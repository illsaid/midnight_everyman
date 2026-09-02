import {AbsoluteFill, Interactive} from "remotion";

export const HouseInterior: React.FC<{doorOpen?: boolean}> = ({
  doorOpen = false,
}) => (
  <AbsoluteFill style={{backgroundColor: "#eee5cf"}}>
    <Interactive.Div
      name="Back wall"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#eee5cf",
      }}
    />
    <Interactive.Div
      name="Floor"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 230,
        backgroundColor: "#d8c8aa",
        clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
      }}
    />
    <Interactive.Div
      name="Door frame"
      style={{
        position: "absolute",
        right: 155,
        top: 185,
        width: 330,
        height: 690,
        backgroundColor: "#242622",
        clipPath: "polygon(3% 1%, 99% 0, 96% 100%, 0 99%)",
      }}
    />
    <Interactive.Div
      name="Exit door"
      style={{
        position: "absolute",
        right: doorOpen ? 325 : 174,
        top: 205,
        width: doorOpen ? 160 : 290,
        height: 650,
        backgroundColor: "#447875",
        clipPath: doorOpen
          ? "polygon(0 2%, 100% 10%, 100% 92%, 0 100%)"
          : "polygon(2% 1%, 100% 0, 97% 100%, 0 99%)",
        border: "8px solid #ebe2cb",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: doorOpen ? 20 : 34,
          top: 330,
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: "#d5a84c",
          border: "5px solid #242622",
        }}
      />
    </Interactive.Div>
    <Interactive.Div
      name="Console"
      style={{
        position: "absolute",
        left: 115,
        bottom: 165,
        width: 430,
        height: 185,
        backgroundColor: "#a96e45",
        clipPath: "polygon(0 6%, 98% 0, 100% 92%, 3% 100%)",
        borderTop: "9px solid #242622",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 205,
        height: 8,
        backgroundColor: "#242622",
        opacity: 0.75,
      }}
    />
  </AbsoluteFill>
);

export const Exterior: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: "#9dc8c2"}}>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 330,
        backgroundColor: "#78975d",
        clipPath: "polygon(0 25%, 100% 4%, 100% 100%, 0 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 80,
        top: 210,
        width: 820,
        height: 600,
        backgroundColor: "#c87554",
        clipPath: "polygon(8% 9%, 90% 0, 100% 100%, 0 94%)",
        border: "9px solid #242622",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 510,
        top: 340,
        width: 275,
        height: 470,
        backgroundColor: "#447875",
        border: "8px solid #ebe2cb",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 700,
        bottom: 0,
        width: 700,
        height: 260,
        backgroundColor: "#d9cbb0",
        clipPath: "polygon(10% 0, 63% 0, 100% 100%, 0 100%)",
      }}
    />
  </AbsoluteFill>
);

