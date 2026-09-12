import {Audio} from '@remotion/media';
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {cues} from './cues';

const ink = '#223b3a';
const paper = '#eee6d5';
const teal = '#007e82';
const gold = '#c89548';
const coral = '#e66b51';
const muted = '#a79f90';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

const WaterCone: React.FC<{frame: number; x: number; y: number; scale?: number}> = ({
  frame,
  x,
  y,
  scale = 1,
}) => {
  const release = interpolate(frame, [24, 31], [0, 1], {...clamp, easing: easeOut});
  const reach = interpolate(frame, [27, 48], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const pulse = 0.86 + Math.sin(frame * 0.58) * 0.08;
  const drops = Array.from({length: 24}, (_, i) => {
    const row = Math.floor(i / 6);
    const col = i % 6;
    const travel = ((frame * (10 + (i % 4) * 2) + i * 31) % 420) / 420;
    const spread = (col - 2.5) * (22 + row * 9) + Math.sin(i * 2.3) * 10;
    return {x: spread * travel, y: 28 + travel * 430, r: 2.8 + (i % 3) * 1.2};
  });

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={release}>
      <defs>
        <linearGradient id="hg04-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8fbff" stopOpacity="0.92" />
          <stop offset="0.34" stopColor="#49cbd4" stopOpacity="0.5" />
          <stop offset="1" stopColor="#007e82" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`M-18 14 C-44 104 ${-170 * reach} 304 ${-238 * reach} 462 L${238 * reach} 462 C${170 * reach} 304 44 104 18 14 Z`}
        fill="url(#hg04-water)"
        opacity={0.44 * pulse}
      />
      {[-1, -0.62, -0.3, 0, 0.3, 0.62, 1].map((lane, i) => (
        <path
          key={lane}
          d={`M${lane * 13} 18 Q${lane * 72} 154 ${lane * 205 * reach} ${420 * reach}`}
          fill="none"
          stroke={i === 3 ? '#e8feff' : '#62d3da'}
          strokeWidth={i === 3 ? 5 : 3}
          strokeLinecap="round"
          opacity={(i === 3 ? 0.75 : 0.48) * release}
          pathLength="1"
          strokeDasharray="0.05 0.045"
          strokeDashoffset={-frame / (17 + i)}
        />
      ))}
      {drops.map((drop, i) => (
        <ellipse
          key={i}
          cx={drop.x}
          cy={drop.y * reach}
          rx={drop.r}
          ry={drop.r * 2.5}
          fill={i % 4 === 0 ? '#e8feff' : '#5ecbd2'}
          opacity={0.42 + (i % 3) * 0.12}
        />
      ))}
    </g>
  );
};

