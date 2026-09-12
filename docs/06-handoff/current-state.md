# Current state handoff

**Project:** Midnight Everyman / Hidden Systems

**Current full assembly review — 12 Sep:** The clean `SprinklerPilotMaster`
composition has been re-rendered with the owner-approved M10 structural v5, M05
structural v3 and M11 structural v2 revisions integrated. Artifact:
`assembly-review/sprinkler-assembly-v7-structural.mp4`, 124,857,434 bytes and
280.811 seconds. Stream verification reports 6,738 H.264 frames at
1920×1080/24 fps plus 48 kHz stereo AAC narration. Post-render QA sampled 35
chronological checkpoints, with extra coverage across the three rebuilt scenes
and their boundaries; no blank placements, missing assets, obvious clipping or
text/action collisions were found. The separate M05 texture/line-boil prototype
is review-only and is not present in this master. The deliberate Pipe-scene
`PLACEHOLDER YEAR — VERIFY OR CUT` marker beneath `1994` remains the outstanding
pre-publication content decision; the closing sequence also remains at review
status rather than final approval.

**Current texture review — 12 Sep:** A bounded ten-second M05 excerpt tests a
1.35-pixel action-panel line boil held on twos plus deterministic low-opacity paper
grain. Main typography remains geometrically stable and the approved M05 source is
unchanged. Artifact: `assembly-review/texture-prototype-m05-v1.mp4`, 240 frames /
10.048 seconds at 1920×1080/24 fps with AAC narration. The first checkpoint exposed
missing font inheritance in the standalone wrapper; Arial was restored before export.
Lint/TypeScript, bundle and three corrected visual checkpoints pass. The prototype
duplicates the scene beneath a clip for safety, so it is not the production-efficient
implementation. Owner review is pending; do not apply globally yet. Full settings and
the alpha-mask reason for not using root-level `roughenEdges()` are recorded in
`work/hidden-systems-pilot-01/texture-prototype-2026-09-12.md`.

**Approved M11 — 11 Sep:** Structural v2 replaces the 300-head texture with
28 recognizable heads that continue beyond the clipped field. Six cue-locked beats
dismantle a false central network, pull back to the independent field, inspect one
local glass fuse, show out-of-phase waiting without any inter-head connection, then
reject both surveillance and central decision logic. The two far-right `WAITING`
tags were pinned inward after checkpoint QA caught their first version clipping at
the field edge. Clean artifact: `assembly-review/waiting-heads-v2-structural-clean.mp4`,
462 frames / 19.31 seconds at 1920×1080/24 fps with AAC narration. Lint/TypeScript
and render pass; six narrative checkpoints plus the corrected waiting state were
inspected. Owner approved this treatment on 11 Sep 2026. The v1 source is preserved under
`rollback/2026-09-11-pre-m11-structural/`; no master was rendered.

**Approved M05 — 11 Sep:** Structural v3 rebuilds the four-parts sequence as
one continuous cutaway with eight cue-locked functional actions: numbered exploded
overview, frame trace/anchor, cap seat/seal, deflector turn with a demonstrated spray
cone, opposing compression load, and a clipped 2.22x macro view for bulb, liquid and
the single air bubble. The fixed macro callout was corrected after checkpoint QA found
the camera-scaled version clipping at the right edge. Clean artifact:
`assembly-review/four-parts-v3-structural-clean.mp4`, 505 frames / 21.10 seconds at
1920×1080/24 fps with AAC narration. Lint/TypeScript and render pass; six narrative
checkpoints were inspected. Owner approved this treatment on 11 Sep 2026. The v2 source is
preserved under `rollback/2026-09-11-pre-m05-structural/`; no master was rendered.

**Approved M10 — 11 Sep:** Structural v5 resolves the owner's ratio-treatment
notes on the replacement/water-comparison rebuild. The vertical separator and
trailing underline remain removed; `1×` is teal again with an offset ink shadow,
`10–20×` uses the matching shadow at a smaller size, its qualifier has its own
line, and the closing pill fits without bleed. Clean artifact:
`assembly-review/replacement-v5-ratio-shadow-clean.mp4`, 733 frames /
30.54 seconds at 1920×1080/24 fps with AAC narration. Lint/TypeScript and render
pass; four revised comparison checkpoints were inspected. Owner approved this
treatment on 11 Sep 2026. The approved v1 source is preserved under
`rollback/2026-09-11-pre-m10-structural/` and no master was rendered.

