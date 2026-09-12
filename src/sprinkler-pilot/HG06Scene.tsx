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

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** HG-06 — cues 35–36, 102 frames. Standalone review until owner approval. */
export const HG06Scene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#223b3a',
        color: '#eee6d5',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      <Video
        name="Approved HG-06 bin-fire performance"
        src={staticFile('sprinkler-assembly/registry/bin-fire-grok-v1.mp4')}
        muted
        durationInFrames={102}
        objectFit="cover"
        style={{
          width: '100%',
          height: '100%',
          scale: interpolate(frame, [0, 101], [1.01, 1.06], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: 'perceptual-scale',
          }),
          transformOrigin: '67% 69%',
          filter: `saturate(${interpolate(frame, [0, 20, 101], [0.94, 1.02, 0.92], clamp)}) contrast(1.025)`,
        }}
      />

      <AbsoluteFill
        style={{
          pointerEvents: 'none',
          background: `radial-gradient(circle at 67% 69%, rgba(230,107,81,${interpolate(frame, [0, 13, 20], [0.02, 0.19, 0.08], clamp)}) 0%, transparent 20%), linear-gradient(90deg, rgba(34,59,58,0.22) 0%, transparent 38%, transparent 100%)`,
        }}
      />

      <svg
        viewBox="0 0 1920 1080"
        style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}
      >
        <ellipse
          cx="1284"
          cy="778"
          rx={interpolate(frame, [0, 13, 28], [122, 162, 145], clamp)}
          ry={interpolate(frame, [0, 13, 28], [96, 126, 112], clamp)}
          fill="none"
          stroke="#e66b51"
          strokeWidth="5"
          strokeDasharray="15 18"
          opacity={interpolate(frame, [0, 5, 22, 31], [0, 0.88, 0.72, 0], clamp)}
        />
      </svg>

      <Interactive.Div
        name="HG06 ignition label"
        style={{
          position: 'absolute',
          left: 82,
          top: 104,
          opacity: interpolate(frame, [0, 6, 20, 29], [0, 1, 1, 0], clamp),
          translate: interpolate(frame, [0, 9], ['-24px 0px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div style={{fontSize: 25, fontWeight: 700, letterSpacing: 8, color: '#007e82'}}>
          LOCAL EVENT / 01
        </div>
        <div style={{marginTop: 13, fontSize: 66, lineHeight: 1, fontWeight: 850, letterSpacing: -2}}>
          IGNITION.
        </div>
        <div style={{marginTop: 20, width: 108, height: 7, backgroundColor: '#e66b51'}} />
      </Interactive.Div>

      <Interactive.Div
        name="HG06 no-response label"
        style={{
          position: 'absolute',
          left: 82,
          top: 104,
          width: 380,
          padding: '18px 22px 17px',
          border: '4px solid #007e82',
          backgroundColor: 'rgba(238,230,213,0.91)',
          color: '#223b3a',
          opacity: interpolate(frame, [56, 69], [0, 1], clamp),
          translate: interpolate(frame, [56, 71], ['22px 0px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div style={{fontSize: 20, fontWeight: 700, letterSpacing: 6, color: '#007e82'}}>
          SMOKE / RESPONSE
        </div>
        <div style={{marginTop: 9, fontSize: 58, lineHeight: 0.94, fontWeight: 900, color: '#e66b51'}}>
          NONE.
        </div>
      </Interactive.Div>

      <AbsoluteFill
        style={{
          pointerEvents: 'none',
          boxShadow: 'inset 0 0 125px rgba(34,59,58,0.2)',
        }}
      />
    </AbsoluteFill>
  );
};

export const HG06Review: React.FC = () => (
  <AbsoluteFill>
    <Audio
      src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')}
      trimBefore={Number(cues.find((cue) => cue.cue === '35')!.f_in)}
    />
    <HG06Scene />
  </AbsoluteFill>
);
