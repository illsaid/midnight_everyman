import {AbsoluteFill, Easing, Interactive, interpolate, Solid, staticFile, useCurrentFrame} from 'remotion';
import {Audio} from '@remotion/media';
import {lightLeak} from '@remotion/effects/light-leak';
import {starburst} from '@remotion/effects/starburst';
import {cues} from './cues';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const impacts = [
  {start: 72, origin: [0.50, 0.30] as const},
  {start: 92, origin: [0.84, 0.30] as const},
  {start: 112, origin: [0.49, 0.75] as const},
  {start: 151, origin: [0.84, 0.75] as const},
  {start: 191, origin: [0.68, 0.84] as const},
];

type CardKind = 'sensor' | 'wiring' | 'computer' | 'panel' | 'decision';

const CardIcon: React.FC<{kind: CardKind}> = ({kind}) => {
  if (kind === 'sensor') return <svg viewBox="0 0 120 90"><circle cx="60" cy="48" r="25" fill="none" stroke="#223b3a" strokeWidth="7"/><path d="M22 28 Q60 -8 98 28 M34 37 Q60 14 86 37" fill="none" stroke="#c89548" strokeWidth="6" strokeLinecap="round"/></svg>;
  if (kind === 'wiring') return <svg viewBox="0 0 120 90"><path d="M18 20 H55 V68 H101" fill="none" stroke="#223b3a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="18" cy="20" r="10" fill="#c89548"/><circle cx="55" cy="68" r="10" fill="#c89548"/><circle cx="101" cy="68" r="10" fill="#c89548"/></svg>;
  if (kind === 'computer') return <svg viewBox="0 0 120 90"><rect x="15" y="10" width="90" height="58" rx="7" fill="#d8cdb8" stroke="#223b3a" strokeWidth="7"/><path d="M45 82 H75 M60 68 V82" stroke="#223b3a" strokeWidth="7"/><path d="M34 30 H86 M34 44 H72" stroke="#007e82" strokeWidth="5" strokeLinecap="round"/></svg>;
  if (kind === 'panel') return <svg viewBox="0 0 120 90"><rect x="12" y="8" width="96" height="74" rx="8" fill="#d8cdb8" stroke="#223b3a" strokeWidth="7"/>{[0, 1, 2].map((i) => <g key={i}><circle cx={34+i*26} cy="31" r="7" fill={i === 1 ? '#c66049' : '#c89548'}/><path d={`M${28+i*26} 57 H${40+i*26}`} stroke="#223b3a" strokeWidth="6" strokeLinecap="round"/></g>)}</svg>;
  return <svg viewBox="0 0 120 90"><path d="M60 5 L108 45 L60 85 L12 45 Z" fill="#d8cdb8" stroke="#223b3a" strokeWidth="7"/><text x="60" y="61" fill="#c66049" fontSize="48" fontWeight="700" textAnchor="middle">?</text></svg>;
};

const RejectCard: React.FC<{kind: CardKind; label: string; x: number; y: number; start: number; hit: number}> = ({kind, label, x, y, start, hit}) => {
  const frame = useCurrentFrame();
  const rejected = interpolate(frame, [hit, hit + 8], [0, 1], clamp);
  return <div style={{position: 'absolute', left: x, top: y, width: 270, height: 148, border: '6px solid #223b3a', borderRadius: 22, background: `rgba(246,239,223,${1-0.12*rejected})`, boxShadow: '10px 12px 0 rgba(34,59,58,0.13)', opacity: interpolate(frame, [start, start + 8], [0, 1], clamp), scale: interpolate(frame, [start, start + 12], [0.72, 1], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)}), rotate: interpolate(frame, [start, start + 12], ['-5deg', '0deg'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>
    <div style={{position: 'absolute', left: 18, top: 18, width: 92, height: 76}}><CardIcon kind={kind}/></div>
    <div style={{position: 'absolute', left: 118, top: 44, width: 134, color: rejected > 0.5 ? '#7f8d86' : '#223b3a', fontSize: 25, fontWeight: 700, letterSpacing: 2, lineHeight: 1.05}}>{label}</div>
    <svg viewBox="0 0 270 148" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
      <path d="M20 18 L250 130" stroke="#c66049" strokeWidth="19" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-rejected}/>
      <path d="M248 18 L20 130" stroke="#c66049" strokeWidth="19" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-rejected}/>
      <path d="M20 18 L250 130 M248 18 L20 130" stroke="#eee6d5" strokeWidth="4" strokeLinecap="round" opacity={rejected}/>
    </svg>
  </div>;
};

