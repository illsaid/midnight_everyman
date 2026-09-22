import {interpolate, useCurrentFrame} from 'remotion';
import {clamp, OUT, palette} from '../grammar';
import {cue} from './FirstActTiming';

const slots = [
  {city: ['HONG', 'KONG'], year: '2017', at: cue.hongKongSlot, tint: '#FF8A1F'},
  {city: ['ROME'], year: '2018', at: cue.romeSlot, tint: '#4D7CFE'},
  {city: ['MOSCOW'], year: '1982', at: cue.moscowSlot, tint: '#D65DB1'},
  {city: ['JINGZHOU'], year: '2015', at: cue.jingzhouSlot, tint: '#A8D93D'},
] as const;

export const IncidentSlotsScene: React.FC = () => {
  const frame = useCurrentFrame();
  if (frame < cue.stoppedAsDesigned || frame >= cue.escalatorLooksLikeStaircase) return null;

  const titleSwitch = interpolate(frame, [cue.hereAreFour, cue.hereAreFour + 8], [0, 1], {...clamp, easing: OUT});
  const verdictIn = interpolate(frame, [cue.fourRealAccidents, cue.fourRealAccidents + 9], [0, 1], {...clamp, easing: OUT});

  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: palette.ink, color: palette.paperLight}}>
      <div style={{position: 'absolute', left: 92, right: 92, top: 54, height: 118, fontFamily: 'Arial, sans-serif'}}>
        {verdictIn <= 0 ? (
          <div style={{display: 'flex', alignItems: 'center', gap: 22, opacity: 1 - verdictIn}}>
            <span style={{fontSize: 74, fontWeight: 900, letterSpacing: -1, opacity: 1 - titleSwitch}}>IT STOPPED.</span>
            <span style={{padding: '12px 20px', borderRadius: 40, backgroundColor: palette.teal, fontSize: 34, fontWeight: 900, letterSpacing: 2, opacity: 1 - titleSwitch}}>AS DESIGNED.</span>
            <span style={{position: 'absolute', left: 0, fontSize: 88, fontWeight: 900, letterSpacing: -2, opacity: titleSwitch, translate: `${(1 - titleSwitch) * -35}px 0px`}}>FOUR THAT DIDN’T.</span>
          </div>
        ) : null}
        {verdictIn > 0 ? (
          <div style={{display: 'grid', gridTemplateColumns: '1fr 8px 1fr', alignItems: 'center', gap: 30, opacity: verdictIn, translate: `0px ${(1 - verdictIn) * -26}px`}}>
            <div style={{fontSize: 76, fontWeight: 900, letterSpacing: -2, color: '#FF8A1F'}}>4 ACCIDENTS</div>
            <div style={{width: 8, height: 72, backgroundColor: palette.paperLight}} />
            <div style={{fontSize: 76, fontWeight: 900, letterSpacing: -2, color: '#A8D93D'}}>4 PROTECTIONS</div>
          </div>
        ) : null}
      </div>

      <div style={{position: 'absolute', left: 92, right: 92, top: 194, bottom: 72, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 26}}>
        {slots.map((slot, index) => {
          const progress = interpolate(frame, [slot.at - 3, slot.at + 7], [0, 1], {...clamp, easing: OUT});
          const nextAt = slots[index + 1]?.at ?? cue.fourRealAccidents;
          const isActive = frame >= slot.at && frame < nextAt;
          const bump = interpolate(frame, [slot.at - 3, slot.at + 5, slot.at + 10], [1, 1.035, 1], {...clamp, easing: OUT, output: 'perceptual-scale'});
          return (
            <div key={slot.year} style={{position: 'relative', overflow: 'hidden', borderRadius: 170, border: `5px solid ${slot.tint}`, backgroundColor: '#151714', scale: isActive ? bump : 1, opacity: progress === 0 ? 0.62 : isActive ? 1 : 0.82}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 20, height: 22, borderRadius: 30, backgroundColor: slot.tint, opacity: 0.95}} />
              <div style={{position: 'absolute', left: 31, top: 60, fontFamily: 'Arial, sans-serif', fontSize: 19, fontWeight: 900, letterSpacing: 5, color: progress > 0.2 ? palette.ink : slot.tint}}>CASE 0{index + 1}</div>
              <div style={{position: 'absolute', inset: 0, backgroundColor: slot.tint, translate: `0 ${interpolate(progress, [0, 1], ['100%', '0%'])}`}} />
              <div style={{position: 'absolute', inset: '128px 22px 130px', display: 'flex', flexDirection: 'column', justifyContent: 'center', opacity: progress, color: palette.ink, fontFamily: 'Arial Black, Arial, sans-serif', textAlign: 'center'}}>
                {slot.city.map((line) => <div key={line} style={{fontSize: line.length > 7 ? 49 : 66, fontWeight: 900, letterSpacing: -2, lineHeight: 0.9}}>{line}</div>)}
              </div>
              <div style={{position: 'absolute', left: 0, right: 0, bottom: 74, opacity: progress, translate: `0px ${(1 - progress) * 80}px`, color: palette.ink, fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 96, fontWeight: 900, letterSpacing: -5, textAlign: 'center'}}>{slot.year}</div>
              <div style={{position: 'absolute', left: 26, right: 26, bottom: 28, height: 18, borderRadius: 30, backgroundColor: progress > 0.5 ? palette.ink : slot.tint}} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
