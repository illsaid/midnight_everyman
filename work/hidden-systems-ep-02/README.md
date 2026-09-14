# Hidden Systems Episode 02 — Production Index

## Locked timing authority

- Voice-over: `audio/escalator-vo-v1.mp3` (local only)
- Remotion staging copy: `public/voiceover/episode-02/escalator-vo-v1.mp3`
- Voice-over lock record: `vo-lock.json`
- Spoken script: `script-v3-vo-v3.txt`
- Episode time log: `time-log.csv`
- Editable cue authority: `cues.csv`
- Transcript verification: `transcript-verification.md`
- Raw timing evidence: `words-asr.json`
- Remotion-compatible raw ASR captions: `captions-asr.json`
- Derived alignment report: `cue-alignment-report.json`
- Production manifest: `production-manifest.json`
- Scene and asset plan: `visual-plan.md`
- Generated-media rhythm and briefs: `generated-media-plan.md`

The owner supplied and authorized progression with the final narration on
2026-09-14. Its measured duration is 305.057959 seconds. At 24 fps the episode
timeline requires 7,322 frames before any separately approved tail or end-screen
extension. Both local MP3 copies must retain the SHA-256 recorded in
`vo-lock.json`.

The narration file is intentionally ignored by Git under the repository media
policy. Git tracks this index, its checksum and the future cue/production data;
the binary remains on the canonical production PC.

## Current status

Topic, package, script, narration, cue alignment and visual planning are
complete. The editable cue authority contains 74 visual actions across 12
narrative movements, with continuous coverage of the 7,322-frame timeline. The
production plan consolidates them into eight reviewable scenes, two bespoke
systems and four generated-media units. No composition or production asset has
been built yet. The next step is the shared grouped escalator SVG.

`cues.csv` is the sole editable timing and visual-intent authority. The JSON
alignment files are evidence or derived views and must not be edited as competing
timelines.
