import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {cues} from './cues';

/**
 * M03 - cues 11-19. "Because there is no system."
 *
 * Five cue-locked visual states replace the former persistent 300-head texture:
 * panel destruction, close-to-wide head reveal, travelling local heat front,
 * oversized 1/2/1 counter, then the late 300-head reveal. The only lines that
 * imply control are the nonexistent panel's, and those retract when struck.
 */

const ink = '#223b3a';
const cream = '#eee6d5';
const teal = '#007e82';
const red = '#c66049';
const gold = '#c89548';
const mute = '#b5afa2';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

const LARGE_HEADS = Array.from({length: 12}, (_, index) => ({
  x: 170 + (index % 4) * 460,
  y: 70 + Math.floor(index / 4) * 225,
}));
const LARGE_HERO_INDEX = 5;
const LARGE_HERO = LARGE_HEADS[LARGE_HERO_INDEX];

const SMALL_COLS = 20;
const SMALL_ROWS = 15;
const SMALL_HERO = {col: 6, row: 9};
const SMALL_HERO_INDEX = SMALL_HERO.row * SMALL_COLS + SMALL_HERO.col;
const smallX = (col: number) => 70 + col * 82;
const smallY = (row: number) => 42 + row * 34;

const MechanicalHead: React.FC<{
  x: number;
  y: number;
  scale?: number;
  active?: boolean;
  opacity?: number;
  glow?: number;
}> = ({x, y, scale = 1, active = false, opacity = 1, glow = 0}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
    <circle r={86 + glow * 18} fill={active ? teal : gold} opacity={glow * 0.1} />
    <circle
      r={78 + glow * 9}
      fill="none"
      stroke={active ? teal : gold}
      strokeWidth="5"
      strokeDasharray="10 9"
      opacity={glow * 0.72}
    />
    <rect x="-47" y="-86" width="94" height="27" rx="4" fill={gold} stroke={ink} strokeWidth="5" />
    <path d="M-43 -59 H-68 L-79 39 Q0 99 79 39 L68 -59 H43" fill="none" stroke={gold} strokeWidth="15" strokeLinejoin="round" />
    <rect x="-39" y="-58" width="78" height="18" rx="3" fill={gold} stroke={ink} strokeWidth="5" />
    <rect x="-14" y="-39" width="28" height="75" rx="14" fill={active ? teal : red} stroke={ink} strokeWidth="5" />
    <ellipse cx="0" cy="-22" rx="5" ry="8" fill={cream} />
    <path d="M-7 36 H7 V72 H-7 Z" fill={gold} stroke={ink} strokeWidth="4" />
    <path d="M-91 71 L-61 91 L-31 72 L0 94 L31 72 L61 91 L91 71 Z" fill={active ? teal : gold} stroke={ink} strokeWidth="5" strokeLinejoin="round" />
  </g>
);

const SmallHead: React.FC<{x: number; y: number; active?: boolean; opacity?: number}> = ({
  x,
  y,
  active = false,
  opacity = 1,
}) => (
  <g transform={`translate(${x} ${y})`} opacity={opacity}>
    <path d="M-12 0 H12 V7 H-12 Z" fill={active ? teal : gold} />
    <path d="M-9 7 H9 L7 21 H-7 Z" fill="none" stroke={active ? teal : mute} strokeWidth="3" />
    <rect x="-3" y="8" width="6" height="12" rx="3" fill={active ? teal : red} />
    <path d="M-15 23 H15" stroke={active ? teal : mute} strokeWidth="3" strokeLinecap="round" />
  </g>
);

