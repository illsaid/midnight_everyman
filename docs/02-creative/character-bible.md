# Observer character bible

## Role

The Observer is the audience surrogate: an ordinary person confronting complicated, hidden, dangerous or absurd systems. He should register information clearly without becoming a celebrity host. He is a reusable replacement-cel system: API-controlled in identity and staging, with static holds and limited complete-cel sequences as the production grammar.

## Canonical identity

- Soft vertical egg-shaped head
- Sparse short hair marks
- Long rounded nose integrated into the profile
- Tiny economical eyes and eyebrows
- Minimal mouth treatment
- Compact torso
- Teal jacket or sweater
- White shirt and narrow black tie where visible
- Coral trousers
- Small black shoes
- Dark hand-drawn outlines with mild variation

The currently approved design reference is `reference/observer-upa-replacement-poses-v1.png` from the project root. The active transparent cels are in `public/characters/observer/`.

## Design priorities

1. Silhouette and pose readability
2. Facial identity
3. Clothing and palette consistency
4. Line quality
5. Fine detail

## Required production poses

Initial core library:

- Neutral front or three-quarter stance
- Curious lean
- Point or presentation
- Inspect or reach
- Extreme recoil
- Worried or skeptical hold
- Delighted realization
- Defeated or exhausted
- Walk contact and passing positions if locomotion proves necessary
- Seated variant only after standing poses are stable

## Character-mode rules

- Use a static cel for listening, observing, thinking, standing in graphics and simple reactions.
- Use a two-to-four-pose sequence for small gestures that remain convincing as limited animation.
- Redesign the beat before commissioning continuous character motion.
- Use a generated performance plate only as an occasional exception when its value clearly exceeds its unpredictable acquisition and cleanup cost.
- Select the cheapest treatment that communicates the action.
- Do not use continuous animation merely to prevent stillness.

## Cel-generation rules

- Generate related poses together on one master sheet whenever possible.
- Use the approved character sheet as the identity reference.
- Request isolated full-body drawings with no cropping or cast shadows.
- Prefer a flat chroma background for reliable extraction.
- Keep canvas scale and character registration approximately consistent.
- Generate extreme poses as complete redraws rather than anatomical edits.
- Crop, extract and name each approved cel deterministically.

## Exceptional performance-plate rules

- The episode must remain producible if the clip fails.
- Generate one action per clip, normally two to four seconds.
- Use a locked camera, controlled background and no cast shadow.
- Preserve the canonical character design and clothing exactly.
- Record facing, baseline, usable frame range and entry/exit body states.
- Normalize the approved clip once for production use.
- Keep carried objects inside the plate only when hand contact cannot be separated convincingly.
- Promote a plate into the reusable library only after it works in more than one scene.

## Naming

Use lowercase semantic names and versions when necessary:

```text
observer-neutral-v1.png
observer-curious-v1.png
observer-recoil-extreme-v1.png
```

Production code may map stable semantic names to the currently approved file version.

Performance clips follow the same convention:

```text
observer-reach-forward-v1.webm
observer-wrong-nozzle-recoil-v1.webm
```

## Current status

Generating related poses on master sheets materially improved identity
consistency and is now the default acquisition method for cel families. Version
1 registers 24 semantic poses, all approved on 14 Aug 2026. Continuous generated
motion is not an unresolved dependency; it is an optional exception lane.
