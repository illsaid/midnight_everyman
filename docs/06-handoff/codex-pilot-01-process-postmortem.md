# Codex process post-mortem — Pilot 01

**Project:** Midnight Everyman / Hidden Systems

**Film:** Fire-sprinkler pilot

**Closeout:** 12 September 2026

This is my assessment of how we produced the pilot, where the process worked,
where I created or tolerated avoidable work, and what I would change for the
next film. It complements the shorter project-level retrospective rather than
replacing it.

## Executive assessment

We finished with a coherent 4:40 pilot, an identifiable visual language, a
manifest-driven Remotion assembly and a useful library of production patterns.
The outcome is solid. The process was not yet economical.

The central inefficiency was not rendering time or model choice. It was that we
were designing the production system while making the film. We repeatedly
discovered rules only after a scene violated them: lock timing to the real VO,
separate text from the action field, make repeated objects legible rather than
literal, budget continuous motion, use generated video only when something
meaningful must move, and approve scenes before rendering the master.

Those discoveries are now assets. Episode 02 should test whether we can reuse
them instead of rediscovering them.

## What we did

### 1. Consolidated the project

We kept Midnight Everyman as the production and editorial root and absorbed the
Hidden Systems research, subject-selection logic and packaging discipline into
it. This avoided two competing sources of truth while preserving Hidden Systems
as the content territory.

### 2. Chose and wrote the pilot

The sprinkler story emerged from a simple dramatic contradiction: the familiar
movie version is wrong, while the real mechanism is smaller, more local and more
interesting. The script used dry humor, a causal mechanism and the final image
of glass holding back a river.

The VO was revised, recorded and eventually treated as locked authority. That
decision made the rest of the edit deterministic.

### 3. Designed a hybrid visual plan

The early breakdown was too granular, with 88–93 visual cues behaving almost
like separate commissions. We consolidated generated footage into reusable
source units and assigned exact mechanism explanation, labels, comparisons and
state changes to Remotion.

We generated or selected style-locked first frames, then acquired a limited set
of moving clips through Martini/FLUX and Grok. Some beats used stills because the
generated motion added little.

### 4. Built a timed assembly

The first timing pass relied too heavily on estimated prose duration. When the
visual changes lagged the narrator, we transcribed the real recording locally,
aligned the cue starts to words and moved the cuts three frames ahead of the
spoken cue. That became the reliable edit spine.

The production manifest separated assets, approval states, scenes and
placements. Generated TypeScript made the manifest executable rather than
leaving the shooting script as advisory prose.

### 5. Rebuilt scenes through owner review

We worked through the unfinished and weak sections one at a time. Each scene was
rendered independently, inspected and revised against concrete visual feedback:

- timing ahead of or behind the narrator
- text colliding with action or leaving the frame
- insufficient contrast
- generated objects that were not recognizable
- static passages with no meaningful screen change
- primitive or overly literal diagrams
- transitions that drew attention to the edit rather than the idea

The most important late rebuilds were the four-part mechanism, water-ratio
comparison and independent-head field. These changed structure rather than
merely decorating static scenes.

### 6. Integrated and verified the master

The approved scenes were integrated into one 6,738-frame master. We verified
codec, frame count, resolution, frame rate and audio, then sampled 35
chronological frames with additional coverage around the rebuilt scenes and
their boundaries.

The final texture/line-boil prototype remained separate because it had not been
approved for production. That was the correct boundary: an interesting test is
not automatically part of the film.

## What worked well

### The human review was specific

The strongest revisions came from concrete observations rather than abstract
scores: the bubble was too hard to see, the bin was not recognizable, the
10–20× label was too large, the firefighters faced the wrong direction, the
glass clipped at the top, or the scene changed before the narrator reached the
phrase. Those notes were actionable and usually revealed a reusable rule.

### We preserved approval boundaries

Source footage approval, scene approval and master approval were kept distinct.
We also retained rollback copies before large structural changes. This prevented
experiments from silently replacing accepted work.

### We found the correct division of labor

Generated video was useful for atmosphere, people, fire, smoke and physical
presence. Remotion was useful for mechanism truth, typography, counters,
comparisons and cue-locked state change. Neither medium had to carry the entire
film.

### The manifest became genuine infrastructure

Once the assembly was data-driven, replacing a source or changing approval state
no longer required rewriting timeline logic. Tests caught missing coverage,
overlaps, invalid source ranges and unapproved replacements.

### Bounded rendering reduced risk

The clip-by-clip phase was much more efficient than the early full-assembly
cycle. We could correct one defect class, rerender seconds rather than minutes,
and obtain an explicit approval before moving on.

## What I should have done better

### 1. Challenge literal visual requirements earlier

I accepted the idea that “the other three hundred” should appear as exactly 300
heads. At viewing size they became texture, not evidence. A dozen readable heads
running beyond the frame communicated abundance more clearly.

