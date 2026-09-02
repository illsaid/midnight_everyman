# Canonical production assets

Only technically normalized house-style objects belong here. The three registered source packages already have user licensing and creative approval; this tree supplies deterministic production filenames, geometry, palette treatment and metadata. Remotion production code may import from this tree; it must not import from `assets-source/`.

Every object is a pair with the same basename:

```text
refrigerator.svg
refrigerator.meta.json
```

The metadata must validate against `_schema/object.meta.schema.json`. Source-package canon is not revoked by missing metadata, but an SVG is not production-ready in this tree until its matching metadata record exists and carries `approved` status.

## Canonicalization requirements

- package-level commercial-use approval recorded in `assets-source/catalog.json`
- semantic lowercase filename
- normalized `viewBox`
- editor metadata and unused definitions removed
- house palette applied by semantic role
- intentional stroke treatment
- object tightly framed without accidental clipping
- anchor and baseline recorded
- mechanically inspected at final viewing size
- source package and original filename retained in metadata

`catalog.json` is the machine-readable index of approved objects.
