# Episode 02 — Transcript and timing verification

## Authorities

- Text authority: `script-v3-vo-v3.txt`
- Timing evidence: `words-asr.json`
- Editable cue authority: `cues.csv`
- Raw Remotion-compatible ASR captions: `captions-asr.json`
- Derived alignment report: `cue-alignment-report.json`

The locked narration contains 790 normalized script tokens. Faster Whisper
matched 775 directly (98.10%). The remaining differences are recognition errors
such as `belt and braces` → `felt embraces`, `break` → `brake`, and several
spurious words at segment boundaries. No confirmed script divergence was found.
The approved script therefore remains the text authority; ASR supplies timing
only and its raw caption text must not be presented as final copy.

## Cue result

- 74 timed visual actions
- 12 narrative movements
- 7,322 frames at 24 fps
- Default visual lead: 3 frames / 125 ms
- No cue shorter than one second
- Continuous coverage from frame 0 through frame 7,322

| Movement | Frames | Time | Purpose |
|---|---:|---:|---|
| M01 | 0–459 | 0:00–0:19 | Impossible staircase and Hong Kong consequence |
| M02 | 459–1095 | 0:19–0:46 | Two failures, nut open loop and four-part plan |
| M03 | 1095–1845 | 0:46–1:17 | Hidden step loop and track geometry |
| M04 | 1845–2635 | 1:17–1:50 | Comb plate and landing switch |
| M05 | 2635–3582 | 1:50–2:29 | Skirt gap, brush and obstruction device |
| M06 | 3582–4387 | 2:29–3:03 | Sagging or missing step |
| M07 | 4387–4989 | 3:03–3:28 | Gravity, normal brake and disconnected load |
| M08 | 4989–5484 | 3:28–3:49 | Independent protective layers |
| M09 | 5484–6042 | 3:49–4:12 | Hong Kong chain failure and reversal |
| M10 | 6042–6615 | 4:12–4:36 | Grease, locked spring and nut payoff |
| M11 | 6615–7181 | 4:36–4:59 | Invisible-protection recap |
| M12 | 7181–7322 | 4:59–5:05 | Abrupt close |

## Editing rule

Edit narrative timing and visual intent only in `cues.csv`. The ASR and
alignment JSON files are evidence and derived views. Cue entry frames use the
three-frame lead by default, but individual cues may be changed after bounded
audio-first review; record any exception in the cue row rather than applying a
second global offset.