I should have asked what the image needed to prove, then selected the simplest
visual form that proved it.

### 2. Lock and align the VO before detailed scene work

The first timing method made later correction inevitable. Word alignment should
have happened immediately after the final VO arrived. Every scene should have
been built against frame-accurate cue boundaries from the start.

### 3. Establish the text/action layout contract before coding

Several scenes placed large narration-derived text over the same region used by
the mechanism or footage. We fixed each collision locally, but the recurrence
showed that the scene system lacked a basic contract.

Every scene should begin with named text-safe and action-safe rectangles. Type
may leave its rectangle only as an intentional full-frame beat.

### 4. Measure motion structure before polishing effects

We discussed paper, noise, halftone and line boil while parts of the film still
contained multi-second static holds. Surface texture cannot repair structural
inactivity. A simple frame-delta audit earlier would have directed attention to
M03, M05, M10 and M11 before styling experiments.

### 5. Create reusable scene primitives sooner

We built many scene-specific components before extracting shared patterns. That
made familiar corrections—callout placement, comparison ratios, camera drift,
safe headings, counters and field reveals—repeat as magic-number edits.

The next film should start from a small template library and only create a new
primitive when the story genuinely requires one.

### 6. Put a hard budget on generated motion

Some generated clips produced only flickering lights or slight plant movement.
Those were not necessarily bad, but they were poor uses of a moving-generation
step. A still with a controlled Remotion push would have been cheaper and more
editable.

Every video-generation request should state the indispensable action. If there
is no indispensable action, generate or use a still.

### 7. Formalize repository and agent coordination before parallel work

Codex and Claude were able to contribute without losing work, but this was due
partly to luck and manual awareness. We had overlapping edits, stale status
documents and the possibility of duplicate scene implementations.

Claims, append-only handoffs, bounded commits and separate worktrees should have
existed before a second writing agent touched the repository.

### 8. Record owner time

We recorded some machine render times but not consistent owner hands-on time.
That means the pilot cannot answer the commercial question it was meant to help
answer: whether one polished episode can eventually fit inside one working day.

This was the largest measurement failure in the exercise.

## Episode 02 operating model

### Gate A — package before production

Do not begin the script until the following are recorded:

- logical title promise
- thumbnail emotion and literal image
- opening visual proof
- viewer question
- mechanism payoff
- source confidence

### Gate B — lock the edit spine

Before visual construction:

1. Approve the script.
2. Record the final VO.
3. Generate word timestamps.
4. Divide the episode into movements and cue-level actions.
5. Compile the first production manifest.

### Gate C — enforce an asset budget

- No more than four novel generated moving source units without rescoping.
- No more than two new bespoke scene systems without rescoping.
- Prefer existing Everyman poses and approved visual anchors.
- Use still-plus-camera treatment when motion is ornamental.
- Batch all approved generation prompts in one acquisition pass.

### Gate D — build with named primitives

The starting library should include:

- claim/stamp interruption
- text-safe two-column mechanism card
- one-to-many field reveal
- local travelling-front diagram
- exploded-parts cutaway
- categorical scale
- before/after or ratio comparison
- independent-object field
- quiet closing macro

Each primitive should expose semantic parameters—headline, focal object, stage
scale, text region, action region and cue boundaries—rather than requiring
component-specific coordinate edits.

### Gate E — review cheaply

1. Render six representative frames per changed scene.
2. Inspect entry, main action, text maximum, transition and exit.
3. Render the short scene with VO.
4. Obtain owner approval.
5. Do not render the master until every changed placement is approved.
6. Review the master visually without sound, then audio-first.

### Gate F — measure the day

Record owner time, machine time, generation wait, correction count and bespoke
asset count separately. Stop the clock only for genuine unattended waits. Do not
use token usage or render duration as a substitute for human production cost.

The existing eight-hour phase budget is the hypothesis. Episode 02 is the first
valid measurement.

## Automation worth building

The next useful automation is small and deterministic:

1. One preflight command that regenerates manifests and status, checks local
   media, runs lint/tests and identifies stale generated files.
2. A scene-review command that exports the representative frames and short clip
   from one movement.
3. Layout assertions for required text and action safe zones.
4. A generated handoff summary containing changed paths, checks and current
   approval states.
5. A phase-time log initialized automatically when an episode folder is created.

I would not automate topic judgment, final visual approval or publication. Those
are the parts where the owner supplied the most valuable information.

## Definition of a successful next film

Episode 02 succeeds operationally if it:

- uses the same channel promise and visual identity
- reuses most of the existing production vocabulary
- requires no more than the agreed novel-asset budget
- reaches a complete review master without timing or text-collision rework in
  the full-render stage
- records reliable owner time by phase
- produces a clear list of reusable additions rather than another collection of
  isolated scene fixes

The goal is not to make the second film look cheaper. It is to make the same
level of editorial and visual judgment cheaper to execute.
