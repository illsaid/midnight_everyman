# Midnight Everyman

A faceless information-compression channel project built around a reusable 1950s-commercial-inspired replacement-cel animation system.

For the complete channel strategy, system architecture, decisions and restart handoff, begin with [`PROJECT.md`](PROJECT.md).

## Active composition

`MidnightMicroScene01` is a 15-second, three-beat alarm-safety scene using six complete replacement drawings:

- Alarm reaction
- Exact three-versus-four signal comparison
- Extinguisher delay, self-correction, exit and 911 call

Remotion swaps whole drawings and controls registration, translation, scale, backgrounds, props, typography, texture and timing. Character anatomy is never interpolated.

## Composition

`MidnightMicroScene01` is 360 frames at 24 fps, 1920 x 1080.

## Structure

- `src/micro-scene-01/` - active scene components
- `public/characters/observer/alarm/` - six transparent replacement-pose assets
- `work/micro-scene-01/extract_alarm_cels.py` - reproducible pose extraction
- `src/ReplacementCelTest.tsx` - prior two-cel proof
- `src/CharacterLab.tsx` - archived failed skeletal-rig experiment

## Commands

```console
npm install
npm run dev -- --no-open
npm run lint
```

Render a diagnostic still:

```console
npx remotion still MidnightMicroScene01 output.png --frame=135
```

The visual proof is complete at `reference/micro-scene-01/midnight-micro-scene-01-silent.mp4`. Voice-over and sound design are intentionally deferred to the next pass documented in `docs/05-experiments/next-experiment.md`.
