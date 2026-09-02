# Graphics asset library

## Structural boundary

- `assets-source/` is intake and provenance storage. Production code may not import it.
- `assets-source/_packages/` preserves downloaded packages unchanged.
- `assets-source/<category>/` holds selected raw candidates.
- `assets-canon/` contains only approved, cleaned house-style objects.
- Every canonical object is an SVG plus a same-basename `.meta.json` record.

## Source packages received

| Source package | SVG files | PNG files | Intended use | Production status |
|---|---:|---:|---|---|
| `assets-source/_packages/mcm_furniture_ccgraphics/` | 22 | 21 | Furniture and room dressing | Raw source |
| `assets-source/_packages/Retro_Kitchen_CCGraphics/` | 48 | 44 | Kitchen objects and props | Raw source |
| `assets-source/_packages/SVG.MidCentury/` | 100 | 1 preview | General mid-century objects, symbols and motifs | Raw source |

The user has approved and licensed all three packages as source canon. An individual object becomes production-ready after technical normalization and registration in `assets-canon/`; no further aesthetic or rights approval is required.

## Ingest rule

1. Prefer SVG over the supplied PNG preview.
2. Preserve the downloaded source file unchanged.
3. Carry the package-level user approval from `assets-source/catalog.json` into the object metadata.
4. Copy the selected asset into `assets-canon/<category>/` with a semantic filename.
5. Normalize `viewBox`, remove editor metadata and unused definitions, and map colors to house-style semantic roles.
6. Record source package, source filename, canonical palette, anchor, native bounds and approved uses in the asset ledger.
7. Test at final viewing size before approval.

## Canonical naming examples

```text
assets-canon/furniture/lounge-chair-01.svg
assets-canon/furniture/lounge-chair-01.meta.json
assets-canon/appliances/teakettle-01.svg
assets-canon/appliances/teakettle-01.meta.json
```

## What stock should solve

Stock is for visually ordinary objects whose custom illustration adds little value: telephones, couches, lamps, toasters, cars, desks, wrenches, gas pumps, washing machines, filing cabinets, refrigerators, coffee cups, televisions and generic buildings.

| Asset class | Default source |
|---|---|
| Everyman character | Custom |
| Critical technical cutaway | Custom or adapted from accurate technical references |
| Geographic map | Programmatic |
| Chart or explanatory diagram | Remotion-generated |
| Mundane object or set dressing | Stock intake, then canonicalized |

## Palette treatment

Downloaded colors are suggestions, not canon. Normalize assets to the semantic palette defined in House Style Bible v2. Use one dominant fill and, where necessary, one ink or accent role. Avoid importing gradients, effects or extra colors merely because they exist in the source file.

## Licensing status

On 2026-08-14, the user confirmed that all three supplied packages are licensed and canonical. This is the controlling project decision. Do not reopen licensing or aesthetic approval during routine asset intake unless the user changes that decision.

## First validation set

For the performance-plate room test, normalize only the few assets required to read as a furnished room: one chair or side table, one lamp and at most one secondary object. The room must remain subordinate to the character action. Production code must reference the normalized `assets-canon/` copies, never the package originals.
