import {AbsoluteFill, Easing, Interactive, interpolate, Sequence, Solid, staticFile, useCurrentFrame} from 'remotion';
import {Audio, Video} from '@remotion/media';
import {lightLeak} from '@remotion/effects/light-leak';
import {starburst} from '@remotion/effects/starburst';
import {cues} from './cues';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const colours = [
  {name: 'ORANGE', hex: '#e98935', c: 57, f: 135},
  {name: 'RED', hex: '#c66049', c: 68, f: 155},
  {name: 'YELLOW', hex: '#e7bb61', c: 79, f: 175},
  {name: 'GREEN', hex: '#4f8b62', c: 93, f: 200},
  {name: 'BLUE', hex: '#397aaa', c: 141, f: 286},
  {name: 'PURPLE', hex: '#77539a', c: 182, f: 360},
  {name: 'BLACK', hex: '#282d2d', c: 227, f: 500},
] as const;

const Bulb: React.FC<{x: number; y: number; scale?: number; color: string; active?: number; opacity?: number}> = ({x, y, scale = 1, color, active = 0, opacity = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
    <ellipse rx={72 + active * 14} ry={172 + active * 18} fill={color} opacity={active * 0.14}/>
    <rect x="-43" y="-150" width="86" height="300" rx="43" fill={color} stroke="#223b3a" strokeWidth="9"/>
    <path d="M-25 -112 V112" stroke="#ffffff" strokeWidth="8" opacity="0.42" strokeLinecap="round"/>
    <ellipse cy="-102" rx="18" ry="25" fill="#eee6d5" stroke="#223b3a" strokeWidth="5"/>
    <path d="M-57 -163 H57 M-52 163 H52" stroke="#c89548" strokeWidth="12" strokeLinecap="round"/>
    <circle r={75 + active * 20} fill="none" stroke="#007e82" strokeWidth="6" opacity={active}/>
  </g>
);

const SelectionBurst: React.FC<{start: number; origin: readonly [number, number]; color: string}> = ({start, origin, color}) => {
  const frame = useCurrentFrame();
  const age = frame - start;
  if (age < 0 || age > 14) return null;
  return <Solid width={1920} height={1080} effects={[starburst({rays: 24, colors: ['#eee6d5', color, '#007e82'], rotation: age * 1.8, smoothness: 0.18, origin})]} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(age, [0, 4, 14], [0, 0.22, 0], clamp), mixBlendMode: 'multiply', pointerEvents: 'none'}}/>;
};

