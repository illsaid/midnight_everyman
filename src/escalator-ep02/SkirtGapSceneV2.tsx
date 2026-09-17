import {Audio} from '@remotion/media';
import {AbsoluteFill, Easing, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {EPISODE_02_VOICEOVER} from './lockedPlates';

/**
 * M05 V2 review candidate.
 *
 * V1 solved the lack-of-motion problem by cutting too often and drawing the
 * human-scale hazards as generic blobs. V2 keeps one stable machine geography,
 * limits reframing to a functional change, and makes the shoe, trouser cuff and
 * small hand readable before they approach the gap.
 */
export const SKIRT_GAP_V2_FROM = 2635;
export const SKIRT_GAP_V2_DURATION = 947;

const palette = {
  paper: '#EEE5CF',
  paperLight: '#F7F0DE',
  cutaway: '#C9C1AC',
  ink: '#242622',
  inkMute: '#7C7566',
  coral: '#BD4E3D',
  mustard: '#D5A84C',
  teal: '#356F70',
} as const;

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const land = (frame: number, at: number, from: number, to: number, len = 7) =>
  interpolate(
    frame,
    [at, at + len * 0.68, at + len],
    [from, to + (to - from) * 0.05, to],
    {...clamp, easing: Easing.bezier(0.2, 0.9, 0.25, 1)},
  );

const Stage: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{
      overflow: 'hidden',
      color: palette.ink,
      backgroundColor: palette.paper,
      backgroundImage:
        'radial-gradient(circle at 25% 20%, rgba(36,38,34,0.035) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(36,38,34,0.025) 0 1px, transparent 1.4px)',
      backgroundSize: '17px 17px, 23px 23px',
    }}
  >
    {children}
  </AbsoluteFill>
);

const Shot: React.FC<{from: number; to: number; children: React.ReactNode}> = ({from, to, children}) => (
  <Sequence from={from} durationInFrames={to - from} layout="none">
    {children}
  </Sequence>
);

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
  const entry = land(frame, at, 0, 1, 6);
  if (entry <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        opacity: Math.min(entry * 1.6, 1),
        translate: `${(1 - entry) * -26}px 0px`,
        fontFamily: 'Jost, Arial, sans-serif',
        whiteSpace: 'pre-line',
      }}
    >
      {eyebrow ? (
        <div style={{fontSize: 21, fontWeight: 700, letterSpacing: 5, color: palette.inkMute, marginBottom: 9}}>
          {eyebrow}
        </div>
      ) : null}
      <div style={{fontSize: size, fontWeight: 700, letterSpacing: 1, lineHeight: 1.04, color: colour}}>{text}</div>
      <div style={{height: 8, width: land(frame, at + 3, 0, 196, 8), backgroundColor: colour, marginTop: 14}} />
    </div>
  );
};

const Caption: React.FC<{
  at: number;
  left: number;
  top: number;
  text: string;
  colour?: string;
}> = ({at, left, top, text, colour = palette.inkMute}) => {
  const frame = useCurrentFrame();
  const entry = land(frame, at, 0, 1, 5);
  if (entry <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        opacity: Math.min(entry * 1.8, 1),
        translate: `0px ${(1 - entry) * 14}px`,
        fontFamily: 'Courier Prime, Courier New, monospace',
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: 3.2,
        color: colour,
        backgroundColor: palette.paper,
        boxShadow: `0 0 0 14px ${palette.paper}`,
      }}
    >
      {text}
    </div>
  );
};

const cue = {
  theSides: {from: 0, to: 67},
  millimetres: {from: 67, to: 350},
  theBrush: {from: 350, to: 448},
  notAShoeBrush: {from: 448, to: 504},
  beforeMachinery: {from: 504, to: 575},
  moveIn: {from: 575, to: 668},
  secondLine: {from: 668, to: 834},
  warningApology: {from: 834, to: 947},
} as const;

