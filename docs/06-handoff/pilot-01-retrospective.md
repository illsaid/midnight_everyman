# Pilot 01 retrospective — sprinkler systems

**Closeout date:** 12 September 2026

**Review master:** `sprinkler-assembly-v7-structural.mp4`

**Runtime:** 280.811 seconds, 6,738 frames, 1920×1080 at 24 fps

**Status:** Suitable for pilot sound design and owner publication decision. The
Pipe-scene year marker and closing approval remain explicit pre-publication
decisions.

## What the pilot proved

1. A narrator-led hybrid can sustain a five-minute systems story. Generated
   footage is strongest for atmosphere, people and organic physical motion;
   Remotion is strongest for causal diagrams, comparisons, labels and exact
   timing.
2. Locked narration can be converted into a reliable edit spine. Word-aligned
   cue starts, rounded to the 24 fps grid and normally leading the spoken word by
   three frames, corrected the early timing drift.
3. A manifest-driven assembly works. Source approval, scene approval and master
   integration remain separate states rather than being inferred from filenames.
4. Bounded review renders reduce rework. Rendering one scene, checking its
   narrative frames and obtaining owner approval was faster and safer than
   repeatedly rendering the full film.
5. The established visual language can absorb generated footage without losing
   identity when the start frame, palette, framing and focal point are explicit.

## What the pilot did not prove

- Audience demand, click-through rate, retention or revenue
- A sustainable publishing cadence
- The eight-owner-hour production target
- The value of the unapproved global texture/line-boil treatment

The build mixed research, system design, asset discovery and first-time tooling.
Owner hands-on time was not recorded consistently, so it is not a steady-state
cost benchmark. Episode 02 must measure marginal production time by phase.

## Expensive mistakes not to repeat

| Failure | Cost | Default next time |
|---|---|---|
| Planning dozens of separate generated clips | Too many assets and approvals | Consolidate into a small number of reusable source units after the narration is locked |
| Building timing from estimated prose length | Scene changes landed behind narration | Generate word timestamps from the final VO before detailed assembly |
| Making the picture numerically literal | Three hundred tiny heads became unreadable texture | Show fewer large, legible objects and imply continuation beyond frame |
| Designing type independently of action | Repeated overlaps, clipping and low contrast | Assign a text-safe region and an action region in every scene specification |
| Generic opacity fades and static holds | Long passages felt like a slideshow | Give each cue one visible state change, camera move or travelling front |
| Generated motion prompts without a concrete action | Paid clips behaved like still images | Specify subject action, environmental response and camera behavior; otherwise use the still |
| Heuristic cropping | Important details wandered out of frame | Record explicit focal points and anchor geometry |
| Full renders before scene approval | Long waits exposed local defects late | Render bounded clips until every changed scene is approved |
| Repeated bespoke fixes | Corrections stayed trapped inside one component | Promote recurring layout, ratio, callout and comparison patterns into reusable primitives |
| No owner-time log | The one-day thesis remains untested | Start the phase timer before any Episode 02 work |

## Production defaults for Episode 02

1. Select and package the subject before scripting.
2. Lock script and final VO before detailed visual construction.
3. Generate word timestamps and the cue manifest immediately.
4. Divide the story into movements, then assign one dominant visual action per
   cue.
5. Reuse the existing scene vocabulary before creating anything bespoke:
   myth interruption, field-to-one reveal, mechanism cutaway, local heat front,
   activation, categorical colour scale, human judgement, ratio comparison,
   independent-system field and quiet macro close.
6. Batch all genuinely missing image/video anchors in one acquisition pass.
7. Keep generated video exceptional. If a still plus Remotion camera treatment
   communicates the beat, use the still.
8. Render and approve changed scenes individually. Produce one master after the
   placement manifest is complete.
9. Review the master once without sound for visual collisions, then audio-first
   for timing and comprehension.
10. Record new reusable patterns and the actual time spent by phase.

## One-day validation

The target remains eight owner-hours, using the phase budget in
`docs/04-production/production-workflow.md`. Episode 02 should record:

| Phase | Owner time | Machine/wait time | Corrections | New bespoke assets |
|---|---:|---:|---:|---:|
| Research and packaging |  |  |  |  |
| Script and voice-over |  |  |  |  |
| Visual planning |  |  |  |  |
| Asset generation |  |  |  |  |
| Remotion assembly |  |  |  |  |
| QA and package |  |  |  |  |
| **Total** |  |  |  |  |

If the episode requires more than four novel generated source units or more than
two bespoke scene systems, rescope before production. If one scene needs more
than two corrective renders for the same class of defect, repair the reusable
pattern rather than continuing local magic-number adjustments.

## Durable evidence

- `work/hidden-systems-pilot-01/production-manifest.json` — placement and approval truth
- `work/hidden-systems-pilot-01/cues-v2.csv` — editorial cue structure
- `work/hidden-systems-pilot-01/cue-timing-aligned.json` — word-aligned timing
- `docs/05-experiments/experiment-log.md` — detailed experiments and corrections
- `docs/04-production/remotion-workflow-notes.md` — implementation lessons
- `docs/06-handoff/current-state.md` — restart state and outstanding decisions
- `coordination/PROTOCOL.md` — multi-agent ownership rules
- `coordination/HANDOFF.md` — append-only cross-agent work log