const BoilerBeat: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#223b3a'}}>
    <Video src={staticFile('sprinkler-assembly/registry/boiler-grok-v1.mp4')} muted objectFit="cover" style={{width: '100%', height: '100%'}}/>
    <AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(34,59,58,0.78) 0%, rgba(34,59,58,0.28) 38%, transparent 62%)'}}/>
    <AbsoluteFill style={{opacity: 0.13, backgroundImage: 'repeating-linear-gradient(105deg, transparent 0 38px, rgba(231,187,97,0.55) 39px 41px, transparent 42px 80px)', backgroundPositionX: `${frame*2.5}px`}}/>
    <Interactive.Div name="Boiler temperature" style={{position: 'absolute', left: 100, top: 150, fontSize: 120, fontWeight: 800, color: '#eee6d5', letterSpacing: -3, opacity: interpolate(frame, [0, 12], [0, 1], clamp), translate: interpolate(frame, [0, 16], ['-45px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>93°C</Interactive.Div>
    <Interactive.Div name="Normal Tuesday" style={{position: 'absolute', left: 105, top: 315, width: 660, fontSize: 66, fontWeight: 700, lineHeight: 1.02, color: '#f3c765', opacity: interpolate(frame, [28, 42], [0, 1], clamp)}}>AN ORDINARY<br/>TUESDAY.</Interactive.Div>
    <Interactive.Div name="Boiler room label" style={{position: 'absolute', left: 105, bottom: 105, padding: '14px 24px', border: '3px solid #eee6d5', borderRadius: 30, fontSize: 23, fontWeight: 700, letterSpacing: 5, color: '#eee6d5', opacity: interpolate(frame, [50, 62], [0, 1], clamp)}}>BOILER ROOM / HIGH-HEAT BULB</Interactive.Div>
  </AbsoluteFill>;
};

export const ColourCodeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const introOpacity = interpolate(frame, [0, 98, 116], [1, 1, 0], clamp);
  const scaleOpacity = interpolate(frame, [92, 111, 370, 382], [0, 1, 1, 0], clamp);
  const finalOpacity = interpolate(frame, [488, 502], [0, 1], clamp);
  const activeIndex = frame < 171 ? 0 : frame < 222 ? 1 : frame < 265 ? 2 : 3;
  const activeStart = [107, 171, 222, 265][activeIndex];
  const active = colours[activeIndex];
  const highOpacity = interpolate(frame, [302, 316], [0, 1], clamp);
  const standardOpacity = interpolate(frame, [302, 316], [1, 0], clamp);
  const leakIn = interpolate(frame, [370, 393], [0, 1], clamp);
  const leakOut = interpolate(frame, [480, 503], [0, 1], clamp);

  return <AbsoluteFill style={{backgroundColor: '#eee6d5', color: '#223b3a', fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
    <AbsoluteFill style={{backgroundImage: 'radial-gradient(circle at 66% 45%, rgba(231,187,97,0.2), transparent 30%), linear-gradient(125deg, rgba(0,126,130,0.06), transparent 52%)'}}/>
    <AbsoluteFill style={{opacity: 0.12, backgroundImage: 'radial-gradient(circle, rgba(34,59,58,0.5) 0 0.7px, transparent 0.9px)', backgroundSize: '9px 9px', backgroundPosition: `${(frame*0.07)%18}px ${(frame*0.04)%18}px`}}/>

    <div style={{position: 'absolute', inset: 0, opacity: introOpacity}}>
      <Interactive.Div name="Colour intro eyebrow" style={{position: 'absolute', left: 100, top: 105, fontSize: 25, fontWeight: 700, letterSpacing: 6}}>THERMAL BULBS / THE CODE</Interactive.Div>
      <Interactive.Div name="Colour intro title" style={{position: 'absolute', left: 100, top: 180, width: 1720, fontSize: 88, fontWeight: 700, lineHeight: 1.02}}>SEVEN COLOURS.<br/>SEVEN BREAKING POINTS.</Interactive.Div>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <path d="M205 815 H1715" stroke="#223b3a" strokeWidth="7" strokeLinecap="round"/>
        {colours.map((item, i) => {
          const x = 255+i*235; const arrival = 14+i*9;
          return <g key={item.name} opacity={interpolate(frame, [arrival, arrival+9], [0, 1], clamp)} transform={`translate(0 ${interpolate(frame, [arrival, arrival+14], [210, 0], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})})`}>
            <Bulb x={x} y={630} scale={0.72} color={item.hex}/>
            <text x={x} y="875" fill="#223b3a" fontSize="25" fontWeight="700" letterSpacing="3" textAnchor="middle">{item.name}</text>
            <text x={x} y="922" fill={item.hex} fontSize="31" fontWeight="800" textAnchor="middle">{item.c}°</text>
          </g>;
        })}
      </svg>
    </div>

    <div style={{position: 'absolute', inset: 0, opacity: scaleOpacity}}>
      <Interactive.Div name="Temperature eyebrow" style={{position: 'absolute', left: 100, top: 105, fontSize: 25, fontWeight: 700, letterSpacing: 6}}>RATED OPENING TEMPERATURE</Interactive.Div>
      <div style={{position: 'absolute', left: 95, top: 185, width: 690, height: 570, borderLeft: `18px solid ${active.hex}`, paddingLeft: 36, opacity: standardOpacity}}>
        <Interactive.Div name="Active colour" style={{fontSize: 82, fontWeight: 800, letterSpacing: 3, opacity: interpolate(frame, [activeStart, activeStart+8], [0, 1], clamp), translate: interpolate(frame, [activeStart, activeStart+12], ['-30px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>{active.name}</Interactive.Div>
        <Interactive.Div name="Active Celsius" style={{marginTop: 25, fontSize: 150, fontWeight: 800, lineHeight: 0.9, color: active.hex, opacity: interpolate(frame, [activeStart+4, activeStart+13], [0, 1], clamp)}}>{active.c}°C</Interactive.Div>
        <Interactive.Div name="Active Fahrenheit" style={{marginTop: 32, fontSize: 44, fontWeight: 700, letterSpacing: 5, opacity: interpolate(frame, [activeStart+9, activeStart+18], [0, 1], clamp)}}>{active.f}°F</Interactive.Div>
      </div>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <g opacity={standardOpacity}>
          <Bulb x={1300} y={460} scale={1.62} color={active.hex} active={interpolate(frame, [activeStart, activeStart+14], [0, 1], clamp)}/>
          <circle cx="1300" cy="460" r={230+Math.sin(frame*0.12)*8} fill="none" stroke={active.hex} strokeWidth="8" opacity="0.22"/>
        </g>
        <g opacity={highOpacity}>
          {colours.slice(4).map((item, i) => {
            const x = 990+i*330; const reveal = 312+i*17;
            return <g key={item.name} opacity={interpolate(frame, [reveal, reveal+10], [0, 1], clamp)} transform={`translate(0 ${interpolate(frame, [reveal, reveal+14], [90, 0], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})})`}>
              <Bulb x={x} y={445} scale={1.12} color={item.hex} active={interpolate(frame, [reveal, reveal+14], [0, 0.8], clamp)}/>
              <text x={x} y="700" fill={item.hex} fontSize="37" fontWeight="800" textAnchor="middle">{item.name}</text>
              <text x={x} y="752" fill="#223b3a" fontSize="29" fontWeight="700" textAnchor="middle">{item.c}°C / {item.f}°F</text>
            </g>;
          })}
        </g>
        <path d="M215 920 H1705" stroke="#223b3a" strokeWidth="6" strokeLinecap="round"/>
        {colours.map((item, i) => <g key={item.name} opacity={0.5+(frame >= 107 && ((i === activeIndex && frame < 312) || (i >= 4 && frame >= 312)) ? 0.5 : 0)}><circle cx={255+i*235} cy="920" r="22" fill={item.hex}/><text x={255+i*235} y="976" fill="#223b3a" fontSize="21" fontWeight="700" textAnchor="middle">{item.c}°</text></g>)}
      </svg>
      <Interactive.Div name="High heat title" style={{position: 'absolute', left: 100, top: 210, width: 700, fontSize: 78, fontWeight: 800, lineHeight: 1.02, opacity: highOpacity}}>WHEN 93°C<br/>ISN’T HOT<br/>ENOUGH.</Interactive.Div>
      <Interactive.Div name="High heat subhead" style={{position: 'absolute', left: 105, top: 515, width: 610, fontSize: 34, lineHeight: 1.25, color: '#c66049', opacity: interpolate(frame, [338, 352], [0, 1], clamp)}}>Blue. Purple. Black.<br/>Built for hotter rooms.</Interactive.Div>
    </div>

    <Sequence from={382} durationInFrames={110}><BoilerBeat/></Sequence>

    <div style={{position: 'absolute', inset: 0, opacity: finalOpacity}}>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        {colours.map((item, i) => <g key={item.name} opacity={interpolate(frame, [492+i*2, 504+i*2], [0, 0.45], clamp)}><Bulb x={285+i*225} y={710} scale={0.62} color={item.hex}/></g>)}
        <path d="M245 930 H1710" stroke="#223b3a" strokeWidth="6"/>
      </svg>
      <Interactive.Div name="Judgement title" style={{position: 'absolute', left: 180, top: 170, width: 1560, padding: '34px 42px', border: '10px solid #c66049', backgroundColor: '#eee6d5', color: '#c66049', fontSize: 78, fontWeight: 800, letterSpacing: 5, textAlign: 'center', opacity: interpolate(frame, [496, 505], [0, 1], clamp), scale: interpolate(frame, [496, 509], [1.24, 1], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)}), rotate: '-1deg', boxShadow: '14px 16px 0 rgba(34,59,58,0.16)'}}>A JUDGEMENT — NOT A SETTING</Interactive.Div>
      <Interactive.Div name="Judgement subhead" style={{position: 'absolute', left: 500, top: 505, width: 920, fontSize: 36, letterSpacing: 5, textAlign: 'center', opacity: interpolate(frame, [516, 528], [0, 1], clamp)}}>CHOSEN FOR THE ROOM</Interactive.Div>
    </div>

    {[{start: 107, origin: [0.68, 0.43] as const, color: colours[0].hex}, {start: 171, origin: [0.68, 0.43] as const, color: colours[1].hex}, {start: 222, origin: [0.68, 0.43] as const, color: colours[2].hex}, {start: 265, origin: [0.68, 0.43] as const, color: colours[3].hex}, {start: 312, origin: [0.52, 0.42] as const, color: colours[4].hex}, {start: 329, origin: [0.69, 0.42] as const, color: colours[5].hex}, {start: 346, origin: [0.86, 0.42] as const, color: colours[6].hex}].map((item) => <SelectionBurst key={item.start} {...item}/>) }
    {frame >= 370 && frame <= 393 && <Solid width={1920} height={1080} effects={[lightLeak({seed: 61, hueShift: 18, progress: leakIn})]} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(frame, [370, 379, 389, 393], [0, 0.34, 0.22, 0], clamp), mixBlendMode: 'screen', pointerEvents: 'none'}}/>}
    {frame >= 480 && frame <= 503 && <Solid width={1920} height={1080} effects={[lightLeak({seed: 68, hueShift: 338, progress: leakOut})]} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(frame, [480, 489, 499, 503], [0, 0.34, 0.22, 0], clamp), mixBlendMode: 'screen', pointerEvents: 'none'}}/>}
  </AbsoluteFill>;
};

export const ColourCodeReview: React.FC = () => <AbsoluteFill>
  <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find((c) => c.cue === '61')!.f_in)}/>
  <ColourCodeScene/>
</AbsoluteFill>;
