import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  useCurrentFrame,
} from 'remotion';

/**
 * M02 grammar test — cues 08 and 09 rebuilt.
 *
 * Two changes from the approved scene:
 *   1. Shot changes. Each cue is cut into 3-4 framings instead of one wide hold.
 *      A cut is an event; a drift is not.
 *   2. Weight in the drawing. Cast shadow on the paper, varied stroke, overlap,
 *      hatching. The parts are objects sitting on a sheet, not a schematic.
 *
 * Timing is explainer grammar: a move lands inside 8 frames or it does not happen.
 * The look stays house — coral and ink, no red, no outlined caps.
 */

const palette = {
  paper: '#EEE5CF',
  paperLight: '#F7F0DE',
  ink: '#242622',
  inkMid: '#4A4A42',
  inkMute: '#7C7566',
  cutaway: '#C9C1AC',
  coral: '#BD4E3D',
  mustard: '#D5A84C',
} as const;

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const OUT = Easing.bezier(0.2, 0.9, 0.25, 1);

/** A move that lands. Overshoots by 5% at 70% of its length, then settles. */
const land = (frame: number, at: number, from: number, to: number, len = 7) =>
  interpolate(
    frame,
    [at, at + len * 0.68, at + len],
    [from, to + (to - from) * 0.05, to],
    {...clamp, easing: OUT},
  );

const paperTexture: React.CSSProperties = {
  backgroundColor: palette.paper,
  backgroundImage:
    'radial-gradient(circle at 25% 20%, rgba(36,38,34,0.035) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(36,38,34,0.025) 0 1px, transparent 1.4px)',
  backgroundSize: '17px 17px, 23px 23px',
};

const Stage: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{...paperTexture, color: palette.ink, overflow: 'hidden'}}>
    {children}
  </AbsoluteFill>
);

/** Hard cut between framings inside a cue. */
const Shot: React.FC<{from: number; to: number; children: React.ReactNode}> = ({
  from,
  to,
  children,
}) => (
  <Sequence from={from} durationInFrames={to - from} layout="none">
    {children}
  </Sequence>
);

/** Push-in that lands and then holds dead still. */
const PushIn: React.FC<{
  children: React.ReactNode;
  from: number;
  to: number;
  origin: string;
  len?: number;
}> = ({children, from, to, origin, len = 10}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        transformOrigin: origin,
        scale: `${interpolate(frame, [0, len], [from, to], {
          ...clamp,
          easing: OUT,
          output: 'perceptual-scale',
        })}`,
      }}
    >
      {children}
    </div>
  );
};

/** House arrow: tapered shaft, solid head, snaps on from the tail. */
const Arrow: React.FC<{
  x: number;
  y: number;
  angle: number;
  length: number;
  at: number;
  colour?: string;
}> = ({x, y, angle, length, at, colour = palette.coral}) => {
  const frame = useCurrentFrame();
  const grow = land(frame, at, 0, 1, 7);
  if (grow <= 0) return null;
  const L = length * grow;
  return (
    <svg
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: length + 60,
        height: 120,
        overflow: 'visible',
        rotate: `${angle}deg`,
        transformOrigin: '0px 60px',
      }}
    >
      <path
        d={`M0 54 L${Math.max(L - 44, 0)} 50 L${Math.max(L - 44, 0)} 70 L0 66 Z`}
        fill={colour}
        opacity={grow}
      />
      <path
        d={`M${L - 46} 32 L${L} 60 L${L - 46} 88 Z`}
        fill={colour}
        opacity={grow}
      />
    </svg>
  );
};

