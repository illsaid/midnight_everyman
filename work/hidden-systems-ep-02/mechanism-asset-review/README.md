# Escalator mechanism asset review

This folder retains the grouped SVG review history for Episode 02. Production
must use the promoted canonical asset, not these review objects.

V2 supersedes V1 and was approved by the owner and independent review on
2026-09-15. It replaces parallel decorative tracks with converging guide
geometry, adds named front/rear wheel anchors to every visible step, restores
the return run to full visual weight, makes the base drawing neutral and splits
production component captions from review furniture.

## Acceptance checks

- All 16 manifest-required groups exist exactly once.
- The complete escalator reads at 1920 x 1080 without tiny, texture-like components.
- Fixed, moving and safety systems remain distinguishable through geometry and named groups while the base asset stays neutral.
- V2 component labels and review furniture live in separate groups.
- V2 category is encoded by form; semantic colour is reserved for animated scene state.
- The object is generalized and source-informed; it is not presented as a manufacturer drawing.

## Promotion

The production copy lives at
`assets-canon/vertical-transport/escalator-mechanism-v1.svg` with paired object
metadata and a runtime mirror under `public/assets-canon/vertical-transport/`.
The review shell is absent from the canonical copy. Production code must not
import either review candidate directly.
