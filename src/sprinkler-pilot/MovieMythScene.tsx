import {AbsoluteFill, Img, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Audio} from '@remotion/media';
import {cues} from './cues';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** Cues 05–06 only. Local clock; no generated motion or changes to locked VO. */
export const MovieMythScene: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{backgroundColor: '#eee6d5', fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
    <Img src={staticFile('sprinkler-assembly/registry/deluge-freeze-v1.png')} style={{
      width: '100%', height: '100%', objectFit: 'cover',
      opacity: interpolate(frame, [48, 100], [1, 0.05], clamp),
      filter: `saturate(${interpolate(frame, [48, 76], [1, 0], clamp)})`,
    }}/>
    <Interactive.Div name="Movie magic stamp" style={{
      position: 'absolute', left: 740, top: 200, width: 960, padding: '26px 30px',
      boxSizing: 'border-box', textAlign: 'center', backgroundColor: '#eee6d5',
      color: '#223b3a', border: '10px double #223b3a', fontSize: 105,
      fontWeight: 900, letterSpacing: 5,
      opacity: interpolate(frame, [2, 4, 48, 53], [0, 1, 1, 0], clamp),
      scale: interpolate(frame, [2, 7, 11], [1.35, 0.96, 1], clamp),
      rotate: interpolate(frame, [2, 9], ['-10deg', '-4deg'], clamp),
    }}>MOVIE MAGIC</Interactive.Div>
    <Interactive.Div name="Coral correction stamp" style={{
      position: 'absolute', left: 550, top: 430, width: 1160, padding: '30px 40px',
      boxSizing: 'border-box', textAlign: 'center', backgroundColor: '#eee6d5',
      color: '#b94738', border: '13px double #e66b51', fontSize: 108,
      fontWeight: 900, lineHeight: 1.05, letterSpacing: 5,
      opacity: interpolate(frame, [48, 50, 109, 116], [0, 1, 1, 0], clamp),
      scale: interpolate(frame, [48, 53, 57, 61], [1.4, 0.95, 1.025, 1], clamp),
      rotate: interpolate(frame, [48, 55, 61], ['-13deg', '-5deg', '-7deg'], clamp),
    }}>COMPLETE<br/>NONSENSE</Interactive.Div>
  </AbsoluteFill>;
};

/** Standalone review: main assembly placements are deliberately unchanged. */
export const MovieMythReview: React.FC = () => <AbsoluteFill>
  <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find(c=>c.cue==='05')!.f_in)}/>
  <MovieMythScene/>
</AbsoluteFill>;
