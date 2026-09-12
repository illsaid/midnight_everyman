import {Audio, Video} from '@remotion/media';
import {lightLeak} from '@remotion/effects/light-leak';
import {starburst} from '@remotion/effects/starburst';
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  Sequence,
  Solid,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {cues} from './cues';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const HeadMarker: React.FC<{
  x: number;
  y: number;
  color: string;
  label: string;
  temperature: string;
  progress: number;
  align?: 'left' | 'right';
}> = ({x, y, color, label, temperature, progress, align = 'right'}) => {
  const cardX = align === 'right' ? x + 105 : x - 545;
  const elbowX = align === 'right' ? x + 70 : x - 70;
  const cardEdge = align === 'right' ? cardX : cardX + 420;
  return <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
    <circle cx={x} cy={y} r={48 + progress * 16} fill={color} opacity={0.08 + progress * 0.08}/>
    <circle cx={x} cy={y} r="48" fill="none" stroke={color} strokeWidth="7" opacity={progress}/>
    <circle cx={x} cy={y} r="13" fill={color} stroke="#eee6d5" strokeWidth="5" opacity={progress}/>
    <path d={`M${x + (align === 'right' ? 48 : -48)} ${y} H${elbowX} V${y + 82} H${cardEdge}`} fill="none" stroke={color} strokeWidth="5" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - progress}/>
    <g opacity={progress} transform={`translate(${cardX} ${y + 48})`}>
      <rect width="420" height="118" rx="18" fill="#223b3a" opacity="0.94"/>
      <rect x="0" width="12" height="118" rx="6" fill={color}/>
      <text x="35" y="48" fill="#eee6d5" fontSize="27" fontWeight="700" letterSpacing="3">{label}</text>
      <text x="35" y="91" fill={color} fontSize="35" fontWeight="800">{temperature}</text>
    </g>
  </svg>;
};

const TransitionFlash: React.FC<{seed: number; hueShift: number}> = ({seed, hueShift}) => {
  const frame = useCurrentFrame();
  return <Solid
    width={1920}
    height={1080}
    effects={[lightLeak({seed, hueShift, progress: interpolate(frame, [0, 19], [0, 1], clamp)})]}
    style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(frame, [0, 7, 14, 19], [0, 0.38, 0.24, 0], clamp), mixBlendMode: 'screen', pointerEvents: 'none'}}
  />;
};

