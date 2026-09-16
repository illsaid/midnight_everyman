import {Audio, Video} from '@remotion/media';
import {
  AbsoluteFill,
  CanvasImage,
  Easing,
  Interactive,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {EPISODE_02_FPS, EPISODE_02_VOICEOVER} from './lockedPlates';

export const INCIDENT_REVERSAL_DURATION = 459;

const cue = {
  stillStair: {from: 0, to: 128},
  notStair: {from: 128, to: 186},
  incidentPlate: {from: 186, to: 279},
  stop: {from: 279, to: 312},
  reverse: {from: 312, to: 370},
  consequence: {from: 370, to: 459},
} as const;

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

const EvidenceRule: React.FC<{color?: string; progress?: number}> = ({
  color = palette.ink,
  progress = 1,
}) => (
  <div
    style={{
      height: 8,
      width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
      backgroundColor: color,
    }}
  />
);

const StaircaseDrawing: React.FC<{moving: boolean}> = ({moving}) => {
  const frame = useCurrentFrame();
  const local = frame;
  const reveal = moving
    ? interpolate(local, [0, 14], [0, 1], {...clamp, easing: ease})
    : 0;
  const dashOffset = moving ? -Math.max(0, local) * 13 : 0;
  const staggerFrame = Math.floor(frame / 2) * 2;
  const boilX = Math.sin(staggerFrame * 0.61) * 0.7;
  const boilY = Math.cos(staggerFrame * 0.47) * 0.55;

  return (
    <svg
      viewBox="0 0 1120 820"
      style={{
        position: 'absolute',
        right: 30,
        top: 76,
        width: 1170,
        height: 880,
        overflow: 'visible',
        translate: `${boilX}px ${boilY}px`,
      }}
    >
      <path
        d="M82 704 H188 V644 H294 V584 H400 V524 H506 V464 H612 V404 H718 V344 H824 V284 H930 V224 H1038"
        fill="none"
        stroke={palette.ink}
        strokeWidth="18"
        strokeLinejoin="miter"
      />
      <path
        d="M82 704 H188 V644 H294 V584 H400 V524 H506 V464 H612 V404 H718 V344 H824 V284 H930 V224 H1038 V286 H949 V346 H843 V406 H737 V466 H631 V526 H525 V586 H419 V646 H313 V706 H188 V752 H82 Z"
        fill={palette.cutaway}
        stroke={palette.ink}
        strokeWidth="8"
        opacity={0.46}
      />
      <path
        d="M112 748 C310 744 470 640 624 518 C760 410 882 307 1020 274"
        fill="none"
        stroke={palette.reference}
        strokeWidth="5"
        strokeDasharray="10 14"
        opacity={moving ? 1 : 0.38}
      />
      {moving ? (
        <>
          <path
            d="M112 748 C310 744 470 640 624 518 C760 410 882 307 1020 274"
            fill="none"
            stroke={palette.mustard}
            strokeWidth="16"
            strokeDasharray="42 22"
            strokeDashoffset={dashOffset}
            opacity={reveal}
          />
          <path
            d="M134 182 C344 80 735 46 1008 102"
            fill="none"
            stroke={palette.ink}
            strokeWidth="20"
            strokeLinecap="round"
            opacity={reveal}
          />
          <path
            d="M140 204 C350 102 736 69 998 121"
            fill="none"
            stroke={palette.reference}
            strokeWidth="5"
            opacity={reveal}
          />
          <g opacity={reveal} fill={palette.mustard} stroke={palette.ink} strokeWidth="4">
            {[0, 1, 2, 3].map((index) => (
              <path
                key={index}
                d="M0 -18 L34 0 L0 18 L10 0 Z"
                transform={`translate(${512 + index * 118} ${560 - index * 76}) rotate(-31)`}
              />
            ))}
          </g>
        </>
      ) : null}
      <line x1="70" y1="752" x2="1050" y2="752" stroke={palette.ink} strokeWidth="8" />
      <text
        x="74"
        y="795"
        fill={palette.reference}
        fontFamily="Arial, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="5"
      >
        {moving ? 'MOVING STEP BAND' : 'FIXED GEOMETRY'}
      </text>
    </svg>
  );
};

const StaircaseStatement: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <PaperStage>
      <StaircaseDrawing moving={false} />
      <Interactive.Div
        name="Static staircase statement"
        style={{
          position: 'absolute',
          left: 96,
          top: 112,
          width: 700,
          opacity: interpolate(frame, [0, 8, 116, 127], [0, 1, 1, 0], clamp),
          translate: interpolate(frame, [0, 10], ['-22px 0px', '0px 0px'], {
            ...clamp,
            easing: ease,
          }),
        }}
      >
        <div style={{fontSize: 34, fontWeight: 800, letterSpacing: 8}}>THE ONE GUARANTEE</div>
        <div style={{marginTop: 22, fontSize: 104, fontWeight: 950, lineHeight: 0.92}}>
          A STAIRCASE
          <br />
          STAYS PUT.
        </div>
        <div style={{marginTop: 32, width: 560}}>
          <EvidenceRule />
        </div>
        <div style={{marginTop: 18, fontSize: 28, fontWeight: 700, letterSpacing: 4, color: palette.reference}}>
          NO DRIVE · NO CHAIN · NO SPEED
        </div>
      </Interactive.Div>
      <div
        style={{
          position: 'absolute',
          left: 96,
          bottom: 82,
          fontFamily: 'Courier New, monospace',
          fontSize: 22,
          letterSpacing: 4,
          color: palette.reference,
        }}
      >
        OBJECT STUDY / 01 · STATIC BY DEFINITION
      </div>
    </PaperStage>
  );
};

