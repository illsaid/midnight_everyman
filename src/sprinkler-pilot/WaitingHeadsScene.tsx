import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame} from 'remotion';
import {cues} from './cues';

const cream = '#eee6d5';
const paper = '#e3dbc9';
const ink = '#223b3a';
const teal = '#007e82';
const brass = '#c89548';
const coral = '#c66049';
const muted = '#9ba49d';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const headlines = [
  'Not one system.',
  'Hundreds of separate ones.',
  'Each with its own fuse.',
  'No head talks to another.',
  'Nothing is watching.',
  'Nothing is deciding.',
];

const subheads = [
  'The network is the myth.',
  'The field continues beyond the frame.',
  'One bulb. One local temperature.',
  'Every head waits on its own clock.',
  'No camera. No sensor. No observer.',
  'Heat arrives. Glass responds.',
];

const Head = ({x, y, index, emphasis, localWaiting}: {
  x: number;
  y: number;
  index: number;
  emphasis: boolean;
  localWaiting: number;
}) => {
  const breath = Math.sin(localWaiting * 0.075 + index * 1.91);
  const halo = Math.max(0, Math.sin(localWaiting * 0.052 + index * 2.37));
  return (
    <g transform={`translate(${x} ${y + breath * 2.4})`}>
      <rect x="-48" y="-54" width="96" height="17" rx="4" fill={muted} stroke={ink} strokeWidth="4" />
      <path d="M-18 -38 H18 V-10 H-18 Z" fill={brass} stroke={ink} strokeWidth="4" />
      <path d="M-29 -10 H29 V3 H-29 Z" fill={brass} stroke={ink} strokeWidth="4" />
      <rect x="-12" y="3" width="24" height="42" rx="12" fill={coral} stroke={ink} strokeWidth="4" />
      <ellipse cx="0" cy="12" rx="5.5" ry="7" fill={cream} stroke={ink} strokeWidth="2" />
      <path d="M-3 45 V62" stroke={ink} strokeWidth="5" />
      <path d="M-45 62 L-31 74 L-17 62 L-3 76 L11 62 L25 74 L45 62 Z" fill={brass} stroke={ink} strokeWidth="4" />
      {emphasis && <circle r="74" fill="none" stroke={teal} strokeWidth="5" />}
      {localWaiting > 0 && (
        <circle r={65 + halo * 10} fill="none" stroke={teal} strokeWidth="2.5" opacity={0.08 + halo * 0.32} />
      )}
    </g>
  );
};

