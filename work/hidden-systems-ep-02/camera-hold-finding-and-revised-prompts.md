# The model ignores camera instructions — three for three

Measured across G-01, G-02 and G-03, 15 Sep 2026.

## The pattern

| Unit | What the prompt said | What happened |
|---|---|---|
| G-01 | "Locked off. No move at all." | Pushed in through 0–6 s, then cut to a new shot (delta 32.15 at f150) |
| G-02 | "Macro, static framing." / "Locked off." | Framing unstable for the first 1.5 s, then settled |
| G-03 | "Very slow push in, no more than five percent over the ten seconds." | Pushed in until **the head was clipped by the top frame edge from f84 to f136** |

Three generations, three camera instructions ignored. Negations ("no move") and
magnitude limits ("no more than five percent") are not being honoured.

## The fix — describe the invariant, not the instrument

Stop giving camera directions. Describe an **observable end state** instead, in
terms of what is true of the last frame compared with the first. These models
honour outcome descriptions considerably better than instrument directions.

Replace this:

> Camera: locked off. No move at all. Very slow push in, no more than five percent.

With this:

> The final frame has exactly the same framing as the first frame. The man is the
> same size in frame at the end as at the beginning. His whole head stays well
> clear of the top edge throughout, with visible space above it in every frame.
> Nothing approaches or recedes. Only the people and the escalator move.

Add to the shared negative prompt:

```
push in, pull out, zoom, crop change, reframing, subject growing larger,
subject filling frame, head cropped, cropped at top edge
```

## G-03 — measured result

| frames | head-top row (of 180) | verdict |
|---|---|---|
| 0–51 | 12 → 6 | usable, creeping |
| 52–83 | 5 → 2 | too tight |
| **84–136** | **1 → 0** | **head clipped by the frame edge** |
| 137–144 | 61 → 63 | hard pull-back |

**52 usable frames = 2.17 s.** Cue 36 alone needs 79 frames (3.29 s).

Two salvage files are in `generated/`:

- `g03-salvage-0-51.mp4` — the clean 52 frames as generated
- `g03-salvage-slowed-79f.mp4` — the same, at 0.66× to fill cue 36 exactly

The slow version is viable — it is already a gentle ride, and the house grammar
favours held, stepped timing — but it is a patch, not a result.

**A second attempt is justified here**, unlike G-01 and G-02. The failure has a
single nameable cause that the revised wording addresses, and 2.17 s against a
3.29 s minimum is genuinely short rather than merely trimmed.

## Second problem with G-03 — the performance is wrong

The prompt asked him to *look down at the step*. Instead he closes his eyes and
lowers his head, which reads as dozing or resignation rather than noticing
something underfoot. It happens from about 2.5 s, so the salvage window avoids
it — but a regeneration should say:

> He keeps his eyes open throughout. Around halfway he lowers only his eyes and
> tilts his head slightly to look down at the step beneath his feet, alert and
> curious, then faces forward again. He never closes his eyes and never lets his
> head droop.

## Revised G-03 prompt — complete

> Slow steady descent on the escalator. The man in the teal jacket and orange
> trousers rides down, one hand resting on the moving handrail, coat and trouser
> fabric shifting very slightly. Around halfway he lowers only his eyes and
> tilts his head a little to look down at the step beneath his feet, alert and
> curious, then faces forward again. The mall behind him drifts past evenly.
>
> The final frame has exactly the same framing as the first frame. He is the
> same size in frame at the end as at the beginning, with clear space above his
> head in every frame. Nothing approaches or recedes.

Plus the shared negative block, with the camera additions above.

## What the plate actually has to cover

G-03 spans cues 36–38, 255 frames, 10.62 s — but only the first is the plate's:

| cue | frames | VO | owner |
|---|---|---|---|
| 36 | 79 | "Failure three is the floor itself." | **plate** |
| 37 | 91 | "A damaged wheel or axle can let a step ride too low." | Remotion |
| 38 | 85 | "The dangerous part is not merely the sag beneath your feet." | Remotion |

Same division as G-01 and G-02. The plate needs **79 frames**, not 255. Generate
10 s, keep the best 3.3 s.

---

# UPDATE 15 Sep 2026 — the fix above did not work

The G-03 regeneration used the invariant-framing wording recommended in this
document. **It pushed in exactly the same way.**

| | first attempt (6 s) | regeneration (10 s, invariant wording) |
|---|---|---|
| torso-top, start → end | 12 → 0 | 11.5 → 0 |
| figure scale change | grows until clipped | **+19%** |
| frames before the head clips | 52 | 95 |

Five generations, five uncontrolled push-ins. Describing the invariant instead of
the instrument made no measurable difference. **Treat the recommendation above as
disproven** — do not spend another attempt on wording.

The performance instruction also failed. "He keeps his eyes open throughout…
never lets his head droop" produced the same eyes-closed bow, just later.

## What actually worked: generate longer and use the front

The regeneration was 10 seconds instead of 6. The push-in *rate* was unchanged,
but there was more runway before it bit:

- 6-second generation → **52 usable frames**
- 10-second generation → **95 usable frames**

Cue 36 needs 79. The second attempt cleared it with 16 to spare, and the eyes stay
open well past the trim point.

**The working rule is not a prompt at all, it is a budget:** generate at the
longest duration the tool offers, expect to use roughly the first third, and trim
from the front. Every one of the four units came good this way.

| unit | generated | usable | its cue needs |
|---|---|---|---|
| G-01 | 10 s | 143 f | 93 f (cue 03) |
| G-02 | 6 s | 102 f | 102 f (cue 21) |
| G-03 | 10 s | 95 f | 79 f (cue 36) |
| G-04 | 6 s | 90 f + hold | 97 f (cue 67) |

The two 6-second generations were the tight ones. The two 10-second generations
had comfortable margin.

## Final G-03 result

`generated/g03-cue36-79f.mp4` — frames 0–78, headroom 12 → 7 px, never cropped,
eyes open throughout. Exactly cue 36.
