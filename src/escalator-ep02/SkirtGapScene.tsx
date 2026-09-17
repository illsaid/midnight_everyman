import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {EPISODE_02_VOICEOVER} from './lockedPlates';
import {
  Arrow,
  Caption,
  PushIn,
  Shadow,
  Shot,
  Slam,
  Stage,
  clamp,
  land,
  look,
  move,
  palette,
} from './grammar';

/**
 * M05 — "Failure two lives along the sides." Cues 28-35, absolute frames 2635-3582.
 * Built to motion-grammar-v2. This block is also the standalone Short.
 *
 * Colour discipline (diagram-layer.md): the brush is a passive warning and never
 * goes teal. The skirt-obstruction switch is a protective trip that WORKS, so cue 34
 * is the first earned teal in the episode. Coral marks the gap as a hazard only.
 */

export const SKIRT_GAP_FROM = 2635;
export const SKIRT_GAP_DURATION = 947;

// Scene-local. Absolute = local + SKIRT_GAP_FROM.
const cue = {
  theSides: {from: 0, to: 67},
  millimetres: {from: 67, to: 350},
  theBrush: {from: 350, to: 448},
  notAShoeBrush: {from: 448, to: 504},
  beforeMachinery: {from: 504, to: 575},
  moveIn: {from: 575, to: 668},
  secondLine: {from: 668, to: 834},
  warningApology: {from: 834, to: 947},
} as const;

/* ---------------------------------------------------------------- the parts */

/** The moving step, in section. Ribs march when `travel` advances. */
const Step: React.FC<{travel?: number; dead?: boolean}> = ({travel = 0, dead = false}) => {
  const c = dead ? palette.inkMute : palette.ink;
  return (
    <g>
      <Shadow x={152} y={536} w={776} h={312} r={8} />
      <rect x={140} y={520} width={776} height={312} rx={8} fill={palette.cutaway} stroke={c} strokeWidth={13} />
      {/* tread ribs on the top face */}
      <g clipPath="url(#stepTop)">
        {Array.from({length: 26}).map((_, i) => {
          const x = 156 + ((i * 30 + travel) % 780);
          return <rect key={i} x={x} y={520} width={11} height={54} fill={c} opacity={0.72} />;
        })}
      </g>
      <path d="M140 574 L916 574" stroke={c} strokeWidth={7} />
      {/* thickness */}
      <path
        d="M180 770 L232 832 M264 770 L316 832 M348 770 L400 832 M432 770 L484 832 M516 770 L568 832 M600 770 L652 832 M684 770 L736 832 M768 770 L820 832"
        stroke={c}
        strokeWidth={4}
        opacity={0.36}
      />
      <clipPath id="stepTop">
        <rect x={140} y={520} width={776} height={56} />
      </clipPath>
    </g>
  );
};

/** The fixed skirt panel. Does not move, ever. */
const SkirtPanel: React.FC<{tint?: string}> = ({tint = palette.ink}) => (
  <g>
    {/* the gap itself: a slot with nothing in it */}
    <rect x={916} y={300} width={46} height={592} fill={palette.ink} opacity={0.86} />
    <rect x={916} y={300} width={46} height={64} fill={palette.ink} />
    <Shadow x={974} y={196} w={218} h={712} r={6} />
    <rect x={962} y={180} width={218} height={712} rx={6} fill={palette.panel} stroke={tint} strokeWidth={13} />
    <path
      d="M1000 300 L1000 820 M1060 300 L1060 820 M1120 300 L1120 820"
      stroke={tint}
      strokeWidth={4}
      opacity={0.3}
    />
    <circle cx={1071} cy={252} r={13} fill={tint} opacity={0.75} />
    <circle cx={1071} cy={862} r={13} fill={tint} opacity={0.75} />
  </g>
);

/** The bristle strip, mounted on the panel at ankle height. `bend` deflects the tips. */
const Brush: React.FC<{bend?: number; tint?: string}> = ({bend = 0, tint = palette.ink}) => (
  <g>
    <Shadow x={938} y={406} w={34} h={104} r={4} />
    <rect x={930} y={396} width={34} height={104} rx={4} fill={palette.cutaway} stroke={tint} strokeWidth={9} />
    {Array.from({length: 13}).map((_, i) => {
      const y = 406 + i * 7.5;
      const tipY = y + bend * 20;
      return (
        <path
          key={i}
          d={`M930 ${y} Q${880 - bend * 8} ${y + bend * 8} ${836 - bend * 14} ${tipY}`}
          stroke={tint}
          strokeWidth={5}
          fill="none"
          opacity={0.9}
        />
      );
    })}
  </g>
);

