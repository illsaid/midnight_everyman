# Episode 02 First Act — Terra Execution Packet

## Fresh-task starter

Start a new Codex task with these settings:

- Project: `midnight-everyman`
- Environment: **local** (not a worktree; required local-only media is ignored by Git)
- Model: `gpt-5.6-terra`
- Reasoning: `medium`

Paste this prompt:

> Work in the canonical checkout `C:\Users\dicku\Videos\midnight-everyman`. Read and execute `work/hidden-systems-ep-02/first-act-terra-execution-packet.md`. Execute only the first-act review scope. Do not redesign the approved structure, expand into later incidents, or replace approved media. Stop after producing the review render, key stills, timing authority, and checks, then report artifact paths and any unresolved defects.

## Deliverable

Build an isolated, reviewable Remotion composition for the new Episode 02 first act, from the generated Donald Trump pre-roll through the first line of the Hong Kong section.

Completion means all of the following exist:

1. a word-aligned timing authority derived from the locked audio;
2. a working `EscalatorFirstActReview` composition at 1920×1080, 24 fps;
3. a full-resolution H.264 review render;
4. six key review stills;
5. passing lint/typecheck and bundle checks;
6. an updated Episode 02 entry in `coordination/HANDOFF.md`.

Do not build the remaining incidents, ghost figures, later autopsies, captions, sound design, or final master.

## Non-negotiable boundaries

- Preserve all unrelated and existing user/agent changes. The worktree is expected to be dirty.
- Do not delete or overwrite the superseded Episode 02 timing files. Put all new alignment evidence under `work/hidden-systems-ep-02/timing-v2/`.
- Do not use the old `cues.csv`, root-level `words-asr.json`, root-level `captions-asr.json`, `vo-lock.json`, or existing `production-manifest.json` placements as current timing authority.
- Do not repurpose the old `EscalatorEpisode02Assembly` timeline. Add a separate first-act review composition.
- Do not regenerate, restyle, crop-repair, or replace the approved media.
- The opening generated line has no disclosure label. This is an explicit owner decision.
- No CSS transitions or CSS keyframe animation. All motion must derive from `useCurrentFrame()`, `interpolate()`, springs, or existing Remotion helpers.
- Use `Video` and `Audio` from `@remotion/media`, `CanvasImage` for the freeze frame, and `staticFile()` for staged media.
- Keep all review binaries local/ignored. Only code, timing evidence, scripts, and documentation belong in Git.

## Current authority

Read these files before implementation, in this order:

1. `work/hidden-systems-ep-02/ep02-disaster-reframe.md`
2. `work/hidden-systems-ep-02/incident-evidence-2026-09-19.md`
3. `work/hidden-systems-ep-02/script-v7-owner-clean.md`
4. `work/hidden-systems-ep-02/vo-final-lock.json`
5. `work/hidden-systems-ep-02/scene-map-v1.md`
6. `work/hidden-systems-ep-02/opening-preroll-note.md`
7. `work/hidden-systems-ep-02/escalator-system-reference-note.md`
8. `docs/02-creative/visual-language.md`
9. `docs/02-creative/diagram-layer.md`
10. `src/escalator-ep02/grammar.tsx`

The approved scene structure in `scene-map-v1.md` wins over older Episode 02 plans.

## Locked inputs

| Use | Path | Required handling |
| --- | --- | --- |
| Final narration | `work/hidden-systems-ep-02/audio/escvofinal.mp3` | Main VO begins only after the generated pre-roll line ends. Duration 334.81142857142856 s / 8,036 frames at 24 fps. SHA-256 `7ed85d0ff4a00600f39b9cf3ed62fc3948c1c40f17022a6fff921f6c5f5a4bde`. |
| Generated pre-roll | `work/hidden-systems-ep-02/source-media/generated/trump-escalator-opening-approved-v2.mp4` | Use only through “This is the best escalator, believe me.” Keep its source audio. SHA-256 `6a191666d237bca12f3f3e3c314bb4e514589b1de09ee3d1ea6c8c71028366b1`. The former `opening-candidate-v1` file is the wrong generation and is superseded. |
| Opening freeze | `work/hidden-systems-ep-02/source-media/generated/trump-escalator-freeze-v1.jpg` | Use the exact approved frame. Slow centered push only; no corrective crop gymnastics. |
| Everyman bridge | `work/hidden-systems-ep-02/source-media/generated/everyman-escalator-bridge-v1.mp4` | Mute source audio. Use under “An escalator looks like a staircase, but it is more like a bicycle chain.” SHA-256 `2b3fd1c2e99f4cfc8f1ebf93d4ba5f0b5ed3457b4e4320bf0f6374cfdaddc3ea`. |
| Mechanism master | `assets-canon/vertical-transport/escalator-mechanism-v1.svg` | Approved neutral grouped mechanism. Do not edit the canonical SVG. |
| Mechanism metadata | `assets-canon/vertical-transport/escalator-mechanism-v1.meta.json` | Respect state-colour rules and asset roles. |
| Reference only | `work/hidden-systems-ep-02/source-media/reference/escalator-system-overview-unknown-source.png` | Topology/composition reference only. It is not technical authority and must not appear in the render. |