const SprinklerGlyph: React.FC<{frame: number}> = ({frame}) => <g transform={`translate(1290 515) scale(${interpolate(frame, [0, 20], [0.76, 1], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})})`}>
  <circle r="185" fill="#f4d7bd" opacity="0.55"/>
  <circle r={150 + Math.sin(frame * 0.11) * 4} fill="none" stroke="#c89548" strokeWidth="5" opacity="0.55"/>
  <path d="M-105 -205 H105 V-155 H-105 Z" fill="#c89548" stroke="#223b3a" strokeWidth="10"/>
  <path d="M-74 -155 H74 L59 65 H-59 Z" fill="#eee6d5" stroke="#223b3a" strokeWidth="11"/>
  <rect x="-24" y="-95" width="48" height="140" rx="24" fill="#c66049" stroke="#007e82" strokeWidth="7"/>
  <ellipse cy="-70" rx="12" ry="17" fill="#eee6d5"/>
  <path d="M-126 86 H126 M-88 86 L-46 132 L0 86 L46 132 L88 86" fill="none" stroke="#223b3a" strokeWidth="11" strokeLinecap="round"/>
</g>;

const ImpactBurst: React.FC<{start: number; origin: readonly [number, number]}> = ({start, origin}) => {
  const frame = useCurrentFrame();
  const age = frame - start;
  if (age < 0 || age > 13) return null;
  return <Solid width={1920} height={1080} effects={[starburst({rays: 18, colors: ['#eee6d5', '#e7bb61', '#c66049'], rotation: age * 2.8, smoothness: 0.14, origin})]} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(age, [0, 3, 13], [0, 0.32, 0], clamp), mixBlendMode: 'multiply', pointerEvents: 'none'}}/>;
};

