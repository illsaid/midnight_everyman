import {Audio, Video} from '@remotion/media';
import {
  AbsoluteFill,
  Composition,
  Series,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {
  EPISODE_02_DURATION,
  EPISODE_02_FPS,
  EPISODE_02_VOICEOVER,
  GENERATED_PLATES_REVIEW_DURATION,
  lockedPlates,
  type LockedPlate,
} from './lockedPlates';
import {
  INCIDENT_REVERSAL_DURATION,
  IncidentReversalReview,
  IncidentReversalScene,
} from './IncidentReversalScene';
import {
  FAILURE_MAP_DURATION,
  FAILURE_MAP_FROM,
  FailureMapReview,
  FailureMapScene,
} from './FailureMapScene';
import {FailureMapV2Demo, FAILURE_MAP_V2_DEMO_DURATION} from './FailureMapV2Demo';
import {
  SkirtGapReview,
  SkirtGapScene,
  SKIRT_GAP_DURATION,
  SKIRT_GAP_FROM,
} from './SkirtGapScene';
import {EscalatorFirstActReview} from './first-act/FirstActReview';
import {FIRST_ACT_END_FRAME, FIRST_ACT_FPS} from './first-act/FirstActTiming';

const paper = '#eee6d5';
const ink = '#152b2b';
const reference = '#8f8a78';
const mustard = '#d5a84c';

const Plate: React.FC<{plate: LockedPlate}> = ({plate}) => {
  return (
    <AbsoluteFill style={{backgroundColor: paper}}>
      <div style={{position: 'absolute', top: 68, right: 0, bottom: 0, left: 0}}>
        <Video
          src={staticFile(plate.src)}
          muted
          objectFit="contain"
          style={{width: '100%', height: '100%'}}
        />
      </div>
    </AbsoluteFill>
  );
};

const ReviewFurniture: React.FC<{plate: LockedPlate; mode: 'assembly' | 'reel'}> = ({
  plate,
  mode,
}) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 68,
          padding: '0 28px',
          backgroundColor: ink,
          color: paper,
          fontFamily: 'Arial, sans-serif',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 2.2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>EPISODE 02 · {mode === 'assembly' ? 'ASSEMBLY SHELL' : 'LOCKED PLATE REVIEW'}</span>
        <span>{plate.id} · {plate.movement} · CUE {plate.cue} · {plate.label}</span>
      </div>
    </>
  );
};

const AssemblyPlaceholder: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = frame / EPISODE_02_DURATION;
  return (
    <AbsoluteFill
      style={{
        backgroundColor: paper,
        color: ink,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{fontSize: 32, fontWeight: 700, letterSpacing: 7}}>EPISODE 02 · ASSEMBLY SHELL</div>
      <div style={{marginTop: 18, color: reference, fontSize: 25, letterSpacing: 3}}>
        PROCEDURAL SCENES NOT YET BUILT
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: 8,
          width: `${progress * 100}%`,
          backgroundColor: mustard,
        }}
      />
    </AbsoluteFill>
  );
};

