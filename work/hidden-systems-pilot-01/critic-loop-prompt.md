# Critic-loop prompt — review and rewrite

Assessment of the proposed builder/critic loop, and a rewritten version.
**Nothing in the project was changed to produce this.**

---

## What the original gets right

- **A separate critic agent.** A fresh context that has not seen the code is a genuinely
  better judge than the agent that wrote it. Keep this.
- **Bounded rounds.** Unbounded self-improvement loops burn budget and drift.
- **A ranked issue list rather than a flat one.** Ranking forces triage.
- **A numeric gate.** The idea is right; the implementation needs work.

---

## Eight problems, ordered by how much damage they would do here

### 1. A generic critic will destroy the house style

The most serious one. "Production ready professional explainer video" in a vision model's
training distribution means gradients, depth, soft shadows, lots of detail, kinetic type.
Our style is deliberately flat, limited-palette, UPA / Halas & Batchelor, six line weights
with fixed meanings.

A critic told to make it look professional will push toward generic motion graphics, and
the builder will comply. Three rounds of that and the channel's only defensible
differentiator is gone.

**Fix:** hand the critic the house rules as *constraints it may not recommend violating*,
and state explicitly that flatness, the restricted palette and the absence of gradients
are intentional.

### 2. "Random frames" cannot see the actual defect

The measured problem is temporal: 90–99% of frames are static, with holds of 8.5 seconds.
**Single stills are blind to that.** A critic sampling random frames would score the
stills at 6/10 for cosmetic reasons and never mention the thing that is actually wrong.

Random sampling is also badly misallocated on this timeline: 50% of it is unbuilt slug and
generated plate, so most random draws would score cards and footage rather than animation.

**Fix:** sample deterministically — every cue boundary ±2 frames, plus the midpoint of
every hold longer than 96 frames. Feed the critic **frame pairs or short strips**, not
single frames, so temporal defects are visible at all.

### 3. One scalar will not converge

A single 0–10 collapses "the type is 4px off" and "the mechanism is wrong" into one
number. The builder cannot tell which to fix; the score jitters between rounds for reasons
neither agent can attribute. Loops optimising one fuzzy scalar plateau rather than
converge.

**Fix:** score per dimension and **gate on the minimum, not the mean**:

| Dimension | What it covers |
|---|---|
| House style | Palette, type, line weight, flatness |
| Layout | Alignment, margins, optical balance, safe zones |
| Motion | Does anything move; are holds inside the max-static rule |
| Correctness | Does the frame show what its cue says it shows |
| Legibility | Readable at 25% scale |

### 4. "Correctness" without ground truth becomes hallucination

A vision model scoring a sprinkler diagram will confidently invent errors about a
mechanism it does not know. This project has already had one incident of invented detail
reaching a document.

**Fix:** give the critic the **cue row** for every frame it scores — VO line, on-screen
text, description, frame range. Correctness then means "does this frame show what the cue
says," which is checkable. Anything outside that must be raised as a *question*, never
scored as a defect.

### 5. No reference means no stable calibration

Absolute quality scores from LLM judges drift run to run. Comparative judgements are
stable.

**Fix:** supply reference images — approved `four-parts-v2` frames, the House Style Bible
palette sheet, and a frame from a competitor at the target standard. Ask "does this meet or
beat the reference," not "is this professional."

### 6. The loop can ship a worse version than it started with

Round 3 could score below round 1 and still be what ships, because the loop keeps the
*last* version rather than the best.

**Fix:** keep the highest-scoring version. Stop early after two consecutive
non-improvements. Require the builder to state what it changed and why, so round 3 does not
silently undo round 1.

### 7. The debug overlay will eat a round

Every frame of the assembly render carries the review HUD — `SPRINKLER / ROUGH ASSEMBLY ·
M06 · CUE 44`, the timecode, the orange progress bar. A critic will correctly score that
as unprofessional, and the builder will spend a round fixing something that is a review
affordance and gets stripped at delivery.

**Fix:** render review clips with the HUD off, or tell the critic to ignore it explicitly.

### 8. No cost ceiling

Three rounds × a full-composition render × a critic pass over a 6738-frame timeline, on a
project where renders take minutes, is an unbounded spend for an unattributable result.

**Fix:** run it **per component** — `four-parts`, `activation`, `two-heads` — not on the
assembly. Smaller render, faster loop, and the result is attributable to one scene.

---

## Rewritten prompt

> **Task.** Improve the animation quality of the Remotion component `<SCENE>` in
> `src/sprinkler-pilot/`. Work on that one component only. Do not touch the assembly, the
> manifest, the cue data or the VO.
>
> **Loop.** Up to 3 rounds. Each round: builder edits → render the scene → critic scores →
> if the gate is not met, builder receives the ranked issues and goes again.
>
> **Render for review** with the debug HUD disabled.
>
> **Sampling — not random.** For each round, extract:
> - every cue boundary in the scene, at boundary−2 and boundary+2 frames
> - the midpoint of every span longer than 96 frames where mean inter-frame delta is
>   below 0.35
> - a 6-frame strip at 4-frame intervals across the two longest such spans
>
> Present frames to the critic **in pairs or strips with their frame numbers**, never as
> isolated stills. Temporal defects are the point.
>
> **Give the critic, every round:**
> - `docs/02-creative/diagram-layer.md` and the House Style Bible palette
> - the `cues-v2.csv` rows for the frames being scored
> - approved reference frames from `four-parts-v2-1.mp4`
>
> **Critic instructions.** Score 0–10 on each of: house style, layout, motion, correctness,
> legibility. Report the score for each and one sentence of justification.
>
> These are deliberate and must NOT be scored as faults or recommended against: flat
> colour with no gradients; the restricted paper/ink/teal/coral/mustard palette; a limited
> line-weight vocabulary; visible schematic labelling; the absence of photographic
> texture, depth-of-field and drop shadows.
>
> Judge correctness only against the supplied cue rows. If something looks wrong but is
> not covered by a cue, raise it as a question — do not score it.
>
> Judge motion from the strips: does anything change; what proportion of the frame is
> moving; is any hold longer than 96 frames.
>
> **Gate:** the *minimum* of the five scores must be ≥8. Not the mean.
>
> **Output:** the five scores, then the issues ranked by (dimension score, then impact),
> each naming a specific frame number and a specific fix.
>
> **Stop conditions.** Stop at 3 rounds; or when the gate is met; or after two consecutive
> rounds without improvement in the minimum score. **Keep the highest-scoring version, not
> the last one.** Each round, the builder states what it changed and why before editing.

---

## One thing the loop will not fix

The measured defect is that ~92% of the canvas does not move. That is a **design**
decision — what to put on screen — not a code quality issue. A critic loop will polish
alignment and typography, which is worth having, but the fix for under-population is
deciding that the brass body, the deflector and the stage itself should be alive. That
decision comes first; the loop tightens what follows.
