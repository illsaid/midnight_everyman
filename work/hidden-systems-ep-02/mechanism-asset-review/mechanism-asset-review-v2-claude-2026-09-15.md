# escalator-mechanism-v2-candidate — review

Reviewer: Claude. Author: Codex. 15 Sep 2026. **No file edited.**
Re-derived from the file, not read from `review.json`.

## All six v1 findings are fixed, and two were fixed better than proposed

**Finding 1 — track geometry.** Resolved, as real geometry rather than cosmetically:

| node | front y | rear y | separation |
|---|---|---|---|
| 0 (bottom landing) | 805 | 805 | **0 — converged** |
| 1 | 805 | 805 | 0 |
| 2 | 777 | 806 | +29 |
| 3 | 737 | 787 | +50 |
| 4 (incline) | 333 | 385 | **+52 — separated** |
| 5 | 316 | 367 | +51 |
| 6 | 294 | 307 | +13 |
| 7 (top landing) | 286 | 286 | **0 — converged** |

Coincident at both landings, ~50px apart across the incline, smooth transitions.
That is the mechanism the narration describes. The two are also now visually
distinguishable where they run close — front solid ink, rear dashed `8 9` in
reference grey.

**Findings 2 and 3 — colour.** Resolved, and the recommendation was taken
wholesale. The base is five values, all house, with **zero state colour in it**:
ink, reference, paper, ink-mute, cutaway. Form now carries category; colour is
reserved entirely for state.

**Finding 4 — return steps.** Now drawn and legible as the same steps inverted.

**Finding 5 — labels.** `labels-components` and `labels-review` split exactly as
proposed. See the one remaining item below.

**Finding 6 — floor.** `floor-datum` group added.

### Two things that go past what was asked

**`data-part-role` on every group** — seven roles: `drive`, `drive-path`,
`fixed-guide`, `fixed-structure`, `fixed-warning-form`, `moving-assembly`,
`safety-device` (five of those). A scene can now select by role rather than by a
hardcoded list of ids. That is a better selector surface than the one I suggested
and it will survive renames.

**Per-step wheel anchors.** Every step carries
`step-NN-front-wheel` / `step-NN-rear-wheel` with `data-anchor` and explicit
coordinates:

```
<circle id="step-04-rear-wheel"  data-anchor="rear-wheel"  cx="527" cy="713" r="11"/>
<circle id="step-04-front-wheel" data-anchor="front-wheel" cx="609" cy="668" r="14"/>
```

This is what makes Failure 3 animate cheaply — the sag becomes one wheel leaving
one track, driven from an anchor that already exists.

## Re-verified mechanics

| Check | Result |
|---|---|
| 16 required groups, exactly once | **PASS** |
| XML well-formed, `svgSha256` matches | **PASS** |
| Gradients / filters / partial opacity / raster | **0 / 0 / 0 / 0** |
| Palette | 5 values, all house, **no strays** |
| Geometry inside the viewBox | **PASS** — all coords within 0–1920 |

On that last row: the render reads as though the machine runs off both edges.
It does not. The tracks terminate at x=185 and x=1775 and the review background
rules run to the margins. Nothing is clipped. I had this down as a suspected
defect from the image and it was wrong.

## What remains

### 1. `labels-components` holds review annotations, not captions

```
labels-components:  TRACKS SEPARATE · TRACKS CONVERGE ·
                    SHARED SAFETY-DEVICE FORM · RETURN STEPS
labels-review:      THE MACHINE UNDER THE STAIRS · EPISODE 02 · REVIEW V2 ·
                    NEUTRAL BASE · FORM = CATEGORY · COLOUR = STATE ·
                    GENERALIZED EXPLAINER ASSET…
```

The split is structurally right but the contents are miscategorised. Those four
strings are notes about *what changed in v2*; they are not captions for the film.
Switch `labels-components` on in a scene and the episode gets annotated with
reviewer notes.

The v1 component names — `COMB PLATE + TEETH`, `MOTOR + DRIVE CHAIN`,
`STEP MONITORING DEVICES` — have been dropped and are what should live there.
Four-line fix; worth doing before anything imports the asset.

### 2. The state vocabulary is declared but not defined

The architecture is now right: neutral base, roles addressable, colour reserved
for state. Nothing yet says **which colour a role takes in which state**.

Without that table, each scene component will decide for itself, and the drift
that the design system exists to prevent arrives through the back door. It is
also the thing that makes the Hong Kong beat land — the broken-chain device
failing to fire is a *state that does not happen*, and that needs a defined
visual.

Suggested shape, as a companion file or a block in `review.json`:

| role | rest | armed / active | tripped | failed |
|---|---|---|---|---|
| `safety-device` | ink | — | coral | ? |
| `drive` / `drive-path` | ink | mustard | — | ink-mute |
| `moving-assembly` | ink | mustard | — | — |
| `fixed-guide` / `fixed-structure` | reference | — | — | — |

The `failed` column is the one the episode actually needs and the one with no
obvious answer. Worth deciding deliberately rather than per-scene.

### 3. Open question, not a finding — value hierarchy

Five values across a lot of components means that in the long stretches where
nothing is in a state, the frame has no focal point. That may be exactly correct:
a quiet base is what makes state colour pop, and `paper` / `panel` / `cutaway` /
`reference` are available if more tonal separation is wanted later.

Not worth changing on the strength of a still. Worth looking at again on the
first scene render.

## Recommendation

**Approve for promotion**, with item 1 done first — it is four strings and it
stops reviewer notes reaching the screen. Item 2 is the natural next artifact and
should exist before the first scene component is written, not after.

Nothing here blocks the build.