const NotAStaircase: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame;
  return (
    <PaperStage>
      <StaircaseDrawing moving />
      <Interactive.Div
        name="Not a staircase headline"
        style={{
          position: 'absolute',
          left: 92,
          top: 112,
          width: 670,
          opacity: interpolate(local, [0, 6, 49, 57], [0, 1, 1, 0], clamp),
          translate: interpolate(local, [0, 12], ['0px 28px', '0px 0px'], {
            ...clamp,
            easing: ease,
          }),
        }}
      >
        <div style={{fontSize: 42, fontWeight: 900, letterSpacing: 8}}>THIS ONE MOVES.</div>
        <div style={{marginTop: 22, fontSize: 118, fontWeight: 950, lineHeight: 0.9}}>
          NOT A
          <br />
          STAIRCASE.
        </div>
        <div style={{marginTop: 28, width: 560}}>
          <EvidenceRule color={palette.mustard} progress={interpolate(local, [5, 22], [0, 1], clamp)} />
        </div>
        <div style={{marginTop: 20, fontSize: 30, fontWeight: 800, letterSpacing: 5, color: palette.inkMute}}>
          STEP BAND · CONTINUOUS LOOP
        </div>
      </Interactive.Div>
    </PaperStage>
  );
};

const CaseLabel: React.FC<{mode: 'moving' | 'stopped'}> = ({mode}) => {
  const frame = useCurrentFrame();
  const local = frame;
  return (
    <Interactive.Div
      name="Hong Kong evidence label"
      style={{
        position: 'absolute',
        left: 92,
        top: 92,
        width: 680,
        padding: '24px 28px 22px',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(238,229,207,0.94)',
        outline: `5px solid ${palette.ink}`,
        opacity:
          mode === 'moving'
            ? interpolate(local, [0, 9], [0, 1], {...clamp, easing: ease})
            : 1,
      }}
    >
      <div style={{fontSize: 22, fontWeight: 900, letterSpacing: 6, color: palette.reference}}>
        DOCUMENTED INCIDENT
      </div>
      <div style={{marginTop: 10, fontSize: 52, fontWeight: 950, letterSpacing: 2}}>
        HONG KONG · 2017
      </div>
      <div style={{marginTop: 13, fontSize: 25, fontWeight: 800, letterSpacing: 2.5}}>
        ABOUT 120 PEOPLE · GOING UP
      </div>
      <div style={{marginTop: 18}}>
        <EvidenceRule color={mode === 'moving' ? palette.mustard : palette.ink} />
      </div>
    </Interactive.Div>
  );
};