/** A soft shoe. Deliberately deformable — that is the whole point of the beat. */
const Shoe: React.FC<{x: number; y: number; squash?: number; tint?: string}> = ({
  x,
  y,
  squash = 0,
  tint = palette.ink,
}) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx={122} cy={132} rx={132} ry={20} fill={palette.ink} opacity={0.13} />
    <path
      d={`M8 116 Q0 44 62 30 L150 26 Q${232 + squash * 46} 30 ${240 + squash * 54} 74 Q${246 + squash * 58} 118 196 120 L34 124 Q10 124 8 116 Z`}
      fill={palette.paperLight}
      stroke={tint}
      strokeWidth={12}
      strokeLinejoin="round"
    />
    <circle cx={86} cy={62} r={9} fill={tint} opacity={0.55} />
    <circle cx={126} cy={58} r={9} fill={tint} opacity={0.55} />
    <circle cx={166} cy={62} r={9} fill={tint} opacity={0.55} />
    <path d="M14 104 L214 100" stroke={tint} strokeWidth={6} opacity={0.5} />
  </g>
);

/** Skirt-obstruction switch, mounted behind the panel. `tripped` = the arm HAS moved. */
const SkirtSwitch: React.FC<{tripped: boolean; open: number}> = ({tripped, open}) => {
  const c = tripped ? palette.teal : palette.ink;
  return (
    <g>
      <Shadow x={1226} y={462} w={300} h={188} r={8} />
      <rect x={1214} y={446} width={300} height={188} rx={8} fill={palette.paperLight} stroke={c} strokeWidth={13} />
      <path d="M1240 588 L1276 634 M1292 588 L1328 634" stroke={c} strokeWidth={4} opacity={0.36} />
      {/* contacts — they part when the arm moves */}
      <path d="M1268 480 L1268 512" stroke={c} strokeWidth={11} strokeLinecap="round" />
      <path d={`M${1332 + open * 26} 480 L${1332 + open * 26} 512`} stroke={c} strokeWidth={11} strokeLinecap="round" />
      <circle cx={1268} cy={528} r={14} fill={palette.paper} stroke={c} strokeWidth={9} />
      <circle cx={1332 + open * 26} cy={528} r={14} fill={palette.paper} stroke={c} strokeWidth={9} />
      {/* return spring */}
      <path d="M1396 486 L1418 500 L1396 514 L1418 528 L1396 542 L1418 556" fill="none" stroke={c} strokeWidth={8} strokeLinejoin="round" />
      {/* pivot + actuator arm reaching into the gap */}
      <circle cx={1460} cy={540} r={24} fill={palette.paper} stroke={c} strokeWidth={11} />
      <circle cx={1460} cy={540} r={7} fill={c} />
      <g transform={`rotate(${open * -17} 1460 540)`}>
        <path d="M1460 540 L1150 452" stroke={c} strokeWidth={15} strokeLinecap="round" />
        <circle cx={1142} cy={450} r={21} fill={palette.cutaway} stroke={c} strokeWidth={10} />
      </g>
    </g>
  );
};

/**
 * Native geometry of the assembly, for framing. Step 140-916 x 520-832,
 * gap 916-962, panel 962-1180 x 180-892, brush 836-964 x 396-500,
 * switch 1142-1514 x 446-634. Step top face is y=520.
 */
const GAP_X = 939;
const ASSEMBLY = {x: 660, y: 536};

const Frame: React.FC<{children: React.ReactNode}> = ({children}) => (
  <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
    {children}
  </svg>
);

/* ------------------------------------------------------------- cue 28 · 67f */

const TheSides: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      <Shot from={0} to={22}>
        <Frame>
          <g transform={look(ASSEMBLY.x, ASSEMBLY.y, 1.32)}>
            <Step travel={frame * 2.6} />
            <SkirtPanel />
          </g>
        </Frame>
        <Slam at={1} left={112} top={126} eyebrow="FAILURE TWO" text="THE SIDES" size={92} />
      </Shot>

      <Shot from={22} to={46}>
        <PushIn from={1.0} to={1.34} origin="52% 56%" len={11}>
          <Frame>
            <g transform={look(GAP_X - 120, 620, 1.9)}>
              <Step travel={(frame + 22) * 2.6} />
              <SkirtPanel />
            </g>
          </Frame>
        </PushIn>
        <Arrow x={1330} y={300} angle={128} length={210} at={3} />
      </Shot>

      <Shot from={46} to={67}>
        <Frame>
          <g transform={look(GAP_X, 600, 3.1)}>
            <Step travel={(frame + 46) * 2.6} />
            <SkirtPanel />
          </g>
        </Frame>
        <Caption at={2} left={112} top={880} text="STEP · GAP · FIXED PANEL" />
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------ cue 29 · 283f */