**Previous full assembly review — 11 Sep:** The clean `SprinklerPilotMaster`
composition now covers all 6,738 frames with 21 contiguous placements. All
owner-approved standalone scenes and generated-source treatments are integrated;
the closing sequence remains explicitly at review status. Full artifact:
`assembly-review/sprinkler-assembly-v6.mp4`. It contains no rough-assembly banner
or motion-pending cards. Manifest compilation reports 21 scenes / 21 placements,
all 12 manifest tests pass, project lint and the Remotion bundle pass, and the
export verifies as 6,738 H.264 frames at 1920x1080/24 fps with AAC narration.
The post-render QA sampled 101 chronological frames into nine contact sheets;
no placeholder frames, blank timeline gaps or obvious text/action collisions
were found. The already-approved Pipe scene still visibly carries its deliberate
`PLACEHOLDER YEAR — VERIFY OR CUT` marker beneath `1994`; resolve that before a
publish master. Owner review of the complete assembly and closing remains pending.

**Current review — 11 Sep:** M10 structural v3 covers cues 76–84, 733 frames /
30.54 seconds. The approved v1 source was preserved before replacement. The new
candidate turns the first half into a continuous single-use service action—broken
bulb, rejected reset switch, spanner removal, new head and reseal—and the second
half into an animated 1x versus 10–20x water comparison. Clean approval artifact:
`assembly-review/replacement-v3-structural-clean.mp4`. Lint/TypeScript, bundle,
all 12 manifest tests and 733-frame export verification pass. Nine representative
frames were inspected after correcting the hose-label collision, stream overrun
and final payoff width. Owner approval remains pending; no new master was rendered.

**Approved standalone — 11 Sep:** HG06Review covers cues 35–36, 102 frames / 4.25
seconds. It uses source frames 0–101 of the owner-approved bin-fire performance:
the existing flame and smoke remain untouched while a restrained bin-centered
push, brief ignition locator and compact `SMOKE / RESPONSE · NONE` card reinforce
the two narration beats. V1 QA found the response card covering the door and its
leader crossing the smoke; v2 reuses the vacant upper-left title region and
removes the leader, leaving the character, fire and smoke unobstructed. Artifact:
`assembly-review/hg06-v2.mp4`. Source ESLint, targeted TypeScript, bundle and all
11 manifest tests pass. The final MP4 verifies as 102 H.264 frames at
1920x1080/24 fps with AAC audio. Owner approved v2 on 11 Sep 2026; it is
integrated in `assembly-review/sprinkler-assembly-v6.mp4`.

**Approved standalone — 10 Sep:** HG05Review covers cues 20–22, 191 frames /
7.96 seconds. The approved corridor performance runs continuously beneath a
circular macro reveal: `LOOK UP.` isolates the real ceiling head, an accurate
intact brass-head diagram carries “There it is,” and the live walk returns for a
`10,000× / WITHOUT A THOUGHT` payoff. Artifact:
`assembly-review/hg05-v8.mp4`. V1–v3 resolved clipped and misplaced diagram
labels. Owner feedback then moved the macro exit to the end of cue 21 so the
diagram remains intact through “a small brass fitting,” replaced the competing
gold counter with coral plus an ink offset shadow, and placed a clean hard cut
to the corridor exactly at the cue 21/22 boundary. V4–v7 were internal
transition QA; wipes, dissolves and a flash were rejected because they made the
edit feel late or visibly mechanical. Source ESLint, targeted TypeScript and
render pass. The final MP4
verifies as 191 H.264 frames at 1920x1080/24 fps with AAC audio. Owner approved
v8 on 10 Sep 2026; it is integrated in `assembly-review/sprinkler-assembly-v6.mp4`.

**Approved standalone — 10 Sep:** HG04Review covers cues 08–10, 240 frames /
10 seconds. The approved ceiling plate remains the visual source of truth; a
native mechanism lens makes the single opening head legible, then a local water
cone and direct-above-fire locator establish the spatial relationship before the
camera returns wide to prove the other two visible heads remain sealed and dry.
Artifact: `assembly-review/hg04-v2.mp4`. V1 was superseded after checkpoint QA
found overlapping cue copy and copy crowding the plant. Source ESLint, targeted
TypeScript, bundle and all 11 manifest tests pass. The final MP4 verifies as 240
H.264 frames at 1920x1080/24 fps with AAC audio. TypeScript now excludes the
archival rollback folder, so project lint passes without altering those copies.
Owner approved the treatment and timing on 10 Sep 2026; it is integrated in
`assembly-review/sprinkler-assembly-v6.mp4`.