const DirectionTape: React.FC<{state: 'up' | 'stop' | 'reverse'}> = ({state}) => {
  const frame = useCurrentFrame();
  const dashOffset =
    state === 'up'
      ? -frame * 12
      : state === 'reverse'
        ? 120 + frame * frame * 0.8
        : -92 * 12;
  const color = state === 'reverse' ? palette.coral : state === 'up' ? palette.mustard : palette.ink;
  return (
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
      <path
        d="M770 990 C920 845 1080 670 1220 510 C1360 350 1460 185 1535 95"
        fill="none"
        stroke="rgba(238,229,207,0.92)"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M770 990 C920 845 1080 670 1220 510 C1360 350 1460 185 1535 95"
        fill="none"
        stroke={color}
        strokeWidth="13"
        strokeLinecap="round"
        strokeDasharray="45 28"
        strokeDashoffset={dashOffset}
      />
      {state === 'stop' ? (
        <g>
          <rect x="1208" y="444" width="24" height="132" fill={palette.ink} transform="rotate(41 1220 510)" />
          <circle cx="1220" cy="510" r="76" fill="none" stroke={palette.ink} strokeWidth="10" />
        </g>
      ) : null}
    </svg>
  );
};

const IncidentPlate: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <Video
      src={staticFile('episode-02/generated/g01-crowded-cue03-v2.mp4')}
      muted
      objectFit="cover"
      style={{width: '100%', height: '100%'}}
    />
    <div style={{position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 8px rgba(36,38,34,0.88)'}} />
    <DirectionTape state="up" />
    <CaseLabel mode="moving" />
  </AbsoluteFill>
);

const HeldIncidentFrame: React.FC<{muted?: boolean}> = ({muted = false}) => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <CanvasImage
      src={staticFile('episode-02/derived/g01-cue03-exit-f92-v2.png')}
      style={{width: '100%', height: '100%', objectFit: 'cover', opacity: muted ? 0.34 : 1}}
    />
    {muted ? <AbsoluteFill style={{backgroundColor: 'rgba(238,229,207,0.30)'}} /> : null}
  </AbsoluteFill>
);

