# Remotion animation — improvement plan

Suggestions only. Nothing in the project was changed to produce this.
Ordered by impact per hour. Every item traces to a measurement or a line of code.

---

## The core diagnosis, sharpened

The 8.7-second dead zone measured in `activation-fx-v2-1.mp4` is **exactly cues 44 + 45 + 46**
— scene-relative frames 146–355, from *"The bubble is gone now"* through
*"remarkably stubborn."*

The code says why:

```ts
const expansion = interpolate(f, [at('41'), at('42'), at('44')], [0, 0.25, 1], clamp);
```

**The bubble finishes shrinking at the exact frame cue 44 begins.** The one element
carrying the animation completes precisely as the longest beat starts. For the next 209
frames the entire motion budget is:

| Element | Amplitude |
|---|---|
| `vibration = Math.sin(f*2.3) * stress * 1.5` | **±1.5 px** |
| Expansion arrows | extend by `stress*9` — **9 px** |
| Stress glow | opacity ramp, no movement |
| Headline "Nowhere to go." | unchanged for 8.7 s |

Measured result: 0.72% of pixels change per frame; 8.1% differ end to end.

**This is the pressure build.** It should be the tensest stretch in the film and it is the
stillest. That single fact is worth more than everything else on this list.

---

## Step 0 — Change the rule, or none of this is required

`docs/02-creative/diagram-layer.md` currently permits **720 frames (30 s)** of static hold.
Everything measured is legal under it.

Replace with two values, because the first alone does not catch what is actually happening
— a 1.5-pixel vibration is technically "not static":

| Value | Frames | Note |
|---|---|---|
| Maximum static hold | **96** (4 s) | replaces 720 |
| **Minimum motion floor** | — | over any rolling 48-frame window, **≥3%** of the canvas must change by >3 levels |

The second is the real rule. Current worst case is 0.5–0.7%.

---

## Step 1 — Rebuild the pressure beat (cues 44–46) · biggest single win

**a. Do not let the bubble finish early.** Extend the shrink so the last portion of it
takes the whole beat:

```ts
// was: [at('41'), at('42'), at('44')] -> [0, 0.25, 1]
interpolate(f, [at('41'), at('42'), at('44'), at('46')], [0, 0.25, 0.82, 1], clamp)
```

The final 18% of the shrink then takes 4.2 seconds. A slow squeeze under load is
dramatically correct *and* physically honest.

**b. Make the vibration mean something.** It is fixed-frequency and 1.5 px. Scale both
amplitude and frequency with stress — rising pitch reads as rising strain:

```ts
Math.sin(f * (2.0 + stress * 3.5)) * (1 + stress * 5)
```

**c. Foreshadow the failure.** Add two or three hairline cracks that propagate across
44→47 using `pathLength="1"` with a shrinking `strokeDashoffset`. Right now the glass is
perfect and then it is shards; nothing earns the break.

**d. Break the type.** The headline holds 8.7 s. Give the beat two or three states —
the subtitle already changes, the headline should too.

## Step 2 — Ambient stage motion · cheapest, applies to all three

Every component parks its camera. `ActivationScene` explicitly holds `zoom` flat between
cues 47 and 48. Add one continuous, near-imperceptible transform *on top of* the
beat-driven camera:

```ts
const drift = interpolate(f, [start, end], [1.000, 1.015], clamp);   // ~1.5% over a movement
const driftY = interpolate(f, [start, end], [0, -7], clamp);          // 7 px
```

Applied to the outer `<g>`. Three lines per component. It is the difference between a
slide and a held shot, and it is what makes calmly-paced explainers read as *filmed*
rather than *presented*.

## Step 3 — Wake the static furniture

In `ActivationScene` the frame, cap, drop and deflector are all drawn
`opacity={broken ? 1 : 0.22}` — dimmed to 22% and then completely frozen for the entire
pre-shatter section. That is roughly 40% of the visual mass doing nothing for 20 seconds.

Best option, because it is also true: **let the brass take the heat.** Tint it toward the
heat colour as `stress` rises, and run a slow specular highlight down the body. The frame
really is heating up; showing it is both motion and information.

## Step 4 — Fix the frozen four-parts hold

`four-parts-v2-1.mp4` frames 124–215 — **1.4% of pixels change across 3.8 seconds**, and
the only thing moving is a hairline pointer extending. This is the genuinely frozen one.

The beat is "The deflector." Give it a state change: rotate it so the notches read, or
ghost in the cone it produces. Something has to happen.

## Step 5 — Make it stick with a test

The reason this drifted is that the standard permitted it. A rule nobody can check is a
rule that erodes.

Add `npm run test:motion`: render each component at 25% scale, compute the mean absolute
inter-frame delta series, and fail if any rolling 48-frame window falls below the floor
from Step 0. The analysis is about 30 lines — the same method used to produce this
document.

## Step 6 — Only now run the critic loop

Scoped per component, with the fixes in `critic-loop-prompt.md` applied. Polish after
structure, not instead of it.

---

## What not to do

- **No gradients, depth, drop shadows or photographic texture.** A generic critic will
  push for them. They are the house style's opposite.
- **No extra cuts.** House rule 2: the stage transforms, it never cuts. Every fix above is
  motion *within* a continuous stage.
- **Do not speed the pacing up.** The calm read is now a deliberate asset. The problem is
  not that the film is slow — it is that the frame is empty. Those are different faults
  with opposite fixes.

---

## Suggested order

| | Step | Rough effort |
|---|---|---|
| 1 | Step 1 — pressure beat | ~1 hour, largest visible gain |
| 2 | Step 2 — ambient motion, ×3 components | ~30 min |
| 3 | Step 5 — motion test | ~45 min, prevents recurrence |
| 4 | Step 3 — brass heat response | ~45 min |
| 5 | Step 4 — deflector hold | ~30 min |
| 6 | Step 0 — rule change | 5 min, but decide it first |
| 7 | Step 6 — critic loop | after the above |
