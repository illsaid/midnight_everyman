# Response to external review

> **Migration note:** This document preserves the review history from the
> standalone Hidden Systems research folder. Canonical paths after integration
> are `research/`, `content/candidates.csv` and `docs/01-product/`. Historical
> path references below are intentionally unchanged.

2 Sep 2026. Seven concerns were raised. **All seven are correct.** Five were
factual errors and are fixed. One was correct in a sharper way than stated. One
led to a re-pull of the underlying data that found a larger error the review did
not catch.

Nothing below is a defence. Where a claim survives, it survives weakened.

---

## Summary

| # | Concern | Verdict | Action |
|---|---|---|---|
| 1 | "Every number is sourced" not reproducible | **Correct** | `sources.md` + `raw/` written; 4 channels now reproduce exactly, 7 marked unverified |
| 2 | "Failure narrative confirmed" too strong | **Correct** | Downgraded to live hypothesis; our own data is counter-evidence |
| 3 | 75,000 floor is not transferable | **Correct** | Renamed reference benchmark |
| 4 | 1–2/week cadence not supported | **Correct** | Downgraded to hypothesis pending the timed build |
| 5 | 200-subject rule unsupported | **Correct, and worse** | Rule withdrawn; replaced with a rolling buffer |
| 6 | `ready` means less than the rules say | **Correct** | Recomputed: **0 of 20 are ready** |
| 7 | Documents contradict each other | **Correct** | Fixed |
| — | *Found while fixing #1* | **New** | Two channels were misclassified; the format argument was broken |

---

## 0. The error the review did not catch

Fixing concern #1 required re-pulling the data. Two channels were misclassified
in `format.md`.

**Mido Explained and Secrets Of Simple Things were listed as Shorts channels.
They are not.** Both publish daily **12–15 minute horizontal long-form**.

| Channel | Was recorded as | Actually is | Median |
|---|---|---|---|
| Mido Explained | Shorts, 2,650 | Daily 12-min long-form | 2,517 |
| Secrets Of Simple Things | Shorts, 831 | Daily 10–15 min long-form | 865 |

The medians were roughly right. The format was wrong — and the format was the
whole argument.

`format.md` said: *"The gap is two to three orders of magnitude, and it is a
floor gap... Shorts floors are not survivable."* That comparison put two
long-form channels in the Shorts column. **The argument for going horizontal was
built on a misclassification.**

### What the corrected data says

All four verified channels are long-form. Medians run 865 to 365,607 — a factor
of 420 *within* long-form. Format is not the variable. Three things separate the
top two from the bottom two, and this sample cannot tell them apart:

- **Purpose-built visuals vs. assembled footage.** Deconstructed and Casual
  Navigation draw their own diagrams. Mido and Secrets assemble stock.
- **Cadence.** High floors publish monthly and every 8–10 days. Low floors
  publish daily.
- **Subject discipline.** Secrets ran three near-duplicate videos in five weeks.

**We hold no verified Shorts median at all.** The horizontal decision now rests
on two long-form successes and an unsourced RPM differential — not on a measured
comparison. I think the decision is still right; the *reason* I gave for it was
not.

The nearest failure mode to us is now visible and it is not Shorts. It is a
daily long-form explainer assembled from stock material returning a four-figure
median. That is the same format, same length, same faceless posture, same
subject class as our plan. The only differences are cadence and whether the
visuals are made or found — which is precisely the bet the channel is.

---

## 1. Sourcing — correct, fixed

The line "every number is sourced" was in `README.md` and was false. There were
no channel IDs, no video IDs, no retrieval dates, no method note, no exports.

**Now written:**

- `02-research/sources.md` — tool, exact call parameters, retrieval date, the
  median method, and an explicit list of what is *not* verified.
- `02-research/raw/` — four CSVs, video-level, one row per upload.

All four medians recompute exactly from the CSVs:

| Channel | n | Median | Verified |
|---|---|---|---|
| Deconstructed | 28 | 536,106 | ✓ |
| — single-object era | 10 | 365,607 | ✓ |
| Casual Navigation | 50 | 57,254 | ✓ |
| Mido Explained | 50 | 2,517 | ✓ |
| Secrets Of Simple Things | 50 | 865 | ✓ |

**Explicitly not verified, and now labelled as such:** Null State (243), Small
Things (~3,000), Everything Simplified (~1,250), and all seven failure-narrative
channels — those last are lifetime *means* from a search endpoint, not medians.

**One is permanently unverifiable.** Secret Life Explained's video count has
dropped from 21 to 13. Videos were deleted. The tower-crane hit and the
insurance-pivot collapse — the worked example behind the "never change the
curiosity" rule — **can no longer be reconstructed.** The rule still has
Secrets Of Simple Things behind it, but its most vivid piece of evidence is gone
and should stop being quoted as measured.

