# escalator-mechanism-v1-candidate — review

Reviewer: Claude. Author: Codex. 15 Sep 2026. **No file edited** — Codex holds BUILD.
Flatness, the restricted palette and the absence of gradients are deliberate and
were not scored as faults.

## Verified, not trusted

Every claim in `review.json` re-derived from the file:

| Claim | Result |
|---|---|
| 16 required groups present exactly once | **PASS** — none missing, none duplicated |
| XML well-formed | **PASS** |
| `svgSha256` matches the file | **PASS** |
| No gradients | **PASS** — 0 |
| No filters or drop shadows | **PASS** — 0 |
| No partial opacity, no raster images | **PASS** — 0 and 0 |
| All text inside `labels` | **PASS** — 11 of 11, zero text before the group |
| Palette | **CLEAN** — every colour is house. `#E4DCC4` is `cutaway`; my first check flagged it only because my own lookup table omitted that entry. Not a defect. |

`step-01`…`step-11` as individually addressable groups is the right call and
carries the M03 lesson — eleven large steps, not forty texture-sized ones.
Sourcing three manufacturer documents and stamping the disclaimer is good practice.

---

## Finding 1 — the two tracks are parallel straight lines, so the central mechanism is drawn inert

**Severity: highest. This is the thing the asset exists to show.**

```
front-track   M302 746 L1384 290    stroke #D5A84C  width 12
rear-track    M322 794 L1403 338    stroke #78975D  width 11
```

Two straight lines, constant offset (+20, +48) end to end. They never converge or
diverge.

The locked narration says:

> "Each step rides on wheels following two tracks. **As those tracks change
> position**, the tread stays level, rises into a staircase, then flattens at the
> landing."

Parallel tracks at fixed separation cannot produce that. The *changing vertical
separation* between front and rear track is the entire trick — converged at the
landings so the steps lie flat, diverged on the incline so they become stairs.

What has happened is that the staircase is drawn explicitly per-step
(`step-01`…`step-11` are placed as a stair), and the tracks are two decorative
lines underneath. The picture looks right; the mechanism it depicts does nothing.

**Why this is not cosmetic.** Failure 3 is "a damaged wheel or axle can let a step
ride too low." That beat needs the wheel-on-track relationship to be legible, and
it cannot be, because the tracks are not doing any work. The reveal beat and
Failure 3 both rest on this.

**Fix:** draw the tracks as the real geometry — converged at both landings,
separating through the incline — and place each step's front and rear wheel on
its respective track, so the step's angle is a *consequence* of where the two
tracks are. Then the sag in Failure 3 is one wheel leaving one track, and it
animates for free.

## Finding 2 — the colour semantics are inverted in three places, and the legend is short one entry

The legend declares four roles. `review.json` declares five — `fixedStructure`
`#356F70` is in the style block but has **no legend entry**, so the large teal
motor appears with no key.

Worse, three components carry the wrong role:

| Component | Drawn as | Actually is |
|---|---|---|
| `comb-plate` | `#D5A84C` — **MOTION / DRIVE** | fixed, and the Failure 1 safety device |
| `front-track` | `#D5A84C` — **MOTION / DRIVE** | fixed structure |
| `rear-track` | `#78975D` — **SAFETY DEVICE** | fixed structure |
| `motor` | `#356F70` — fixed structure | the thing that drives |

The two tracks are the same kind of object in two different semantic colours,
neither correct. The comb plate — the single most important component in the
episode, and the subject of the 49.3M-view proven question — is coloured as if it
moves. The motor is coloured as if it doesn't.

Real comb plates are yellow, so mustard may be a representational choice. If so
the legend needs a fifth entry and mustard cannot also mean "motion".

## Finding 3 — colour as permanent category collides with house rule 1

`visual-language.md` and the house rules treat **colour as state, never
decoration**. This legend makes colour a permanent *category*: a safety device is
green whether or not it has done anything.

That spends the colour vocabulary before the episode starts. When the comb switch
actually trips, or the broken-chain device fails to fire — the dramatic centre of
the whole film — there is no colour change left to make.

This is the same conflict already recorded about the Observer wearing coral
permanently.

**Fix, and it is cheaper than the current scheme:** *category by form, state by
colour.* The safety devices already share a shape — the rounded rect with dash
marks. That shape is doing the categorising, so the green is redundant. Draw all
fixed components in ink, let mustard mean *this is moving now*, and keep coral for
*this has tripped, or has failed to*. Then the Hong Kong beat has somewhere to go.

## Finding 4 — the return run has no styling of its own

`return-steps` contains six shapes with **no fill, stroke or stroke-width
attributes at all** — everything inherits from the parent. That is why they read
as background texture rather than as objects.

The narration gives them a beat: *"After that, the step carries on beneath the
floor. Upside down."* Right now the asset under-delivers one of the script's
better lines. They should read as unmistakably the same steps, inverted — not as
a ghost.

## Finding 5 — `labels` is flat, so production can only have all labels or none

All eleven text nodes sit in one group: the review furniture (title, episode
stamp, four legend entries, the disclaimer) and the four component labels
(`COMB PLATE + TEETH`, `MOTOR + DRIVE CHAIN`, `STEP MONITORING DEVICES`,
`TWO TRACKS · TWO WHEELS`) together.

Production wants component labels *without* the review shell. As built that is one
switch, not two.

**Fix:** split into `labels-components` and `labels-review`. Two wrapper groups,
no redrawing.

## Finding 6 — there is no floor line

The asset is called *The Machine Under The Stairs*, and there is no established
floor plane. "Under" needs a floor to be under. The comb plate currently floats at
the top right with nothing indicating that it is the surface people walk onto.

A single horizontal datum at landing level would fix it. (Human figures are
correctly a scene-layer concern, not this asset's job.)

---

## Summary

The engineering is clean and the discipline around it is better than Pilot 01's.
The defects are all in what the drawing *asserts*, and Finding 1 is the one that
matters: the asset currently depicts an escalator that looks correct and works by
magic. Fixing the track geometry fixes the reveal beat, Failure 3, and most of
Finding 2 at the same time.

Findings 5 and 6 are minutes of work. Findings 2 and 3 are one decision about what
colour is for.