type Risk = 'shoe' | 'fabric' | 'hand';

type MachineProps = {
  accentGap?: boolean;
  brush?: boolean;
  brushBend?: number;
  measureGap?: boolean;
  obstruction?: number;
  risk?: Risk;
  riskAdvance?: number;
  showSwitch?: boolean;
  stopped?: boolean;
  trip?: number;
};

const Shadow: React.FC<{x: number; y: number; width: number; height: number; rx?: number}> = ({
  x,
  y,
  width,
  height,
  rx = 10,
}) => <rect x={x + 12} y={y + 14} width={width} height={height} rx={rx} fill={palette.ink} opacity={0.13} />;

const Step: React.FC<{travel: number; stopped?: boolean}> = ({travel, stopped = false}) => {
  const ink = stopped ? palette.inkMute : palette.ink;
  return (
    <g>
      <Shadow x={58} y={390} width={652} height={208} rx={18} />
      <rect x={58} y={390} width={652} height={208} rx={18} fill={palette.cutaway} stroke={ink} strokeWidth={12} />
      <path d="M58 454 H710" stroke={ink} strokeWidth={9} />
      <g clipPath="url(#v2-step-top)">
        {Array.from({length: 24}).map((_, index) => {
          const x = 66 + ((index * 29 + travel) % 680);
          return <path key={index} d={`M${x} 397 V448`} stroke={ink} strokeWidth={8} opacity={0.72} />;
        })}
      </g>
      <path
        d="M92 518 l54 64 M176 518 l54 64 M260 518 l54 64 M344 518 l54 64 M428 518 l54 64 M512 518 l54 64 M596 518 l54 64"
        stroke={ink}
        strokeWidth={4}
        opacity={0.34}
      />
      <circle cx={158} cy={548} r={24} fill={palette.paperLight} stroke={ink} strokeWidth={9} />
      <circle cx={608} cy={548} r={24} fill={palette.paperLight} stroke={ink} strokeWidth={9} />
      <clipPath id="v2-step-top">
        <rect x={58} y={390} width={652} height={64} />
      </clipPath>
    </g>
  );
};

const Panel: React.FC<{opacity?: number}> = ({opacity = 1}) => (
  <g opacity={opacity}>
    <rect x={710} y={184} width={38} height={474} fill={palette.ink} opacity={0.9} />
    <Shadow x={748} y={102} width={190} height={562} rx={12} />
    <rect x={748} y={102} width={190} height={562} rx={12} fill={palette.paperLight} stroke={palette.ink} strokeWidth={12} />
    <path d="M790 190 V590 M843 190 V590 M896 190 V590" stroke={palette.inkMute} strokeWidth={4} opacity={0.44} />
    <circle cx={843} cy={152} r={12} fill={palette.inkMute} />
    <circle cx={843} cy={624} r={12} fill={palette.inkMute} />
  </g>
);

const Brush: React.FC<{bend?: number}> = ({bend = 0}) => (
  <g>
    <Shadow x={714} y={284} width={36} height={128} rx={5} />
    <rect x={712} y={278} width={38} height={128} rx={5} fill={palette.cutaway} stroke={palette.ink} strokeWidth={8} />
    {Array.from({length: 15}).map((_, index) => {
      const y = 288 + index * 7.3;
      const tipX = 596 - bend * 22;
      const tipY = y + bend * 16;
      return <path key={index} d={`M712 ${y} Q654 ${y + bend * 5} ${tipX} ${tipY}`} stroke={palette.ink} strokeWidth={4.5} fill="none" />;
    })}
  </g>
);

