# Experiment log

## Full sprinkler pilot integration — 11 Sep 2026

The production manifest was reconciled from the earlier 67.8%-covered rough
assembly to 21 contiguous placements covering all 6,738 frames. Ten standalone
scene treatments were inserted as native Remotion components rather than
recompressed review MP4s. HG-07 is owner-approved. The closing treatment is
included at review status; it has not been silently promoted to approved.

`SprinklerPilotMaster` provides a clean full composition without the diagnostic
rough-assembly banner, while `SprinklerPilotAssembly` retains the review overlay.
Manifest compilation reports 21 scenes / 21 placements. All 12 manifest tests,
project lint and the Remotion bundle pass. The clean artifact
`assembly-review/sprinkler-assembly-v6.mp4` verifies as 6,738 H.264 frames,
1920x1080 at 24 fps, with AAC narration and a 280.810667-second container duration.
Post-render QA sampled 101 chronological frames into nine contact sheets and
found no placeholders, blank timeline gaps or obvious text/action collisions.
The approved Pipe scene still contains the visible `1994 / PLACEHOLDER YEAR —
VERIFY OR CUT` marker, which blocks treating v6 as a publish master. Zero workers
and no external generation were used. Actual model/effort, total token usage,
render elapsed time and owner hands-on time were unavailable.

## HG-06 bin ignition and smoke clip — 11 Sep 2026

Cues 35–36 are staged as one 102-frame / 4.25-second hybrid sequence using
source frames 0–101 from the owner-approved `bin-fire-grok-v1.mp4`. The generated
performance already contains a controlled flame, a smoke column reaching the
ceiling and an oblivious Observer, so no synthetic flame or smoke was added.
Remotion supplies only a restrained 1.01–1.06 bin-centered push, a brief ignition
locator and a compact `SMOKE / RESPONSE · NONE` card in the upper-left safe area.

V1 checkpoint QA found the response card covering the door and its leader
crossing the smoke. V2 removes the leader and reuses the vacant ignition-title
region, leaving the character, fire and smoke unobstructed. Source ESLint,
targeted TypeScript, bundle and all 11 manifest tests pass. The final render
verifies as 102 H.264 frames at 1920x1080/24 fps with AAC audio. Artifact:
`assembly-review/hg06-v2.mp4`. Standalone only; main placements and full assembly
unchanged. Zero workers and no new external generation. Model/effort, token usage
and owner hands-on time unavailable. Owner approved v2 on 11 Sep 2026;
integration is complete in `assembly-review/sprinkler-assembly-v6.mp4`.

## HG-05 corridor and brass-fitting clip — 10 Sep 2026

Cues 20–22 are staged as one 191-frame / 7.96-second hybrid sequence using the
first 191 frames of the approved corridor source. The source video runs
continuously under the overlays so the Observer's walk does not jump. `LOOK UP.`
briefly isolates the small source head; a circular reveal expands into an intact
native brass-head diagram for cue 21, then closes back onto the same ceiling
position before cue 22. The returning wide uses the clear left wall for a rising
`10,000×` counter and `WITHOUT A THOUGHT.` payoff while the Observer continues
through the right side of frame. No activation or water was added.

Checkpoint QA found clipped SVG labels in v1 and a brass-frame label crossing the
hardware in v2. V3 corrected both. Owner timing review then found that the macro
was already dissolving during “a small brass fitting,” while the gold `10,000×`
competed with the door windows. V8 holds the complete diagram through local frame
76 / the final frame of cue 21, cuts directly to the unobstructed corridor on
frame 77 / the first frame of cue 22, and renders the counter in coral with an
ink offset shadow. V4–v7 were internal transition QA; dissolves, wipes and a
flash were rejected because they made the edit feel late or visibly mechanical.
Source ESLint and targeted TypeScript pass; the final render
verifies as 191 H.264 frames at 1920x1080/24 fps with AAC audio. Artifact:
`assembly-review/hg05-v8.mp4`. Standalone only; main placements and full assembly
unchanged. Zero workers and no new external generation. Model/effort, token usage
and owner hands-on time unavailable. Owner approved v8 on 10 Sep 2026;
integration remains pending.

## HG-04 single-head ceiling clip — 10 Sep 2026

Cues 08–10 are staged as one 240-frame / 10-second review sequence. The approved
ceiling still is retained instead of spending generation credits on ambient
motion. A native mechanism lens opens the central head in readable close-up,
while the wide stage shows a localized water cone. The next beat adds a restrained
vertical locator and floor fire marker for “directly above the fire.” The final
reframe removes the lens, labels both other visible heads `SEALED · DRY`, and
keeps only the central head active. Native copy occupies the wall or a dedicated
paper band so it does not intersect the action.

The v1 checkpoint pass found overlapping cue titles at frames 40–48 and copy
crowding the plant. V2 separates the fades, clears the lens before cue 10, and
moves the first two titles upward. Source ESLint, targeted TypeScript and bundle
pass; all 11 manifest tests pass. The final MP4 verifies as 240 H.264 frames at
1920x1080/24 fps with AAC audio. Project-wide `npm run lint` is blocked only by
pre-existing rollback `.tsx` copies under `work/` that cannot resolve their old
relative imports. Artifact: `assembly-review/hg04-v2.mp4`. Standalone only;
main placements and full assembly unchanged. Zero workers and no new external
generation. Model/effort, token usage and owner hands-on time unavailable. Owner
approved the treatment and timing on 10 Sep 2026; integration remains pending.

## Closing standalone clip — 10 Sep 2026