One methodological note worth keeping: `vidiq_channel_videos` defaults to
`popular=true`, which returns a channel's *best* videos and yields a median
10–100× too high. Every figure here uses `popular=false`.

---

## 2. "Failure narrative is confirmed" — correct, withdrawn

The review is right, and the counter-evidence is inside our own folder.

What was measured: seven incident-driven channels are large. What was claimed:
failure framing outperforms process framing. Those are different, no
straight-process control was measured, and every figure was a lifetime mean.

**Our best comparable is a straight process explainer.** Deconstructed's
single-object era — median 365,607, floor 74,985 — is "How a torque wrench
works." No incident. No failure. No named victim.

Failure framing is now recorded as a **live hypothesis**, adopted because it is
cheap and differentiating, not because it is measured. Beat 5 anchoring on a
documented case stands as a craft rule. The claim that it raises views does not.

This one has teeth: it means the documented-case requirement (gate 3) may be a
self-imposed research tax on every episode for an unproven return. It is
currently blocking 8 of 20 queue entries. See #6.

---

## 3. The 75,000 floor — correct, renamed

Renamed **reference benchmark**, with the disqualifiers stated: bespoke 3D at
much higher cost per minute, roughly monthly cadence, 2023–24, and n=10.

The honest read: 74,985 is what a well-made single-object mechanism explainer
did at that quality and cadence in that year. It is not what our first ten will
do, and treating it as a target sets up a false failure at video 3.

---

## 4. Cadence — correct, downgraded

Verified comparables: Deconstructed ~monthly, Casual Navigation every 8–10 days.
Daily is what both low-floor channels do.

"1–2 per week" is now recorded as a **working hypothesis, undecided**, with the
review's own conclusion adopted verbatim: **your build time settles this, not
competitor cadence.** The timed build of episode 1 is the only input that can
resolve it and it does not exist yet.

---

## 5. The 200-subject rule — correct, and the problem is worse than stated

The number 200 was invented. The evidence supports "queue exhaustion precedes
collapse" and nothing about a threshold.

The review's deeper point is the real one and I had missed it: 200 subjects at
1–2 uploads a week is **six months of queue-building before any market
feedback**. That contradicts everything else in the folder — the validation loop,
A/B thumbnail testing, the one-in-five swing, and the whole reason for building
episode 1 early. It was queue construction substituting for contact with reality.

**Withdrawn. Replaced with a rolling buffer:**

| | |
|---|---|
| Before video 1 | 20 subjects clearing all four gates |
| Never publish with fewer than | 12 unmade subjects in the queue |
| Below 12 | Stop publishing and rebuild |

The buffer is what the evidence actually supports, and it is now reproducible:
`raw/secrets-of-simple-things_long_recent50_2026-09-02.csv` contains three
"overnight charging" videos (26 Jul, 13 Aug, 31 Aug) and two near-identical
ATM-PIN videos two days apart (14 and 16 Aug), on a channel with a median of 865.

---

## 6. `ready` was a lie — correct, recomputed

The CSV said 20 ready. Recomputed honestly against the four written gates:

| Status | Count |
|---|---|
| **ready** | **0** |
| needs_gate4 — case OK, thumbnail moment not sketched | 11 |
| blocked_gate3 — no documented case found | 8 |
| needs_verification — case unverified | 1 |

A `gate4_thumbnail_moment` column has been added and is empty for all 20.

**Zero of twenty subjects currently clear the gates as written.** That is the
true state and it should stay visible.

It also forces a decision. Eight subjects are blocked only by gate 3 — a gate
that #2 just downgraded to an unproven hypothesis. Either gate 3 is a hard
requirement, in which case a third of the queue dies for an unmeasured belief,
or it is a preference, in which case it should be a sort key rather than a gate.
I lean towards the second and have not made the change unilaterally.

---

## 7. Document contradictions — correct, fixed

| Contradiction | Fix |
|---|---|
| `format.md` said thumbnail and script sheets were open holes; `README.md` said added | `format.md` updated — sheets 12, 13, 14 marked built |
| `README.md` said "eleven visual sheets" in one place, 14 in another | Both now say fourteen |
| `README.md` said "every number is sourced" | Replaced with a pointer to `sources.md` |
| `README.md` listed a "target floor" | Now "reference benchmark", with disqualifiers |

Cause worth noting: these documents were amended in three separate passes and
each pass edited the section it was about rather than the whole file. Any future
change to the format decision should touch `README.md`, `format.md` and the
canvas together or none of them.

---

## What this leaves

The empirical base is smaller than the folder implied and honestly labelled now:

- **Verified:** four channels, video-level, reproducible from `raw/`.
- **Supported, n=2:** purpose-drawn visuals sustain a five-to-six-figure floor.
- **Hypothesis, unmeasured:** failure framing, 1–2/week cadence, gate 3's value,
  a 75k floor, and the whole Shorts-vs-long-form comparison.