## Phase A — establish exact timing

Use the existing local alignment environment and cached model. Do not install or download a transcription dependency.

Create these directories:

- `work/hidden-systems-ep-02/timing-v2/vo/`
- `work/hidden-systems-ep-02/timing-v2/preroll/`

Run:

```powershell
.\work\hidden-systems-pilot-01\tools\.venv-align\Scripts\python.exe `
  .\scripts\transcribe-episode-vo.py `
  .\work\hidden-systems-ep-02\audio\escvofinal.mp3 `
  .\work\hidden-systems-ep-02\timing-v2\vo `
  --audio-label work/hidden-systems-ep-02/audio/escvofinal.mp3 `
  --model-cache .\work\hidden-systems-pilot-01\tools\.models `
  --initial-prompt "Donald Trump, United Nations, Hong Kong, Langham Place, Rome, Repubblica, Moscow, Aviamotornaya, Jingzhou."

.\work\hidden-systems-pilot-01\tools\.venv-align\Scripts\python.exe `
  .\scripts\transcribe-episode-vo.py `
  .\work\hidden-systems-ep-02\source-media\generated\trump-escalator-opening-approved-v2.mp4 `
  .\work\hidden-systems-ep-02\timing-v2\preroll `
  --audio-label work/hidden-systems-ep-02/source-media/generated/trump-escalator-opening-approved-v2.mp4 `
  --model-cache .\work\hidden-systems-pilot-01\tools\.models `
  --initial-prompt "This is the best escalator, believe me."
```

Review the transcript around every required phrase. Create `work/hidden-systems-ep-02/timing-v2/first-act-cues.json` with:

- `fps: 24`;
- both source hashes and durations;
- `preRollFrames = ceil(end time of the word “me” × 24) + 0–2 frames`, choosing the shortest clean breath;
- exact main-VO phrase starts and ends for:
  - narration start;
  - `cameraman` / safety sensor explanation;
  - `Trump called it sabotage`;
  - `It stopped, as it was designed to`;
  - `Here are four`;
  - `Hong Kong`;
  - `Rome`;
  - `Moscow`;
  - `Jingzhou`;
  - `Four real accidents`;
  - `An escalator looks like a staircase`;
  - `bicycle chain`;
  - `Strip away`;
  - `Detectors watch`;
  - `Each layer is designed to catch`;
  - `Hong Kong. March 2017.`
- absolute composition frames after adding `preRollFrames` to main-VO frames;
- a three-frame visual lead for graphic reveals, but **not** for audio playback;
- `firstActEndFrame`, set 1–2 seconds after the start of `Hong Kong. March 2017.` so the review cut has a clean tail.

If ASR mishears a proper noun, correct only the phrase label/mapping; retain the raw ASR files unchanged as evidence. Use `work/hidden-systems-pilot-01/tools/align_cue_words.py` only as a pattern if useful; do not overwrite Pilot 01 files.

## Phase B — deterministic local media staging

Add `scripts/sync-episode-02-first-act.ps1`.

The script must:

1. resolve and validate the four locked local sources;
2. verify the three supplied SHA-256 hashes before copying;
3. copy them to `public/episode-02/first-act/` with stable names:
   - `opening.mp4`
   - `opening-freeze.jpg`
   - `everyman-bridge.mp4`
   - `voiceover.mp3`
4. fail clearly if any source is missing or a hash differs;
5. avoid deleting unrelated files.

The staged binaries remain ignored/local. Do not add them to Git. `npm run build` already runs the canonical-asset sync for `public/assets-canon/`.

## Phase C — isolated review composition

Create a focused component tree under:

```text
src/escalator-ep02/first-act/
  FirstActReview.tsx
  FirstActTiming.ts
  IncidentSlotsScene.tsx
  EscalatorCutawayScene.tsx
```

Small additional helper files are allowed only if they reduce duplication.

Register the new composition in `src/escalator-ep02/EscalatorEpisode02Assembly.tsx`:

- id: `EscalatorFirstActReview`
- width: 1920
- height: 1080
- fps: 24
- duration: `firstActEndFrame`

Do not change the duration or placements of the old compositions.

### Timeline and visual behavior

#### P00 — generated pre-roll

- Play `opening.mp4` from source frame 0 through `preRollFrames`.
- Preserve its source audio.
- End immediately after “me,” with no more than a two-frame breath.
- Match-cut into the approved freeze frame. A short opacity blend is acceptable only if it hides a genuine first-frame mismatch; otherwise use a direct cut.

#### S01–S03 — opening freeze and safety reframe

- Main VO begins exactly at composition frame `preRollFrames`.
- Use `CanvasImage` for `opening-freeze.jpg`.
- Apply the owner-approved intentional exception to the usual fast-move grammar: a restrained, centered 100%→108% push across the opening narration.
- Keep the duplicate Trump-like figure visible; do not crop around it.
- Overlay only sparse cue-locked callouts needed to show that a cameraman triggered a sensor and that the stopped machine interpreted danger.
- On “It stopped, as it was designed to,” show a decisive teal protection/trip state. Do not use coral here; this is successful protection.

