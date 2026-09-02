# Experiment log

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
