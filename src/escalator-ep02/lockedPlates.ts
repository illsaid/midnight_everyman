export type LockedPlate = {
  id: 'G-01' | 'G-02' | 'G-03' | 'G-04';
  cue: '03' | '21' | '36' | '67';
  from: number;
  durationInFrames: number;
  sourceFrames: number;
  src: string;
  label: string;
  movement: string;
};

export const EPISODE_02_FPS = 24;
export const EPISODE_02_DURATION = 7322;
export const EPISODE_02_VOICEOVER = 'voiceover/episode-02/escalator-vo-v1.mp3';

export const lockedPlates: readonly LockedPlate[] = [
  {
    id: 'G-01',
    cue: '03',
    from: 186,
    durationInFrames: 93,
    sourceFrames: 143,
    src: 'episode-02/generated/g01-clean-0-142.mp4',
    label: 'INCIDENT SETUP',
    movement: 'M01',
  },
  {
    id: 'G-02',
    cue: '21',
    from: 1845,
    durationInFrames: 102,
    sourceFrames: 102,
    src: 'episode-02/generated/g02-cue21-102f.mp4',
    label: 'LACE APPROACH',
    movement: 'M04',
  },
  {
    id: 'G-03',
    cue: '36',
    from: 3582,
    durationInFrames: 79,
    sourceFrames: 79,
    src: 'episode-02/generated/g03-cue36-79f.mp4',
    label: 'RIDER SETUP',
    movement: 'M06',
  },
  {
    id: 'G-04',
    cue: '67',
    from: 6615,
    durationInFrames: 97,
    sourceFrames: 97,
    src: 'episode-02/generated/g04-cue67-97f.mp4',
    label: 'ORDINARY RIDE',
    movement: 'M11',
  },
] as const;

export const GENERATED_PLATES_REVIEW_DURATION = lockedPlates.reduce(
  (sum, plate) => sum + plate.durationInFrames,
  0,
);
