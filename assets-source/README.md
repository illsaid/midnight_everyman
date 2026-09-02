# Asset source intake

This tree contains raw or selected source artwork. Production code must never import from it.

## Layout

- `_packages/` preserves downloaded packages unchanged.
- Category folders receive selected source files during review.
- `catalog.json` records package provenance and license status.

All three currently registered source packages are licensed and creatively approved by the user. An individual asset enters production after the remaining technical work: normalization, paired metadata and placement in `../assets-canon/`.

## Intake sequence

1. Preserve the original package unchanged in `_packages/`.
2. Record the package and user-provided license approval in `catalog.json`.
3. Copy a candidate source file into the appropriate category.
4. Clean and restyle a working copy.
5. Place the approved SVG and matching `.meta.json` file in `assets-canon/<category>/`.

Never edit the package original. The registered packages are approved source canon; production code still uses normalized copies from `assets-canon/` so filenames, palette, geometry and metadata remain deterministic.
