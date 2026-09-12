import {Audio, Video} from '@remotion/media';
import {lightLeak} from '@remotion/effects/light-leak';
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  Sequence,
  Solid,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {LibraryCel} from '../library/observer/LibraryCel';
import {cues} from './cues';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const MacroClose: React.FC = () => {
  const frame = useCurrentFrame();
  const glassX = interpolate(frame, [0, 157], [884, 872], clamp);
  const glassY = interpolate(frame, [0, 157], [487, 470], clamp);
  const glassW = interpolate(frame, [0, 157], [152, 176], clamp);
  const glassH = interpolate(frame, [0, 157], [356, 382], clamp);
  const bubbleY = interpolate(frame, [0, 157], [627, 610], clamp);
  const pressure = interpolate(frame, [24, 128], [0, 1], clamp);
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#223b3a', color: '#eee6d5', fontFamily: 'Arial, sans-serif'}}>
    <Video name="Approved macro plate" src={staticFile('sprinkler-assembly/registry/macro-v2.mp4')} muted durationInFrames={158} objectFit="cover" style={{width: '100%', height: '100%'}}/>
    <AbsoluteFill style={{background: 'radial-gradient(circle at 50% 59%, transparent 15%, rgba(34,59,58,0.08) 42%, rgba(34,59,58,0.54) 100%)'}}/>
    <AbsoluteFill style={{opacity: 0.1, backgroundImage: 'radial-gradient(circle, rgba(238,230,213,0.7) 0 0.8px, transparent 1px)', backgroundSize: '10px 10px', backgroundPosition: `${frame * 0.12}px ${frame * 0.05}px`}}/>
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
      <defs>
        <linearGradient id="glass-trace" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eee6d5"/><stop offset="1" stopColor="#007e82"/></linearGradient>
        <radialGradient id="bubble-glow"><stop offset="0" stopColor="#eee6d5" stopOpacity="0.42"/><stop offset="1" stopColor="#e7bb61" stopOpacity="0"/></radialGradient>
      </defs>
      <rect x={glassX} y={glassY} width={glassW} height={glassH} rx="76" fill="none" stroke="url(#glass-trace)" strokeWidth="5" opacity={interpolate(frame, [4, 18, 132, 150], [0, 0.72, 0.72, 0.18], clamp)}/>
      <circle cx="960" cy={bubbleY} r={48 + pressure * 20 + Math.sin(frame * 0.14) * 4} fill="url(#bubble-glow)" opacity={0.35 + pressure * 0.42}/>
      <circle cx="960" cy={bubbleY} r={27 + Math.sin(frame * 0.17) * 2} fill="none" stroke="#eee6d5" strokeWidth="5" opacity={interpolate(frame, [8, 24], [0, 0.78], clamp)}/>
      {[0, 1, 2].map((index) => <rect key={index} x={glassX - 18 - index * 24 - pressure * 8} y={glassY - 18 - index * 24 - pressure * 8} width={glassW + 36 + index * 48 + pressure * 16} height={glassH + 36 + index * 48 + pressure * 16} rx={92 + index * 22} fill="none" stroke="#007e82" strokeWidth={5 - index} opacity={(0.22 - index * 0.05) * pressure * (0.72 + Math.sin(frame * 0.11 + index) * 0.28)}/>) }
      <path d={`M${glassX + 4} ${glassY + glassH * 0.48} C${glassX + glassW * 0.24} ${glassY + glassH * 0.44 + Math.sin(frame * 0.16) * 5}, ${glassX + glassW * 0.72} ${glassY + glassH * 0.53 - Math.sin(frame * 0.16) * 5}, ${glassX + glassW - 4} ${glassY + glassH * 0.48}`} fill="none" stroke="#e7bb61" strokeWidth="5" opacity={0.22 + pressure * 0.38}/>
      {Array.from({length: 12}).map((_, index) => {
        const side = index % 2 === 0 ? -1 : 1;
        const y = 500 + (index % 6) * 62;
        const x1 = 960 + side * (178 + (index % 3) * 34);
        const x2 = 960 + side * (112 + Math.sin(frame * 0.1 + index) * 8);
        return <path key={index} d={`M${x1} ${y} H${x2}`} stroke="#007e82" strokeWidth="5" strokeLinecap="round" opacity={pressure * (0.22 + (index % 3) * 0.07)}/>;
      })}
    </svg>
    <Interactive.Div name="Glass title" style={{position: 'absolute', left: 92, bottom: 122, width: 610, fontSize: 66, fontWeight: 800, lineHeight: 1.02, color: '#eee6d5', opacity: interpolate(frame, [4, 16, 34, 47], [0, 1, 1, 0], clamp), translate: interpolate(frame, [4, 20], ['-38px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>ONE PIECE<br/>OF GLASS.</Interactive.Div>
    <Interactive.Div name="River title" style={{position: 'absolute', left: 92, bottom: 118, width: 650, fontSize: 62, fontWeight: 800, lineHeight: 1.03, color: '#eee6d5', opacity: interpolate(frame, [38, 54, 143, 154], [0, 1, 1, 0], clamp), translate: interpolate(frame, [38, 58], ['-42px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>HOLDING BACK<br/><span style={{color: '#e7bb61'}}>A RIVER.</span></Interactive.Div>
    <Interactive.Div name="Waiting word" style={{position: 'absolute', right: 92, bottom: 118, fontSize: 52, fontWeight: 700, letterSpacing: 8, color: '#eee6d5', opacity: interpolate(frame, [100, 118, 144, 154], [0, 1, 1, 0], clamp)}}>WAITING.</Interactive.Div>
  </AbsoluteFill>;
};

const CorridorPayoff: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#eee6d5', color: '#223b3a', fontFamily: 'Arial, sans-serif'}}>
    <AbsoluteFill style={{scale: interpolate(frame, [0, 57], [1.015, 1.075], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)}), transformOrigin: '50% 14%'}}>
      <Img name="Approved empty corridor frame" src={staticFile('sprinkler-assembly/registry/corridor-empty-v1.png')} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
      <LibraryCel cel="inspectForward" stageX={755} stageY={965} scale={0.78} opacity={interpolate(frame, [2, 13], [0, 1], clamp)} rotate="5deg" translate={`${interpolate(frame, [0, 16], [-14, 0], clamp)}px ${interpolate(frame, [0, 16], [12, 0], clamp)}px`}/>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
        <circle cx="960" cy="137" r={57 + Math.sin(frame * 0.2) * 4} fill="none" stroke="#007e82" strokeWidth="8" opacity={interpolate(frame, [5, 17], [0, 1], clamp)}/>
        <circle cx="960" cy="137" r="16" fill="#c66049" stroke="#eee6d5" strokeWidth="5" opacity={interpolate(frame, [9, 19], [0, 1], clamp)}/>
        <path d="M790 475 Q880 320 947 187" fill="none" stroke="#007e82" strokeWidth="6" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - interpolate(frame, [11, 31], [0, 1], clamp)} opacity="0.8"/>
      </svg>
    </AbsoluteFill>
    <Interactive.Div name="Closing phrase" style={{position: 'absolute', right: 95, bottom: 105, padding: '22px 30px', border: '6px solid #223b3a', backgroundColor: 'rgba(238,230,213,0.94)', color: '#223b3a', fontSize: 70, fontWeight: 800, letterSpacing: 5, opacity: interpolate(frame, [21, 34], [0, 1], clamp), translate: interpolate(frame, [21, 38], ['35px 0px', '0px 0px'], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)}), boxShadow: '12px 14px 0 rgba(0,126,130,0.25)'}}>STILL THERE.</Interactive.Div>
    <AbsoluteFill style={{backgroundColor: '#223b3a', opacity: interpolate(frame, [48, 57], [0, 0.12], clamp)}}/>
  </AbsoluteFill>;
};

const MacroToCorridor: React.FC = () => {
  const frame = useCurrentFrame();
  return <Solid width={1920} height={1080} effects={[lightLeak({seed: 91, hueShift: 18, progress: interpolate(frame, [0, 19], [0, 1], clamp)})]} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: interpolate(frame, [0, 7, 14, 19], [0, 0.38, 0.24, 0], clamp), mixBlendMode: 'screen', pointerEvents: 'none'}}/>;
};

export const ClosingScene: React.FC = () => <AbsoluteFill style={{backgroundColor: '#223b3a'}}>
  <Sequence name="91–92 · Glass holding the river" durationInFrames={158}><MacroClose/></Sequence>
  <Sequence name="93 · Look up" from={158} durationInFrames={58}><CorridorPayoff/></Sequence>
  <Sequence from={148} durationInFrames={20}><MacroToCorridor/></Sequence>
</AbsoluteFill>;

export const ClosingReview: React.FC = () => <AbsoluteFill>
  <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find((cue) => cue.cue === '91')!.f_in)}/>
  <ClosingScene/>
</AbsoluteFill>;
