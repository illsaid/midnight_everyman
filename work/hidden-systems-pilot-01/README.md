# Hidden Systems Pilot 01 — Production Index

## Completed pilot reproduction index

- Voice-over: `audio/sprinkvo2.mp3`
- Spoken script: `script-v4-vo-v3.txt`
- Timing and asset manifest: `cues-v2.csv`
- Human-readable production plan: `shooting-script-v2.md`
- Deterministic builder: `tools/build_v2.py`
- Candidate style-lock package: `reference-lock/README.md`

This directory preserves the planning, timing, provenance and build inputs for
the completed sprinkler pilot. Its early v2 plan kept 93 editorial cue changes
and proposed 12 generated units. Production ultimately used 11 generated source
units plus deterministic Remotion scenes and produced a complete 6,738-frame
`SprinklerPilotMaster` review master. The former placeholder and acquisition
instructions below are historical, not current work.

Latest verified local review master:
`assembly-review/sprinkler-assembly-v7-structural.mp4` — 6,738 frames,
1920×1080 at 24 fps with AAC narration. Remaining owner decisions are restrained
sound effects, the visible Pipe-scene year marker, the publication package and
publication itself.

Assembly source: `src/sprinkler-pilot/` from the repository root.
For reproduction, after editing `cues-v2.csv`, run
`scripts/sync-sprinkler-assembly.ps1` to refresh the generated cue module and
stage approved source media in `public/`. Run
`npx remotion render SprinklerPilotMaster` for the clean master. Source footage
is referenced directly and is not automatically promoted into the canonical
reusable object library.

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
The narration and cue text are unchanged. The aligned timing was subsequently
reviewed and carried through the complete v7 structural master.
