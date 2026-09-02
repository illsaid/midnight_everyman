# Current state handoff

**Project:** Midnight Everyman

## Status

The active pilot architecture is now Remotion-native systems explanation. The wrong-fuel narration was converted into seven audio-aligned graphic beats built from state changes, flow diagrams, comparison panels and a decision tree. The preferred FX master adds bounded transition and impact effects plus native information motion. The canonical editorial voice now includes restrained dry humor. Packaging uses a current, no-shout three-concept test: visual paradox, controlled comparison and editorial Everyman tableau. The completed 63-second render passed lint, diagnostic inspection, full-frame rendering and media verification.

All 24 approved Observer poses and both registered action packs remain canonical, but Everyman now serves primarily as a reaction and emphasis marker. The verified gas-station staging set remains useful evidence and may still supply exceptional scenic shots, but the `hold-nozzle` interaction is no longer on the production critical path. The next gate is a second topic using the same graphic vocabulary with marginal owner time recorded.

## Environment

- Remotion 4.0.509
- React 19.2.3
- TypeScript 5.9.3
- Remotion optional packages 4.0.509: effects, media, paths, shapes and transitions
- Main proof size: 1920 x 1080
- Frame rate: 24 fps
- Pose catalog composition: `PoseLibraryCatalog`, four pages at 72 frames each
- Action showcase composition: `ObserverActionPacks`, 144 frames / 6 seconds
- Clean baseline composition: `WrongFuelSystemsPilot`, 1518 frames / 63.25 seconds
- Preferred FX composition: `WrongFuelSystemsPilotFx`, 1518 frames / 63.25 seconds

## Active files

- `src/Composition.tsx` - composition registration
- `src/systems-pilot-01/` - seven audio-aligned systems-explainer scenes and shared primitives
- `src/systems-pilot-01/fx.tsx` - bounded shader effects, native continuous surface and reusable pulse primitives
- `docs/02-creative/thumbnail-system-v1.md` - feed-first thumbnail house rules and A/B/C protocol
- `work/thumbnail-research/references/` - inspected vidIQ reference thumbnails; research evidence, not house assets
- `src/systems-pilot-01/manifest.ts` - palette, audio source and scene timing
- `work/systems-pilot-01/timing-manifest.json` - human-readable scene boundaries
- `public/voiceover/pilot-01/wrong-fuel-systems-v1.mp3` - supplied final narration used by the master
- `src/library/observer/cels.ts` - semantic cel registry and measured registration metadata
- `src/library/observer/PoseLibraryCatalog.tsx` - four-page human review catalog
- `src/library/observer/actions.ts` - registered semantic action-pack metadata
- `src/library/observer/ObserverAction.tsx` - reusable deterministic action renderer
- `src/library/observer/ActionPackShowcase.tsx` - verified two-action composition
- `public/characters/observer/alarm/` - six approved transparent poses
- `public/characters/observer/library/` - eighteen approved transparent poses
- `work/pose-library-v1/pose-manifest.json` - source panel map and approval state
- `work/pose-library-v1/extraction-report.json` - measured extraction output
- `work/pose-library-v1/extract_pose_library.py` - reproducible extraction and overlap cleanup
- `docs/03-system/observer-pose-library-v1.md` - library specification
- `everyman_bible_v2/AMENDMENT-v2.2.md` - canonical cel-first production amendment
- `assets-source/` - categorized raw-asset intake; forbidden as a production import
- `assets-canon/` - approved normalized production objects
- `assets-canon/automotive/` - Pilot 01 background, sedan, pump and nozzle with metadata
- `src/pilot-01/` - raster placement and gas-station staging composition

## Preserved experiments

- `src/micro-scene-01/` - successful six-cel visual proof
- `src/performance-plate-01/` - completed scaffold for the abandoned-as-default generated-motion branch
- `reference/performance-plate-01/` - references, diagnostics and placeholder A/B render
- `src/CharacterLab.tsx` and `src/characters/Observer/` - rejected skeletal-rig evidence only

## Verified outputs

