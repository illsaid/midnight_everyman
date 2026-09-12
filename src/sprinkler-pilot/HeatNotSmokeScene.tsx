import {AbsoluteFill, Easing, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Audio} from '@remotion/media';
import {cues} from './cues';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const SprinklerHead: React.FC<{x: number; y: number; scale?: number; active?: number; dim?: number}> = ({x, y, scale = 1, active = 0, dim = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={dim}>
    <circle r={58 + active * 24} fill="#007e82" opacity={active * 0.1}/>
    <circle r={50 + active * 18} fill="none" stroke="#007e82" strokeWidth="4" opacity={active}/>
    <path d="M-48 -52 H48 V-26 H-48 Z" fill="#c89548" stroke="#223b3a" strokeWidth="6"/>
    <path d="M-34 -26 H34 L27 55 H-27 Z" fill="#eee6d5" stroke="#223b3a" strokeWidth="6"/>
    <rect x="-10" y="-8" width="20" height="54" rx="10" fill="#c66049" stroke="#223b3a" strokeWidth="3"/>
    <ellipse cy="2" rx="5" ry="8" fill="#eee6d5"/>
    <path d="M-61 65 H61 M-42 65 L-22 88 L0 65 L22 88 L42 65" fill="none" stroke="#223b3a" strokeWidth="6" strokeLinecap="round"/>
  </g>
);

const HumanProfile: React.FC<{frame: number}> = ({frame}) => (
  <g transform="translate(1370 540)">
    <circle r="335" fill="#f4d7bd" opacity="0.48"/>
    <circle r="290" fill="none" stroke="#c89548" strokeWidth="4" opacity="0.55"/>
    <path d="M145 -250 C30 -310 -120 -270 -180 -165 C-208 -114 -215 -58 -203 -6 L-312 90 C-328 105 -317 132 -295 135 L-205 148 C-198 238 -142 287 -54 300 L148 300 Z" fill="#d8cdb8" stroke="#223b3a" strokeWidth="10" strokeLinejoin="round"/>
    <path d="M-185 4 C-150 -20 -108 -20 -73 4" fill="none" stroke="#223b3a" strokeWidth="8" strokeLinecap="round"/>
    <circle cx="-139" cy="-70" r="9" fill="#223b3a"/>
    <path d="M-267 116 Q-232 96 -196 118" fill="none" stroke="#223b3a" strokeWidth="7" strokeLinecap="round"/>
    <circle cx="-275" cy="117" r="7" fill="#223b3a"/>
    <path d="M48 300 V390 M-72 300 V390 M-130 390 H112" stroke="#223b3a" strokeWidth="12" strokeLinecap="round"/>
    {[0, 1, 2].map((i) => <path key={i} d={`M${-610-i*90} ${90-i*82} C${-525-i*90} ${28-i*66} ${-440-i*58} ${168-i*44} -320 117`} fill="none" stroke={i === 1 ? '#c66049' : '#c89548'} strokeWidth={i === 1 ? 18 : 12} strokeLinecap="round" opacity={0.82-i*0.12} pathLength="1" strokeDasharray="1" strokeDashoffset={1-interpolate(frame, [i*6, 20+i*6], [0, 1], clamp)}/>) }
    <g opacity={interpolate(frame, [18, 29], [0, 1], clamp)}>
      <circle cx="-276" cy="116" r="42" fill="none" stroke="#c66049" strokeWidth="8"/>
      <path d="M-322 72 L-229 165" stroke="#c66049" strokeWidth="15" strokeLinecap="round"/>
    </g>
  </g>
);

export const HeatNotSmokeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const smellOpacity = interpolate(frame, [0, 38, 52], [1, 1, 0], clamp);
  const heatOpacity = interpolate(frame, [38, 53, 100, 116], [0, 1, 1, 0], clamp);
  const ceilingOpacity = interpolate(frame, [101, 117], [0, 1], clamp);
  const plumeProgress = interpolate(frame, [112, 188], [0, 1], {...clamp, easing: Easing.bezier(0.45, 0, 0.18, 1)});
  const headEmphasis = interpolate(frame, [176, 190, 207], [0, 1, 0.72], clamp);

  return <AbsoluteFill style={{backgroundColor: '#eee6d5', color: '#223b3a', fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
    <AbsoluteFill style={{backgroundImage: 'radial-gradient(circle at 72% 42%, rgba(198,96,73,0.13), transparent 30%), linear-gradient(115deg, rgba(200,149,72,0.05), transparent 48%)'}}/>
    <AbsoluteFill style={{opacity: 0.15, backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 11px, rgba(34,59,58,0.08) 12px)'}}/>
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
      <g opacity={smellOpacity} transform={`translate(${interpolate(frame, [0, 18], [55, 0], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})} 0)`}>
        <rect x="910" y="92" width="890" height="896" rx="34" fill="#f6efdf" stroke="#223b3a" strokeWidth="7"/>
        <rect x="940" y="122" width="250" height="54" rx="27" fill="#223b3a"/>
        <text x="1065" y="159" fill="#eee6d5" fontSize="25" fontWeight="700" letterSpacing="5" textAnchor="middle">HUMAN SENSE</text>
        <HumanProfile frame={frame}/>
        <g opacity={interpolate(frame, [27, 37], [0, 1], clamp)}>
          <rect x="1035" y="852" width="650" height="74" rx="37" fill="#c66049"/>
          <text x="1360" y="901" fill="#eee6d5" fontSize="31" fontWeight="700" letterSpacing="6" textAnchor="middle">NO SMOKE SENSOR HERE</text>
        </g>
      </g>

      <g opacity={heatOpacity} transform={`translate(${interpolate(frame, [38, 56], [70, 0], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})} 0)`}>
        <rect x="860" y="125" width="950" height="830" rx="34" fill="#f6efdf" stroke="#223b3a" strokeWidth="7"/>
        <text x="910" y="195" fill="#223b3a" fontSize="24" fontWeight="700" letterSpacing="5">INPUT TEST / ONE HEAD</text>
        <path d="M930 383 H1335 M930 678 H1335" stroke="#b5afa2" strokeWidth="12" strokeLinecap="round"/>
        <g transform="translate(1000 382)">
          <circle r="58" fill="#d8cdb8"/>
          <path d="M-28 6 C-58 -23 -16 -48 -35 -78 M8 6 C-23 -27 20 -50 4 -82 M42 8 C13 -21 54 -43 40 -72" fill="none" stroke="#7f8d86" strokeWidth="8" strokeLinecap="round"/>
        </g>
        <text x="1090" y="395" fill="#7f8d86" fontSize="32" fontWeight="700" letterSpacing="4">SMOKE</text>
        <path d="M1255 345 L1324 414 M1324 345 L1255 414" stroke="#c66049" strokeWidth="18" strokeLinecap="round" opacity={interpolate(frame, [48, 60], [0, 1], clamp)}/>
        <g transform="translate(1000 678)">
          <circle r="68" fill="#f4d7bd" stroke="#c66049" strokeWidth="4"/>
          <rect x="-15" y="-42" width="30" height="78" rx="15" fill="#eee6d5" stroke="#223b3a" strokeWidth="5"/>
          <circle cy="37" r="28" fill="#c66049" stroke="#223b3a" strokeWidth="5"/>
          <rect x="-7" y={interpolate(frame, [50, 85], [17, -31], clamp)} width="14" height={interpolate(frame, [50, 85], [20, 68], clamp)} rx="7" fill="#c66049"/>
        </g>
        <text x="1090" y="691" fill="#c66049" fontSize="32" fontWeight="700" letterSpacing="4">HEAT</text>
        <path d="M1255 678 H1405" stroke="#c66049" strokeWidth="18" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-interpolate(frame, [58, 88], [0, 1], clamp)}/>
        <path d="M1375 648 L1410 678 L1375 708" fill="none" stroke="#c66049" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity={interpolate(frame, [76, 89], [0, 1], clamp)}/>
        <SprinklerHead x={1570} y={520} scale={2.15} active={interpolate(frame, [82, 96], [0, 0.9], clamp)}/>
        <rect x="1380" y="815" width="380" height="72" rx="36" fill="#007e82" opacity={interpolate(frame, [84, 97], [0, 1], clamp)}/>
        <text x="1570" y="862" fill="#eee6d5" fontSize="25" fontWeight="700" letterSpacing="4" textAnchor="middle" opacity={interpolate(frame, [84, 97], [0, 1], clamp)}>LOCAL RESPONSE</text>
      </g>

      <g opacity={ceilingOpacity}>
        <defs>
          <linearGradient id="hot-layer" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#c66049" stopOpacity="0.48"/><stop offset="0.68" stopColor="#c89548" stopOpacity="0.35"/><stop offset="1" stopColor="#c89548" stopOpacity="0"/></linearGradient>
          <clipPath id="wastebasket-body"><path d="M-82 -34 H82 L61 96 H-61 Z"/></clipPath>
        </defs>
        <path d="M0 180 H1920" stroke="#223b3a" strokeWidth="20"/><path d="M0 202 H1920" stroke="#c89548" strokeWidth="7"/>
        <g transform="translate(335 875)">
          <path d="M-52 -35 L-66 -88 L-21 -105 L2 -36 Z" fill="#f6efdf" stroke="#223b3a" strokeWidth="5" strokeLinejoin="round"/>
          <path d="M2 -33 L18 -91 L63 -74 L50 -30 Z" fill="#eee6d5" stroke="#223b3a" strokeWidth="5" strokeLinejoin="round"/>
          <path d="M-20 -34 C-51 -96 -5 -126 -13 -190 C41 -145 55 -88 26 -27 Z" fill="#c66049" stroke="#223b3a" strokeWidth="6"/>
          <path d="M3 -34 C-16 -78 12 -101 21 -136 C52 -96 51 -58 30 -26 Z" fill="#e5a547"/>
          <path d="M-82 -34 H82 L61 96 H-61 Z" fill="#d8cdb8" fillOpacity="0.34" stroke="#223b3a" strokeWidth="7" strokeLinejoin="round"/>
          <g clipPath="url(#wastebasket-body)" stroke="#223b3a" strokeWidth="4" opacity="0.88">
            {[-160, -110, -60, -10, 40, 90, 140].map((x) => <path key={`r${x}`} d={`M${x} -55 L${x+150} 115`}/>) }
            {[-130, -80, -30, 20, 70, 120, 170].map((x) => <path key={`l${x}`} d={`M${x} 115 L${x+150} -55`}/>) }
          </g>
          <ellipse cy="-34" rx="89" ry="17" fill="#eee6d5" stroke="#223b3a" strokeWidth="7"/>
          <ellipse cy="-34" rx="71" ry="9" fill="#223b3a" opacity="0.35"/>
          <path d="M-57 98 H57" stroke="#223b3a" strokeWidth="7" strokeLinecap="round"/>
        </g>
        <path d="M335 710 C332 520 400 300 635 219 C790 175 920 195 1062 205" fill="none" stroke="url(#hot-layer)" strokeWidth="148" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-plumeProgress}/>
        <path d="M335 710 C332 520 400 300 635 219 C790 175 920 195 1062 205" fill="none" stroke="#c89548" strokeWidth="25" strokeLinecap="round" opacity="0.9" pathLength="1" strokeDasharray="1" strokeDashoffset={1-plumeProgress}/>
        {[-28, 0, 28].map((offset, i) => <path key={offset} d={`M365 698 C370 510 430 ${318+offset} 660 ${224+offset} C800 ${185+offset} 918 ${198+offset} 1048 ${208+offset}`} fill="none" stroke={i === 1 ? '#eee6d5' : '#c66049'} strokeWidth={i === 1 ? 5 : 8} strokeLinecap="round" opacity={i === 1 ? 0.62 : 0.36} pathLength="1" strokeDasharray="0.045 0.035" strokeDashoffset={1-plumeProgress}/>) }
        <SprinklerHead x={1075} y={254} scale={1.05} active={headEmphasis}/>
        <SprinklerHead x={1390} y={254} scale={0.92} dim={0.38}/>
        <SprinklerHead x={1680} y={254} scale={0.82} dim={0.25}/>
        <path d="M1075 375 V452 H1280" fill="none" stroke="#007e82" strokeWidth="5" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-interpolate(frame, [181, 196], [0, 1], clamp)}/>
        <rect x="1260" y="415" width="490" height="82" rx="41" fill="#007e82" opacity={interpolate(frame, [189, 201], [0, 1], clamp)}/>
        <text x="1505" y="468" fill="#eee6d5" fontSize="31" fontWeight="700" letterSpacing="5" textAnchor="middle" opacity={interpolate(frame, [189, 201], [0, 1], clamp)}>THE NEAREST HEAD</text>
      </g>
    </svg>

    <Interactive.Div name="Smell title" style={{position: 'absolute', left: 100, top: 235, width: 720, fontSize: 92, fontWeight: 700, lineHeight: 1.02, opacity: smellOpacity}}>SPRINKLERS<br/>CANNOT SMELL.</Interactive.Div>
    <Interactive.Div name="Smell subhead" style={{position: 'absolute', left: 105, top: 570, width: 650, fontSize: 38, letterSpacing: 7, color: '#c66049', opacity: smellOpacity}}>SMOKE IS NOT AN INPUT</Interactive.Div>
    <Interactive.Div name="Heat title" style={{position: 'absolute', left: 100, top: 238, width: 670, fontSize: 92, fontWeight: 700, lineHeight: 1.02, opacity: heatOpacity}}>HEAT.<br/>ONLY HEAT.</Interactive.Div>
    <Interactive.Div name="Heat subhead" style={{position: 'absolute', left: 105, top: 470, width: 600, fontSize: 38, letterSpacing: 7, color: '#c66049', opacity: heatOpacity}}>ONE LOCAL SIGNAL</Interactive.Div>
    <Interactive.Div name="Heat travel title" style={{position: 'absolute', left: 100, top: 292, width: 690, fontSize: 68, fontWeight: 700, lineHeight: 1.02, opacity: ceilingOpacity}}>HOT GAS<br/>RISES.<br/>THEN SPREADS.</Interactive.Div>
    <Interactive.Div name="Heat travel subhead" style={{position: 'absolute', left: 105, top: 540, width: 500, fontSize: 38, lineHeight: 1.2, color: '#c66049', opacity: interpolate(frame, [128, 144], [0, 1], clamp)}}>Along the ceiling.<br/>Toward one head.</Interactive.Div>
  </AbsoluteFill>;
};

export const HeatNotSmokeReview: React.FC = () => <AbsoluteFill>
  <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find((c) => c.cue === '37')!.f_in)}/>
  <HeatNotSmokeScene/>
</AbsoluteFill>;
