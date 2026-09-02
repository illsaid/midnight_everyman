# Competitor data

**Read `sources.md` before this file.** It states the method and lists which
figures are verified against `raw/` and which are not.

Rewritten 2 Sep 2026 after a second external review found that an earlier
revision had corrected the analysis sections while leaving the legacy figures
and conclusions intact elsewhere in the same file.

---

## Part 1 — Verified

Video-level exports in `raw/`. Every median recomputes from the CSV. Medians are
over the 50 most recent long-form uploads (`popular=false`), never means.

| Channel | ID | Production | Cadence | n | Median | Floor | Ceiling |
|---|---|---|---|---|---|---|---|
| Deconstructed | `UCje6-Yak9u1msy5l7sE9pBA` | bespoke 3D | ~monthly | 28 | **536,106** | 74,985 | 6,223,827 |
| — single-object era, 2023–24 | (subset) | bespoke 3D, 4–8 min | ~6 weeks | 10 | **365,607** | 74,985 | 3,763,988 |
| Casual Navigation | `UC5_HIscbiDZM0dMX-nCksuA` | drawn 2D schematic | every 8–10 days | 50 | **57,254** | 14,533 | 1,621,891 |
| Mido Explained | `UCH0fYAmg-lg8BauZAthSMrg` | stock factory footage | daily | 50 | **2,517** | 32 | 833,816 |
| Secrets Of Simple Things | `UC_jxb70Zvhkn9THs6uUXnsA` | stock/AI assembly | daily | 50 | **865** | 188 | 46,200 |

**All four are long-form horizontal.** Two were previously recorded as Shorts
channels. They are not.

### What this supports

A factor of 420 separates the top two from the bottom two *within* the same
format. Three variables co-vary across all four channels and cannot be separated
by this sample:

| | Top two | Bottom two |
|---|---|---|
| Visuals | drawn for the video | assembled from stock |
| Cadence | monthly / 8–10 days | daily |
| Subject discipline | one class, no repeats | repeats within weeks |

The defensible conclusion is the conjunction, not any single factor:

> Purpose-built visuals, disciplined subject selection and a sustainable cadence
> may produce a much stronger floor than daily explainers assembled from stock
> material. A timed pilot is the appropriate next test.

### Deconstructed's single-object era — an encouraging analogue, not our format

Ten videos, Dec 2023 – Dec 2024, single touched-and-opaque object, 4–8 minutes,
animated mechanism, no face. Median 365,607, floor 74,985, no dead videos.

| Video | Views | Runtime |
|---|---|---|
| How a torque wrench works | 3,763,988 | 5:57 |
| How a hydraulic jack works | 1,606,180 | 8:11 |
| How a gas regulator actually works | 1,521,971 | 4:54 |
| Cordless drill torque mechanism | 453,638 | 8:15 |
| How a lawn sprinkler works | 444,849 | 4:29 |
| How a pressure gauge works | 286,365 | 5:18 |
| How a gas lighter works | 121,155 | 7:22 |
| How a fire sprinkler works | 119,549 | 7:52 |
| How a car differential works | 81,031 | 8:14 |
| How a laser level works | 74,985 | 6:05 |

**Do not call this "our exact format".** It is bespoke 3D at roughly monthly
cadence, made in 2023–24. We plan flat 2D at an unknown cadence in 2026. Shared:
subject class, runtime, facelessness, one object per episode. Not shared:
production model, cost per minute, cadence, year. It is an encouraging analogue
and the source of the 75,000 reference benchmark — **which is not a target.**

Note also that these ten are **straight process explainers**. No incident, no
failure, no named victim. See Part 3.

### Queue exhaustion — the one reproducible behavioural finding

`raw/secrets-of-simple-things_long_recent50_2026-09-02.csv`, on a channel with a
median of 865:

- 26 Jul — "Does Charging Your Phone Overnight Actually Damage the Battery?"
- 13 Aug — "Charging Overnight: Why You've Been Doing It Wrong"
- 31 Aug — "Is Charging Your Phone Overnight Actually Bad for the Battery?"

and two days apart:

- 14 Aug — "How Does an ATM Verify Your PIN Without Exposing It?"
- 16 Aug — "How Does an ATM Know Your PIN Is Correct Without Revealing It?"

