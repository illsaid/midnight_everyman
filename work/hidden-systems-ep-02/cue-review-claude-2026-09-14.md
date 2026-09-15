# Episode 02 — adversarial review of the locked-VO cue work

Reviewer: Claude. Author: Codex. Reviewed 14 Sep 2026 against `cues.csv`,
`production-manifest.json`, `vo-lock.json` and `README.md` as found on the
production PC. **No file was edited** — Codex holds BUILD.

Flatness, the restricted palette and the absence of gradients are deliberate and
were not scored as faults. Uncertain items are raised as questions, not findings.

## What I re-derived and confirmed

Every structural claim in the handoff holds. Checked computationally, not read:

| Claim | Result |
|---|---|
| 74 cues, contiguous, no gaps or overlaps | **PASS** — covers frames 0–7322 exactly |
| `f_out − f_in == frames` on every row | **PASS** |
| Each cue assigned exactly once across 8 scenes | **PASS** — no duplicates, none missing, none unknown |
| Scene frame ranges contiguous 0–7322 | **PASS** |
| Each scene's range equals its own cues' range | **PASS** |
| 305.057959 s × 24 = 7321.39 → 7322 frames | **PASS** |
| 2 bespoke systems flagged, against a limit of 2 | **PASS** — `incident-reversal`, `mechanism-reveal` |
| 12 movements | **PASS** |

The loudness work is also done and was a carried-over Pilot 01 defect:
−16.55 LUFS integrated, −0.44 dBTP. That closes it.

This is materially better tooling than Pilot 01, where ASR was unreachable and
timing had to come from silence-anchored proportional alignment.

## Finding 1 — low ASR confidence on cue anchors, including three of the four failure labels

**Severity: highest. Cheapest to fix now, most visible if missed.**

Eleven cues sit below 0.80 recorded confidence and nineteen below 0.90:

| Cue | First word | Confidence | What it anchors |
|---|---|---|---|
| 61 | "Investigators" | **0.002** | the grease finding |
| 36 | "Failure" | **0.058** | **`FAILURE 3 · THE STEP` on screen** |
| 67 | "Tomorrow," | 0.122 | the closing movement |
| 54 | "So," | 0.214 | "So. Hong Kong." — the case turn |
| 73 | "You" | 0.392 | "You will not notice any of them" |
| 21 | "Failure" | 0.64 | **`FAILURE 1 · THE LANDING`** |
| 28 | "Failure" | 0.67 | **`FAILURE 2 · THE SIDES`** |
| 40 | "Step" | 0.708 | step-sag devices |

Three of the four on-screen failure labels are anchored on a word the recogniser
was unsure of, and those labels are the most conspicuous timing in the film — a
label landing on the wrong syllable reads as a bug rather than a style.

**A caveat I want to be explicit about:** confidence is recognition certainty, not
timestamp error. A word can be misrecognised and still correctly located. So this
is not a claim that eleven cues are mistimed. It is a claim that these eleven are
where checking effort should go, and that is a cheap, bounded job — eleven
by-ear checks, not seventy-four.

**Suggested:** listen to cues 61, 36, 67, 54, 73, 21, 28 against the locked MP3
before any component is built, and record the result in `cues.csv`. A
`confidence_checked` column would make the pass auditable.

## Finding 2 — the three-frame lead was applied uniformly, which D-034 warns against

73 of 74 cues carry `lead_frames = 3`. One carries 0.

D-034 and the playbook say to use the three-frame lead *as a default*, "then
**review it rather than assuming every cue needs the same editorial adjustment**."
A uniform value across every cue is that assumption, recorded as if it were a
review.

The lead that a hard typographic cut wants is not the lead a slow mechanical
reveal wants. The eight one-word drop cues in particular (see below) are hard
cuts landing on a single stressed syllable; three frames may be right for them
and wrong for the long reveals, or the reverse.

**Suggested:** review the lead on the eight drops and the eleven long cues
specifically — nineteen decisions, not seventy-four — and leave the rest at 3.

## Finding 3 — the six longest cues are compound, not single-action

This is Pilot 01's documented failure mode returning by a different route. There,
70% of frames fell below the motion threshold because `diagram-layer.md` permitted
30-second static holds. Here the cues are not static by design — they are
**carrying more than one action each**, which is the same thing once built:

| Cue | Length | Action as written |
|---|---|---|
| 29 | 11.79s | "Magnify the millimetre gap, **then** deform soft objects toward it" |
| 48 | 10.62s | "Add the auxiliary brake **and** broken-chain detector on separate paths" |
| 39 | 8.42s | "Track the low step toward the comb **and** preview collision **versus** open-gap outcomes" |
| 44 | 9.46s | gravity pulling **while** the drive restrains |
| 23 | 9.42s | comb teeth enter grooves **as** three silhouettes approach |
| 20 | 7.79s | pull back to the loop **as** the staircase facade returns |

`visual-language.md` asks for one dominant visual idea per 3–5 second beat.
Cue 29 is nearly 12 seconds and contains two. Built literally, its second half is
where a dead run appears.

**Suggested:** before building, give each of these six an explicit internal
sub-beat frame so the component has two timed actions rather than one long one.
That does not change the cue count or the locked timeline — it is annotation
inside an existing span.

## Not a finding — the eight short cues are correct

Flagging what I checked and cleared, so it is not re-raised. Eight cues run under
two seconds, which reads as a violation of the 3–5 second beat rule. It isn't.
All eight land on the owner's deliberate one-word drop lines, and each carries a
single decisive action:

`Not stairs.` 1.12s · `It did not.` 1.17s · `Then the steps stop.` 1.38s ·
`The chain broke.` 1.42s · `There is the nut.` 1.83s · `Different triggers.` 1.17s

These are the script's rhythm working as written. Leave them.

## Finding 4 — there is no end-screen real estate, and this decision must precede the build

The timeline is 7,322 frames and the last cue ends at 7,322. The film stops the
instant the narration does.

Verified against YouTube's documentation: end screens can only occupy **the last
5–20 seconds**, i.e. 120–480 frames. There are currently **zero**. `README.md`
says "before any separately approved tail or end-screen extension", so this was
noticed — but it is still unresolved, and it is not a post-production step.

Cue 74 is "Hold on the quietly moving escalator and end without a sign-off,"
which is exactly the right shot to extend: the picture keeps running while the
cards appear, so nothing announces an ending. But whether that tail exists
changes how `ordinary-close` is composed, so it has to be settled before that
component is written.

`layoutContract` currently declares `safeMargins` but no end-screen zone.

**Question for the owner rather than a finding:** add a 240-frame (10 s) tail
after 7,322 for end-screen cards, or ship at 7,322 and accept no end screen on
this episode? If the tail is added, `layoutContract` needs a fifth region naming
the card zones so the safe-region overlay can prove them clear.

## Credit where due

The four `FAILURE n ·` labels are in the cue sheet at 21, 28, 36 and 43, with
`TWO FAILURES` at cue 07. The indexing notes were picked up and implemented
without being asked twice.

The per-cue `layout` vocabulary — `fullFrame` 9, `textLeft/actionRight` 30,
`textTop/actionCenter` 31, `actionOnly` 4 — satisfies the
`scene-specification.md` requirement to declare named text and action regions
before typography is placed. That was a Pilot 01 gap.
