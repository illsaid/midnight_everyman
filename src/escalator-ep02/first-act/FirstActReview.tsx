import {Audio, Video} from '@remotion/media';
import {AbsoluteFill, CanvasImage, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {clamp, OUT, palette} from '../grammar';
import {EscalatorCutawayScene} from './EscalatorCutawayScene';
import {IncidentSlotsScene} from './IncidentSlotsScene';
import {
  cue,
  FIRST_ACT_END_FRAME,
  MAIN_VO_TRIM_BEFORE_FRAMES,
  OPENING_REDO_FRAMES,
  openingCue,
} from './FirstActTiming';

const openingCards = [
  {from: openingCue.cameraman, to: openingCue.safetyMechanism, eyebrow: 'AHEAD OF THE DELEGATION', text: 'CAMERAMAN', colour: '#4D7CFE'},
  {from: openingCue.safetyMechanism, to: openingCue.immediateHalt, eyebrow: 'TOP LANDING', text: 'SAFETY MECHANISM', colour: '#27B5A9'},
  {from: openingCue.immediateHalt, to: openingCue.sabotage, eyebrow: 'EXPECTED RESPONSE', text: 'IMMEDIATE HALT', colour: palette.teal},
  {from: openingCue.sabotage, to: openingCue.machineDanger, eyebrow: 'TRUMP CALLED IT', text: 'SABOTAGE?', colour: '#FF5B45'},
  {from: openingCue.machineDanger, to: OPENING_REDO_FRAMES, eyebrow: 'THE MACHINE READ', text: 'DANGER', colour: '#FF7A1A'},
] as const;

const OpeningRedo: React.FC = () => {
  const frame = useCurrentFrame();
  const sourceFrame = Math.min(frame, OPENING_REDO_FRAMES - 1);
  const filename = `frame-${String(sourceFrame).padStart(4, '0')}.jpg`;

  return (
    <AbsoluteFill style={{backgroundColor: palette.ink}}>
      <CanvasImage
        src={staticFile(`episode-02/first-act/opening-redo-frames/${filename}`)}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
      <Audio src={staticFile('episode-02/first-act/opening-redo-audio.wav')} />
    </AbsoluteFill>
  );
};

const OpeningOverlays: React.FC = () => {
  const frame = useCurrentFrame();
  if (frame >= OPENING_REDO_FRAMES) return null;
  const card = openingCards.find(({from, to}) => frame >= from && frame < to);
  if (!card) return null;
  const inProgress = interpolate(frame, [card.from, card.from + 8], [0, 1], {...clamp, easing: OUT});
  const outProgress = interpolate(frame, [card.to - 6, card.to], [1, 0], {...clamp, easing: OUT});
  const visibility = Math.min(inProgress, outProgress);
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: 94,
          top: 92,
          minWidth: 590,
          padding: '20px 28px 24px 34px',
          backgroundColor: palette.paperLight,
          color: palette.ink,
          borderLeft: `14px solid ${card.colour}`,
          opacity: visibility,
          translate: `${(1 - inProgress) * -46}px 0px`,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{fontSize: 19, fontWeight: 800, letterSpacing: 5.2, color: palette.inkMute}}>{card.eyebrow}</div>
        <div style={{fontSize: card.text === 'SAFETY MECHANISM' ? 54 : 66, fontWeight: 900, letterSpacing: -1, lineHeight: 0.98, marginTop: 8}}>{card.text}</div>
      </div>
      <div style={{position: 'absolute', right: 92, top: 92, display: 'flex', gap: 9}}>
        {openingCards.map((item) => (
          <div key={item.text} style={{width: frame >= item.from ? 58 : 22, height: 10, borderRadius: 20, backgroundColor: frame >= item.from ? item.colour : 'rgba(247,240,222,0.45)'}} />
        ))}
      </div>
    </>
  );
};

const EverymanBridge: React.FC = () => {
  const frame = useCurrentFrame();
  const chainAt = cue.bicycleChain - cue.escalatorLooksLikeStaircase;
  const chainIn = interpolate(frame, [chainAt, chainAt + 8], [0, 1], {...clamp, easing: OUT});
  return (
    <AbsoluteFill style={{backgroundColor: palette.paper}}>
      <Video src={staticFile('episode-02/first-act/everyman-bridge.mp4')} muted objectFit="cover" style={{width: '100%', height: '100%'}} />
      <div style={{position: 'absolute', left: 88, top: 88, padding: '17px 24px', backgroundColor: palette.paperLight, borderLeft: `12px solid ${palette.ink}`, fontFamily: 'Arial, sans-serif', fontSize: 31, fontWeight: 900, letterSpacing: 3}}>LOOKS LIKE STAIRS</div>
      {chainIn > 0 ? (
        <div style={{position: 'absolute', right: 90, bottom: 88, padding: '20px 28px', backgroundColor: palette.mustard, color: palette.ink, opacity: chainIn, translate: `${(1 - chainIn) * 42}px 0px`, fontFamily: 'Arial, sans-serif', fontSize: 46, fontWeight: 900, letterSpacing: 1}}>
          ACTUALLY: A CHAIN →
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

export const EscalatorFirstActReview: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: palette.paper}}>
    <Sequence durationInFrames={OPENING_REDO_FRAMES} layout="none">
      <OpeningRedo />
    </Sequence>
    <OpeningOverlays />
    <Sequence from={OPENING_REDO_FRAMES} durationInFrames={FIRST_ACT_END_FRAME - OPENING_REDO_FRAMES} layout="none">
      <Audio src={staticFile('episode-02/first-act/voiceover.mp3')} trimBefore={MAIN_VO_TRIM_BEFORE_FRAMES} />
    </Sequence>
    <IncidentSlotsScene />
    <Sequence from={cue.escalatorLooksLikeStaircase} durationInFrames={cue.stripAway - cue.escalatorLooksLikeStaircase} layout="none">
      <EverymanBridge />
    </Sequence>
    <EscalatorCutawayScene />
  </AbsoluteFill>
);
