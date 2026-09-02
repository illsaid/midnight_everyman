import {AbsoluteFill, useCurrentFrame} from "remotion";
import {LibraryCel} from "./LibraryCel";
import {observerCels, type ObserverCelId} from "./cels";

type CatalogEntry = {
  readonly cel: ObserverCelId;
  readonly label: string;
};

const pages: readonly (readonly CatalogEntry[])[] = [
  [
    {cel: "neutralAlert", label: "STAND NEUTRAL"},
    {cel: "startledAlarm", label: "SURPRISE SMALL"},
    {cel: "listenCount", label: "LISTEN / COUNT"},
    {cel: "reachExtinguisher", label: "REACH FORWARD"},
    {cel: "selfCorrectRecoil", label: "RECOIL LARGE"},
    {cel: "outsidePhone", label: "CALL PHONE"},
  ],
  [
    {cel: "thinkChin", label: "THINK CHIN"},
    {cel: "inspectForward", label: "INSPECT FORWARD"},
    {cel: "pointRight", label: "POINT RIGHT"},
    {cel: "presentOpen", label: "PRESENT OPEN"},
    {cel: "compareHands", label: "COMPARE HANDS"},
    {cel: "shrugConfused", label: "SHRUG CONFUSED"},
  ],
  [
    {cel: "suspiciousSquint", label: "SUSPICIOUS SQUINT"},
    {cel: "shockLarge", label: "SHOCK LARGE"},
    {cel: "fearBrace", label: "FEAR BRACE"},
    {cel: "panicHands", label: "PANIC HANDS"},
    {cel: "joyOpen", label: "JOY OPEN"},
    {cel: "reliefSigh", label: "RELIEF SIGH"},
  ],
  [
    {cel: "sadSlump", label: "SAD SLUMP"},
    {cel: "angerProtest", label: "ANGER PROTEST"},
    {cel: "sleepyStanding", label: "SLEEPY STANDING"},
    {cel: "crouchCover", label: "CROUCH COVER"},
    {cel: "runAwayKey", label: "RUN AWAY KEY"},
    {cel: "jumpJoyKey", label: "JUMP JOY KEY"},
  ],
];

const pageNames = [
  "EXISTING CANON",
  "INFORMATION",
  "EMOTION",
  "PHYSICAL",
] as const;

export const CATALOG_PAGE_DURATION = 72;
export const CATALOG_DURATION = CATALOG_PAGE_DURATION * pages.length;

export const PoseLibraryCatalog: React.FC = () => {
  const frame = useCurrentFrame();
  const pageIndex = Math.min(
    pages.length - 1,
    Math.floor(frame / CATALOG_PAGE_DURATION),
  );
  const page = pages[pageIndex];

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        backgroundColor: "#F5EBD6",
        color: "#242622",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 42,
          fontSize: 42,
          fontWeight: 900,
          letterSpacing: 5,
        }}
      >
        OBSERVER POSE LIBRARY V1 - {pageNames[pageIndex]}
      </div>
      <div
        style={{
          position: "absolute",
          right: 62,
          top: 53,
          fontSize: 23,
          fontWeight: 800,
          letterSpacing: 3,
          color: "#356F70",
        }}
      >
        PAGE {pageIndex + 1}/4
      </div>

      {page.map((entry, index) => {
        const column = index % 3;
        const row = Math.floor(index / 3);
        const stageX = 330 + column * 630;
        const stageY = 505 + row * 455;
        const approval = observerCels[entry.cel].approval;

        return (
          <div key={entry.cel}>
            <div
              style={{
                position: "absolute",
                left: 50 + column * 630,
                top: 110 + row * 455,
                width: 560,
                height: 390,
                border: "3px solid rgba(36,38,34,0.16)",
                backgroundColor: "rgba(255,255,255,0.24)",
              }}
            />
            <LibraryCel
              cel={entry.cel}
              stageX={stageX}
              stageY={stageY}
              scale={0.46}
            />
            <div
              style={{
                position: "absolute",
                left: 70 + column * 630,
                top: 510 + row * 455,
                width: 520,
                fontSize: 25,
                fontWeight: 900,
                letterSpacing: 2,
                textAlign: "center",
              }}
            >
              {entry.label}
            </div>
            <div
              style={{
                position: "absolute",
                left: 70 + column * 630,
                top: 545 + row * 455,
                width: 520,
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: 2,
                textAlign: "center",
                color: approval === "approved" ? "#356F70" : "#BD4E3D",
              }}
            >
              {approval.toUpperCase()}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
