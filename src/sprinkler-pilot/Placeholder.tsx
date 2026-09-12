import {AbsoluteFill} from 'remotion';
import {cues} from './cues';

export const Placeholder: React.FC<{cue: (typeof cues)[number]}> = ({cue}) => {
  const generated = Boolean(cue.source_id);
  return <AbsoluteFill style={{padding: '160px 130px 110px', color: generated ? '#eee6d5' : '#153d3c', backgroundColor: generated ? '#153d3c' : '#eee6d5'}}>
    <div style={{fontSize: 32, letterSpacing: 4, color: generated ? '#e4ab58' : '#96632d', marginBottom: 35}}>{generated ? `${cue.source_id} / FLUX3 FOOTAGE PENDING` : 'REMOTION GRAPHICS PENDING'}</div>
    <div style={{fontSize: cue.description.length > 150 ? 48 : 60, lineHeight: 1.16, maxWidth: 1600, fontWeight: 700}}>{cue.description}</div>
    {cue.onscreen && <div style={{fontSize: 42, marginTop: 28, opacity: 0.8}}>Planned text: {cue.onscreen}</div>}
    <div style={{marginTop: 'auto', borderTop: '2px solid currentColor', paddingTop: 26, fontSize: 35, lineHeight: 1.3}}>{cue.vo}</div>
    <div style={{fontSize: 23, marginTop: 22, opacity: 0.65}}>Word-aligned timing · {cue.treatment} · No finished animation in this placeholder</div>
  </AbsoluteFill>;
};