Also two GPS videos eleven days apart. Republishing yourself is the signature of
an exhausted queue. This is the evidence behind the rolling-buffer rule in
`../docs/01-product/subject-selection.md` — and the only queue evidence there is.

### Deconstructed changed subject and it worked

From Mar 2025 they moved from hand tools to historic machines and the median
rose. This is not a counterexample to the class rule; it is a deliberate
up-market move within the same superclass, made after a year with a converged
audience. The correct statement of the rule: **never change what kind of
curiosity you satisfy.** Subject matter may drift; the curiosity may not.

---

## Part 2 — UNVERIFIED. Do not cite as measured.

Everything below was measured in an earlier session, the raw data was not
retained, and it has not been re-pulled. Figures are recorded so the reasoning
trail survives, not because they are evidence.

| Channel | Figure held | Problem |
|---|---|---|
| Null State | median 243, 63 videos, daily | Channel ID unknown. Load-bearing for gate 1 and **cannot currently be checked**. |
| Small Things | median ~3,000, 281 videos | Not re-pulled. |
| Everything Simplified | median ~1,250, 20 videos, ceiling 2,146,250 | Not re-pulled. |
| The Secret Life Explained | median ~235; tower crane 545,592; pivot to 12 and 5 views | **Permanently unverifiable.** Video count has fallen from 21 to 13 — videos were deleted. The series cannot be reconstructed. |

**The Secret Life Explained pivot was the most vivid evidence in this folder and
it is gone.** The class rule now rests on Secrets Of Simple Things and on
Deconstructed's deliberate drift, both verified. Stop quoting the crane example
as measured.

The earlier "2×2" (familiarity × stayed-in-class) and the "same subject, two
channels" plug comparison both depended on unverified figures and are withdrawn
pending a re-pull.

### Failure-narrative channels — scale only, not floors

| Channel | Subs | Videos | Lifetime **mean** views |
|---|---|---|---|
| AiTelly | 2.03M | 369 | — |
| Underworld | 2.00M | 537 | 1,696,835 |
| Bright Sun Films | 1.65M | — | 1,203,794 |
| The Efficient Engineer | 1.49M | 47 | 1,400,253 |
| Fascinating Horror | 1.45M | 461 | 705,126 |
| Dark Records | 650k | 146 | 1,012,891 |
| Spds | 454k | 39 | 1,115,248 |

These are **lifetime means from a search endpoint**, not medians, and heavy tails
make means meaningless here. They establish that incident-driven channels can be
large. They say nothing about floors and nothing about our format.

---

## Part 3 — Failure framing is unmeasured

An earlier version of this file said documented incidents "outperform
hypotheticals at scale". **That claim is withdrawn. It was never tested.**

- No straight-process control was measured.
- Every figure in the failure-narrative table is a lifetime mean.
- **Our best verified comparable is a straight process explainer.**
  Deconstructed's single-object era — median 365,607, floor 74,985 — is "How a
  torque wrench works." No incident. No failure. No named victim.

Status: a **live hypothesis**, adopted because it is cheap and differentiating,
not because it is measured.

Consequence, adopted 2 Sep 2026: a documented case is **no longer a gate**. It is
a `case_strength` field that sets priority and narrative treatment. See
`../docs/01-product/subject-selection.md`.

---

## Part 4 — Cadence

**Undecided.** Superseding every earlier figure in this folder, including the
"2–3 per week" that closed the previous version.

| Channel | Cadence | Median |
|---|---|---|
| Deconstructed | ~monthly | 365,607–536,106 |
| Casual Navigation | every 8–10 days | 57,254 |
| Mido Explained | daily | 2,517 |
| Secrets Of Simple Things | daily | 865 |

Daily is what both low-floor channels do. Nothing here tells us what *we* can
sustain. **Build time settles cadence, not competitor observation.**

---

## Part 5 — RPM

Education & Science long-form ~$10.22 median RPM; US Shorts ~$0.328. **No primary
source recorded for either.** Treat as folklore.

Mid-roll ads require 8+ minutes — this one is a published YouTube policy and is
reliable. Vertical video over three minutes is not a Short and receives no
Shorts-feed distribution.

The planned RPM-by-length experiment could not be run: `estimatedEarnings` is
populated on roughly 2–4% of vidIQ records and the sub-8-minute cohort returned
n=1. Reported as undesignable rather than faked.
