import {Composition, Folder} from 'remotion';
import {
  SKIRT_GAP_V2_DURATION,
  SkirtGapSceneV2,
  SkirtGapV2Review,
} from './SkirtGapSceneV2';

export const SkirtGapV2Registration: React.FC = () => (
  <Folder name="Episode-02-M05-V2-review">
    <Composition
      id="EscalatorM05SkirtGapV2Review"
      component={SkirtGapV2Review}
      durationInFrames={SKIRT_GAP_V2_DURATION}
      fps={24}
      width={1920}
      height={1080}
    />
    <Composition
      id="EscalatorM05SkirtGapV2Silent"
      component={SkirtGapSceneV2}
      durationInFrames={SKIRT_GAP_V2_DURATION}
      fps={24}
      width={1920}
      height={1080}
    />
  </Folder>
);
