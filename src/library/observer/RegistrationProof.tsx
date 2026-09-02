import {AbsoluteFill, Sequence} from "remotion";
import {observerCels, type ObserverCelId} from "./cels";
import {LibraryCel} from "./LibraryCel";

/**
 * Verification composition for the cel registry.
 *
 * Every cel is placed on the same ground line at the same stage position. If
 * the anchors are correct, the figures stand on the line and their feet sit on
 * the mark regardless of what their arms are doing. Any cel that floats,
 * sinks, or drifts sideways has a bad registry entry.
 *
 * This is a diagnostic. It is not part of the production scene.
 */
const GROUND_Y = 900;
const MARK_X = 960;

export const RegistrationProof: React.FC = () => {
  const ids = Object.keys(observerCels) as ObserverCelId[];
  const holdInFrames = 24;

  return (
    <AbsoluteFill style={{backgroundColor: "#eee5cf"}}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: GROUND_Y,
          height: 3,
          backgroundColor: "#bd4e3d",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: MARK_X - 1,
          top: 0,
          bottom: 0,
          width: 3,
          backgroundColor: "#356f70",
          opacity: 0.55,
        }}
      />
      {ids.map((id, index) => (
        <Sequence
          key={id}
          from={index * holdInFrames}
          durationInFrames={holdInFrames}
          name={`Registration: ${id}`}
        >
          <LibraryCel cel={id} stageX={MARK_X} stageY={GROUND_Y} />
          <div
            style={{
              position: "absolute",
              left: 80,
              top: 80,
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 900,
              fontSize: 40,
              letterSpacing: 3,
              color: "#242622",
            }}
          >
            {id} — {observerCels[id].fn}
          </div>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
