# Subject selection

**This governs the floor** — what a mediocre episode earns. The design system
sets the ceiling. Channels die at the floor. Run this before anything else.

Revised 2 Sep 2026 after external review. Gate 3 was a documented incident; it
is now a field, not a gate.

## The three hard gates

All three required. Nothing else is a gate.

**1. Touched.** The viewer has personally used it, stood in it, or depended on
it. Not *heard of* — touched. If they have to imagine themselves into the
situation, it fails.

**2. Opaque.** They cannot describe the mechanism even roughly. If a reasonable
person could sketch it on a napkin, there is no gap to open.

**3. Packageable.** A selected rung-three title, one thumbnail moment and an
opening visual exist, written before anything is built. If you cannot package
it, it is not a video — the content would have been fine, and that is a
different thing. See `packaging.md`.

One or two gates is not a subject. It is a topic.

## Audience continuity and durability

The channel is held together by one emotional-curiosity contract, not one
industry: **the hidden device that breaks, burns, bends or bites before you do.**
Before adding a new subject family, ask:

1. Would the same stranger who clicked the last strong package plausibly click
   this one?
2. Can this episode stand alone without a callback, prerequisite or channel
   history?
3. Can the promise support at least twelve adjacent candidates we would
   willingly make, even though they need not repeat the same object or title
   structure?

This is the useful form of the “success jail” test. Do not commit to one hundred
clones of a hit. Do reject a hit that attracts the wrong audience or has no
durable neighborhood.

### Passes
Lift · fire alarm · toilet · sprinkler head · escalator comb plate · fire door ·
seatbelt pretensioner · aircraft oxygen mask · circuit breaker · smoke detector ·
hotel keycard · revolving door · gas meter · car airbag · lift doors · escalator
handrail · emergency exit bar · thermostat · water heater · fuse box

### Fails
- **Dam spillway, reactor scram, submarine escape** — heard of, never touched. Gate 1.
- **Door handle, light switch, stairs** — touched, mechanism obvious. Gate 2.
- **Anything institutional** (claims, billing, policy) — fails gate 1 and produces
  grievance rather than relief.

## Case strength — a field, not a gate

A documented incident used to be gate 3. It is now described by evidence and
narrative-role fields in
`../../content/candidates.csv`.

**Why it was demoted.** The claim that documented incidents outperform
hypotheticals was never tested. No straight-process control was measured, and
the supporting figures were lifetime means. Our single best verified comparable
— Deconstructed's single-object era, median 365,607, floor 74,985 — is a set of
**straight process explainers**. "How a torque wrench works." No incident, no
victim. As a gate it was killing eight of twenty otherwise viable subjects for
an unmeasured belief.

| Field | Values | Meaning |
|---|---|---|
| `case_strength` | `direct_case`, `possible_case`, `origin_story`, `no_case_found`, `not_needed` | Narrative usefulness and apparent relationship to the mechanism |
| `case_evidence_state` | `unverified`, `verified`, `not_applicable` | Whether a recorded source has actually been checked |
| `mechanism_relevance` | `direct`, `indirect`, `origin`, `none`, `not_applicable` | Separates the incident's existence from its relevance to this mechanism |
| `case_source` | URL or source identifier | Literal provenance for the incident claim |
| `case_verified_date` | ISO date | When the source and mechanism link were checked |

**What it does.** Sets priority — a verified direct case sorts to the front — and sets
narrative treatment at beat 5. Roughly one episode in four should be a case where
the safety system *failed*, because failures make the successes legible. That is
a craft judgement, not a measured effect, and it should be stated that way.

**What it does not do.** Block a subject. `no_case_found` sorts to the back and
gets a thought-experiment framing at beat 5 instead.

Worked example: the lift governor episode anchors on Betty Lou Oliver, 1945 —
the Empire State Building B-25 crash, a 75-floor cable failure, survived.

## Never change the kind of curiosity

