# What the Vox-tutorial transcript is worth to us

Most of it is beginner ground we are well past. Three things in it are genuinely
valuable, and one exposes a concrete, documented reason our iteration loop has been slow.

---

## 1. The big one: our scenes are almost certainly non-interactive in Studio

The tutorial's key move is asking Claude for "prop controls," then dragging scale and
X/Y in Remotion Studio and writing the numbers back. That works for him. **It will
largely not work on our code**, and the installed Remotion skills say exactly why.

From `remotion-interactivity/SKILL.md`:

> "If the markup is too complex for the Studio to make it interactive, then the values
> become grayed out."

From `remotion-markup/SKILL.md`:

> Keep the `interpolate()` call inline in the `style` prop.
> Use `scale`, `translate`, `rotate` CSS properties over `transform`.
> 👎 Non-inline values and transform strings become harder to edit in Studio.

**Our components violate all three, everywhere.** Representative line from
`ActivationScene.tsx`:

```tsx
const zoom = interpolate(f, [at('41'), at('42'), ...], [1.5, 1.65, ...], {...});
...
<g transform={`translate(${1250+kick} ${550+driftY}) scale(${zoom*drift}) translate(-1250 -550)`}>
```

Computed const, then a template-literal `transform` string. That is the documented
anti-pattern twice over. Same shape in `FourPartsScene` and `TwoHeadsScene`, and in every
`<div>` of type furniture — none of which use `Interactive.*` or carry a `name`.

This is why every adjustment has been: edit a magic number → render → look → report →
edit again. It is not a limitation of the project. It is a property of how the code is
written, and it is fixable.

### The fix, split by layer

Do not try to make a 40-element SVG mechanism drag-and-droppable. Split it:

| Layer | Route | Why |
|---|---|---|
| **Type furniture** — headline, subhead, rule, footer, counters | `Interactive.Div` with a hardcoded `name`, and `interpolate()` inline in `style` | These are plain divs. They are also exactly what "alignment issues" refers to. Converting them makes alignment draggable. |
| **SVG mechanism** — the diagram itself | **Zod schema + `defaultProps`** on the composition | You cannot introspect the paths, but you can expose the eight numbers that actually get tweaked: stage scale, stage X/Y, bulb scale, drift amount, crack start, vibration gain, glow strength. |

`zod` is not yet a dependency. `remotion-markup/parameters.md` has the exact pattern:
schema alongside the component, passed to `<Composition schema={...} defaultProps={...}>`.

**This is the single highest-value change available for future episodes.** It converts a
multi-minute agent round-trip into direct manipulation, and it survives every episode
after this one.

---

## 2. The three-layer convention (background / midground / foreground)

He locks one background across all scenes and only changes mid and foreground. We already
have the *principle* — house rule 2, the stage transforms and never cuts — but not the
*structure*. Our components are single flat SVG trees.

Adopting the three-layer split as a component convention gives ambient motion a permanent
home: the background layer carries the slow drift once, and every scene inherits it
instead of each component re-implementing it. That is directly relevant to the
under-population problem measured in `animation-review.md`.

## 3. The offset stroke behind cutouts

He puts an offset red stroke behind each foreground element for cheap depth. Worth
stealing, and it is period-correct for us in a way it is not for him: **mid-century print
misregistration.** A 2–3px offset of the ink outline in coral, on selected elements,
reads as a slightly-off second pass on a letterpress plate. It adds visual interest with
no gradients, no depth-of-field, and no violation of the flat house style.

## 4. Keyed elements instead of full-frame cuts

His ocean is a green-screened video composited over the scene, not a cut to footage.

We currently place every HG plate as a full-frame `<Video>` — which is a cut, and the one
thing house rule 2 forbids. For the pending plates, especially **HG-04 and HG-05**,
consider keying the generated element over the Remotion stage instead of cutting to it.
The stage stays continuous and the generated material becomes a layer rather than a
replacement.

## 5. One gotcha worth knowing

> "when you're scrubbing through Remotion Studio the audio might sound jerky… once you
> render it, it's clean."

True, and it will otherwise read as a defect during review. Do not chase it.

---

## What not to take

| | |
|---|---|
| **Assembling scenes first, syncing to VO after** | We do the opposite and ours is correct. His method accumulates drift; our cues are word-aligned to a locked render and frame-accurate. |
| **The halftone / cutout treatment** | Different house style. Ours is established and measured. |
| **"You don't need to know how to code"** | For layout, fine. Our scenes encode *mechanism correctness* — a bulb that shrinks in the wrong order is wrong, not just ugly. Prop controls are for position and timing, never for the physics. |
| **Mixing music and VO inside Remotion** | Given the open question about dropping the music bed, render the picture clean and mix outside. Cheaper to change your mind. |

---

## Suggested order

1. Convert the type furniture in the three approved scenes to `Interactive.Div` with
   inline `interpolate()` and hardcoded names. Small, contained, immediately makes
   alignment draggable.
2. Add `zod` and a schema to one composition as a trial — `four-parts` is the simplest.
3. If both work, roll the pattern into the remaining components and write it into
   `diagram-layer.md` as the house convention for every future episode.
4. Adopt the three-layer split when building the next new scene, not by retrofitting.
