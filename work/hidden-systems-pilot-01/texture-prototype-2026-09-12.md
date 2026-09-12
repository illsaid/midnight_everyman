# Bounded texture prototype — M05

**Status:** review only; not applied to the production assembly

**Artifact:** `assembly-review/texture-prototype-m05-v1.mp4`

**Clean reference:** `assembly-review/four-parts-v3-structural-clean.mp4`

## Question

Does a restrained, period-appropriate line boil plus paper tooth make the procedural
animation feel alive without compromising the stable type system or diagram clarity?

## Test

- 240 frames / 10.048 seconds / 1920×1080 / 24 fps with locked narration.
- Source range begins at cue 29 and runs through the opening of cue 31.
- Main copy and footer remain geometrically stable.
- The illustrated action panel alone receives a 1.35-pixel SVG displacement.
- The displacement seed advances every two frames to mimic held cel redraws.
- A deterministic two-frame CSS grain and restrained vignette cover the full frame.
- The corner label is review metadata and must not appear in production.

## Architecture finding

The installed `roughenEdges()` effect derives its edge mask from source alpha. Applied
once to the fully opaque master composition, it would primarily see the outer frame
rather than the internal vector lines. This prototype therefore uses a bounded SVG
displacement on the action panel instead of pretending the global effect solves the
problem.

The review implementation duplicates the M05 scene tree beneath a clip so the approved
scene remains untouched. That is safe for a visual test but is not the efficient global
implementation. If the look is approved, move the boil into a reusable illustration
layer or scene shell so each scene renders once; keep titles and captions outside it.

## Checks

- Project lint and TypeScript pass.
- Remotion bundle passes after registering the review-only composition.
- Three representative frames inspected; an inherited-font defect in the first test
  was corrected before export.
- Final file verifies as H.264/AAC at 24 fps.

## Owner decision

Pending. Do not apply this treatment to the master until the strength and scope are
approved.