Cues 91–93 are staged as one 216-frame / 9-second review sequence. The approved
macro plate carries the first two cues, with native glass tracing, bubble focus,
pressure rings and liquid motion supporting “a piece of glass holding back a
river” without restaging the mechanism. A 20-frame light leak bridges to a clean
corridor frame extracted unmodified from approved footage at source frame 228.
The approved Observer cel enters beneath a highlighted sprinkler, and the final
`STILL THERE.` stamp lands only after the corridor composition is established.

Lint/TypeScript and bundle pass. The production manifest compiles to 19 scenes,
15 placements and 16 assets; all 11 manifest tests pass. Seven narrative
checkpoints were inspected. The final MP4 verifies as 216 frames, H.264
1920x1080/24 fps with AAC audio. Artifact: `assembly-review/closing-v1.mp4`.
Standalone only; main placements and full assembly unchanged. Zero workers and
no new external generation. Model/effort, token usage and owner hands-on time
unavailable. Owner review is pending; the scene is included at review status in
`assembly-review/sprinkler-assembly-v6.mp4`.

## Judgement standalone clip — 10 Sep 2026

Cues 69–75 are staged as one 606-frame / 25.25-second review sequence using the
approved installer, kitchen and office-fire plates. Native overlays trace the
installer's room-to-bulb decision, identify the 57°C office bulb in the hot
kitchen, trigger an early discharge, identify the 93°C kitchen bulb in the
burning office, and show the growing fire while the head remains closed. The
return to the installer ends with a panel that masks the source clip's incomplete
empty-room tail and leaves the chosen head behind. Three bounded light leaks and
one bounded activation starburst bridge the generated plates.

Lint/TypeScript and bundle pass. Seven narrative checkpoints were inspected.
The first render's five straight discharge paths read as beams, so the activation
was rebuilt as a translucent cone with curved spray trajectories and staggered
droplets, then rerendered. Final MP4 verifies as 606 frames, H.264
1920x1080/24 fps with AAC audio. Artifact: `assembly-review/judgement-v1.mp4`.
Standalone only; main placements and full assembly unchanged. Zero workers or
new external generation. Model/effort, token usage and owner hands-on time
unavailable. Owner approved the treatment and timing on 10 Sep 2026;
integration remains pending.

## Colour-code standalone clip — 10 Sep 2026

Cues 61–68 are staged as one 550-frame / 22.92-second review sequence so the
approved 110-frame HG-08 boiler-room interruption can be judged in context.
Native bulb geometry covers seven colours and their Celsius/Fahrenheit ratings;
bounded starbursts mark selection, and light leaks bridge into and out of the
generated plate. The final return lands “a judgement — not a setting.” Main
placements and full assembly remain unchanged.

Lint/TypeScript and bundle pass. The first check caught an invalid Video style
property; `objectFit` was moved to the component prop before the review render.
Eight narrative checkpoints were inspected. Final-frame QA then found the
subhead touching the judgement-card border, so it was moved into the clear gap
above the bulb row and the clip was rerendered. Final MP4 verifies as 550 frames,
H.264 1920x1080/24 fps with AAC audio. Artifact:
`assembly-review/colour-code-v1.mp4`. Zero workers or new external generation;
the existing approved boiler plate is the only generated footage. Model/effort,
token usage and owner hands-on time unavailable.
Owner approved the treatment and timing on 10 Sep 2026; integration remains
pending.

## Mechanism recap standalone clip — 10 Sep 2026

Cues 57–60: 330 frames / 13.75 seconds with the locked VO excerpt. False
complexity assembles around the intact sprinkler as five labelled cards, each
connection draws in and retracts as the item is rejected. Bounded Remotion
starbursts mark the five rejection impacts and a short light leak marks the
semantic transition to the actual mechanism. The final macro shrinks the bubble
and pulls back into a lit, protected building.

Lint/TypeScript and bundle pass. The first check caught an effect-origin tuple
typing error before render; it was corrected. Seven rendered checkpoints then
found premature dashed connections, which were replaced by hidden-until-drawn
solid paths and rerendered. Final MP4 verifies as 330 frames, H.264
1920x1080/24 fps with AAC audio. Artifact:
assembly-review/mechanism-recap-v1.mp4. Standalone only; main placements and full
assembly unchanged. Zero workers or external generation.
Model/effort, token usage and owner hands-on time unavailable. Owner approved
the treatment and timing on 10 Sep 2026; integration remains pending.

## Heat-not-smoke standalone clip — 9 Sep 2026

Cues and duration remain unchanged in v2. Owner rejected v1 as visually
primitive; its abstract nose was not recognizable. V2 uses a clearly staged and
labelled human profile with smoke reaching the nostril, a two-lane input test
that rejects smoke and admits local heat to the intact head, and a layered hot
gas path that reaches the nearest of three ceiling heads. Background depth,
secondary motion, hierarchy and transitions were increased without triggering
the bulb early. Review artifact: assembly-review/heat-not-smoke-v2.mp4. V1 is
superseded but retained as iteration history.

Cues 37–40: 211 frames / 8.79 seconds, locked VO excerpt. One continuous visual
argument rejects smell/smoke, confirms heat with a rising thermometer, then
traces hot gas upward and across the ceiling to the nearest intact head. The
later bulb activation is deliberately withheld. Frame-driven motion and named
editable text layers follow the Remotion production guidance. Standalone review
only; main placements unchanged and no full render. Opening QA found the smoke
label beneath the third headline line; it was moved into clear space and the
excerpt rerendered. Lint/TypeScript and bundle pass. The MP4 verifies as 211
frames, H.264 1920x1080/24 fps with AAC audio; four narrative checkpoints were
visually inspected. Artifact: assembly-review/heat-not-smoke-v1.mp4. V1 was
superseded. Zero workers or external generation. Model/effort, token usage
and owner hands-on time unavailable.