**Current review — 10 Sep:** ClosingReview covers cues 91–93, 216 frames /
9 seconds. The first two cues stay on the approved sprinkler macro while native
glass, bubble and restrained pressure graphics resolve “a piece of glass holding
back a river.” A bounded light leak then returns to a clean frame derived from
the approved corridor plate; the Observer enters beneath the highlighted head
for “Look up. It’s still there.” Artifact: `assembly-review/closing-v1.mp4`.
Lint/TypeScript, bundle and all 11 manifest tests pass. Seven narrative
checkpoints were inspected; the final MP4 verifies as 216 H.264 frames at
1920x1080/24 fps with AAC audio. It is integrated at review status in
`assembly-review/sprinkler-assembly-v6.mp4`; owner review remains pending.

**Approved standalone — 10 Sep:** JudgementReview covers cues 69–75,
606 frames / 25.25 seconds. It combines the approved installer, kitchen and
office-fire plates with deterministic head selection, heat-path, early-discharge
and delayed-response overlays. The installer exit resolves into a graphic panel
that hides the source clip's incomplete empty-room tail. Artifact:
`assembly-review/judgement-v1.mp4`. Lint/TypeScript and bundle pass; seven
narrative checkpoints were inspected, and the first straight-line discharge was
replaced by a curved, translucent spray cone before the review render was
replaced. Owner approved the treatment and timing on 10 Sep 2026; it is
integrated in `assembly-review/sprinkler-assembly-v6.mp4`.

**Approved standalone — 10 Sep:** ColourCodeReview covers cues 61–68,
including the approved HG-08 boiler interruption. It assembles seven actual bulb
colours, isolates each rated temperature, escalates through the high-heat trio,
then returns from the boiler room to “a judgement — not a setting.” Standalone
artifact: `assembly-review/colour-code-v1.mp4`, 550 frames / 22.92 seconds.
Lint/TypeScript and bundle pass; eight narrative checkpoints were inspected and
the final subtitle was moved clear of the judgement-card border before the
review render was replaced. Owner approved the treatment and timing on 10 Sep
2026; it is integrated in `assembly-review/sprinkler-assembly-v6.mp4`.

**Approved standalone — 10 Sep:** MechanismRecapReview covers cues
57–60, 330 frames / 13.75 seconds. False sensor, wiring, computer, control-panel
and decision cards assemble around the intact head, then are struck out with
bounded starburst impacts. A short light-leak transition collapses the false
complexity into the shrinking bubble and saved-building payoff. Artifact:
`assembly-review/mechanism-recap-v1.mp4`. Lint/TypeScript and bundle pass; seven
narrative checkpoints inspected after correcting premature connection lines.
Owner approved the treatment and timing on 10 Sep 2026; it is integrated in
`assembly-review/sprinkler-assembly-v6.mp4`.

**Approved standalone — 9 Sep:** HeatNotSmokeReview covers cues 37–40,
211 frames / 8.79 seconds. V2 replaces the unreadable abstract nose with a
labelled human-profile/nose test, then uses a smoke-versus-heat input diagram
before opening into a layered ceiling cross-section with three heads. Standalone
artifact: `assembly-review/heat-not-smoke-v2.mp4`. Lint/TypeScript and bundle
pass; five narrative checkpoints inspected after correcting badge width and
final-copy wrapping. V1 is superseded. Owner approved the revised treatment and
timing on 9 Sep 2026; it is integrated in
`assembly-review/sprinkler-assembly-v6.mp4`.

**Approved standalone — 9 Sep:** TriggerBridgeReview covers cue 34,
66 frames / 2.75 seconds. Intact coral bulb, dimmed hardware, teal outline and
gentle push-in; text stays left of the action. Artifact:
`assembly-review/trigger-bridge-v1.mp4`. Lint/TypeScript and bundle pass;
beginning, middle and ending frames inspected. Owner approved the treatment and
timing on 9 Sep 2026; it is integrated in
`assembly-review/sprinkler-assembly-v6.mp4`.

**Approved standalone — 9 Sep:** MovieMythReview covers cues 05–06
(117 frames), freezing approved deluge footage, stamping MOVIE MAGIC then
COMPLETE NONSENSE, and fading toward paper. Review artifact:
`assembly-review/movie-myth-v1.mp4`. Owner approved it on 9 Sep 2026; it is
integrated in `assembly-review/sprinkler-assembly-v6.mp4`.

