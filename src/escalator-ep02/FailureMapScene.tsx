import {Audio} from '@remotion/media';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {EPISODE_02_VOICEOVER} from './lockedPlates';

export const FAILURE_MAP_DURATION = 636;
export const FAILURE_MAP_FROM = 459;

// Scene-local frames. Absolute = local + FAILURE_MAP_FROM.
const cue = {
  twoFailures: {from: 0, to: 54},
  driveChain: {from: 54, to: 111},
  detector: {from: 111, to: 207},
  oneNut: {from: 207, to: 315},
  later: {from: 315, to: 373},
  fourWays: {from: 373, to: 538},
  descend: {from: 538, to: 636},
} as const;

// Cue joins cross-dissolve. Each cue plays OVERLAP frames past its own end and
// the transition consumes exactly those frames, so every cue still starts on its
// locked frame and the scene still totals FAILURE_MAP_DURATION.
const OVERLAP = 6;

// How long each cue is actually on screen, including its hand-off.
const plays = (c: {from: number; to: number}, last = false) => c.to - c.from + (last ? 0 : OVERLAP);

const palette = {
  paper: '#EEE5CF',
  paperLight: '#F7F0DE',
  ink: '#242622',
  reference: '#7C7566',
  inkMute: '#4A4A42',
  cutaway: '#C9C1AC',
  mustard: '#D5A84C',
  coral: '#BD4E3D',
} as const;

const clamp = {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
} as const;

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const paperTexture: React.CSSProperties = {
  backgroundColor: palette.paper,
  backgroundImage:
    'radial-gradient(circle at 25% 20%, rgba(36,38,34,0.035) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(36,38,34,0.025) 0 1px, transparent 1.4px)',
  backgroundSize: '17px 17px, 23px 23px',
};

const PaperStage: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{...paperTexture, color: palette.ink, overflow: 'hidden'}}>
    {children}
  </AbsoluteFill>
);

// Drawn line quality: a 12-fps stagger. Kept small on purpose. Raising this to 2.1px
// did not read as a redrawn contour — it read as camera shake, because translating a
// whole element is a camera move, not a line quality. Per-stroke variation belongs in
// an SVG filter, not here.
const useBoil = (amount = 1) => {
  const frame = useCurrentFrame();
  const stepped = Math.floor(frame / 2) * 2;
  return {
    x: Math.sin(stepped * 0.61) * 0.6 * amount,
    y: Math.cos(stepped * 0.47) * 0.5 * amount,
  };
};

/**
 * Camera move, per visual-language.md: a move changes emphasis, it does not
 * disguise staging. Deliberately LINEAR — an eased move front-loads and then
 * crawls at a fraction of a pixel per frame, which is what made the first pass
 * measure as static for 77% of its length.
 *
 * Bounded per D-022: scale travel <= 6%, pan travel <= 110px.
 * `stopAt` parks the camera early when the stillness itself is the beat.
 */
const Camera: React.FC<{
  children: React.ReactNode;
  span: number;
  scale?: readonly [number, number];
  pan?: readonly [string, string];
  origin?: string;
  stopAt?: number;
}> = ({
  children,
  span,
  scale = [1.045, 1],
  pan = ['-26px 14px', '0px 0px'],
  origin = '50% 50%',
  stopAt,
}) => {
  const frame = useCurrentFrame();
  const end = stopAt ?? span;
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        transformOrigin: origin,
        scale: interpolate(frame, [0, end], [scale[0], scale[1]], {
          ...clamp,
          output: 'perceptual-scale',
        }),
        translate: interpolate(frame, [0, end], [pan[0], pan[1]], clamp),
      }}
    >
      {children}
    </div>
  );
};

const CaseLabel: React.FC<{
  eyebrow: string;
  headline: string;
  note?: string;
  accent?: string;
  left: number;
  top: number;
  width: number;
  progress: number;
}> = ({eyebrow, headline, note, accent = palette.ink, left, top, width, progress}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width,
      opacity: progress,
      translate: interpolate(progress, [0, 1], ['-18px 0px', '0px 0px'], clamp),
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: 5,
        color: palette.reference,
        marginBottom: 10,
      }}
    >
      {eyebrow}
    </div>
    <div
      style={{
        fontSize: 74,
        fontWeight: 700,
        letterSpacing: 1,
        lineHeight: 1.02,
        color: accent,
      }}
    >
      {headline}
    </div>
    <div style={{height: 7, width: 172, backgroundColor: accent, marginTop: 16}} />
    {note ? (
      <div
        style={{
          marginTop: 16,
          fontSize: 24,
          letterSpacing: 3,
          fontWeight: 700,
          color: palette.reference,
        }}
      >
        {note}
      </div>
    ) : null}
  </div>
);

