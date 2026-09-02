# Performance plate 01 - generation brief

## Deliverable

One 3-4 second, locked-camera character performance:

**Observer reaches toward an extinguisher, realizes the mistake before contact, abruptly stops and recoils.**

Generate four candidates only. Select the strongest candidate against the criteria below before doing any cleanup.

## Input references

Render these Remotion stills first:

- `ObserverPerformanceStartReference` - identity and entry state
- `ObserverPerformanceEndReference` - identity and exit state

Use both as start/end references when the video model supports them. If it supports only one reference image, use the start reference and attach the end reference as a visual style/character reference if possible.

## Generation prompt

```text
Locked-off full-body character animation on a perfectly flat #00B140 green background. The same slim, balding midcentury everyman from the reference: egg-shaped head, sparse black hair, long rounded nose, tiny economical facial marks, teal jacket, white shirt, black narrow tie, coral trousers and black shoes. Preserve his exact proportions, costume, colors and simple dark linework.

He begins upright and attentive in the reference pose, facing screen-right. He notices something off-screen to the right and makes one quick, impulsive reach toward it. His weight shifts forward and the reaching hand leads. Just before touching it, recognition interrupts the motion: the hand stops sharply, the torso catches up, then he recoils backward, raises a stopping hand and settles into the supplied end pose. The change of mind must read clearly without dialogue. One action only. Economical 1950s limited commercial television animation, flat cel color, graphic silhouette, slightly held timing, strong anticipation and follow-through.

Camera and framing never move. Keep the complete figure visible at all times. Feet remain near the same floor line. Character fills about 82 percent of frame height and his feet land at 92 percent of frame height. No prop is visible and no contact occurs.
```

## Negative prompt

```text
No camera move, zoom, pan, cut, reframing, crop, floor, shadow, reflection, background object, extinguisher, text, caption, logo, scenery, gradient or green clothing. No style change, costume change, added detail, facial redesign, morphing, rubber limbs, disconnected joints, duplicate limbs, extra fingers, missing fingers, foot sliding, floating, flicker, texture crawl or line-weight drift. Do not turn the character around and do not move him out of frame.
```

## Acquisition specification

| Parameter | Target |
|---|---|
| Canvas | 1920 x 1080, 16:9 |
| Duration | 3-4 seconds |
| Frame rate | 24 fps preferred; preserve native rate if the model fixes it |
| Camera | Locked |
| Background | Solid `#00B140`, no gradient or shadow |
| Figure height | Approximately 82% of frame |
| Foot baseline | Approximately 92% of frame height |
| Facing | Screen-right |
| Audio | None required |
| Attempts | Four candidates, then select |

Do not ask the generator to draw the extinguisher. Object contact is deliberately excluded from Sprint 1 so identity, body mechanics, matte and registration can be judged independently.

## Selection order

1. Same Observer identity throughout.
2. The reach-stop-recoil reads without narration.
3. Weight shift and interruption are materially better than the three-cel baseline.
4. No crop, camera drift or floor drift.
5. Clean, even green field and minimal green contamination.
6. Stable hands, face, jacket hem and trouser silhouette.

Reject any candidate requiring frame-by-frame repair. That violates the eight-hour production target even if individual frames look good.

## Drop-in and comparison

1. Save the selected unkeyed file as `public/performance/incoming/observer-reach-stop-recoil-green-v1.mp4`.
2. Open `PerformancePlateExperiment` in Remotion Studio.
3. Set `clip` to `performance/incoming/observer-reach-stop-recoil-green-v1.mp4`.
4. Compare pass A (three cels) with pass B (keyed performance) at identical room scale and baseline.
5. Record attempts, generation time, selection time, integration time, identity defects and matte defects in `experiment-log.md`.

The Sprint 1 wrapper keys the acquisition at render time only for evaluation. If the plate passes, normalize it once into a transparent production asset and stop re-keying it in episode compositions.