/** Type that slams. */
const Slam: React.FC<{
  at: number;
  left: number;
  top: number;
  eyebrow?: string;
  text: string;
  size?: number;
  colour?: string;
}> = ({at, left, top, eyebrow, text, size = 78, colour = palette.ink}) => {
  const frame = useCurrentFrame();
  const inn = land(frame, at, 0, 1, 6);
  if (inn <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        opacity: Math.min(inn * 1.6, 1),
        translate: `${(1 - inn) * -26}px 0px`,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {eyebrow ? (
        <div
          style={{
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: 5,
            color: palette.inkMute,
            marginBottom: 9,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div style={{fontSize: size, fontWeight: 700, letterSpacing: 1, lineHeight: 1.02, color: colour}}>
        {text}
      </div>
      <div
        style={{
          height: 8,
          width: land(frame, at + 3, 0, 196, 8),
          backgroundColor: colour,
          marginTop: 14,
        }}
      />
    </div>
  );
};

/**
 * One chain link, drawn as an object rather than a symbol: cast shadow on the
 * sheet, heavy outer contour, lighter interior, hatched lower face, visible pins.
 */
const Link: React.FC<{x: number; scale: number; state: 'live' | 'broken' | 'dead'}> = ({
  x,
  scale,
  state,
}) => {
  const stroke =
    state === 'broken' ? palette.coral : state === 'dead' ? palette.inkMute : palette.ink;
  const fill = state === 'dead' ? palette.paperLight : palette.cutaway;
  return (
    <g transform={`translate(${x} 0) scale(${scale})`}>
      {/* the sheet underneath */}
      <rect x={-6} y={22} width={188} height={92} rx={46} fill={palette.ink} opacity={0.13} />
      <rect
        x={0}
        y={0}
        width={188}
        height={104}
        rx={52}
        fill={fill}
        stroke={stroke}
        strokeWidth={13}
      />
      {/* hatched lower face gives it a thickness */}
      <path
        d={`M26 78 L52 104 M54 78 L80 104 M82 78 L108 104 M110 78 L136 104`}
        stroke={stroke}
        strokeWidth={4}
        opacity={0.42}
      />
      <rect
        x={44}
        y={28}
        width={100}
        height={48}
        rx={24}
        fill={palette.paper}
        stroke={stroke}
        strokeWidth={7}
      />
      <circle cx={24} cy={52} r={11} fill={stroke} />
      <circle cx={164} cy={52} r={11} fill={stroke} />
    </g>
  );
};

/* ------------------------------------------------------------------ cue 08 */

const DriveChainV2: React.FC = () => {
  const frame = useCurrentFrame();
  const broken = frame >= 16;
  const gap = land(frame, 16, 0, 62, 6);
  // the coral travels down the chain in three-frame steps, a visible wave
  const wave = (i: number) => (frame >= 22 + (i - 4) * 3 ? 'dead' : 'live');
  const flash = frame >= 18 && frame < 20;

  return (
    <Stage>
      {/* SHOT A — macro, three links, intact */}
      <Shot from={0} to={16}>
        <PushIn from={1.0} to={1.06} origin="46% 50%" len={16}>
          <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
            <g transform="translate(150 470)">
              <Link x={0} scale={2.1} state="live" />
              <Link x={420} scale={2.1} state="live" />
              <Link x={840} scale={2.1} state="live" />
              <Link x={1260} scale={2.1} state="live" />
            </g>
          </svg>
        </PushIn>
        <Slam at={1} left={112} top={150} eyebrow="FAILURE ONE" text={'1 · DRIVE CHAIN'} size={82} />
      </Shot>

      {/* SHOT B — hard cut to the break itself, much tighter */}
      <Shot from={16} to={34}>
        {flash ? (
          <AbsoluteFill style={{backgroundColor: palette.coral, opacity: 0.22}} />
        ) : null}
        <PushIn from={1.0} to={1.13} origin="50% 52%" len={18}>
          <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
            <g transform="translate(190 430)">
              <Link x={0} scale={3.0} state="live" />
              <Link x={600} scale={3.0} state={broken ? 'broken' : 'live'} />
              <g transform={`translate(${gap * 6} 0)`}>
                <Link x={1200} scale={3.0} state={broken ? 'dead' : 'live'} />
              </g>
            </g>
          </svg>
        </PushIn>
      </Shot>

      {/* SHOT C — cut out. the whole run is dead, and it gets named */}
      <Shot from={34} to={57}>
        <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
          <g transform="translate(120 560)">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i} transform={`translate(${i >= 4 ? 70 : 0} 0)`}>
                <Link
                  x={i * 280}
                  scale={1.28}
                  state={i === 4 ? 'broken' : i > 4 ? wave(i) : 'live'}
                />
              </g>
            ))}
          </g>
        </svg>
        <Arrow x={1240} y={330} angle={58} length={210} at={2} />
        <Slam
          at={8}
          left={112}
          top={150}
          eyebrow="FAILURE ONE"
          text="METAL FATIGUE"
          size={86}
          colour={palette.coral}
        />
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------------ cue 09 */

/**
 * A skirt-obstruction switch, drawn as a machine: bracket, housing, a pivoted
 * actuator arm with a roller, the return spring, and the contact pair it is
 * supposed to open. `armed` shows it at rest. `inert` is the same pose in coral —
 * a device that failed to fire must NOT animate into its tripped pose (D-022,
 * diagram-layer.md).
 */
const Detector: React.FC<{state: 'armed' | 'inert'; scale: number}> = ({state, scale}) => {
  const c = state === 'inert' ? palette.coral : palette.ink;
  return (
    <g transform={`scale(${scale})`}>
      {/* the sheet underneath */}
      <rect x={72} y={38} width={330} height={196} rx={8} fill={palette.ink} opacity={0.13} />

      {/* mounting bracket */}
      <path
        d="M40 14 L40 236 L96 236 L96 200 L66 200 L66 50 L96 50 L96 14 Z"
        fill={palette.cutaway}
        stroke={c}
        strokeWidth={10}
        strokeLinejoin="round"
      />

      {/* housing */}
      <rect x={96} y={30} width={306} height={190} rx={8} fill={palette.paperLight} stroke={c} strokeWidth={13} />
      <path d="M118 176 L152 220 M164 176 L198 220 M210 176 L244 220" stroke={c} strokeWidth={4} opacity={0.38} />

      {/* contact pair — the thing that is meant to open */}
      <path d="M136 56 L136 92" stroke={c} strokeWidth={11} strokeLinecap="round" />
      <path d="M200 56 L200 92" stroke={c} strokeWidth={11} strokeLinecap="round" />
      <circle cx={136} cy={106} r={14} fill={palette.paper} stroke={c} strokeWidth={9} />
      <circle cx={200} cy={106} r={14} fill={palette.paper} stroke={c} strokeWidth={9} />
      <path d="M136 132 L136 150 L200 150 L200 132" fill="none" stroke={c} strokeWidth={7} opacity={0.5} />

      {/* return spring */}
      <path
        d="M236 70 L258 84 L236 98 L258 112 L236 126 L258 140"
        fill="none"
        stroke={c}
        strokeWidth={8}
        strokeLinejoin="round"
      />

      {/* pivot and actuator arm, at rest */}
      <circle cx={300} cy={104} r={26} fill={palette.paper} stroke={c} strokeWidth={11} />
      <circle cx={300} cy={104} r={7} fill={c} />
      <path d="M300 104 L470 104" stroke={c} strokeWidth={17} strokeLinecap="round" />
      <circle cx={486} cy={104} r={26} fill={palette.cutaway} stroke={c} strokeWidth={11} />
    </g>
  );
};

const DetectorV2: React.FC = () => {
  const frame = useCurrentFrame();
  // the signal advances in discrete pulses, not a glide
  const pulse = Math.min(Math.max(Math.floor((frame - 22) / 4), 0), 7);
  const arrived = frame >= 50;
  const inert = frame >= 73;

  return (
    <Stage>
      {/* SHOT A — the device, close and heavy */}
      <Shot from={0} to={21}>
        <PushIn from={1.0} to={1.07} origin="58% 54%" len={21}>
          <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
            <g transform="translate(640 470)">
              <Detector state="armed" scale={1.7} />
            </g>
          </svg>
        </PushIn>
        <Slam at={1} left={112} top={150} eyebrow="FAILURE TWO" text={'2 · THE DETECTOR'} size={80} />
      </Shot>

      {/* SHOT B — cut wide. the signal steps down the path toward it */}
      <Shot from={21} to={51}>
        <PushIn from={1.0} to={1.09} origin="40% 58%" len={30}>
          <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
            <path
              d="M330 250 C330 470 700 520 1180 690"
              fill="none"
              stroke={palette.inkMute}
              strokeWidth={7}
              strokeDasharray="16 18"
            />
            <g transform="translate(220 170)">
              <Link x={0} scale={1.1} state="broken" />
            </g>
            <g transform="translate(1180 620) scale(0.8)">
              <Detector state="armed" scale={1.0} />
            </g>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              if (i > pulse) return null;
              const t = i / 7;
              const u = 1 - t;
              // the same cubic the dashed guide is drawn from
              const px = u * u * u * 330 + 3 * u * u * t * 330 + 3 * u * t * t * 700 + t * t * t * 1180;
              const py = u * u * u * 250 + 3 * u * u * t * 470 + 3 * u * t * t * 520 + t * t * t * 690;
              return (
                <circle
                  key={i}
                  cx={px}
                  cy={py}
                  r={i === pulse ? 26 : 13}
                  fill={palette.mustard}
                  opacity={i === pulse ? 1 : 0.26}
                  stroke={palette.ink}
                  strokeWidth={i === pulse ? 6 : 0}
                />
              );
            })}
          </svg>
        </PushIn>
        <Slam at={2} left={112} top={812} eyebrow="THE SIGNAL" text="TRAVELS" size={64} />
      </Shot>

      {/* SHOT C — macro on the device. the signal lands. nothing moves. */}
      <Shot from={51} to={96}>
        <PushIn from={1.16} to={1.0} origin="52% 52%" len={7}>
          <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
            <g transform="translate(430 420)">
              <Detector state={inert ? 'inert' : 'armed'} scale={2.2} />
            </g>
            {arrived ? (
              <circle cx={1512} cy={648} r={30} fill={palette.mustard} stroke={palette.ink} strokeWidth={7} />
            ) : null}
            {inert ? (
              <path
                d={`M448 392 L${land(frame - 51, 22, 448, 1272, 6)} 812`}
                stroke={palette.coral}
                strokeWidth={17}
                strokeLinecap="round"
              />
            ) : null}
          </svg>
        </PushIn>
        {inert ? <Arrow x={1330} y={318} angle={54} length={190} at={26} /> : null}
        {inert ? (
          <Slam
            at={24}
            left={112}
            top={150}
            eyebrow="FAILURE TWO"
            text="DID NOT ACTUATE"
            size={80}
            colour={palette.coral}
          />
        ) : null}
      </Shot>
    </Stage>
  );
};

export const FAILURE_MAP_V2_DEMO_DURATION = 153;

export const FailureMapV2Demo: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <Sequence name="cue 08 · drive chain" durationInFrames={57}>
      <DriveChainV2 />
    </Sequence>
    <Sequence name="cue 09 · detector" from={57} durationInFrames={96}>
      <DetectorV2 />
    </Sequence>
  </AbsoluteFill>
);