const Shoe: React.FC<{advance: number}> = ({advance}) => {
  const x = 286 + advance * 270;
  return (
    <g transform={`translate(${x} 278)`}>
      <ellipse cx={142} cy={118} rx={144} ry={16} fill={palette.ink} opacity={0.13} />
      <path
        d="M8 92 Q18 48 58 32 L88 12 L162 18 L194 54 Q232 64 264 82 Q278 90 270 106 H26 Q6 106 8 92 Z"
        fill={palette.paperLight}
        stroke={palette.ink}
        strokeWidth={10}
        strokeLinejoin="round"
      />
      <path d="M28 104 H270 Q278 104 276 118 H28 Q14 118 12 108 Z" fill={palette.cutaway} stroke={palette.ink} strokeWidth={7} />
      <path d="M84 32 L152 74 M112 28 L178 70 M146 30 L202 68" stroke={palette.inkMute} strokeWidth={5} />
      <path d="M62 32 Q88 58 92 88" fill="none" stroke={palette.ink} strokeWidth={7} />
    </g>
  );
};

const TrouserCuff: React.FC<{advance: number}> = ({advance}) => {
  const x = 370 + advance * 226;
  return (
    <g transform={`translate(${x} 58)`}>
      <ellipse cx={126} cy={338} rx={132} ry={16} fill={palette.ink} opacity={0.13} />
      <path
        d="M10 0 H190 L176 248 Q174 284 214 326 L150 338 Q116 304 94 270 Q70 306 34 324 L0 290 Q34 250 30 206 Z"
        fill={palette.paperLight}
        stroke={palette.ink}
        strokeWidth={10}
        strokeLinejoin="round"
      />
      <path d="M24 244 Q86 266 178 246" fill="none" stroke={palette.inkMute} strokeWidth={7} />
      <path d="M54 18 Q74 122 56 230 M132 18 Q148 122 134 242" fill="none" stroke={palette.inkMute} strokeWidth={4} opacity={0.55} />
      <path d="M146 326 Q182 308 214 326" fill="none" stroke={palette.coral} strokeWidth={8} strokeLinecap="round" />
    </g>
  );
};

const SmallHand: React.FC<{advance: number}> = ({advance}) => {
  const x = 248 + advance * 286;
  return (
    <g transform={`translate(${x} 278)`}>
      <ellipse cx={220} cy={130} rx={214} ry={16} fill={palette.ink} opacity={0.13} />
      <rect x={0} y={64} width={150} height={72} rx={34} fill={palette.paperLight} stroke={palette.ink} strokeWidth={10} />
      <path
        d="M112 46 Q112 24 134 24 H276 Q294 24 294 42 Q294 60 276 60 H154
           H304 Q324 60 324 80 Q324 100 304 100 H154
           H288 Q308 100 308 120 Q308 140 288 140 H148
           H252 Q272 140 272 160 Q272 180 252 180 H132
           Q82 180 70 132 Q62 94 84 66 Q96 50 112 46 Z"
        fill={palette.paperLight}
        stroke={palette.ink}
        strokeWidth={10}
        strokeLinejoin="round"
      />
      <path d="M84 92 Q130 104 164 156" fill="none" stroke={palette.ink} strokeWidth={18} strokeLinecap="round" />
      <path d="M24 100 H82" stroke={palette.inkMute} strokeWidth={5} />
    </g>
  );
};

const Switch: React.FC<{trip: number}> = ({trip}) => {
  const colour = trip > 0.98 ? palette.teal : palette.ink;
  const contactX = 1054 + trip * 28;
  return (
    <g>
      <Shadow x={970} y={304} width={206} height={160} rx={12} />
      <rect x={970} y={304} width={206} height={160} rx={12} fill={palette.paperLight} stroke={colour} strokeWidth={11} />
      <path d="M998 426 l34 28 M1042 426 l34 28" stroke={colour} strokeWidth={4} opacity={0.35} />
      <circle cx={1018} cy={352} r={13} fill={palette.paper} stroke={colour} strokeWidth={7} />
      <circle cx={contactX} cy={352} r={13} fill={palette.paper} stroke={colour} strokeWidth={7} />
      <path d="M1018 330 V306 M1054 330 V306" stroke={colour} strokeWidth={8} strokeLinecap="round" />
      <path d="M1100 336 l18 12 -18 12 18 12 -18 12 18 12" fill="none" stroke={colour} strokeWidth={7} />
      <circle cx={1140} cy={410} r={20} fill={palette.paper} stroke={colour} strokeWidth={9} />
      <circle cx={1140} cy={410} r={6} fill={colour} />
      <g transform={`rotate(${-18 * trip} 1140 410)`}>
        <path d="M1140 410 L742 342" stroke={colour} strokeWidth={13} strokeLinecap="round" />
        <circle cx={742} cy={342} r={18} fill={palette.cutaway} stroke={colour} strokeWidth={8} />
      </g>
    </g>
  );
};

