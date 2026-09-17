import {Audio, Video} from '@remotion/media';
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {SafeAreaGuides} from '../vertical/ShortsSafeArea';

export const BRUSH_SHORT_916_DURATION = 830;

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

const land = (frame: number, at: number, from: number, to: number, len = 8) =>
  interpolate(
    frame,
    [at, at + len * 0.68, at + len],
    [from, to + (to - from) * 0.05, to],
    {...clamp, easing: Easing.bezier(0.2, 0.9, 0.25, 1)},
  );

const media = (name: string) => staticFile(`episode-02/generated/brush-short/${name}`);

const Paper: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{
      overflow: 'hidden',
      color: palette.ink,
      backgroundColor: palette.paper,
      backgroundImage:
        'radial-gradient(circle at 25% 20%, rgba(36,38,34,0.035) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(36,38,34,0.025) 0 1px, transparent 1.4px)',
      backgroundSize: '17px 17px, 23px 23px',
      fontFamily: 'Jost, Arial, sans-serif',
    }}
  >
    {children}
  </AbsoluteFill>
);

const GeneratedPlate: React.FC<{src: string; trimBefore?: number}> = ({src, trimBefore = 0}) => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <Video
      src={media(src)}
      trimBefore={trimBefore}
      muted
      objectFit="cover"
      style={{width: '100%', height: '100%', objectPosition: 'center'}}
    />
    <AbsoluteFill
      style={{
        background:
          'linear-gradient(to bottom, rgba(238,229,207,0.16), transparent 22%, transparent 72%, rgba(36,38,34,0.12))',
      }}
    />
  </AbsoluteFill>
);

const Headline: React.FC<{
  at?: number;
  eyebrow?: string;
  text: string;
  colour?: string;
  top?: number;
  size?: number;
}> = ({at = 0, eyebrow, text, colour = palette.ink, top = 282, size = 76}) => {
  const frame = useCurrentFrame();
  const entry = land(frame, at, 0, 1, 7);
  if (entry <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left: 64,
        right: 168,
        top,
        opacity: Math.min(entry * 1.7, 1),
        translate: `${(1 - entry) * -30}px 0px`,
        filter: 'drop-shadow(0 5px 0 rgba(238,229,207,0.92))',
      }}
    >
      {eyebrow ? (
        <div
          style={{
            display: 'block',
            width: 'fit-content',
            padding: '10px 16px 8px',
            marginBottom: 16,
            backgroundColor: palette.paper,
            border: `3px solid ${palette.ink}`,
            fontFamily: 'Courier Prime, Courier New, monospace',
            fontSize: 23,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div
        style={{
          display: 'inline-block',
          padding: '6px 14px 8px',
          color: colour,
          backgroundColor: 'rgba(247,240,222,0.94)',
          boxDecorationBreak: 'clone',
          WebkitBoxDecorationBreak: 'clone',
          fontSize: size,
          fontWeight: 800,
          letterSpacing: -1,
          lineHeight: 1.02,
          whiteSpace: 'pre-line',
        }}
      >
        {text}
      </div>
      <div
        style={{
          width: land(frame, at + 3, 0, 260, 8),
          height: 9,
          marginTop: 18,
          backgroundColor: colour,
        }}
      />
    </div>
  );
};

const SmallCaption: React.FC<{
  at?: number;
  text: string;
  colour?: string;
  top?: number;
}> = ({at = 0, text, colour = palette.ink, top = 1190}) => {
  const frame = useCurrentFrame();
  const entry = land(frame, at, 0, 1, 6);
  if (entry <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left: 64,
        right: 176,
        top,
        padding: '16px 20px 13px',
        color: colour,
        backgroundColor: 'rgba(247,240,222,0.94)',
        borderLeft: `9px solid ${colour}`,
        fontFamily: 'Courier Prime, Courier New, monospace',
        fontSize: 35,
        fontWeight: 700,
        letterSpacing: 3,
        lineHeight: 1.2,
        opacity: Math.min(entry * 1.7, 1),
        translate: `0px ${(1 - entry) * 18}px`,
      }}
    >
      {text}
    </div>
  );
};

