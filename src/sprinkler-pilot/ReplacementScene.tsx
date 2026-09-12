import {AbsoluteFill, Easing, Interactive, interpolate, spring, useCurrentFrame} from 'remotion';
import {cues} from './cues';

const ink = '#223b3a';
const cream = '#eee6d5';
const teal = '#007e82';
const gold = '#c89548';
const red = '#c66049';
const mute = '#b5afa2';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const ease = (frame: number, range: [number, number], output: [number, number]) =>
  interpolate(frame, range, output, {
    ...clamp,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

const Head: React.FC<{intact: boolean; emphasis?: number}> = ({intact, emphasis = 0}) => (
  <g stroke={ink} strokeWidth="5" strokeLinejoin="round">
    <path d="M-38 0 H38 V42 H-38 Z" fill={intact ? gold : mute} />
    <path d="M-38 27 H-72 L-82 150 Q0 196 82 150 L72 27 H38" stroke={intact ? gold : mute} strokeWidth="16" fill="none" />
    {intact ? <>
      <path d="M-42 43 H42 V63 H-42 Z" fill={gold} />
      <rect x="-15" y="63" width="30" height="84" rx="14" fill={red} />
      <ellipse cx="0" cy="81" rx="7" ry="9" fill={cream} strokeWidth="1" />
      <circle r={28 + emphasis * 16} cy="104" fill="none" stroke={teal} strokeWidth="4" opacity={emphasis} />
    </> : <>
      <path d="M-42 43 H42 V63 H-42 Z" fill={mute} />
      <path d="M-15 65 L-4 85 L-17 103 L-2 127" fill="none" stroke={red} strokeWidth="7" />
      <path d="M15 70 L4 91 L17 111 L6 139" fill="none" stroke={red} strokeWidth="6" />
      <path d="M-24 145 L-10 132 L1 151 L16 134 L26 148" fill="none" stroke={red} strokeWidth="5" />
    </>}
    <path d="M-7 147 H7 V188 H-7 Z" fill={intact ? gold : mute} />
    <path d="M-98 189 L-67 212 L-36 192 L0 215 L36 192 L67 212 L98 189 Z" fill={intact ? gold : mute} />
  </g>
);

const Spanner: React.FC = () => (
  <g stroke={ink} strokeWidth="5" strokeLinejoin="round">
    <path d="M0 0 L165 165 Q187 192 169 211 Q150 229 126 201 L-27 35 Q-74 47 -88 5 L-47 13 L-26 -13 L-42 -51 Q4 -40 0 0 Z" fill="#8b9b92" />
    <circle cx="153" cy="194" r="13" fill={cream} />
  </g>
);

const Drop: React.FC<{x: number; y: number; phase: number; opacity?: number}> = ({x, y, phase, opacity = 1}) => {
  const wobble = Math.sin(phase * 0.14) * 7;
  return <path d="M0 -13 C9 -2 12 6 12 13 A12 12 0 1 1 -12 13 C-12 6 -9 -2 0 -13 Z" fill={teal} opacity={opacity} transform={`translate(${x + wobble} ${y})`} />;
};

export const ReplacementScene: React.FC<{startFrame: number}> = ({startFrame}) => {
  const local = useCurrentFrame();
  const at = (id: string) => Number(cues.find((cue) => cue.cue === id)!.f_in);

  const cue76 = at('76') - startFrame;
  const cue77 = at('77') - startFrame;
  const cue78 = at('78') - startFrame;
  const cue79 = at('79') - startFrame;
  const cue80 = at('80') - startFrame;
  const cue81 = at('81') - startFrame;
  const cue82 = at('82') - startFrame;
  const cue83 = at('83') - startFrame;
  const cue84 = at('84') - startFrame;

  const actTwo = ease(local, [cue81, cue81 + 22], [0, 1]);
  const oldRelease = ease(local, [cue78 + 16, cue79 - 2], [0, 1]);
  const newInsert = ease(local, [cue79, cue80 - 4], [0, 1]);
  const lock = spring({frame: local - cue80, fps: 24, config: {damping: 13, stiffness: 170}});
  const noReset = ease(local, [cue77 + 5, cue77 + 24], [0, 1]);
  const spannerIn = ease(local, [cue78, cue78 + 18], [0, 1]);
  const serviceDrift = interpolate(local, [cue76, cue81], [1.025, 1.075], clamp);

  const sprinklerProgress = ease(local, [cue82, cue82 + 34], [0, 1]);
  const hoseProgress = ease(local, [cue83, cue83 + 46], [0, 1]);
  const conclusion = ease(local, [cue84, cue84 + 30], [0, 1]);

  const serviceHeadline = local >= cue80 ? 'READY TO WAIT AGAIN.' : local >= cue79 ? 'A NEW HEAD GOES IN.' : local >= cue78 ? 'THE OLD HEAD COMES OUT.' : local >= cue77 ? 'NO SWITCH. NO RESET.' : 'ONE USE. THEN IT IS FINISHED.';

  return <AbsoluteFill style={{backgroundColor: cream, color: ink, fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, opacity: 0.12, backgroundImage: 'radial-gradient(circle at 20% 30%, #8b7b5a 0 0.7px, transparent 0.9px), radial-gradient(circle at 70% 60%, #8b7b5a 0 0.6px, transparent 0.8px)', backgroundSize: '19px 17px, 23px 21px'}} />

    <Interactive.Div name="Section label" style={{position: 'absolute', left: 92, top: 70, fontSize: 22, letterSpacing: 5, zIndex: 5}}>AFTER THE FIRE / 10</Interactive.Div>

    <div style={{position: 'absolute', inset: 0, translate: `${-actTwo * 2100}px 0px`, opacity: 1 - actTwo}}>
      <Interactive.Div name="Replacement headline" style={{position: 'absolute', left: 92, top: 145, width: 730, fontSize: 64, lineHeight: 1.02, fontWeight: 800}}>{serviceHeadline}</Interactive.Div>
      <div style={{position: 'absolute', left: 96, top: 355, width: 520, fontSize: 29, lineHeight: 1.35}}>
        {local >= cue80 ? 'A fresh glass bulb holds the seal shut.' : local >= cue78 ? 'Replacement is mechanical, local and final.' : 'The broken bulb cannot be put back together.'}
      </div>

      {local >= cue77 && local < cue78 + 14 ? <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <g transform="translate(235 610)">
          <rect width="330" height="155" rx="20" fill="#e2dac8" stroke={ink} strokeWidth="5" />
          <rect x="25" y="26" width="150" height="55" rx="27" fill={mute} stroke={ink} strokeWidth="4" />
          <circle cx="70" cy="53" r="20" fill={ink} />
          <text x="205" y="65" fill={ink} fontSize="27" fontWeight="700">RESET</text>
          <path d="M8 142 L318 8" stroke={red} strokeWidth="12" strokeDasharray="350" strokeDashoffset={350 * (1 - noReset)} />
          <text x="0" y="205" fill={red} fontSize="25" fontWeight="700" letterSpacing="3">DOES NOT EXIST</text>
        </g>
      </svg> : null}

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <g transform={`translate(1280 170) scale(${serviceDrift}) translate(-1280 -170)`}>
          <path d="M1030 155 H1530 V240 H1030 Z" fill="#8b9b92" stroke={ink} strokeWidth="7" />
          <path d="M1190 240 H1370 V340 H1190 Z" fill="#a8a79d" stroke={ink} strokeWidth="7" />
          <path d="M1210 340 H1350" stroke={ink} strokeWidth="9" />

          {local < cue79 ? <g transform={`translate(${1280 - oldRelease * 250} ${345 + oldRelease * 430}) rotate(${-oldRelease * 105} 0 0) scale(1.55)`} opacity={1 - oldRelease * 0.55}><Head intact={false} /></g> : null}
          {local >= cue79 ? <g transform={`translate(${1540 - newInsert * 260} ${780 - newInsert * 435 + (local >= cue80 ? (1 - lock) * 16 : 0)}) rotate(${(1 - newInsert) * 115} 0 0) scale(1.55)`}><Head intact emphasis={local >= cue80 ? Math.max(0, 1 - lock) : 0} /></g> : null}
          {local >= cue78 && local < cue80 + 12 ? <g transform={local < cue79 ? `translate(${1790 - spannerIn * 420 - oldRelease * 250} ${515 + oldRelease * 425}) rotate(${-56 - oldRelease * 72}) scale(1.05)` : `translate(${1540 - newInsert * 260} ${605 - newInsert * 425}) rotate(${25 - newInsert * 78}) scale(1.05)`}><Spanner /></g> : null}

          {local >= cue80 ? <g opacity={ease(local, [cue80 + 5, cue80 + 20], [0, 1])}>
            <path d="M1450 545 H1695" stroke={teal} strokeWidth="4" strokeDasharray="245" strokeDashoffset={245 * (1 - lock)} />
            <circle cx="1450" cy="545" r="7" fill={teal} />
            <text x="1480" y="533" fill={teal} fontSize="28" fontWeight="700" letterSpacing="2">SEALED</text>
            <text x="1480" y="573" fill={ink} fontSize="24">Independent. Ready.</text>
          </g> : null}
        </g>
      </svg>
    </div>

    <div style={{position: 'absolute', inset: 0, translate: `${(1 - actTwo) * 2100}px 0px`, opacity: actTwo}}>
      <Interactive.Div name="Water comparison heading" style={{position: 'absolute', left: 92, top: 132, width: 1735, fontSize: conclusion > 0 ? 59 : 67, lineHeight: 1.02, fontWeight: 800}}>{conclusion > 0 ? 'THE SPRINKLER PREVENTS THE FLOOD.' : 'HOW MUCH WATER?'}</Interactive.Div>
      <div style={{position: 'absolute', left: 96, top: 235, width: 1725, height: 4, background: ink, opacity: 0.35}} />

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <g transform={`translate(0 ${conclusion * 30}) scale(${1 - conclusion * 0.035})`}>
          <rect x="92" y="295" width="760" height="605" rx="28" fill="#e3dbc9" stroke={ink} strokeWidth="5" />
          <rect x="892" y="295" width="936" height="605" rx="28" fill="#e3dbc9" stroke={ink} strokeWidth="5" />

          <text x="150" y="365" fill={ink} fontSize="26" fontWeight="700" letterSpacing="4">ONE SPRINKLER HEAD</text>
          <g transform="translate(475 400) scale(0.78)"><Head intact /></g>
          {local >= cue82 ? <g opacity={sprinklerProgress}>
            <path d="M475 562 C360 660 300 770 250 840 C400 890 555 890 700 840 C640 760 585 660 475 562 Z" fill={teal} opacity="0.13" />
            {Array.from({length: 13}, (_, index) => {
              const x = 350 + (index % 5) * 62 + Math.sin(index * 3.1) * 22;
              const travel = (local - cue82) * (3.8 + (index % 4) * 0.45);
              const y = 600 + ((travel + index * 53) % 245);
              return <Drop key={index} x={x} y={y} phase={local + index * 11} opacity={0.55 + (index % 3) * 0.15} />;
            })}
            <text x="528" y="688" fill={ink} fontSize="150" fontWeight="800" opacity="0.38">1×</text>
            <text x="520" y="680" fill={teal} fontSize="150" fontWeight="800">1×</text>
            <text x="526" y="752" fill={cream} fontSize="29" fontWeight="700" stroke={cream} strokeWidth="7" paintOrder="stroke">≈60 L/MIN</text>
            <text x="520" y="746" fill={ink} fontSize="29" fontWeight="700">≈60 L/MIN</text>
          </g> : null}

          <text x="950" y="365" fill={ink} fontSize="26" fontWeight="700" letterSpacing="4">ONE FIREFIGHTER'S HOSE</text>
          <g transform="translate(960 420)">
            <path d="M0 75 H235 L290 25 H390 V205 H290 L235 155 H0 Z" fill="#8b9b92" stroke={ink} strokeWidth="7" />
            <path d="M387 48 H455 V182 H387 Z" fill={gold} stroke={ink} strokeWidth="7" />
            {local >= cue83 ? <path d={`M455 67 C${525 + hoseProgress * 45} 28 ${600 + hoseProgress * 75} 38 ${650 + hoseProgress * 120} 5 L${650 + hoseProgress * 120} 225 C${610 + hoseProgress * 75} 182 ${525 + hoseProgress * 45} 203 455 163 Z`} fill={red} opacity={0.16 + hoseProgress * 0.22} /> : null}
          </g>

          {Array.from({length: 20}, (_, index) => {
            const row = Math.floor(index / 10);
            const column = index % 10;
            const threshold = index < 10 ? index / 12 : 0.78 + (index - 10) / 42;
            const filled = Math.max(0, Math.min(1, (hoseProgress - threshold) * 7));
            return <g key={index} transform={`translate(${1010 + column * 72} ${785 + row * 60})`}><rect width="54" height="48" rx="7" fill={red} opacity={0.12 + filled * 0.76} stroke={red} strokeWidth="3" /></g>;
          })}
          {local >= cue83 ? <g opacity={hoseProgress}>
            <text x="1012" y="698" fill={ink} fontSize="94" fontWeight="800" opacity="0.38">10–20×</text>
            <text x="1005" y="690" fill={red} fontSize="94" fontWeight="800">10–20×</text>
            <text x="1010" y="748" fill={ink} fontSize="27" fontWeight="700" letterSpacing="2">AS MUCH WATER · EACH MINUTE</text>
          </g> : null}
        </g>

        {conclusion > 0 ? <g opacity={conclusion}>
          <rect x="110" y="920" width={720 * conclusion} height="66" rx="33" fill={teal} />
          <text x="145" y="963" fill={cream} fontSize="24" fontWeight="800" letterSpacing="3">EARLY CONTROL · LESS WATER LATER</text>
        </g> : null}
      </svg>
    </div>

    <div style={{position: 'absolute', left: 96, bottom: 44, fontSize: 18, letterSpacing: 2, zIndex: 8}}>{local < cue81 ? 'SCHEMATIC · REPLACEMENT SEQUENCE SIMPLIFIED' : 'ILLUSTRATIVE FLOW COMPARISON · APPROXIMATE VALUES'}</div>
    <div style={{position: 'absolute', right: 96, bottom: 44, fontSize: 21, letterSpacing: 3, color: teal, zIndex: 8}}>{local < cue81 ? 'SINGLE USE' : local < cue83 ? '1 UNIT' : '1 : 10–20'}</div>
  </AbsoluteFill>;
};
