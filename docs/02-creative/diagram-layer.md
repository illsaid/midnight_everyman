# Diagram layer — Hidden Systems schematic system

**Status:** canonical for diagram geometry, motion timing, line grammar and type.
**Not canonical for:** Observer, palette source, texture — see
`../../everyman_bible_v2/` (House Style Bible v2 and its amendments).

## Where it lives

- **Source:** `diagram_layer_v1/` — 11 `.dc.html` artboards plus `canvas.json`,
  version-controlled here alongside `everyman_bible_v2/`.
- **Rendered:** Claude Design canvas, "Hidden Systems Diagram Layer".
- **This file** is the pointer and summary, so the canvas is never orphaned again.

Re-seed the canvas from source with the Claude Design `seed-canvas.mjs` script,
passing each artboard in sheet order plus `--canvas canvas.json`.

| Sheet | Covers |
|---|---|
| 01 Main | The three rules and the frame spec |
| 02 Palette | State colours and tints |
| 03 Line grammar | Six weights, six fixed meanings |
| 04 Type | Jost display, Courier Prime annotation, caption scale |
| 05 Frame | Stage, ledger, caption band, end-screen and progress reserves |
| 06 Motion | Easing, per-element timings **in frames**, beat budget |
| 07 Beats | The six narrative beats |
| 08 Episode | Worked episode |
| 09 Frame device | Nine-tile progress strip |
| 10 Ideation | Ceiling work |
| 11 Script | Word budget, movement structure, cold open, banned phrasing |

## Reconciled against Midnight Everyman, 2 Sep 2026

Four conflicts existed when the projects merged. All are closed.

| Was | Now |
|---|---|
| 30 fps | **24 fps** — `docs/01-product/format.md` rejects 30 on its merits |
| Timings in milliseconds | **Whole frame counts.** 380/90/600/240/900/1200/400 ms landed on 9.12, 2.16, 14.4, 5.76, 21.6, 28.8 and 9.6 frames at 24 fps — all would silently round, and the 2.16-frame stagger is a 50% swing on the value controlling how a diagram assembles |
| Own palette (#E9E2D2 paper, #2A2521 ink, #C2452B coral…) | **House Style Bible v2 hexes** — #EEE5CF, #242622, #BD4E3D, #D5A84C, #356F70, #78975D, #4A4A42, #7C7566, #C9C1AC. Tints recomputed at 22% over the Bible paper |
| DM Mono | **Courier Prime**, the Bible's mono face |
| Sheets 11 / 13 / 14 (subject, thumbnail, packaging) | **Retired.** Superseded by `docs/01-product/subject-selection.md`, `docs/02-creative/thumbnail-system-v1.md` and `docs/01-product/packaging.md` |

## Motion values at 24 fps

| Value | Frames | ms |
|---|---|---|
| Element draw-in | **9** | 375 |
| Sibling stagger | **2** | 83 |
| Camera move, within a movement | **14** | 583 |
| State crossfade | **6** | 250 |
| Movement transition | **21** | 875 |
| Flow march cycle | **30** | 1250 |
| Pre-payoff hold | **10** | 417 |
| Maximum static hold | **720** | 30 s |

The 2-frame stagger lands on the 12 fps step grid the Observer cels use, so the
diagram and character grids agree.

Beat budget at 8640 frames (360 s): **600 / 1800 / 1440 / 2280 / 1560 / 960**,
across 13 movements of 480–1080 frames.

## Boxed SVG label fit

Boxed labels use `text-anchor="middle"` at the geometric centre of their
container. Retain at least 32 px of horizontal clearance on both sides at the
final font size and letter spacing. Shorten the copy before reducing type size;
do not rely on a left-hand text origin or on a scaled preview to imply fit.
Inspect the rasterized output at delivery resolution before approval.

## Terminology

"Beat" is overloaded. In this project it means three things:

| Term | Scale | Defined in |
|---|---|---|
| Narrative beat | 6 per episode, 25–95 s | Diagram layer sheet 07 |
| Movement | 13 per episode, 480–1080 frames | Diagram layer sheet 06 |
| Shot beat | 3–5 s, one dominant visual idea | `visual-language.md` |

## Everyman and the frame

Sheet 05 allocates the whole 1920 × 1080 to diagram — stage, ledger, caption
band, reserves — and **reserves no space for the Observer**. This is correct.
Everyman pops into frame with the diagram around or behind him, chiefly at the
open and the close; those beats replace the entire composition rather than
occupying a zone inside it. The stage-and-ledger geometry governs the diagram
passages only.

## Open, for the pilot to answer

The ledger — a persistent 416 px annotation column holding up to nine part names
— was designed for a frame containing nothing else. Ledger plus paper grain plus
periodic Observer takeovers may be too dense. Treat the ledger as a hypothesis
the pilot tests, not a fixed rule.