const DetailHead: React.FC<{frame: number}> = ({frame}) => {
  const breakProgress = interpolate(frame, [24, 31], [0, 1], {...clamp, easing: easeOut});
  const capDrop = interpolate(frame, [25, 37], [0, 1], {...clamp, easing: Easing.in(Easing.quad)});
  const bulbOpacity = interpolate(frame, [25, 30], [1, 0], clamp);
  const fragments = [
    [-11, -4, -32],
    [9, 1, 26],
    [-6, 11, -14],
    [13, 13, 41],
    [2, 18, 8],
  ];

  return (
    <svg viewBox="0 0 520 490" style={{width: '100%', height: '100%'}}>
      <defs>
        <linearGradient id="hg04-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2c46f" />
          <stop offset="0.48" stopColor="#c89548" />
          <stop offset="1" stopColor="#8d642e" />
        </linearGradient>
        <filter id="hg04-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#223b3a" floodOpacity="0.2" />
        </filter>
      </defs>
      <g filter="url(#hg04-shadow)">
        <ellipse cx="260" cy="58" rx="115" ry="28" fill="#d8cdb8" stroke={ink} strokeWidth="7" />
        <rect x="198" y="56" width="124" height="52" rx="12" fill="url(#hg04-brass)" stroke={ink} strokeWidth="7" />
        <path d="M208 106 L166 284 M312 106 L354 284" fill="none" stroke={ink} strokeWidth="12" strokeLinecap="round" />
        <path d="M210 108 L176 280 M310 108 L344 280" fill="none" stroke="url(#hg04-brass)" strokeWidth="20" strokeLinecap="round" />
        <rect x="238" y="105" width="44" height="147" rx="22" fill={coral} stroke={ink} strokeWidth="7" opacity={bulbOpacity} />
        <rect x="250" y="117" width="9" height="108" rx="5" fill="#ffd5a2" opacity={0.9 * bulbOpacity} />
        <ellipse cx="260" cy="135" rx="8" ry="12" fill={paper} stroke={ink} strokeWidth="4" opacity={bulbOpacity} />
        <g transform={`translate(0 ${capDrop * 74}) rotate(${capDrop * 15} 260 277)`} opacity={interpolate(frame, [25, 42], [1, 0.3], clamp)}>
          <path d="M219 251 H301 L288 286 H232 Z" fill="url(#hg04-brass)" stroke={ink} strokeWidth="7" />
        </g>
        <path d="M166 284 H354" stroke={ink} strokeWidth="12" strokeLinecap="round" />
        <path d="M185 284 L220 323 L260 284 L300 323 L335 284" fill="none" stroke="url(#hg04-brass)" strokeWidth="17" strokeLinejoin="round" />
        <path d="M185 284 L220 323 L260 284 L300 323 L335 284" fill="none" stroke={ink} strokeWidth="6" strokeLinejoin="round" />
      </g>
      {fragments.map(([dx, dy, rot], i) => (
        <path
          key={i}
          d="M-8 -7 L7 -4 L3 9 Z"
          fill={i % 2 ? '#ff8d72' : '#c84f42'}
          stroke={ink}
          strokeWidth="2"
          transform={`translate(${260 + dx * breakProgress * 4} ${185 + dy * breakProgress * 5}) rotate(${rot * breakProgress})`}
          opacity={interpolate(frame, [25, 29, 43], [0, 1, 0], clamp)}
        />
      ))}
      <WaterCone frame={frame} x={260} y={298} scale={0.72} />
      <g opacity={interpolate(frame, [31, 39], [0, 1], clamp)}>
        <rect x="151" y="420" width="218" height="50" rx="25" fill={teal} />
        <text x="260" y="454" textAnchor="middle" fill={paper} fontSize="23" fontWeight="700" letterSpacing="5">OPEN</text>
      </g>
    </svg>
  );
};

