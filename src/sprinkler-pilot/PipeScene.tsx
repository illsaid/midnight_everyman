import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {cues} from './cues';

/**
 * M04 - cues 23-25. "Above it, a pipe."
 *
 * The reveal of what has been over the viewer's head the whole time. A ceiling
 * tile peels back, the pipe is exposed, water fills it under pressure, and a
 * date counter runs backwards to the day the building was finished.
 *
 * CONSTRUCTION_YEAR is a placeholder. The cue sheet carries "SINCE 1994" as a
 * slug, not a researched fact. Either establish a real year for the building in
 * the plate, or cut the chip - do not ship the invented one.
 */

const ink = '#223b3a';
const cream = '#eee6d5';
const teal = '#007e82';
const gold = '#c89548';
const mute = '#b5afa2';
const water = '#48aeba';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** PLACEHOLDER - see note above. */
const CONSTRUCTION_YEAR = 1994;
const CONSTRUCTION_YEAR_IS_PLACEHOLDER = true;

export const PipeScene: React.FC<{startFrame: number}> = ({startFrame}) => {
  const f = useCurrentFrame() + startFrame;
  const at = (id: string) => Number(cues.find((c) => c.cue === id)!.f_in);
  const c23 = at('23');
  const c24 = at('24');
  const c25 = at('25');

  const peel = interpolate(f, [c23, c23 + 34], [0, 1], {...clamp, easing: Easing.bezier(0.22, 1, 0.36, 1)});
  const fill = interpolate(f, [c24, c24 + 52], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const needle = interpolate(f, [c24 + 14, c24 + 62], [-52, 46], {...clamp, easing: Easing.bezier(0.3, 1.4, 0.4, 1)});
  const dateIn = interpolate(f, [c25, c25 + 16], [0, 1], clamp);
  const yearT = interpolate(f, [c25 + 4, c25 + 44], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const year = Math.round(interpolate(yearT, [0, 1], [2026, CONSTRUCTION_YEAR]));

  const headline = f >= c25 ? 'Since the day the building went up.' : f >= c24 ? 'Water. At high pressure.' : 'Above it, a pipe.';

  return (
    <AbsoluteFill style={{backgroundColor: cream, color: ink, fontFamily: 'Arial, sans-serif'}}>
      <div style={{position: 'absolute', left: 100, top: 140, fontSize: 25, letterSpacing: 5}}>
        ABOVE THE CEILING / 04
      </div>
      <div style={{position: 'absolute', left: 100, top: 192, width: 760, fontSize: 68, fontWeight: 700, lineHeight: 1.06}}>
        {headline}
      </div>
      {f >= c24 && f < c25 ? (
        <div style={{position: 'absolute', left: 104, top: 370, fontSize: 30, letterSpacing: 4, color: teal}}>
          HIGH PRESSURE
        </div>
      ) : null}

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
        {/* the void above the ceiling, revealed by the peel */}
        <rect x="1000" y="300" width="820" height="300" fill="#dcd3bd" opacity={peel} />

        {/* the pipe */}
        <g opacity={peel}>
          <rect x="1000" y="392" width="820" height="86" rx="10" fill={mute} stroke={ink} strokeWidth="7" />
          <rect
            x="1006"
            y="398"
            width={808 * fill}
            height="74"
            rx="6"
            fill={water}
            opacity="0.85"
          />
          <path d="M1000 435 H1820" stroke={cream} strokeWidth="2" opacity="0.5" />
        </g>

        {/* the ceiling tile, peeling back */}
        <g transform={`translate(1410 560) rotate(${-64 * peel}) translate(-1410 -560)`}>
          <rect x="1000" y="520" width="820" height="80" fill="#e4dccb" stroke={ink} strokeWidth="6" />
          <path d="M1000 560 H1820" stroke={mute} strokeWidth="2" />
        </g>

        {/* the drop and the head - always there, before and after */}
        <g stroke={ink} strokeWidth="6" strokeLinejoin="round">
          <path d="M1398 478 H1422 V620 H1398 Z" fill={gold} />
          <path d="M1380 620 H1440 V648 H1380 Z" fill={gold} />
          <path d="M1386 648 H1394 L1390 700 H1390 Z" fill="none" />
          <path d="M1350 706 L1378 726 L1406 707 L1434 726 L1462 706 Z" fill={gold} />
        </g>

        {/* pressure gauge */}
        {f >= c24 ? (
          <g transform="translate(1640 760)" opacity={interpolate(f, [c24, c24 + 16], [0, 1], clamp)}>
            <circle r="86" fill={cream} stroke={ink} strokeWidth="7" />
            <path d="M-58 0 A58 58 0 0 1 58 0" fill="none" stroke={mute} strokeWidth="6" />
            <path d="M22 0 A58 58 0 0 1 58 0" fill="none" stroke={teal} strokeWidth="6" />
            <g transform={`rotate(${needle})`}>
              <path d="M0 8 L0 -60" stroke={ink} strokeWidth="7" strokeLinecap="round" />
            </g>
            <circle r="9" fill={ink} />
            <text y="126" textAnchor="middle" fontSize="26" fill={ink}>
              STANDING PRESSURE
            </text>
          </g>
        ) : null}

        {/* cue 25 - the year, running backwards */}
        {dateIn > 0 ? (
          <g opacity={dateIn} transform="translate(300 760)">
            <path d="M0 -70 H8" stroke={teal} strokeWidth="0" />
            <text fontSize="150" fontWeight="700" fill={teal} textAnchor="start">
              {year}
            </text>
            <text y="58" fontSize="30" fill={ink}>
              {CONSTRUCTION_YEAR_IS_PLACEHOLDER ? 'PLACEHOLDER YEAR — VERIFY OR CUT' : 'BUILDING COMPLETED'}
            </text>
          </g>
        ) : null}
      </svg>

      <div style={{position: 'absolute', left: 100, bottom: 45, fontSize: 19, letterSpacing: 2}}>
        SCHEMATIC · NOT TO SCALE
      </div>
    </AbsoluteFill>
  );
};