const InstallerStudy: React.FC = () => {
  const frame = useCurrentFrame();
  const trace = interpolate(frame, [12, 62], [0, 1], clamp);
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#223b3a', fontFamily: 'Arial, sans-serif'}}>
    <Video name="Installer studies room" src={staticFile('sprinkler-assembly/registry/installer-v1.mp4')} muted durationInFrames={108} objectFit="cover" style={{width: '100%', height: '100%', scale: interpolate(frame, [0, 107], [1, 1.035], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}/>
    <AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(34,59,58,0.72) 0%, rgba(34,59,58,0.18) 38%, transparent 63%)'}}/>
    <Interactive.Div name="Human choice eyebrow" style={{position: 'absolute', left: 100, top: 130, fontSize: 25, fontWeight: 700, letterSpacing: 6, color: '#e7bb61', opacity: interpolate(frame, [4, 14], [0, 1], clamp)}}>YEARS BEFORE THE FIRE</Interactive.Div>
    <Interactive.Div name="Somebody chose title" style={{position: 'absolute', left: 100, top: 200, width: 620, fontSize: 90, fontWeight: 800, lineHeight: 0.98, color: '#eee6d5', opacity: interpolate(frame, [10, 24], [0, 1], clamp), translate: interpolate(frame, [10, 26], ['-40px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>SOMEBODY<br/>CHOSE.</Interactive.Div>
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
      <path d="M1195 910 C1050 770 955 440 864 120" fill="none" stroke="#007e82" strokeWidth="7" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - trace}/>
      <circle cx="864" cy="120" r={48 + Math.sin(frame * 0.18) * 5} fill="none" stroke="#007e82" strokeWidth="7" opacity={interpolate(frame, [38, 54], [0, 1], clamp)}/>
      <circle cx="1195" cy="910" r="72" fill="none" stroke="#c89548" strokeWidth="7" opacity={interpolate(frame, [12, 28], [0, 1], clamp)}/>
      {['#e98935', '#c66049', '#e7bb61', '#4f8b62', '#397aaa', '#77539a'].map((color, index) => <circle key={color} cx={1137 + index * 23} cy="910" r="9" fill={color} opacity={interpolate(frame, [16 + index * 3, 25 + index * 3], [0, 1], clamp)}/>) }
    </svg>
    <Interactive.Div name="Room context label" style={{position: 'absolute', left: 100, bottom: 95, padding: '13px 22px', border: '3px solid #eee6d5', borderRadius: 28, color: '#eee6d5', fontSize: 22, fontWeight: 700, letterSpacing: 4, opacity: interpolate(frame, [58, 74], [0, 1], clamp)}}>ROOM · CEILING · NORMAL HEAT</Interactive.Div>
  </AbsoluteFill>;
};

const KitchenMismatch: React.FC = () => {
  const frame = useCurrentFrame();
  const cue71 = 82;
  const activation = interpolate(frame, [cue71, cue71 + 13], [0, 1], clamp);
  const heatTrace = interpolate(frame, [12, 70], [0, 1], clamp);
  const burstAge = frame - cue71;
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#223b3a', fontFamily: 'Arial, sans-serif'}}>
    <Video name="Wrong office bulb over fryer" src={staticFile('sprinkler-assembly/registry/kitchen-grok-v1.mp4')} muted durationInFrames={132} objectFit="cover" style={{width: '100%', height: '100%', scale: interpolate(frame, [0, 131], [1.01, 1.045], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}/>
    <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(238,230,213,0.02) 0%, transparent 52%, rgba(34,59,58,0.16) 100%)'}}/>
    <HeadMarker x={1107} y={78} color="#e98935" label="OFFICE BULB" temperature="57°C · TOO LOW" progress={interpolate(frame, [8, 24], [0, 1], clamp)} align="left"/>
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
      <path d="M1495 665 C1450 520 1280 390 1107 105" fill="none" stroke="#e98935" strokeWidth="12" strokeLinecap="round" pathLength="1" strokeDasharray="0.05 0.035" strokeDashoffset={1 - heatTrace} opacity="0.82"/>
      <path d="M1495 665 C1450 520 1280 390 1107 105" fill="none" stroke="#e7bb61" strokeWidth="28" strokeLinecap="round" opacity={0.08 + 0.12 * Math.sin(frame * 0.2)}/>
      <g opacity={activation}>
        <defs>
          <linearGradient id="kitchen-spray" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#007e82" stopOpacity="0.42"/><stop offset="1" stopColor="#007e82" stopOpacity="0.03"/></linearGradient>
        </defs>
        <path d="M1107 112 C1085 280 900 500 810 925 C960 865 1245 865 1450 925 C1335 500 1130 280 1107 112 Z" fill="url(#kitchen-spray)"/>
        <ellipse cx="1107" cy="118" rx="43" ry="10" fill="#007e82" opacity="0.9"/>
        <path d="M1107 118 C1060 250 905 470 835 900 M1107 118 C1080 300 990 560 965 930 M1107 118 C1100 330 1085 625 1088 945 M1107 118 C1125 330 1200 610 1245 930 M1107 118 C1160 260 1335 500 1420 900" fill="none" stroke="#007e82" strokeWidth="7" strokeLinecap="round" pathLength="1" strokeDasharray="0.075 0.04" strokeDashoffset={1 - interpolate(frame, [cue71, cue71 + 24], [0, 1], clamp)} opacity="0.72"/>
        {Array.from({length: 18}).map((_, index) => {
          const x = 890 + ((index * 83) % 540);
          const y = 250 + ((frame - cue71) * (13 + index % 5) + index * 61) % 710;
          return <path key={index} d={`M${x} ${y} q-10 18 0 31 q10-13 0-31`} fill="#007e82" opacity={0.32 + (index % 4) * 0.1}/>;
        })}
      </g>
    </svg>
    <Interactive.Div name="Kitchen mismatch verdict" style={{position: 'absolute', right: 100, bottom: 90, padding: '18px 30px', backgroundColor: '#c66049', color: '#eee6d5', fontSize: 54, fontWeight: 800, letterSpacing: 4, opacity: interpolate(frame, [cue71 + 4, cue71 + 15], [0, 1], clamp), scale: interpolate(frame, [cue71 + 4, cue71 + 17], [1.18, 1], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)}), rotate: '-2deg', boxShadow: '10px 12px 0 rgba(34,59,58,0.2)'}}>TOO SOON.</Interactive.Div>
    {burstAge >= 0 && burstAge <= 15 && <Solid width={1920} height={1080} effects={[starburst({rays: 26, colors: ['#eee6d5', '#e98935', '#007e82'], rotation: burstAge * 2.4, smoothness: 0.2, origin: [0.577, 0.073]})]} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(burstAge, [0, 4, 15], [0, 0.27, 0], clamp), mixBlendMode: 'multiply', pointerEvents: 'none'}}/>}
  </AbsoluteFill>;
};

const OfficeMismatch: React.FC = () => {
  const frame = useCurrentFrame();
  const cue73 = 76;
  const danger = interpolate(frame, [cue73, 160], [0, 1], clamp);
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#223b3a', fontFamily: 'Arial, sans-serif'}}>
    <Video name="Wrong kitchen bulb in office" src={staticFile('sprinkler-assembly/registry/office-fire-grok-v1.mp4')} muted durationInFrames={172} objectFit="cover" style={{width: '100%', height: '100%', scale: interpolate(frame, [0, 171], [1.005, 1.04], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}/>
    <AbsoluteFill style={{background: `radial-gradient(circle at 66% 68%, rgba(198,96,73,${0.04 + danger * 0.22}), transparent 27%), linear-gradient(90deg, rgba(34,59,58,0.64) 0%, rgba(34,59,58,0.08) 42%, transparent 70%)`}}/>
    <HeadMarker x={1255} y={126} color="#4f8b62" label="KITCHEN BULB" temperature="93°C · TOO HIGH" progress={interpolate(frame, [8, 25], [0, 1], clamp)} align="left"/>
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
      <defs>
        <linearGradient id="office-heat" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#c66049" stopOpacity="0.58"/><stop offset="1" stopColor="#e7bb61" stopOpacity="0"/></linearGradient>
      </defs>
      <path d="M1290 880 C1180 760 1200 610 1270 520 C1340 430 1300 340 1255 285 L1255 930 Z" fill="url(#office-heat)" opacity={danger}/>
      <path d="M1285 850 C1250 650 1320 520 1255 310" fill="none" stroke="#c66049" strokeWidth="9" pathLength="1" strokeDasharray="0.05 0.045" strokeDashoffset={1 - interpolate(frame, [cue73, 148], [0, 0.78], clamp)} opacity="0.78"/>
      <circle cx="1255" cy="126" r={60 + danger * 24} fill="none" stroke="#4f8b62" strokeWidth="9" opacity={0.55 + 0.2 * Math.sin(frame * 0.18)}/>
      <path d="M1185 225 H1325" stroke="#223b3a" strokeWidth="10" opacity={interpolate(frame, [cue73 + 28, cue73 + 44], [0, 1], clamp)}/>
    </svg>
    <Interactive.Div name="Office mismatch title" style={{position: 'absolute', left: 100, top: 330, width: 650, fontSize: 83, fontWeight: 800, lineHeight: 0.98, color: '#eee6d5', opacity: interpolate(frame, [cue73 + 12, cue73 + 28], [0, 1], clamp), translate: interpolate(frame, [cue73 + 12, cue73 + 31], ['-45px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>THE FIRE GROWS.<br/><span style={{color: '#e7bb61'}}>IT WAITS.</span></Interactive.Div>
    <Interactive.Div name="Office mismatch verdict" style={{position: 'absolute', left: 105, bottom: 90, padding: '16px 28px', border: '5px solid #c66049', backgroundColor: 'rgba(238,230,213,0.92)', color: '#c66049', fontSize: 48, fontWeight: 800, letterSpacing: 4, opacity: interpolate(frame, [cue73 + 48, cue73 + 64], [0, 1], clamp), rotate: '1deg'}}>TOO LATE.</Interactive.Div>
  </AbsoluteFill>;
};

const InstallerGuess: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#223b3a', fontFamily: 'Arial, sans-serif'}}>
    <Video name="Installer uncertainty" src={staticFile('sprinkler-assembly/registry/installer-v1.mp4')} muted trimBefore={120} playbackRate={0.805369} durationInFrames={149} objectFit="cover" style={{width: '100%', height: '100%', scale: interpolate(frame, [0, 148], [1.03, 1.06], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}/>
    <AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(34,59,58,0.7) 0%, rgba(34,59,58,0.16) 45%, transparent 70%)'}}/>
    <Interactive.Div name="Guess title" style={{position: 'absolute', left: 100, top: 170, fontSize: 148, fontWeight: 800, color: '#eee6d5', letterSpacing: 7, opacity: interpolate(frame, [7, 20], [0, 1], clamp), translate: interpolate(frame, [7, 24], ['-55px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>GUESS.</Interactive.Div>
    <Interactive.Div name="Guess definition" style={{position: 'absolute', left: 108, top: 345, width: 570, fontSize: 40, lineHeight: 1.23, color: '#e7bb61', opacity: interpolate(frame, [28, 43], [0, 1], clamp)}}>How hot will this ceiling get<br/>on an ordinary day?</Interactive.Div>
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
      <path d="M110 560 H650" stroke="#eee6d5" strokeWidth="6"/>
      {[0, 1, 2, 3].map((index) => <g key={index} opacity={interpolate(frame, [48 + index * 12, 60 + index * 12], [0, 1], clamp)}><circle cx={175 + index * 145} cy="645" r="39" fill={['#e98935', '#c66049', '#e7bb61', '#4f8b62'][index]} stroke="#eee6d5" strokeWidth="5"/><text x={175 + index * 145} y="723" fill="#eee6d5" fontSize="25" fontWeight="700" textAnchor="middle">{[57, 68, 79, 93][index]}°</text></g>)}
      <path d="M145 800 H620" stroke="#c66049" strokeWidth="11" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - interpolate(frame, [92, 126], [0, 1], clamp)}/>
    </svg>
    <Interactive.Div name="Human decision label" style={{position: 'absolute', left: 107, bottom: 108, fontSize: 25, fontWeight: 700, letterSpacing: 5, color: '#eee6d5', opacity: interpolate(frame, [100, 118], [0, 1], clamp)}}>A HUMAN DECISION · SEALED INTO GLASS</Interactive.Div>
  </AbsoluteFill>;
};

const InstallerExit: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#223b3a', fontFamily: 'Arial, sans-serif'}}>
    <Video name="Installer exits" src={staticFile('sprinkler-assembly/registry/installer-v1.mp4')} muted trimBefore={288} playbackRate={1.6} durationInFrames={45} objectFit="cover" style={{width: '100%', height: '100%', scale: 1.03}}/>
    <AbsoluteFill style={{background: `linear-gradient(90deg, rgba(34,59,58,${0.08 + interpolate(frame, [18, 44], [0, 0.5], clamp)}) 0%, transparent 58%)`}}/>
    <Interactive.Div name="Exit consequence panel" style={{position: 'absolute', top: 0, bottom: 0, right: 0, width: 610, backgroundColor: '#223b3a', borderLeft: '12px solid #c89548', translate: interpolate(frame, [18, 42], ['620px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)}), boxShadow: '-20px 0 45px rgba(34,59,58,0.18)'}}>
      <div style={{position: 'absolute', left: 70, top: 285, width: 440, color: '#eee6d5', fontSize: 72, fontWeight: 800, lineHeight: 1.02}}>THE CHOICE<br/><span style={{color: '#e7bb61'}}>STAYS.</span></div>
      <div style={{position: 'absolute', left: 74, top: 500, color: '#eee6d5', fontSize: 23, fontWeight: 700, letterSpacing: 5}}>LONG AFTER HE LEAVES</div>
    </Interactive.Div>
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}><circle cx="864" cy="120" r={52 + Math.sin(frame * 0.25) * 4} fill="none" stroke="#007e82" strokeWidth="8" opacity={interpolate(frame, [24, 40], [0, 1], clamp)}/></svg>
  </AbsoluteFill>;
};

export const JudgementScene: React.FC = () => <AbsoluteFill style={{backgroundColor: '#223b3a'}}>
  <Sequence name="69 · Somebody chooses" durationInFrames={108}><InstallerStudy/></Sequence>
  <Sequence name="70–71 · Office bulb over fryer" from={108} durationInFrames={132}><KitchenMismatch/></Sequence>
  <Sequence name="72–73 · Kitchen bulb in office" from={240} durationInFrames={172}><OfficeMismatch/></Sequence>
  <Sequence name="74 · Somebody had to guess" from={412} durationInFrames={149}><InstallerGuess/></Sequence>
  <Sequence name="75 · And then leave" from={561} durationInFrames={45}><InstallerExit/></Sequence>
  <Sequence from={98} durationInFrames={20}><TransitionFlash seed={69} hueShift={22}/></Sequence>
  <Sequence from={230} durationInFrames={20}><TransitionFlash seed={71} hueShift={338}/></Sequence>
  <Sequence from={402} durationInFrames={20}><TransitionFlash seed={73} hueShift={18}/></Sequence>
</AbsoluteFill>;

export const JudgementReview: React.FC = () => <AbsoluteFill>
  <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find((cue) => cue.cue === '69')!.f_in)}/>
  <JudgementScene/>
</AbsoluteFill>;
