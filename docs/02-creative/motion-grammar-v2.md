# Motion grammar v2 — approved 2026-09-17

Supersedes the timing approach used in M01 and M02 v1. Approved from the cue 08–09
grammar test (`work/hidden-systems-ep-02/assembly-review/m02-v2-grammar-test.mp4`).
Reference implementation: `src/escalator-ep02/FailureMapV2Demo.tsx`.

## What this replaces, and why

M02 v1 tried to create dynamism with continuous slow camera motion — 3–7% scale and
18–52px pan spread across 50–170 frames. Measured, it moved. Watched, nothing happened.

**A move below roughly 1px per frame does not exist on screen.** The eye responds to
transients, not to drift. The delta-per-frame metric used to validate M02 v1 rewarded
exactly the wrong thing: uniform slow whole-frame motion scores well and reads as dead.
Do not use mean inter-frame delta as a proxy for whether a scene is alive.

## The three rules

### 1. A move lands, or it does not happen

Every move completes inside **6–12 frames** and then stops dead. No move is spread
across a cue. Between moves the frame is genuinely still — that stillness is what makes
the next move register.

```tsx
// Overshoots 5% at 68% of its length, then settles. Use for every push, slam and arrow.
const land = (frame: number, at: number, from: number, to: number, len = 7) =>
  interpolate(frame, [at, at + len * 0.68, at + len],
    [from, to + (to - from) * 0.05, to], {...clamp, easing: Easing.bezier(0.2, 0.9, 0.25, 1)});
```

Travel that must cover distance advances in **discrete pulses** (3–4 frame steps), not a
glide. A signal moving down a path is a sequence of events, not a slide.

### 2. Three to four shots per cue

A cue is cut, not held. Typical shape for a 57-frame cue:

| | frames | |
|---|---|---|
| Shot A | 0–15 | establishing framing, the subject at rest |
| **cut** | 16 | the event happens ON the cut |
| Shot B | 16–33 | 2–3× tighter. the event plays out |
| **cut** | 34 | |
| Shot C | 34–57 | wider. the consequence is named |

Hard cuts between framings inside a cue. `<Sequence layout="none">` per shot. Vary shot
size deliberately — a scene that stays in one shot size reads as a slide.

### 3. Things are objects, not symbols

The single biggest lift was drawing, not timing. Every mechanical part gets:

- **a cast shadow on the sheet** — `fill={ink} opacity={0.13}`, offset down and left
- **varied stroke weight** — heavy outer contour (11–13), lighter interior (7–9), hairline detail (4)
- **a hatched face** — three or four short parallel strokes at 0.4 opacity, giving thickness
- **visible fasteners** — pins, pivots, rollers, brackets
- **enough of the mechanism to show intent** — a switch needs its contacts, spring and
  actuator arm. You cannot feel a device failing if you cannot see what it was going to do.

Test: could a viewer say what this part does before the narrator says it? If not, it is a
symbol, and it will read as flat.

## House constraints that still apply

- Coral and ink. **No red, no outlined caps, no stock footage grammar.** Explainer *timing*,
  house *drawing*.
- Teal always means a protection worked. Coral always means breakage, failed protection or
  consequence. (`diagram-layer.md`)
- **A safety device that fails to fire must not animate into its tripped pose.** It goes
  coral in the same position. This is why the failure lands.
- One dominant visual idea per 3–5s beat. (`visual-language.md`)
- Boil stays at or below 0.6px. Raising it to 2.1px reads as camera shake — translating a
  whole element is a camera move, not a line quality. Per-stroke variation belongs in an
  SVG filter.
- No animated paper grain. On a flat cream field it reads as shimmer.

## Component vocabulary

In `FailureMapV2Demo.tsx`, to be promoted to a shared module when M05 is built:

| | |
|---|---|
| `land(frame, at, from, to, len)` | the only easing helper. everything lands. |
| `<Shot from to>` | hard cut to a new framing inside a cue |
| `<PushIn from to origin len>` | push that lands in `len` frames and holds |
| `<Arrow x y angle length at>` | tapered shaft, solid head, coral, snaps on from the tail |
| `<Slam at left top eyebrow text size colour>` | type that lands with a 5% overshoot and a rule that draws after it |

## Open consequences

1. **M01 (`incident-reversal`) is approved in the old grammar.** It will not match. Rebuilding
   it is real cost; shipping an episode whose first 19 seconds use different timing and
   flatter drawings is a real quality problem. Owner decision.
2. **Cost per scene is higher.** More drawing, 3–4 shots per cue instead of one. D-034 set
   ~12 owner-hours and ≤12 scene systems for this episode. That budget was written for the
   old grammar and probably does not survive contact with this one. Owner decision on
   whether to extend it or cut scope elsewhere.