const Millimetres: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      {/* A — the gap, measured */}
      <Shot from={0} to={62}>
        <Frame>
          <g transform={look(GAP_X, 436, 3.0)}>
            <Step travel={frame * 2.6} />
            <SkirtPanel />
            {/* extension lines up off the two faces, then the measure between them */}
            <path d={`M916 ${move(frame, 10, 520, 300, 8)} L916 520`} stroke={palette.coral} strokeWidth={4} />
            <path d={`M962 ${move(frame, 10, 520, 300, 8)} L962 520`} stroke={palette.coral} strokeWidth={4} />
            {frame >= 20 ? (
              <>
                <path d="M846 340 L916 340 M962 340 L1032 340" stroke={palette.coral} strokeWidth={6} />
                <path d="M916 326 L890 340 L916 354 Z" fill={palette.coral} />
                <path d="M962 326 L988 340 L962 354 Z" fill={palette.coral} />
              </>
            ) : null}
          </g>
        </Frame>
        <Slam at={26} left={112} top={126} eyebrow="THE CLEARANCE" text={'ONLY\nMILLIMETRES'} size={86} colour={palette.coral} />
      </Shot>

      {/* B — rubber does not stay rigid */}
      <Shot from={62} to={146}>
        <Frame>
          <g transform={look(720, 470, 1.62)}>
            <Step travel={(frame + 62) * 2.6} />
            <SkirtPanel />
            <Shoe
              x={move(frame, 10, 300, 676, 26)}
              y={396}
              squash={land(frame, 46, 0, 1, 14)}
              tint={frame >= 52 ? palette.coral : palette.ink}
            />
          </g>
        </Frame>
        <Caption at={4} left={112} top={912} text="RUBBER" />
        <Arrow x={1120} y={214} angle={52} length={190} at={52} />
      </Shot>

      {/* C — fabric */}
      <Shot from={146} to={224}>
        <Frame>
          <g transform={look(760, 450, 1.62)}>
            <Step travel={(frame + 146) * 2.6} />
            <SkirtPanel />
            {/* a hanging hem. the trailing corner is drawn toward the slot. */}
            <path
              d={`M520 120 L860 120
                  L${876 + land(frame, 16, 0, 60, 22)} ${430 + land(frame, 16, 0, 82, 22)}
                  Q812 470 780 436 Q744 486 700 444 Q656 494 612 446 Q566 492 520 440 Z`}
              fill={palette.paperLight}
              stroke={frame >= 44 ? palette.coral : palette.ink}
              strokeWidth={11}
              strokeLinejoin="round"
            />
            <path
              d="M566 134 Q580 290 560 430 M652 128 Q668 296 642 440 M738 124 Q756 300 726 436 M824 122 Q844 300 816 432"
              fill="none"
              stroke={palette.inkMute}
              strokeWidth={5}
              opacity={0.55}
            />
          </g>
        </Frame>
        <Caption at={4} left={112} top={912} text="LOOSE FABRIC" />
      </Shot>

      {/* D — and the thing nobody wants to think about */}
      <Shot from={224} to={283}>
        <Frame>
          <g transform={look(830, 452, 2.05)}>
            <Step travel={(frame + 224) * 2.6} />
            <SkirtPanel />
            <g transform={`translate(${move(frame, 8, 380, 668, 22)} 404)`}>
              <ellipse cx={130} cy={118} rx={126} ry={15} fill={palette.ink} opacity={0.13} />
              {/* a fingertip, level with the step face */}
              <path
                d="M0 8 L188 8 Q248 8 248 56 Q248 104 188 104 L0 104 Z"
                fill={palette.paperLight}
                stroke={palette.ink}
                strokeWidth={12}
                strokeLinejoin="round"
              />
              <path d="M196 22 Q224 56 196 90" fill="none" stroke={palette.inkMute} strokeWidth={5} opacity={0.65} />
              <path d="M104 12 Q96 56 104 100" fill="none" stroke={palette.inkMute} strokeWidth={5} opacity={0.5} />
            </g>
            {frame >= 40 ? (
              <circle
                cx={GAP_X}
                cy={458}
                r={land(frame, 40, 300, 176, 8)}
                fill="none"
                stroke={palette.coral}
                strokeWidth={8}
                strokeDasharray="22 18"
              />
            ) : null}
          </g>
        </Frame>
        <Caption at={4} left={112} top={876} text="SMALL FINGERS" />
        <Caption at={46} left={112} top={932} text="NONE OF IT STAYS RIGID" colour={palette.coral} />
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------- cue 30 · 98f */

