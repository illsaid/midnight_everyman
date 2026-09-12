# Hidden Systems Pilot 01 — Production Index

## Current authority

- Voice-over: `audio/sprinkvo2.mp3`
- Spoken script: `script-v4-vo-v3.txt`
- Timing and asset manifest: `cues-v2.csv`
- Human-readable production plan: `shooting-script-v2.md`
- Deterministic builder: `tools/build_v2.py`
- Candidate style-lock package: `reference-lock/README.md`

The v2 plan keeps 93 editorial cue changes but consolidates generated footage
into 12 reusable Higgsfield source units. Higgsfield supplies atmosphere,
pathos and human behavior; Remotion supplies exact mechanisms, causal state,
labels and comparisons.

HG-01, HG-09 and HG-12 v2 were approved and downloaded on 4 Sep 2026.
The next gate is reviewing them against the locked VO in `SprinklerPilotAssembly`.
The other nine generated sources and unbuilt mechanism graphics use labeled
placeholders. Review this assembly before commissioning the remaining sources.

Assembly source: `src/sprinkler-pilot/` from the repository root.
After editing `cues-v2.csv`, run `scripts/sync-sprinkler-assembly.ps1` to refresh
the generated cue module and stage approved source media in `public/`.
Run `npx remotion render SprinklerPilotAssembly` to export the review composition.
This review uses source footage directly and does not promote it into the
canonical reusable object library.

## Superseded planning artifacts

- `shot-list.md` — earlier 88-cue architecture and conservative 5+2 generated
  asset allocation. Retained as design history.
- `cues.csv` and `shooting-script.md` — first 93-cue shooting breakdown in
  which every H cue was treated as a separate generated clip. Retained as the
  v1 timing source and audit trail.

Do not delete or silently rewrite the superseded files. Use the v2 pair for
asset generation and editorial assembly.

## Timing status

The VO duration is locked at 280.764 seconds. After timing drift was identified
in assembly v1, all 93 cue starts were matched to word timestamps transcribed
from the actual recording using local faster-whisper base.en. Cuts lead the
corresponding word by three frames (125 ms), rounded to the 24 fps grid.

`cue-timing-aligned.json` overrides the historical word-length estimates during
`tools/build_v2.py`. Raw recognition evidence is `tools/words-asr.json`.
The narration and cue text are unchanged. ASR timing is not sample-exact;
review the corrected `sprinkler-assembly-v2.mp4` for final editorial nudges.