#### S04–S09 — four incident slots

- Four equal vertical slots with narrow paper gutters.
- All four appear blank on `Here are four`.
- Reveal each with an upward wipe lasting 8–10 frames, cue-locked to its city:
  1. `HONG KONG · 2017`
  2. `ROME · 2018`
  3. `MOSCOW · 1982`
  4. `JINGZHOU · 2015`
- Use text only: no flags, icons, victim figures, accident miniatures, or footage.
- The active slot is full intensity; earlier slots settle to roughly 70%.
- Use four muted location tints that do not impersonate the semantic state colours. Suggested values:
  - Hong Kong `#B6A47B`
  - Rome `#829B9B`
  - Moscow `#8B7B86`
  - Jingzhou `#96A07A`
- Keep ink text at strong contrast and fit labels inside safe margins at all frames.
- On `Four real accidents`, lock all four, then land `4 ACCIDENTS` followed by `4 PROTECTIONS`.
- Hard-cut out. Do not dissolve this structure into the next shot.

#### S10A — Everyman bridge

- Play `everyman-bridge.mp4`, muted, under “An escalator looks like a staircase, but it is more like a bicycle chain.”
- Preserve the approved framing and source motion.
- Optional Remotion overlays are limited to a simple staircase/bracket cue and a chain-direction arrow; do not cover Everyman’s face or body.
- Begin the transition on the words `bicycle chain`, using the visible diagonal step edges as the match geometry.

#### S10B — Remotion mechanism reveal

- Move into the canonical mechanism view; do not use the unknown-source reference in the render.
- The first read must be simple: moving steps are one continuous loop, with as many returning underneath as are visible above.
- Reveal in this order, timed to narration:
  1. exterior stair impression;
  2. shell peels/masks away;
  3. upper visible steps;
  4. lower upside-down return run;
  5. sprockets and continuous step chain;
  6. detectors, switches, and brakes one category at a time.
- Category is communicated by form. Semantic colour is applied only to the active state:
  - neutral = paper/ink/reference/cutaway;
  - mustard = moving/active mechanism;
  - teal = protection operating normally;
  - coral = limit, defect, trip, or failed protection only when the narration reaches it.
- Do not recolour the whole mechanism at once.
- Keep a single dominant focal point. At most one explanatory label and one arrow may be active simultaneously.
- For this proof, it is acceptable to show the approved SVG as a staged image and use masks plus Remotion overlays rather than turning every named SVG group into React. Do not duplicate the entire SVG by hand.
- The reveal should make `Each layer is designed to catch the failure of the layer before it` visually legible before the first Hong Kong line begins.

## Motion and typography acceptance rules

- Use the existing `grammar.tsx` palette, stage, easing, and typography wherever practical.
- Most moves should land in 6–12 frames and hold. The slow 100→108 opening push is the one approved exception.
- Do not add constant decorative motion. Movement must reveal hierarchy, state, or causality.
- No text may clip, bleed outside containers, collide with action, or rely on a low-contrast colour difference.
- Keep essential text and faces clear of player chrome/safe-area risks.
- No review furniture, file names, cue numbers, or production labels inside the rendered content.

## Phase D — checks and review artifacts

Run, in this order:

```powershell
.\scripts\sync-episode-02-first-act.ps1
npm run lint
npm run build
npx remotion render EscalatorFirstActReview work/hidden-systems-ep-02/assembly-review/ep02-first-act-v1-review.mp4 --codec h264 --crf 20
```

Render six full-resolution stills into:

`work/hidden-systems-ep-02/assembly-review/first-act-v1-stills/`

Required moments:

1. last frame of generated pre-roll / transition edge;
2. middle of the freeze-frame push;
3. all four incident slots locked;
4. Everyman bridge midpoint;
5. continuous-loop/return-run reveal;
6. detectors/switches/brakes protection stack.

Inspect the render for:

- no black or duplicate frames at the opening handoff;
- no overlap between generated pre-roll audio and final VO;
- muted Everyman source audio;
- city wipes landing on the spoken city, not before it;
- all four labels fitting throughout their wipes;
- `bicycle chain` motivating the visual transition;
- continuous chain and return run understandable without technical expertise;
- no semantic misuse of mustard, teal, or coral;
- no text/action collisions;
- no unexplained still hold longer than two seconds, aside from the deliberately slow opening push with active narration.

If any check fails, fix the defect and rerun only the affected check/render. Do not expand scope.

## Handoff and stop condition

Append a concise entry to `coordination/HANDOFF.md` stating:

- actual model and effort if observable;
- exact timing evidence paths;
- source/staged hashes;
- composition id, duration, and output path;
- checks run and their results;
- any remaining visual uncertainty.

Then stop. Do not start the Hong Kong ghost/autopsy build or render the full episode.

The owner’s review questions are:

1. Does boast → freeze → narrator feel clean?
2. Are the four slots clear, quick, and legible?
3. Does the Everyman shot provide enough visual relief?
4. Does “bicycle chain” naturally motivate the cutaway?
5. Is the mechanism understandable before any incident explanation begins?