const HookScene: React.FC = () => (
  <Paper>
    <GeneratedPlate src="g01-establish.mp4" />
    <Headline eyebrow="THOSE ESCALATOR BRUSHES" text={'AREN’T\nCLEANING\nYOUR SHOES'} size={68} />
  </Paper>
);

const GapScene: React.FC = () => (
  <Paper>
    <GeneratedPlate src="g06-gap-punch.mp4" />
    <Headline at={6} eyebrow="MOVING STEP · FIXED PANEL" text="MILLIMETRES" colour={palette.coral} size={80} />
    <SmallCaption at={52} text="A NARROW CLEARANCE" colour={palette.coral} />
  </Paper>
);

const RiskChip: React.FC<{at: number; top: number; text: string}> = ({at, top, text}) => {
  const frame = useCurrentFrame();
  const entry = land(frame, at, 0, 1, 6);
  if (entry <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left: 64,
        top,
        padding: '13px 18px 11px',
        backgroundColor: palette.paperLight,
        border: `4px solid ${palette.ink}`,
        color: palette.ink,
        fontFamily: 'Courier Prime, Courier New, monospace',
        fontSize: 38,
        fontWeight: 700,
        letterSpacing: 3,
        opacity: Math.min(entry * 1.6, 1),
        translate: `${(1 - entry) * -26}px 0px`,
      }}
    >
      {text}
    </div>
  );
};

const FabricScene: React.FC = () => (
  <Paper>
    <GeneratedPlate src="g03-loose-cuff.mp4" trimBefore={18} />
    <RiskChip at={0} top={310} text="RUBBER" />
    <RiskChip at={20} top={390} text="LOOSE FABRIC" />
    <RiskChip at={42} top={470} text="SMALL FINGERS" />
    <SmallCaption at={54} text="SOFT THINGS DO NOT STAY RIGID" colour={palette.coral} />
  </Paper>
);

const BrushScene: React.FC = () => (
  <Paper>
    <GeneratedPlate src="g02-contact.mp4" />
    <Headline at={2} eyebrow="THE STIFF STRIP" text="THE BRUSH" size={78} />
    <SmallCaption at={38} text="FIXED · AT ANKLE HEIGHT" />
  </Paper>
);

const NotCleaningScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Paper>
      <GeneratedPlate src="g04-not-cleaning.mp4" />
      <Headline eyebrow="COMMON GUESS" text="SHOE CLEANER" size={72} />
      <div
        style={{
          position: 'absolute',
          left: 66,
          top: 445,
          width: land(frame, 14, 0, 690, 9),
          height: 15,
          backgroundColor: palette.coral,
          rotate: '-7deg',
          transformOrigin: 'left center',
          boxShadow: `0 3px 0 ${palette.paper}`,
        }}
      />
      <SmallCaption at={23} text="IT IS NOT CLEANING ANYTHING" colour={palette.coral} />
    </Paper>
  );
};

const BeforeMachineryScene: React.FC = () => (
  <Paper>
    <GeneratedPlate src="g02-contact.mp4" trimBefore={36} />
    <Headline at={1} eyebrow="ORDER OF CONTACT" text={'BRUSH\nFIRST'} colour={palette.mustard} size={82} />
    <SmallCaption at={26} text="BEFORE THE MACHINERY" colour={palette.mustard} />
  </Paper>
);

const MoveInScene: React.FC = () => {
  const frame = useCurrentFrame();
  const grow = land(frame, 12, 0, 1, 9);
  return (
    <Paper>
      <GeneratedPlate src="g05-move-center.mp4" />
      <Headline at={1} eyebrow="THE MESSAGE" text="MOVE INWARD" colour={palette.mustard} size={78} />
      <svg viewBox="0 0 1080 1920" style={{position: 'absolute', inset: 0}}>
        <path
          d={`M210 1080 H${210 + grow * 500}`}
          fill="none"
          stroke={palette.mustard}
          strokeWidth={18}
          strokeLinecap="round"
        />
        <path
          d={`M${690 + grow * 20} 1044 L${750 + grow * 10} 1080 L${690 + grow * 20} 1116 Z`}
          fill={palette.mustard}
          opacity={grow}
        />
      </svg>
      <SmallCaption at={34} text="AWAY FROM THE EDGE" colour={palette.mustard} />
    </Paper>
  );
};

