# Competitive landscape — September 2026

**Measured 14 Sep 2026 via vidIQ (`vidiq_youtube_search`, `vidiq_channel_videos`).**
Figures are as returned that day and will drift.

## Method note — why this was run twice

The first pass asked "which candidate subjects are uncovered?" That question is
wrong and the answer it produced was discarded. Absence of coverage is weak
evidence: a subject may be uncovered because nobody wants it.

The second pass asked **"what has already worked, and what is the unclaimed angle
inside it?"** Everything below the first section uses the second question.

One constraint survives the change: a channel with four subscribers cannot take a
head term from a 4.4M-subscriber incumbent, because YouTube will not serve it
there. The target is a **proven subject with an unclaimed angle**, not a proven
subject copied straight.

---

## Part 1 — the failing cohort

Two channels created in the last three months are running a near-identical
premise to Hidden Systems and working through substantially the same object list.
Neither was known to this project.

### Beneath the Wires — `UCmDVgPdiBFvHEl0FW9tkZxA`

36 subscribers. Ten long-form uploads, 20 Jun – 17 Jul 2026, then silent for
eight weeks. 11–13 minutes each. Descriptions state "Every diagram and animation
is built from scratch for this topic. No stock clips, no templates" and link
primary sources — ASME, Otis, Guinness World Records.

Views: 34, 44, 61, 138, 365, 57, 69, 331, 197, 80. Median ≈ 75.
Includes "The Hidden Brake That Stops a Falling Elevator" (61) and "The Hidden
Machine Inside Every Escalator" (80). Their elevator video cites Betty Lou Oliver
and the 1945 Empire State Building collision — the exact anchor recorded against
our lift-governor candidate.

### Physical invisible forces — `UCn7UoQ895POl-PIC2Rkws1Q`

4 subscribers. 32 long-form uploads in 25 days — roughly two per day — 20 Aug to
14 Sep 2026. Length has fallen across the run from ~17 min to ~5 min.

Direct collisions with `content/candidates.csv`:

| Their video | Views | Our candidate |
|---|---|---|
| Why Your Seatbelt Yanks Itself Tight In A Crash | **1,764** | Seatbelt pretensioner |
| The Cable Snapped. That's What Turned the Brake On. | 176 | Lift governor |
| Why Your Car Is Designed To Deflate Your Airbag | 104 | Car airbag sensor timing |
| Your House Key Is Solving a 100,000-Way Puzzle… | 0 | Keycard and door lock |
| Stop Fighting Your Thermostat—Here's Why It's Doing This | 0 | Thermostat differential |

Most uploads sit between 0 and 20 views.

**What this cohort supports:** gates 1 and 2 are necessary but not scarce.
"Touched" and "opaque" are good filters, and that is the problem — anyone
applying them honestly lands on the same twenty objects. Three independent
parties converged on elevator brake, escalator, seatbelt, airbag, thermostat and
lock. Pilot 01's four views are consistent with this population; the correct
comparison is not "new channels" but "new channels with this premise", and that
cohort's median is under 100.

**What it does not support:** that Midnight Everyman will fail. Both are a
markedly lower craft tier. And it says nothing causal about cadence, length or
quality — two channels, no controls.

---

## Part 2 — what has actually worked

### Jared Owen (`UCbsfyGlrjrKQC0gbzK0-EiA`, 4.43M subs), ordinary objects only

Spacecraft, monuments, military and franchise IP removed — that is a separate lane.

| Video | Views |
|---|---|
| How does an Electric Motor work? (DC Motor) | 25,050,758 |
| **How does an Escalator work?** | **19,691,150** |
| How does a VCR work? | 8,648,788 |
| How does an Elevator work? | 7,560,314 |
| How does an Oscillating Fan work? | 7,474,696 |
| How does a Combination Lock work? | 7,458,768 |
| How does a Bowling Pinsetter Machine work? | 6,918,938 |
| How does a Pin Tumbler Lock work? | 5,039,552 |
| How does a Gumball Machine work? | 4,084,368 |
| How do Window Blinds work? | 2,503,938 |

### Three findings that contradict current project documents

**1. The rung-one title shape is not a weakness.** `subject-selection.md` lists
"How a [OBJECT] actually works" as a rung-one shape and `packaging.md` requires
escalating it. Jared Owen never escalates. Every title in the list above is
literally "How does a [OBJECT] work?" — at 2.5M to 25M views. Escalation may
still be right for a small channel that cannot win a plain head term, but the
stated reason (rung-one shapes underperform) is not supported.

**2. The danger frame may cost views rather than earn them.** A directly
comparable pair, same object:

| Video | Framing | Views |
|---|---|---|
| Jared Owen — How does an Elevator work? | plain mechanism | 7,560,314 |
| Cheddar — Why Movies Are Wrong About Elevator Free Falls | danger | 722,116 |

10× for the non-danger framing. Confounded by channel size and age, so this is
not proof. But nothing in the top-ten list above uses a danger frame at all, and
the channel's contract — "the hidden device that breaks, burns, bends or bites
before you do" — is a danger frame. This is the single most important open
question for the channel and should be tested, not assumed.

**3. Escalator is the strongest proven subject already in our pool.**
19.7M views, on a 4:59 video from 2019. Demand vastly exceeds the quality of
supply.

### The unclaimed angle inside the escalator

| Video | Format | Views |
|---|---|---|
| Zack D. Films — Why Escalator Steps Have Grooves | 23s Short | **49,274,248** |
| Zack D. Films — Why Escalators Have Brushes On The Side | 31s Short | **25,920,694** |
| Jared Owen — How does an Escalator work? | 4:59 long | 19,691,150 |

Zack D. Films has 28.4M subscribers and Shorts distribute differently from
long-form, so these numbers do not transfer. What they establish is that the
**questions** carry demand at enormous scale — and both are answered only in
under 31 seconds. Jared Owen's long-form video covers the drive mechanism, not
the comb plate or the brushes.

So: a subject proven at 19.7M in long form, whose two highest-demand specific
questions have no long-form treatment at all, already sitting in
`content/candidates.csv` as "Escalator comb plate and emergency stop".

Note also that "Why [OBJECT] has [ODD FEATURE]" is already listed as a rung-one
formula in `subject-selection.md`. It is doing 49M views unescalated.

---

## Recommended re-checks

- Re-measure both failing channels at the six-episode review. Whether
  *Beneath the Wires* resumes after its eight-week silence is more informative
  than its view counts.
- Before packaging any candidate, run this second-pass question on it: what has
  worked on this subject, and what inside it is unanswered?
- Treat finding 2 (danger frame) as an open experiment, not a settled reversal.