**Source intake — 9 Sep:** Owner approved the five remaining Grok clips and chose
the HG-04 ceiling image as an intentional still. All six sources are registered
as approved assets; five MP4 copies archived and hash-verified. See
`work/hidden-systems-pilot-01/manual-generation-pack/DELIVERY-INTAKE.md` for mapping.
Source acquisition is complete for this plan. These assets were subsequently
wired into the scene components and full v6 assembly. No render occurred during
the intake itself.

**Date:** 8 Sep 2026

**Text-layout pass:** User requested a collision check of Claude's three scenes,
with scene-only renders. Independence now has a clipped action viewport below
the headline/strap, compact row spacing, and a numeric callout that follows the
selected head during the split. Pipe's subtitle clears its wrapped headline and
the gauge label has a safer right margin. Ceiling Reveal has no visible text
collision and is unchanged. Review: `independence-text-v4-1.mp4` and
`pipe-text-v2-1.mp4` under `assembly-review/`. These layout revisions await review;
the manifest retains earlier approvals and identifies revisions separately.
The full v5 export was not rerendered and does not contain these corrections.

**Latest build:** M10 replacement/water comparison (cues 76–84, 733 frames)
and M11 waiting heads (85–90, 462 frames) are implemented, wired and rendered
for review. Excerpts: `replacement-v1-1.mp4`, `waiting-heads-v1-1.mp4` in
`assembly-review/`. Lint, TypeScript, bundle and 11 manifest tests pass;
representative frames inspected. Owner approved both treatments and timing on
8 Sep; scene and layer approvals recorded. Full v5 integration export completed
in 577.74 seconds. Its review banners predate these approvals; visuals are unchanged.
Whole-pilot approval remains pending. Base placement coverage is 4,569/6,738 frames (67.8%).

**Approved standalone — 11 Sep:** Native two-head payoff, cues 52–56, replaces planned HG-07
generated footage. `assembly-review/HG-07-v1-1.mp4` shows localized heat receding,
fire control, continued spray and an intact dry neighboring bulb. The scene is
owner-approved; earlier opening, Four Parts and activation approvals are
preserved. Its earlier full integration export was `assembly-review/sprinkler-assembly-v4.mp4`.
The export completed in 511.23 seconds: 1920x1080, 24 fps, 6,738 video frames,
with AAC narration. It predates the three new scene additions below; it is not
a full export of the latest source and has not received whole-pilot approval.

**Owner approval (8 Sep):** Independence, Pipe and Ceiling Reveal are approved
as-is for now. Owner chose to continue production and may revisit them later.
Manifest scene/layer approvals recorded; subsequent text fixes are listed above. M10 replacement
and M11 waiting heads received their own subsequent approval, recorded above.

**Deferred review notes:** Independence, Pipe and Ceiling Reveal rendered successfully
on Windows; production-manifest tests passed 9/9. Selected-frame inspection found
issues retained for potential later tweaks: Ceiling Reveal's wipe covers rather
than uncovers the ceiling; Independence overlaps its headline and detaches the
selection marker during its late layout move; Pipe's rotated ceiling panel obscures
the pipe. Drop the unresearched year chip. Prefer independent activation wording
over "no system". These findings do not block continued production; no corrections
were applied to the three components. The visible year placeholder remains a
delivery cleanup item, separate from the owner's approval to proceed.

**Latest approval:** Activation FX v2 spans cues 41–51, frames 2792–3503.
`assembly-review/activation-fx-v2-1.mp4` was approved by the owner on 6 Sep, adding localized
heat glow, pressure vibration that stops for suspense, a bounded Remotion
starburst, camera kick, faster fragments, splash and varied droplets. Timing
is unchanged from the owner-accepted v1 timing. The sequence uses the approved mechanism palette,
shrinking bubble, pressure hold, fragments, falling cap, jet and spray.
Cue 46 holds on the stressed bulb rather than cutting to the Observer; this
editorial variation is included in the approval. Existing approvals remain unchanged.
The approved sequence is integrated into the v4 full export noted above.

