# M02 — dynamism pass

Date: 2026-09-16 · Author: Claude (integration owner) · Scene: `src/escalator-ep02/FailureMapScene.tsx`
Trigger: owner note — *"it could use a little more style, dynamism... I just worry about this not be exciting enough for humans."*

## The finding

The owner note is correct, and the cause is my error, not a taste question.

I measured the built scene with the Pilot 01 method (ffmpeg → 192×108 gray → mean absolute
inter-frame delta; <0.35 = static; dead run = ≥48 frames):

| | as built | after this pass |
|---|---|---|
| static frames | **77%** (492/635) | **48%** (303/635) |
| frames inside a dead run | 42% | 0% |
| dead runs ≥48f | 4 (51, 53, 98, 67) | **none** |
| longest still stretch anywhere | 98f (4.1s) | 36f (1.5s) |
| mean delta | 1.05 | 1.40 |

Pilot 01's documented failure baseline was 70% static. **M02 as built was worse than the
thing we wrote the rule to prevent**, and I shipped it to contact sheet without measuring.

### Root cause: every ambient motion I wrote was sub-pixel per frame

The scene was not static by design. It was static by *rate*.

- `Drift` moved the stage 6px over a whole cue — 0.11 px/frame. Invisible.
- `useBoil` displaced contours by 0.7px on a 1920px frame. Invisible.
- Cue 10's push (1 → 1.28 over 96 frames) used `Easing.bezier(0.16, 1, 0.3, 1)`, which
  reaches 85% of its travel by frame 30 and then crawls for 66 frames. That eased tail is
  the 98-frame dead run, and it was sitting directly on the scene's payoff.

A camera move that travels less than roughly 1px per frame does not exist on screen. Stills
cannot show this, which is why the contact sheets looked fine.

### Second finding: cue 07 and cue 10 were staging problems, not motion problems

- **Cue 07** held 0.7% ink coverage for 2.25s — a headline and two ghost circles on empty cream.
  No camera move rescues an empty frame.
- **Cue 10** drew the nut at 16% of frame height. The line is *"one nut"*; it was staged as a
  small icon in an empty room.

## What changed

Each item is bounded and carries information (D-022), and each is checked against
`visual-language.md` — *"camera moves to change emphasis, not to disguise weak staging"* and the
ban on *"arbitrary zooms or bounce effects without narrative function."*

| Cue | Change | What it means |
|---|---|---|
| 07 | Camera pulls back 1.07→1.0; the two numbered positions stamp in one at a time with the spine drawing between them; `NOT ONE` withheld to f40 | The frame widens from one failure to two. You count them as they land. |
| 08 | Push 1.0→1.038 toward the chain run; 4-frame displacement at the snap (f17–26) | The break has weight. |
| 09 | Camera rides the warning signal down its path, then **parks at f46 and stops dead**; withdraws from f64 | The camera stops. The device never starts. The stillness is the beat. |
| 10 | Push made **linear** and run full-length; nut grows 0.55→2.3 (16%→~36% of frame height); 7.5° of turn across the cue; ghost diagram fades to 0.07 | The nut owns the frame. The turn is the object being examined. |
| 11 | Camera drifts after the filed card and past the slot | Follows the thing being set aside. |
| 12 | Vertical track + each card scales up 3.5% as its concealed device is named | Emphasis moves card to card with the VO. |
| 13 | Unchanged — already at 7.0 mean, 5% static | — |
| all | `useBoil` 0.7px → 2.1px, stepped at 12fps; paper grain reseats every second frame | Drawn contour and rostrum-shot paper, per the house line quality. |

### `@remotion/transitions`

Cue joins were hard cuts. They are now `TransitionSeries` dissolves.

**The frame lock is preserved exactly.** `TransitionSeries` shortens a timeline by the length of
each transition, which would slide every cue off the locked VO. Each sequence therefore carries
`OVERLAP` extra frames that the following transition consumes:

```
sequence duration = cue length + duration of the transition that follows it
```

Verified: cue starts land on 0 / 54 / 111 / 207 / 315 / 373 / 538 and the scene totals 636.
Joins are 6-frame fades, except 10→11 (`LATER`, the one jump in time) which is a 12-frame dissolve.

### `@remotion/effects` — not used, and why

The package is installed. Its effects are WebGL2 and need
`Config.setChromiumOpenGlRenderer('angle')` set project-wide. I cannot verify a render-pipeline
change on your machine — device_bash is a Linux VM and `node_modules` is a Windows install, so I
can only render in a cloud clone. Changing the global renderer config on work I can't test on the
box that ships it is not a trade I should make unilaterally. The living paper grain is done with a
stepped CSS `background-position` instead, which gets the same result with no pipeline risk.

**Open for you:** whether to switch the project to the ANGLE renderer and open up `@remotion/effects`
(`paper()`, `halftone()`, `vignette()`, `roughenEdges()`) for the remaining scenes.

### Rejected: `clockWipe` on the LATER jump

I tried it — a clock hand sweeping the frame is literally elapsed time. It rendered as a hard
white wedge crossing the nut and reads as a glitch, not a cut. Dropped for a 12-frame dissolve.
The `LATER` headline carries the time jump; the transition doesn't have to.

## Two defects I introduced and fixed in this pass

1. Titles riding the camera. At f111 the `1 · DRIVE CHAIN` headline measured **−3px** — off the
   left edge. Titles are now overlays everywhere except cue 07, where the camera is a pull-back
   and can never push content out.
2. Camera pushes driving the diagram into the outer 3% of frame: 244 frames at peak. Now 17
   frames at ≤24px (at 480×270 analysis), all in cues 08/09. Cue 13's 98 frames are the
   full-bleed tread and are correct.

## Proposed amendment to `docs/02-creative/diagram-layer.md`

Not applied — this changes a shared authority doc and is your call.

> **Motion rate floor.** A camera move, drift or boil must displace its subject by at least
> 1px per frame at 1920×1080 for its entire span, or it does not exist on screen. Ease-out
> curves fail this test in their tail: use linear timing for any move that has to carry a hold.
> Measure before approving — stills cannot show a rate failure.

## Verification

- `tsc` and `eslint` clean (cloud clone, identical package versions: Remotion 4.0.509).
- 636 frames rendered and measured; per-cue deltas above.
- Cue timing arithmetic verified against the locked cue table.
- Safe-margin sweep run on before and after.
- Not verified: render on your machine. Windows `node_modules` cannot be driven from this side.

## Files

- `src/escalator-ep02/FailureMapScene.tsx` — updated (also reformatted to the repo's prettier settings, which inflates the line count).
- `work/hidden-systems-ep-02/assembly-review/m02-before-after.mp4` — split screen with VO.
- `work/hidden-systems-ep-02/assembly-review/m02-dynamism-v1.mp4` — the pass alone with VO.
