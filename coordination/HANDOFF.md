# Shared handoff log

Read the latest entry before starting work. Append a new entry; never rewrite or
delete an earlier one. Keep each entry to the six fields below. Active file or
movement ownership lives in `claims.json`, not here.

## 2026-09-17 — Codex — Brush Short V3 timing and mechanism correction

- **Status:** Full-resolution v3 review candidate rendered; owner review is
  open. Nothing is published and v2 remains available as rollback.
- **Changed:** Restored the missing spoken hook from the earlier ElevenLabs VO,
  retained the owner's tightened v2 body, rebuilt all edit boundaries from
  local word timestamps, and gave phrase-responsive type a three-frame visual
  lead. Replaced the abstract closing cards with one persistent labelled
  cutaway showing step, fixed panel, bristles, hidden switch, circuit and stop.
- **Verified:** `npm run lint`, `npm run build` and the 12 manifest tests pass.
  Phrase-onset frames and the rebuilt ending were visually inspected. The v3
  review is H.264 1080 x 1920 at 24 fps with stereo 48 kHz AAC, 898 frames,
  37.461 seconds and SHA-256 `5b182d6a...ddb7be3a`.
- **Did not do:** No source footage was regenerated, no Episode 02 long-form
  assembly was changed, and the Short was not approved, promoted or published.
- **Next:** Owner reviews `brush-short-916-v3-review.mp4`, paying particular
  attention to word sync at rubber / loose fabric / small fingers and to the
  causal readability of the final 9.7-second cutaway.
- **Blocked:** Publication and promotion remain blocked on owner approval.

## 2026-09-17 — Codex — M05 controlled-motion V2 review candidate

- **Status:** Built an isolated M05 V2 candidate for cues 28–35. It is not yet
  integrated into Episode 02 and does not replace Claude's V1.
- **Changed:** Added `SkirtGapSceneV2.tsx` and a separate review registration.
  V2 keeps one persistent machine geography, reduces gratuitous reframing, and
  redraws the shoe, loose trouser cuff and small hand as recognizable objects.
- **Verified:** `npm run lint` passes (ESLint and TypeScript). Eight half-scale
  frames were rendered and visually inspected, including all three risk objects,
  brush detail, the protective trip and the closing comparison.
- **Did not do:** No locked timing, VO, manifest, V1, episode assembly or media
  change. No full-motion V2 render. The 9:16 Short is intentionally deferred
  until this shared geometry is accepted, avoiding a second drawing pass.
- **Next:** Owner reviews the V2 stills; then render the 947-frame review to judge
  pacing and use the accepted primitives for a purpose-built 1080 x 1920 Short.
- **Blocked:** Full-motion pacing approval and vertical restaging remain open.

## 2026-09-16 — Claude — M02 failure map built (integration owner, temporary)

- **Status:** Took BUILD while Codex is out of credits, with the owner's
  agreement. M02 (cues 07–13, frames 459–1095, 636 frames) is **built and ready
  for owner review**. Claim opened and released inside this session;
  `claims.json` is empty again.
- **Changed:** Added `src/escalator-ep02/FailureMapScene.tsx`; registered M02 in
  `EscalatorEpisode02Assembly.tsx` (sequence + `EscalatorM02FailureMapReview`
  composition); set `failure-map` and its diagram layer to `built` in the
  manifest. Review artifacts in `assembly-review/m02-contact-sheet.png` and
  `m02-cue13-depth.png`.
- **Verified:** `npm run lint` (eslint + tsc) passes clean on the owner's
  machine; manifest tests 12/12. **Thirteen frames were rendered and visually
  reviewed**, spanning every cue at entry, middle and exit.