**Production update:** The assembly now reads `production-manifest.json` through
generated placement data. HG-02/HG-03 motion deliveries from Grok are now owner-approved
and preserved in `source-media/grok`, registered as `lighter-grok-v1` and
`deluge-grok-v1`. Both are inserted through the manifest: lighter uses its first
58 frames at normal speed; deluge spans cues 03–04 at 241/265 speed. Opening
edit approved by owner on 6 Sep: `assembly-review/opening-grok-v1.mp4`. Lighter is 145 frames (6.04 s), deluge 241 frames
(10.04 s), both 24 fps. Cues 26–33 share one persistent Four Parts schematic,
approved in its v2 visual treatment on 6 Sep. Corrected v2 cue timing is unchanged and was accepted
by the user. See `work/hidden-systems-pilot-01/PRODUCTION-WORKFLOW.md` for delivery
registration and scene-only rendering. No additional paid generation was run.

**Latest visual review:** Owner judged Four Parts v1 an acceptable first pass
but requested stronger motion and unmistakable highlighting. The v2 scene
revision uses teal isolation, dimmed context, animated callouts, an exploded
intro and eased macro framing. Owner approved the scene-only `four-parts-v2-1.mp4` on 6 Sep;
the full `sprinkler-assembly-v3.mp4` contains the earlier v1 mechanism treatment.

**Current pilot:** Sprinkler. The locked VO is 280.764 seconds. The approved
shooting plan is `work/hidden-systems-pilot-01/shooting-script-v2.md`.
HG-01, HG-09 and HG-12 v2 are approved and downloaded. The current task is
`SprinklerPilotAssembly`, a timed review composition with remaining footage and
mechanism graphics mostly represented by placeholders. Earlier lift-governor planning
below is historical and no longer the next production action.

**Canonical repository:** `C:\Users\dicku\Videos\midnight-everyman`

## Status

The Hidden Systems editorial strategy and the Midnight Everyman production
system now form one canonical project. Hidden Systems is the launch territory;
Midnight Everyman remains the internal codename, Observer identity, dry voice
and reusable Remotion architecture. The public channel name is undecided.

Nothing has been published. The existing 63-second wrong-fuel composition is a
verified production proof, not the launch episode and not a fact-checked
publication asset.

## Settled

- Faceless presentation
- 16:9, 1920 × 1080, 24 fps
- 5–8 minute launch product
- Purpose-built systems diagrams as the primary screen language
- One emotional viewer contract: the hidden device that breaks, burns, bends or
  bites before you do
- Every upload is a self-contained front door for the same broad viewer
- Everyman used selectively for reaction, scale and editorial personality
- Touched, opaque and packageable as the three production-readiness gates
- Documented cases treated as priority and narrative fields, not eligibility
- Dry, restrained humor that never obscures safety or factual claims
- Existing cel, asset-canon and bounded-effects architecture retained
- Organic launch validation; paid promotion withheld as an experimental boundary
- Scale-aware analytics with comments treated as qualitative evidence

## Unsettled

- Cadence
- Public channel name
- Narration method
- Failure-led versus process-led opening
- Eight-hour steady-state viability
- Audience performance
- Specific value proposition for any future owned-audience product

## Evidence state

- Four competitor samples reproduce from `research/raw/`.
- No verified Shorts comparison exists.
- Deconstructed's 75,000 minimum is a reference benchmark, not a target.
- Candidate incident descriptions are unverified until their source fields are
  populated and the mechanism relationship is checked.
- The existing wrong-fuel proof passed production QA but was not a publication
  fact check.

## Production state

- Remotion 4.0.509
- React 19.2.3
- TypeScript 5.9.3
- Canonical frame rate: 24 fps
- Preferred proof: `WrongFuelSystemsPilotFx`
- Production source: `src/systems-pilot-01/`
- Observer registry: `src/library/observer/cels.ts`
- Candidate pool: `content/candidates.csv`
- 20 candidates pass touched and opaque
- 0 candidates are fully packaged; 3 are required before the pilot

## Next action

Review `SprinklerPilotAssembly` against the locked narration, then replace its
placeholders in small batches. Use `work/hidden-systems-pilot-01/README.md` as
the production index. Assembly v2 uses ASR word timestamps with a three-frame
visual lead to correct the variable drift in v1. Final timing review remains open.

## Required verification

Before editing code, run `npm run lint`. After composition or configuration
changes, run `npm run build`, render representative stills and render the full
composition. Record owner and machine time separately.

## Restart procedure

1. Read `PROJECT.md` and `AGENTS.md`.
2. Read this file and `decision-record.md`.
3. Read the three product rules under `docs/01-product/`.
4. Read `research/sources.md` before using competitor figures.
5. Inspect the existing wrong-fuel proof and `src/systems-pilot-01/`.
6. Continue from the next experiment without reopening settled format choices.