V2 lint/TypeScript and bundle pass. The replacement MP4 verifies as 211 frames,
H.264 1920x1080/24 fps with AAC audio. Five checkpoints were inspected. QA
corrections widened the local-response badge and prevented the ceiling title
from wrapping into its subhead.

Owner then flagged the solid trapezoidal fire container as unlike the approved
generated office reference. The v2 source and review artifact were updated with
a flared wire-mesh wastebasket, visible rim, crossed lattice, loose paper and a
contained flame. Narration, scene timing and all other treatments are unchanged.
Lint/TypeScript and bundle pass; the revised MP4 verifies as 211 frames and the
bin silhouette was inspected at plume entrance and final hold. Owner approved
the revised treatment and timing on 9 Sep 2026; integration remains pending.

## Trigger bridge standalone clip — 9 Sep 2026

Cue 34: 66 frames / 2.75 seconds, 1920x1080 at 24 fps, locked VO excerpt.
Reused intact Four Parts geometry with dimmed hardware, coral bulb and visible
bubble, teal trace, and a 1.35–1.55 push settling into a hold. Remotion guidance
informed frame-driven animation and named editable text layers. Text occupies
its own left-hand area; no early activation or countdown.
Lint/TypeScript and bundle pass. MP4 verified as 66 frames with AAC audio;
beginning, middle and ending frames visually checked. Artifact:
assembly-review/trigger-bridge-v1.mp4. Owner approved 9 Sep 2026. Main placements
unchanged; no full render. Zero workers or external generation. Model/effort,
token usage and owner hands-on time unavailable.

## Movie myth standalone clip — 9 Sep 2026

Built MovieMythScene and standalone MovieMythReview for cues 05–06: 117 frames,
4.875 seconds, 1920x1080/24 fps with locked narration. Extracted unchanged final
frame 240 from the approved deluge source. MOVIE MAGIC stamps in; coral COMPLETE
NONSENSE replaces it at cue 06 as saturation/image opacity drain toward paper.
Remotion skill informed named editable stamp layers and bounded frame-driven
scale/rotation. No full render and no main-assembly placement changes, per user.

Lint/TypeScript, build and 11 manifest tests pass. Review MP4 probes as 117 frames
with AAC audio. Beginning, first stamp, correction and ending frames inspected.
Artifact: assembly-review/movie-myth-v1.mp4. Owner approved 9 Sep 2026;
integration remains pending until the remaining standalone clips are finished.
Zero workers; no external generation or sound-effect purchase. Owner hands-on
time, actual runtime model/effort and total token count unavailable.

## Claude-scene text-layout pass — 8 Sep 2026

Scope: Independence, Pipe and Ceiling Reveal; no full-pilot render per explicit
user instruction. Kept narration, cue boundaries, font sizes and palette.
Independence separates header/strap from a clipped action viewport; compact row
spacing retains useful grid size. The ending numeric callout and selection ring
now follow their head. Pipe's subtitle moves below its wrapped headline and its
gauge shifts left for label clearance. Ceiling Reveal is unchanged after review.
The first Independence viewport shrank the action too much; a compact-grid pass
corrected that, followed by a callout-registration pass. Other deferred issues
(pipe year/tile, ceiling wipe, editorial wording) remain outside this text pass.

Lint/TypeScript, bundle and 11 manifest tests passed. Scene-only exports:
`independence-text-v4-1.mp4`, `pipe-text-v2-1.mp4`; unchanged audit excerpt:
`ceiling-reveal-text-v2-1.mp4`. Prior approvals are retained; layout revisions
are separately marked for review. Representative text/action states inspected.
One contact-sheet extraction failed due to the bundled FFmpeg filter support;
individual-frame extraction succeeded. Zero workers or external generation.
Owner time, total tokens and actual runtime model/effort unavailable.

## M10/M11 and provisional scene approvals — 8 Sep 2026

Owner approved Ceiling Reveal, Independence and Pipe as-is for now, explicitly
choosing forward progress over the recorded tweaks. Scene and component statuses
are approved; code and review notes retained. This does not approve Two Heads,
the full pilot. M10/M11 received a separate subsequent approval below.

Built `ReplacementScene.tsx` across cues 76–84 (733 frames) and
`WaitingHeadsScene.tsx` across cues 85–90 (462 frames). Native head replacement,
bounded spanner movement, proportionate flow bars, clipped 300-head field and
single-bulb emphasis follow locked cues. Remotion guidance informed frame-driven
motion and named editable headings. No generated footage or external spend.

Validation: baseline and post-change lint/TypeScript pass; bundle pass;
11/11 manifest tests pass. Both full scene excerpts rendered with narration.
Selected beginning, transition and ending frames visually inspected for safe
framing, marker registration and labels. Review artifacts:
`assembly-review/replacement-v1-1.mp4` and `assembly-review/waiting-heads-v1-1.mp4`.
Owner approved both M10/M11 visual treatments and timing on 8 Sep. Manifest
scene/layer approvals recorded. Full v5 integration render completed in 577.74
seconds; its draft banners predate approval. Whole-pilot approval remains pending.

