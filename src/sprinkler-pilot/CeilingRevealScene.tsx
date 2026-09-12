import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

/**
 * M02 - cue 07 only, 55 frames. "Here is what actually happens."
 *
 * The turn out of the movie lie and into the real ceiling. A hard wipe carries
 * paper across the frame and leaves an ordinary ceiling behind it. Deliberately
 * plain: this cue exists to reset the viewer, and the generated plate HG-04
 * takes over on the next cue.
 */

const ink = '#223b3a';
const cream = '#eee6d5';
const gold = '#c89548';
const mute = '#b5afa2';
const red = '#c66049';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const CeilingRevealScene: React.FC<{startFrame: number}> = () => {
  const f = useCurrentFrame();
  const wipe = interpolate(f, [0, 26], [0, 1], {...clamp, easing: Easing.bezier(0.65, 0, 0.35, 1)});
  const settle = interpolate(f, [22, 52], [1.14, 1], {...clamp, easing: Easing.out(Easing.cubic)});

  return (
    <AbsoluteFill style={{backgroundColor: '#dcd3bd', fontFamily: 'Arial, sans-serif'}}>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <g transform={`translate(960 540) scale(${settle}) translate(-960 -540)`}>
          <rect width="1920" height="1080" fill="#e4dccb" />
          {/* ceiling tile grid */}
          {Array.from({length: 7}, (_, r) => (
            <path key={`r${r}`} d={`M0 ${150 + r * 150} H1920`} stroke={mute} strokeWidth="2" />
          ))}
          {Array.from({length: 9}, (_, c) => (
            <path key={`c${c}`} d={`M${120 + c * 210} 0 V1080`} stroke={mute} strokeWidth="2" />
          ))}
          {/* three ordinary heads, doing nothing */}
          {[
            [470, 400],
            [1010, 620],
            [1520, 380],
          ].map(([x, y]) => (
            <g key={x} transform={`translate(${x} ${y})`} stroke={ink} strokeWidth="4" strokeLinejoin="round">
              <path d="M-22 0 H22 V12 H-22 Z" fill={gold} />
              <path d="M-16 12 H16 L12 40 H-12 Z" fill="none" stroke={mute} strokeWidth="5" />
              <rect x="-5" y="14" width="10" height="24" rx="5" fill={red} />
              <path d="M-28 42 H28" stroke={mute} strokeWidth="5" strokeLinecap="round" />
            </g>
          ))}
        </g>
        {/* the wipe */}
        <rect x={-1920 + 1920 * wipe} y="0" width="1920" height="1080" fill={cream} />
        <path
          d={`M${1920 * wipe} 0 V1080`}
          stroke={ink}
          strokeWidth="6"
          opacity={interpolate(f, [0, 6, 24, 30], [0, 1, 1, 0], clamp)}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 192,
          fontSize: 68,
          fontWeight: 700,
          color: ink,
          opacity: interpolate(f, [26, 40], [0, 1], clamp),
        }}
      >
        Here is what actually happens.
      </div>
    </AbsoluteFill>
  );
};
