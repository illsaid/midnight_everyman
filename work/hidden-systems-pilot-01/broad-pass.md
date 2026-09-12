# Broad pass — sprinkler-assembly-v6

Measured across all 6,738 frames. Effects list checked against the installed
`remotion-markup` skill, not invented.

---

## The measurement

| | |
|---|---|
| Frames below 0.35 mean delta | **70%** (4,730 of 6,737) |
| Time inside dead runs of ≥2 s | **125 s = 45% of the film** |
| Number of such runs | **33** |

### By movement

| mv | dur | mean Δ | static |
|---|---|---|---|
| M01 | 20 s | 1.950 | 31% |
| M02 | 12 s | 0.872 | 43% |
| **M03** | 30 s | 0.451 | **80%** |
| M04 | 16 s | 0.962 | 60% |
| **M05** | 21 s | 0.156 | **92%** |
| M06 | 32 s | 0.512 | 73% |
| **M07** | 41 s | 0.630 | **80%** |
| M08 | 20 s | 1.491 | 62% |
| M09 | 28 s | 1.197 | 56% |
| **M10** | 31 s | 0.118 | **88%** |
| **M11** | 19 s | 0.871 | **82%** |
| M12 | 9 s | 1.032 | 53% |

### Longest single holds

| | |
|---|---|
| 2:31.5 – 2:40.0 | **8.5 s** |
| 4:18.4 – 4:26.5 | **8.1 s** |
| 3:55.7 – 4:02.9 | **7.2 s** |
| 0:50.2 – 0:56.3 | 6.0 s |
| 4:07.0 – 4:12.5 | 5.5 s |

**M10 (3:42–4:12) is the worst movement in the film at 88% static** and has not been
flagged before. M05 at 92% is worse still but shorter.

---

## Read this before the effects list

**Effects are surface. 45% static is structure.** Applying `paper()` and `halftone()` to
a film that holds still for eight seconds produces a *textured* still. Do the structural
tier first or the second tier just buys a prettier slideshow.

---

## Tier 1 — structural (fixes the 45%)

### 1. The boil — the single highest-leverage change available

Traditional cel animation has **line boil**: the outline wobbles frame to frame because it
was physically redrawn. `roughenEdges()` with a seed that advances every **2 frames** —
matching the 2-frame stagger already in `diagram-layer.md`, i.e. animating on twos —
would give **every frame of the film** continuous life at essentially zero authoring cost.

It is also exactly period-correct. Halas & Batchelor boils. Clean vector edges are the
single most modern-looking thing about the current render.

One global effect. It touches all 6,737 frames. Nothing else on this list has that reach.

### 2. Ambient camera on every scene

Already added to three components; the other sixteen scenes do not have it. One
`interpolate()` per scene: scale 1.000 → 1.015, 7 px drift.

### 3. Out-of-phase idle on every repeated element

`Math.sin()` with a phase offset from the element index. Applies to the head fields, the
swatch rows, the bar charts, the node grids. A dozen elements each doing a 2 px nothing
reads as a living surface.

### 4. Scale up

The recurring finding from the M03 analysis and from both thumbnail passes. Diagram
elements are consistently too small to be the subject of the frame.

---

## Tier 2 — Remotion features currently unused

Checked against the effects list in the installed skill.

### 5. `<TransitionSeries.Overlay>` at every scene boundary

The film currently hard-cuts between 19 scenes. **Use `Overlay`, not `Transition`** —
transitions shorten the timeline, and ours is locked frame-accurately to the VO. An
overlay renders on top of the cut without changing duration.

Nineteen boundaries currently doing nothing.

### 6. `paper()` + `noise()` globally

The House Style Bible calls for paper texture and the render has none. `paper()` exists
for exactly this. `speckle()` or `noise()` at low amplitude adds tooth.

### 7. `chromaticAberration()` at very low amplitude

This is the **print misregistration** idea from the tutorial notes, done properly — a
second plate a hair out of alignment. Period-correct, adds depth without gradients, and
costs nothing to author.

### 8. `halftone()` or `duotone()` on selected fills

Mid-century print process. Use on flat fills only, never on type.

### 9. `pixelDissolve()` and `venetianBlinds()` as state changes

State changes currently happen as opacity fades — the most generic transition available.
Both of these are period-correct and carry texture.

### 10. `contourLines()` / `gridlines()` for schematic ground

Cheap way to give the empty paper some structure without adding elements.

### 11. `vignette()` at low strength

Period lens character. Keep it subtle enough to be deniable.

---

## Do not use

`glow()`, `lightTrail()`, `zoomBlur()`, `dropShadow()`, `shine()`, `fisheye()`,
`barrelDistortion()`, `thermalVision()`, `tvSignalOff()`, `scanlines()`.

All modern or digital. `dropShadow()` in particular breaks the flat rule outright, and
`scanlines()` is CRT — wrong decade.

---

## Two practical gotchas

1. **WebGL effects need `Config.setChromiumOpenGlRenderer('angle')`** in the render config.
   Without it they will not render.
2. **Render cost.** Stacking WebGL effects across 6,737 frames will slow renders
   materially. Apply the global ones (`paper`, `roughenEdges`, `noise`) at the composition
   root once rather than per-component, and measure a 200-frame render before committing
   to the full pass.

---

## Suggested order

| | | Effect |
|---|---|---|
| 1 | The boil, global | Touches 100% of frames. Do this first. |
| 2 | `paper()` + `noise()`, global | House texture, one place |
| 3 | Ambient camera on the other 16 scenes | Kills the flatness floor |
| 4 | M10 rebuild | Worst movement, 88% static over 31 s |
| 5 | M05 rebuild | 92% static, 21 s |
| 6 | M03 rebuild | Already specced in `m03-liven-up.md` |
| 7 | Overlays at the 19 boundaries | Free life at every cut |
| 8 | The rest of tier 2 | Taste, once structure is fixed |
