# Escalator brush Short

Status: **full-resolution review candidate; owner approval pending**.

## Authority

- Composition: `EscalatorBrushShort916`
- Safe-area composition: `EscalatorBrushShort916SafeReview`
- Source: `src/escalator-ep02/BrushShort916.tsx`
- VO: `public/voiceover/episode-02/brush-short-vo-v2.mp3`
- Review render: `assembly-review/brush-short-916-v2-review.mp4`
- Format: 1080 x 1920, 24 fps, 830 frames, 34.624 seconds rendered

The large MP4 and MP3 assets remain local. Git tracks this timing map, the
composition source and the VO lock record.

## Picture map

| Frames | Time | Treatment | Purpose |
|---:|---:|---|---|
| 0-73 | 0:00-0:03.08 | G-01 generated plate | Hook: the brushes are not shoe cleaners |
| 74-195 | 0:03.08-0:08.17 | G-06 generated punch-in | Reveal the moving-step / fixed-panel clearance |
| 196-280 | 0:08.17-0:11.71 | G-03 generated plate | Loose fabric and deformable-object beat |
| 281-374 | 0:11.71-0:15.63 | G-02 generated plate | Establish the fixed ankle-height brush |
| 375-424 | 0:15.63-0:17.71 | G-04 generated plate + strikeout | Reject the shoe-cleaner interpretation |
| 425-489 | 0:17.71-0:20.42 | G-02 contact excerpt | Brush contacts first |
| 490-573 | 0:20.42-0:23.92 | G-05 generated plate | Foot moves inward |
| 574-731 | 0:23.92-0:30.50 | Deterministic Remotion | Obstruction, earned teal trip and stop |
| 732-829 | 0:30.50-0:34.58 | Deterministic Remotion | Warning / apology payoff |

Generated source audio is muted. The source clips are 720 x 1264 and are
cover-fitted to 9:16 with a negligible horizontal crop. The switch remains
deterministic because generated footage must not invent the hidden mechanism.

## Verification

- `npm run lint`: pass
- `npm run build`: pass
- Safe-area stills checked at frames 12, 620 and 790
- Twelve-frame contact sheet checked across the complete render
- Final stream check: H.264 1080 x 1920 at 24 fps; stereo AAC at 48 kHz

No footage is promoted beyond candidate status until the owner watches the
review render with the tightened VO.
