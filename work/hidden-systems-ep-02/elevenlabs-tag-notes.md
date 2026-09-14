# Episode 02 — ElevenLabs v3 tagging

Tagged script: `script-v3-vo-v3.txt` (owner's edit, 792 spoken words, **5:08** at
Pilot 01's measured 154 wpm). Checked against ElevenLabs documentation 14 Sep 2026.

## The one risk worth knowing before you generate

ElevenLabs' own FAQ carries the question **"Why is my audio tag being read aloud
instead of performed?"** — so an unrecognised tag can be *spoken* rather than
acted. That is the failure mode to watch for, and it is still unverified from
Pilot 01: we never confirmed whether its tags were performed or silently dropped.

**Generate the first 30 seconds alone before committing the full pass.** If you
hear the word "flatly" or "dryly" in the audio, the tag is not recognised for that
voice and every instance needs removing. Thirty seconds of credits to de-risk the
whole VO.

## Tag inventory — what is documented and what is not

| Tag | Uses | Documented by ElevenLabs? |
|---|---|---|
| `[short pause]` | 8 | **Yes** |
| `[long pause]` | 3 | **Yes** |
| `[thoughtful]` | 1 | **Yes** |
| `[dryly]` | 5 | No |
| `[flatly]` | 3 | No |
| `[softly]` | 1 | No |

The three undocumented tags are the ones that carry this narrator's entire
register, and there is no documented substitute that preserves it —
`[sarcastic]` is the wrong register and far too broad, `[whispers]` is too
extreme for `[softly]`. They are kept, for two reasons: Pilot 01 shipped with
exactly these tags and the performance was right, and the documentation presents
its list as examples rather than an exhaustive set.

**ElevenLabs also warns that tag effectiveness is voice-dependent** — "Some tags
work well with certain voices while others may not" — so the 30-second test is
specific to the voice you actually use, not transferable.

## What was added, and why it survives tag failure

v3 does **not** support SSML `<break>` tags. The documented pacing levers are
audio tags, **ellipses**, capitalisation and sentence structure. Only the last
three are guaranteed to work regardless of tag recognition, so the script now
leans on them:

**Ellipses at three dramatic hinges** — these add "pauses and weight" per the docs:

- "the device built to detect exactly that**...** failed as well"
- "break the connection between the drive and the steps**...** and that brake may be holding the motor"
- "the machine assigned to notice the break**...** could not move"

**One capitalisation** — "It is touching them **BEFORE** the machinery does."
Caps "increase emphasis" per the docs. Only one, deliberately; Pilot 01 used
about four across a similar length and more than that starts to shout.

**Eight `[short pause]` placements** on the one-word lines that carry the drop —
before "Then they come back down", "Upside down", "Barely", "It did not".

The design principle, given the tag risk: **the script should read dry with every
tag stripped out.** Your short-line structure already does most of that work —
"Faster." and "It did not." land on sentence length alone. The tags are an
improvement, not a dependency.

## Your figures — all four verified against the primary source

Checked against the EMSD technical investigation report itself (not press
coverage), 14 Sep 2026:

| Your line | Report |
|---|---|
| "About a hundred and twenty people are going up" | "conveying around 120 passengers upwards from 4/F to 8/F" ✓ |
| "Eighteen people are injured" | "18 of them suffered injuries… three were hospitalised" ✓ |
| Going up, then reversing | "originally running upwards… finally moved in reverse direction" ✓ |
| "It was not overloaded" | "there was no overloading of the escalator" ✓ |

My earlier caution about the injury count was wrong — press reports said 17, the
report says 18. **Your number is the correct one.** The case fields in
`candidates.csv` should be updated to cite the full PDF rather than the press
release, since the PDF is what carries these figures.

## Runtime

792 words → **5:08**. The edit came in 65 words under the previous draft while
adding the 120-passenger and 18-injured detail, so it is both tighter and more
specific. No cut needed to hit the format.

## Sources

- [Prompting Eleven v3](https://elevenlabs.io/docs/best-practices/prompting/eleven-v3)
- [Audio tags 101](https://elevenlabs.io/blog/v3-audiotags)
- [How do audio tags work with Eleven v3?](https://help.elevenlabs.io/hc/en-us/articles/35869142561297-How-do-audio-tags-work-with-Eleven-v3)
- [EMSD technical investigation report (PDF)](https://www.emsd.gov.hk/filemanager/en/content_794/Langham_Technical_Investigation_Report(Eng).pdf)
