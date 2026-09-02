# Working premise - "what happens if you use the wrong X"

> **Status: directional and subject to adjustment.**
>
> This is a working premise adopted to give topic selection, script structure and
> cel-library construction a shared target. It is not a locked niche. Nothing has
> been published under it and it is supported by reasoning, not by data. If the
> pilots do not perform, discard it rather than defending it. Recorded as `D-015`.

## The premise

Every episode presents a common, plausible, instinctive action and shows what it
actually causes - then shows the correct action.

```text
familiar object -> the wrong choice most people would make -> the consequence -> the correct choice
```

## Why this premise and not "every type of X"

### Production argument

This is the stronger of the two arguments and the reason the premise was adopted.

| | "Every type of X" | "Wrong X" |
|---|---|---|
| Art cost | Scales with the length of the list | Bounded at a contrast, normally two or three items |
| Can the list be shortened? | No - the list *is* the promise | Not applicable |
| Central character beat | Differs per item | Identical every episode |
| Effect on the cel library | Widens; each subject needs new specifics | Deepens; the same spine is reused |

The recurring beat - instinctive wrong action, consequence, correction - is the
`wrongMove` to `selfCorrect` pair already registered in
`src/library/observer/cels.ts`. Reuse compounds across episodes instead of
plateauing, which is the first structural reason to believe an eight-hour weekly
ceiling is reachable.

### Editorial argument

The premise satisfies all three archetypes in `youtube-subject-research.md` at
once, which is uncommon:

| Archetype | Satisfied by |
|---|---|
| Information compression | There is a taxonomy; the episode isolates the part that matters |
| Counterfactual / aftermath | "What happens if" is the frame itself |
| Hidden or insider knowledge | The expert knows which choice is wrong; the viewer does not |

It also supplies, by construction, the two things candidates most often fail:

- **Human stake.** "Wrong" entails consequence. The danger angle never has to be
  searched for. This is a 2x-weighted dimension in `topic-selection-framework.md`.
- **Escalation.** Mildly wrong, badly wrong, catastrophically wrong is the
  premise's natural shape, which satisfies the visual-escalation test without
  additional design.

Packaging maps directly onto the existing thumbnail formula - familiar object,
wrong variant, visible consequence - with nothing left to invent.

## Risks

These are recorded so they are not rediscovered later.

1. **Permanent sourcing burden.** Every episode makes a consequence claim, so
   every episode needs primary sources. The 2.0 h research allocation in
   `production-workflow.md` is probably light for this premise; budget nearer 3 h
   and take it from elsewhere.
2. **Policy and monetisation exposure.** "What happens" is defensible framing;
   "how to cause it" is not. Weapons, drugs and medical territories are
   constrained or demonetised regardless of framing, which narrows the usable
   subject pool more than it first appears.
3. **Asymmetric fragility.** A channel whose entire promise is *the thing you
   believe is wrong* does not survive being confidently wrong in public. One
   well-shared correction damages the premise rather than the single video.
   Sourcing discipline is load-bearing here.

## Pilot slate

Per the pilot-selection rule, three candidates sharing the psychological promise
but differing in surface territory, so that a result distinguishes the premise
from the subject.

| Pilot | Territory | Wrong action |
|---|---|---|
| Wrong fuel in the car | Vehicles / money | Filling a diesel with petrol, or the reverse |
| Wrong wall fixing | DIY / home | A plasterboard-rated fixing in the wrong substrate |
| Wrong extinguisher | Fire safety | Using the wrong class on a cooking-oil fire |

### Scored through `topic-selection-framework.md`

Hard gates: all three pass. Scores are 0-5, with the pilot weightings applied
(stop-scroll, human stake and curiosity gap at 2x; production fit and source
quality at 1.5x). Maximum weighted score is 75.

| Dimension | Weight | Fuel | Fixing | Extinguisher |
|---|---:|---:|---:|---:|
| Stop-scroll clarity | 2.0 | 5 | 4 | 4 |
| Human stake | 2.0 | 4 | 3 | 5 |
| Curiosity gap | 2.0 | 4 | 4 | 4 |
| Compression satisfaction | 1.0 | 3 | 4 | 5 |
| Escalation | 1.0 | 4 | 4 | 5 |
| Visual inventory | 1.0 | 4 | 5 | 5 |
| Source quality | 1.5 | 4 | 4 | 4 |
| Series depth | 1.0 | 3 | 5 | 4 |
| Revenue compatibility | 1.0 | 5 | 5 | 3 |
| Production fit | 1.5 | 5 | 4 | 5 |
| Competitive opening | 1.0 | 3 | 4 | 2 |
| **Weighted total** | | **61.5** | **61.0** | **63.5** |

### Reading the scores honestly

The extinguisher subject scores highest, and it should still not be the first
publish.

The framework states that the model "ranks tests; it does not forecast views."
That caveat is doing real work here. The extinguisher subject's single weakest
dimension is competitive opening at 2 - the territory is heavily worked by
firefighter creators on both YouTube and TikTok - and that is plausibly the
dimension most likely to determine the actual outcome. An additive score lets ten
strong dimensions bury the one that decides the result. This is a known limitation
of additive scoring, not a reason to distrust the ranking, but it means the
ranking should not be read as an ordering of expected performance.

**Recommended first publish: wrong fuel.** Comparable stake, materially less
competition, no safety-liability exposure, advertiser-friendly territory, and it
still exercises the `wrongMove` to `selfCorrect` spine.

**Recommended format test: wrong extinguisher.** The props and several cels
already exist, so it is the cheapest test of whether execution alone can
differentiate in a worked territory. That is a genuinely useful thing to learn,
and it is better learned second.

## Structural notes for short-form

- The counterintuitive element leads. The wrong action and its consequence belong
  in the first two seconds, not as the payoff at second ten. The alarm test scene
  is ordered establish, compare, wrong move, which is the correct order for
  long-form and the wrong order here.
- Target 25-35 seconds. Fifteen is short even for the format.
- Design the closing beat to cut cleanly back to the opening frame. Rewatch is a
  real ranking input.
- Stage inside the safe region defined in `src/vertical/ShortsSafeArea.tsx`.

## Open questions

- Whether the premise sustains across a series or becomes formulaic by episode
  five. Plan variation inside the frame before it is needed.
- Whether short-form monetisation supports the business at all. Reopened by
  `D-016`.
- Whether accuracy can be verified inside the research budget every week.