export const EscalatorEpisode02Assembly: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: paper}}>
      <Audio src={staticFile(EPISODE_02_VOICEOVER)} />
      <AssemblyPlaceholder />
      <Sequence
        name="M01 · incident reversal · cues 01–06"
        durationInFrames={INCIDENT_REVERSAL_DURATION}
        premountFor={EPISODE_02_FPS}
      >
        <IncidentReversalScene />
      </Sequence>
      <Sequence
        name="M02 · failure map · cues 07–13"
        from={FAILURE_MAP_FROM}
        durationInFrames={FAILURE_MAP_DURATION}
        premountFor={EPISODE_02_FPS}
      >
        <FailureMapScene />
      </Sequence>
      <Sequence
        name="M05 · skirt gap · cues 28–35"
        from={SKIRT_GAP_FROM}
        durationInFrames={SKIRT_GAP_DURATION}
        premountFor={EPISODE_02_FPS}
      >
        <SkirtGapScene />
      </Sequence>
      {lockedPlates.filter((plate) => plate.id !== 'G-01').map((plate) => (
        <Sequence
          key={plate.id}
          name={`${plate.id} · cue ${plate.cue} · ${plate.label}`}
          from={plate.from}
          durationInFrames={plate.durationInFrames}
          premountFor={EPISODE_02_FPS}
        >
          <Plate plate={plate} />
          <ReviewFurniture plate={plate} mode="assembly" />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const ReviewSegment: React.FC<{plate: LockedPlate}> = ({plate}) => {
  return (
    <AbsoluteFill style={{backgroundColor: paper}}>
      <Plate plate={plate} />
      <Audio
        src={staticFile(EPISODE_02_VOICEOVER)}
        trimBefore={plate.from}
        trimAfter={plate.from + plate.durationInFrames}
      />
      <ReviewFurniture plate={plate} mode="reel" />
    </AbsoluteFill>
  );
};

export const EscalatorGeneratedPlatesReview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: paper}}>
      <Series>
        {lockedPlates.map((plate) => (
          <Series.Sequence
            key={plate.id}
            name={`${plate.id} · cue ${plate.cue}`}
            durationInFrames={plate.durationInFrames}
            premountFor={EPISODE_02_FPS}
          >
            <ReviewSegment plate={plate} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};

const contactSheetSamples = lockedPlates.flatMap((plate) => [
  {plate, phase: 'ENTRY', sourceFrame: 0},
  {plate, phase: 'MID', sourceFrame: Math.floor((plate.durationInFrames - 1) / 2)},
  {plate, phase: 'EXIT', sourceFrame: plate.durationInFrames - 1},
]);

export const EscalatorGeneratedPlatesContactSheet: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: paper,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: 12,
        padding: 24,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {contactSheetSamples.map(({plate, phase, sourceFrame}) => (
        <div
          key={`${plate.id}-${phase}`}
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: ink,
            border: `3px solid ${ink}`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: '0 0 34px',
              padding: '0 10px',
              backgroundColor: paper,
              color: ink,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 1.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {plate.id} · CUE {plate.cue} · {phase} · F{sourceFrame}
          </div>
          <div style={{position: 'relative', flex: 1}}>
            <Video
              src={staticFile(plate.src)}
              muted
              trimBefore={sourceFrame}
              objectFit="contain"
              style={{width: '100%', height: '100%'}}
            />
          </div>
        </div>
      ))}
    </AbsoluteFill>
  );
};

export const EscalatorEpisode02Registration: React.FC = () => {
  return (
    <>
      <Composition
        id="EscalatorFirstActReview"
        component={EscalatorFirstActReview}
        durationInFrames={FIRST_ACT_END_FRAME}
        fps={FIRST_ACT_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="EscalatorEpisode02Assembly"
        component={EscalatorEpisode02Assembly}
        durationInFrames={EPISODE_02_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="EscalatorGeneratedPlatesReview"
        component={EscalatorGeneratedPlatesReview}
        durationInFrames={GENERATED_PLATES_REVIEW_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="EscalatorGeneratedPlatesContactSheet"
        component={EscalatorGeneratedPlatesContactSheet}
        durationInFrames={1}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="EscalatorM01IncidentReversalReview"
        component={IncidentReversalReview}
        durationInFrames={INCIDENT_REVERSAL_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="EscalatorM05SkirtGapReview"
        component={SkirtGapReview}
        durationInFrames={SKIRT_GAP_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="M05Silent"
        component={SkirtGapScene}
        durationInFrames={SKIRT_GAP_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="M02V2Demo"
        component={FailureMapV2Demo}
        durationInFrames={FAILURE_MAP_V2_DEMO_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="M02Silent"
        component={FailureMapScene}
        durationInFrames={FAILURE_MAP_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="EscalatorM02FailureMapReview"
        component={FailureMapReview}
        durationInFrames={FAILURE_MAP_DURATION}
        fps={EPISODE_02_FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
