import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {clamp, OUT, palette, Stage} from '../grammar';
import {cue, FIRST_ACT_END_FRAME} from './FirstActTiming';

const CUT_START = cue.bicycleChain + 6;

const FocusCard: React.FC<{eyebrow: string; text: string; at: number; until: number; left?: number; top?: number; colour?: string}> = ({eyebrow, text, at, until, left = 100, top = 92, colour = palette.teal}) => {
  const frame = useCurrentFrame();
  if (frame < at || frame >= until) return null;
  const inn = interpolate(frame, [at, at + 7], [0, 1], {...clamp, easing: OUT});
  const out = interpolate(frame, [until - 5, until], [1, 0], {...clamp, easing: OUT});
  return (
    <div style={{position: 'absolute', left, top, minWidth: 420, padding: '17px 23px 20px 29px', backgroundColor: palette.paperLight, borderLeft: `12px solid ${colour}`, opacity: Math.min(inn, out), translate: `${(1 - inn) * -32}px 0px`, fontFamily: 'Arial, sans-serif'}}>
      <div style={{fontSize: 18, fontWeight: 800, letterSpacing: 4.6, color: palette.inkMute}}>{eyebrow}</div>
      <div style={{marginTop: 6, fontSize: 43, fontWeight: 900, lineHeight: 0.98, letterSpacing: -0.5}}>{text}</div>
    </div>
  );
};

const Ring: React.FC<{x: number; y: number; r: number; at: number; until: number; colour?: string}> = ({x, y, r, at, until, colour = palette.mustard}) => {
  const frame = useCurrentFrame();
  if (frame >= until) return null;
  const grow = interpolate(frame, [at, at + 8], [0, 1], {...clamp, easing: OUT});
  const fade = interpolate(frame, [until - 6, until], [1, 0], {...clamp, easing: OUT});
  if (grow <= 0) return null;
  return <div style={{position: 'absolute', left: x - r, top: y - r, width: r * 2, height: r * 2, borderRadius: '50%', border: `10px solid ${colour}`, opacity: grow * fade, scale: interpolate(grow, [0, 1], [1.45, 1], {...clamp, output: 'perceptual-scale'})}} />;
};