const FireMarker: React.FC<{frame: number}> = ({frame}) => {
  const appear = interpolate(frame, [51, 63], [0, 1], {...clamp, easing: easeOut});
  const flicker = 1 + Math.sin(frame * 0.74) * 0.05 + Math.sin(frame * 1.43) * 0.025;
  return (
    <g transform={`translate(894 874) scale(${appear * flicker})`} opacity={appear}>
      <ellipse cy="40" rx="95" ry="24" fill={coral} opacity="0.13" />
      <path d="M0 28 C-49 2 -42 -43 -13 -75 C-15 -42 9 -36 15 -78 C53 -38 51 7 0 28 Z" fill={coral} stroke={ink} strokeWidth="5" />
      <path d="M1 21 C-17 5 -13 -18 2 -36 C4 -18 17 -10 18 4 C17 12 10 18 1 21 Z" fill="#f2b24d" />
      <path d="M-52 34 H52" stroke={ink} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const DryStatus: React.FC<{
  frame: number;
  x: number;
  y: number;
  delay: number;
  side: 'left' | 'right';
}> = ({frame, x, y, delay, side}) => {
  const show = interpolate(frame, [delay, delay + 10], [0, 1], {...clamp, easing: easeOut});
  const width = 330;
  const boxX = side === 'left' ? x + 62 : x - width - 62;
  const lineEnd = side === 'left' ? boxX : boxX + width;
  return (
    <g opacity={show}>
      <circle cx={x} cy={y} r={44 + show * 13} fill="none" stroke={gold} strokeWidth="5" strokeDasharray="9 10" />
      <path d={`M${x + (side === 'left' ? 42 : -42)} ${y + 22} L${lineEnd} ${y + 74}`} fill="none" stroke={gold} strokeWidth="4" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - show} />
      <rect x={boxX} y={y + 48} width={width} height="76" rx="12" fill={paper} fillOpacity="0.96" stroke={ink} strokeWidth="4" />
      <circle cx={boxX + 39} cy={y + 86} r="13" fill={gold} />
      <text x={boxX + 67} y={y + 97} fill={ink} fontSize="27" fontWeight="700" letterSpacing="3">SEALED · DRY</text>
    </g>
  );
};

/** HG-04 — cues 08–10, 240 frames. Standalone review until owner approval. */
export const HG04Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const cue08 = interpolate(frame, [0, 5, 35, 41], [0, 1, 1, 0], clamp);
  const cue09 = interpolate(frame, [42, 48, 99, 107], [0, 1, 1, 0], clamp);
  const cue10 = interpolate(frame, [109, 120, 232, 239], [0, 1, 1, 0.88], clamp);
  const lensIn = interpolate(frame, [3, 14], [0, 1], {...clamp, easing: easeOut});
  const lensOut = interpolate(frame, [96, 108], [1, 0], {...clamp, easing: Easing.in(Easing.cubic)});
  const lens = lensIn * lensOut;
  const wideReturn = interpolate(frame, [103, 136], [0, 1], {...clamp, easing: easeOut});
  const stageScale = interpolate(frame, [0, 42, 92, 136, 239], [1.01, 1.045, 1.075, 1.0, 1.015], clamp);
  const stageX = interpolate(frame, [0, 95, 136, 239], [0, -18, 0, -6], clamp);
  const stageY = interpolate(frame, [0, 95, 136, 239], [0, 7, 0, -3], clamp);
  const locality = interpolate(frame, [56, 72], [0, 1], {...clamp, easing: easeOut}) * interpolate(frame, [100, 109], [1, 0], clamp);
  const activeHalo = interpolate(frame, [23, 34], [0, 1], {...clamp, easing: easeOut});
  const copyRise = interpolate(frame, [0, 10], [34, 0], {...clamp, easing: easeOut});

  return (
    <AbsoluteFill style={{backgroundColor: paper, color: ink, fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transformOrigin: '894px 337px',
          transform: `translate(${stageX}px, ${stageY}px) scale(${stageScale})`,
        }}
      >
        <Img
          src={staticFile('sprinkler-assembly/registry/ceiling-still-v1.png')}
          style={{width: '100%', height: '100%', objectFit: 'cover', filter: `saturate(${interpolate(frame, [108, 145], [1, 0.72], clamp)}) contrast(1.02)`}}
        />
        <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
          <circle cx="894" cy="337" r={46 + activeHalo * 17} fill={teal} opacity={activeHalo * 0.1} />
          <circle cx="894" cy="337" r={42 + activeHalo * 12} fill="none" stroke={teal} strokeWidth="5" opacity={activeHalo * (0.72 + Math.sin(frame * 0.36) * 0.18)} />
          <WaterCone frame={frame} x={894} y={352} scale={0.88} />
          <g opacity={locality}>
            <path d="M894 397 V792" stroke={coral} strokeWidth="5" strokeDasharray="12 17" pathLength="1" strokeDashoffset={1 - locality} />
            <path d="M872 423 L894 397 L916 423" fill="none" stroke={coral} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="723" y="720" width="342" height="58" rx="29" fill={paper} stroke={coral} strokeWidth="4" />
            <text x="894" y="759" textAnchor="middle" fill={coral} fontSize="24" fontWeight="700" letterSpacing="5">DIRECTLY ABOVE</text>
          </g>
          <FireMarker frame={frame} />
          <g opacity={cue10}>
            <DryStatus frame={frame} x={336} y={205} delay={124} side="left" />
            <DryStatus frame={frame} x={1638} y={229} delay={138} side="right" />
            <g opacity={interpolate(frame, [118, 130], [0, 1], clamp)}>
              <rect x="774" y="408" width="240" height="66" rx="33" fill={teal} />
              <text x="894" y="451" fill={paper} textAnchor="middle" fontSize="26" fontWeight="700" letterSpacing="5">ONE OPEN</text>
            </g>
          </g>
        </svg>
      </div>

      <AbsoluteFill style={{pointerEvents: 'none', boxShadow: 'inset 0 0 150px rgba(34,59,58,0.18)'}} />
      <AbsoluteFill style={{opacity: 0.11, backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 11px, rgba(34,59,58,0.08) 12px)'}} />

      <Interactive.Div
        name="HG04 cue 08 title"
        style={{position: 'absolute', left: 88, top: 470, width: 700, opacity: cue08, transform: `translateY(${copyRise}px)`}}
      >
        <div style={{fontSize: 29, fontWeight: 700, letterSpacing: 8, color: teal, marginBottom: 18}}>LOCAL RESPONSE / 01</div>
        <div style={{fontSize: 98, lineHeight: 0.94, fontWeight: 800, letterSpacing: -4}}>ONE HEAD<br />OPENS.</div>
      </Interactive.Div>

      <Interactive.Div
        name="HG04 cue 09 title"
        style={{position: 'absolute', left: 88, top: 460, width: 675, opacity: cue09, transform: `translateY(${interpolate(frame, [42, 52], [28, 0], {...clamp, easing: easeOut})}px)`}}
      >
        <div style={{fontSize: 104, lineHeight: 0.92, fontWeight: 800, letterSpacing: -5, color: coral}}>THAT ONE.</div>
        <div style={{width: 126, height: 8, background: teal, margin: '24px 0 23px'}} />
        <div style={{fontSize: 35, lineHeight: 1.15, fontWeight: 700, letterSpacing: 5}}>THE ONE DIRECTLY<br />ABOVE THE FIRE</div>
      </Interactive.Div>

      <Interactive.Div
        name="HG04 mechanism lens"
        style={{
          position: 'absolute',
          left: 1090,
          top: 90,
          width: 650,
          height: 720,
          borderRadius: 34,
          backgroundColor: 'rgba(238,230,213,0.97)',
          border: `7px solid ${ink}`,
          boxShadow: '0 30px 80px rgba(34,59,58,0.24)',
          overflow: 'hidden',
          opacity: lens,
          transform: `translateY(${(1 - lensIn) * 54}px) scale(${0.9 + lensIn * 0.1})`,
        }}
      >
        <div style={{height: 72, backgroundColor: ink, color: paper, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', fontSize: 22, fontWeight: 700, letterSpacing: 5}}>
          <span>THE ACTIVE HEAD</span><span style={{color: '#7ee1e3'}}>01 / 300+</span>
        </div>
        <div style={{position: 'absolute', left: 34, right: 34, top: 91, bottom: 24}}><DetailHead frame={frame} /></div>
      </Interactive.Div>

      <Interactive.Div
        name="HG04 cue 10 title band"
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 156,
          minHeight: 202,
          background: 'rgba(238,230,213,0.95)',
          borderTop: `7px solid ${ink}`,
          borderBottom: `2px solid ${muted}`,
          padding: '22px 44px',
          boxSizing: 'border-box',
          opacity: cue10,
          transform: `translateY(${(1 - wideReturn) * 80}px)`,
          display: 'flex',
          alignItems: 'center',
          gap: 48,
        }}
      >
        <div style={{fontSize: 28, fontWeight: 700, letterSpacing: 7, color: teal, writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>NO CHAIN REACTION</div>
        <div style={{width: 8, alignSelf: 'stretch', backgroundColor: coral}} />
        <div>
          <div style={{fontSize: 60, lineHeight: 1, fontWeight: 800, letterSpacing: -2}}>EVERY OTHER HEAD</div>
          <div style={{fontSize: 54, lineHeight: 1.05, fontWeight: 800, letterSpacing: 3, color: gold, marginTop: 6}}>STAYS SEALED. DRY.</div>
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};

export const HG04Review: React.FC = () => (
  <AbsoluteFill>
    <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find((cue) => cue.cue === '08')!.f_in)} />
    <HG04Scene />
  </AbsoluteFill>
);
