import {Audio, Video} from '@remotion/media';
import {
  AbsoluteFill,
  Easing,
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

const IntactHead: React.FC<{frame: number}> = ({frame}) => {
  const shimmer = interpolate(frame % 72, [0, 24, 48, 72], [-230, 150, 150, 510], clamp);
  return (
    <svg viewBox="0 0 700 690" style={{width: '100%', height: '100%'}}>
      <defs>
        <linearGradient id="hg05-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4cf80" />
          <stop offset="0.45" stopColor="#c89548" />
          <stop offset="1" stopColor="#845a27" />
        </linearGradient>
        <linearGradient id="hg05-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b94738" />
          <stop offset="0.55" stopColor="#e66b51" />
          <stop offset="1" stopColor="#9f382f" />
        </linearGradient>
        <filter id="hg05-head-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="20" stdDeviation="16" floodColor="#223b3a" floodOpacity="0.22" />
        </filter>
        <clipPath id="hg05-hardware"><path d="M210 122 H490 V200 H438 L500 455 H200 L262 200 H210 Z" /></clipPath>
      </defs>
      <g filter="url(#hg05-head-shadow)">
        <ellipse cx="350" cy="106" rx="164" ry="42" fill="#d8cdb8" stroke={ink} strokeWidth="10" />
        <rect x="258" y="102" width="184" height="84" rx="18" fill="url(#hg05-brass)" stroke={ink} strokeWidth="10" />
        <path d="M270 185 L208 452 M430 185 L492 452" fill="none" stroke={ink} strokeWidth="31" strokeLinecap="round" />
        <path d="M270 185 L208 452 M430 185 L492 452" fill="none" stroke="url(#hg05-brass)" strokeWidth="19" strokeLinecap="round" />
        <rect x="316" y="182" width="68" height="225" rx="34" fill="url(#hg05-glass)" stroke={ink} strokeWidth="10" />
        <rect x="331" y="201" width="13" height="168" rx="7" fill="#ffd6a1" opacity="0.85" />
        <ellipse cx="350" cy="231" rx="12" ry="19" fill={paper} stroke={ink} strokeWidth="5" />
        <path d="M200 452 H500" stroke={ink} strokeWidth="18" strokeLinecap="round" />
        <path d="M229 452 L279 511 L350 452 L421 511 L471 452" fill="none" stroke="url(#hg05-brass)" strokeWidth="34" strokeLinejoin="round" />
        <path d="M229 452 L279 511 L350 452 L421 511 L471 452" fill="none" stroke={ink} strokeWidth="9" strokeLinejoin="round" />
        <path d="M278 411 H422 L406 454 H294 Z" fill="url(#hg05-brass)" stroke={ink} strokeWidth="9" />
      </g>
      <rect x={shimmer} y="65" width="74" height="460" fill="#fff7d8" opacity="0.34" transform="skewX(-18)" clipPath="url(#hg05-hardware)" />
      <g opacity={interpolate(frame, [26, 40], [0, 1], clamp)}>
        <path d="M535 143 H630 V165" fill="none" stroke={teal} strokeWidth="5" strokeLinecap="round" />
        <circle cx="630" cy="174" r="7" fill={teal} />
        <text x="660" y="213" textAnchor="end" fill={teal} fontSize="22" fontWeight="700" letterSpacing="4">
          <tspan x="660">BRASS</tspan><tspan x="660" dy="28">FRAME</tspan>
        </text>
      </g>
      <g opacity={interpolate(frame, [37, 50], [0, 1], clamp)}>
        <path d="M164 452 H78 V538" fill="none" stroke={gold} strokeWidth="5" strokeLinecap="round" />
        <circle cx="78" cy="560" r="7" fill={gold} />
        <text x="38" y="607" textAnchor="start" fill={gold} fontSize="24" fontWeight="700" letterSpacing="4">DEFLECTOR</text>
      </g>
    </svg>
  );
};

const LookUpMarker: React.FC<{frame: number}> = ({frame}) => {
  const show = interpolate(frame, [0, 5, 15, 21], [0, 1, 1, 0], clamp);
  const ring = interpolate(frame, [2, 14], [0.7, 1], {...clamp, easing: easeOut});
  return (
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: show}}>
      <circle cx="954" cy="138" r={48 + ring * 16} fill={teal} opacity={0.09 + ring * 0.04} />
      <circle cx="954" cy="138" r={45 + ring * 12} fill="none" stroke={teal} strokeWidth="6" strokeDasharray="10 11" />
      <path d="M954 331 V223" stroke={coral} strokeWidth="8" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - ring} />
      <path d="M925 248 L954 215 L983 248" fill="none" stroke={coral} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="792" y="326" width="324" height="82" rx="41" fill={paper} fillOpacity="0.96" stroke={ink} strokeWidth="5" />
      <text x="954" y="381" fill={ink} textAnchor="middle" fontSize="38" fontWeight="800" letterSpacing="8">LOOK UP.</text>
    </svg>
  );
};