Coverage: 4,569/6,738 frames (67.8%) have base placements, not final approval.
Measurement: zero workers; actual runtime model/effort, total tokens and owner
hands-on time unavailable. No failed checks or corrective rerenders in this batch.
Earlier v4 full render completed in 511.23 seconds, before the three newly approved
scenes and this batch; it is retained as an older snapshot.

## Two-head payoff and integration — 8 Sep 2026

User authorized native two-head comparison and updated full assembly. Replaced
the pending HG-07 plate/overlay pair with one component across cues 52–56,
3504–3840 (337 frames). Active head continues spraying, heat/fire diminish,
neighboring head remains sealed; a restrained arrival caption marks cue 56.
No generated footage or external spend. Locked VO and all cue timings preserved.
Nine manifest tests pass. Source: `src/sprinkler-pilot/TwoHeadsScene.tsx`.
Scene review: `assembly-review/HG-07-v1-1.mp4`. Owner approval pending.

Measurement: zero workers, no model override; actual model/effort and total
token usage unavailable through task tools. Owner hands-on time unmeasured.
Full-render elapsed time to be captured separately from implementation time.

## Activation FX revision — v2 (6 Sep 2026)

**Owner approval:** `activation-fx-v2-1.mp4` approved on 6 Sep 2026.
Activation scene and mechanism layer marked approved. Full integration render
remains pending; this approval does not cover unfinished pilot scenes.

Owner accepted v1 timing and requested stronger visual effects. Added a
nine-frame localized Remotion starburst at rupture, decaying camera kick,
faster fragment launch, localized heat glow, edge highlights, pressure
vibration and a tighter camera push. Vibration stops at cue 47; all cue
boundaries remain unchanged. Jet arrival is sharper, with splash ring and
48 deterministic varied droplets at spray onset. The approved Four Parts and
opening edits are untouched. Review: `assembly-review/activation-fx-v2-1.mp4`.
Owner time unmeasured. No external generation. Full integration and owner
visual approval remain pending; this is a draft revision, not a completed pilot.

## Activation sequence — draft v1 (6 Sep 2026)

Implemented one persistent component for cues 41–51 (712 frames, 29.67 seconds).
Reuses the approved Four Parts visual language without changing that approved
scene. Macro bubble contraction leads to a static pressure hold, bounded glass
fragments, cap displacement, jet and spray. Cue 46 remains on the mechanism
instead of the scripted Observer cutaway, explicitly pending editorial review.
Source: `src/sprinkler-pilot/ActivationScene.tsx`; review:
`work/hidden-systems-pilot-01/assembly-review/activation-v1-1.mp4`.
Owner time unmeasured; no external generation costs. This is an incomplete
experiment pending visual approval and a full integration render.

## Opening delivery insertion — Grok (6 Sep 2026)

**Editorial approval:** Owner approved `opening-grok-v1.mp4`, including lighter
trim and deluge retiming. HG-02/HG-03 editorial status is now approved.

Owner-approved HG-02 and HG-03 replaced still fallbacks through manifest data,
without composition changes. HG-02 uses source frames 0–57 at 1x. HG-03 uses
241 frames across cues 03–04 (265 frames) at 0.909434x, continuously across
the cue boundary. Sources muted; locked VO and all cue boundaries unchanged.
Seven manifest tests pass, including opening duration and legacy placement
preservation. Review excerpt: `assembly-review/opening-grok-v1.mp4` (frames
0–420, including surrounding context). Original files preserved unchanged.

## Experiment 10 visual revision — Four Parts v2 (6 Sep 2026)

**Owner approval:** Four Parts v2 (`assembly-review/four-parts-v2-1.mp4`)
approved on 6 Sep 2026. Scene, mechanism and callouts marked approved in the
production manifest. This does not approve other unfinished pilot scenes.

Owner feedback: gold-to-brighter-gold highlighting was insufficient, and motion
was too restrained. Revised to saturated teal with inactive parts dimmed, a
brief exploded-to-assembled introduction, drawn leader lines, eased titles and
camera push, inward compression arrows and a bubble emphasis ring. Motion is
frame-driven following Remotion markup guidance; cue boundaries and VO remain
unchanged. Render only this scene for owner review before another full export.
The completed full v3 export contains the earlier v1 visual treatment.

## Experiment 10 — Manifest-driven pilot and persistent mechanism (6 Sep 2026)

**Implemented:** Registered six assets and thirteen production scenes. The
composition consumes generated placements rather than a hard-coded delivery
map. Source approval, scene review and pending overlays remain separate.
Approved HG-02/HG-03 anchors are labeled still fallbacks, not motion deliveries.
One Four Parts component persists across cues 26–33 (505 frames).

**Checks:** Lint, TypeScript and bundle passed. Manifest tests cover timing,
data-only source replacement, unapproved sources, invalid source ranges and
duplicate cue ownership. Three representative mechanism frames were visually
inspected. The scene excerpt probes as 1920×1080, 24 fps, 505 frames with audio.
The data-only replacement test uses a cloned manifest and existing footage;
it did not generate or approve a new external delivery.

**Review:** Mechanism drawing and motion remain draft pending owner review.
V2 word-aligned timing is preserved. No paid generation performed.

**Time:** Owner hands-on time not measured. Scene and full-render wall times
were not separately instrumented; do not count tool wait time as owner labor
or claim a measured production-speed improvement from this one prototype.

**Artifacts:** `work/hidden-systems-pilot-01/production-manifest.json`,
`PRODUCTION-WORKFLOW.md`, and `assembly-review/four-parts-v1.mp4`.