- **Unverifiable:** the Secret Life Explained pivot.

The design system is unaffected — it never depended on these numbers. What
changes is the confidence attached to the plan, and the fact that the nearest
observed failure mode is now a channel doing exactly our format at daily cadence
for a median of 865.

The single highest-value next action is unchanged and now overdetermined: **build
one episode end to end and time it.** Cadence, the floor, and whether gate 3 is
worth its cost all depend on numbers that only that build produces.

---

# Round two — 2 Sep 2026

The second review confirmed the four medians independently and found that the
corrections had **not been propagated**: the analysis sections were fixed while
the operating documents still carried the old thesis.

That criticism is correct and the cause is specific. Round one used targeted
string replacements on four documents. **Two of those replacements failed
silently** — the text did not match — and the failures were never checked. The
paragraph asserting that documented incidents "outperform hypotheticals at
scale" survived directly underneath a heading that said the claim was not
established.

Round two rewrote the affected files whole. `README.md`, `format.md`,
`subject-selection.md` and `competitor-data.md` were replaced, not patched.

## Contradictions closed

| Contradiction | Now |
|---|---|
| README said failure framing "confirmed" | Listed under *Unsettled* as unmeasured |
| README said cadence "settled at 1–2 per week" | **Undecided** in README, `format.md` and the decision table |
| README said "20 of a required 200" | Replaced with the 12 · 3 · 1 pre-pilot table |
| `format.md` said the canvas "is built for vertical" and listed sheets needing revision | Section retitled *rebuild complete*; every sheet marked done |
| `competitor-data.md` opened with the old Mido 2,650 / Secrets 831 figures | Rewritten: Part 1 verified, Part 2 explicitly unverified |
| Its failure section said "NOT established" then asserted the opposite | The asserting paragraph is gone |
| Its closing line said 2–3 videos per week | Part 4 now says undecided and supersedes every earlier figure |
| "Deconstructed is our exact format" | "An encouraging analogue, not our format" — different production model, cost, cadence and year |

The unverified channels are now quarantined in **Part 2** under a heading that
says do not cite them as measured, rather than sitting in the opening table
looking like data.

## Gate 3 is demoted — recommendation adopted

The review's reasoning was right and the contradiction was ours: the rules
simultaneously said a case was required, that it was not required, and that its
value was unmeasured. Eight of twenty subjects were blocked by a belief we had
already withdrawn.

**Three hard gates: touched, opaque, packageable.** Case strength is now a field
with the five suggested states. It sorts the queue; it never blocks it.

| | Count |
|---|---|
| `confirmed_case` | 7 |
| `possible_case` | 3 |
| `origin_story` | 2 |
| `not_needed` | 2 |
| `no_case_found` | 6 |

Two subjects were downgraded on inspection while adding the field: the sprinkler
head (Grenfell is an absence-of-sprinklers case, indirect) and the gas meter
(San Bruno was a transmission pipeline, not a meter — a weak link that had been
recorded as if it were solid).

Queue state is now honest and useful rather than honest and useless:
**20 pass touched + opaque, 0 packaged, 3 needed.**

## Pre-pilot requirement reduced again

Adopted as recommended. The previous "20 subjects clearing all four gates" still
meant twenty × twenty title candidates plus twenty thumbnail moments before any
market contact.

| | Required | Have |
|---|---|---|
| Passing touched + opaque | 12 | 20 |
| Fully packaged | 3 | 0 |
| End-to-end timed builds | 1 | 0 |

Rolling 12-subject buffer applies only after publishing begins.

## Thesis restated

Adopted verbatim into `README.md` as the headline claim:

> Purpose-built visuals, disciplined subject selection and a sustainable cadence
> may produce a much stronger floor than daily explainers assembled from stock
> material. Those three factors co-vary, so competitor research cannot isolate
> them. A timed pilot is the appropriate next test.

## Canvas updated to match

The folder and the design system had drifted apart. Sheet 11 was rebuilt for
three gates, the case-strength field and the four verified channels; sheet 14's
"Gate 4" became "Gate 3"; the canvas annotations now carry the classification
error and the undecided cadence.

Sheet 11 also gained the finding that matters most and had never been written
down anywhere: **the gates are necessary, not sufficient.** Every subject on the
865-median channel — phone charging, USB-C, SIM cards, ATM PINs — passes touched
and opaque. Picking the right subject does not save you.

## Standing correction to method

Three rounds of this have now produced the same class of error twice:
section-level edits leaving contradictions elsewhere in the same file. The rule
going forward: **when a load-bearing claim changes, rewrite every file that
mentions it, and grep for the old phrasing afterwards.** A sweep for stale
phrases is run at the end of any revision.