/**
 * Cue 07 — the case docket opens with two empty numbered positions.
 * Cue 08 fills position one, cue 09 fills position two.
 */
const CaseDiagram: React.FC<{
  chainState: 'absent' | 'intact' | 'broken';
  detectorState: 'absent' | 'waiting' | 'inert';
  warningProgress: number;
  showStallLabel?: boolean;
  docket?: number;
}> = ({chainState, detectorState, warningProgress, showStallLabel = true, docket = 1}) => {
  const boil = useBoil();
  const frame = useCurrentFrame();

  const chainLinks = [0, 1, 2, 3, 4, 5, 6, 7];
  const breakAt = 4;

  return (
    <svg
      viewBox="0 0 1180 620"
      style={{
        position: 'absolute',
        right: 72,
        top: 236,
        width: 1080,
        height: 568,
        overflow: 'visible',
        translate: `${boil.x}px ${boil.y}px`,
      }}
    >
      {/* the two numbered positions of the official case. On cue 07 they are
          stamped in one at a time — you count the failures as they land. */}
      <g
        opacity={
          (chainState === 'absent' ? 0.35 : 1) * interpolate(docket, [0, 0.08], [0, 1], clamp)
        }
        style={{
          transformOrigin: '150px 120px',
          scale: `${interpolate(docket, [0, 0.16], [1.5, 1], {...clamp, easing: ease})}`,
        }}
      >
        <circle cx="150" cy="120" r="34" fill="none" stroke={palette.ink} strokeWidth="6" />
        <text
          x="150"
          y="134"
          textAnchor="middle"
          fill={palette.ink}
          fontFamily="Arial, sans-serif"
          fontSize="40"
          fontWeight="700"
        >
          1
        </text>
      </g>
      <g
        opacity={
          (detectorState === 'absent' ? 0.35 : 1) * interpolate(docket, [0.52, 0.6], [0, 1], clamp)
        }
        style={{
          transformOrigin: '150px 430px',
          scale: `${interpolate(docket, [0.52, 0.68], [1.5, 1], {...clamp, easing: ease})}`,
        }}
      >
        <circle cx="150" cy="430" r="34" fill="none" stroke={palette.ink} strokeWidth="6" />
        <text
          x="150"
          y="444"
          textAnchor="middle"
          fill={palette.ink}
          fontFamily="Arial, sans-serif"
          fontSize="40"
          fontWeight="700"
        >
          2
        </text>
      </g>
      <line
        x1="150"
        y1="154"
        x2="150"
        y2={interpolate(docket, [0.2, 0.56], [154, 396], {
          ...clamp,
          easing: ease,
        })}
        stroke={palette.reference}
        strokeWidth="4"
        strokeDasharray="9 12"
      />

      {/* position 1 — the main drive chain */}
      <g transform="translate(242 120)">
        {chainLinks.map((index) => {
          const broken = chainState === 'broken' && index >= breakAt;
          const gap = chainState === 'broken' && index >= breakAt ? 26 : 0;
          const x = index * 98 + gap;
          const linkColour =
            chainState === 'broken' && index === breakAt
              ? palette.coral
              : broken
                ? palette.inkMute
                : palette.ink;
          return (
            <g key={index} opacity={chainState === 'absent' ? 0 : 1}>
              <rect
                x={x}
                y={-26}
                width="74"
                height="52"
                rx="26"
                fill="none"
                stroke={linkColour}
                strokeWidth={index === breakAt && chainState === 'broken' ? 10 : 7}
              />
            </g>
          );
        })}
        {chainState === 'broken' ? (
          <g stroke={palette.coral} strokeWidth="8" strokeLinecap="round">
            <line x1={breakAt * 98 + 4} y1="-42" x2={breakAt * 98 + 34} y2="-4" />
            <line x1={breakAt * 98 + 34} y1="-4" x2={breakAt * 98 + 6} y2="34" />
          </g>
        ) : null}
      </g>

      {/* the warning travelling from the break toward the detector */}
      {warningProgress > 0 ? (
        <g>
          <path
            id="warning-path"
            d="M640 146 C640 250 400 262 330 430"
            fill="none"
            stroke={palette.reference}
            strokeWidth="4"
            strokeDasharray="8 11"
          />
          <circle
            cx={interpolate(warningProgress, [0, 1], [640, 330], clamp)}
            cy={interpolate(warningProgress, [0, 1], [146, 430], clamp)}
            r={interpolate(warningProgress, [0, 1], [13, 9], clamp)}
            fill={palette.coral}
            opacity={warningProgress < 1 ? 1 : 0.35}
          />
        </g>
      ) : null}

      {/* position 2 — the broken-chain device. It must NOT animate into its tripped pose. */}
      <g transform="translate(242 430)" opacity={detectorState === 'absent' ? 0 : 1}>
        <rect
          x="0"
          y="-62"
          width="268"
          height="124"
          rx="18"
          fill={palette.paperLight}
          stroke={detectorState === 'inert' ? palette.coral : palette.ink}
          strokeWidth={detectorState === 'inert' ? 10 : 7}
        />
        {[0, 1, 2].map((index) => (
          <rect
            key={index}
            x={38 + index * 66}
            y={-14}
            width="44"
            height="28"
            rx="8"
            fill={detectorState === 'inert' ? palette.coral : palette.reference}
            opacity={detectorState === 'inert' ? 0.9 : 0.55}
          />
        ))}
        {/* the guide shoe, in its resting position, unmoved */}
        <rect
          x="286"
          y="-20"
          width="66"
          height="40"
          rx="8"
          fill={palette.cutaway}
          stroke={palette.ink}
          strokeWidth="6"
        />
        <line x1="268" y1="0" x2="286" y2="0" stroke={palette.ink} strokeWidth="6" />
        {detectorState === 'inert' ? (
          <>
            {/* stall cue: the slash, per the state vocabulary */}
            <line
              x1="14"
              y1="58"
              x2="254"
              y2="-58"
              stroke={palette.coral}
              strokeWidth="9"
              strokeLinecap="round"
              opacity={interpolate(frame % 48, [0, 6, 42, 48], [0.55, 1, 1, 0.55], clamp)}
            />
            {showStallLabel ? (
              <text
                x="134"
                y="104"
                textAnchor="middle"
                fill={palette.coral}
                fontFamily="Arial, sans-serif"
                fontSize="26"
                fontWeight="700"
                letterSpacing="4"
              >
                DID NOT ACTUATE
              </text>
            ) : null}
          </>
        ) : null}
      </g>
    </svg>
  );
};

