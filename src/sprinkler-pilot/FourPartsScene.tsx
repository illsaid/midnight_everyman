import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame} from 'remotion';
import {cues} from './cues';

const ink = '#223b3a';
const brass = '#c89548';
const cream = '#eee6d5';
const coral = '#c66049';
const teal = '#007e82';
const muted = '#a9aaa0';

const labels = [
  'Four parts.',
  'The frame.',
  'The cap.',
  'The deflector.',
  'Under compression.',
  'A tiny glass bulb.',
  'Liquid.',
  'One bubble.',
];

const notes = [
  'FRAME  ·  CAP  ·  DEFLECTOR  ·  BULB',
  'The load-bearing structure.',
  'The piece holding the water back.',
  'The notched disc that shapes the spray.',
  'The bulb braces the seal shut.',
  'Small enough to overlook.',
  'Sealed inside the glass.',
  'One deliberate pocket of air.',
];

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const FourPartsScene: React.FC<{startFrame: number}> = ({startFrame}) => {
  const frame = useCurrentFrame();
  const beats = cues.filter((cue) => Number(cue.cue) >= 26 && Number(cue.cue) <= 33);
  const activeIndex = beats.findIndex(
    (cue) => frame + startFrame >= Number(cue.f_in) && frame + startFrame < Number(cue.f_out),
  );
  const index = activeIndex === -1 ? beats.length - 1 : activeIndex;
  const beatStart = Number(beats[index].f_in) - startFrame;
  const beatEnd = Number(beats[index].f_out) - startFrame;
  const local = frame - beatStart;
  const beatLength = Math.max(1, beatEnd - beatStart);
  const settle = spring({frame: local, fps: 24, config: {damping: 18, stiffness: 170}});
  const arrival = interpolate(local, [0, Math.min(14, beatLength * 0.35)], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  const overview = interpolate(frame, [5, 24], [1, 0], {
    ...clamp,
    easing: Easing.inOut(Easing.cubic),
  });
  const macroStart = Number(beats[5].f_in) - startFrame;
  const cameraZoom = interpolate(frame, [macroStart, macroStart + 32], [1, 2.22], {
    ...clamp,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const cameraX = interpolate(frame, [macroStart, macroStart + 32], [0, 35], {
    ...clamp,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const cameraY = interpolate(frame, [macroStart, macroStart + 32], [0, 20], {
    ...clamp,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const frameBeat = index === 1;
  const capBeat = index === 2;
  const deflectorBeat = index === 3;
  const compressionBeat = index === 4;
  const macroBeat = index >= 5;
  const dimmedOpacity = macroBeat ? 0.24 : 0.32;
  const partOpacity = (part: number) => {
    if (index === 0) return 1;
    if (part === 4 && index >= 4) return 1;
    if (part === index) return 1;
    return dimmedOpacity;
  };
  const partColor = (part: number) => {
    if (index === 0) return brass;
    if (part === 4 && index >= 4) return coral;
    return part === index ? teal : muted;
  };

  const frameTrace = frameBeat
    ? interpolate(local, [0, 28], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)})
    : 1;
  const capDrop = capBeat
    ? interpolate(local, [0, 18], [-48, 0], {...clamp, easing: Easing.out(Easing.back(1.5))})
    : 0;
  const sealPulse = capBeat ? interpolate(local, [13, 22, 36], [0, 1, 0.45], clamp) : 0;
  const discTurn = deflectorBeat
    ? interpolate(local, [0, 18], [-10, 0], {...clamp, easing: Easing.out(Easing.back(1.4))})
    : 0;
  const sprayReveal = deflectorBeat
    ? interpolate(local, [18, 38], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)})
    : 0;
  const squeeze = compressionBeat
    ? interpolate(local, [0, 24], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)})
    : 0;
  const strain = compressionBeat ? Math.sin(local * 1.2) * squeeze * 2.2 : 0;
  const liquidWave = index === 6 ? Math.sin(local * 0.32) * 7 : 0;
  const liquidRise = index === 6
    ? interpolate(local, [0, 30], [625, 495], {...clamp, easing: Easing.inOut(Easing.cubic)})
    : 495;
  const bubblePulse = index === 7 ? 1 + Math.sin(local * 0.23) * 0.08 : 1;

  return (
    <AbsoluteFill style={{backgroundColor: cream, color: ink, overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 96, top: 142, fontSize: 24, letterSpacing: 5}}>
        THE MECHANISM / 01
      </div>
      <div
        style={{
          position: 'absolute',
          left: 96,
          top: 220,
          width: 610,
          minHeight: 178,
          fontSize: index === 4 ? 70 : 78,
          fontWeight: 700,
          lineHeight: 1.03,
          translate: `0 ${interpolate(arrival, [0, 1], [20, 0], clamp)}px`,
          opacity: interpolate(arrival, [0, 1], [0.35, 1], clamp),
        }}
      >
        {labels[index]}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 422,
          height: 7,
          width: interpolate(arrival, [0, 1], [0, 205], clamp),
          backgroundColor: teal,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 462,
          width: 555,
          fontSize: 30,
          lineHeight: 1.42,
          letterSpacing: index === 0 ? 1.5 : 0,
          opacity: interpolate(arrival, [0, 1], [0, 1], clamp),
        }}
      >
        {notes[index]}
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <defs>
          <clipPath id="m05-action-stage">
            <rect x="735" y="86" width="1090" height="885" rx="24" />
          </clipPath>
          <clipPath id="m05-bulb-liquid">
            <rect x="1248" y="435" width="64" height="232" rx="31" />
          </clipPath>
          <pattern id="m05-paper-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.2" fill={ink} opacity="0.08" />
          </pattern>
        </defs>

        <g clipPath="url(#m05-action-stage)">
          <rect x="735" y="86" width="1090" height="885" rx="24" fill="url(#m05-paper-dots)" />
          <path d="M770 175 H1790" stroke={ink} strokeWidth="2" opacity="0.2" />
          <text x="785" y="145" fill={ink} fontSize="20" letterSpacing="4">CUTAWAY · SIDE ELEVATION</text>

          <g
            transform={`translate(${cameraX} ${cameraY}) translate(1280 545) scale(${cameraZoom}) translate(-1280 -545)`}
            stroke={ink}
            strokeWidth="7"
            strokeLinejoin="round"
          >
            {deflectorBeat && (
              <g opacity={sprayReveal}>
                <path d="M1280 780 L1035 930 Q1280 1010 1525 930 Z" fill={teal} opacity="0.12" stroke="none" />
                {[0, 1, 2, 3, 4].map((drop) => (
                  <path
                    key={drop}
                    d={`M${1145 + drop * 67} ${838 + (drop % 2) * 24} q-13 22 0 38 q13-16 0-38`}
                    fill={teal}
                    stroke="none"
                    opacity={0.55 + (drop % 2) * 0.2}
                  />
                ))}
              </g>
            )}

            <g opacity={index === 0 || frameBeat ? 1 : 0.28}>
              <path d="M1085 210 H1475 V315 H1085 Z" fill="#8b9b92" />
              <path d="M1085 315 H1475" stroke={ink} strokeWidth="11" />
              <path d="M1160 315 H1400" stroke={brass} strokeWidth="7" strokeDasharray="18 12" />
            </g>

            <g opacity={partOpacity(1)} transform={`translate(${strain} ${-68 * overview})`}>
              <path d="M1230 280 H1330 V390 H1230 Z" fill={partColor(1)} />
              <path d="M1230 350 H1178 L1140 675 Q1280 760 1420 675 L1382 350 H1330" fill="none" stroke={partColor(1)} strokeWidth="31" pathLength="1" strokeDasharray="1" strokeDashoffset={frameBeat ? 1 - frameTrace : 0} />
              <path d="M1230 350 H1178 L1140 675 Q1280 760 1420 675 L1382 350 H1330" fill="none" strokeWidth="5" opacity={frameBeat ? frameTrace : 1} />
              {frameBeat && (
                <g opacity={arrival}>
                  <path d="M1244 302 H1316 M1244 320 H1316 M1244 338 H1316" stroke={cream} strokeWidth="5" />
                  <path d="M1455 360 q34 25 0 50" fill="none" stroke={teal} strokeWidth="5" />
                  <path d="M1472 396 l-17 14 l-5-21" fill={teal} stroke="none" />
                </g>
              )}
            </g>

            <g opacity={partOpacity(2)} transform={`translate(${-92 * overview} ${capDrop + strain})`}>
              <path d="M1218 395 H1342 V438 H1218 Z" fill={partColor(2)} />
              {capBeat && (
                <>
                  <ellipse cx="1280" cy="397" rx={74 + 12 * sealPulse} ry={17 + 5 * sealPulse} fill="none" stroke={teal} strokeWidth="5" opacity={sealPulse} />
                  <path d="M1192 372 H1368" stroke={teal} strokeWidth="7" opacity={sealPulse} />
                  <text x="1378" y="407" fill={teal} stroke="none" fontSize="23" fontWeight="700" letterSpacing="3">SEALED</text>
                </>
              )}
            </g>

            <g opacity={partOpacity(4)} transform={`translate(${92 * overview + strain} 0)`}>
              {macroBeat && <rect x="1203" y="420" width="154" height="270" rx="68" fill="none" stroke={teal} strokeWidth="3" strokeDasharray="10 7" opacity="0.65" />}
              <rect x="1248" y="435" width="64" height="232" rx="31" fill={macroBeat ? coral : muted} />
              <g clipPath="url(#m05-bulb-liquid)">
                <rect x="1249" y={liquidRise} width="62" height={680 - liquidRise} fill="#d95f43" stroke="none" />
                {index === 6 && <path d={`M1247 ${liquidRise + 5} Q1263 ${liquidRise - 4 + liquidWave} 1280 ${liquidRise + 5} T1314 ${liquidRise + 5}`} fill="none" stroke="#ffd58f" strokeWidth="5" />}
              </g>
              <path d="M1261 468 V630" stroke="#f6b99c" strokeWidth="5" />
              <ellipse cx="1280" cy="479" rx={17 * bubblePulse} ry={21 * bubblePulse} fill={cream} strokeWidth="2" />
              {index === 6 && (
                <>
                  <path d={`M1297 530 Q1310 ${545 + liquidWave} 1297 560 T1297 590`} fill="none" stroke="#ffd58f" strokeWidth="4" opacity="0.8" />
                  <circle cx="1300" cy={620 - ((local * 1.7) % 90)} r="4" fill="#ffd58f" stroke="none" opacity="0.75" />
                </>
              )}
            </g>

            <g opacity={partOpacity(3)} transform={`translate(0 ${102 * overview}) rotate(${discTurn} 1280 760)`}>
              <path d="M1264 665 H1296 V746 H1264 Z" fill={partColor(3)} />
              <path d="M1110 750 L1140 782 L1167 756 L1194 791 L1222 760 L1250 795 L1280 760 L1310 795 L1338 760 L1366 791 L1393 756 L1420 782 L1450 750 Z" fill={partColor(3)} />
              {deflectorBeat && <path d="M1088 812 H1472" stroke={teal} strokeWidth="3" strokeDasharray="12 11" opacity={sprayReveal} />}
            </g>

            {compressionBeat && (
              <g fill="none" stroke={teal} strokeWidth="8" opacity={arrival}>
                <path d={`M1280 ${362 + 36 * squeeze} V454 M1259 ${433 + 20 * squeeze} L1280 ${454 + 20 * squeeze} L1301 ${433 + 20 * squeeze}`} />
                <path d={`M1280 ${735 - 36 * squeeze} V649 M1259 ${670 - 20 * squeeze} L1280 ${649 - 20 * squeeze} L1301 ${670 - 20 * squeeze}`} />
                <path d="M1194 550 H1130 M1366 550 H1430" strokeDasharray="11 9" opacity="0.5" />
                <text x="1447" y="559" fill={teal} stroke="none" fontSize="22" fontWeight="700" letterSpacing="3">LOAD</text>
              </g>
            )}

            {index === 7 && (
              <g fill="none" stroke={teal} strokeWidth="4">
                <ellipse cx="1280" cy="479" rx={34 + 9 * settle} ry={40 + 9 * settle} />
                <ellipse cx="1280" cy="479" rx={46 + local * 0.55} ry={52 + local * 0.55} opacity={Math.max(0, 0.85 - local / 42)} />
              </g>
            )}
          </g>

          {index === 7 && (
            <g fill="none" stroke={teal} strokeWidth="4" opacity={arrival}>
              <path d="M1405 420 H1482" strokeDasharray="9 7" />
              <rect x="1482" y="386" width="275" height="68" rx="34" fill={cream} />
              <text x="1515" y="429" fill={teal} stroke="none" fontSize="24" fontWeight="700" letterSpacing="3">ONE BUBBLE</text>
            </g>
          )}

          {index === 0 && (
            <g fontFamily="inherit" fontWeight="700" fontSize="22" textAnchor="middle">
              {[
                {n: '1', x: 1060, y: 250, text: 'FRAME'},
                {n: '2', x: 1030, y: 420, text: 'CAP'},
                {n: '3', x: 1515, y: 765, text: 'DEFLECTOR'},
                {n: '4', x: 1515, y: 525, text: 'BULB'},
              ].map((item, itemIndex) => {
                const itemArrival = interpolate(frame, [itemIndex * 3, itemIndex * 3 + 10], [0, 1], {...clamp, easing: Easing.out(Easing.back(1.6))});
                return (
                  <g key={item.n} opacity={itemArrival} transform={`translate(0 ${14 * (1 - itemArrival)})`}>
                    <circle cx={item.x} cy={item.y} r="25" fill={itemIndex % 2 === 0 ? teal : coral} />
                    <text x={item.x} y={item.y + 8} fill={cream}>{item.n}</text>
                    <text x={item.x} y={item.y + 52} fill={ink} fontSize="17" letterSpacing="2">{item.text}</text>
                  </g>
                );
              })}
            </g>
          )}
        </g>
      </svg>

      <div style={{position: 'absolute', bottom: 72, left: 100, fontSize: 20, letterSpacing: 2}}>
        SCHEMATIC · NOT TO SCALE
      </div>
      <div style={{position: 'absolute', bottom: 72, right: 100, fontSize: 24}}>
        {String(index + 1).padStart(2, '0')} / 08
      </div>
    </AbsoluteFill>
  );
};