export const MechanismRecapScene: React.FC = () => {
  const frame = useCurrentFrame();
  const networkOpacity = interpolate(frame, [0, 220, 242], [1, 1, 0], clamp);
  const finalOpacity = interpolate(frame, [226, 246], [0, 1], clamp);
  const bubbleShrink = interpolate(frame, [242, 279], [1, 0.16], {...clamp, easing: Easing.bezier(0.55, 0, 0.4, 1)});
  const buildingOpacity = interpolate(frame, [274, 292], [0, 1], clamp);
  const macroOpacity = interpolate(frame, [234, 282, 302], [1, 1, 0], clamp);
  const pullback = interpolate(frame, [278, 311], [1, 0.2], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)});
  const lightLeakProgress = interpolate(frame, [224, 249], [0, 1], clamp);

  return <AbsoluteFill style={{backgroundColor: '#eee6d5', color: '#223b3a', fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
    <AbsoluteFill style={{backgroundImage: 'radial-gradient(circle at 68% 44%, rgba(198,96,73,0.15), transparent 28%), linear-gradient(120deg, rgba(200,149,72,0.08), transparent 52%)'}}/>
    <AbsoluteFill style={{opacity: 0.12, backgroundImage: 'radial-gradient(circle, rgba(34,59,58,0.5) 0 0.7px, transparent 0.9px)', backgroundSize: '9px 9px', backgroundPosition: `${(frame*0.08)%18}px ${(frame*0.04)%18}px`}}/>

    <div style={{position: 'absolute', inset: 0, opacity: networkOpacity}}>
      <Interactive.Div name="Recap eyebrow" style={{position: 'absolute', left: 100, top: 150, fontSize: 25, fontWeight: 700, letterSpacing: 6}}>THE MECHANISM / RECAP</Interactive.Div>
      <Interactive.Div name="Recap title" style={{position: 'absolute', left: 100, top: 235, width: 610, fontSize: 90, fontWeight: 700, lineHeight: 1.02}}>THE WHOLE<br/>MECHANISM.</Interactive.Div>
      <Interactive.Div name="Recap subhead" style={{position: 'absolute', left: 105, top: 505, width: 550, fontSize: 38, lineHeight: 1.25, color: '#c66049', opacity: interpolate(frame, [54, 68], [0, 1], clamp)}}>Five impressive things<br/>it does not need.</Interactive.Div>
      <div style={{position: 'absolute', left: 760, top: 80, width: 1060, height: 920, border: '7px solid #223b3a', borderRadius: 34, background: 'rgba(246,239,223,0.78)', boxShadow: '16px 18px 0 rgba(34,59,58,0.12)'}}/>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <text x="810" y="135" fill="#223b3a" fontSize="23" fontWeight="700" letterSpacing="5">FALSE COMPLEXITY / REMOVED</text>
        {[
          ['M965 328 Q1100 390 1190 440', 62, 76],
          ['M1615 328 Q1490 392 1390 440', 82, 96],
          ['M945 802 Q1090 690 1190 610', 103, 117],
          ['M1615 802 Q1490 690 1390 610', 139, 155],
          ['M1300 900 V700', 177, 195],
        ].map(([d, start, end], i) => <path key={i} d={String(d)} fill="none" stroke={i === 4 ? '#c66049' : '#c89548'} strokeWidth="8" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-interpolate(frame, [Number(start), Number(end)], [0, 1], clamp)} opacity={interpolate(frame, [Number(start), Number(start)+2, Number(end)+5, Number(end)+18], [0, 0.75, 0.75, 0], clamp)}/>) }
        <SprinklerGlyph frame={frame}/>
      </svg>
      <RejectCard kind="sensor" label="SENSOR" x={830} y={180} start={58} hit={72}/>
      <RejectCard kind="wiring" label="WIRING" x={1480} y={180} start={78} hit={92}/>
      <RejectCard kind="computer" label="COMPUTER" x={810} y={700} start={98} hit={112}/>
      <RejectCard kind="panel" label="CONTROL PANEL" x={1480} y={700} start={134} hit={151}/>
      <RejectCard kind="decision" label="DECISION" x={1155} y={825} start={172} hit={191}/>
      <Interactive.Div name="No decision stamp" style={{position: 'absolute', left: 885, top: 440, width: 810, padding: '24px 28px', border: '10px solid #c66049', backgroundColor: '#eee6d5', color: '#c66049', fontSize: 72, fontWeight: 800, letterSpacing: 7, textAlign: 'center', opacity: interpolate(frame, [198, 205], [0, 1], clamp), scale: interpolate(frame, [198, 208], [1.35, 1], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)}), rotate: '-3deg', boxShadow: '14px 16px 0 rgba(34,59,58,0.16)'}}>NO DECISION REQUIRED</Interactive.Div>
    </div>

    <div style={{position: 'absolute', inset: 0, opacity: finalOpacity}}>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <g opacity={buildingOpacity}>
          <path d="M1020 860 H1770" stroke="#223b3a" strokeWidth="11" strokeLinecap="round"/>
          <path d="M1080 860 V375 H1710 V860 Z" fill="#d8cdb8" stroke="#223b3a" strokeWidth="11"/>
          <path d="M1050 375 L1395 180 L1740 375 Z" fill="#c89548" stroke="#223b3a" strokeWidth="11" strokeLinejoin="round"/>
          <rect x="1340" y="690" width="110" height="170" fill="#007e82" stroke="#223b3a" strokeWidth="8"/>
          {Array.from({length: 12}, (_, i) => {
            const col = i % 4; const row = Math.floor(i / 4);
            return <rect key={i} x={1150+col*135} y={445+row*105} width="72" height="58" rx="5" fill="#f3c765" stroke="#223b3a" strokeWidth="6" opacity={interpolate(frame, [286+i*2, 296+i*2], [0.18, 1], clamp)}/>;
          })}
          <path d="M1000 720 C910 500 1025 250 1265 145 M1790 720 C1880 500 1765 250 1525 145" fill="none" stroke="#007e82" strokeWidth="11" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-interpolate(frame, [290, 322], [0, 1], clamp)}/>
        </g>
        <g transform={`translate(1395 400) scale(${pullback})`} opacity={macroOpacity}>
          <ellipse rx="190" ry="340" fill="#f4d7bd" opacity="0.7"/>
          <rect x="-78" y="-285" width="156" height="570" rx="78" fill="#c66049" stroke="#223b3a" strokeWidth="15"/>
          <path d="M-45 -230 V220" stroke="#edaa87" strokeWidth="12" strokeLinecap="round"/>
          <ellipse cy={-205 + 175*(1-bubbleShrink)} rx={34*bubbleShrink} ry={45*bubbleShrink} fill="#eee6d5" stroke="#223b3a" strokeWidth="7"/>
          <circle r={185+Math.sin(frame*0.15)*8} fill="none" stroke="#007e82" strokeWidth="8" opacity={interpolate(frame, [243, 260, 281], [0, 0.7, 0], clamp)}/>
        </g>
      </svg>
      <Interactive.Div name="Bubble payoff" style={{position: 'absolute', left: 100, top: 250, width: 760, fontSize: 88, fontWeight: 700, lineHeight: 1.02, opacity: interpolate(frame, [234, 246, 278, 288], [0, 1, 1, 0], clamp)}}>A BUBBLE<br/>GOT SMALLER.</Interactive.Div>
      <Interactive.Div name="Building payoff" style={{position: 'absolute', left: 100, top: 250, width: 780, fontSize: 88, fontWeight: 700, lineHeight: 1.02, opacity: interpolate(frame, [280, 294], [0, 1], clamp)}}>A BUILDING<br/>GOT SAVED.</Interactive.Div>
      <Interactive.Div name="Payoff rule" style={{position: 'absolute', left: 105, top: 500, width: 620, fontSize: 36, letterSpacing: 6, color: '#007e82', opacity: interpolate(frame, [296, 310], [0, 1], clamp)}}>NO COMPUTER REQUIRED</Interactive.Div>
    </div>

    {impacts.map(({start, origin}) => <ImpactBurst key={start} start={start} origin={origin}/>) }
    {frame >= 224 && frame <= 249 && <Solid width={1920} height={1080} effects={[lightLeak({seed: 57, hueShift: 18, progress: lightLeakProgress})]} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(frame, [224, 232, 243, 249], [0, 0.34, 0.22, 0], clamp), mixBlendMode: 'screen', pointerEvents: 'none'}}/>}
  </AbsoluteFill>;
};

export const MechanismRecapReview: React.FC = () => <AbsoluteFill>
  <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find((c) => c.cue === '57')!.f_in)}/>
  <MechanismRecapScene/>
</AbsoluteFill>;