const SwitchScene: React.FC = () => {
  const frame = useCurrentFrame();
  const obstruction = land(frame, 44, 0, 1, 10);
  const trip = land(frame, 78, 0, 1, 9);
  const stopped = frame >= 104;
  const state = trip > 0.95 ? palette.teal : palette.ink;
  const treadTravel = stopped ? 0 : (frame * 8) % 44;

  return (
    <Paper>
      <svg viewBox="0 0 1080 1920" style={{position: 'absolute', inset: 0}}>
        <rect x={90} y={650} width={480} height={480} rx={14} fill={palette.ink} opacity={0.13} transform="translate(-13 15)" />
        <rect x={90} y={650} width={480} height={480} rx={14} fill={palette.cutaway} stroke={palette.ink} strokeWidth={14} />
        <clipPath id="short-step-top"><rect x={90} y={650} width={480} height={96} /></clipPath>
        <g clipPath="url(#short-step-top)">
          {Array.from({length: 14}).map((_, index) => (
            <rect
              key={index}
              x={104 + ((index * 42 + treadTravel) % 560) - 42}
              y={650}
              width={13}
              height={96}
              fill={palette.ink}
              opacity={0.7}
            />
          ))}
        </g>
        <rect x={570} y={530} width={78} height={760} rx={20} fill={palette.ink} opacity={0.92} />
        <rect x={648} y={470} width={330} height={900} rx={18} fill={palette.paperLight} stroke={palette.ink} strokeWidth={14} />
        <circle cx={720} cy={540} r={14} fill={palette.inkMute} />
        <circle cx={906} cy={1300} r={14} fill={palette.inkMute} />

        <rect x={626} y={685} width={30} height={190} rx={6} fill={palette.cutaway} stroke={palette.ink} strokeWidth={8} />
        {Array.from({length: 13}).map((_, index) => (
          <path
            key={index}
            d={`M630 ${698 + index * 13} Q580 ${698 + index * 13} 520 ${700 + index * 13}`}
            fill="none"
            stroke={palette.ink}
            strokeWidth={6}
          />
        ))}

        <rect
          x={520 + obstruction * 68}
          y={845}
          width={74}
          height={118}
          rx={14}
          fill={palette.coral}
          stroke={palette.ink}
          strokeWidth={10}
        />

        <rect x={704} y={780} width={226} height={300} rx={18} fill={palette.paper} stroke={state} strokeWidth={13} />
        <path d="M736 842 H790" stroke={state} strokeWidth={13} strokeLinecap="round" />
        <path d={`M${840 + trip * 34} 842 H896`} stroke={state} strokeWidth={13} strokeLinecap="round" />
        <circle cx={770} cy={918} r={20} fill={palette.paperLight} stroke={state} strokeWidth={11} />
        <circle cx={862} cy={918} r={20} fill={palette.paperLight} stroke={state} strokeWidth={11} />
        <path d="M752 1012 l20 -18 20 18 20 -18 20 18 20 -18 20 18" fill="none" stroke={state} strokeWidth={9} />
        <circle cx={720} cy={984} r={20} fill={palette.paperLight} stroke={state} strokeWidth={11} />
        <g transform={`rotate(${-18 * trip} 720 984)`}>
          <path d="M720 984 L612 904" stroke={state} strokeWidth={14} strokeLinecap="round" />
          <circle cx={610} cy={902} r={18} fill={palette.cutaway} stroke={state} strokeWidth={9} />
        </g>
      </svg>

      <Headline at={1} eyebrow="IF FITTED" text={'A SECOND\nLINE'} size={76} />
      {frame >= 82 ? <SmallCaption at={82} text="SAFETY CIRCUIT INTERRUPTED" colour={palette.teal} top={1190} /> : null}
      {frame >= 108 ? (
        <div
          style={{
            position: 'absolute',
            left: 238,
            top: 1330,
            padding: '18px 36px 14px',
            color: palette.paperLight,
            backgroundColor: palette.teal,
            fontSize: 62,
            fontWeight: 800,
            letterSpacing: 5,
            boxShadow: `10px 10px 0 ${palette.ink}`,
          }}
        >
          STOPPED
        </div>
      ) : null}
    </Paper>
  );
};

const ClosingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const topEntry = land(frame, 1, 0, 1, 8);
  const bottomEntry = land(frame, 43, 0, 1, 8);
  return (
    <Paper>
      <div
        style={{
          position: 'absolute',
          left: 58,
          right: 158,
          top: 280,
          height: 430,
          padding: '46px 42px',
          backgroundColor: palette.paperLight,
          border: `6px solid ${palette.ink}`,
          boxShadow: `12px 12px 0 ${palette.cutaway}`,
          opacity: topEntry,
          translate: `${(1 - topEntry) * -36}px 0px`,
        }}
      >
        <div style={{fontFamily: 'Courier Prime, Courier New, monospace', fontSize: 25, fontWeight: 700, letterSpacing: 4}}>THE BRUSH IS</div>
        <div style={{marginTop: 16, fontSize: 78, fontWeight: 800, lineHeight: 0.98}}>THE<br />WARNING</div>
        <div style={{position: 'absolute', right: 46, top: 70, width: 34, height: 260, backgroundColor: palette.cutaway, border: `7px solid ${palette.ink}`}} />
        {Array.from({length: 10}).map((_, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              right: 80,
              top: 82 + index * 24,
              width: 110,
              height: 6,
              backgroundColor: palette.ink,
              rotate: '-7deg',
              transformOrigin: 'right center',
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: 'absolute',
          left: 58,
          right: 158,
          top: 790,
          height: 430,
          padding: '46px 42px',
          backgroundColor: palette.paperLight,
          border: `6px solid ${palette.teal}`,
          boxShadow: `12px 12px 0 ${palette.cutaway}`,
          opacity: bottomEntry,
          translate: `${(1 - bottomEntry) * 36}px 0px`,
        }}
      >
        <div style={{fontFamily: 'Courier Prime, Courier New, monospace', fontSize: 25, fontWeight: 700, letterSpacing: 4, color: palette.teal}}>THE SWITCH IS</div>
        <div style={{marginTop: 16, color: palette.teal, fontSize: 78, fontWeight: 800, lineHeight: 0.98}}>THE<br />APOLOGY</div>
        <svg viewBox="0 0 230 280" style={{position: 'absolute', right: 24, top: 62, width: 230, height: 280}}>
          <rect x={16} y={16} width={198} height={248} rx={18} fill={palette.paper} stroke={palette.teal} strokeWidth={12} />
          <path d="M48 86 H90 M144 86 H184" stroke={palette.teal} strokeWidth={12} strokeLinecap="round" />
          <circle cx={74} cy={150} r={18} fill={palette.paperLight} stroke={palette.teal} strokeWidth={10} />
          <circle cx={156} cy={150} r={18} fill={palette.paperLight} stroke={palette.teal} strokeWidth={10} />
          <path d="M64 222 l18 -16 18 16 18 -16 18 16 18 -16 18 16" fill="none" stroke={palette.teal} strokeWidth={8} />
        </svg>
      </div>
    </Paper>
  );
};

export const BrushShort916: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <Sequence name="01 · hook" durationInFrames={74}><HookScene /></Sequence>
    <Sequence name="02 · narrow clearance" from={74} durationInFrames={122}><GapScene /></Sequence>
    <Sequence name="03 · soft things deform" from={196} durationInFrames={85}><FabricScene /></Sequence>
    <Sequence name="04 · the brush" from={281} durationInFrames={94}><BrushScene /></Sequence>
    <Sequence name="05 · not a shoe cleaner" from={375} durationInFrames={50}><NotCleaningScene /></Sequence>
    <Sequence name="06 · brush first" from={425} durationInFrames={65}><BeforeMachineryScene /></Sequence>
    <Sequence name="07 · move inward" from={490} durationInFrames={84}><MoveInScene /></Sequence>
    <Sequence name="08 · skirt switch" from={574} durationInFrames={158}><SwitchScene /></Sequence>
    <Sequence name="09 · warning and apology" from={732} durationInFrames={98}><ClosingScene /></Sequence>
    <Audio src={staticFile('voiceover/episode-02/brush-short-vo-v2.mp3')} />
  </AbsoluteFill>
);

export const BrushShort916SafeReview: React.FC = () => (
  <AbsoluteFill>
    <BrushShort916 />
    <SafeAreaGuides />
  </AbsoluteFill>
);
