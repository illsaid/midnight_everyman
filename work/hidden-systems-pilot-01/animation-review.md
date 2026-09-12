# Animation review — approved Remotion scenes

Measured 2026-09-10 against the three rendered scene clips:
`four-parts-v2-1.mp4`, `activation-fx-v2-1.mp4`, `HG-07-v1-1.mp4`.

Method: per-frame mean absolute luma delta at 160×90, then re-measured at 960×540
across the longest holds to distinguish *frozen* from *slow*.

---

## The finding

| Clip | Frames | Static frames (<0.35 delta) | Longest hold |
|---|---|---|---|
| four-parts | 505 (21.0s) | **93%** | 3.79s |
| activation | 712 (29.7s) | **90%** | **8.67s** |
| two-heads | 337 (14.0s) | **99%** | **8.54s** |

Re-measured at 960×540 across those holds:

| Hold | Pixels changing per frame | Pixels changed end-to-end |
|---|---|---|
| activation f146–354 (8.7s) | 0.72% | 8.1% |
| two-heads f131–336 (8.5s) | 0.50% | 7.7% |
| four-parts f124–215 (3.8s) | 0.09% | **1.4%** |

**This is two different problems, not one.**

### 1. Under-populated (activation, two-heads)

The motion is real — the bulb genuinely fills, the liquid genuinely rises — but it
happens in **under 1% of the frame per frame**, and roughly 92% of the canvas does not
move at all for eight and a half seconds. The brass frame, the deflector, the pipe, the
rules, the type: all completely fixed.

That reads as *a still illustration with one animated inset*, not as a shot.

The type compounds it. Across frames 150–350 of the activation scene — **ten seconds** —
the headline is "Nowhere to go." and the subhead is "The liquid presses against the
glass." Neither changes. Ten seconds is a very long time to look at the same two lines.

### 2. Frozen (four-parts f124–215)

1.4% of pixels differ between the first and last frame of a 3.8-second span. The only
thing that changes is a hairline pointer extending. That is a dead hold, not slow motion.

### Not a defect

The one hard pop in the activation scene — f396, 6× the median delta — is the bulb
shattering. That spike is the point of the film. Leave it.

---

## Root cause is a rule, not a bug

`docs/02-creative/diagram-layer.md` sets **max static = 720 frames (30 seconds)**.

Every hold above is comfortably inside that. Nothing was built wrong; the standard
permits it. This was flagged as too permissive when the diagram layer was written and
this is the evidence.

---

## Fixes, ordered by value per hour

**1. Change the max-static rule to 96 frames (4s).** One line in `diagram-layer.md`.
Everything below follows from it.

**2. Add ambient stage motion.** The single highest-leverage change and the cheapest.
One continuous, almost-imperceptible transform on the whole SVG group per component —
scale 1.000 → 1.018 across a movement, or a 6–10px drift. Costs one `interpolate()` per
scene. It is the difference between a slide and a held shot, and every explainer that
reads as *filmed* rather than *presented* does it.

**3. Break the long type holds.** The subhead should advance through two or three states
during a ten-second beat, or the headline should. Cheap, and it re-hooks the viewer at
exactly the point where attention drifts.

**4. Give the static furniture secondary motion.** The brass body, deflector and pipe
never move. A 1–2px sympathetic shift as the bulb stresses, or a slow specular highlight
travelling across the brass, keeps 90% of the frame alive for very little work.

**5. Fix four-parts f124–215 specifically.** It needs an actual change of state, not a
pointer growing.

---

## The `claude-video` skill — assessment

`github.com/bradautomates/claude-video`, 16.9k stars, actively maintained. Built on
yt-dlp + ffmpeg + Whisper (Groq or OpenAI).

**It is a video-*watching* skill, not a video-*making* skill.** It downloads a video,
extracts deduplicated frames, pulls captions or transcribes, and hands both to Claude so
Claude can answer questions about content it cannot natively see.

| | |
|---|---|
| Would it have helped with *this* review? | Marginally. It automates the frame extraction done here by hand, and would make render review repeatable rather than bespoke. |
| Will it improve the animation? | **No.** Nothing in it generates, critiques or measures motion. |
| Is the transcription half useful here? | No — the render clips have no speech and the VO text is already owned. |
| Do we already have the capability? | Yes. ffmpeg is on both machines. |

**Verdict: optional convenience, not an answer to the question being asked.**

**But there is a better use for it than self-review.** Pointed at competitors it becomes
genuinely valuable: it would allow direct analysis of how Deconstructed actually paces a
mechanism sequence — cut rhythm, how long they hold a diagram, where they put motion —
instead of inferring from titles and view counts. That is a real gap in the research so
far, and it is the argument for installing it.

**The already-installed `remotion:remotion-markup` skill** is closer to the actual
problem but only at API level: its `effects.md`, `transitions.md` and `timing.md`
references are worth reading when implementing fixes 2–4. It will not diagnose *what* to
animate; it documents *how*.
