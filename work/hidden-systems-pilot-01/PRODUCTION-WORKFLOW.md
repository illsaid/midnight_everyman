# Pilot production workflow

## Authority

- `cues-v2.csv`: locked word-aligned timing and editorial cues. Legacy status columns are not delivery approval authority.
- `production-manifest.json`: asset versions, approvals, references, placements, retiming, cropping, and scene/layer status.
- `production-resolved.json` and `src/sprinkler-pilot/production.ts`: generated outputs. Do not edit.
- `reference-lock/generation-attempts.csv`: generation history, including rejected attempts. Unknown costs remain unknown.

## New delivery

1. Save a uniquely versioned source file. Register its asset ID, source metadata, references and approval in the manifest.
2. Point the scene media layer at that approved asset. Specify cue IDs, source start/span, `trim` or `fit`, crop and focal point. `fit` explicitly changes playback speed; `trim` rejects insufficient footage rather than silently freezing it.
3. Run `./scripts/sync-sprinkler-assembly.ps1`. Existing staged versions are hash-protected against silent replacement.
4. Run `./scripts/render-sprinkler-scene.ps1 -Scene HG-02 -Version v1` to review that scene with one second of surrounding context. Noncontiguous uses produce separate excerpts.
5. Review the motion, cut and overlays. Asset approval does not imply editorial or overlay completion. Render the full assembly only at an integration checkpoint.

No composition edit is needed for a new media delivery. A new procedural mechanism still requires implementation. The first prototype is `four-parts`: one persistent drawing over cues 26–33, not eight separate scenes. Its v2 visual treatment and timing were approved by the owner on 6 Sep 2026 (`assembly-review/four-parts-v2-1.mp4`). This scene approval does not promote it into the canonical object library.

Checks: `node --test scripts/production-manifest.test.mjs`, `npm run lint`, `npm run build`.
Both opening anchors are approved; their animations remain pending. No paid generation was launched during this refactor.