const Machine: React.FC<MachineProps> = ({
  accentGap = false,
  brush = false,
  brushBend = 0,
  measureGap = false,
  obstruction = 0,
  risk,
  riskAdvance = 0,
  showSwitch = false,
  stopped = false,
  trip = 0,
}) => {
  const frame = useCurrentFrame();
  return (
    <g>
      <Step travel={stopped ? 116 : frame * 2.1} stopped={stopped} />
      {showSwitch ? <Switch trip={trip} /> : null}
      <Panel opacity={showSwitch ? 0.72 : 1} />
      {brush ? <Brush bend={brushBend} /> : null}
      {risk === 'shoe' ? <Shoe advance={riskAdvance} /> : null}
      {risk === 'fabric' ? <TrouserCuff advance={riskAdvance} /> : null}
      {risk === 'hand' ? <SmallHand advance={riskAdvance} /> : null}
      {obstruction > 0 ? (
        <rect
          x={612 + obstruction * 112}
          y={320}
          width={56}
          height={84}
          rx={10}
          fill={palette.coral}
          stroke={palette.ink}
          strokeWidth={8}
        />
      ) : null}
      {accentGap ? (
        <rect x={700} y={176} width={58} height={490} rx={20} fill="none" stroke={palette.coral} strokeWidth={8} strokeDasharray="18 15" />
      ) : null}
      {measureGap ? (
        <g stroke={palette.coral} fill={palette.coral}>
          <path d="M710 254 H748 M710 238 V270 M748 238 V270" strokeWidth={6} />
          <path d="M718 246 L710 254 L718 262 Z M740 246 L748 254 L740 262 Z" />
        </g>
      ) : null}
    </g>
  );
};

const MachineView: React.FC<MachineProps & {viewBox?: string}> = ({viewBox = '0 0 1200 700', ...props}) => (
  <svg
    viewBox={viewBox}
    preserveAspectRatio="xMidYMid slice"
    style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}
  >
    <Machine {...props} />
  </svg>
);

const RiskLabel: React.FC<{text: string}> = ({text}) => (
  <div
    style={{
      position: 'absolute',
      left: 112,
      bottom: 98,
      padding: '12px 18px 10px',
      backgroundColor: palette.paper,
      color: palette.ink,
      fontFamily: 'Arial, sans-serif',
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: 3.5,
      boxShadow: `0 0 0 3px ${palette.ink}`,
    }}
  >
    {text}
  </div>
);

const TheSides: React.FC = () => {
  return (
    <Stage>
      <Shot from={0} to={34}>
        <MachineView accentGap />
        <Slam at={1} left={112} top={118} eyebrow="FAILURE TWO" text="THE SIDES" size={92} />
      </Shot>
      <Shot from={34} to={67}>
        <MachineView viewBox="510 142 520 380" accentGap measureGap />
        <Caption at={2} left={112} top={890} text="MOVING STEP · NARROW GAP · FIXED PANEL" />
      </Shot>
    </Stage>
  );
};