const TwoFailures: React.FC = () => {
  const frame = useCurrentFrame();
  const span = plays(cue.twoFailures);
  return (
    <PaperStage>
      {/* pull back: the frame widens from one failure site to two */}
      <Camera span={span} scale={[1.07, 1.0]} pan={['44px -22px', '0px 0px']} origin="38% 56%">
        <CaseDiagram
          chainState="absent"
          detectorState="absent"
          warningProgress={0}
          docket={interpolate(frame, [2, 44], [0, 1], clamp)}
        />
        <Interactive.Div
          name="Two failures"
          style={{position: 'absolute', left: 96, top: 104, width: 900}}
        >
          <CaseLabel
            eyebrow="OFFICIAL INVESTIGATION"
            headline="TWO FAILURES"
            note={frame >= 40 ? 'NOT ONE' : undefined}
            left={0}
            top={0}
            width={860}
            progress={interpolate(frame, [0, 10], [0, 1], {
              ...clamp,
              easing: ease,
            })}
          />
        </Interactive.Div>
      </Camera>
    </PaperStage>
  );
};

const DriveChain: React.FC = () => {
  const frame = useCurrentFrame();
  const span = plays(cue.driveChain);
  const snap = frame >= 18;
  // The break has weight. Four frames of displacement, then the push resumes.
  const impact = interpolate(frame, [17, 19, 22, 26], [0, 1, 0.34, 0], clamp);
  return (
    <PaperStage>
      {/* push toward the chain run, which is where the failure is about to be */}
      <Camera span={span} scale={[1.0, 1.038]} pan={['0px 0px', '-18px 8px']} origin="57% 48%">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            translate: `${impact * -9}px ${impact * 5}px`,
            rotate: `${impact * -0.5}deg`,
          }}
        >
          <CaseDiagram
            chainState={snap ? 'broken' : 'intact'}
            detectorState="absent"
            warningProgress={0}
          />
        </div>
        <CaseLabel
          eyebrow="FAILURE ONE"
          headline={'1 · DRIVE\nCHAIN'}
          note={snap ? 'METAL FATIGUE' : undefined}
          accent={snap ? palette.coral : palette.ink}
          left={96}
          top={104}
          width={640}
          progress={interpolate(frame, [0, 9], [0, 1], {
            ...clamp,
            easing: ease,
          })}
        />
      </Camera>
    </PaperStage>
  );
};