const TheBrush: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      <Shot from={0} to={44}>
        <Frame>
          <g transform={look(700, 470, 1.5)}>
            <Step travel={frame * 2.6} />
            <SkirtPanel />
            <Brush />
            <Shoe x={move(frame, 14, 240, 520, 26)} y={396} />
          </g>
        </Frame>
        <Slam at={2} left={112} top={126} eyebrow="THE SIDES" text="THE BRUSH" size={92} />
      </Shot>

      <Shot from={44} to={98}>
        <PushIn from={1.0} to={1.3} origin="46% 44%" len={10}>
          <Frame>
            <g transform={look(890, 452, 2.7)}>
              <Step travel={(frame + 44) * 2.6} />
              <SkirtPanel />
              <Brush />
            </g>
          </Frame>
        </PushIn>
        <Caption at={12} left={112} top={912} text="STIFF · AT ANKLE HEIGHT" />
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------- cue 31 · 56f */

const NotAShoeBrush: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      <Shot from={0} to={56}>
        <Frame>
          <g transform={look(760, 460, 1.66)}>
            <Step travel={frame * 2.6} />
            <SkirtPanel />
            <Brush bend={land(frame, 4, 0, 0.7, 8)} />
            <Shoe x={596} y={396} />
          </g>
          {frame >= 24 ? (
            <path
              d={`M420 300 L${land(frame, 24, 420, 1420, 7)} 830`}
              stroke={palette.coral}
              strokeWidth={22}
              strokeLinecap="round"
            />
          ) : null}
        </Frame>
        <Slam at={1} left={112} top={126} eyebrow="THE MYTH" text="SHOE CLEANING" size={78} />
        {frame >= 32 ? (
          <Slam at={32} left={112} top={834} text="IT IS NOT" size={88} colour={palette.coral} />
        ) : null}
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------- cue 32 · 71f */

const BeforeMachinery: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      <Shot from={0} to={36}>
        <PushIn from={1.16} to={1.0} origin="46% 46%" len={8}>
          <Frame>
            <g transform={look(800, 460, 2.0)}>
              <Step travel={frame * 2.6} />
              <SkirtPanel />
              <Brush bend={land(frame, 8, 0, 0.85, 9)} />
              <Shoe x={move(frame, 2, 430, 596, 14)} y={396} />
            </g>
          </Frame>
        </PushIn>
        <Slam at={2} left={112} top={126} eyebrow="ORDER OF CONTACT" text={'BRUSH\nFIRST'} size={80} />
      </Shot>

      <Shot from={36} to={71}>
        <Frame>
          <g transform={look(830, 452, 2.45)}>
            <Step travel={(frame + 36) * 2.6} />
            <SkirtPanel />
            <Brush bend={0.85} />
            <Shoe x={596} y={396} />
            {/* contact ring sits ON the bristle tips, not in empty space */}
            <circle cx={846} cy={446} r={land(frame, 4, 0, 74, 7)} fill="none" stroke={palette.mustard} strokeWidth={9} />
            {frame >= 14 ? (
              <circle cx={GAP_X} cy={452} r={44} fill="none" stroke={palette.inkMute} strokeWidth={6} strokeDasharray="14 12" />
            ) : null}
          </g>
        </Frame>
        <Arrow x={430} y={180} angle={56} length={200} at={10} colour={palette.mustard} />
        <Caption at={18} left={112} top={912} text="CONTACT HAPPENS HERE — NOT AT THE GAP" />
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------- cue 33 · 93f */

