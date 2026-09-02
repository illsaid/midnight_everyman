# Observer pose library v1

## Objective

Create a compact semantic character library that lets a scene request a clearly named pose without commissioning or hand-registering a new drawing. Version 1 contains 24 approved held poses: six alarm poses plus eighteen general-purpose poses.

Action cycles are deliberately separate. `run-away-key` and `jump-joy-key` are useful held extremes and visual references; they do not pretend to be complete run or jump animation.

## Master-sheet production

The eighteen new poses are generated as three six-character master sheets. Each sheet is a 3 x 2 grid, read left-to-right and top-to-bottom. Do not generate text labels inside the art. Panel order is the label.

| Sheet | Panels 1-6 |
|---|---|
| A - information | `think-chin`, `inspect-forward`, `point-right`, `present-open`, `compare-hands`, `shrug-confused` |
| B - emotion | `suspicious-squint`, `shock-large`, `fear-brace`, `panic-hands`, `joy-open`, `relief-sigh` |
| C - physical | `sad-slump`, `anger-protest`, `sleepy-standing`, `crouch-cover`, `run-away-key`, `jump-joy-key` |

## Artwork constraints

- Preserve the approved Observer identity exactly.
- Full figure in every panel with generous separation and no overlap.
- Same apparent standing height for ordinary upright poses.
- Flat `#00ff00` background with no floor, shadow, glow or texture.
- No text, labels, borders, props or scenery.
- Teal jacket, white shirt, black narrow tie, coral trousers and black shoes.
- Economical dark linework and flat midcentury-commercial color.
- Default facing is screen-right; Remotion mirrors the complete cel when screen-left is required.

## Registration contract

Each extracted PNG receives:

- semantic pose ID
- source sheet and panel number
- intrinsic canvas size
- measured ground/contact anchor
- native scale relative to a 700 px Observer
- facing direction
- tags and rhetorical function
- approval status and version

The machine-readable panel map is `work/pose-library-v1/pose-manifest.json`.

## Build order

1. Generate the three masters.
2. Reject whole sheets with identity or spacing failure; do not repair six panels independently.
3. Extract viable panels to transparent PNG.
4. Calculate alpha bounds and anchors mechanically.
5. Register cels in `src/library/observer/`.
6. Render one labeled Remotion catalog for the human quality gate.
7. Build action packs only after the held library passes.

## Approval

The user approved all four catalog pages on 2026-08-14. All 24 poses are canonical. `run-away` and `jump-for-joy` are the first registered action packs built from the approved keys.
