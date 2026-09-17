# Midnight Everyman — Shorts track brief

Standalone context for a fresh session. Channel: Hidden Systems / Midnight Everyman,
`UCIym1H6m6YnObjER19Sc8Sg`. Repo `github.com/illsaid/midnight_everyman`, local at
`C:\Users\dicku\Videos\midnight-everyman`. Remotion 4.0.509, 24fps, 1920x1080.

## Why there is a Shorts track at all

Episode 01 (fire sprinklers, 4:44, published 2026-09-13) has ~22 views. The YouTube
Analytics pull shows the binding constraint is **distribution, not retention**:

- Traffic sources are **YouTube search and the channel page only**. Zero suggested, zero
  browse/home feed. 310 thumbnail impressions in four days, ~9 clicks.
- Retention is fine: 2:37 AVD / 55.6% average percentage viewed, though search traffic
  alone watched 37.3% — the headline is inflated by insider views.
- The retention curve is gated behind 100 views. The Analytics API respects the same gate.

Long-form from a 0-subscriber channel gets no feed distribution. Shorts are fed rather than
searched. **A Short is the only browse distribution available to this channel right now.**

## The demand evidence, and its limit

"Why do escalators have brushes" is enormous and current in Shorts:
Jack Knows 15M · Teach 3M · CjnnFacts 3M · Danno Cal Drawings 1.1M · Zappytrends 889K ·
EXPLORICA 680K in seven days.

The same question in long-form **dies**. Seven faceless AI explainers published in 2026:
66 · 152 · 193 · 539 · 1,246 · 3,394 · 7,270 views — including one from a 1.03M-subscriber
channel and one from a 44.8K-subscriber channel. Jack Knows has 65K subs, a 15M-view Short on
this question, and **zero long-form videos**. Danno Cal Drawings has 4.18M subs and posts
"a short every other day".

Conclusion: the demand does not transfer. The Short is the correct format for this question;
a seven-minute version is padding. Keyword data agrees — "escalator brushes" ~8,850/month and
**down 62%** over 30 days; "escalator safety" ~6,545/month and **up 85%**.

**Therefore: Episode 02 is not justified by this Shorts demand, and must not be titled around
the brushes question.** Ep 02 stands on a different footing — Jared Owen's "How does an
Escalator work?" at 19.7M proves long-form demand for the machine, and Ep 02's differentiator
is an actual incident (Hong Kong, 18 injured, drive chain snapped, detector did not fire,
cause traced to one nut). None of the seven competitors has a story; they all have a fact.

## What the Short is

**It already exists as written, voiced and animated.** It is cues 29–35 of the Episode 02
locked voiceover, which is the whole of movement M05 minus its first cue.

- **Absolute frames 2702–3582** = 880 frames = **36.67s at 24fps**
- Audio: trim the locked VO (`public/voiceover/episode-02/escalator-vo-v1.mp3`) from
  **112.583s to 149.250s**. The VO is locked — 305.057959s / 7,322 frames, SHA-256 581488…,
  −16.55 LUFS, −0.44 dBTP. Do not re-cut it.
- Source: `src/escalator-ep02/SkirtGapScene.tsx`, scene-local frames **67–947**
  (`SKIRT_GAP_FROM = 2635`). Already built at 16:9 and rendered:
  `work/hidden-systems-ep-02/assembly-review/m05-skirt-gap-v1.mp4`.

| cue | abs frames | len | VO |
|---|---|---|---|
| 29 | 2702–2985 | 283 | "Between each moving step and the fixed skirt panel is a narrow clearance. Only millimetres — but rubber, loose fabric and small fingers do not remain conveniently rigid." |
| 30 | 2985–3083 | 98 | "So there are brushes. That stiff strip at ankle height." |
| 31 | 3083–3139 | 56 | "It is not cleaning your shoes." |
| 32 | 3139–3210 | 71 | "It is touching them BEFORE the machinery does." |
| 33 | 3210–3303 | 93 | "The brush warns you and nudges your foot toward the centre." |
| 34 | 3303–3469 | 166 | "On machines fitted with skirt-obstruction devices, something entering the gap can interrupt the safety circuit too." |
| 35 | 3469–3582 | 113 | **"The brush is the warning. The switch is the apology."** |

Cue 35 is the ending. Do not trim it.

## The job

**Restage to 9:16 (1080x1920). This is not a crop.** Every shot in `SkirtGapScene.tsx` is
framed for 16:9 using the `look(px, py, scale)` camera helper in
`src/escalator-ep02/grammar.tsx`. Vertical needs new `look()` values per shot, and several
compositions need rethinking — the step/gap/panel assembly is horizontal by nature and reads
badly squeezed. The switch beat (cue 34) and the split-frame ending (cue 35) both need
relayout for a tall frame.

Probably also: **one new 2–3 second VO hook line at the top**, generated in ElevenLabs to
match the existing voice, because cue 29 opens on an explanation rather than a question.
That is the only new audio permitted.

## Constraints

- Build to `docs/02-creative/motion-grammar-v2.md`: a move lands inside 6–12 frames then stops
  dead; 3–4 shots per cue with hard cuts; parts drawn as objects (cast shadow, varied stroke
  weight, hatched faces, visible fasteners). Use the shared vocabulary in `grammar.tsx`.
- Colour discipline (`docs/02-creative/diagram-layer.md`): **teal always means a protection
  worked; coral always means breakage, failed protection or consequence.** In this block the
  brush is a passive warning and never goes teal. The skirt-obstruction switch is a protective
  trip that works — cue 34 is the first earned teal in the episode. Coral marks the gap as a
  hazard only.
- House palette: paper `#EEE5CF`, paperLight `#F7F0DE`, cutaway `#C9C1AC`, ink `#242622`,
  inkMid `#4A4A42`, inkMute `#7C7566`, coral `#BD4E3D`, mustard `#D5A84C`, teal `#356F70`,
  olive `#78975D`. Fonts Jost + Courier Prime.
- **Do not adopt the Shorts field's visual grammar.** Every competing thumbnail is stock footage
  with one yellow word and a red arrow. A hand-drawn midcentury paper diagram is the only
  non-stock frame in that feed — that is the differentiator. Explainer *timing*, house *drawing*.
- **One original Short per episode.** Churning near-identical variants is exactly what YouTube's
  "inauthentic content" policy targets. One is a test; twenty is a risk.

## Publishing

Ship it as soon as it is built. **Do not hold it for the episode.** Shorts descriptions and
pinned comments are editable forever and Shorts have months-long tails, so the link to Ep 02
can be added retroactively with almost no loss. Meanwhile the channel is dormant, a second
upload restarts YouTube's evaluation of it, and a 37-second Short is the fastest route to the
100 views that unlock the retention curve.

Success criteria, set before publishing:
1. **Binary — does it get feed impressions at all?** Ep 01 got none. That is the real question.
2. **Scale** — the field does 20K–15M. Above ~1K means distribution opened; under 200 means it
   did not.
3. **Retention** — if it clears 100 views, the curve unlocks. First one this channel will have.

One Short is a test, not a strategy. Do not read a single result as a verdict on the format.

## Open items

- M04 (cues 21–27, frames 1845–2635) is still planned; `local-entrapment` is marked `partial`.
- M01 (`incident-reversal`, approved) is in the pre-v2 grammar and will not match.
- M02 cues 07/10/11/12 still need the v2 retrofit.
- D-034's budget (~12 owner-hours, ≤12 scene systems) was written for the old grammar.
