# Episode 02 — bounded cue-timing audit

**Date:** 15 Sep 2026

**Authority:** locked `escalator-vo-v1.mp3` recorded in `vo-lock.json`

**Scope:** Claude's seven low-confidence anchors, all eight sub-two-second drops,
the eleven longest cues, and the six compound visual cues. The union is 25 cues.

## Method

The locked narration was decoded to mono 16 kHz audio. Audible speech onsets
were estimated from 20 ms RMS windows at 5 ms hops, using a threshold between
-55 and -45 dBFS according to the preceding noise floor. Each reviewed primary
action was placed three frames before the detected onset and clamped inside its
existing cue span. Cues 04 and 49 therefore use two frames of lead. Raw ASR JSON
was not changed.

This is an objective waveform check, not a human listening claim. Final
subjective sync remains part of the bounded scene review.

## Result

`cues.csv` now distinguishes the cue's ownership span from its dominant visual
hit:

- `f_in` / `f_out` still define the exact contiguous cue span.
- `primary_action_frame` is where the headline or dominant action lands.
- `lead_frames` records the reviewed lead applied to that action.
- `timing_review` records which cues received this bounded pass.
- `subbeat_frame` and `subbeat_action` split compound cues without changing the
  locked narration or cue count.

The largest corrections were pause-padding errors in the ASR word start:

| Cue | Action | Old default | Reviewed primary frame | Change |
|---|---|---:|---:|---:|
| 12 | Four-part roadmap | 832 | 842 | +10f |
| 21 | Failure 1 label | 1845 | 1852 | +7f |
| 28 | Failure 2 label | 2635 | 2640 | +5f |
| 36 | Failure 3 label | 3582 | 3589 | +7f |
| 44 | Gravity/load statement | 4486 | 4491 | +5f |
| 48 | Auxiliary protection layer | 4989 | 5012 | +23f |
| 54 | Hong Kong case turn | 5484 | 5495 | +11f |
| 61 | Grease finding | 6042 | 6048 | +6f |
| 64 | Nut reveal | 6399 | 6411 | +12f |
| 67 | Closing movement | 6615 | 6624 | +9f |
| 73 | Final notice line | 7181 | 7196 | +15f |

Smaller reviewed adjustments of zero to three frames are retained directly in
`cues.csv`. Pre-roll between `f_in` and a later `primary_action_frame` is for an
outgoing hold, camera settle or ambient machine motion; it must not reveal the
headline early.

## Compound-cue sub-beats

| Cue | Frame | Second action |
|---|---:|---|
| 20 | 1765 | Reveal the complete loop and begin returning the staircase facade |
| 23 | 2152 | Introduce lace, coin and clothing silhouettes |
| 29 | 2842 | Begin deforming soft objects toward the skirt gap |
| 39 | 3958 | Split from comb strike to the open-floor-gap outcome |
| 44 | 4645 | Bring drive restraint in against the established gravity load |
| 48 | 5155 | Add the broken-drive-chain detector on its own path |

## Acceptance

- 74 cue spans remain contiguous from frame 0 through 7,322.
- Every primary and sub-beat frame falls inside its cue.
- All seven low-confidence anchors have a reviewed primary action frame.
- The six compound cues now have an explicit second action.
- No scene range, narration file, raw ASR evidence or manifest duration changed.
