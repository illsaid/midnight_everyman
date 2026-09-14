# Episode 02 — Scene systems and asset plan

## Decision

Build the 5:05 episode as eight reviewable scenes driven by one shared escalator
mechanism drawing. Four short cel-like generated units provide human-scale
resets; deterministic Remotion remains responsible for mechanical explanation.

This plan consumes both bespoke-system slots and all four available
generated-media units. A third bespoke system or fifth generated unit requires
an explicit rescope.

## Scene map

| Scene | Cues | Time | Dominant treatment | Reuse |
|---|---|---:|---|---|
| `incident-reversal` | 01–06 | 0:00–0:19 | G-01 incident plate with deterministic stop, reverse and evidence overlays | Pilot freeze/interruption typography; Observer escalation cels |
| `failure-map` | 07–13 | 0:19–0:46 | Native two-failure diagram, nut open loop and four-mode roadmap | `MechanismRecapScene`; `IndependenceScene` |
| `mechanism-reveal` | 14–20 | 0:46–1:17 | Persistent escalator cutaway; camera follows one step through the loop | `FourPartsScene`; `PipeScene` |
| `local-entrapment` | 21–35 | 1:17–2:29 | G-02 lace setup, then one exact landing/skirt macro with comb, brush and switches | `ActivationScene`; strikeout grammar |
| `step-integrity` | 36–42 | 2:29–3:03 | G-03 rider reaction, then the step continues toward the comb and detector | `TwoHeadsScene` local/system contrast |
| `runaway-protection` | 43–53 | 3:03–3:49 | Gravity/load diagram, drive disconnection and layered brakes | `ReplacementScene`; disconnected-path grammar |
| `case-reconstruction` | 54–66 | 3:49–4:36 | Reprise G-01, then reuse the mechanism for the chain break, jammed detector and nut | `ActivationScene` stress; causal checklist |
| `ordinary-close` | 67–74 | 4:36–5:05 | G-04 calm ride while hidden devices reveal and disappear | Existing Observer cels; Pilot quiet-close treatment |

The 72-second `local-entrapment` component is intentionally one system because
the landing, comb, skirt and brush occupy the same geometry. It is reviewed as
two bounded movement ranges, M04 and M05, so a defect does not force review of
the full component.

## Bespoke systems

### 1. Incident reversal

The opening requires actual organic crowd movement because the consequence is
the click promise. Commission one approximately 10-second generated source:
normal upward travel, a distinct stop, then accelerating reverse movement. The
remaining opening time is supplied by freezes, reframing, evidence labels and
the two-failure handoff.

Approve its first frame before motion generation. If two motion attempts fail,
stop spending generations and use the approved still with a deterministic
schematic reversal. Do not hide a third attempt inside ordinary production.

### 2. Escalator mechanism

Draw one named-group SVG containing the step loop, both tracks, sprockets, drive
chain, motor, brakes, comb plate, skirt, brush and safety devices. Every
mechanical scene changes camera position, emphasis and state against this same
object. Do not redraw a second escalator for the Hong Kong reconstruction.

The SVG and its metadata must be paired and approved in `assets-canon/` before
production code imports it.

## Generated-media budget

| Unit | Need | Length | Status | Fallback |
|---|---|---:|---|---|
| G-01 incident reversal | Crowd movement makes the consequence credible and visually distinct from the diagrams | ~8 s | Missing | Approved still plus native stop/reverse schematic |
| G-02 lace approach | Establish ordinary vulnerability before the exact comb explanation | ~8 s | Missing | Anchor push followed by native comb diagram |
| G-03 step sag | Give the damaged-step section a human balance reaction | ~10 s | Missing | `fearBrace` cel over native step-sag motion |
| G-04 ordinary ride | Restore calm human scale and create a closing bookend | ~10 s | Missing | Existing Observer cels over native step loop |

No generated close-up is permitted to explain the comb, brush, step-sag device,
brake or detector. Those mechanisms require deterministic legibility. Full unit
briefs and fallbacks are in `generated-media-plan.md`.

## Existing assets to reuse

- `observerCels.shockLarge` and `observerCels.fearBrace` for the opening freeze
  if the generated crowd needs an editorial reaction insert.
- `observerCels.inspectForward` and `observerCels.reliefSigh` for the ordinary
  closing ride.
- Pilot 01's strike/retract, persistent-cutaway, stress-build, ratio-comparison
  and quiet-close motion grammar. Reuse the treatment logic, not sprinkler
  artwork or hard-coded frame numbers.

## Layout and timing rules

- `cues.csv` remains the only editable cue authority. Components receive
  scene-relative beat offsets derived from it.
- Preserve the 80px side and 100px top/bottom safe margins. Headlines are at
  least 84px and important supporting text at least 44px.
- Use the cue's declared layout region; do not place narration text over the
  mechanism merely because space appears empty in one frame.
- Each cue receives one dominant informational action. Continuous step-loop
  movement and paper texture are ambient, not substitute actions.
- Use exact contiguous `Sequence` timing. Scene-boundary wipes occur inside the
  assigned frames and may not shorten the 7,322-frame timeline.
- Register each of the eight scenes separately for bounded review, plus one
  master composition after scene approval.

## Next build order

1. Draw and approve the grouped escalator SVG.
2. Create all four generated first frames and approve them together as a style
   and framing contact sheet.
3. Build `mechanism-reveal` first; it proves the shared SVG and the cost of the
   remaining six deterministic scenes.
4. Build the other deterministic scenes in narrative order, reviewing contact
   sheets before clips.
5. Generate motion one unit at a time only after the relevant first frame and
   scene geometry are locked.
