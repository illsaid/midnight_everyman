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
Agents also read [`coordination/claims.json`](coordination/claims.json) and the
latest entry in [`coordination/HANDOFF.md`](coordination/HANDOFF.md) before editing.

## Current state

- Sprinkler pilot: complete clean v7 review master, pending sound design and owner publication
- Existing 63-second wrong-fuel systems proof: retained R&D evidence
- Existing 24-pose Observer library and Remotion primitives: retained
- Hidden Systems research: integrated under `research/`
- Candidate pool: `content/candidates.csv`
- Pilot 01 retrospective: `docs/06-handoff/pilot-01-retrospective.md`
- Large renders and working media: local-only by policy

The next production test is Episode 02 using the established scene vocabulary
and a phase-by-phase owner-time log. The eight-hour goal remains unproven until
that marginal build is measured.

## Commands

```console
npm install
npm run lint
npm run build
npx remotion render src/index.ts SprinklerPilotMaster out/sprinkler-review.mp4
```

Full sprinkler rendering also requires the local media described in
[`docs/04-production/repository-and-media-policy.md`](docs/04-production/repository-and-media-policy.md).