## Experiment 09 revision - Word-aligned assembly v2 (5 Sep 2026)

**Finding:** User review identified narration/card drift in v1. The old timing
algorithm distributed word-length weights across speech intervals; it did not
measure individual word onsets. Visual frame checks alone had not validated sync.

**Correction:** Local faster-whisper base.en generated word timestamps; all 93
cue-start words matched the unchanged script. A three-frame visual lead was
applied. `cue-timing-aligned.json` now overrides historical timing in the builder.
Variable corrections range from approximately -3.58 to +2.38 seconds including
the visual lead. Approved footage spans now adapt to their corrected cue lengths.

**Verification:** Lint and build passed. Full v2 render completed at 1920x1080,
24 fps, 6738 video frames, 280.75 seconds video plus AAC padding (280.811 seconds
container), 21,631,749 bytes. Inspected 51 extracted frames across five contact
sheets, including all delivered clip starts and ends. V1 remains available.
Final subjective synchronization review is still open; ASR is not sample-exact.

**Evidence:** `work/hidden-systems-pilot-01/assembly-review/sprinkler-assembly-v2.mp4`,
`assembly-review/v2/` review excerpts and QA sheets, `tools/words-asr.json`,
and `assembly-review/timing-correction-v2.md`.

**Time:** Local transcription including model loading/download took 54.74 seconds.
Full render took several minutes and finished at 07:57:08 local; an exact separate
render-start time was not logged. Owner review time remains unmeasured.

## Experiment 09 - Sprinkler timed assembly (5 Sep 2026)

**Result:** Complete review assembly, not finished animation. Registered
`SprinklerPilotAssembly`, with 93 contiguous editorial regions covering 6738
frames. The locked VO plays throughout; six regions use the three approved
FLUX3 sources and other regions use explicit production placeholders.

**Evidence:** `work/hidden-systems-pilot-01/assembly-review/sprinkler-assembly-v1.mp4`
and the adjacent review excerpts and five QA contact sheets.

**Verification:** Lint and build passed. Export metadata verifies H.264,
1920x1080, 24 fps, 6738 video frames, 280.75 seconds of video and AAC audio.
Container duration is 280.811 seconds including audio encoding padding; file
size is 21,626,641 bytes. Inspected 51 extracted frames across movement starts,
middles and ends plus all six approved-footage regions. Framing and review
labels are legible at those checkpoints; no source restart at the macro split.

**Editorial limits:** Cue boundaries remain estimates pending review by ear.
Cue 74 slows five seconds of installer footage to 6.375 seconds. Cue 75 still
lacks the planned empty-room hold. Mechanism graphics and hybrid overlays are
not implemented. Approval of source footage is not approval of the assembled edit.

**Time:** Full render approximately 7 minutes 14 seconds (07:27:34–07:34:48
local), excluding build and QA. Owner review time was not measured and remains
to be logged; agent implementation time is not owner time. No new generation
credits were spent.

**Next:** Review the short source excerpts and full timeline, correct semantic
cue boundaries where necessary, then produce remaining sources in batches.

## Experiment 00 - Jointed SVG character

**Question:** Can a parameterized SVG character provide inexpensive expressive animation?

**Implementation:** Separate head, torso, limbs, hands and facial components driven by pose angles in Remotion.

**Result:** Failed.

**Evidence:** `ArchivedSkeletalCharacterLab`, `src/CharacterLab.tsx` and `src/characters/Observer/`.

**Why it failed:** The character looked assembled rather than drawn. Rotating disconnected anatomy produced weak silhouettes, broken gesture and insufficiently appealing expression. More rig parameters would increase labor without fixing the representation problem.

**Decision:** Preserve as an archive; do not extend.

## Experiment 01 - Two-pose replacement cel

**Question:** Can complete AI-illustrated poses be keyed, reused and swapped by Remotion while preserving a distinctive limited-animation style?

**Implementation:** Neutral and extreme-recoil drawings were generated separately from an approved UPA-inspired character reference, extracted from green to transparent PNGs and composited in `ReplacementCelTest`.

**Result:** Passed with a consistency caveat.

**Evidence:**

- `public/characters/observer/neutral.png`
- `public/characters/observer/recoil.png`
- `reference/replacement-cel-test.mp4`
- `reference/replacement-cel-recoil-v2.png`

**What worked:**

- Clean automatic extraction
- Expressive silhouette
- Reliable whole-cel placement and scaling
- Hard pose change reads as intentional limited animation
- Remotion is suitable as the compositing and timing engine

**Defect:** Separately generated poses drift in head proportions, clothing details and line weight.

**Decision:** Proceed to a multi-pose master-sheet test.

## Transcript-derived workflow review

Two downloaded video transcripts were reviewed after Experiment 01. Useful additions were:

- Use contact sheets to communicate motion visually.
- Divide work into short single-action beats.
- Compare rendered checkpoints with a visual reference.
- Save approved results as reusable playbooks and templates.
- Treat assets and visual direction as more important than generic prompt enhancement.

Rejected claim: autonomous AI grading to an arbitrary 9.9/10 is not proof of quality.

## Experiment 02A - Alarm-scene planning assets

**Question:** Does generating all six scene-specific character poses together improve identity consistency, and can contact sheets communicate the sequence adequately for Remotion assembly?

**Result:** Planning-stage pass.

**Evidence:**

- `reference/micro-scene-01/observer-alarm-pose-sheet-v2.png`
- `reference/micro-scene-01/alarm-contact-sheet-staging-v1.png`
- `reference/micro-scene-01/alarm-contact-sheet-signal-corrected-v2.png`

