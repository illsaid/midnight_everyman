# Midnight Everyman House Style Bible v2.1 Amendment

**Status:** Canonical amendment  
**Applies to:** `House Style Bible.dc.html` revision 02  
**Scope:** Character-animation architecture only  

This amendment preserves Bible v2 except where the rules below explicitly supersede it.

## Revised principle

**Everyman is a hybrid performance system.** His identity, palette, scale, staging and approved action vocabulary remain API-controlled. His motion may come from a static replacement cel, a short replacement-cel sequence or a short alpha/chroma performance plate.

The agent chooses the cheapest treatment that communicates the action convincingly. Static cels remain the default. Continuous performance animation is exceptional, not aspirational.

## Three character-animation levels

| Level | Use when | Treatment |
|---|---|---|
| 1. Hold | Listening, observing, thinking, standing in information graphics or a simple reaction | Static replacement cel |
| 2. Limited action | A small gesture reads clearly in two to four drawings | Replacement-cel sequence |
| 3. Performance | Body mechanics, locomotion, object contact or physical comedy carry meaning | Alpha/chroma performance plate |

Information graphics, diagrams, typography, camera, compositing and scene timing remain Remotion responsibilities. Backgrounds and set dressing come from the canonical SVG library. Technical mechanisms and cutaways use segmented SVG assets animated by Remotion.

## Selection rule

Evaluate each character beat in this order:

1. Can one held drawing communicate it? Use a static cel.
2. Can two to four canonical drawings communicate it without looking like an animatic? Use a cel sequence.
3. Does the meaning depend on weight shift, anticipation, follow-through, gait, hand contact, object manipulation or physical comedy? Use a performance plate.
4. If none is economical, redesign the beat before commissioning bespoke animation.

Performance animation is permitted only when motion itself carries information or comedy. It must not be used merely to prevent stillness.

## Superseded language

### Character role

**Old:** Everyman is a visual API, not an actor.

**New:** Everyman is a hybrid performance system. His identity is API-controlled; his motion source is selected per beat.

### Character asset format

**Old:** Character entries are static transparent PNGs.

**New:** Character assets may be static cels, short cel sequences or transparent/chroma performance plates. Static cels remain the production default.

### Motion grammar

**Old:** Movement occurs through hard pose changes.

**New:** Holds and limited pose changes remain the default grammar. Continuous performance animation is allowed when body mechanics, object interaction, locomotion or physical comedy materially benefit from it.

### Canonical architecture

**Old:** Replacement-cel architecture—canon, do not renegotiate.

**New:** Replacement-cel architecture remains canonical for low-motion states and limited actions. It is one layer of the canonical hybrid character-animation system.

## Component contracts

```tsx
<Observer
  mode="cel"
  pose="concerned"
  stageX={0.42}
  height={620}
/>

<ObserverSequence
  action="listen-count"
  poses={["listen-01", "listen-02", "listen-03"]}
  timings={[0, 18, 34]}
  stageX={0.42}
  height={620}
/>

<ObserverPerformance
  clip="wrong-nozzle-recoil-01"
  stageX={0.42}
  height={620}
  startFrame={0}
/>
```

These interfaces are architectural contracts, not proof that their generalized implementation is already warranted.

## Performance-plate requirements

Each approved plate records:

- semantic action name and version
- source clip and normalized production clip
- alpha or chroma acquisition method
- native frame rate and usable frame range
- stage anchor and baseline
- facing direction
- intended scale range
- whether the clip loops
- any object carried inside the plate
- entry and exit body states
- identity or matte defects accepted at approval

Generate one action per clip, normally two to four seconds, against a locked camera and controlled background. Avoid cast shadows and background objects. Key or matte the approved clip once; do not repeat manual extraction for every scene.

## Production budget guardrail

For an eight-to-ten-minute episode, the provisional target is:

- 35–50 static or held Observer appearances
- 8–12 limited cel sequences
- 3–6 performance plates

These are diagnostic ranges, not quotas. If an episode needs twenty bespoke performance plates, the episode or visual plan has failed the workload constraint.

## Reuse policy

Promote approved generic performances into a reusable library, including:

`walk-left-neutral`, `walk-right-neutral`, `reach-up`, `reach-forward`, `pull-heavy`, `recoil-small`, `recoil-large`, `fall-back`, `look-under`, `open-door`, `push-button`, `turn-around` and `shrug`.

A plate is reusable only if its silhouette, timing and object assumptions survive insertion into more than one scene. Bespoke clips remain episode assets until proven reusable.

## Unchanged canon

- The skeletal SVG puppet remains rejected.
- Character anatomy is never created by rotating disconnected limbs.
- Approved identity, palette and silhouette rules remain fixed.
- Remotion remains the editorial, information-design and deterministic rendering engine.
- Holds are intentional and acceptable.
- One dominant visual action per beat remains mandatory.
- Automation remains subject to the human quality gate.

## Immediate validation

Build one three-second performance plate: **reach toward the extinguisher, abruptly stop and recoil**. Composite it into a static SVG-furnished room. Compare it with the existing replacement-cel version for body mechanics, identity stability, matte quality, integration time and reuse potential.