The earlier statement, "never leave the class", is not what the evidence
supports. Deconstructed moved from hand tools to historic machines over 2025 and
its median went *up* — 365,607 to 536,106.

The correct statement: **subject matter may drift; the curiosity may not.**
Torque wrench to Colosseum satisfies the same curiosity — *how does the mechanism
actually work.* Tower crane to insurance policy does not.

Two conditions on any drift:
- The audience must already be converged. Deconstructed drifted after a year, not
  at video 3.
- Gradual and up-market, not lateral. One step at a time.

### The evidence, at its real strength

**Verified:** Secrets Of Simple Things ran food and household objects, moved to
phone accessories, and its recent-50 median is 865 — see
`../../research/raw/`. Deconstructed's deliberate drift, verified, went the other
way.

**No longer usable:** The Secret Life Explained hit 545,592 on tower cranes and
its next uploads returned 12 and 5 views. That channel has since deleted videos
— 21 down to 13 — and the series **cannot be reconstructed**. It was the most
vivid example in this folder. Stop quoting it as measured.

### Why — the convergence model

A new channel has no audience data. YouTube shows video 1 to a mixed set and
watches who clicks. Video 2 goes to more people like the clickers. By video 3 it
has converged.

Topic-hopping does not "lose momentum". It **de-converges a model YouTube spent
months building**, and you return to being shown to a random mix. It also
explains the back-catalogue lift: a breakout pushes your older videos, but only
if they are for the same audience.

## Queue exhaustion

When the queue runs dry you will either repeat yourself or reach sideways. Both
kill the channel. The tell is near-duplicate titles within weeks.

Reproducible in `../../research/raw/secrets-of-simple-things_long_recent50_2026-09-02.csv`:
three "overnight charging" videos in five weeks and two near-identical ATM-PIN
videos two days apart, on a channel with a median of 865. This is the only queue
evidence there is, and it supports the *behaviour*, not any particular number.

### The 200-subject rule is withdrawn

The number was invented. Worse, 200 subjects at 1–2 uploads a week is six months
of queue-building before any market feedback — which contradicts the validation
loop, the A/B thumbnail testing and the one-in-five swing elsewhere in these
rules. It was queue construction substituting for contact with reality.

**Before the pilot**

| | Required |
|---|---|
| Subjects passing touched + opaque | 12 |
| Subjects fully packaged | 3 |
| End-to-end timed builds | 1 |

**After publishing begins**

| | |
|---|---|
| Candidate pool | Maintain at least 12 unmade subjects passing touched + opaque |
| Production-ready queue | Maintain at least 3 subjects clearing all three gates |
| Candidate pool below 12 | Stop publishing and rebuild. A gap costs less than a pivot. |
| Production-ready below 3 | Package the strongest candidates before beginning another build |

Never publish a subject that fails the gates because the queue is thin.

## Title formulas

These are rung-one shapes. Escalate every one of them before use — see
`packaging.md`.

    How a [OBJECT] actually works
    What happens when you [ACTION]
    What if everyone [ACTION] at once
    The [PART] that stops [DISASTER]
    Why [OBJECT] has [ODD FEATURE]
    [THING A] vs [THING B] — the difference is bigger than you think

The comparison form was the highest-yield structure observed, but the figures
behind that observation (Cacao vs Cocoa 165,983 and others) are **unverified** —
they were measured in an earlier session and the raw data was not retained.
Treat the form as a promising pattern, not a measured result. Directly portable:
fire door vs fire exit · circuit breaker vs fuse · sprinkler vs suppression.

## Stakes, not scale

Where a process channel carries a scale word — *millions, massive, billions* —
a failure domain carries a stakes clause: *before you hit the ground · in four
seconds · while you're asleep*. One per title.

## Cluster deliberately

Pick subjects whose schematics compose later. Six bathroom episodes assemble into
one long-form piece; six unrelated ones assemble into nothing.
