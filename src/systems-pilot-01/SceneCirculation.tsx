import {interpolate, useCurrentFrame} from "remotion";
import {palette} from "./manifest";
import {Arrow, clamp, enter, SceneStage, Stamp, SystemIcon} from "./shared";
import {useFxMode} from "./fx";

const nodes = [
  {kind: "tank" as const, label: "TANK"},
  {kind: "pump" as const, label: "PUMP"},
  {kind: "lines" as const, label: "LINES"},
  {kind: "injectors" as const, label: "INJECTORS"},
  {kind: "engine" as const, label: "ENGINE"},
];

export const SceneCirculation: React.FC = () => {
  const frame = useCurrentFrame();
  const fx = useFxMode();
  const build = interpolate(frame, [6, 62], [0, 1], clamp);
  const flow = interpolate(frame, [80, 180], [0, 1], clamp);
  const particleX = 205 + 1510 * flow;

  return (
    <SceneStage title="CONTAINED → CIRCULATING" number="03">
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 315,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {nodes.map((node, index) => {
          const visible = build >= (index + 0.35) / nodes.length;
          const active = index === 0 || flow >= index / (nodes.length - 1) - 0.04;
          return (
            <div key={node.kind} style={{display: "contents"}}>
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  scale: visible ? 1 + (fx && active ? Math.sin(frame * 0.2 + index) * 0.018 : 0) : 0.6,
                  translate: fx && index === 4 && flow > 0.9 ? `${Math.sin(frame * 2.4) * 5}px 0px` : "0px 0px",
                }}
              >
                <SystemIcon kind={node.kind} label={node.label} active={active} />
              </div>
              {index < nodes.length - 1 ? (
                <svg viewBox="0 0 120 90" style={{width: 85, height: 90, opacity: visible ? 1 : 0}}>
                  <Arrow x1={10} y1={45} x2={108} y2={45} color={palette.ink} width={8} />
                </svg>
              ) : null}
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          left: 122,
          top: 230,
          width: flow < 0.18 ? 310 : 1670,
          height: 430,
          border: `7px solid ${flow < 0.18 ? palette.teal : palette.coral}`,
          borderRadius: 38,
        }}
      />

      {flow > 0.02
        ? (fx ? [0, 1, 2, 3, 4, 5].map((index) => {
            const trail = Math.min(1, Math.max(0, flow * 1.18 - index * 0.055));
            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: 205 + 1510 * trail,
                  top: 438 + Math.sin(index * 1.8) * 7,
                  width: 30 - index * 2,
                  height: 30 - index * 2,
                  borderRadius: 18,
                  backgroundColor: palette.coral,
                  border: `${Math.max(2, 5 - index * 0.5)}px solid ${palette.ink}`,
                  opacity: trail >= 1 ? 0 : 1 - index * 0.11,
                  filter: `drop-shadow(0 0 ${18 - index * 2}px ${palette.coral})`,
                  zIndex: 15,
                }}
              />
            );
          }) : (
            <div
              style={{
                position: "absolute",
                left: particleX,
                top: 438,
                width: 34,
                height: 34,
                borderRadius: 18,
                backgroundColor: palette.coral,
                border: `5px solid ${palette.ink}`,
                zIndex: 15,
              }}
            />
          ))
        : null}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 128,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stamp color={flow < 0.48 ? palette.teal : palette.coral} style={{fontSize: 48, opacity: enter(frame, 40, 10)}}>
          {flow < 0.48 ? "CONTAINED" : "CIRCULATING"}
        </Stamp>
      </div>

      <div
        style={{
          position: "absolute",
          left: 813,
          top: 147,
          fontSize: 82,
          opacity: enter(frame, 78, 8),
          rotate: `${interpolate(frame, [80, 100], [-18, 0], clamp)}deg`,
        }}
      >
        ⚡
      </div>
    </SceneStage>
  );
};
