# Midnight Everyman

**Internal project codename:** Midnight Everyman  
**Working description:** A faceless information-compression channel and reusable limited-animation production system.

This is the canonical entry point for the channel-design and animation-system project. The codename identifies the project; it does not commit the eventual public YouTube channel to the same name.

## Objective

Build a faceless YouTube channel with strong revenue potential that can reach one polished video per week in approximately eight hours of production time. The creative format is information compression with human-interest subject selection, presented through a reusable midcentury-commercial animation language.

The project is not yet a channel launch. It is currently validating whether a distinctive animated format can be produced efficiently enough to support the business model.

## Current conclusion

Use Remotion as a native systems-explainer engine: diagrams, comparisons, state changes, decision trees, typography, timing, bounded effects, texture and rendering. The screen should explain the mechanism rather than simulate a cartoon set. Continuous surfaces stay native; shader effects are reserved for short transitions and impacts.

Everyman remains a reusable replacement-cel library, but his primary role is reaction, emphasis and human scale. Do not make routine shots depend on exact hand/object contact or scenic character animation. Generated character video remains an occasional exception, not a dependency.

The canonical voice is accurate and concise with dry, understated humor. Packaging uses a feed-first thumbnail system built around visual paradox, controlled comparison and editorial illustration, not default red-arrow/alarm-word clickbait. Three materially different concepts are tested through YouTube's native watch-time-share experiment.

## Start here

1. Read [Current state](docs/06-handoff/current-state.md).
2. Read [Decision record](docs/06-handoff/decision-record.md).
3. Read [Next experiment](docs/05-experiments/next-experiment.md).
4. Read [House Style Bible v2.2 Amendment](everyman_bible_v2/AMENDMENT-v2.2.md).
5. Inspect `src/library/observer/` and `public/characters/observer/library/`.
6. View the four catalog pages in `reference/pose-library-v1/`.

Before proposing a niche or pilot topic, read the subject-matter research and topic-selection framework.

## Project map

- [Channel thesis](docs/01-product/channel-thesis.md)
- [YouTube subject-matter research](docs/01-product/youtube-subject-research.md)
- [Topic selection framework](docs/01-product/topic-selection-framework.md)
- [Visual language](docs/02-creative/visual-language.md)
- [Thumbnail system v1](docs/02-creative/thumbnail-system-v1.md)
- [Character bible](docs/02-creative/character-bible.md)
- [System architecture](docs/03-system/architecture.md)
- [Graphics asset library](docs/03-system/graphics-asset-library.md)
- [House Style Bible v2.2 Amendment](everyman_bible_v2/AMENDMENT-v2.2.md)
- [Scene specification](docs/03-system/scene-specification.md)
- [Production workflow](docs/04-production/production-workflow.md)
- [Quality gates](docs/04-production/quality-gates.md)
- [Experiment log](docs/05-experiments/experiment-log.md)
- [Next experiment](docs/05-experiments/next-experiment.md)
- [Current handoff](docs/06-handoff/current-state.md)
- [Decision record](docs/06-handoff/decision-record.md)

## Canonical implementation

- Preferred proof composition: `WrongFuelSystemsPilotFx`
- Clean A/B baseline: `WrongFuelSystemsPilot`
- Active proof source: `src/systems-pilot-01/`
- Audio-aligned timing manifest: `work/systems-pilot-01/timing-manifest.json`
- Preferred verified pilot render: `reference/systems-pilot-01/wrong-fuel-systems-pilot-fx-v2.mp4`
- Clean baseline render: `reference/systems-pilot-01/wrong-fuel-systems-pilot-v1.mp4`
- Pose-review composition: `PoseLibraryCatalog`
- Character registry: `src/library/observer/cels.ts`
- Approved character assets: `public/characters/observer/alarm/`
- Candidate character assets: `public/characters/observer/library/`
- Raw object intake: `assets-source/`
- Canonical object library: `assets-canon/`
- Archived failed composition: `ArchivedSkeletalCharacterLab`
- Earlier cel-animation proof: `reference/micro-scene-01/midnight-micro-scene-01-silent.mp4`

## Immediate milestone

Build a second 45-75 second topic with the same systems-explainer primitives and no new character art. Record marginal research, design, assembly and render time to test whether this architecture can approach the eight-hour weekly ceiling.