const Flame: React.FC<{x: number; y: number; scale?: number}> = ({x, y, scale = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-58 0 Q-98 -71 -26 -145 Q-30 -94 0 -177 Q66 -119 38 -82 Q96 -90 67 0 Z" fill={red} />
    <path d="M-27 0 Q-44 -49 0 -91 Q0 -43 28 -58 Q52 -20 24 0 Z" fill="#edbd5d" />
  </g>
);

export const IndependenceScene: React.FC<{startFrame: number}> = ({startFrame}) => {
  const f = useCurrentFrame() + startFrame;
  const at = (id: string) => Number(cues.find((cue) => cue.cue === id)!.f_in);

  const c11 = at('11');
  const c12 = at('12');
  const c13 = at('13');
  const c14 = at('14');
  const c15 = at('15');
  const c16 = at('16');
  const c17 = at('17');
  const c18 = at('18');
  const c19 = at('19');
  const end = Number(cues.find((cue) => cue.cue === '19')!.f_out);

  const panelOpacity = interpolate(f, [c11, c11 + 8, c12 - 12, c12 + 7], [0, 1, 1, 0], clamp);
  const panelBuild = interpolate(f, [c11, c11 + 24], [0, 1], {...clamp, easing: easeOut});
  const wireBuild = interpolate(f, [c11 + 12, c11 + 38], [0, 1], {...clamp, easing: easeOut});
  const panelStrike = interpolate(f, [c11 + 44, c11 + 62], [0, 1], {...clamp, easing: easeOut});

  const headsOpacity = interpolate(f, [c12 - 5, c12 + 10, c15 - 10, c15 + 8], [0, 1, 1, 0], clamp);
  const revealZoom = interpolate(f, [c12, c12 + 58], [3.05, 1], {...clamp, easing: easeOut});
  const focusZoom = interpolate(f, [c13, c13 + 28, c14, c14 + 26, c15], [1, 1.16, 1.16, 1.27, 1.08], clamp);
  const headCameraX = interpolate(f, [c12, c12 + 58, c13, c13 + 28], [LARGE_HERO.x, 860, 860, 700], {
    ...clamp,
    easing: easeOut,
  });
  const headCameraY = interpolate(f, [c12, c12 + 58], [LARGE_HERO.y, 285], {...clamp, easing: easeOut});
  const isolate = interpolate(f, [c13, c13 + 20, c15 - 12, c15], [0, 1, 1, 0], clamp);
  const temperature = interpolate(f, [c14, c14 + 24, c15 - 8, c15], [0, 1, 1, 0], clamp);

  const heatOpacity = interpolate(f, [c15 - 10, c15 + 8, c16 - 9, c16 + 8], [0, 1, 1, 0], clamp);
  const heatRadius = interpolate(f, [c15 + 5, c15 + 66], [72, 445], {...clamp, easing: Easing.bezier(0.32, 0, 0.2, 1)});
  const heatContact = interpolate(f, [c15 + 57, c15 + 73], [0, 1], {...clamp, easing: easeOut});
  const flamePulse = 1 + Math.sin((f - c15) * 0.32) * 0.045;

  const counterOpacity = interpolate(f, [c16 - 7, c16 + 9, c18 - 10, c18 + 8], [0, 1, 1, 0], clamp);
  const counterIn = interpolate(f, [c16, c16 + 17], [0, 1], {...clamp, easing: Easing.out(Easing.back(1.25))});
  const twoBeat = interpolate(f, [c17, c17 + 9, c18 - 14, c18 - 2], [0, 1, 1, 0], clamp);

  const finalOpacity = interpolate(f, [c18 - 8, c18 + 11, end - 8, end], [0, 1, 1, 0.92], clamp);
  const finalReveal = interpolate(f, [c18, c18 + 36], [0, 1], {...clamp, easing: easeOut});
  const finalScale = interpolate(finalReveal, [0, 1], [1.62, 1], clamp);
  const finalCameraX = interpolate(finalReveal, [0, 1], [smallX(SMALL_HERO.col), 860], clamp);
  const finalCameraY = interpolate(finalReveal, [0, 1], [smallY(SMALL_HERO.row), 285], clamp);
  const split = interpolate(f, [c19, c19 + 28], [0, 1], {...clamp, easing: easeOut});

  const activeTitleStart = f >= c19
    ? c19
    : f >= c18
    ? c18
    : f >= c17
    ? c17
    : f >= c16
    ? c16
    : f >= c15
    ? c15
    : f >= c14
    ? c14
    : f >= c13
    ? c13
    : f >= c12
    ? c12
    : c11;
  const titleIn = interpolate(f, [activeTitleStart, activeTitleStart + 8], [0, 1], {...clamp, easing: easeOut});

  const headline = f >= c19
    ? 'What is inside that one.'
    : f >= c18
    ? "So the question isn't how they all know."
    : f >= c17
    ? 'Occasionally two.'
    : f >= c16
    ? 'The usual number that open is one.'
    : f >= c15
    ? 'A local event, not a building-wide one.'
    : f >= c14
    ? 'It knows the temperature of the air around it.'
    : f >= c13
    ? 'Each one knows precisely one thing.'
    : f >= c12
    ? 'Every head is its own separate machine.'
    : 'There is no system.';

  const strap = f >= c19
    ? 'THAT ONE  /  THE OTHER 300'
    : f >= c18
    ? 'THE QUESTION CHANGES'
    : f >= c17
    ? 'OCCASIONALLY'
    : f >= c16
    ? 'USUALLY'
    : f >= c15
    ? 'LOCAL HEAT  /  LOCAL RESPONSE'
    : f >= c14
    ? 'LOCAL AIR TEMPERATURE'
    : f >= c13
    ? 'ONE THING'
    : f >= c12
    ? 'INDEPENDENT BY DESIGN'
    : 'NO CONTROL PANEL';

  return (
    <AbsoluteFill style={{backgroundColor: cream, color: ink, fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
      <Interactive.Div name="Independence section label" style={{position: 'absolute', left: 100, top: 118, fontSize: 25, letterSpacing: 5}}>
        NO SYSTEM / 03
      </Interactive.Div>
      <Interactive.Div
        name="Independence headline"
        style={{
          position: 'absolute',
          left: 100,
          top: 169,
          width: 1620,
          fontSize: 68,
          fontWeight: 700,
          lineHeight: 1.02,
          opacity: titleIn,
          translate: `0px ${interpolate(titleIn, [0, 1], [18, 0])}px`,
        }}
      >
        {headline}
      </Interactive.Div>
      <Interactive.Div
        name="Independence beat label"
        style={{position: 'absolute', left: 104, top: 336, fontSize: 27, fontWeight: 700, letterSpacing: 4, color: teal, opacity: titleIn}}
      >
        {strap}
      </Interactive.Div>
      <div style={{position: 'absolute', left: 100, top: 382, width: interpolate(titleIn, [0, 1], [0, 154], clamp), height: 7, backgroundColor: red}} />

      <svg viewBox="0 0 1720 570" style={{position: 'absolute', left: 100, top: 410, width: 1720, height: 570, overflow: 'hidden'}}>
        <defs>
          <clipPath id="ind-room-clip"><rect x="54" y="35" width="1612" height="485" rx="15" /></clipPath>
          <radialGradient id="ind-heat-front">
            <stop offset="0" stopColor={red} stopOpacity="0.04" />
            <stop offset="0.7" stopColor={red} stopOpacity="0.09" />
            <stop offset="0.88" stopColor={red} stopOpacity="0.34" />
            <stop offset="1" stopColor={red} stopOpacity="0" />
          </radialGradient>
          <filter id="ind-soft-shadow" x="-30%" y="-30%" width="160%" height="170%">
            <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor={ink} floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Cue 11: a large panel constructs itself, attempts control, then is negated. */}
        <g opacity={panelOpacity}>
          {[-1, 1].map((direction) => (
            <path
              key={direction}
              d={`M${direction < 0 ? 520 : 1200} 286 H${direction < 0 ? 75 : 1645}`}
              fill="none"
              stroke={mute}
              strokeWidth="7"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={Math.min(1, 1 - wireBuild + panelStrike)}
            />
          ))}
          <g
            transform={`translate(${860 + Math.sin((f - c11) * 1.9) * panelStrike * 5} 284) scale(${interpolate(panelBuild, [0, 1], [0.82, 1])}) rotate(${interpolate(panelStrike, [0, 1], [0, -2.2])})`}
            filter="url(#ind-soft-shadow)"
          >
            <rect
              x="-340"
              y="-164"
              width="680"
              height="328"
              rx="18"
              fill={cream}
              stroke={ink}
              strokeWidth="9"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={1 - panelBuild}
            />
            <rect x="-310" y="-132" width="620" height="58" rx="8" fill={ink} opacity={panelBuild} />
            <text x="0" y="-92" textAnchor="middle" fill={cream} fontSize="28" fontWeight="700" letterSpacing="7" opacity={panelBuild}>
              CENTRAL CONTROL
            </text>
            {[-205, 0, 205].map((x, index) => {
              const dialIn = interpolate(f, [c11 + 7 + index * 4, c11 + 20 + index * 4], [0, 1], {...clamp, easing: easeOut});
              return (
                <g key={x} transform={`translate(${x} -8) scale(${dialIn})`} opacity={dialIn}>
                  <circle r="46" fill="none" stroke={mute} strokeWidth="8" />
                  <path d="M0 0 L24 -23" stroke={red} strokeWidth="7" strokeLinecap="round" />
                  <circle r="7" fill={ink} />
                </g>
              );
            })}
            <rect x="-275" y="77" width={550 * panelBuild} height="16" rx="8" fill={mute} />
            <rect x="-275" y="111" width={360 * panelBuild} height="16" rx="8" fill={mute} />
          </g>
          <path
            d="M548 102 L1170 468"
            fill="none"
            stroke={red}
            strokeWidth="22"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - panelStrike}
          />
          <g opacity={panelStrike} transform={`translate(860 500) scale(${interpolate(panelStrike, [0, 1], [0.72, 1])})`}>
            <rect x="-158" y="-30" width="316" height="60" rx="30" fill={red} />
            <text x="0" y="10" textAnchor="middle" fill={cream} fontSize="28" fontWeight="800" letterSpacing="6">NO PANEL</text>
          </g>
        </g>

        {/* Cues 12-14: begin inside one head, pull back to twelve readable machines. */}
        <g opacity={headsOpacity}>
          <g transform={`translate(860 285) scale(${revealZoom * focusZoom}) translate(${-headCameraX} ${-headCameraY})`}>
            {LARGE_HEADS.map((position, index) => {
              const col = index % 4;
              const row = Math.floor(index / 4);
              const heroCol = LARGE_HERO_INDEX % 4;
              const heroRow = Math.floor(LARGE_HERO_INDEX / 4);
              const distance = Math.abs(col - heroCol) + Math.abs(row - heroRow);
              const headIn = interpolate(f, [c12 + distance * 5, c12 + distance * 5 + 15], [0, 1], {...clamp, easing: easeOut});
              const isHero = index === LARGE_HERO_INDEX;
              return (
                <MechanicalHead
                  key={`${position.x}-${position.y}`}
                  x={position.x}
                  y={position.y}
                  scale={0.86 * (0.74 + headIn * 0.26)}
                  active={isHero}
                  opacity={headIn * (isHero ? 1 : 1 - isolate * 0.76)}
                  glow={isHero ? isolate : 0}
                />
              );
            })}
            <g opacity={temperature}>
              <circle
                cx={LARGE_HERO.x}
                cy={LARGE_HERO.y}
                r={interpolate(temperature, [0, 1], [142, 103])}
                fill="none"
                stroke={teal}
                strokeWidth="5"
                strokeDasharray="13 9"
                strokeDashoffset={-(f - c14) * 0.8}
              />
              {Array.from({length: 10}, (_, index) => {
                const angle = index * 0.628;
                const radius = 121 + (index % 2) * 24;
                return (
                  <circle
                    key={index}
                    cx={LARGE_HERO.x + Math.cos(angle) * radius}
                    cy={LARGE_HERO.y + Math.sin(angle) * radius + Math.sin(f * 0.09 + index) * 8}
                    r={index % 3 === 0 ? 7 : 5}
                    fill={index % 2 ? gold : teal}
                    opacity={0.42 + Math.sin(f * 0.12 + index) * 0.16}
                  />
                );
              })}
            </g>
          </g>
        </g>

        {/* Cue 15: a travelling heat front reaches one head and visibly stops. */}
        <g opacity={heatOpacity}>
          <rect x="54" y="35" width="1612" height="485" rx="15" fill="#e7deca" stroke={ink} strokeWidth="6" />
          <g clipPath="url(#ind-room-clip)">
            <circle cx="200" cy="460" r={heatRadius} fill="url(#ind-heat-front)" />
            {[0, 62, 124].map((offset, index) => (
              <circle
                key={offset}
                cx="200"
                cy="460"
                r={Math.max(12, heatRadius - offset)}
                fill="none"
                stroke={red}
                strokeWidth={index === 0 ? 7 : 4}
                strokeDasharray={index === 0 ? '20 13' : '12 18'}
                strokeDashoffset={-(f - c15) * (0.7 + index * 0.18)}
                opacity={0.5 - index * 0.1}
              />
            ))}
            <path d="M770 35 V520" stroke={mute} strokeWidth="3" />
            <path d="M1180 35 V520" stroke={mute} strokeWidth="3" />
            <path d="M54 330 H1666" stroke={mute} strokeWidth="3" />
            <rect x="980" y="380" width="270" height="92" rx="8" fill="none" stroke={mute} strokeWidth="6" />
            <rect x="1320" y="365" width="230" height="107" rx="8" fill="none" stroke={mute} strokeWidth="6" />
            <Flame x={200} y={486} scale={0.58 * flamePulse} />
            <MechanicalHead x={560} y={235} scale={0.42} active opacity={1} glow={heatContact} />
            {[
              [930, 130],
              [1250, 250],
              [1510, 120],
              [1040, 440],
              [1450, 430],
              [760, 470],
            ].map(([x, y]) => <MechanicalHead key={`${x}-${y}`} x={x} y={y} scale={0.36} opacity={0.42} />)}
          </g>
          <text x="88" y="82" fill={red} fontSize="24" fontWeight="800" letterSpacing="5">LOCAL HEAT FRONT</text>
          <g opacity={heatContact}>
            <path d="M620 165 L690 106 H910" fill="none" stroke={teal} strokeWidth="5" strokeLinecap="round" />
            <text x="704" y="94" fill={teal} fontSize="27" fontWeight="800" letterSpacing="3">REACHES ONE HEAD</text>
            <path d="M640 300 Q725 338 800 330" fill="none" stroke={red} strokeWidth="5" strokeDasharray="10 10" />
            <text x="812" y="341" fill={red} fontSize="23" fontWeight="700" letterSpacing="3">THEN FALLS AWAY</text>
          </g>
        </g>

        {/* Cues 16-17: the number becomes the composition, not a small badge. */}
        <g opacity={counterOpacity}>
          <g transform={`translate(350 295) scale(${interpolate(counterIn, [0, 1], [0.74, 1])})`}>
            <text x="0" y="142" textAnchor="middle" fill={teal} fontSize="410" fontWeight="800" opacity={1 - twoBeat * 0.92}>1</text>
            <text
              x="0"
              y="142"
              textAnchor="middle"
              fill={red}
              fontSize="410"
              fontWeight="800"
              opacity={twoBeat}
              transform={`translate(0 ${interpolate(twoBeat, [0, 1], [70, 0])}) rotate(${interpolate(twoBeat, [0, 1], [-9, 0])})`}
            >
              2
            </text>
          </g>
          <text x="350" y="72" textAnchor="middle" fill={twoBeat > 0.5 ? red : teal} fontSize="25" fontWeight="800" letterSpacing="7">
            {twoBeat > 0.5 ? 'OCCASIONALLY' : 'USUALLY'}
          </text>
          <MechanicalHead x={905 - twoBeat * 105} y={275} scale={1.02} active opacity={counterIn} glow={1 - twoBeat * 0.35} />
          <g opacity={twoBeat} transform={`translate(${interpolate(twoBeat, [0, 1], [165, 0])} 0)`}>
            <MechanicalHead x={1240} y={275} scale={1.02} active glow={twoBeat} />
            {Array.from({length: 8}, (_, index) => {
              const angle = index * Math.PI / 4;
              return (
                <path
                  key={index}
                  d={`M${1240 + Math.cos(angle) * 122} ${275 + Math.sin(angle) * 122} L${1240 + Math.cos(angle) * 154} ${275 + Math.sin(angle) * 154}`}
                  stroke={red}
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
          <g opacity={counterIn}>
            <rect x={790 - twoBeat * 105} y="445" width="230" height="58" rx="29" fill={teal} />
            <text x={905 - twoBeat * 105} y="484" textAnchor="middle" fill={cream} fontSize="25" fontWeight="800" letterSpacing="5">OPEN</text>
          </g>
          <g opacity={twoBeat} transform={`translate(${interpolate(twoBeat, [0, 1], [165, 0])} 0)`}>
            <rect x="1125" y="445" width="230" height="58" rx="29" fill={red} />
            <text x="1240" y="484" textAnchor="middle" fill={cream} fontSize="25" fontWeight="800" letterSpacing="5">OPEN</text>
          </g>
        </g>

        {/* Cues 18-19: only now does the exact 300-head field become texture. */}
        <g opacity={finalOpacity}>
          <g transform={`translate(${split * 230} 0)`}>
            <g transform={`translate(860 285) scale(${finalScale}) translate(${-finalCameraX} ${-finalCameraY})`}>
              <rect x="35" y="18" width="1650" height="525" fill="none" stroke={ink} strokeWidth="5" />
              {Array.from({length: SMALL_COLS * SMALL_ROWS}, (_, index) => {
                const col = index % SMALL_COLS;
                const row = Math.floor(index / SMALL_COLS);
                const isHero = index === SMALL_HERO_INDEX;
                return (
                  <SmallHead
                    key={index}
                    x={smallX(col)}
                    y={smallY(row)}
                    active={isHero}
                    opacity={isHero ? 1 - split : 0.72 - split * 0.12}
                  />
                );
              })}
              <circle
                cx={smallX(SMALL_HERO.col)}
                cy={smallY(SMALL_HERO.row) + 9}
                r={interpolate(finalReveal, [0, 1], [64, 38])}
                fill="none"
                stroke={teal}
                strokeWidth="4"
                strokeDasharray="9 7"
                strokeDashoffset={-(f - c18) * 0.7}
                opacity={1 - split}
              />
            </g>
          </g>
          <path
            d="M690 35 V535"
            fill="none"
            stroke={ink}
            strokeWidth="5"
            strokeDasharray="12 10"
            pathLength="1"
            strokeDashoffset={1 - split}
            opacity={split}
          />
          <g opacity={split} transform={`translate(${interpolate(split, [0, 1], [-115, 0])} 0) scale(${interpolate(split, [0, 1], [0.72, 1])})`}>
            <MechanicalHead x={340} y={270} scale={1.08} active glow={split} />
            <text x="340" y="505" textAnchor="middle" fill={teal} fontSize="42" fontWeight="800" letterSpacing="6">THAT ONE</text>
          </g>
          <g opacity={split}>
            <rect x="1310" y="438" width="330" height="82" rx="41" fill={cream} stroke={red} strokeWidth="5" />
            <text x="1475" y="493" textAnchor="middle" fill={red} fontSize="38" fontWeight="800" letterSpacing="5">OTHER 300</text>
          </g>
        </g>
      </svg>

      <Interactive.Div name="Independence footer" style={{position: 'absolute', left: 100, bottom: 45, fontSize: 19, letterSpacing: 2}}>
        SCHEMATIC · 300 HEADS · NO CONNECTION DRAWN AT ANY POINT
      </Interactive.Div>
    </AbsoluteFill>
  );
};