const MoveIn: React.FC = () => {
  const frame = useCurrentFrame();
  const nudge = land(frame, 26, 0, -196, 16);
  return (
    <Stage>
      <Shot from={0} to={93}>
        <Frame>
          <g transform={look(660, 470, 1.62)}>
            <Step travel={frame * 2.6} />
            <SkirtPanel />
            <Brush bend={interpolate(frame, [26, 48], [0.85, 0.2], clamp)} />
            <Shoe x={596 + nudge} y={396} />
          </g>
        </Frame>
        <Arrow x={1290} y={300} angle={180} length={land(frame, 30, 0, 260, 10)} at={30} colour={palette.olive} />
        <Caption at={54} left={112} top={912} text="AWAY FROM THE EDGE" colour={palette.olive} />
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------ cue 34 · 166f */

const SecondLine: React.FC = () => {
  const frame = useCurrentFrame();
  const open = land(frame, 76, 0, 1, 9);
  const tripped = frame >= 76;
  return (
    <Stage>
      {/* A — the switch exists, behind the panel */}
      <Shot from={0} to={44}>
        <Frame>
          <g transform={look(1010, 540, 1.16)}>
            <Step travel={frame * 2.6} />
            <SkirtPanel />
            <Brush />
            <SkirtSwitch tripped={false} open={0} />
          </g>
        </Frame>
        <Slam at={2} left={112} top={126} eyebrow="IF FITTED" text={'SECOND LINE\nOF DEFENCE'} size={72} />
      </Shot>

      {/* B — something enters the gap and moves the arm */}
      <Shot from={44} to={116}>
        <Frame>
          <g transform={look(1050, 520, 1.34)}>
            <Step travel={frame < 88 ? (frame + 44) * 2.6 : 88 * 2.6 + 44 * 2.6} dead={false} />
            <SkirtPanel tint={tripped ? palette.teal : palette.ink} />
            <Brush bend={0.6} tint={palette.ink} />
            <SkirtSwitch tripped={tripped} open={open} />
            <rect
              x={move(frame, 10, 700, 908, 20)}
              y={418}
              width={82}
              height={112}
              rx={12}
              fill={palette.cutaway}
              stroke={palette.ink}
              strokeWidth={11}
            />
          </g>
        </Frame>
        {tripped ? <Caption at={78} left={112} top={912} text="CIRCUIT INTERRUPTED" colour={palette.teal} /> : null}
      </Shot>

      {/* C — and the loop stops */}
      <Shot from={116} to={166}>
        <Frame>
          <g transform={look(1010, 545, 1.16)}>
            <Step travel={344} dead />
            <SkirtPanel tint={palette.teal} />
            <Brush bend={0.6} />
            <SkirtSwitch tripped open={1} />
          </g>
        </Frame>
        <Slam at={6} left={112} top={186} eyebrow="PROTECTION" text="STOPPED" size={92} colour={palette.teal} />
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------ cue 35 · 113f */

const WarningApology: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Stage>
      <Shot from={0} to={113}>
        <Frame>
          {/* left half — the brush, framed on itself */}
          <g transform={`translate(-500 250) ${look(900, 452, 1.55)}`}>
            <SkirtPanel />
            <Brush bend={0.45} />
          </g>
          <path
            d={`M960 ${land(frame, 42, 1080, 320, 9)} L960 1080`}
            stroke={palette.inkMute}
            strokeWidth={5}
            strokeDasharray="14 16"
          />
          {/* right half — the switch that fired */}
          {frame >= 48 ? (
            <g transform={`translate(480 250) ${look(1328, 540, 1.32)}`}>
              <SkirtSwitch tripped open={1} />
            </g>
          ) : null}
        </Frame>
        <Slam at={2} left={112} top={140} eyebrow="THE BRUSH IS" text="THE WARNING" size={82} />
        {frame >= 54 ? (
          <Slam
            at={54}
            left={1036}
            top={140}
            eyebrow="THE SWITCH IS"
            text="THE APOLOGY"
            size={82}
            colour={palette.teal}
          />
        ) : null}
      </Shot>
    </Stage>
  );
};

/* ------------------------------------------------------------------- assembly */

export const SkirtGapScene: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    {(
      [
        ['M05 · cue 28 · the sides', cue.theSides, TheSides],
        ['M05 · cue 29 · only millimetres', cue.millimetres, Millimetres],
        ['M05 · cue 30 · the brush', cue.theBrush, TheBrush],
        ['M05 · cue 31 · not a shoe brush', cue.notAShoeBrush, NotAShoeBrush],
        ['M05 · cue 32 · before the machinery', cue.beforeMachinery, BeforeMachinery],
        ['M05 · cue 33 · move in', cue.moveIn, MoveIn],
        ['M05 · cue 34 · second line of defence', cue.secondLine, SecondLine],
        ['M05 · cue 35 · warning · apology', cue.warningApology, WarningApology],
      ] as const
    ).map(([name, range, Component]) => (
      <Sequence key={name} name={name} from={range.from} durationInFrames={range.to - range.from}>
        <Component />
      </Sequence>
    ))}
  </AbsoluteFill>
);

export const SkirtGapReview: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <SkirtGapScene />
    <Audio
      src={staticFile(EPISODE_02_VOICEOVER)}
      trimBefore={SKIRT_GAP_FROM}
      trimAfter={SKIRT_GAP_FROM + SKIRT_GAP_DURATION}
    />
  </AbsoluteFill>
);
