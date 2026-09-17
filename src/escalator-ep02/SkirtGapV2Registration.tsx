import {Composition, Folder} from 'remotion';
import {
  SKIRT_GAP_V2_DURATION,
  SkirtGapSceneV2,
  SkirtGapV2Review,
} from './SkirtGapSceneV2';
import {
  BRUSH_SHORT_916_DURATION,
  BrushShort916,
  BrushShort916SafeReview,
} from './BrushShort916';

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
    <Composition
      id="EscalatorBrushShort916"
      component={BrushShort916}
      durationInFrames={BRUSH_SHORT_916_DURATION}
      fps={24}
      width={1080}
      height={1920}
    />
    <Composition
      id="EscalatorBrushShort916SafeReview"
      component={BrushShort916SafeReview}
      durationInFrames={BRUSH_SHORT_916_DURATION}
      fps={24}
      width={1080}
      height={1920}
    />
  </Folder>
);
