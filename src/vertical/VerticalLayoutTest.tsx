import {AbsoluteFill, Sequence} from "remotion";
import {LibraryCel} from "../library/observer/LibraryCel";
import {
  SAFE_BOTTOM,
  SAFE_TOP,
  SafeAreaGuides,
  SHORT_WIDTH,
} from "./ShortsSafeArea";

/**
 * Layout study for the vertical format. No animation, no final art.
 *
 * The alarm scene's core visual idea is a left/right comparison. That idea
 * does not survive a 9:16 crop unchanged, so this composition stages it two
 * ways at the real delivery size and real safe area, to decide which reading
 * order the vertical version should use before any art is generated.
 */

const CREAM = "#eee5cf";
const INK = "#242622";
const FIRE = "#bd4e3d";
const CO = "#356f70";

const PulseRow: React.FC<{
  count: 3 | 4;
  color: string;
  label: string;
  top: number;
  compact?: boolean;
}> = ({count, color, label, top, compact = false}) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: compact ? 22 : 34,
    }}
  >
    <div style={{display: "flex", alignItems: "flex-end", gap: compact ? 12 : 18}}>
      {Array.from({length: count}).map((_, index) => (
        <div
          key={index}
          style={{
            width: compact ? 18 : 24,
            height: (compact ? 62 : 88) + index * (compact ? 12 : 18),
            borderRadius: 16,
            backgroundColor: color,
            rotate: `${-8 + index * 5}deg`,
          }}
        />
      ))}
    </div>
    <div style={{color, fontSize: compact ? 96 : 132, fontWeight: 900, lineHeight: 1}}>
      {count}
    </div>
    <div
      style={{
        color: INK,
        fontSize: compact ? 34 : 42,
        fontWeight: 900,
        letterSpacing: 3,
        maxWidth: 340,
      }}
    >
      {label}
    </div>
  </div>
);

/** Reading order: headline, then the comparison, then the character. */
const StackedLayout: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: CREAM}}>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: SAFE_TOP + 40,
        textAlign: "center",
        color: INK,
        fontSize: 76,
        fontWeight: 900,
        letterSpacing: 4,
        lineHeight: 1.05,
      }}
    >
      THE PATTERN
      <br />
      MATTERS.
    </div>
    <PulseRow count={3} color={FIRE} label="SMOKE / FIRE" top={SAFE_TOP + 260} />
    <PulseRow count={4} color={CO} label="CARBON MONOXIDE" top={SAFE_TOP + 430} />
    <LibraryCel
      cel="listenCount"
      stageX={SHORT_WIDTH / 2}
      stageY={SAFE_BOTTOM - 10}
      scale={0.82}
    />
  </AbsoluteFill>
);

/** Reading order: headline, character centre, comparison flanking him. */
const FlankedLayout: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: CREAM}}>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: SAFE_TOP + 30,
        textAlign: "center",
        color: INK,
        fontSize: 72,
        fontWeight: 900,
        letterSpacing: 4,
      }}
    >
      THE PATTERN MATTERS.
    </div>
    <LibraryCel
      cel="listenCount"
      stageX={SHORT_WIDTH / 2}
      stageY={SAFE_BOTTOM - 20}
      scale={1.02}
    />
    {(
      [
        {count: 3 as const, color: FIRE, label: "SMOKE / FIRE", left: 30},
        {count: 4 as const, color: CO, label: "CARBON MONOXIDE", left: 700},
      ]
    ).map((column) => (
      <div
        key={column.count}
        style={{
          position: "absolute",
          left: column.left,
          top: SAFE_TOP + 220,
          width: 350,
          textAlign: "center",
        }}
      >
        <div style={{display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 14}}>
          {Array.from({length: column.count}).map((_, index) => (
            <div
              key={index}
              style={{
                width: 20,
                height: 74 + index * 16,
                borderRadius: 14,
                backgroundColor: column.color,
                rotate: `${-8 + index * 5}deg`,
              }}
            />
          ))}
        </div>
        <div style={{color: column.color, fontSize: 118, fontWeight: 900, lineHeight: 1.05}}>
          {column.count}
        </div>
        <div style={{color: INK, fontSize: 32, fontWeight: 900, letterSpacing: 2}}>
          {column.label}
        </div>
      </div>
    ))}
  </AbsoluteFill>
);

export const VerticalLayoutTest: React.FC<{showGuides?: boolean}> = ({
  showGuides = true,
}) => (
  <AbsoluteFill style={{backgroundColor: CREAM, fontFamily: "Arial, Helvetica, sans-serif"}}>
    <Sequence durationInFrames={48} name="Stacked">
      <StackedLayout />
    </Sequence>
    <Sequence from={48} durationInFrames={48} name="Flanked">
      <FlankedLayout />
    </Sequence>
    {showGuides ? <SafeAreaGuides /> : null}
  </AbsoluteFill>
);