const StopBeat: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame;
  return (
    <AbsoluteFill style={{backgroundColor: palette.paper, overflow: 'hidden'}}>
      <HeldIncidentFrame />
      <DirectionTape state="stop" />
      <CaseLabel mode="stopped" />
      <Interactive.Div
        name="Stop stamp"
        style={{
          position: 'absolute',
          left: 98,
          bottom: 92,
          padding: '22px 42px 18px',
          backgroundColor: palette.paper,
          color: palette.ink,
          outline: `10px double ${palette.ink}`,
          fontSize: 142,
          fontWeight: 950,
          letterSpacing: 12,
          lineHeight: 0.88,
          opacity: interpolate(local, [0, 2, 29, 32], [0, 1, 1, 0], clamp),
          scale: interpolate(local, [0, 5, 9], [1.35, 0.96, 1], {
            ...clamp,
            easing: ease,
            output: 'perceptual-scale',
          }),
          rotate: interpolate(local, [0, 7], ['-8deg', '-2deg'], clamp),
        }}
      >
        STOP
      </Interactive.Div>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: 1040 + index * 82,
            top: 420 - index * 62,
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: `6px solid ${palette.ink}`,
            opacity: interpolate(local, [0, 4, 18, 26], [0, 0.5, 0.18, 0], clamp),
            translate: interpolate(local, [0, 12], ['0px 0px', '14px -10px'], clamp),
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

const passengerMarkers = [
  {x: 1444, y: 116, s: 0.74},
  {x: 1378, y: 180, s: 0.79},
  {x: 1312, y: 251, s: 0.84},
  {x: 1244, y: 326, s: 0.88},
  {x: 1174, y: 403, s: 0.92},
  {x: 1102, y: 482, s: 0.96},
  {x: 1028, y: 563, s: 1},
  {x: 952, y: 646, s: 1.04},
  {x: 874, y: 730, s: 1.08},
  {x: 798, y: 815, s: 1.12},
];

const PersonMarker: React.FC<{x: number; y: number; scale: number; index: number}> = ({
  x,
  y,
  scale,
  index,
}) => {
  const frame = useCurrentFrame();
  const local = frame;
  const delayed = Math.max(0, local - index * 1.5);
  const distance = delayed * delayed * 0.085;
  return (
    <g transform={`translate(${x - distance} ${y + distance * 0.58}) scale(${scale})`}>
      <circle cx="0" cy="-24" r="15" fill={palette.paper} stroke={palette.coral} strokeWidth="7" />
      <path d="M0 -7 L0 36 M-23 12 L23 12 M0 36 L-20 68 M0 36 L22 68" fill="none" stroke={palette.coral} strokeWidth="8" strokeLinecap="round" />
      <circle cx="0" cy="0" r="46" fill="none" stroke={palette.coral} strokeWidth="4" opacity="0.46" />
    </g>
  );
};

const ReverseBeat: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame;
  const acceleration = interpolate(local, [0, 57], [0, 1], {...clamp, easing: Easing.in(Easing.quad)});
  return (
    <AbsoluteFill style={{backgroundColor: palette.paper, overflow: 'hidden'}}>
      <div
        style={{
          position: 'absolute',
          inset: -40,
          scale: interpolate(local, [0, 57], [1.03, 1.09], {...clamp, output: 'perceptual-scale'}),
          translate: interpolate(local, [0, 57], ['0px 0px', '-34px 22px'], clamp),
        }}
      >
        <HeldIncidentFrame muted />
      </div>
      <DirectionTape state="reverse" />
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        {passengerMarkers.map((marker, index) => (
          <PersonMarker key={index} x={marker.x} y={marker.y} scale={marker.s} index={index} />
        ))}
      </svg>
      <Interactive.Div
        name="Reverse headline"
        style={{
          position: 'absolute',
          left: 94,
          top: 104,
          width: 660,
          color: palette.coral,
          opacity: interpolate(local, [0, 4], [0, 1], clamp),
          translate: interpolate(local, [0, 10], ['-46px 0px', '0px 0px'], {
            ...clamp,
            easing: ease,
          }),
        }}
      >
        <div style={{fontSize: 132, fontWeight: 950, lineHeight: 0.88, letterSpacing: 3}}>REVERSE.</div>
        <div style={{marginTop: 18, fontSize: 52, fontWeight: 900, letterSpacing: 8}}>DOWNHILL.</div>
        <div style={{marginTop: 24, width: 560}}>
          <EvidenceRule color={palette.coral} progress={interpolate(local, [3, 17], [0, 1], clamp)} />
        </div>
      </Interactive.Div>
      <div
        style={{
          position: 'absolute',
          left: 102,
          bottom: 92,
          fontFamily: 'Courier New, monospace',
          color: palette.coral,
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: 5,
        }}
      >
        SPEED {acceleration < 0.3 ? '↑' : acceleration < 0.72 ? '↑ ↑' : '↑ ↑ ↑'}
      </div>
    </AbsoluteFill>
  );
};