const Detector: React.FC = () => {
  const frame = useCurrentFrame();
  const span = plays(cue.detector);
  // The warning arrives at frame 46. Nothing happens. That silence is the beat.
  const warning = interpolate(frame, [6, 46], [0, 1], {
    ...clamp,
    easing: ease,
  });
  const inert = frame >= 58;
  // The camera rides the signal down the path, then parks at frame 46 with it and
  // waits. Twelve frames of a camera that has stopped, on a device that never
  // starts. At 64 it gives up and withdraws.
  const withdraw = interpolate(frame, [64, span], [0, 1], clamp);
  return (
    <PaperStage>
      <Camera
        span={span}
        stopAt={46}
        scale={[1.0, 1.042]}
        pan={['0px 0px', '52px -30px']}
        origin="37% 66%"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            scale: interpolate(withdraw, [0, 1], [1, 0.955], {
              ...clamp,
              output: 'perceptual-scale',
            }),
            translate: interpolate(withdraw, [0, 1], ['0px 0px', '-46px 22px'], clamp),
          }}
        >
          <CaseDiagram
            chainState="broken"
            detectorState={inert ? 'inert' : 'waiting'}
            warningProgress={warning}
          />
        </div>
        <CaseLabel
          eyebrow="FAILURE TWO"
          headline={'2 · THE\nDETECTOR'}
          note={inert ? 'BUILT TO CATCH FAILURE ONE' : undefined}
          accent={inert ? palette.coral : palette.ink}
          left={96}
          top={104}
          width={640}
          progress={interpolate(frame, [0, 9], [0, 1], {
            ...clamp,
            easing: ease,
          })}
        />
      </Camera>
    </PaperStage>
  );
};

const OneNut: React.FC = () => {
  const frame = useCurrentFrame();
  const boil = useBoil(0.6);
  // Push toward the nut. The mechanism around it is deliberately withheld.
  const span = plays(cue.oneNut) + OVERLAP;
  // Linear, and running the full length of the cue. Eased, this reached 85% of its
  // travel by frame 30 and then moved at a third of a pixel per frame for the rest
  // of the shot — a 98-frame dead run sitting on the scene's payoff.
  const push = interpolate(frame, [0, span], [1, 1.46], {
    ...clamp,
    output: 'perceptual-scale',
  });
  const fade = interpolate(frame, [0, 34], [1, 0.07], {
    ...clamp,
    easing: ease,
  });
  const ring = interpolate(frame, [42, 70], [0, 1], {...clamp, easing: ease});
  // The line is "one nut". At 1.16 the nut stood 16% of frame height: an icon in an
  // empty room. It has to own the frame by the end of the cue.
  const nutGrow = interpolate(frame, [0, span], [0.55, 2.3], {
    ...clamp,
    output: 'perceptual-scale',
  });
  // Turned over in the hand, the way you examine the part that did it.
  const turn = interpolate(frame, [0, span], [-4.5, 3], clamp);
  // Ten frames of held stillness before the ring closes, per retention-structure.md.
  const settle = interpolate(frame, [32, 42], [1, 0], clamp);
  return (
    <PaperStage>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          scale: `${push}`,
          transformOrigin: '63% 62%',
          translate: `${settle * -5}px 0px`,
          opacity: fade,
        }}
      >
        <CaseDiagram
          chainState="broken"
          detectorState="inert"
          warningProgress={1}
          showStallLabel={false}
        />
      </div>
      <svg
        viewBox="0 0 800 800"
        style={{
          position: 'absolute',
          left: '57%',
          top: '58%',
          width: 620,
          height: 620,
          translate: `calc(-50% + ${boil.x}px) calc(-50% + ${boil.y}px)`,
          scale: `${nutGrow}`,
          rotate: `${turn}deg`,
          overflow: 'visible',
        }}
      >
        {/* one ordinary nut, drawn plainly and at rest */}
        <g
          opacity={interpolate(frame, [26, 50], [0, 1], {
            ...clamp,
            easing: ease,
          })}
          transform="translate(400 400)"
        >
          <polygon
            points="0,-96 83,-48 83,48 0,96 -83,48 -83,-48"
            fill={palette.cutaway}
            stroke={palette.ink}
            strokeWidth="11"
          />
          <circle cx="0" cy="0" r="43" fill={palette.paper} stroke={palette.ink} strokeWidth="11" />
          <circle
            cx="0"
            cy="0"
            r={interpolate(ring, [0, 1], [206, 158], clamp)}
            fill="none"
            stroke={palette.coral}
            strokeWidth="6"
            strokeDasharray="16 14"
            opacity={ring * 0.92}
          />
        </g>
      </svg>
      <CaseLabel
        eyebrow="BURIED IN FAILURE TWO"
        headline="ONE NUT"
        note={frame > 62 ? 'ORDINARY · CORRECTLY SIZED' : undefined}
        left={96}
        top={104}
        width={720}
        progress={interpolate(frame, [4, 16], [0, 1], {
          ...clamp,
          easing: ease,
        })}
      />
    </PaperStage>
  );
};

