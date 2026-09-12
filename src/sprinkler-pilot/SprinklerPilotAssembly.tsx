import {AbsoluteFill, Composition, Img, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {Audio, Video} from '@remotion/media';
import {cues} from './cues';
import {Placeholder} from './Placeholder';
import {production} from './production';
import {FourPartsScene} from './FourPartsScene';
import {ActivationScene} from './ActivationScene';
import {TwoHeadsScene} from './TwoHeadsScene';
import {CeilingRevealScene} from './CeilingRevealScene';
import {IndependenceScene} from './IndependenceScene';
import {PipeScene} from './PipeScene';
import {ReplacementScene} from './ReplacementScene';
import {WaitingHeadsScene} from './WaitingHeadsScene';
import {MovieMythReview, MovieMythScene} from './MovieMythScene';
import {TriggerBridgeReview, TriggerBridgeScene} from './TriggerBridgeScene';
import {HeatNotSmokeReview, HeatNotSmokeScene} from './HeatNotSmokeScene';
import {MechanismRecapReview, MechanismRecapScene} from './MechanismRecapScene';
import {ColourCodeReview, ColourCodeScene} from './ColourCodeScene';
import {JudgementReview, JudgementScene} from './JudgementScene';
import {ClosingReview, ClosingScene} from './ClosingScene';
import {HG04Review, HG04Scene} from './HG04Scene';
import {HG05Review, HG05Scene} from './HG05Scene';
import {HG06Review, HG06Scene} from './HG06Scene';
import {M05TexturePrototypeReview, TEXTURE_PROTOTYPE_DURATION} from './TexturePrototypeReview';

/** Procedural scenes, keyed by the manifest's `component` field. */
const components: Record<string, React.FC<{startFrame: number}>> = {
  'four-parts': FourPartsScene,
  activation: ActivationScene,
  'two-heads': TwoHeadsScene,
  'ceiling-reveal': CeilingRevealScene,
  independence: IndependenceScene,
  pipe: PipeScene,
  replacement: ReplacementScene,
  'waiting-heads': WaitingHeadsScene,
  'movie-myth': () => <MovieMythScene />,
  hg04: () => <HG04Scene />,
  hg05: () => <HG05Scene />,
  'trigger-bridge': () => <TriggerBridgeScene />,
  hg06: () => <HG06Scene />,
  'heat-not-smoke': () => <HeatNotSmokeScene />,
  'mechanism-recap': () => <MechanismRecapScene />,
  'colour-code': () => <ColourCodeScene />,
  judgement: () => <JudgementScene />,
  closing: () => <ClosingScene />,
};

const SprinklerPilotContent: React.FC<{showReviewOverlay: boolean}> = ({showReviewOverlay}) => {
  const frame = useCurrentFrame();
  const current = cues.find((cue) => frame >= Number(cue.f_in) && frame < Number(cue.f_out));
  const seconds = Math.floor(frame / 24);
  const active = production.placements.find(p => frame >= p.from && frame < p.from+p.duration);
  return <AbsoluteFill style={{backgroundColor: '#eee6d5', fontFamily: 'Arial, sans-serif'}}>
    <Audio src={staticFile(production.voiceover)} />
    {cues.map((cue) => {
      return <Sequence key={cue.cue} name={`${cue.cue} ${cue.source_id || 'Remotion'} — ${cue.description}`} from={Number(cue.f_in)} durationInFrames={Number(cue.f_out) - Number(cue.f_in)}>
        <Placeholder cue={cue} />
      </Sequence>;
    })}
    {production.placements.map(p => <Sequence key={p.id} name={p.id} from={p.from} durationInFrames={p.duration}>
      {p.kind === 'video' ? <Video src={staticFile(p.src!)} muted trimBefore={p.sourceStart} playbackRate={p.playbackRate} objectFit={p.crop} style={{width:'100%',height:'100%',objectPosition:`${p.focalPoint?.[0]}% ${p.focalPoint?.[1]}%`}}/> : p.kind === 'image' ? <AbsoluteFill><Img src={staticFile(p.src!)} style={{width:'100%',height:'100%',objectFit:'cover'}}/><div style={{position:'absolute',bottom:40,left:48,background:'#152b2bea',color:'#fff',padding:20,fontSize:30}}>APPROVED START FRAME — MOTION PENDING</div></AbsoluteFill> : (() => {
        const Scene = components[p.component!] ?? FourPartsScene;
        return <Scene startFrame={p.from} />;
      })()}
    </Sequence>)}
    {showReviewOverlay ? <>
      <div style={{position: 'absolute', top: 30, left: 48, right: 48, display: 'flex', justifyContent: 'space-between', fontSize: 25, color: '#fff', textShadow: '0 2px 5px #000', background: '#152b2be0', padding: '12px 20px'}}>
        <span>SPRINKLER / FULL ASSEMBLY REVIEW · {current?.movement} · CUE {current?.cue}</span>
        <span>{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}:{String(frame % 24).padStart(2, '0')} · {active?.status === 'approved' ? 'APPROVED SCENE' : active ? 'SCENE REVIEW' : 'PLACEHOLDER'}</span>
      </div>
      <div style={{position: 'absolute', bottom: 0, height: 6, background: '#c48132', width: `${frame / production.durationInFrames * 100}%`}} />
    </> : null}
  </AbsoluteFill>;
};

export const SprinklerPilotAssembly: React.FC = () => <SprinklerPilotContent showReviewOverlay />;
export const SprinklerPilotMaster: React.FC = () => <SprinklerPilotContent showReviewOverlay={false} />;

export const SprinklerAssemblyRegistration: React.FC = () => <>
  <Composition id="SprinklerPilotAssembly" component={SprinklerPilotAssembly} durationInFrames={production.durationInFrames} fps={production.fps} width={production.width} height={production.height} />
  <Composition id="SprinklerPilotMaster" component={SprinklerPilotMaster} durationInFrames={production.durationInFrames} fps={production.fps} width={production.width} height={production.height} />
  <Composition id="MovieMythReview" component={MovieMythReview} durationInFrames={117} fps={24} width={1920} height={1080}/>
  <Composition id="TriggerBridgeReview" component={TriggerBridgeReview} durationInFrames={66} fps={24} width={1920} height={1080}/>
  <Composition id="HeatNotSmokeReview" component={HeatNotSmokeReview} durationInFrames={211} fps={24} width={1920} height={1080}/>
  <Composition id="MechanismRecapReview" component={MechanismRecapReview} durationInFrames={330} fps={24} width={1920} height={1080}/>
  <Composition id="ColourCodeReview" component={ColourCodeReview} durationInFrames={550} fps={24} width={1920} height={1080}/>
  <Composition id="JudgementReview" component={JudgementReview} durationInFrames={606} fps={24} width={1920} height={1080}/>
  <Composition id="ClosingReview" component={ClosingReview} durationInFrames={216} fps={24} width={1920} height={1080}/>
  <Composition id="HG04Review" component={HG04Review} durationInFrames={240} fps={24} width={1920} height={1080}/>
  <Composition id="HG05Review" component={HG05Review} durationInFrames={191} fps={24} width={1920} height={1080}/>
  <Composition id="HG06Review" component={HG06Review} durationInFrames={102} fps={24} width={1920} height={1080}/>
  <Composition id="M05TexturePrototypeReview" component={M05TexturePrototypeReview} durationInFrames={TEXTURE_PROTOTYPE_DURATION} fps={24} width={1920} height={1080}/>
</>;