const ConsequenceBeat: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame;
  return (
    <PaperStage>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 24,
          height: '100%',
          backgroundColor: palette.coral,
        }}
      />
      <Interactive.Div
        name="Consequence count"
        style={{
          position: 'absolute',
          left: 100,
          top: 112,
          width: 750,
          opacity: interpolate(local, [0, 5], [0, 1], clamp),
          translate: interpolate(local, [0, 12], ['0px 34px', '0px 0px'], {
            ...clamp,
            easing: ease,
          }),
        }}
      >
        <div style={{fontSize: 27, fontWeight: 900, letterSpacing: 8, color: palette.coral}}>
          DOCUMENTED CONSEQUENCE
        </div>
        <div style={{marginTop: 6, fontSize: 340, fontWeight: 950, lineHeight: 0.88, color: palette.coral}}>
          18
        </div>
        <div style={{fontSize: 104, fontWeight: 950, lineHeight: 0.9, letterSpacing: 5}}>INJURED</div>
        <div style={{marginTop: 27, width: 660}}>
          <EvidenceRule color={palette.coral} />
        </div>
      </Interactive.Div>

      <div
        style={{
          position: 'absolute',
          left: 920,
          top: 176,
          width: 860,
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          columnGap: 40,
          rowGap: 44,
        }}
      >
        {Array.from({length: 18}, (_, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              height: 152,
              opacity: interpolate(local, [index * 1.15, index * 1.15 + 7], [0, 1], clamp),
              translate: interpolate(
                local,
                [index * 1.15, index * 1.15 + 10],
                ['34px -24px', '0px 0px'],
                {...clamp, easing: ease},
              ),
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 42,
                top: 2,
                width: 42,
                height: 42,
                borderRadius: '50%',
                backgroundColor: palette.ink,
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 26,
                top: 48,
                width: 74,
                height: 84,
                borderRadius: '34px 34px 12px 12px',
                backgroundColor: palette.ink,
              }}
            />
          </div>
        ))}
      </div>

      <Interactive.Div
        name="Final stop line"
        style={{
          position: 'absolute',
          left: 920,
          bottom: 90,
          width: 860,
          paddingTop: 22,
          borderTop: `8px solid ${palette.ink}`,
          opacity: interpolate(local, [42, 50], [0, 1], clamp),
          fontSize: 42,
          fontWeight: 900,
          letterSpacing: 4,
        }}
      >
        BEFORE THE MACHINE FINALLY STOPS.
        <div style={{marginTop: 14, fontSize: 22, color: palette.reference, letterSpacing: 5}}>
          LANGHAM PLACE · 25 MARCH 2017
        </div>
      </Interactive.Div>
    </PaperStage>
  );
};

export const IncidentReversalScene: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper, fontFamily: 'Arial, sans-serif'}}>
    <Sequence from={cue.stillStair.from} durationInFrames={cue.stillStair.to - cue.stillStair.from} premountFor={EPISODE_02_FPS}>
      <StaircaseStatement />
    </Sequence>
    <Sequence from={cue.notStair.from} durationInFrames={cue.notStair.to - cue.notStair.from} premountFor={EPISODE_02_FPS}>
      <NotAStaircase />
    </Sequence>
    <Sequence from={cue.incidentPlate.from} durationInFrames={cue.incidentPlate.to - cue.incidentPlate.from} premountFor={EPISODE_02_FPS}>
      <IncidentPlate />
    </Sequence>
    <Sequence from={cue.stop.from} durationInFrames={cue.stop.to - cue.stop.from} premountFor={EPISODE_02_FPS}>
      <StopBeat />
    </Sequence>
    <Sequence from={cue.reverse.from} durationInFrames={cue.reverse.to - cue.reverse.from} premountFor={EPISODE_02_FPS}>
      <ReverseBeat />
    </Sequence>
    <Sequence from={cue.consequence.from} durationInFrames={cue.consequence.to - cue.consequence.from} premountFor={EPISODE_02_FPS}>
      <ConsequenceBeat />
    </Sequence>
  </AbsoluteFill>
);

export const IncidentReversalReview: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <Audio src={staticFile(EPISODE_02_VOICEOVER)} trimAfter={INCIDENT_REVERSAL_DURATION} />
    <IncidentReversalScene />
  </AbsoluteFill>
);
