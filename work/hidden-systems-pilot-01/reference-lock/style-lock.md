# Hidden Systems Visual Lock — Sprinkler Pilot

**Status: approved for the three-source test.** The values and Observer design
below are canonical. HG-01, HG-09 and the larger-bubble HG-12 v2 anchor were
approved on 4 Sep 2026.

## Palette

| Role | Hex |
|---|---|
| Paper | `#EEE5CF` |
| Paper light | `#F7F0DE` |
| Ink | `#242622` |
| Teal | `#356F70` |
| Teal light | `#88AAA5` |
| Coral | `#E66B51` |
| Coral dark | `#B94738` |
| Mustard | `#E5B83F` |
| Warm white | `#FFF9E9` |
| Gray | `#8B8C82` |

Generated plates may darken or desaturate these colours for lighting, but they
must not introduce a competing neon, blue-orange blockbuster or glossy corporate
palette.

## Observer identity invariants

- Bald vertical oval head with dark side hair and three thin hair strokes
- Small dot eyes, long simple nose and restrained mouth shapes
- Teal jacket, white shirt, narrow black tie, coral trousers and small black shoes
- Dark hand-drawn outline with mild variation
- Understated expression and readable silhouette before fine detail
- No age change, beard, glasses, hat, jacket redesign or realistic anatomy

The identity authority is `canonical/observer-pose-sheet-v2.png`. Generated
motion is rejected if a frame no longer reads as the same character at normal
playback size.

## Scenic invariants

- Flat mid-century UPA editorial illustration rather than photorealism or 3D
- Simplified geometric perspective and modest set dressing
- Warm paper texture throughout, including dark scenes
- Controlled shadows; no glossy reflections or heavy depth-of-field simulation
- Dark outlines on important silhouettes
- Stable architecture suitable for Remotion crops and overlays
- No baked-in labels, captions, signage or logos

## Motion invariants

- One dominant action per source unit
- Locked or nearly locked camera
- Subtle pose, gaze, light or atmospheric motion before body choreography
- No exact hand-to-prop interaction unless the plate can survive its failure
- No morphing fingers, changing wardrobe, wandering facial features or moving walls
- Start and end with clean frames that can be held in Remotion
- Mechanism geometry, sprinkler activation, heat fields, labels and water paths
  remain deterministic Remotion layers

## Acceptance test

Score every generated source from 0–2 on each dimension:

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Observer identity | Broken | Noticeable drift | Stable |
| Set stability | Reconstruct required | Repairable | Stable plate |
| House style | Wrong visual world | Near match | Immediate match |
| Motion readability | Distracting/unclear | Usable edit span | Clean single action |
| Composite utility | Cannot overlay | Limited crop options | Clean plate |
| Engagement gain | Static is stronger | Marginal | Clearly stronger |

Minimum pass: **10/12**, with no zero in identity, set stability or composite
utility. Record attempt count and elapsed cleanup time; visual success that breaks
the repeatable production budget is still a failed workflow.
