# Midnight Everyman — YouTube channel banner

**Supersedes the ceiling concept.** A ceiling framed the channel as "overhead
things". The channel covers revolving doors, lifts, water heaters, taps, locks,
escalators. The artwork is now a **specimen index strip** — a numbered row of
ordinary objects in house line grammar — which states the category without
committing to a subject.

Files:

| File | Use |
|---|---|
| `midnight-everyman-banner-2560x1440.png` | **Upload this one.** |
| `banner-guides.png` | Reference only — crop zones drawn on. Do not upload. |
| `banner-crop-mobile-1546x423.png` | What every device is guaranteed to show. |
| `banner-crop-desktop-2560x423.png` | What a desktop browser shows. |
| `make_banner.py` | Generator. Re-run to change objects, tagline or colour. |

---

## 1. YouTube geometry (verified against current channel-art guidance)

| Zone | Size | Position in the 2560×1440 upload |
|---|---|---|
| Upload / TV | 2560 × 1440 | whole canvas |
| Desktop | 2560 × 423 | full width, y 509–932 |
| Tablet | 1855 × 423 | centred, y 509–932 |
| **Safe — every device** | **1546 × 423** | **x 507, y 509** |

File: PNG, RGB. Under 1 MB is ideal, 6 MB is the hard cap.
This file is **~192 KB**.

**The consequence people usually miss:** outside TV, YouTube only ever shows a
423 px-tall horizontal band. Anything above or below it is invisible on phone,
tablet and desktop. So every element that has to work lives inside y 509–932.

---

## 2. Layout inside the band

| Element | y (in the 2560×1440 file) |
|---|---|
| Specimen strip, glyph centres | 580 |
| Plate numbers (Courier Prime 15) | 644 |
| Wordmark cap line | 736 |
| Coral rule | 862 |
| Tagline | 880 |

Top margin 27 px, bottom margin 25 px inside the band.

**Specimen strip** — 160 px pitch across the full 2560. Ten specimens fall
inside the safe 1546, so the category statement survives on a phone; three more
each side are a desktop bonus. Glyphs are 88 px square, 3 px stroke, `ink-mid`.

**Plate numbers** — 01…16, Courier Prime 15 px, `ink-mute`. These are the
device that makes the row read as a *catalogue index* rather than wallpaper,
and they absorb the fact that objects repeat at the far ends.

**Wordmark** — Jost SemiBold (wght 600), 120 px, `ink`. Measured width 1302 px
inside the 1546 safe zone — 122 px clear each side.

**Coral rule** — 5 px, `coral`, 24 % of the wordmark width, left-aligned to it.

**Tagline** — Jost Regular 27 px, `ink-mute`, +7.6 px tracking, 884 px wide.
"YOU'VE WALKED PAST IT TEN THOUSAND TIMES" — generalises to any subject.
The earlier "NOTHING UP THERE IS WATCHING YOU" was sprinkler-specific and is cut.

---

## 3. The specimens

Thirteen distinct objects, sequenced so no glyph repeats within 12 slots and no
two similar silhouettes (water cylinder / extinguisher) sit adjacent:

escalator · lift call panel · sprinkler head · thermostat · door closer ·
socket · water cylinder · pedestrian signal · manhole cover · smoke detector ·
lever handle · tap · extinguisher

**Exactly one object carries colour** — plate 05, the sprinkler bulb, in
`coral`, at x 720 (inside the safe zone, left of centre). It is the only
saturated mark in the strip and it points at the pilot without making the
channel about sprinklers. Its plate number is coral too.

This holds house rule 1: colour is state, never decoration. The bulb is the one
thing in the row that is *armed*.

Two glyphs were redrawn after they failed a legibility read at final size:
- **revolving door in plan** read as a rifle scope → replaced with escalator in
  side elevation
- **euro cylinder** read as a lightbulb → replaced with a lever handle on a
  backplate

---

## 4. Outside the band (TV only)

A faint 160 px column grid runs full height, plus two ghost specimen rows at
y 236 and y 1204 at ~8.5 % ink. This fills the TV view so it does not read as a
thin strip floating on blank paper. All of it is safe to crop — no information
lives there.

---

## 5. Colour

Hex is authoritative; this is a screen deliverable and nothing is being printed.

| Role | Hex | Nearest Pantone (approximate) |
|---|---|---|
| paper (ground) | `#EEE5CF` | 7499 C |
| panel | `#F5EBD6` | 7499 C (lighter) |
| reference (grid) | `#C9C1AC` | 7535 C |
| ink (wordmark) | `#242622` | Black 3 C |
| ink-mid (glyphs) | `#4A4A42` | **447 C** — strong match |
| ink-mute (numbers, tagline) | `#7C7566` | **405 C** — strong match |
| coral (accent) | `#BD4E3D` | 7597 C — **runs hotter than the hex** |
| mustard | `#D5A84C` | **7407 C** — strong match |
| teal | `#356F70` | 5473 C — **runs bluer than the hex** |
| olive | `#78975D` | 7490 C |

Pantone reads are nearest-neighbour estimates, not measured. Published
conversion tables disagree with each other, and coral and teal are the two that
will visibly shift if anyone prints from the Pantone number rather than the hex.
If this ever goes to print, get a physical chip pulled against the hex.

---

## 6. Fonts

- Jost, variable, wght 600 (wordmark) and 400 (tagline)
- Courier Prime Regular (plate numbers)

Both are OFL. The renderer pulls them from the `fonts/` folder beside the script.

---

## 7. To change it

```
python3 make_banner.py
```

- objects: edit the `GLYPHS` list and `SEQ`
- which object is coloured: `ACCENT_POS`
- tagline: the `tag` string
- crop guides: `draw_banner(True)`

Renders at 2× and downsamples with Lanczos, so the line art stays clean.
