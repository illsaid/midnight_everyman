# Midnight Everyman / Hidden Systems

Canonical repository for a faceless YouTube channel and its reusable Remotion
production system.

- **Internal project codename:** Midnight Everyman
- **Launch content territory:** Hidden Systems
- **Public channel name:** undecided
- **Channel promise:** engineered systems that catch ordinary people when
  something fails
- **Format:** 16:9, 1920 × 1080, 24 fps, 5–8 minutes

Midnight Everyman supplies the production engine, Observer character, dry voice,
visual identity, asset canon and verified experiments. Hidden Systems supplies
the editorial thesis, subject rules, packaging system, candidate pool and
competitor evidence.

Start with [`PROJECT.md`](PROJECT.md), then
[`docs/06-handoff/current-state.md`](docs/06-handoff/current-state.md).

## Current state

- Existing 63-second wrong-fuel systems proof: verified R&D evidence
- Existing 24-pose Observer library and Remotion primitives: retained
- Hidden Systems research: integrated under `research/`
- Candidate pool: `content/candidates.csv`
- Fully packaged pilot candidates: 0 of 3 required
- Full 5–8 minute timed pilot: not built

The next deliverable is the lift-governor pilot, but production does not begin
until its case claims are source-checked and three candidate packages exist.

## Commands

```console
npm install
npm run lint
npm run build
npx remotion render WrongFuelSystemsPilotFx out/wrong-fuel-validation.mp4
```
