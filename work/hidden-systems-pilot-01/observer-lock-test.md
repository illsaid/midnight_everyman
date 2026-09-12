# Observer consistency test — office frame vs cel registry

The biggest open question in the project was whether the Observer could be placed in a fully
rendered environment and stay on-model. **Tested against `everyman_bible_v2/source/pose-sheet-v2.png`.
He holds.**

---

## Design match

Side by side at matched height (`observer-compare.png`), every identifying feature carries:

- Bald crown with the two hair tufts, same placement and curl
- Same nose profile and ear shape
- Teal jacket with the V-notch lapel, white shirt, black tie
- Coral trousers, black shoes, same silhouette

## Colour match — measured, not eyeballed

| Element | Cel sheet | Office frame | Delta |
|---|---|---|---|
| Jacket teal | `#387878` | `#307070` | −8 on each channel |
| Trouser coral | `#D85830` | `#D05028` | −8 on each channel |
| Skin | `#F8E0B8` | `#F8D8B0` | −8 on G and B |

**The shift is uniform across all three.** That is a global ambient/exposure difference — a
figure standing in a lit room rather than on a green screen — not colour drift. Arguably it is
*correct*: a character at pure swatch value inside a rendered set would look pasted on.

## Set palette

| | |
|---|---|
| Wall | `#E0C8A8` |
| Ceiling | `#D8C0A0` |
| Carpet | `#708880` |
| Door | `#C89848` |

House-consistent — paper, teal and mustard all present and doing structural work.

---

## What this unblocks

| Was blocked on | Status |
|---|---|
| Thumbnail variant C (Observer under the dry head) | **Unblocked for a static frame** |
| The Observer fork — cels vs generated | **Leaning to option 2**: `cels.ts` demotes to reference input, generated art carries the film |
| The six participant beats in `observer-usage` | Viable |

**This is a partial pass, not a full one.** What has been demonstrated is a *single static frame*
holding on-model. Two things remain untested and they are the actual risks:

1. **Motion.** Walking, turning, reaching. A held pose is the easy case.
2. **Cross-generation consistency.** One frame proves nothing about whether generation six
   matches generation one. That is what the style-lock probe exists to measure and it still
   needs running.

---

## Three notes on the frame itself

**1. The thesis is in the set dressing, and that's the best thing about it.** Five sprinkler
heads, all identical, all doing nothing, spread across an ordinary ceiling. The argument of the
whole film is stated as furniture before a word is spoken. Keep doing this.

**2. Proportion has drifted slightly.** In the side-by-side the office figure reads with
marginally longer legs and a smaller head relative to the cel. Within tolerance for one frame;
worth watching as the drift axis if more are generated.

**3. Which beat is this?** He is *looking up* — so this is not cue 20 or 23, which explicitly
require him to walk beneath the head **without** looking. It fits either:

- **cue 20** — "Look up. There it is" *(0:58.7)*, or
- **cue 91** — the close, "Look up. It's still there" *(4:37)*

Cue 91 is the stronger use: the film opens with the phrase and ends on it, and the shot list
already calls for "hold on him, not the ceiling." This frame is that shot.

---

## System conflict worth raising: coral

House rule 1 is **"colour is state, never decoration."** The Observer permanently wears coral —
which is also the palette's alarm/active colour.

In this frame that collides visibly: his trousers and the sprinkler bulbs are the only warm
elements, so they read as related when they are not. In the diagram layer it is worse — coral
can no longer cleanly signal *"this is what the system is doing right now"* if it is already
the character's uniform.

Three ways out:

| | Cost |
|---|---|
| Change the Observer's trousers to a neutral (ink, olive, mid-brown) | Contradicts the established design and the 24 existing cels |
| Reserve a *different* colour for diagram state — mustard for active | Weaker signal; mustard reads as caution, not action |
| Accept it, and keep the Observer out of frame whenever coral is carrying state | Cheapest, but a real constraint on staging |

Option 3 is probably right, and it should be written into `diagram-layer.md` rather than
discovered mid-build.