const Later: React.FC = () => {
  const frame = useCurrentFrame();
  // File the nut away, literally, as an unresolved object.
  const file = interpolate(frame, [16, 50], [0, 1], {...clamp, easing: ease});
  const boil = useBoil(0.6);
  const span = plays(cue.later);
  return (
    <PaperStage>
      {/* the camera drifts after the card, then keeps going past the slot */}
      <Camera span={span} scale={[1.0, 1.035]} pan={['0px 0px', '-40px -8px']} origin="76% 44%">
        <div
          style={{
            position: 'absolute',
            left: interpolate(file, [0, 1], [640, 1516], clamp),
            top: interpolate(file, [0, 1], [318, 250], clamp),
            scale: `${interpolate(file, [0, 1], [1, 0.42], clamp)}`,
            rotate: `${interpolate(file, [0, 1], [0, 7], clamp)}deg`,
            opacity: interpolate(file, [0, 0.82, 1], [1, 1, 0.24], clamp),
            translate: `${boil.x}px ${boil.y}px`,
          }}
        >
          <div
            style={{
              width: 372,
              padding: '30px 34px',
              backgroundColor: palette.paperLight,
              border: `7px solid ${palette.ink}`,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <svg viewBox="0 0 220 220" style={{width: 128, height: 128, display: 'block'}}>
              <polygon
                points="110,26 183,68 183,152 110,194 37,152 37,68"
                fill={palette.cutaway}
                stroke={palette.ink}
                strokeWidth="11"
              />
              <circle
                cx="110"
                cy="110"
                r="36"
                fill={palette.paper}
                stroke={palette.ink}
                strokeWidth="11"
              />
            </svg>
            <div
              style={{
                marginTop: 22,
                fontSize: 38,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              ONE NUT
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 21,
                letterSpacing: 4,
                color: palette.reference,
                fontWeight: 700,
              }}
            >
              UNRESOLVED
            </div>
          </div>
        </div>
        {/* the slot it files into */}
        <div
          style={{
            position: 'absolute',
            right: 88,
            top: 224,
            width: 232,
            height: 320,
            border: `5px dashed ${palette.reference}`,
            opacity: interpolate(frame, [10, 28], [0, 0.85], clamp),
          }}
        />
      </Camera>
      <CaseLabel
        eyebrow="SET ASIDE"
        headline="LATER"
        left={96}
        top={104}
        width={520}
        progress={interpolate(frame, [0, 9], [0, 1], {
          ...clamp,
          easing: ease,
        })}
      />
    </PaperStage>
  );
};

const FOUR_WAYS = [
  {index: '01', title: 'THE LANDING', under: 'COMB PLATE'},
  {index: '02', title: 'THE SIDES', under: 'SKIRT BRUSHES'},
  {index: '03', title: 'THE STEP', under: 'SAG DETECTION'},
  {index: '04', title: 'EVERYBODY', under: 'BRAKES · GOVERNOR'},
] as const;

const FourWays: React.FC = () => {
  const frame = useCurrentFrame();
  const span = plays(cue.fourWays);
  return (
    <PaperStage>
      <CaseLabel
        eyebrow="THE PLAN"
        headline={'FOUR WAYS\nTHIS GOES WRONG'}
        note="AND THE MACHINES THAT STOP THEM"
        left={96}
        top={92}
        width={1180}
        progress={interpolate(frame, [0, 12], [0, 1], {
          ...clamp,
          easing: ease,
        })}
      />
      <Camera span={span} scale={[1.0, 1.028]} pan={['0px 22px', '0px -16px']} origin="50% 70%">
        <div
          style={{
            position: 'absolute',
            left: 96,
            right: 96,
            top: 430,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 26,
          }}
        >
          {FOUR_WAYS.map((card, index) => {
            const deal = interpolate(frame, [40 + index * 17, 68 + index * 17], [0, 1], {
              ...clamp,
              easing: ease,
            });
            // the protective device stays concealed beneath — indicated, not revealed
            const lift = interpolate(frame, [116 + index * 12, 146 + index * 12], [0, 1], {
              ...clamp,
              easing: ease,
            });
            return (
              <div
                key={card.index}
                style={{
                  position: 'relative',
                  opacity: deal,
                  translate: interpolate(deal, [0, 1], ['0px 46px', '0px 0px'], clamp),
                  scale: `${interpolate(lift, [0, 0.45, 1], [1, 1.035, 1.012], {...clamp, output: 'perceptual-scale'})}`,
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 10,
                    right: 10,
                    top: interpolate(lift, [0, 1], [14, 40], clamp),
                    bottom: interpolate(lift, [0, 1], [-4, -58], clamp),
                    backgroundColor: palette.cutaway,
                    border: `4px solid ${palette.reference}`,
                    opacity: interpolate(lift, [0, 1], [0, 0.92], clamp),
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: 9,
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: 2.4,
                    color: palette.inkMute,
                  }}
                >
                  {card.under}
                </div>
                <div
                  style={{
                    position: 'relative',
                    height: 232,
                    padding: '26px 24px',
                    backgroundColor: palette.paperLight,
                    border: `6px solid ${palette.ink}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      fontSize: 46,
                      fontWeight: 700,
                      color: palette.reference,
                    }}
                  >
                    {card.index}
                  </div>
                  <div
                    style={{
                      fontSize: 33,
                      fontWeight: 700,
                      letterSpacing: 1.4,
                      lineHeight: 1.08,
                    }}
                  >
                    {card.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Camera>
    </PaperStage>
  );
};

const Descend: React.FC = () => {
  const frame = useCurrentFrame();
  // Camera drops through the visible tread into the mechanism beneath it.
  const drop = interpolate(frame, [8, 92], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const boil = useBoil(0.5);
  const treadTop = 470;
  const treadBottom = 742;
  return (
    <PaperStage>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          translate: `${boil.x}px calc(${interpolate(drop, [0, 1], [0, -604], clamp)}px + ${boil.y}px)`,
        }}
      >
        <svg
          viewBox="0 0 1920 1780"
          style={{position: 'absolute', inset: 0, width: 1920, height: 1780}}
        >
          {/* the tread you can see — full width, so it reads as a floor */}
          <rect
            x="0"
            y={treadTop}
            width="1920"
            height={treadBottom - treadTop}
            fill={palette.paperLight}
          />
          {Array.from({length: 48}).map((_, index) => (
            <line
              key={index}
              x1={22 + index * 40}
              y1={treadTop + 16}
              x2={22 + index * 40}
              y2={treadBottom - 16}
              stroke={palette.reference}
              strokeWidth="8"
            />
          ))}
          <rect x="0" y={treadTop} width="1920" height="20" fill={palette.ink} />
          <rect x="0" y={treadBottom - 20} width="1920" height="20" fill={palette.ink} />

          {/* the walls we fall between — the depth cue that makes it a descent */}
          <g opacity={interpolate(drop, [0.04, 0.4], [0, 1], clamp)}>
            <rect
              x="0"
              y={treadBottom}
              width="132"
              height="1040"
              fill={palette.cutaway}
              opacity="0.5"
            />
            <rect
              x="1788"
              y={treadBottom}
              width="132"
              height="1040"
              fill={palette.cutaway}
              opacity="0.5"
            />
            {Array.from({length: 7}).map((_, index) => (
              <g key={index} stroke={palette.reference} strokeWidth="5" opacity={0.75}>
                <line
                  x1="132"
                  y1={treadBottom + 96 + index * 130}
                  x2="286"
                  y2={treadBottom + 42 + index * 130}
                />
                <line
                  x1="1788"
                  y1={treadBottom + 96 + index * 130}
                  x2="1634"
                  y2={treadBottom + 42 + index * 130}
                />
              </g>
            ))}
          </g>

          {/* and what is underneath: two tracks, two wheels per step */}
          <g opacity={interpolate(drop, [0.3, 0.78], [0, 1], clamp)}>
            <line x1="150" y1="1272" x2="1770" y2="1272" stroke={palette.ink} strokeWidth="13" />
            <line
              x1="150"
              y1="1420"
              x2="1770"
              y2="1420"
              stroke={palette.reference}
              strokeWidth="8"
              strokeDasharray="24 19"
            />
            {Array.from({length: 11}).map((_, index) => (
              <g key={index}>
                <circle
                  cx={214 + index * 150}
                  cy="1272"
                  r="30"
                  fill={palette.paper}
                  stroke={palette.ink}
                  strokeWidth="10"
                />
                <circle
                  cx={262 + index * 150}
                  cy="1420"
                  r="23"
                  fill={palette.cutaway}
                  stroke={palette.ink}
                  strokeWidth="9"
                />
                <line
                  x1={214 + index * 150}
                  y1="1272"
                  x2={262 + index * 150}
                  y2="1420"
                  stroke={palette.inkMute}
                  strokeWidth="7"
                />
              </g>
            ))}
          </g>
        </svg>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 96,
          bottom: 96,
          fontFamily: 'Arial, sans-serif',
          fontSize: 25,
          fontWeight: 700,
          letterSpacing: 5,
          color: palette.reference,
          opacity: interpolate(frame, [4, 20, 74, 92], [0, 1, 1, 0], clamp),
        }}
      >
        WHAT YOU ARE ACTUALLY STANDING ON
      </div>
    </PaperStage>
  );
};

export const FailureMapScene: React.FC = () => {
  const hand = (durationInFrames: number) => linearTiming({durationInFrames});
  return (
    <AbsoluteFill style={{backgroundColor: palette.paper}}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={plays(cue.twoFailures)}>
          <TwoFailures />
        </TransitionSeries.Sequence>
        {/* general case dissolving into the first specific one */}
        <TransitionSeries.Transition presentation={fade()} timing={hand(OVERLAP)} />

        <TransitionSeries.Sequence durationInFrames={plays(cue.driveChain)}>
          <DriveChain />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={hand(OVERLAP)} />

        <TransitionSeries.Sequence durationInFrames={plays(cue.detector)}>
          <Detector />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={hand(OVERLAP)} />

        <TransitionSeries.Sequence durationInFrames={plays(cue.oneNut) + OVERLAP}>
          <OneNut />
        </TransitionSeries.Sequence>
        {/* the one join that is a jump in time, so it is the one long dissolve */}
        <TransitionSeries.Transition presentation={fade()} timing={hand(OVERLAP * 2)} />

        <TransitionSeries.Sequence durationInFrames={plays(cue.later)}>
          <Later />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={hand(OVERLAP)} />

        <TransitionSeries.Sequence durationInFrames={plays(cue.fourWays)}>
          <FourWays />
        </TransitionSeries.Sequence>
        {/* we are about to go down, so the next frame arrives from below */}
        <TransitionSeries.Transition
          presentation={slide({direction: 'from-bottom'})}
          timing={hand(OVERLAP)}
        />

        <TransitionSeries.Sequence durationInFrames={plays(cue.descend, true)}>
          <Descend />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

export const FailureMapReview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: palette.paper}}>
      <FailureMapScene />
      <Audio
        src={staticFile(EPISODE_02_VOICEOVER)}
        trimBefore={FAILURE_MAP_FROM}
        trimAfter={FAILURE_MAP_FROM + FAILURE_MAP_DURATION}
      />
    </AbsoluteFill>
  );
};