**Findings:**

- One-sheet generation kept the Observer materially more consistent across all six poses than separate generations.
- The six-panel contact sheet made geography, camera scale and temporal progression legible.
- Image generation remained unreliable for exact counts: the first contact sheet placed four coral marks beside the numeral three.
- A targeted correction fixed the count but changed unrelated staging, confirming that contact sheets are planning references rather than final production assets.
- Pose five required one targeted cleanup pass for color contamination.

**Decision:** Use pose-sheet v2 for extraction. Build exact alarm pulses, numbers, props and backgrounds natively in Remotion. Use the contact sheets as complementary references, not as frames to animate directly.

## Experiment 02B - Alarm-scene visual assembly

**Question:** Can six master-sheet replacement drawings support a clear, engaging 15-second scene without skeletal deformation or frame-by-frame character animation?

**Result:** Visual pass. Narrated test remains incomplete until final voice-over is added and timing is reviewed against it.

**Evidence:**

- `src/micro-scene-01/`
- `public/characters/observer/alarm/`
- `work/micro-scene-01/extract_alarm_cels.py`
- `reference/micro-scene-01/midnight-micro-scene-01-silent.mp4`
- `reference/micro-scene-01/diagnostic-135-v2.png`
- `reference/micro-scene-01/diagnostic-286-v2.png`
- `reference/micro-scene-01/diagnostic-330-v2.png`

**What worked:**

- All six poses read as the same character at normal composition size.
- Whole-pose swaps are expressive and remain visually coherent.
- The three-versus-four comparison is legible without narration.
- Native Remotion props and typography supply exact information that image generation could not reliably produce.
- Reusable patterns emerged: registered character cels, pulse groups, simple prop construction, hard-pose swaps and camera-independent staging.
- The final H.264 render completed successfully at 1920 x 1080, 24 fps, 360 frames.

**Correction required:** Two adjacent action poses overlapped horizontally on the generated master sheet. Simple rectangular cropping leaked fragments. The extractor now keeps the largest connected alpha component for those poses, preserving the intended silhouette and removing neighboring figures reproducibly.

**Time evidence:** This development session included character generation, research, system design and extraction-tool debugging, so it is not a valid steady-state production benchmark. A timed second scene using the existing library is required before making an eight-hour claim.

**Decision:** Keep the replacement-cel architecture. Add final voice-over and sound design, retime the scene, then test a second topic using reused components and record production time by phase.

## Architecture amendment v2.1 - Hybrid character system

**Trigger:** The complete alarm scene showed that static replacement drawings are effective for holds and information beats but become animatic-like when forced to represent continuous physical action.

**Decision:** Preserve static cels as the default, add two-to-four-pose sequences as the limited-action tier, and permit short alpha/chroma performance plates when body mechanics, locomotion, object contact or physical comedy carries meaning.

**Guardrail:** Choose the cheapest treatment that communicates the beat. Performance animation is not a cure for intentional stillness and must not become the default.

**Evidence status:** The static and limited-cel layers are validated. The performance layer is specified but unvalidated.

**Canonical reference:** `everyman_bible_v2/AMENDMENT-v2.1.md`.

## Experiment 03A - Performance-plate Sprint 1 scaffold

**Question:** Can one static canonical room, a fixed acquisition specification and a reusable Remotion wrapper make the high-motion test a drop-in comparison rather than a new shot-build?

**Result:** Scaffold passed. Character-performance evidence is still pending; this is not a verdict on AI video motion.

**Implementation:**

- Normalized one lounge chair, one floor lamp and one tulip side table into paired `assets-canon/furniture/` records.
- Added a deterministic sync from canonical source-of-truth assets into Remotion's `public/assets-canon/` runtime mirror.
- Built `PerformanceTestRoom`, `ObserverPerformance` and a sequential A/B harness.
- Registered clean start/end chroma stills and wrote a bounded four-attempt generation brief.
- Rendered beginning, reach, recoil, end and phase-switch diagnostics plus the full eight-second placeholder comparison.

**Evidence:**

- `docs/05-experiments/performance-plate-01-generation-brief.md`
- `src/performance-plate-01/`
- `assets-canon/furniture/`
- `reference/performance-plate-01/start-reference.png`
- `reference/performance-plate-01/end-reference.png`
- `reference/performance-plate-01/diagnostic-000.png`
- `reference/performance-plate-01/diagnostic-030.png`
- `reference/performance-plate-01/diagnostic-052.png`
- `reference/performance-plate-01/diagnostic-095.png`
- `reference/performance-plate-01/diagnostic-096-placeholder.png`
- `reference/performance-plate-01/performance-plate-experiment-placeholder.mp4`

**Verification:** `npm run lint` passed. Canonical SVG/metadata pairs parsed successfully and their public runtime mirrors matched by hash. Diagnostic stills were visually inspected for silhouette, baseline, framing and room balance.

**Open step:** Generate four candidates from the supplied references, select one, save it at the specified intake path and render pass B with its `clip` prop enabled. Measure generation, selection, matte and integration time before deciding pass, partial or fail.

## Experiment 04 - Observer pose library v1

**Question:** Can three coordinated master sheets expand the six-pose alarm set into a reusable semantic library without introducing a character rig or a shot-specific animation workflow?

**Result:** Technical and visual catalog pass. Human approval remains pending for the eighteen new candidates.

**Implementation:**

