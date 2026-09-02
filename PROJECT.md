# Midnight Everyman / Hidden Systems

**Internal project codename:** Midnight Everyman

**Launch content territory:** Hidden Systems

**Public channel name:** undecided

This is the canonical entry point for the channel strategy and the production
system. Midnight Everyman names the internal project and its editorial
personality; it does not require the public YouTube channel to use that name.

## Objective

Build a faceless, revenue-oriented YouTube channel that can eventually publish
one polished video in approximately eight owner-hours. The launch product is a
5–8 minute horizontal explainer about a familiar engineered mechanism that
protects people when something fails.

The project is still a production and market test. Nothing has been published.

## Working thesis

> Purpose-built visuals, disciplined subject selection and a sustainable cadence
> may produce a stronger floor than daily explainers assembled from stock
> material. Those factors co-vary in every measured channel, so competitor
> research cannot isolate them. A timed pilot is the appropriate next test.

This is a reasoned bet, not a forecast. We hold four reproducible long-form
channel samples and no verified Shorts comparison. Cadence, voice choice,
failure framing and steady-state production time remain unmeasured.

## Product definition

| | Decision |
|---|---|
| Format | 16:9, 1920 × 1080, 24 fps |
| Runtime | 5–8 minutes |
| Structure | One familiar object, one opaque mechanism, six narrative beats |
| Presentation | Narrator-led diagrams, state changes, comparisons and decision trees |
| Character | Everyman appears for reaction, emphasis, scale and editorial personality |
| Voice | Accurate and concise with dry, restrained humor |
| Cadence | Undecided until the pilot is timed |

## Three hard gates

A subject becomes production-ready only when it is:

1. **Touched** — the viewer has personally used, stood in or depended on it.
2. **Opaque** — a reasonable viewer cannot sketch the mechanism roughly.
3. **Packageable** — a selected rung-three title, thumbnail moment and opening
   visual exist.

A documented incident is not a gate. Case strength, evidence state and
mechanism relevance determine priority and narrative treatment. Literal source
provenance is required before a case is described as verified.

## Production architecture

Use Remotion as a systems-explainer engine. Diagrams and information motion are
the primary screen language. The Observer replacement-cel library remains
canonical, but character performance cannot become the production critical path.

- Static cels by default
- Two-to-four-pose sequences for limited actions
- Generated performance only as an exceptional, non-blocking treatment
- Native HTML/SVG/CSS for continuous graphics
- Bounded effects only when they mark information or state change
- Final voice-over is the timing authority
- Production imports only from paired assets in `assets-canon/`

## Start here

1. Read [`docs/06-handoff/current-state.md`](docs/06-handoff/current-state.md).
2. Read [`docs/06-handoff/decision-record.md`](docs/06-handoff/decision-record.md).
3. Read [`docs/01-product/channel-thesis.md`](docs/01-product/channel-thesis.md).
4. Read [`docs/01-product/format.md`](docs/01-product/format.md).
5. Read [`docs/01-product/subject-selection.md`](docs/01-product/subject-selection.md).
6. Read [`docs/01-product/packaging.md`](docs/01-product/packaging.md).
7. Read [`research/sources.md`](research/sources.md) before using competitor data.
8. Read [`docs/05-experiments/next-experiment.md`](docs/05-experiments/next-experiment.md).

## Canonical implementation

- Preferred proof composition: `WrongFuelSystemsPilotFx`
- Active proof source: `src/systems-pilot-01/`
- Verified proof render: `reference/systems-pilot-01/wrong-fuel-systems-pilot-fx-v2.mp4`
- Character registry: `src/library/observer/cels.ts`
- Approved character assets: `public/characters/observer/`
- Canonical object library: `assets-canon/`
- Raw object intake: `assets-source/`
- Candidate pool: `content/candidates.csv`
- Competitor evidence: `research/`

## Superseded directions

- “What happens if you use the wrong X” is retained as R&D history and a
  possible future swing format; it is not the launch premise.
- Vertical Shorts-first is superseded. Shorts may be cut from completed
  long-form assets but are not the primary product.
- The 200-subject pre-launch requirement is withdrawn.
- Documented incidents are a prioritization field, not an eligibility gate.
- The 75,000-view Deconstructed result is a reference benchmark, not a target.

## Immediate milestone

1. Source-check the lift-governor case and mechanism claims.
2. Produce complete packages for the lift governor, aircraft oxygen-mask
   generator and airbag sensor.
3. Select the strongest package.
4. Build one complete 5–8 minute episode and record owner time by phase.
5. Use the result to decide cadence and identify the reusable component delta.
