# Episode 02 — motion prompts for the four approved anchors

Image-to-video, one unit at a time, anchor frame as the first frame.
Written model-agnostic — trim to whatever the tool accepts.

**Generate longer than you need and trim.** Cue spans are 8 s, 8 s, 10 s, 10 s;
most generators offer 5 s or 10 s. Take 10 s every time and cut into the cue.

**The standing rule, which shapes all four:** the model supplies people, cloth and
atmosphere. Remotion supplies mechanism and causal proof. So none of these
prompts asks the plate to *show the thing working or failing* — every one stops
just before the mechanism acts. That is also what keeps them generatable: crowds
falling and steps collapsing are exactly where AI video turns to soup.

---

## Shared negative prompt — paste into all four

```
photorealism, 3D render, CGI, live action, cinematic colour grading, lens flare,
bloom, depth of field changes, rack focus, dolly zoom, whip pan, camera shake,
handheld wobble, speed ramping, slow motion, text, signage, logos, brand marks,
numbers, watermarks, new people entering frame, characters changing clothing or
colour, morphing faces, warping hands, extra fingers, exposed machinery, cutaway
views, interior mechanism, sparks, smoke, fire, blood, injury, crowd falling,
bodies piling up
```

---

## G-01 — crowded escalator before reversal · cues 03–05 · 8 s

**Motion**
> Steady upward ride. The full queue of passengers moves up and out of frame
> together at a constant slow speed, hands resting on the moving handrail,
> small natural idle motion — a shoulder settling, a bag shifting, one head
> turning. At around six seconds the whole step band jolts once, briefly, and
> everyone's weight pitches very slightly forward; hands tighten on the rail.
> Hold there. The man in the teal jacket and orange trousers in the foreground
> keeps looking back up the escalator throughout, anxious.

**Camera** Locked off. No move at all.

**Ends on** The instant after the jolt. Everyone still upright, still holding.

**Do not** show the escalator reversing, anyone losing their footing, or anyone
falling. The reversal is Remotion's and the pile-up is never depicted.

---

## G-02 — loose lace approaching the landing · cues 21–22 · 8 s

**Motion**
> Macro, static framing. The ribbed step surface travels steadily toward the
> yellow comb plate at the top of frame, carrying the shoe with it. The loose
> black lace lifts slightly and swings forward, ahead of the shoe, so it is
> pointing toward the comb teeth as the step closes on them. The wearer shifts
> his weight once, heel lifting a little. The step keeps moving until the lace
> is close to the teeth.

**Camera** Locked off.

**Ends on** Lace almost at the comb. No contact.

**Do not** show the lace touching, catching in, or being drawn into the teeth.
That is the beat Remotion carries.

*Why the lace has to move forward:* on the anchor it trails behind the shoe,
away from the comb. As it stands the danger reads as receding.

---

## G-03 — rider approaching the soon-to-sag step · cues 36–38 · 10 s

**Motion**
> Slow steady descent on the escalator. The man in the teal jacket and orange
> trousers rides down, one hand on the handrail, coat and trouser fabric moving
> very slightly. Around halfway he looks down at the step under his feet, then
> braces his hand a little more firmly on the rail. The mall beyond him drifts
> past evenly.

**Camera** Very slow push in, no more than five percent over the ten seconds.
Nothing else.

**Ends on** Him looking down, steady, still riding.

**Do not** show the step sagging, tilting, breaking or moving out of line, and
do not have him stumble. The sag is a mechanism event and belongs to Remotion.

---

## G-04 — calm ordinary ride · cues 67–69 · 10 s · start and end frames supplied

**Motion**
> The man walks in from the left at an unhurried pace, crosses to the foot of
> the escalator, and steps on without looking down. Natural walk cycle, arms
> swinging lightly, coat moving. His trailing foot lifts over the comb plate and
> lands on the first step. The escalator carries him a short distance upward.
> Everything calm and ordinary.

**Camera** Locked off, or an almost imperceptible drift up as he rises.

**Ends on** Him standing on the moving step, rising, settled.

**Do not** have him hesitate, glance at the comb plate, or react to anything.
This is the closing beat — *"Tomorrow you will step onto an escalator without
looking down."* Any hint that he notices the machine kills the line.

Use the supplied start and end frames as first and last frame if the tool
supports it; the walk-on is the one unit where interpolation will behave.

---

## Running it

Per the approval rule: one unit at a time, and **two failed motion attempts then
stop and use the deterministic fallback.** A motion result is accepted for human
action and continuity only — never as evidence for the mechanism.

Most likely failure per unit, so you know early whether to burn the second
attempt:

| Unit | Watch for |
|---|---|
| G-01 | The crowd melting — faces and hands degrade fastest when many figures move together. Check the mid-distance passengers, not the foreground. |
| G-02 | The lace behaving like rope or rubber, or the ribbed step surface shimmering. |
| G-03 | Costume colour drifting across the ride, and the background shopfronts warping as they pass. |
| G-04 | The walk cycle — gait is where these models are weakest. Watch the feet meeting the floor. |

If a take is right except for a few frames at the end, trim rather than regenerate.
The cue spans are shorter than the generations.