const Millimetres: React.FC = () => {
  const frame = useCurrentFrame();
  const risk: Risk = frame < 124 ? 'shoe' : frame < 171 ? 'fabric' : 'hand';
  const start = frame < 124 ? 78 : frame < 171 ? 124 : 171;
  const riskAdvance = land(frame, start, 0, 0.72, 12);
  return (
    <Stage>
      <Shot from={0} to={78}>
        <MachineView viewBox="530 160 490 350" accentGap measureGap />
        <Slam at={8} left={112} top={118} eyebrow="THE CLEARANCE" text={'ONLY\nMILLIMETRES'} size={86} colour={palette.coral} />
      </Shot>
      <Shot from={78} to={218}>
        <MachineView viewBox="120 54 930 610" accentGap risk={risk} riskAdvance={riskAdvance} />
        <RiskLabel text={risk === 'shoe' ? 'RUBBER' : risk === 'fabric' ? 'LOOSE FABRIC' : 'SMALL HAND'} />
      </Shot>
      <Shot from={218} to={283}>
        <MachineView viewBox="410 170 630 420" accentGap risk="hand" riskAdvance={0.72} />
        <Slam at={6} left={112} top={124} eyebrow="THE PROBLEM" text={'SOFT THINGS\nDEFORM'} size={78} colour={palette.coral} />
      </Shot>
    </Stage>
  );
};

const TheBrush: React.FC = () => (
  <Stage>
    <Shot from={0} to={50}>
      <MachineView brush risk="shoe" riskAdvance={0.42} />
      <Slam at={2} left={112} top={118} eyebrow="THE SIDES" text="THE BRUSH" size={92} />
    </Shot>
    <Shot from={50} to={98}>
      <MachineView viewBox="490 190 470 330" brush />
      <Caption at={6} left={112} top={892} text="STIFF · FIXED · AT ANKLE HEIGHT" />
    </Shot>
  </Stage>
);

const NotAShoeBrush: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      <MachineView viewBox="215 130 840 520" brush risk="shoe" riskAdvance={0.4} />
      <Slam at={1} left={112} top={118} eyebrow="COMMON GUESS" text={'SHOE\nCLEANER'} size={76} />
      <div
        style={{
          position: 'absolute',
          left: 102,
          top: 290,
          width: land(frame, 20, 0, 300, 8),
          height: 14,
          backgroundColor: palette.coral,
          rotate: '-6deg',
        }}
      />
      <Caption at={30} left={112} top={888} text="IT IS NOT CLEANING ANYTHING" colour={palette.coral} />
    </Stage>
  );
};

const BeforeMachinery: React.FC = () => {
  const frame = useCurrentFrame();
  const contact = land(frame, 12, 0, 1, 11);
  return (
    <Stage>
      <MachineView
        viewBox="260 126 760 520"
        brush
        brushBend={contact * 0.75}
        risk="shoe"
        riskAdvance={0.42 + contact * 0.22}
      />
      <Slam at={1} left={112} top={112} eyebrow="ORDER OF CONTACT" text={'BRUSH\nFIRST'} size={80} colour={palette.mustard} />
      <Caption at={28} left={112} top={892} text="BEFORE THE SHOE CAN REACH THE GAP" />
    </Stage>
  );
};

const MoveIn: React.FC = () => {
  const frame = useCurrentFrame();
  const nudge = land(frame, 20, 0.64, 0.04, 14);
  const bend = land(frame, 18, 0.75, 0.14, 14);
  return (
    <Stage>
      <MachineView viewBox="150 86 940 610" brush brushBend={bend} risk="shoe" riskAdvance={nudge} />
      <Slam at={1} left={112} top={112} eyebrow="THE MESSAGE" text={'MOVE\nINWARD'} size={82} colour={palette.mustard} />
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <path d="M1450 610 H1170" stroke={palette.mustard} strokeWidth={14} strokeLinecap="round" />
        <path d="M1170 610 l48 -28 v56 Z" fill={palette.mustard} />
      </svg>
      <Caption at={42} left={112} top={892} text="AWAY FROM THE EDGE" />
    </Stage>
  );
};