- `reference/systems-pilot-01/wrong-fuel-systems-pilot-fx-v2.mp4` - preferred verified FX master; 63.296 seconds with audio
- `reference/systems-pilot-01/fx-diagnostics/` - representative impact, transition, mechanism and native-surface checkpoints
- `reference/systems-pilot-01/wrong-fuel-systems-pilot-v1.mp4` - verified 63.296-second systems pilot with audio
- `reference/systems-pilot-01/diagnostics/` - fourteen representative frames plus corrected checkpoints
- `reference/pose-library-v1/catalog-01-existing.png` - six approved alarm poses
- `reference/pose-library-v1/catalog-02-information.png` - six approved information poses
- `reference/pose-library-v1/catalog-03-emotion.png` - six approved emotion poses
- `reference/pose-library-v1/catalog-04-physical.png` - six approved physical poses
- `reference/action-packs-v1/observer-action-packs-v2.mp4` - verified run-away and jump-for-joy showcase with corrected jump framing
- `reference/action-packs-v1/` - reaction, transition, movement, exit, peak and landing diagnostics
- `reference/pilot-01/gas-station-staging-v4.png` - corrected gas-station spatial staging proof; v2-v3 are diagnostic history
- `reference/micro-scene-01/midnight-micro-scene-01-silent.mp4` - 15-second visual proof
- `reference/replacement-cel-test.mp4` - five-second two-cel proof

## Commands

From the `midnight-everyman` directory:

```console
npm install
npm run lint
npm run dev -- --no-open
npx remotion still PoseLibraryCatalog catalog-information.png --frame=72
npx remotion render ObserverActionPacks observer-action-packs.mp4
npx remotion render MidnightMicroScene01 midnight-micro-scene-01.mp4
npx remotion render WrongFuelSystemsPilotFx reference/systems-pilot-01/wrong-fuel-systems-pilot-fx-v2.mp4
```

## Known issues

- The three new master sheets are coherent but not mathematically identical; minor head proportion and line-weight drift remains possible between pose families.
- `run-away` and `jump-for-joy` are deliberate non-looping actions, not walk/run cycles.
- The alarm scene has no final voice-over or sound design.
- The first full scene and pose-library build include R&D time and do not validate the eight-hour steady-state target.
- There is no generalized scene parser; this remains intentional until action-pack and pilot reuse are measured.
- Experiment 07 is a design and technical proof, not a publication fact-check of the automotive claims.
- The R&D build does not validate the eight-hour steady-state target; only the second-topic reuse benchmark can begin to do that.
- Exact hand/object interaction remains expensive and is excluded from the routine systems workflow.
- Persistent stacks of full-frame WebGL effects are not production-safe in this project. Use native HTML/SVG/CSS for continuous surfaces and reserve shader effects for short transitions or impacts.
- The user confirmed on 2026-08-14 that all three supplied graphics packages are licensed and canonical.

## Restart procedure

1. Read `PROJECT.md`.
2. Read this file and `decision-record.md`.
3. Read `everyman_bible_v2/AMENDMENT-v2.2.md`.
4. Read `docs/01-product/youtube-subject-research.md` before proposing subjects or niches.
5. Review the four images in `reference/pose-library-v1/` and the action showcase in `reference/action-packs-v1/`.
6. Run `npm run lint` to confirm the baseline.
7. Review `reference/systems-pilot-01/wrong-fuel-systems-pilot-fx-v2.mp4`, compare it with the clean v1 master and inspect `work/systems-pilot-01/timing-manifest.json`.
8. Select a different 45-75 second topic and build it from the existing systems primitives without new character art.
9. Record research, script, voiceover, manifest, graphic, assembly and correction time separately in `experiment-log.md`.

## Suggested fresh-session prompt

```text
Continue the Midnight Everyman project in this folder. Read PROJECT.md, AGENTS.md, everyman_bible_v2/AMENDMENT-v2.2.md, docs/01-product/youtube-subject-research.md, docs/06-handoff/current-state.md, docs/06-handoff/decision-record.md, and docs/05-experiments/next-experiment.md before acting. Preserve the human-interest information-compression thesis and Remotion-native systems-explainer architecture. Review `reference/systems-pilot-01/wrong-fuel-systems-pilot-fx-v2.mp4`, compare it with the clean v1 master, and inspect `src/systems-pilot-01/` and `work/systems-pilot-01/timing-manifest.json`. Then build a second 45-75 second topic with the same graphic and bounded-FX primitives, use Everyman only for reaction or emphasis, create no new character art unless essential, and record marginal owner time by phase.
```