/** HG-05 — cues 20–22, 191 frames. Standalone review until owner approval. */
export const HG05Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const macro = interpolate(frame, [15, 23], [0, 1], {...clamp, easing: easeOut});
  const wideCopy = interpolate(frame, [82, 92, 181, 190], [0, 1, 1, 0.9], clamp);
  const consideration = interpolate(frame, [132, 145], [0, 1], {...clamp, easing: easeOut});
  const count = Math.round(interpolate(frame, [88, 140], [1, 10000], {...clamp, easing: Easing.in(Easing.cubic)}));
  const headFocus = interpolate(frame, [79, 91], [0, 1], {...clamp, easing: easeOut});

  return (
    <AbsoluteFill style={{backgroundColor: paper, color: ink, fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
      <Video
        name="Approved HG-05 corridor"
        src={staticFile('sprinkler-assembly/registry/corridor-grok-v1.mp4')}
        muted
        objectFit="cover"
        style={{width: '100%', height: '100%', filter: `saturate(${interpolate(frame, [77, 145], [1, 0.76], clamp)}) contrast(1.02)`}}
      />

      <LookUpMarker frame={frame} />

      <Interactive.Div
        name="HG05 brass fitting macro"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: paper,
          clipPath: `circle(${macro * 115}% at 49.7% 13%)`,
          opacity: interpolate(frame, [15, 19, 76, 77], [0, 1, 1, 0], clamp),
        }}
      >
        <AbsoluteFill style={{backgroundImage: 'radial-gradient(circle at 68% 42%, rgba(200,149,72,0.16), transparent 35%), repeating-linear-gradient(0deg, transparent 0px, transparent 11px, rgba(34,59,58,0.07) 12px)'}} />
        <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
          <path d="M0 158 H1920" stroke={muted} strokeWidth="3" />
          {[220, 580, 940, 1300, 1660].map((x) => <path key={x} d={`M${x} 0 V158`} stroke={muted} strokeWidth="3" />)}
          <path d="M0 962 H1920" stroke={ink} strokeWidth="8" />
          <circle cx="1348" cy="546" r={360 + Math.sin(frame * 0.08) * 6} fill="none" stroke={gold} strokeWidth="3" opacity="0.36" />
          <circle cx="1348" cy="546" r={310 + Math.sin(frame * 0.08) * 5} fill="none" stroke={teal} strokeWidth="3" opacity="0.26" strokeDasharray="13 16" />
        </svg>
        <Interactive.Div name="HG05 macro title" style={{position: 'absolute', left: 92, top: 250, width: 680, opacity: interpolate(frame, [20, 28], [0, 1], clamp)}}>
          <div style={{fontSize: 28, fontWeight: 700, letterSpacing: 8, color: teal, marginBottom: 20}}>CEILING DETAIL / 01</div>
          <div style={{fontSize: 92, lineHeight: 0.96, fontWeight: 800, letterSpacing: -4}}>A SMALL<br /><span style={{color: gold}}>BRASS</span><br />FITTING.</div>
          <div style={{width: 118, height: 8, backgroundColor: coral, marginTop: 30}} />
        </Interactive.Div>
        <Interactive.Div name="HG05 intact head diagram" style={{position: 'absolute', left: 925, top: 112, width: 840, height: 828, scale: interpolate(frame, [18, 31], [0.86, 1], {...clamp, easing: easeOut})}}>
          <IntactHead frame={frame} />
        </Interactive.Div>
        <Interactive.Div name="HG05 macro footer" style={{position: 'absolute', left: 94, bottom: 70, fontSize: 23, fontWeight: 700, letterSpacing: 6, color: muted, opacity: interpolate(frame, [30, 42], [0, 1], clamp)}}>
          ORDINARY HARDWARE · PERMANENTLY OVERHEAD
        </Interactive.Div>
      </Interactive.Div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: wideCopy}}>
        <circle cx="954" cy="138" r={44 + headFocus * 13} fill={teal} opacity={headFocus * 0.09} />
        <circle cx="954" cy="138" r={42 + headFocus * 10} fill="none" stroke={teal} strokeWidth="5" opacity={headFocus * 0.75} />
        <path d="M954 198 V286 H844" fill="none" stroke={teal} strokeWidth="4" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - headFocus} />
        {Array.from({length: 12}, (_, i) => (
          <path key={i} d={`M${110 + i * 59} 706 l18 -36`} stroke={gold} strokeWidth="7" strokeLinecap="round" opacity={interpolate(frame, [82 + i * 3, 92 + i * 3], [0, 0.58], clamp)} />
        ))}
      </svg>

      <Interactive.Div name="HG05 ten-thousand counter" style={{position: 'absolute', left: 78, top: 285, width: 800, opacity: wideCopy}}>
        <div style={{fontSize: 27, fontWeight: 700, letterSpacing: 8, color: teal}}>THE NUMBER OF TIMES</div>
        <div style={{fontSize: 154, lineHeight: 0.94, fontWeight: 900, letterSpacing: -7, color: coral, fontVariantNumeric: 'tabular-nums', textShadow: '0 7px 0 rgba(34,59,58,0.36), 0 18px 34px rgba(34,59,58,0.24)', WebkitTextStroke: '1px rgba(34,59,58,0.18)'}}>{count.toLocaleString('en-US')}×</div>
        <div style={{fontSize: 42, fontWeight: 800, letterSpacing: 7, color: ink, marginTop: 12}}>WALKED BENEATH</div>
        <div style={{width: 630, height: 7, backgroundColor: coral, marginTop: 25}} />
      </Interactive.Div>

      <Interactive.Div
        name="HG05 consideration payoff"
        style={{
          position: 'absolute',
          left: 78,
          top: 645,
          padding: '19px 28px 17px',
          backgroundColor: coral,
          color: paper,
          fontSize: 37,
          fontWeight: 800,
          letterSpacing: 7,
          opacity: consideration * wideCopy,
          translate: `${(1 - consideration) * -38}px 0px`,
        }}
      >
        WITHOUT A THOUGHT.
      </Interactive.Div>

      <AbsoluteFill style={{pointerEvents: 'none', boxShadow: 'inset 0 0 130px rgba(34,59,58,0.15)'}} />
    </AbsoluteFill>
  );
};

export const HG05Review: React.FC = () => (
  <AbsoluteFill>
    <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find((cue) => cue.cue === '20')!.f_in)} />
    <HG05Scene />
  </AbsoluteFill>
);