export const WaitingHeadsScene: React.FC<{startFrame: number}> = ({startFrame}) => {
  const frame = useCurrentFrame();
  const globalFrame = frame + startFrame;
  const beats = cues.filter((cue) => Number(cue.cue) >= 85 && Number(cue.cue) <= 90);
  const active = beats.findIndex(
    (cue) => globalFrame >= Number(cue.f_in) && globalFrame < Number(cue.f_out),
  );
  const index = active === -1 ? beats.length - 1 : active;
  const beatStart = Number(beats[index].f_in) - startFrame;
  const local = frame - beatStart;
  const arrival = spring({frame: local, fps: 24, config: {damping: 18, stiffness: 165}});

  const cue86 = Number(beats[1].f_in) - startFrame;
  const cue87 = Number(beats[2].f_in) - startFrame;
  const cue88 = Number(beats[3].f_in) - startFrame;
  const cue89 = Number(beats[4].f_in) - startFrame;
  const cue90 = Number(beats[5].f_in) - startFrame;

  const gridScale = interpolate(frame, [0, cue86, cue86 + 42, cue87], [1.28, 1.1, 0.92, 0.92], {
    ...clamp,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const networkOpacity = interpolate(frame, [0, 12, 42, cue86 - 4], [0.85, 1, 0.7, 0], clamp);
  const strike = interpolate(frame, [20, 48], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const fieldReveal = interpolate(frame, [cue86, cue86 + 36], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });
  const insetOpacity = interpolate(frame, [cue87, cue87 + 16, cue88 - 18, cue88], [0, 1, 1, 0], clamp);
  const waitingAge = Math.max(0, frame - cue88);
  const observationCard = interpolate(frame, [cue89, cue89 + 16], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.back(1.25)),
  });
  const decisionCard = interpolate(frame, [cue90, cue90 + 16], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.back(1.25)),
  });
  const quietField = interpolate(frame, [cue89, cue90 + 52], [1, 0.24], clamp);

  const heroIndex = 17;
  const heads = Array.from({length: 28}, (_, headIndex) => ({
    x: 105 + (headIndex % 7) * 285,
    y: 420 + Math.floor(headIndex / 7) * 158,
  }));
  const hero = heads[heroIndex];

  return (
    <AbsoluteFill style={{backgroundColor: cream, color: ink, overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 96, top: 112, fontSize: 24, letterSpacing: 5}}>
        ABOVE YOUR HEAD / 11
      </div>
      <div
        style={{
          position: 'absolute',
          left: 96,
          top: 166,
          width: 1540,
          fontSize: index === 1 ? 66 : 72,
          fontWeight: 700,
          lineHeight: 1,
          translate: `0 ${18 * (1 - arrival)}px`,
          opacity: interpolate(arrival, [0, 1], [0.35, 1], clamp),
        }}
      >
        {headlines[index]}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 264,
          height: 7,
          width: interpolate(arrival, [0, 1], [0, 230], clamp),
          backgroundColor: index >= 4 ? coral : teal,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 100,
          top: 244,
          fontSize: 22,
          letterSpacing: 2.2,
          color: index >= 4 ? coral : teal,
          opacity: interpolate(arrival, [0, 1], [0, 1], clamp),
        }}
      >
        {subheads[index]}
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <defs>
          <clipPath id="m11-field-clip">
            <rect x="72" y="318" width="1776" height="612" rx="24" />
          </clipPath>
          <pattern id="m11-paper-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.2" fill={ink} opacity="0.07" />
          </pattern>
        </defs>

        <g clipPath="url(#m11-field-clip)">
          <rect x="72" y="318" width="1776" height="612" rx="24" fill={paper} />
          <rect x="72" y="318" width="1776" height="612" rx="24" fill="url(#m11-paper-dots)" />
          <g opacity={quietField} transform={`translate(960 620) scale(${gridScale}) translate(-960 -620)`}>
            {heads.map((head, headIndex) => (
              <Head
                key={headIndex}
                x={head.x}
                y={head.y}
                index={headIndex}
                emphasis={index === 2 && headIndex === heroIndex}
                localWaiting={index === 3 ? waitingAge : 0}
              />
            ))}
          </g>

          {index === 0 && (
            <g opacity={networkOpacity} fill="none" stroke={teal} strokeWidth="5">
              <rect x="755" y="515" width="410" height="150" rx="20" fill={cream} />
              <text x="960" y="580" fill={teal} stroke="none" textAnchor="middle" fontSize="22" fontWeight="700" letterSpacing="4">CENTRAL SYSTEM</text>
              <text x="960" y="625" fill={ink} stroke="none" textAnchor="middle" fontSize="18" letterSpacing="2">ONE SIGNAL · EVERY HEAD</text>
              {[
                [390, 430], [675, 430], [1245, 430], [1530, 430],
                [390, 820], [675, 820], [1245, 820], [1530, 820],
              ].map(([x, y], lineIndex) => (
                <path key={lineIndex} d={`M${x} ${y} L${x < 960 ? 755 : 1165} ${y < 620 ? 548 : 632}`} pathLength="1" strokeDasharray="1" strokeDashoffset={interpolate(strike, [0, 1], [0, 1], clamp)} />
              ))}
              <path d="M770 500 L1150 690" pathLength="1" stroke={coral} strokeWidth="14" strokeDasharray="1" strokeDashoffset={1 - strike} />
              <path d="M1150 500 L770 690" pathLength="1" stroke={coral} strokeWidth="14" strokeDasharray="1" strokeDashoffset={1 - strike} />
            </g>
          )}

          {index === 1 && (
            <g opacity={fieldReveal}>
              <rect x="124" y="842" width="360" height="58" rx="29" fill={teal} />
              <text x="304" y="880" textAnchor="middle" fill={cream} fontSize="22" fontWeight="700" letterSpacing="3">× HUNDREDS</text>
              <path d="M1525 870 H1800" stroke={teal} strokeWidth="3" strokeDasharray="10 8" />
              <text x="1517" y="878" textAnchor="end" fill={teal} fontSize="17" letterSpacing="2">FIELD CONTINUES</text>
            </g>
          )}

          {index === 3 && (
            <g fontSize="15" fontWeight="700" letterSpacing="2" fill={teal}>
              {[1, 6, 9, 13, 18, 23, 26].map((headIndex, tagIndex) => {
                const tagAge = waitingAge - tagIndex * 9;
                const tagOpacity = interpolate(tagAge, [0, 10, 36, 48], [0, 1, 1, 0], clamp);
                const head = heads[headIndex];
                const tagX = head.x > 1700 ? head.x - 112 : head.x - 48;
                return (
                  <g key={headIndex} opacity={tagOpacity} transform={`translate(${tagX} ${head.y + 92})`}>
                    <rect width="96" height="30" rx="15" fill={cream} stroke={teal} strokeWidth="2" />
                    <text x="48" y="21" textAnchor="middle">WAITING</text>
                  </g>
                );
              })}
            </g>
          )}
        </g>

        {index === 2 && (
          <g opacity={insetOpacity}>
            <path d={`M${hero.x + 58} ${hero.y - 8} C1230 530 1320 520 1402 520`} fill="none" stroke={teal} strokeWidth="4" strokeDasharray="10 8" />
            <rect x="1402" y="365" width="370" height="385" rx="24" fill={cream} stroke={teal} strokeWidth="4" />
            <text x="1587" y="414" textAnchor="middle" fill={ink} fontSize="18" letterSpacing="3">ONE HEAD · ONE FUSE</text>
            <rect x="1530" y="452" width="114" height="215" rx="54" fill={coral} stroke={ink} strokeWidth="7" />
            <path d="M1550 490 V630" stroke="#f3b18e" strokeWidth="7" />
            <ellipse cx="1587" cy="497" rx="25" ry="32" fill={cream} stroke={ink} strokeWidth="4" />
            <circle cx="1587" cy="497" r={52 + 8 * Math.sin(local * 0.15)} fill="none" stroke={teal} strokeWidth="4" opacity="0.75" />
            <text x="1587" y="713" textAnchor="middle" fill={teal} fontSize="19" fontWeight="700" letterSpacing="3">LOCAL HEAT ONLY</text>
          </g>
        )}

        {index === 4 && (
          <g opacity={observationCard} transform={`translate(0 ${18 * (1 - observationCard)})`}>
            <rect x="640" y="405" width="640" height="390" rx="32" fill={cream} stroke={ink} strokeWidth="5" />
            <path d="M748 585 Q960 410 1172 585 Q960 760 748 585 Z" fill="none" stroke={ink} strokeWidth="14" />
            <circle cx="960" cy="585" r="72" fill={teal} stroke={ink} strokeWidth="10" />
            <circle cx="960" cy="585" r="25" fill={cream} stroke="none" />
            <path d="M720 770 L1200 400" stroke={coral} strokeWidth="22" />
            <rect x="792" y="740" width="336" height="58" rx="29" fill={coral} />
            <text x="960" y="778" textAnchor="middle" fill={cream} fontSize="22" fontWeight="700" letterSpacing="4">NO SENSOR</text>
          </g>
        )}

        {index === 5 && (
          <g opacity={decisionCard} transform={`translate(0 ${18 * (1 - decisionCard)})`}>
            <rect x="585" y="412" width="750" height="375" rx="34" fill={cream} stroke={ink} strokeWidth="5" />
            <rect x="690" y="485" width="540" height="96" rx="16" fill={paper} stroke={ink} strokeWidth="4" />
            <text x="960" y="545" textAnchor="middle" fill={muted} fontSize="24" fontWeight="700" letterSpacing="4">CENTRAL CONTROL LOGIC</text>
            <path d="M700 468 L1220 598" stroke={coral} strokeWidth="18" />
            <path d="M1220 468 L700 598" stroke={coral} strokeWidth="18" />
            <text x="960" y="676" textAnchor="middle" fill={ink} fontSize="46" fontWeight="700">NO DECISION REQUIRED.</text>
            <text x="960" y="724" textAnchor="middle" fill={teal} fontSize="19" letterSpacing="3">HEAT ARRIVES · GLASS RESPONDS</text>
          </g>
        )}
      </svg>

      <div style={{position: 'absolute', left: 100, bottom: 68, fontSize: 22, letterSpacing: 3, color: teal}}>
        NO SHARED TRIGGER. EACH BULB WAITS.
      </div>
      <div style={{position: 'absolute', right: 100, bottom: 68, fontSize: 22, letterSpacing: 2}}>
        {String(index + 1).padStart(2, '0')} / 06
      </div>
    </AbsoluteFill>
  );
};