const SecondLine: React.FC = () => {
  const frame = useCurrentFrame();
  const obstruction = land(frame, 58, 0, 1, 14);
  const trip = land(frame, 84, 0, 1, 9);
  return (
    <Stage>
      <Shot from={0} to={58}>
        <MachineView viewBox="310 92 900 600" brush showSwitch />
        <Slam at={2} left={112} top={112} eyebrow="IF FITTED" text={'A SECOND\nLINE'} size={78} />
        <Caption at={28} left={112} top={892} text="A SWITCH WAITS BEHIND THE PANEL" />
      </Shot>
      <Shot from={58} to={116}>
        <MachineView viewBox="420 162 760 500" brush brushBend={0.55} showSwitch obstruction={obstruction} trip={trip} />
        <Caption at={32} left={112} top={892} text="CIRCUIT INTERRUPTED" colour={palette.teal} />
      </Shot>
      <Shot from={116} to={166}>
        <MachineView viewBox="290 86 920 610" brush brushBend={0.55} showSwitch obstruction={1} trip={1} stopped />
        <Slam at={6} left={112} top={150} eyebrow="PROTECTION WORKED" text="STOPPED" size={92} colour={palette.teal} />
      </Shot>
    </Stage>
  );
};

const WarningApology: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      <div style={{position: 'absolute', left: 0, right: '50%', top: 230, bottom: 0, overflow: 'hidden'}}>
        <svg viewBox="430 175 440 390" preserveAspectRatio="xMidYMid slice" style={{width: '100%', height: '100%'}}>
          <Machine brush brushBend={0.4} />
        </svg>
      </div>
      <div style={{position: 'absolute', left: '50%', right: 0, top: 230, bottom: 0, overflow: 'hidden', opacity: frame >= 44 ? 1 : 0}}>
        <svg viewBox="870 230 350 330" preserveAspectRatio="xMidYMid slice" style={{width: '100%', height: '100%'}}>
          <Machine showSwitch trip={1} stopped />
        </svg>
      </div>
      <div style={{position: 'absolute', left: 958, top: 210, bottom: 90, width: 4, backgroundColor: palette.inkMute, opacity: 0.45}} />
      <Slam at={2} left={82} top={84} eyebrow="THE BRUSH IS" text="THE WARNING" size={64} />
      {frame >= 48 ? (
        <Slam at={48} left={1028} top={84} eyebrow="THE SWITCH IS" text="THE APOLOGY" size={64} colour={palette.teal} />
      ) : null}
    </Stage>
  );
};

export const SkirtGapSceneV2: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    {(
      [
        ['M05 V2 · cue 28 · the sides', cue.theSides, TheSides],
        ['M05 V2 · cue 29 · only millimetres', cue.millimetres, Millimetres],
        ['M05 V2 · cue 30 · the brush', cue.theBrush, TheBrush],
        ['M05 V2 · cue 31 · not a shoe brush', cue.notAShoeBrush, NotAShoeBrush],
        ['M05 V2 · cue 32 · before machinery', cue.beforeMachinery, BeforeMachinery],
        ['M05 V2 · cue 33 · move inward', cue.moveIn, MoveIn],
        ['M05 V2 · cue 34 · second line', cue.secondLine, SecondLine],
        ['M05 V2 · cue 35 · warning and apology', cue.warningApology, WarningApology],
      ] as const
    ).map(([name, range, Component]) => (
      <Sequence key={name} name={name} from={range.from} durationInFrames={range.to - range.from}>
        <Component />
      </Sequence>
    ))}
  </AbsoluteFill>
);

export const SkirtGapV2Review: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <SkirtGapSceneV2 />
    <Audio
      src={staticFile(EPISODE_02_VOICEOVER)}
      trimBefore={SKIRT_GAP_V2_FROM}
      trimAfter={SKIRT_GAP_V2_FROM + SKIRT_GAP_V2_DURATION}
    />
  </AbsoluteFill>
);
