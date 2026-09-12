# Anchor Generation Prompts

These prompts produced the three candidate start frames. They are recorded so
the anchors can be regenerated or revised without reverse-engineering the
visual decisions. Built-in ImageGen was used with the local reference files
listed for each asset.

## HG-01 cinema anchor

**References:** `canonical/observer-pose-sheet-v2.png`,
`canonical/house-style-set-staging-v4.png`, and
`canonical/systems-style-frame-160.png`.

```text
Use case: illustration-story
Asset type: 16:9 anchor still for image-to-video generation, HG-01 "Cinema believer"
Primary request: Create a locked-camera opening frame inside a modest cinema. The canonical Observer sits alone in a theater seat, full upper body clearly visible, delighted and absorbed by the unseen movie screen. Cool screen light lifts his face while the room remains dark enough to read as a cinema.
Subject invariants: Preserve the Observer's distinctive bald oval head, three thin hair strokes, long simple nose, small dot eyes, dark side hair, teal jacket, white shirt, narrow black tie, coral trousers, and small black shoes. Preserve his restrained mid-century cartoon proportions; do not redesign or modernize him.
Style/medium: Flat 2D mid-century UPA editorial illustration with dark hand-drawn outlines, mild line variation, restrained paper grain, simplified geometric set, and the exact warm paper / teal / coral / mustard / ink visual family of the references.
Composition/framing: 16:9 landscape, medium-wide, eye-level, stable perspective, Observer large enough for facial identity to survive video generation, empty seat backs establishing the cinema, no camera tilt. Leave clean surrounding shapes for later reframing.
Lighting/mood: Quiet anticipation and genuine delight, cinematic but still clearly part of the illustrated house style.
Constraints: no text, captions, logos, watermark, photorealism, 3D rendering, glossy gradients, extra characters, sprinkler, water, cropped head or hands, or altered wardrobe.
```

## HG-09 installer anchor

**References:** `canonical/observer-pose-sheet-v2.png`,
`canonical/house-style-set-staging-v4.png`, and
`canonical/systems-style-frame-160.png`.

```text
Use case: illustration-story
Asset type: 16:9 anchor still for image-to-video generation, HG-09 "Installer judgement"
Primary request: Create a locked-camera wide frame of an ordinary, empty office shortly before occupancy. The canonical Observer stands as the installer near the middle of the room, full body visible, looking upward at the ceiling with restrained uncertainty as though judging the room's normal temperature. A closed compact tool case and a small organized tray of colored glass sprinkler bulbs sit nearby as quiet context. His hands do not touch any object.
Subject invariants: Preserve the Observer's distinctive bald oval head, three thin hair strokes, long simple nose, small dot eyes, dark side hair, teal jacket, white shirt, narrow black tie, coral trousers, and small black shoes. Preserve his understated expression and canonical mid-century cartoon proportions.
Scene/backdrop: Simple geometric office with acoustic-tile ceiling, one small ceiling sprinkler, warm paper walls, a doorway and minimal unoccupied furniture.
Style/medium: Flat 2D mid-century UPA editorial illustration with dark hand-drawn outlines, mild line variation, restrained paper grain, simplified geometric perspective, and the exact warm paper / teal / coral / mustard / ink visual family of the references.
Composition/framing: 16:9 landscape, eye-level wide shot, stable camera, clean ceiling area, strong readable silhouette, generous space around the Observer for later Remotion overlays and reframing.
Lighting/mood: Ordinary daylight, quiet responsibility, mild uncertainty, humane rather than slapstick.
Constraints: no text, captions, logos, watermark, photorealism, 3D rendering, glossy gradients, other people, ladder, bulb in his hands, precise hand-to-prop contact, cropped body, or altered wardrobe.
```

## HG-12 macro anchor

**References:** `canonical/house-style-set-staging-v4.png` and
`canonical/systems-style-frame-1060.png`.

```text
Use case: stylized-concept
Asset type: 16:9 anchor still for image-to-video generation, HG-12 "Glass holding a river"
Primary request: Create a poetic extreme macro view of a conventional glass-bulb fire sprinkler head before activation. The tiny intact glass bulb is the visual hero, compressed between the dark brass frame and sealing cap. Red-orange liquid and exactly one small air bubble are visible inside the glass. Water waiting above is implied by a deep teal pressure field and restrained highlights, not shown as a literal ocean.
Style/medium: Flat 2D mid-century UPA editorial illustration with confident dark hand-drawn outlines, mild line variation, warm paper grain, simplified but believable material shapes, limited house palette, and cinematic macro lighting. It must look like the same illustrated channel rather than product photography.
Composition/framing: 16:9 landscape, extreme close-up, stable locked camera, bulb centered slightly below the middle with enough surrounding brass frame to identify the object. Clean shapes suitable for a slow digital push-in.
Lighting/mood: Quiet pressure, patient danger, beautiful and slightly ominous; restrained warm rim light on the glass.
Constraints: intact bulb only; exactly one bubble; no shattering, spraying water, flames, people, labels, text, captions, logos, watermark, photorealism, 3D rendering, chrome-heavy product rendering, extra mechanical parts, or surreal river imagery.
```

The v1 macro anchor required a targeted correction after the first generation
duplicated the bubble. It contained one bubble, but the bubble was difficult to
notice at normal video size. The current v2 candidate enlarges that single
bubble by roughly 70 percent, adds a pale translucent centre and preserves the
rest of the composition. Use `anchors/hg-12-macro-anchor-v2.png`; v1 is retained
only as an audit trail.

### HG-12 v2 targeted edit

```text
Use case: precise-object-edit
Asset type: HG-12 macro anchor v2
Primary request: Change only the single air bubble inside the red-orange liquid. Make that one bubble approximately 70 percent larger and easier to notice at normal video size. Keep it fully inside the liquid, just below the liquid surface. Give it a pale warm-cream translucent center and a crisp dark-coral outline so it separates clearly from the red liquid while remaining an air bubble.
Invariants: Preserve exactly one bubble total. Keep the intact glass tube, liquid level, sprinkler geometry, brass frame, crop, perspective, lighting, palette, paper texture, line work, shadows, background, and 16:9 composition unchanged.
Constraints: no second bubble, droplets, rings elsewhere, liquid-level change, cracks, shattering, spraying water, text, logo, watermark, or other design changes.
```