- Defined a 24-pose manifest: six previously approved alarm poses plus eighteen general-purpose candidates.
- Generated three six-pose chroma master sheets organized by information, emotion and physical action.
- Removed chroma once, extracted panels mechanically and calculated alpha-derived anchors and scales.
- Registered every pose in `src/library/observer/cels.ts` with semantic function, tags, source panel and approval state.
- Added the four-page `PoseLibraryCatalog` Remotion composition.

**Evidence:**

- `docs/03-system/observer-pose-library-v1.md`
- `work/pose-library-v1/pose-manifest.json`
- `work/pose-library-v1/extraction-report.json`
- `work/pose-library-v1/extract_pose_library.py`
- `public/characters/observer/library/`
- `src/library/observer/`
- `reference/pose-library-v1/catalog-01-existing.png`
- `reference/pose-library-v1/catalog-02-information.png`
- `reference/pose-library-v1/catalog-03-emotion.png`
- `reference/pose-library-v1/catalog-04-physical.png`

**Correction required:** The first extraction of `sleepy-standing` contained disconnected fragments from the adjacent run panel. The extractor was changed to keep the largest connected alpha component; all eighteen candidates were re-extracted and all four catalog pages rerendered.

**Verification:** `npm run lint` passed. The four catalog pages rendered successfully and were visually inspected for identity, pose clarity, registration, label fit and cross-panel contamination.

**Decision:** Adopt the registered pose library as the production default, subject to the human quality gate. Generated character video is demoted to an occasional exception. After approval, build `run-away` and `jump-for-joy` as reusable limited-cel action packs.

## Experiment 05 - First reusable action packs

**Question:** Can approved whole cels support recognizable physical actions through hard swaps and registered whole-character motion alone?

**Result:** Passed for the two tested non-looping actions.

**Implementation:**

- Promoted all 24 poses to approved canon after the user quality gate.
- Registered `run-away` as shock, brace and run-key phases followed by a directional exit.
- Registered `jump-for-joy` as joy hold, airborne key and landing hold on a deterministic vertical arc.
- Added the reusable `ObserverAction` component and the `ObserverActionPacks` composition.

**Evidence:**

- `src/library/observer/actions.ts`
- `src/library/observer/ObserverAction.tsx`
- `src/library/observer/ActionPackShowcase.tsx`
- `reference/action-packs-v1/diagnostic-run-shock.png`
- `reference/action-packs-v1/diagnostic-run-brace.png`
- `reference/action-packs-v1/diagnostic-run-mid.png`
- `reference/action-packs-v1/diagnostic-run-exit.png`
- `reference/action-packs-v1/diagnostic-jump-peak-v2.png`
- `reference/action-packs-v1/diagnostic-jump-land-v2.png`
- `reference/action-packs-v1/observer-action-packs-v2.mp4`

**Correction required:** The first jump arc clipped the raised hands above the frame. The production scale and vertical travel were reduced, then the peak and landing diagnostics were rerendered before the full composition.

**Verification:** Representative reaction, transition, movement, peak, landing and exit frames were visually inspected. The final 144-frame H.264 composition rendered successfully at 1920 x 1080 and 24 fps. `npm run lint` passed before rendering and is rerun at handoff.

**Decision:** Keep both packs as reusable non-looping actions. The next validation is one short narrated integration scene using at least four held poses, both actions, a canonical background and a native prop or diagram.

## Experiment 06 - Pilot 01 gas-station staging

**Question:** Can independently generated chroma objects and a static generated background be normalized once, then staged with an existing replacement cel as a coherent editable Remotion scene?

**Result:** Passed for visual-world coherence and spatial staging. A convincing nozzle insertion still requires one purpose-built `hold-nozzle` replacement cel.

**Implementation:**

- Selected one gas-station background, sedan, fuel pump and fuel nozzle supplied by the user.
- Preserved the originals in `assets-source/automotive/pilot-01/` and created approved canonical records in `assets-canon/automotive/`.
- Removed chroma once from the sedan, pump and nozzle; Remotion receives transparent PNGs rather than performing a key on every render.
- Added alpha-bound metadata plus the reusable `RasterCutout` component so padded raster assets place predictably.
- Built `Pilot01GasStationStaging` with a static background, the existing `reachExtinguisher` cel, a native SVG hose and native editable pump label.

**Evidence:**

- `assets-canon/automotive/`
- `src/pilot-01/RasterCutout.tsx`
- `src/pilot-01/GasStationStaging.tsx`
- `reference/pilot-01/gas-station-staging-v4.png`

**Verification:** `npm run sync:assets` and `npm run lint` passed. All canonical metadata parsed. The transparent cutouts and final 1920 x 1080 staging still were visually inspected.

**Correction required:** The first soft matte was too broad and made teal/green car details partially transparent, allowing the hose and background to show through the body, grille and lights. The automotive assets were re-keyed with a tighter 12-80 matte, the hose was placed definitively behind the car, a controlled cabin tint was added behind the open window apertures, the pump label was fitted to its display and the character/nozzle group was moved clear of the roof. `gas-station-staging-v4.png` is the accepted staging reference; v2 and v3 are diagnostic history only.

**Decision:** Keep this asset strategy. Do not create custom generated-video performances for routine interaction. Add `hold-nozzle` as a reusable whole-character cel, then use this set as the cold-open environment for the wrong-fuel pilot.

## Experiment 07 - Remotion-native systems explainer

**Question:** Can the wrong-fuel story work as a narrator-led graphic system rather than a staged character interaction?

**Result:** Design and technical pass. Editorial fact-checking and a steady-state production-time benchmark remain separate gates.

**Implementation:**