export const EscalatorCutawayScene: React.FC = () => {
  const frame = useCurrentFrame();
  if (frame < CUT_START || frame >= FIRST_ACT_END_FRAME) return null;

  const sceneIn = interpolate(frame, [CUT_START, CUT_START + 10], [0, 1], {...clamp, easing: OUT});
  const shellOut = interpolate(frame, [cue.stripAway, cue.stripAway + 12], [0, 1], {...clamp, easing: OUT});
  const chainDraw = interpolate(frame, [cue.stripAway + 38, cue.stripAway + 58], [0, 1], {...clamp, easing: OUT});
  const returnRun = interpolate(frame, [cue.returningBeneath, cue.returningBeneath + 9], [0, 1], {...clamp, easing: OUT});
  const overview = interpolate(frame, [cue.eachLayer - 7, cue.eachLayer + 5], [0, 1], {...clamp, easing: OUT});
  const caseHandoff = interpolate(frame, [cue.hongKongMarch2017, cue.hongKongMarch2017 + 10], [0, 1], {...clamp, easing: OUT});
  const cameraScale = interpolate(frame, [CUT_START, CUT_START + 8, cue.stripAway + 20, cue.stripAway + 35, cue.eachLayer - 7, cue.eachLayer + 5], [1.24, 1.24, 1.18, 1, 1.08, 1], {...clamp, easing: OUT, output: 'perceptual-scale'});

  return (
    <Stage>
      <div style={{position: 'absolute', inset: 0, opacity: sceneIn, scale: cameraScale, transformOrigin: '960px 560px'}}>
        <Img src={staticFile('assets-canon/vertical-transport/escalator-mechanism-v1.svg')} style={{position: 'absolute', left: 36, top: 54, width: 1848, height: 958, objectFit: 'contain'}} />

        <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible'}}>
          <path d="M455 762 L1217 410 C1270 386 1328 420 1327 474 C1327 510 1303 532 1268 549 L545 868 C477 900 397 856 411 800 C417 779 431 768 455 762 Z" fill="none" stroke={palette.ink} strokeWidth={22} opacity={chainDraw * 0.2} />
          <path d="M455 762 L1217 410 C1270 386 1328 420 1327 474 C1327 510 1303 532 1268 549 L545 868 C477 900 397 856 411 800 C417 779 431 768 455 762 Z" pathLength={1} fill="none" stroke={palette.mustard} strokeWidth={10} strokeDasharray={1} strokeDashoffset={1 - chainDraw} strokeLinecap="round" />
          <path d="M1228 548 L542 864" pathLength={1} fill="none" stroke="#FF8A1F" strokeWidth={14} strokeDasharray="0.045 0.025" strokeDashoffset={1 - returnRun} opacity={returnRun} />
        </svg>

        <Ring x={455} y={770} r={92} at={cue.loopingSprockets} until={cue.returningBeneath} />
        <Ring x={1317} y={435} r={82} at={cue.loopingSprockets + 10} until={cue.returningBeneath} />
        <Ring x={1180} y={575} r={70} at={cue.detectorsWatch} until={cue.switchesWatch} colour={palette.teal} />
        <Ring x={850} y={680} r={72} at={cue.switchesWatch} until={cue.brakesWait} colour={palette.teal} />
        <Ring x={1510} y={610} r={92} at={cue.brakesWait} until={cue.eachLayer} colour={palette.teal} />
        <Ring x={1180} y={575} r={62} at={cue.eachLayer} until={FIRST_ACT_END_FRAME} colour={palette.teal} />
        <Ring x={850} y={680} r={64} at={cue.eachLayer + 3} until={FIRST_ACT_END_FRAME} colour={palette.teal} />
        <Ring x={1510} y={610} r={80} at={cue.eachLayer + 6} until={FIRST_ACT_END_FRAME} colour={palette.teal} />
      </div>

      {frame < cue.stripAway + 12 ? (
        <>
          <div style={{position: 'absolute', left: -120, top: 0, width: 980, height: 1080, backgroundColor: palette.paperLight, clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)', translate: `${shellOut * -920}px 0px`}} />
          <div style={{position: 'absolute', right: -120, top: 0, width: 980, height: 1080, backgroundColor: palette.cutaway, clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)', translate: `${shellOut * 920}px 0px`}} />
          <div style={{position: 'absolute', left: 118, top: 116, fontFamily: 'Arial, sans-serif', opacity: 1 - shellOut}}>
            <div style={{fontSize: 24, fontWeight: 800, letterSpacing: 5, color: palette.inkMute}}>WHAT IT LOOKS LIKE</div>
            <div style={{fontSize: 86, fontWeight: 900, letterSpacing: -2}}>A STAIRCASE</div>
            <div style={{marginTop: 14, width: 410, height: 13, backgroundColor: palette.coral, scale: `${shellOut} 1`, transformOrigin: 'left center'}} />
          </div>
        </>
      ) : null}

      <FocusCard eyebrow="OUTER SHELL REMOVED" text="ONE CONTINUOUS CHAIN" at={cue.stripAway + 10} until={cue.loopingSprockets} colour={palette.mustard} />
      <FocusCard eyebrow="THE LOOP TURNS" text="TWO SPROCKETS" at={cue.loopingSprockets} until={cue.returningBeneath} colour={palette.mustard} />
      <FocusCard eyebrow="THE HIDDEN HALF" text="RETURN RUN · UPSIDE DOWN" at={cue.returningBeneath} until={cue.detectorsWatch} colour="#FF8A1F" />
      <FocusCard eyebrow="PROTECTION 01" text="DETECTOR WATCHES CHAIN" at={cue.detectorsWatch} until={cue.switchesWatch} colour={palette.teal} />
      <FocusCard eyebrow="PROTECTION 02" text="SWITCHES WATCH STEPS" at={cue.switchesWatch} until={cue.brakesWait} colour={palette.teal} />
      <FocusCard eyebrow="PROTECTION 03" text="BRAKES WATCH THE DRIVE" at={cue.brakesWait} until={cue.eachLayer} colour={palette.teal} />

      {overview > 0 ? (
        <div style={{position: 'absolute', left: 86, right: 86, bottom: 62, display: 'grid', gridTemplateColumns: '1.15fr repeat(3, 0.8fr)', gap: 14, opacity: overview * (1 - caseHandoff), translate: `0px ${(1 - overview) * 34}px`, fontFamily: 'Arial, sans-serif'}}>
          <div style={{padding: '22px 26px', backgroundColor: palette.ink, color: palette.paperLight}}>
            <div style={{fontSize: 19, fontWeight: 800, letterSpacing: 4}}>THE POINT</div>
            <div style={{fontSize: 43, fontWeight: 900, marginTop: 5}}>LAYERED PROTECTION</div>
          </div>
          {['CHAIN DETECTOR', 'STEP SWITCHES', 'DRIVE BRAKES'].map((text, index) => (
            <div key={text} style={{padding: '25px 19px', backgroundColor: index === 2 ? '#A8D93D' : palette.paperLight, borderTop: `10px solid ${palette.teal}`, color: palette.ink, fontSize: 25, fontWeight: 900, textAlign: 'center'}}>{text}</div>
          ))}
        </div>
      ) : null}

      {caseHandoff > 0 ? (
        <>
          <div style={{position: 'absolute', inset: 0, backgroundColor: palette.ink, opacity: caseHandoff * 0.9}} />
          <div style={{position: 'absolute', left: 92, right: 92, top: 134, bottom: 88, display: 'grid', gridTemplateColumns: '1fr 0.72fr', alignItems: 'end', borderTop: `14px solid #FF8A1F`, opacity: caseHandoff, translate: `0px ${(1 - caseHandoff) * 42}px`, fontFamily: 'Arial, sans-serif'}}>
            <div>
              <div style={{fontSize: 26, fontWeight: 800, letterSpacing: 8, color: '#FF8A1F'}}>CASE 01</div>
              <div style={{fontSize: 150, fontWeight: 900, lineHeight: 0.82, letterSpacing: -7, color: palette.paperLight, marginTop: 22}}>HONG<br />KONG</div>
            </div>
            <div style={{borderLeft: `6px solid ${palette.paperLight}`, paddingLeft: 42, paddingBottom: 10}}>
              <div style={{fontSize: 32, fontWeight: 800, letterSpacing: 7, color: palette.paperLight}}>MARCH</div>
              <div style={{fontSize: 134, fontWeight: 900, lineHeight: 0.9, color: '#FF8A1F'}}>2017</div>
            </div>
          </div>
        </>
      ) : null}
    </Stage>
  );
};
