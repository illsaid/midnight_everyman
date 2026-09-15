# Shared handoff log

Read the latest entry before starting work. Append a new entry; never rewrite or
delete an earlier one. Keep each entry to the six fields below. Active file or
movement ownership lives in `claims.json`, not here.

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