- **How the render was done, because it matters for whoever is next:**
  `device_bash` cannot bundle or render — `node_modules` is a Windows install, so
  `@rspack/binding` has no `rspack.linux-x64-gnu.node`. `npm run build` also
  fails earlier than that: its `prebuild` sync step unlinks files in
  `public/assets-canon/`, and that shell cannot delete. **Renders still have to
  run on Windows.** I worked around it by cloning the repo into the cloud
  container, installing Linux `node_modules` there, and rendering stills against
  the preinstalled headless Chromium
  (`--browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell`;
  Remotion's own download host is not on the egress allowlist). M02 uses no
  `staticFile`, so it renders with no local media. **A full-motion render of M02
  on Windows has not been done and should be the first check.**
- **Did not do:** No VO, cue, timing or M01 change. No full master. Did not touch
  the canonical SVG, the plates, or any file outside the two claimed paths plus
  the manifest entry for this scene.
- **Design notes for review:**
  - Cue 09 follows the state rule literally — the warning travels to the detector
    and **the guide shoe does not move**. Coral plus a slash and `DID NOT
    ACTUATE` arrive only after the silence. It never animates into its tripped
    pose.
  - Cue 08 uses `drive-path` failure as written: coral at the broken locus,
    downstream links dropping to ink-mute.
  - Cue 11 files the nut away as a literal card into a dashed slot, so "we will
    get to the nut in a bit" is an object set aside rather than a line of VO.
  - Cue 12 is the Plan beat. Four cards deal in, then the protective devices lift
    from beneath them — indicated, not revealed.
  - Ambient drift and a two-frame boil are on every cue; nothing is ever
    perfectly still, per the M01 v2 finding.
- **Three defects I found in my own work and fixed before handing over:** cue 10
  was scaling the diagram's own typography, so the 26px stall label became a slab
  behind the nut; cue 13 dropped so far the frame emptied and the tread read as a
  black bar; cue 12's concealed labels were clipped by the cards above them.
- **Next:** Owner reviews `m02-contact-sheet.png`, then a Windows render of
  `EscalatorM02FailureMapReview` (636 frames) with the VO to check timing against
  cues 07–13. After approval, M03 `mechanism-reveal` (cues 14–20, frames
  1095–1845) is the next scene and the first to consume the canonical
  `escalator-mechanism-v1.svg`.
- **Blocked:** Nothing.

## 2026-09-16 — Codex — Episode 02 M01 approved

- **Status:** M01 cues 01–06 and all reviewed layers are owner-approved; the
  scene gate is closed.
- **Changed:** Promoted the M01 scene, case overlay, reverse crowd and graphic
  structure to `approved` in the manifest and recorded the owner decision.
- **Verified:** The approved artifact is the 459-frame, 1920 x 1080, 24 fps v3
  review with AAC audio; SHA-256 begins `31e958be`. Prior lint, TypeScript and
  manifest checks passed, and eight rendered frames were visually reviewed.
- **Did not do:** Did not change code, cues, VO, M02, the full master, local
  media, or Claude's concurrent files.
- **Next:** Build and review the M02 failure map for cues 07–13.
- **Blocked:** Nothing.

## 2026-09-16 — Codex — Episode 02 M01 audit corrections rendered

- **Status:** M01 cues 01–06 remain a 459-frame draft; v3 addresses the owner-
  accepted motion audit and is ready for review.
- **Changed:** Cue 05 now keeps the real crowd full-strength and indexes the
  approved plate backward on an accelerating curve. The opening adds three
  sequential guarantee stamps; cue 06 adds continuous ambient stage drift.
- **Verified:** Lint and TypeScript pass; manifest tests pass 12/12; eight frames
  from the actual render were visually reviewed. The v3 MP4 is 1920 x 1080 at
  24 fps with 459 video frames and AAC audio; SHA begins `31e958be`.
- **Did not do:** Did not change cue timing, VO, M02, the full master, or stage
  Claude's concurrent files. The 93-frame reverse sequence remains local-only.
- **Next:** Owner reviews `assembly-review/m01-incident-reversal-v3.mp4`; after
  approval, promote M01 and begin the M02 failure map.
- **Blocked:** Owner review of M01 v3.

## 2026-09-16 — Claude — review of M01 incident-reversal v2

- **Status:** Adversarial review of the first plate-plus-Remotion scene.
  **No file edited.** Findings in
  `work/hidden-systems-ep-02/m01-review-claude-2026-09-16.md`.
- **Changed:** Added the review document. Nothing else.
- **Verified by measurement:** 459 frames, 19.12 s, 1920×1080 @ 24 fps, covering
  cues 01–06. Motion audit: 49% of frames below the 0.35 static threshold against
  Pilot 01's 70% — a real improvement. Coral use matches the state table
  (`REVERSE`, `18 INJURED` are both consequence). Evidence cards and the
  `LANGHAM PLACE · 25 MARCH 2017` source credit implement the proof-density
  recommendation. **Nothing built, rendered or typechecked.**
- **Did not do:** Did not edit the component or re-render.
- **Next (for Codex), in order:**
  1. **The plate fades out exactly as the consequence lands.** Measured plate
     coverage: cue 03 **58.3%**, cue 04 **56.9%**, cue 05 **25.6%**, cue 06
     **5.8%**. So the crowd is at full strength for "120 people are going up" and
     "then the steps stop", then fades to a quarter for "then they come back down,
     faster" and is gone for "eighteen people are injured". The dramatic arc is
     people → stop → people go backwards → people hurt; the visual arc is people
     → people → stick figures → pictograms. **Suggested:** cue 05 holds the plate
     at full strength and plays it in reverse, accelerating, with
     `REVERSE. DOWNHILL.` over it. 143 clean frames of that crowd exist; reversed
     they descend. This is re-timing footage we own, not asking a model for a
     mechanism, so the standing rule is unaffected. Let cue 06 carry the
     abstraction — the pictogram is earned once we have watched it happen.
  2. **The scene ends on 65 frames at delta 0.00** (f393–458, 2.7 s of absolute
     stillness). Legal under the 720-frame maximum hold, but Pilot 01's broad pass
     added ambient drift to every scene so no frame is ever perfectly frozen; that
     lesson has not carried into Episode 02.
  3. **The opening is 4.5 s below the static threshold** (f8–116). The intent is
     right and should not change — a static diagram for a static object is the
     joke. But it sits in the first 30 seconds, where APV caps everything
     downstream. Add life that does not contradict the idea: step edges ticking in,
     or `NO DRIVE · NO CHAIN · NO SPEED` arriving as three stamps. The frame should
     be alive while the subject is motionless.
- **Open question for the owner:** `REVERSE` and `18 INJURED` both run coral at
  13–19 s. Both are correct by the state table. Worth deciding deliberately
  whether the 4:05 nut reveal still has an escalation left.
- **Correction to my own check:** my first safe-margin pass reported violations on
  all four edges at f186. Wrong — f186 is where the full-bleed plate starts, and a
  plate is supposed to reach the edges. The margin contract governs typography and
  diagram content, not the plate. No margin finding stands.
- **Blocked:** Nothing.

## 2026-09-16 — Codex — Episode 02 crowded G-01 replacement integrated

- **Status:** M01 cues 01–06 remain a 459-frame draft; the replacement-plate
  review is ready for owner approval.
- **Changed:** Replaced G-01 with the owner-supplied crowded escalator plate,
  extracted its exact displayed exit frame, and realigned the direction tape,
  stop marker and reverse passenger markers to the new perspective.
- **Verified:** Lint and TypeScript pass; manifest tests pass 12/12; five targeted
  frames and the cue-03/cue-04 seam were visually reviewed. The v2 MP4 is
  1920 x 1080 at 24 fps with 459 video frames and AAC audio; SHA begins
  `258653c1`.
- **Did not do:** Did not change the locked cue timing, VO, M02, full master, or
  stage Claude's concurrent files. The superseded G-01 remains local rollback.
- **Next:** Owner reviews `assembly-review/m01-incident-reversal-v2.mp4`; after
  approval, promote M01 and begin the M02 failure map.
- **Blocked:** Owner review of the revised M01.

## 2026-09-16 — Codex — Episode 02 M01 incident review rendered

- **Status:** M01 cues 01–06 are implemented as a 459-frame draft and the
  19.18-second VO-synced review is ready for owner approval.
- **Changed:** Added `IncidentReversalScene`, registered its standalone review,
  placed it into the Episode 02 assembly, and derived exact source frame 92 for
  the deterministic stop/reverse handoff. The locked G-01 source is unchanged.
- **Verified:** Lint and TypeScript pass; manifest tests pass 12/12; twelve
  targeted stills were reviewed across two passes; the final MP4 is 1920 x 1080
  at 24 fps with audio. The render SHA-256 begins `d4855da6`.
- **Did not do:** Did not alter the locked generated plate, build M02, render the
  full master, or stage Claude's concurrent files.
- **Next:** Owner reviews `assembly-review/m01-incident-reversal-v1.mp4`; after
  approval, promote M01 and begin the M02 failure map.
- **Blocked:** Owner review of M01.

## 2026-09-16 — Owner — Episode 02 locked-plate review approved

- **Status:** The four generated plates and their exact-cue assembly review are
  approved.
- **Changed:** Closed the owner-review gate for G-01 through G-04.
- **Verified:** Owner reviewed and approved the v2 reel after the source clips,
  cue placements and review-label correction were presented.
- **Did not do:** This approval does not approve unbuilt procedural mechanism
  scenes or a future full master.
- **Next:** Build and review the first procedural sequence around cues 01–06 and
  G-01, preserving the locked generated plates.
- **Blocked:** Nothing.

## 2026-09-16 — Codex — Episode 02 locked plates integrated

- **Status:** The exact-cue assembly shell and 15.51-second review reel are
  rendered. All four locked plates are integrated; procedural scenes remain
  planned.
- **Changed:** Added the Episode 02 assembly and review compositions, registered
  them in `Root.tsx`, recorded approved media metadata and exact placements in
  the production manifest, and kept runtime video copies local and ignored.
- **Verified:** Lint and TypeScript pass; manifest tests pass 12/12; composition
  discovery succeeds; Mediabunny confirms the final 1920 x 1080 review render
  has audio. The 4 x 3 v2 contact sheet passed visual inspection after the first
  label layout was corrected.
- **Did not do:** Did not regenerate or edit source clips, build the procedural
  mechanism scenes, render a full master, or stage Claude's concurrent files.
- **Next:** Owner reviews `assembly-review/generated-plates-review-v2.mp4`.
  After approval, build the first procedural scene around cues 01–06 and G-01.
- **Blocked:** Owner review of the short reel.

## 2026-09-16 — Codex — Episode 02 generated motion inventory locked

- **Status:** Owner confirmed Claude's footage audit found sufficient generated
  coverage. G-01 through G-04 are locked; further video generation has stopped.
- **Changed:** Added `generated-assets-lock-v1.md` with four local filenames,
  cue ownership, byte counts and SHA-256 hashes. Added `work/**/generated/` to
  `.gitignore` and retired the G-03/G-04 endpoint experiments in the anchor log.
- **Verified:** Rehashed the four locked cue clips. G-03 covers cue 36 while
  remaining mechanically neutral; its single-step sag belongs to Remotion. Its
  endpoint v2 was also rejected because several step geometries deformed.
- **Did not do:** Did not edit, move or regenerate any locked video, stage
  Claude's audit files, integrate clips into the assembly, or change the manifest.
- **Next:** Place the four locked clips at cues 03, 21, 36 and 67, then review
  the combined assembly before authorizing any replacement media.
- **Blocked:** Nothing.

## 2026-09-15 — Codex — Episode 02 paired ending frames

- **Status:** G-01 and G-02 are owner-approved. G-03 end-frame v2 and G-04
  end-frame v1 are local review candidates; no motion has been generated.
- **Changed:** Added matched 16:9 ending frames for the G-03 step-sag and G-04
  ordinary-ride starts. Recorded prompts, suggested 8–10 second motion direction
  and SHA-256 hashes in `work/hidden-systems-ep-02/anchor-review-v1.md`.
- **Verified:** Inspected both outputs at full resolution. G-03 v1 was rejected
  because its profile degraded and the pose appeared to float on the balustrade.
  V2 restores the approved three-quarter face, upright stance, supported feet and
  natural handrail contact. G-04 clearly groups shoe, comb, skirt and brush.
- **Did not do:** Did not delete the rejected local rollback, generate motion,
  promote canonical anchors, or change cues, narration or manifest status.
- **Next:** Owner approves or revises the G-03 v2 and G-04 v1 pairs, then uses
  the recorded prompts and endpoints for manual image-to-video generation.
- **Blocked:** Motion generation remains gated on paired-frame approval.

## 2026-09-15 — Codex — Episode 02 anchor contact sheet v1

- **Status:** Four first-frame candidates and one contact sheet generated;
  owner review pending. No motion authorized or generated.
- **Changed:** Tightened the generated-plate palette contract, clarified the
  Episode 02 state-colour scope and Observer costume exception, stored the five
  raster review files locally, and recorded prompts plus SHA-256 hashes in
  `work/hidden-systems-ep-02/anchor-review-v1.md`.
- **Verified:** Inspected the 1920×1080 sheet at full resolution and rechecked
  all five hashes. G-01 and G-02 are strong first passes. G-03 may need stronger
  target-step isolation; G-04 may need a more visible skirt brush.
- **Did not do:** Did not promote canonical anchors, buy motion, change cue or
  narration files, or change generated-media manifest status.
- **Next:** Owner approves the sheet or requests targeted G-03/G-04 revisions.
  After sheet approval, promote the approved anchors and animate G-01 first.
- **Blocked:** Motion generation is waiting on owner approval.

## 2026-09-15 — Claude — two conflicts between the new state vocabulary and the generated-media plan

- **Status:** Editorial review of `0112eda`. **No file edited.** Note in
  `work/hidden-systems-ep-02/state-vocabulary-conflicts-2026-09-15.md`.
  Both items are cheap now and expensive once four plates exist.
- **Changed:** Added the note. Nothing else.
- **Verified:** Read the new scene-state table in `diagram-layer.md` against
  `generated-media-plan.md`. The vocabulary itself is sound — "a safety device
  that fails to fire must not animate into its tripped pose" protects the Hong
  Kong beat by rule, and the one-semantic-colour-at-a-time limit will matter once
  four failure modes are on screen. **Nothing built, rendered or typechecked.**
- **Did not do:** Did not amend the generated-media plan or `diagram-layer.md` —
  both are outside my domain and conflict 2 needs an owner decision.
- **Next (for Codex), before generating any anchor:**
  1. **`generated-media-plan.md` tells the generator to use the state colours.**
     Its shared visual contract says "House paper, ink, **teal, mustard and
     coral** palette"; that file predates `0112eda`, where those three became the
     exclusive state channel. A plate carrying coral asserts *failed protection* —
     and G-01 is the incident reversal, where that meaning is doing the most work.
     Amend the contract to the neutral base range only (paper, ink, reference,
     ink-mute, cutaway) and let Remotion own every semantic colour. Costs the
     plates nothing; the plan already gives them people, cloth and atmosphere
     while Remotion supplies mechanism.
  2. **Check the contact sheet against the state table, not only against itself.**
     Four plates that agree with each other and sit outside the palette pass a
     self-consistency review and fail in the cut.
  3. Minor: add a line to `diagram-layer.md` noting the vocabulary begins at
     Episode 02, so a future reader does not read Pilot 01's permanently-coral
     sprinkler bulb as a canon violation.
- **Blocked:** **The Observer wears coral, and coral now formally means breakage
  or failed protection.** `generated-media-plan.md` calls for the approved
  Observer wherever a principal commuter appears, so every plate would put the
  failure colour on the protagonist in a film whose climax is a protection that
  failed. This was recorded in Pilot 01 as a house-rule-1 problem and was
  tolerable while colour was loose; the state vocabulary makes it load-bearing.
  Options in the note; recommended is a neutral-range Observer variant for
  Episode 02 plates — a cel job, not a redesign. Owner decision needed before
  any plate containing the Observer is generated.

## 2026-09-15 — Codex — Episode 02 escalator mechanism promoted

- **Status:** Owner and independent review approved V2; the production SVG and
  metadata are canonical and runtime-synced.
- **Changed:** Replaced four reviewer annotations with production component
  captions, defined the scene-state colour vocabulary, promoted the transparent
  SVG/metadata pair, registered it in both catalogs and approved the manifest asset.
- **Verified:** Two 1920 x 1080 caption renders, XML and JSON parsing, hashes,
  16 required groups, 22 wheel anchors, neutral base palette, review-shell
  removal, canonical/runtime parity, metadata contract and manifest tests 12/12.
- **Did not do:** No scene component, cue, narration or generated-media asset
  changed. The review PNG remains local and is removed from Git tracking.
- **Next:** Build the four generated first-frame anchors as one contact sheet,
  using this canonical mechanism as the reference source where appropriate.
- **Blocked:** Nothing.

## 2026-09-15 — Claude — review of escalator-mechanism-v2-candidate

- **Status:** Adversarial review. **No file edited.** Findings in
  `work/hidden-systems-ep-02/mechanism-asset-review/mechanism-asset-review-v2-claude-2026-09-15.md`.
  **Recommend approval for promotion** once item 1 below is done.
- **Changed:** Added the review document. Nothing else.
- **Verified by re-derivation:** All six v1 findings are fixed. Track separation
  measured from the path data: 0px at both landings, ~50px across the incline,
  smooth transitions — correct escalator geometry, not a cosmetic fix. Base
  palette is five house values with **zero state colour**. 16 groups present
  exactly once; SHA matches; zero gradients, filters, partial opacity or raster;
  all geometry inside the viewBox. `floor-datum` added; return steps legible;
  `labels-components` / `labels-review` split.
  **Two additions exceed what was asked:** `data-part-role` on every group (seven
  roles, so scenes select by role rather than by id list) and per-step
  `data-anchor` wheel anchors, which is what will make the Failure 3 sag cheap.
  **Nothing was rendered or built; the PNG was inspected as supplied.**
- **Did not do:** Did not edit the SVG, re-render, or promote to `assets-canon/`.
- **Next (for Codex):**
  1. **`labels-components` holds review annotations, not captions** — "TRACKS
     SEPARATE", "TRACKS CONVERGE", "SHARED SAFETY-DEVICE FORM", "RETURN STEPS"
     are notes about what changed in v2. The v1 component names (COMB PLATE +
     TEETH, MOTOR + DRIVE CHAIN, STEP MONITORING DEVICES) were dropped and are
     what belongs there. As built, switching the group on in a scene captions the
     film with reviewer notes. Four strings; do it before anything imports the
     asset.
  2. **Define the state vocabulary before the first scene component.** The
     architecture is right — neutral base, roles addressable, colour reserved for
     state — but nothing says which colour a role takes in which state. Without
     that table each scene decides for itself and the drift the design system
     exists to prevent arrives anyway. A draft table is in the review document;
     the `failed` column is the one the Hong Kong beat needs and the one with no
     obvious answer.
- **Correction to my own v1 review:** I flagged the v2 render as bleeding off
  frame. It does not — all coordinates sit inside 0–1920; the tracks end at
  x=185 and x=1775 and the review rules run to the margins. My earlier palette
  "stray" (`#E4DCC4`) was also wrong; it is `cutaway`. Three suspected defects
  from image-reading, all three false.
- **Blocked:** Nothing.

## 2026-09-15 — Codex — Episode 02 boxed-label rule correction

- **Status:** The V2 callouts are geometrically centered and clear. The
  candidate remains pending owner approval.
- **Changed:** Centered four boxed callouts, shortened three, regenerated the
  PNG and hashes, and added the shared boxed-label fit rule to the diagram layer.
- **Verified:** Every component callout is centered and clear at 1920 x 1080;
  mechanism geometry, group IDs, wheel anchors and state contract are unchanged.
- **Did not do:** No canonical promotion, component, cue, manifest, narration or
  generated-media asset changed.
- **Next:** Owner reviews V2; approval promotes this exact candidate.
- **Blocked:** Canonical promotion remains blocked on owner approval.

## 2026-09-15 — Codex — Episode 02 V2 label-fit correction

- **Status:** The four V2 review labels now retain visible internal padding.
  The candidate remains pending owner approval.
- **Changed:** Shortened the state-contract pill and three component callouts;
  regenerated the 1920 x 1080 PNG and updated both file hashes in the sidecar.
- **Verified:** All four marked text runs fit their containers in the rerender;
  mechanism geometry, group IDs, wheel anchors and state contract are unchanged.
- **Did not do:** No canonical promotion, component, cue, manifest, narration or
  generated-media asset changed.
- **Next:** Owner reviews V2; approval promotes this exact candidate.
- **Blocked:** Canonical promotion remains blocked on owner approval.

## 2026-09-15 — Codex — Episode 02 grouped mechanism V2 review candidate

- **Status:** V2 is rendered and structurally validated beside V1. It remains a
  review candidate pending owner approval and is not in `assets-canon`.
- **Changed:** Added the V2 SVG, review PNG and sidecar; updated the review
  README and time log. V1 remains intact for comparison.
- **Verified:** All 16 required and four support groups occur exactly once; 22
  wheel anchors exist across 11 visible steps; tracks use distinct transition
  curves that coincide at the landings and separate on the incline; the base
  contains no semantic colour, gradient, filter, partial opacity or raster.
  XML, unique IDs, label containment, hashes and the 1920 x 1080 render pass.
- **Did not do:** No canonical promotion, production import, scene component,
  cue, narration, manifest or generated-media anchor changed.
- **Next:** Owner reviews V2. On approval, promote that exact geometry and its
  canonical metadata to `assets-canon/vertical-transport/`, then create the
  four generated first-frame anchors as one contact sheet.
- **Blocked:** Canonical promotion remains blocked on owner approval.

## 2026-09-15 — Claude — review of escalator-mechanism-v1-candidate

- **Status:** Adversarial review of the grouped SVG. **No file edited** — Codex
  holds BUILD. Findings in
  `work/hidden-systems-ep-02/mechanism-asset-review-claude-2026-09-15.md`.
- **Changed:** Added the review document. Nothing else.
- **Verified by re-derivation:** all 16 required groups present exactly once; XML
  well-formed; `svgSha256` matches the file; zero gradients, filters, partial
  opacity or raster images; all 11 text nodes inside `labels`; every colour is
  house palette. **Every mechanical claim in `review.json` holds.** `step-01`
  through `step-11` as addressable groups correctly carries the M03 lesson.
  **Nothing was rendered or built; the PNG was inspected as supplied.**
- **Did not do:** Did not edit the SVG, did not re-render, did not promote
  anything to `assets-canon/`.
- **Next (for Codex), in order:**
  1. **`front-track` is `M302 746 L1384 290` and `rear-track` is
     `M322 794 L1403 338` — two straight lines at constant offset.** The
     narration says the tracks *change position* to turn a flat tread into a
     stair. Parallel tracks cannot do that. The staircase is drawn per-step and
     the tracks are decorative, so the asset depicts a mechanism that does
     nothing. This also blocks Failure 3, where the sag must read as one wheel
     leaving one track. Redraw the tracks as real geometry and let each step's
     angle follow from its two wheel positions.
  2. **Colour roles are inverted in three places.** `comb-plate` and
     `front-track` are mustard (MOTION/DRIVE) but are fixed; `rear-track` is
     olive (SAFETY DEVICE) but is fixed; `motor` is teal (fixedStructure) but is
     the drive. Also `fixedStructure #356F70` is declared in `review.json` with
     **no legend entry**, so the teal motor has no key — five roles, four legend
     rows.
  3. **`return-steps` has no fill, stroke or stroke-width at all** — six shapes
     inheriting from the parent, which is why they read as background texture
     rather than as the same steps inverted.
  4. **`labels` is a flat group** mixing review furniture (title, episode stamp,
     legend, disclaimer) with the four component labels. Split into
     `labels-components` and `labels-review` so production can show one without
     the other.
  5. No floor datum exists, so "under the stairs" has nothing to be under.
- **Blocked:** One owner decision sits behind finding 2. The legend makes colour a
  permanent **category**, which collides with the house rule that colour is
  **state**. As drawn, a safety device is green whether or not it has acted, so
  when the broken-chain device fails to fire there is no colour change available
  for the dramatic centre of the episode. Recommended: category by form (the
  safety devices already share a shape), state by colour. Owner to confirm before
  the SVG is redrawn, since it changes the legend.

## 2026-09-15 — Codex — Episode 02 grouped mechanism review candidate

- **Status:** The shared escalator mechanism has a visually inspected V1 review
  candidate. It remains pending owner approval and is not in `assets-canon`.
- **Changed:** Added `mechanism-asset-review/` with the 1920 x 1080 grouped SVG,
  a rendered PNG, review metadata and promotion notes; updated the Episode 02
  index and time log.
- **Verified:** The SVG is well-formed; all 16 manifest-required group IDs occur
  exactly once; the PNG was rendered at 1920 x 1080 and visually checked after
  correcting one legend collision. Source scope is recorded in the review JSON.
- **Did not do:** No owner approval is inferred. No canonical asset metadata,
  production component, cue, manifest, narration or generated anchor changed.
- **Next:** Owner reviews the candidate. On approval, promote a production copy
  and metadata to `assets-canon/vertical-transport/`; then build the four
  first-frame anchors as one contact sheet.
- **Blocked:** Canonical promotion is intentionally blocked on owner approval.

## 2026-09-15 — Codex — Episode 02 bounded timing audit

- **Status:** Pre-build timing QA is complete; the shared grouped escalator SVG
  is now the next production task.
- **Changed:** Added `cue-timing-audit-2026-09-15.md`; extended `cues.csv` with
  reviewed primary-action frames and six internal sub-beats; updated the Episode
  02 index, timing verification and time log.
- **Verified:** Audited the union of all eight short drops, eleven longest cues
  and seven low-confidence anchors against the locked waveform: 25 cues total.
  All 74 cue spans remain contiguous from frame 0 through 7,322, and every new
  primary or sub-beat frame falls inside its cue.
- **Did not do:** No narration, raw ASR evidence, scene range, manifest duration,
  SVG, component or render changed. This was waveform analysis, not a claim of
  human listening; final subjective sync review remains attached to scene review.
- **Next:** Draw and approve `escalator-mechanism-v1.svg` with its metadata,
  then create the four generated first-frame anchors as one contact sheet.
- **Blocked:** None.

## 2026-09-14 — Claude — end-screen decision resolved; one constraint on the closing scene

- **Status:** Owner will add the end-screen tail in post. The block recorded in
  the entry below is **released**; the timeline stays at 7,322 frames and no
  `layoutContract` change is required.
- **Changed:** This entry only. No file edited.
- **Verified:** Nothing new measured. The end-screen placement window (last
  5-20 s) was verified earlier against YouTube's documentation.
- **Did not do:** No build, render or edit.
- **Next (for Codex), when building `ordinary-close`:** two constraints that are
  free now and expensive to retrofit, because a tail added in post can only
  extend the final frame.
  1. **End on an extendable frame.** Cue 74 holds on a *moving* escalator.
     Freeze-extending a moving frame stops the motion dead and reads as a
     glitch. Either settle the step band to a still at the final frame, or make
     the last shot a seamless loop so it can be loop-extended. State in the
     component which of the two it is.
  2. **Keep the end-screen zones clear at frame 7321.** Whatever occupies them
     on the last frame is what the cards will sit on top of once the tail is
     frozen or looped from it. No new layout region is needed - simply do not
     place typography or the Observer where cards will land.
- **Blocked:** Nothing.

## 2026-09-14 — Claude — review of the locked-VO cue and manifest work

- **Status:** Adversarial review only. **No file was edited** — Codex holds BUILD.
  Findings in `work/hidden-systems-ep-02/cue-review-claude-2026-09-14.md`.
- **Changed:** Added the review document. Nothing else.
- **Verified by re-derivation, not by reading:** 74 cues contiguous across frames
  0–7322 with no gaps or overlaps; `f_out − f_in == frames` on every row; each
  cue assigned exactly once across the eight scenes; scene ranges contiguous and
  each equal to its own cues' range; 305.057959 × 24 → 7322; two bespoke systems
  flagged against a limit of two; twelve movements. **Every structural claim in
  the previous entry holds.** Loudness (−16.55 LUFS, −0.44 dBTP) closes a
  carried-over Pilot 01 defect. **Nothing was built, typechecked or rendered.**
- **Did not do:** No component, SVG, anchor, contact sheet, build or render. Did
  not listen to the narration — the confidence finding below is derived from the
  recorded values in `cues.csv`, not from audio.
- **Next (for Codex):** (1) Check cues 61, 36, 67, 54, 73, 21 and 28 by ear
  against the locked MP3 — eleven cues sit under 0.80 recorded confidence and
  three of them anchor the on-screen FAILURE labels; a `confidence_checked`
  column would make the pass auditable. (2) Review `lead_frames` on the eight
  one-word drops and the eleven long cues; 73 of 74 currently carry a uniform 3,
  which is the assumption D-034 explicitly warns against. (3) Give cues 29, 48,
  39, 44, 23 and 20 an explicit internal sub-beat frame — each carries two
  actions in one span, which is how Pilot 01's dead runs formed; this is
  annotation inside an existing span and does not move the locked timeline.
- **Blocked:** One owner decision precedes the `ordinary-close` component: the
  timeline ends at 7,322 with the narration, so there is **zero** end-screen
  real estate, and YouTube allows cards only in the last 5–20 s (120–480
  frames). Either add a ~240-frame tail and a fifth `layoutContract` region
  naming the card zones, or ship without an end screen. Composition depends on
  which.

## 2026-09-14 — Codex — Episode 02 shared-repository reconciliation

- **Status:** Episode 02 research, script, locked-VO timing, cue authority and
  visual plans are consolidated for the shared GitHub checkpoint.
- **Changed:** Corrected the sprinkler candidate from an unsupported published
  state to `pilot_complete_pending_publication`; updated D-036 and the Episode
  02 structure notes to reflect the later Langham Place case and injury-count
  verification.
- **Verified:** The Episode 02 manifest contains eight scenes, 74 unique cues,
  two bespoke systems, four generated units and a final frame of 7,322. The
  locked narration remains local-only and matches its recorded SHA-256.
- **Did not do:** No media, render, temporary bundle or prepared commit-message
  file is included. No publication, asset generation, component build or render
  was performed.
- **Next:** Commit and push this checkpoint to `main`; Claude and Codex should
  read this entry plus `work/hidden-systems-ep-02/README.md` before production.
- **Blocked:** None.

## 2026-09-14 — Codex — Episode 02 generated-scene rhythm revision

- **Status:** Owner identified excessive continuous motion-graphics risk. The
  plan now alternates diagrams with four short cel-like generated units at the
  opening, landing hazard, step-sag reaction and closing ride; G-01 is reprised
  for the Hong Kong case.
- **Changed:** Updated `production-manifest.json`, `visual-plan.md`, `README.md`
  and `time-log.csv`; added `generated-media-plan.md` with cue spans, required
  motion, first-frame composition and a deterministic fallback for each unit.
- **Verified:** All 74 cues remain assigned exactly once across eight contiguous
  scenes. Generated units now equal the D-034 cap of four; bespoke systems remain
  two. No generated source is assigned responsibility for a technical claim.
- **Did not do:** No anchor, generated motion, SVG, Remotion component, contact
  sheet, build or render was created.
- **Next:** Create the grouped mechanism SVG and the four first-frame anchors;
  review all anchors together before generating motion one unit at a time.
- **Blocked:** A fifth generated unit or third bespoke system now requires an
  explicit rescope. Stop a unit after two failed motion attempts and use its
  deterministic fallback.

## 2026-09-14 — Codex — Episode 02 scene and asset plan

- **Status:** Phase 3 visual planning is complete. The 74 cues are consolidated
  into eight reviewable scenes; the plan uses two bespoke systems and one
  generated-media unit within D-034's limits.
- **Changed:** Added `work/hidden-systems-ep-02/production-manifest.json` and
  `visual-plan.md`; updated the Episode 02 production index and time log.
- **Verified:** All 74 cues appear exactly once; scene ranges are contiguous
  from frame 0 through 7,322; all 12 movement review ranges are preserved. The
  manifest plans eight scene systems, two bespoke systems and one generated
  unit against limits of 12, two and four respectively.
- **Did not do:** No SVG, first frame, generated motion, Remotion component,
  contact sheet, build or render was created.
- **Next:** Draw and approve the named-group `escalator-mechanism-v1.svg`, then
  create the G-01 incident first frame. Build `mechanism-reveal` before the
  remaining deterministic scenes to validate the shared asset.
- **Blocked:** None. The worktree still contains earlier uncommitted Episode 02
  files, so this planning tranche remains uncommitted to avoid obscuring file
  ownership.

## 2026-09-14 — Codex — Episode 02 word alignment and cue authority

- **Status:** Locked narration is aligned and the initial Phase 3 breakdown is
  complete: 74 visual actions across 12 movements, continuously covering frames
  0–7,322.
- **Changed:** Added `cues.csv` as the sole editable timing/visual-intent
  authority; added `words-asr.json`, `captions-asr.json`,
  `cue-alignment-report.json` and `transcript-verification.md`; updated the
  Episode 02 index, VO lock and time log; added reusable
  `scripts/transcribe-episode-vo.py`.
- **Verified:** Script and ASR each contain 790 words before number
  normalization; 775/790 normalized tokens match directly (98.10%). Remaining
  differences are documented recognition errors. Cue boundaries are contiguous,
  no cue is under one second, and the final cue ends at frame 7,322. Local
  transcription took 62.117 seconds and used no API credits.
- **Did not do:** No scene-system consolidation, production manifest,
  composition, asset inventory, generation, code build or render.
- **Next:** Group the 12 movements into the Episode 02 scene manifest, choose
  deterministic Remotion versus existing/generated assets, and enforce the
  four-generated-unit and two-bespoke-system rescope gates before building.
- **Blocked:** None. Low-confidence ASR scores at several pause-led movement
  openings do not alter their timings; the script is the text authority.

## 2026-09-14 — Codex — Episode 02 narration lock

- **Status:** Owner-supplied escalator narration is locked as the Episode 02
  timing authority at 305.057959 seconds / 7,322 frames at 24 fps.
- **Changed:** Added the local-only VO at
  `work/hidden-systems-ep-02/audio/escalator-vo-v1.mp3`, staged an identical
  runtime copy at `public/voiceover/episode-02/escalator-vo-v1.mp3`, and added
  `README.md`, `vo-lock.json` and `time-log.csv` to the Episode 02 work folder.
- **Verified:** Both MP3 copies match SHA-256
  `581488692d22de2694d1fb81580fa9ed842c82510fdf7e5506cf076d0fa2aadc`;
  source is mono MP3, 44.1 kHz, 140220 bps, -16.55 LUFS integrated and -0.44
  dBTP. Existing Claude-authored Episode 02 files were not altered.
- **Did not do:** No word-level alignment, cue authority, scene breakdown,
  production manifest, composition, asset generation or render.
- **Next:** Transcribe the locked MP3, verify it against
  `script-v3-vo-v3.txt`, and derive the single editable cue authority with the
  three-frame visual lead recorded explicitly.
- **Blocked:** None. Narration media is intentionally local-only and must be
  restored from the canonical PC for a render-complete clone.

## 2026-09-14 — Claude — Episode 02 beat sheet, VO draft and case verification

Supersedes the "no script / case unverified" lines in the entry below; both
changed after the owner supplied a beat sheet later the same day.

- **Status:** Episode 02 restructured to the owner's four-failure beat sheet;
  VO drafted; beat-5 case verified. No code, manifest or media touched.
- **Changed:** Added `work/hidden-systems-ep-02/script-v1-vo-v3.txt` (804 spoken
  words, 19 v3 audio tags, no SSML breaks) and `structure-notes.md`; set the
  escalator's case fields in `candidates.csv` to verified; title changed to the
  owner's "How Escalators Go Horribly Wrong"
- **Verified:** Every safety device in the beat sheet confirmed real against an
  EN 115-1 device summary — **secondary source, the standard itself was not
  read**. Beat-5 case verified against the EMSD technical investigation of the
  Langham Place incident, 25 Mar 2017 (drive chain broke; the broken-drive-chain
  device failed to actuate the auxiliary brake; grease contamination plus one of
  two compression springs locked by a nut). **Nothing typechecked, built or
  rendered; no shell run against the repo on the owner's PC.**
- **Did not do:** The throughput tranche — still none of the four. No cue
  authority, no components, no VO recording, no thumbnail.
- **Next (for Codex):** (1) Three owner decisions are open in
  `structure-notes.md` — runtime 5:13 vs cutting failure three, title A/B arms,
  and the two-bespoke-system constraint; do not start building until at least
  the budget one is answered. (2) Pull the injury figure from the EMSD report
  itself before any number goes in the VO. (3) Build the throughput tranche,
  which needs a shell on the owner's PC.
- **Blocked:** `git push` from the cloud session is refused — the repo is not in
  that session's authorized set, so all work was written directly to
  `C:\Users\dicku\Videos\midnight-everyman` and must be committed from there.

## 2026-09-14 — Claude — Episode 02 subject and packaging

- **Status:** Episode 02 packaged to gate 3; no code, manifest or media touched
- **Changed:** Added `research/competitive-landscape-2026-09.md` and
  `work/hidden-systems-ep-02/packaging.md`; recorded D-035 and D-036; marked the
  escalator `production_ready` and the sprinkler `published_2026-09-13` in
  `content/candidates.csv`
- **Verified:** All figures measured 14 Sep 2026 via vidIQ and stated with their
  confounds. Grenfell Phase 1 wording was verified against the gov.uk-hosted
  executive summary while fire door was still the candidate — that subject was
  then dropped, so the quote is unused. **Nothing was typechecked, built or
  rendered this session; no shell was run against the repo on the owner's PC.**
- **Did not do:** The throughput tranche (episode scaffold and time log, generic
  scene review, safe-region overlay, one cue authority) — none of the four
  exists. No script, no VO, no cues, no components. Beat 5's case is unverified.
- **Next (for Codex):** (1) Verify an escalator entrapment case with a literal
  source, verification date and explicit mechanism-relevance judgment, and fill
  the case fields in `candidates.csv`; (2) build the four throughput-tranche
  tools, which need a working shell and renders on the owner's PC; (3) leave the
  title A/B arms alone — they are set to test the danger frame and picking a
  winner early destroys the test.
- **Blocked:** Two open contradictions recorded in D-035 need an owner decision
  before scripting: whether rung-one titles must still be escalated, and whether
  the danger frame stays canonical.

## 2026-09-13 — Codex — Episode 02 efficiency policy

- **Status:** Documentation authority updated; no production tooling or media changed
- **Changed:** Added the concise episode playbook; corrected stale project, Pilot 01 and restart pointers; made claims conditional on concurrent writing; recorded D-034
- **Verified:** Cross-checked the new policy against the Fable throughput audit, both Pilot 01 postmortems and the current v7 master state
- **Did not do:** Build the scaffold, review command, cue derivation, safe-region tooling, primitive framework, sound kit or Episode 02 itself
- **Next:** Implement the minimum throughput tranche before Episode 02, then measure the episode by phase
- **Blocked:** Nothing

## 2026-09-12 — Codex — sprinkler pilot closeout

- **Status:** Complete through clean v7 review master
- **Changed:** M05, M10 and M11 structural revisions integrated; repository closeout and coordination documents added
- **Verified:** 6,738 H.264 frames, 1920×1080/24 fps, stereo AAC; 35 chronological visual checkpoints inspected
- **Did not do:** Sound design, YouTube upload, global texture treatment, final Pipe-year decision
- **Next:** Add restrained SFX, resolve or retain the visible year marker, approve the closing, then publish at owner discretion
- **Blocked:** Nothing

## 2026-09-12 — Codex — shared GitHub checkpoint

- **Status:** GitHub source of truth established on `main`
- **Changed:** Connected `origin`; committed production code, manifests, decisions, research data, small anchors, repository policy, retrospective and Codex process post-mortem
- **Verified:** Lint/TypeScript and bundle pass; manifest tests 12/12; generated status reports 97% approved, 3% review and 0% unbuilt
- **Did not do:** Upload local narration, source videos, scene-review renders, rollback renders or the 119 MiB master
- **Next:** Every agent reads `claims.json` and this log, claims its scope, works in a separate worktree when writing concurrently, then appends a bounded handoff
- **Blocked:** Nothing

## 2026-09-12 — Codex — legacy media boundary

- **Status:** Current Git tree is source/data only; local media is preserved
- **Changed:** Untracked nine previously committed R&D MP4/MP3 files and expanded the media ignore policy
- **Verified:** Files remain present on the local PC; sprinkler renders, narration and generated source videos remain ignored
- **Did not do:** Rewrite or purge pre-policy Git history
- **Next:** Use manifests and local paths for media; do not force-add binaries
- **Blocked:** Nothing

---

## 2026-09-16 · M02 dynamism pass (Claude, integration owner)

Owner review of the M02 contact sheets: "does what it says on the tin... could use a little
more style, dynamism... I just worry about this not be exciting enough for humans."

Measured M02 as built with the Pilot 01 motion method. **77% static, four dead runs (51/53/98/67
frames), 42% of the scene inside a dead run.** Pilot 01's failure baseline was 70%. The scene
was worse than the thing the rule exists to prevent, and I approved it to contact sheet without
measuring — stills cannot show a rate failure.

Root cause: every ambient motion in the scene travelled less than 1px/frame. `Drift` moved 6px
across a whole cue; `useBoil` was 0.7px on a 1920px frame; cue 10's push used an ease-out whose
tail crawls for 66 frames. Cue 07 and cue 10 were additionally staging failures — 0.7% ink
coverage, and a nut drawn at 16% of frame height under the line "one nut".

After the pass: **48% static, zero dead runs, longest still stretch 36f (1.5s).**

Changed in `src/escalator-ep02/FailureMapScene.tsx`:
- `Drift` → `Camera`: linear, directional, per-cue, bounded (scale ≤5%, pan ≤52px).
- Cue 07 docket stamps in; cue 09 camera rides the warning then parks dead at f46; cue 10 push
  made linear and the nut grown to ~36% of frame height with 7.5° of turn; cue 12 vertical track
  plus per-card emphasis as each device is named. Cue 13 untouched.
- Cue joins are now `@remotion/transitions` dissolves. **Frame lock preserved** — each sequence
  carries `OVERLAP` extra frames that the following transition consumes, so
  `sequence duration = cue length + duration of the transition that follows it`. Cue starts
  verified at 0/54/111/207/315/373/538, total 636.
- `useBoil` 0.7px → 2.1px stepped at 12fps; paper grain reseats every second frame.

Not done, needs an owner decision:
- `@remotion/effects` is installed but WebGL2, requiring `Config.setChromiumOpenGlRenderer('angle')`
  project-wide. I cannot render on the Windows box (device shell is a Linux VM against a Windows
  `node_modules`), so I did not change the global renderer config on untestable ground.
- Proposed amendment to `docs/02-creative/diagram-layer.md` adding a **motion rate floor**
  (≥1px/frame for a move's whole span; linear timing for any move carrying a hold). Text is in
  `work/hidden-systems-ep-02/m02-dynamism-pass-2026-09-16.md`. Not applied.
- `clockWipe` on the LATER jump was tried and rejected — rendered as a hard white wedge, reads
  as a glitch. Replaced with a 12-frame dissolve.

Verified: tsc + eslint clean (cloud clone, Remotion 4.0.509), 636 frames rendered and measured,
safe-margin sweep before and after (244 violating frames → 17 at ≤24px; cue 13's are the
full-bleed tread and correct). NOT verified: a render on the owner's machine.

Review artifacts: `work/hidden-systems-ep-02/assembly-review/m02-before-after.mp4` (split screen,
with VO) and `m02-dynamism-v1.mp4`.

---

## 2026-09-17 · motion grammar v2 + M05 built (Claude)

**M02 v1 dynamism pass rejected by owner** — "shaky cam quality... very little difference".
Both complaints correct. The 2.1px boil was a whole-element translate, i.e. camera shake
wearing the name of line quality; reverted to 0.6px and the animated paper grain removed.
The larger error: the pass was validated with mean inter-frame delta, which rewards uniform
slow drift — the exact thing that reads as nothing happening. **Do not use delta-per-frame as
a proxy for whether a scene is alive.**

**Owner approved a new direction**: explainer timing in house drawing, plus stronger staging.
Written up as `docs/02-creative/motion-grammar-v2.md`. Three rules: a move lands inside 6-12
frames then stops dead; 3-4 shots per cue with hard cuts; parts drawn as objects (cast shadow,
varied stroke, hatched faces, visible fasteners, enough mechanism to show intent).
Grammar test that earned the approval: `assembly-review/m02-v2-grammar-test.mp4`.

**New shared module `src/escalator-ep02/grammar.tsx`** — `land()`, `move()`, `look()`, `Shot`,
`PushIn`, `Arrow`, `Slam`, `Caption`, `Shadow`, `Stage`, palette. Use it for every new scene.
`look(px, py, s)` computes the transform that puts a native drawing point at frame centre;
framing by hand-guessed translate/scale left large dead space on the first pass and is the
same defect as not moving at all.

**M05 built** — `src/escalator-ep02/SkirtGapScene.tsx`, cues 28-35, f2635-3582, 947 frames.
Part of `local-entrapment`, built out of manifest order because it is also the standalone
Short. Manifest scene status set to `partial`; M04 (cues 21-27, f1845-2635) still planned.

Colour discipline in M05: the brush is a passive warning and never goes teal. The
skirt-obstruction switch is a protective trip that works, so cue 34 is the first earned teal
in the episode. Coral marks the gap as a hazard only.

Also added: `M05Silent` and `M02Silent` compositions (no VO) for frame-accurate review, and
`M02V2Demo` (the grammar test). All three are review-only.

### Open owner decisions
1. **M01 is approved in the old grammar** and will not match. Rebuild, or ship with a visible
   seam at 0:19.
2. **D-034's budget** (~12 owner-hours, <=12 scene systems) was written for the old grammar and
   probably does not survive it. Extend, or cut scope.
3. **M02 cues 07/10/11/12 still need the v2 retrofit** before the episode ships.

### Analytics context (see work/hidden-systems-pilot-01/ep01-baseline-2026-09-17.md)
Ep 01: AVD 2:37, 55.6% APV — but search traffic alone watched 37.3%; the headline is inflated
by insider views. Only traffic sources are YouTube search and the channel page: **no suggested,
no browse.** Retention curve still gated at 100 views, and the Analytics API respects the same
gate. Distribution, not retention, is the binding constraint — which is why M05 was built first.

---

## 2026-09-17 · Escalator brush Short v2 rough assembly (Codex)

- **Status:** Full-resolution 9:16 review candidate rendered; owner picture and
  pacing approval pending. Nothing published.
- **Changed:** Added `BrushShort916.tsx`; registered clean and safe-area review
  compositions; staged the six Grok candidates and owner-cut VO v2 as ignored
  local media; added a compact timing/verification record under
  `work/hidden-systems-ep-02/shorts/brush-short/`.
- **Timing authority:** `brush-short-vo-v2.mp3`, 34.56 seconds, SHA-256
  `a4455d5d9a00cae6206d054e52a84f8ecfe6a05ef55a639df6c195bff6cb286f`.
- **Edit:** Generated plates carry frames 0-573; deterministic Remotion carries
  the hidden switch and warning/apology close at frames 574-829. Generated audio
  is muted.
- **Verified:** `npm run lint` and `npm run build` pass. Safe frames 12/620/790
  and the final twelve-frame contact sheet pass visual inspection. Review stream:
  H.264 1080x1920/24 fps, stereo AAC 48 kHz, 34.624 seconds.
- **Review file:**
  `work/hidden-systems-ep-02/assembly-review/brush-short-916-v2-review.mp4`
  (local only; SHA-256
  `6c309dacd65cf7c01ff99d3239f5bb0da3b8c2ab8318c0556ce27ef1a0461589`).
- **Correction history:** Rejected the first anchor geometry; rebuilt from the
  real diagonal skirt-deflector reference. Preview v1 then exposed an accidental
  headline run-in and undersized phone labels; both are fixed in v2.
- **Next:** Owner watches v2 audio-first and then picture-only. If approved,
  promote the six candidate plates in the local media record and proceed to
  sound/publish packaging; otherwise revise only named bounded defects.

---

## 2026-09-19 · READ FIRST · Episode 02 reframed to four incidents (owner approved)

**Episode 02's thesis has changed and its locked VO is dead.** Do not build to `cues.csv` or to
the frame placements in `production-manifest.json` until a new VO is recorded and aligned.

Full brief: `work/hidden-systems-ep-02/ep02-disaster-reframe.md`.

### What changed

Was: *escalator safety mechanisms*, one incident (Hong Kong) as cold open, four failure modes.
Now: **four real incidents, each paired with the device that should have stopped it.** Target
runtime ~6:00, up from 5:05.

The reason all four cohere: every one is a safety system defeated by an institution, not by bad
luck or user error. Rome zip-tied the brake because the alarm was annoying. Moscow fitted new
brakes using the old brake's manual. Hong Kong over-tightened one nut and locked the spring it
was meant to leave free. That is `visual-language.md`'s editorial rule exactly — aim at
machinery, systems and bureaucracy, never at the person who made the mistake.

Order, escalating on **how completely the protection failed** (body count was explicitly
rejected as the axis):

1. **Hong Kong**, Langham Place 2017 — 18 injured. Device existed, did not fire. The nut.
2. **Rome**, Repubblica 2018 — 24 injured. Device switched off deliberately with cable ties.
3. **Moscow**, Aviamotornaya 1982 — 8 dead. Every device present, all misconfigured.
4. **Jingzhou**, Hubei 2015 — 1 dead. No device. The landing plate was not there.

Cold open teases Jingzhou and the film closes on it — the teased item must be the payoff.

### Two new house rules, added today, both owner-approved

- **The threshold rule** — `docs/02-creative/visual-language.md`, new "Depicting incidents"
  section. Illustration runs to the last moment the person is safe; the cut lands there;
  everything after is diagram or ghost. Three registers is the ceiling.
- **The ghost register** — `docs/02-creative/diagram-layer.md`. An anonymous schematic figure.
  Primary job is the counterfactual (same moment, device failing vs device working), not the
  approach. Shows trajectory and position, never consequence. Never coral, never teal. Must not
  read as the Everyman.

### What dies, and what survives

Dies: the episode VO lock (305.058s / 7322 frames), `cues.csv` (74 cues), manifest frame
placements, the G-01…G-04 plate anchors, and the **timing** of M01, M02 and M05.

Survives: `src/escalator-ep02/grammar.tsx`, every drawn component (`Step`, `SkirtPanel`,
`Brush`, `Shoe`, `SkirtSwitch`, `Link`, `Detector`, `CaseDiagram`), the canonical mechanism SVG,
the illustrated plates, the Everyman, all house docs. **Alignment is being thrown away, not art.**
Re-script by insertion — the mechanism copy is still correct.

**The brush-short is NOT affected.** It is published and its own `vo-v3-lock.json` stands. The
brushes leave the episode (no incident backs that mode) and the Short owns them; the episode
links out.

### Short 01 result — the evidence this reframe rests on

Published 2026-09-18, `xc658_ygGRE`, "Why Escalators Have Brushes 🧐", 38s.
Zero views for the first ~2 hours, then **265 views and +1 subscriber in 24 hours.**

Ep 01 never received a single suggested or browse impression in its life. The Short got feed
distribution from a zero-subscriber channel. **The cold-start diagnosis was right and the Shorts
premise held.** Field data says this topic rewards small channels — outlier scores run inversely
to subscriber count, from 1,525× at 140K subs down to 0.97× at 4.18M.

### Open decisions

1. **Owner hours.** D-034 budgeted ~12 and motion grammar v2 already broke it. Re-script,
   re-record, re-cue and re-time is materially larger.
2. **Cold open: Moscow or Hong Kong.** Moscow is more dramatic; Hong Kong has the nut and M01
   is built and approved.
3. **Jingzhou's technical cause** needs firming up before scripting — no official
   English-language report located.
4. **Four illustrated lead-ins, four different escalators** — the 1982 Soviet one is a period
   piece. Commit to the specificity or lose it.
5. **Sound design is now a line item.** When the image is withheld, the jolt and the silence
   after carry the cut.
6. M01 is still in pre-v2 grammar; M02 cues 07/10/11/12 still need the v2 retrofit.

### Housekeeping

`docs/02-creative/_to_delete/` holds two `.bak` files from today's doc edits — the device shell
cannot delete, so they need removing by hand. Also still at repo root from an older session:
`ep02-commit-msg.txt`, `ep02-work.bundle`.

---

## 2026-09-19 · Codex · Episode 02 evidence correction and script v4

- **Status:** The four-incident reframe is now reflected in both repository
  indexes and decision D-037. Script v4 is an editorial draft, not a timing or
  VO lock. No Remotion timing, manifest placement, cue file or media was changed.
- **Critical correction:** Jingzhou's landing plate was not absent. A present
  cover loosened and flipped. The technical investigation also found deficient
  cover design, dimensions inconsistent with drawings, insufficient protection
  beneath it, and failure to stop the escalator after staff saw the cover lift
  five minutes before the accident.
- **Changed:** Updated `README.md`, the Episode 02 `README.md`,
  `ep02-disaster-reframe.md`, `docs/05-experiments/next-experiment.md` and
  `docs/06-handoff/decision-record.md`; added
  `incident-evidence-2026-09-19.md` and `script-v4-disaster-reframe-draft.md`.
- **Evidence boundary:** Hong Kong and Rome rest on government technical
  reports. Jingzhou rests on Chinese state-media accounts quoting the official
  technical investigation; the original report was not located publicly.
  Moscow remains the weakest source and the draft deliberately omits the earlier
  unsupported "miswired speedometer" detail. The active brief also no longer
  assigns a motive to Rome's cable ties; their placement and mechanical effect
  are documented, while motive is unnecessary to the episode.
- **Next:** Owner reviews script v4 for story and voice. After approval, record a
  fresh VO, measure it, word-align it, and only then replace the obsolete cue and
  manifest timing.

---

## 2026-09-19 · Codex · Episode 02 retention and three-register revision

- **Status:** Script v5 and generated-media plan v2 are editorial planning
  drafts. No VO, cue authority, manifest timing, source media or Remotion code
  changed.
- **Hook:** The first 25–30 seconds now previews Hong Kong, Rome, Moscow and the
  counterintuitive China floor failure. China remains open with `We will get to
  that one.` A shorter reminder after Moscow adds the five-minute warning fact
  immediately before the payoff.
- **Visual grammar:** Each incident uses generated UPA reality before the
  threshold, neutral anonymous ghost motion at or just after failure, and a
  deterministic Remotion autopsy showing the failed part and intended failsafe.
  Jingzhou stays illustrated through the child reaching solid floor and may
  omit the ghost to avoid a rote fourfold pattern.
- **Hybrid overlays:** Remotion may remain over generated shots for cue-locked
  text, arrows, tracked highlights, direction/speed indicators, evidence stamps
  and semantic colour. The generated plates must therefore preserve text-safe
  negative space and contain no embedded labels.
- **Scope:** Plan for eight generated motion units, with approximately 55–60%
  generated screen time. This deliberately exceeds D-034's four-unit rescope
  gate and records the owner's choice rather than hiding the overrun.
- **Efficiency boundary:** Approve two contact sheets first, then generate only
  the Hong Kong pair and prove the UPA → ghost → Remotion handoff before buying
  the remaining six units.
- **Next:** Owner reviews script v5 and the visual ratio. If approved, build the
  eight first-frame contact-sheet candidates before generating motion.

---

## 2026-09-21 · Codex · Episode 02 final VO and scene/register map

- **VO lock:** `work/hidden-systems-ep-02/audio/escvofinal.mp3` is the local-only
  final recording: 334.811 seconds / 8,036 frames at 24 fps, SHA-256
  `7ed85d0ff4a00600f39b9cf3ed62fc3948c1c40f17022a6fff921f6c5f5a4bde`.
  Metadata is tracked in `vo-final-lock.json`; word alignment is still pending.
- **Scene authority:** `work/hidden-systems-ep-02/scene-map-v1.md` maps the
  5:34.81 recording into 26 production scenes. Its timecodes are section-level
  estimates until the new word timestamps replace them with cue-locked frames.
- **Register decision:** Generated UPA animation owns ordinary reality and the
  last safe human action. The ghost register will be a deterministic Remotion
  SVG replacement-cel system, not generated video. Remotion also owns the exact
  mechanism autopsies and may overlay sparse labels/arrows on generated shots.
- **Generated scope:** Seven source clips: Trump, Hong Kong, Rome, Moscow and
  three Jingzhou beats. Cold-open previews reuse those clips; no separate teaser
  generations.
- **Ghost style proposal:** Midcentury industrial-safety cutouts with circular
  heads, tapered solid limbs, neutral reference fill and ink-mute outline. They
  move on twos through fixed replacement poses, remain foot-anchored to the step,
  and freeze at the harm boundary while the mechanism continues.
- **Next:** Word-align the final VO, then build only the Hong Kong 8–10 second
  illustrated → ghost → autopsy proof and a four-pose GhostFigure style card.

### 2026-09-21 opening amendment

- Owner approved the opening of
  `source-media/generated/trump-escalator-opening-approved-v2.mp4` as a
  pre-narration hook, retaining its generated line: `This is the best escalator,
  believe me.` No disclosure label is wanted.
- The approved file has SHA-256
  `6a191666d237bca12f3f3e3c314bb4e514589b1de09ee3d1ea6c8c71028366b1`.
  `opening-candidate-v1.mp4` is the wrong generation and is superseded.
- Trim at the natural end of the line, allow no more than a two-frame breath,
  then start `escvofinal.mp3` at its existing frame zero. Do not overlap voices.
- Match the stopped video into `trump-escalator-freeze-v1.jpg`; hold it beneath
  the opening narration with a restrained centred push from about 100% to 108%.
- The 26 scene timecodes remain VO-relative. Add the approved pre-roll trim to
  every master-timeline placement. Exact out-frame is still pending assembly.
- Full source metadata and edit instructions are in `opening-preroll-note.md`.
- The four-slot accident preview now cuts to recovered local media
  `source-media/generated/everyman-escalator-bridge-v1.mp4` for “An escalator
  looks like a staircase.” Its audio is muted. On “bicycle chain,” match the
  visible step edges into the canonical Remotion side cutaway. The 10.042-second
  source hash is recorded in `scene-map-v1.md`.

### 2026-09-21 first-act Terra packet

- `work/hidden-systems-ep-02/first-act-terra-execution-packet.md` is the bounded
  implementation authority for the next task.
- Route it to `gpt-5.6-terra` at medium reasoning in the saved project's **local**
  environment. Do not use a worktree because the locked VO and generated source
  media are intentionally local-only and ignored by Git.
- Scope ends after word alignment, the isolated `EscalatorFirstActReview`
  composition, six key stills, the H.264 review render and verification. It does
  not include later incidents, the ghost system or the full master.
- The packet includes exact source hashes, deterministic staging requirements,
  the four-slot animation, Everyman bridge, mechanism-reveal brief, commands,
  review criteria and stop conditions.

### 2026-09-22 · Episode 02 first-act review render

- **Runtime:** requested Terra / medium; actual runtime selection is not exposed
  to the task. The bounded scope stopped here.
- **Timing authority:** fresh ASR evidence is at
  `work/hidden-systems-ep-02/timing-v2/vo/{words-asr,captions-asr}.json` and
  `work/hidden-systems-ep-02/timing-v2/preroll/{words-asr,captions-asr}.json`.
  `first-act-cues.json` records a 24-fps, 76-frame pre-roll: the approved source
  says “This is the best escalator, believe me.” through 3.16 seconds.
- **Sources/staging:** `sync-episode-02-first-act.ps1` verifies and stages the
  approved pre-roll (`6a191...366b1`), bridge (`2b3fd...3ea`), and VO
  (`7ed85...4bde`) under ignored `public/episode-02/first-act/`.
- **Composition/output:** `EscalatorFirstActReview`, 1920×1080 at 24 fps,
  duration 1,895 frames (78.96 s); H.264 review render:
  `work/hidden-systems-ep-02/assembly-review/ep02-first-act-v1-review.mp4`.
  Six full-resolution stills are in `assembly-review/first-act-v1-stills/`.
- **Checks:** source hashes, fresh ASR and phrase trim passed; deterministic
  staging passed; `npm run lint` and `npm run build` passed; H.264 render and
  six still renders passed. Frame inspection found no black opening frame,
  four fitting slot labels, the muted Everyman bridge, and a legible return run
  and protection stack. Remaining review judgement: assess the intentional
  frozen opening’s 100→108% push and the sparse mechanism labels at playback.

### 2026-09-22 · First-act targeted verification corrections

- The opening `CAMERAMAN → SAFETY SENSOR` callout now uses house ink on a
  paper-light card with a teal rule; it remains at the same sparse placement.
- The canonical mechanism asset is now rendered with Remotion `Img`, preserving
  its SVG vectors instead of rasterizing through `CanvasImage`. The canonical
  source asset was not modified.
- Re-ran `npm run lint`, `npm run build`, the H.264 review render, and all six
  full-resolution stills. All passed; the refreshed freeze and mechanism stills
  were visually inspected for contrast and crisp vector linework.

### 2026-09-22 · Owner opening redo and first-act v2 review

- Current review file: `work/hidden-systems-ep-02/assembly-review/ep02-first-act-v2-final-review.mp4` (1,895 frames, 79.02 s, 1920×1080, 24 fps, H.264/AAC). This is a first-act review only, not the full episode. The earlier `ep02-first-act-v2-review.mp4` has a blank tail and is superseded.
- Owner source: `source-media/generated/opening-redo-owner-v2.mp4`, SHA-256 `34ecc47d43c1c1557d1b8219effe8fb105201156f27bd9f0adc464a24e383603`. It includes the generated boast plus the factual VO through “The machine read it as danger.” Its 589 composition frames replace the former pre-roll/freeze assembly. The locked VO resumes at source frame 513 on “It stopped, as it was designed to.” Fresh opening ASR is in `timing-v2/opening-redo/`; frame cues are in `timing-v2/first-act-cues.json`.
- The opening MP4 timed out in Remotion's video-frame extractor. Local FFmpeg extraction produced 24-fps JPEG frames and the original soundtrack as WAV; `sync-episode-02-first-act.ps1` verifies/stages 589 frames and the WAV under ignored `public/episode-02/first-act/`. No new generated media or paid model call was needed.
- Creative revision: retimed opening graphic cards; four empty bright rounded incident slots are present from the first beat and fill upward with large city/year type; `4 ACCIDENTS | 4 PROTECTIONS` is the single dramatic title; the recovered Everyman bridge plays as video; the enlarged side cutaway traces the chain, return run and protection locations; the first act lands on `HONG KONG · MARCH 2017`.
- Checks: hash-verified staging, `npm run lint`, `npm run build`, a 16-frame opening smoke render, visual inspection of 13 distributed review stills, targeted end-card still, and completed final H.264 render. Final file metadata and final frame were checked. Owner review is next; no later incident scenes were changed.