- Imported the supplied 63.242-second ElevenLabs narration and aligned seven scene boundaries to natural silences.
- Built seven native Remotion beats: mismatch, stop, circulation, comparison, rule, decision and conclusion.
- Used diagrams, flow states, comparison panels and a decision tree as the primary explanatory layer.
- Reused seven existing Everyman cels only as reaction and emphasis markers; created no new character art and used no generated video.
- Added reusable primitives for the paper stage, cards, stamps, arrows, system icons and simplified vehicle diagrams.

**Evidence:**

- `src/systems-pilot-01/`
- `work/systems-pilot-01/timing-manifest.json`
- `public/voiceover/pilot-01/wrong-fuel-systems-v1.mp3`
- `reference/systems-pilot-01/diagnostics/`
- `reference/systems-pilot-01/wrong-fuel-systems-pilot-v1.mp4`

**Corrections required:** Diagnostic review found a flow arrow crossing the character, a warning cursor remaining on screen, clipped end icons in the circulation chain and an obscured ignition label. All four were corrected and the affected frames were rerendered before the master.

**Verification:** `npm run lint` passed. Fourteen representative frames plus corrected checkpoints were visually inspected. The final H.264 render is 1920 x 1080 at 24 fps with stereo AAC audio and a measured duration of 63.296 seconds.

**What this validates:** Remotion can carry this format when motion is applied to information structures rather than simulated character performance. The pose library adds personality without becoming the blocking dependency.

**What this does not validate:** The script has not received a publication fact-check, the full animation has not received an external audience test and this R&D build does not measure steady-state owner hours.

**Decision:** Adopt narrator-led systems graphics as the primary pilot architecture. Keep scenic animation and exact character/prop interaction exceptional. The next test must reuse this component vocabulary on a different topic and measure marginal assembly time.

## Experiment 08 - Systems-pilot FX density pass

**Question:** Can the systems architecture carry more visual energy without adding manual scenic-animation work or compromising deterministic rendering?

**Result:** Passed. The FX version adds motion density at the information layer while preserving the original timing, narration and seven-beat structure.

**Implementation:**

- Preserved `WrongFuelSystemsPilot` as the clean baseline and registered `WrongFuelSystemsPilotFx` as an explicit A/B composition.
- Added a reusable effects layer for impact starbursts, light-leak transitions, pulse rings and a native paper/speckle/vignette surface.
- Added state-specific motion: selection pulses, button anticipation and recoil, particle trails, component vibration, mechanism highlights, smoke puffs, a traveling electrical command, sequential decision steps and conclusion impacts.
- Kept all motion frame-driven and semantic: effects emphasize a change, consequence, path or decision rather than decorating every object.

**Evidence:**

- `src/systems-pilot-01/fx.tsx`
- `reference/systems-pilot-01/fx-diagnostics/`
- `reference/systems-pilot-01/wrong-fuel-systems-pilot-fx-v2.mp4`

**Render correction:** Three simultaneous full-frame WebGL texture effects passed still-frame review but crashed the browser/GPU during the first sustained master render. The continuous texture stack was replaced with native CSS gradients and deterministic drift. The short-duration Remotion light-leak and starburst effects were retained and passed the complete render.

**Verification:** `npm run lint` passed. Ten representative FX frames and the corrected starburst checkpoint were visually inspected. The final 1,518-frame master rendered without error and was verified as H.264, 1920 x 1080, 24 fps, with stereo 48 kHz AAC audio, a duration of 63.296 seconds and a file size of 39,610,848 bytes.

**Decision:** Adopt the FX composition as the preferred viewing master. Keep continuous full-frame surfaces native; reserve WebGL effects for bounded transitions and impact moments. Preserve the clean v1 composition for A/B comparison and debugging.

## Experiment 09 - Hybrid vertical brush Short

**Question:** Can Episode 02's brush segment become a native 9:16 Short by
combining generated human-scale motion with deterministic Remotion mechanism
graphics?

**Result:** Full-resolution review candidate completed. Audience performance and
owner picture approval remain open.

**Implementation:**

- Locked the owner's tightened 34.56-second VO edit as the timing authority.
- Assigned six generated plates one bounded physical job each: establish,
  contact, loose fabric, reject cleaning, move inward and punch into the gap.
- Used Remotion for the hidden obstruction switch, earned teal trip, stop state,
  typography and stacked warning/apology payoff.
- Cover-fitted the 720 x 1264 sources into 1080 x 1920 with a negligible side
  crop; generated source audio is muted.
- Kept all essential type inside the conservative Shorts safe region while
  allowing decorative mechanism art to bleed.

**Evidence:**

- `src/escalator-ep02/BrushShort916.tsx`
- `work/hidden-systems-ep-02/shorts/brush-short/README.md`
- Local review render `brush-short-916-v2-review.mp4`

**Corrections required:** The first generated anchors used the wrong brush
geometry. A photographic guide established the correct diagonal skirt-deflector
rail. The first assembly preview then exposed an accidental headline run-in and
small phone-scale labels; both were corrected before the full-resolution render.

**Verification:** `npm run lint` and `npm run build` passed. Safe-area stills at
frames 12, 620 and 790 and a twelve-frame final contact sheet passed visual
inspection. The review file is H.264, 1080 x 1920, 24 fps with stereo 48 kHz AAC,
34.624 seconds.

**Durable finding:** Generated animation is useful here for human-scale motion,
but the hidden safety device still belongs in deterministic Remotion. This split
also prevents the generated sequence from padding a shorter VO merely because
six-second clips exist.
