# M01 incident-reversal v2 — review

Reviewer: Claude. Author: Codex. 16 Sep 2026. **No file edited.**
459 frames, 19.12 s, 1920×1080 @ 24 fps, stereo AAC. Covers cues 01–06.

This is the first scene combining a generated plate with Remotion, and most of it
works. One finding is significant and it is about editing, not code.

## What works

- **The opening is conceptually right.** A static diagram for a static object —
  `A STAIRCASE STAYS PUT`, `NO DRIVE · NO CHAIN · NO SPEED`, `FIXED GEOMETRY`.
  The stillness is the joke, not an oversight.
- **`NOT A STAIRCASE` overlays the same staircase with a mustard step band.**
  Mustard = motion under the state vocabulary. Correct, and it lands the reframe
  by re-using the previous drawing rather than replacing it.
- **Evidence cards are doing the proof-density job** — `DOCUMENTED INCIDENT ·
  HONG KONG · 2017 · ABOUT 120 PEOPLE · GOING UP`, and the closing
  `LANGHAM PLACE · 25 MARCH 2017` source credit. That was a recommendation from
  the faceless triage and it is implemented well.
- **Coral is used correctly** — `REVERSE. DOWNHILL.` and `18 INJURED` are both
  consequence, which is what coral means.
- **The 18-figure pictogram building out** is a strong evidence graphic.

## Finding 1 — the crowd vanishes exactly when the consequence lands on them

**Severity: highest. This is the one to fix.**

Measured plate coverage per cue:

| cue | VO | plate on screen |
|---|---|---|
| 03 | "About a hundred and twenty people are going up" | **58.3 %** |
| 04 | "Then the steps stop." | **56.9 %** |
| 05 | **"Then they come back down. Faster."** | **25.6 %** |
| 06 | "Eighteen people are injured…" | **5.8 %** |

The plate holds full strength through the setup and the stop, then fades to a
quarter *precisely as the reversal happens*, and is essentially gone by the
injury count.

So the dramatic arc is people → stop → people go backwards → people are hurt,
while the visual arc is people → people → **stick figures** → pictograms. The
crowd we generated disappears at the exact moment the film needs us to care about
them.

**And the material exists.** There are 143 clean frames of that crowd ascending.
Played backwards they descend — those same faces, that same queue. The
recommendation from the G-01 review was to reverse the plate and ramp it; what
has been built instead replaces the people with a schematic.

**Suggested:** cue 05 keeps the plate at full strength and plays it in reverse,
accelerating, with `REVERSE. DOWNHILL.` over it. The stick-figure diagram is a
weaker version of something we already have in real footage. Let cue 06 do the
abstraction — by then the pictogram is earned, because we watched it happen.

This does not break the standing rule. Reversing the plate is not asking the
model to depict a mechanism; it is re-timing footage we already own.

## Finding 2 — the film ends on 65 perfectly frozen frames

Frames 393–458, delta **0.00** — not low, zero. Nothing moves at all for 2.7 s.

This is legal under `diagram-layer.md`'s 720-frame maximum static hold. But
Pilot 01's broad pass added ambient camera drift to every scene specifically so
that no frame is ever perfectly still, and that lesson has not carried over.

**Suggested:** the same ambient drift, or let the last pictogram row settle a beat
after the others. Cheap either way.

## Finding 3 — the opening stillness is right, but it sits where APV is measured

Frames 8–116 — **4.5 s below the static threshold**, at the very start.

The intent is correct and should not change. But first-30-second retention caps
everything downstream, and 4.5 s of a motionless diagram is a real risk however
well argued.

**Suggested:** keep the idea, add life that does not contradict it. The step
edges ticking in one at a time, or `NO DRIVE · NO CHAIN · NO SPEED` arriving as
three separate stamps, or the ambient drift again. The frame should be alive
while the *subject* is motionless — that contrast is the point and it currently
reads as a still image.

## Open question, not a finding — the coral budget

`REVERSE` and `18 INJURED` both run coral, at 13–19 seconds in. The film's
largest coral moment is meant to be the nut at roughly 4:05, where a protection
failed. Both uses here are correct by the table — they are consequence — but it
is worth deciding deliberately whether the climax still has somewhere to go.

## Motion audit

| | M01 v2 | Pilot 01 (documented failure) |
|---|---|---|
| frames below 0.35 delta | **49 %** | 70 % |
| dead runs ≥ 2 s | 2 (4.5 s, 2.7 s) | 45 % of runtime |

Better than Pilot 01 by a wide margin, and both dead runs have identified causes
above.

## A correction to my own check

My first safe-margin pass reported violations on all four edges at frame 186.
That was wrong — frame 186 is where the full-bleed plate begins, and a
photographic plate is *supposed* to reach the frame edges. The margin contract
governs typography and diagram content, not the plate. No margin finding stands.
