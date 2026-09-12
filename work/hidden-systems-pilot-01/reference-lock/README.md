# Sprinkler Pilot Reference Lock

**Status: approved for the three-source Higgsfield motion test.** HG-01, HG-09
and HG-12 v2 were approved by the user on 4 Sep 2026.

Update, 6 Sep: HG-02 lighter and HG-03 deluge start frames are also approved.
Their animations are pending. `production-manifest.json` in the pilot root is
the authority for assembly placement and scene/layer completion; anchor approval
alone never marks a motion delivery complete.

This package fixes the visual inputs for the first three source-unit tests. It
does not promote generated artwork into the canonical Observer library.

## Package contents

### Canonical inputs

- `canonical/observer-pose-sheet-v2.png` — identity and wardrobe authority
- `canonical/house-style-set-staging-v4.png` — scenic illustration authority
- `canonical/systems-style-frame-160.png` — palette, typography and paper authority
- `canonical/systems-style-frame-1060.png` — mechanism-graphics authority

### Approved anchor stills

- `anchors/hg-02-lighter-anchor-v1.png` — motion pending
- `anchors/hg-03-deluge-anchor-v1.png` — motion pending

- `anchors/hg-01-cinema-anchor-v1.png`
- `anchors/hg-09-installer-anchor-v1.png`
- `anchors/hg-12-macro-anchor-v2.png` — larger, higher-contrast single bubble

### Superseded candidate

- `anchors/hg-12-macro-anchor-v1.png` — one bubble, but insufficiently legible
  at normal video size

### Generation briefs

- `briefs/HG-01.md` — character and dark-set consistency test
- `briefs/HG-09.md` — character, office-set and multi-span continuity test
- `briefs/HG-12.md` — macro texture and restrained-motion test

### Reproducibility and review

- `anchor-generation-prompts.md` — prompts used for the candidate start frames
- `manifest.csv` — authority and approval status for every packaged asset
- `generation-attempts.csv` — attempt cost and six-dimension review log

## Use order

1. Use each approved anchor as the primary image reference for its motion test.
2. Follow the matching brief without expanding the action or camera direction.
3. Record every attempt, generation minute, cleanup minute and review score in
   `generation-attempts.csv`.
4. Keep the canonical inputs available as secondary identity/style references
   when the selected tool supports them.
5. Generate only HG-01, HG-09 and HG-12.
6. Composite the results over the locked VO before commissioning the remaining
   nine source units.

## Decision gate

Approve the hybrid workflow only if at least two of the three tests pass without
manual character repainting or set reconstruction. A usable result must preserve
identity, remain editable as a plate and add more engagement than the static
fallback described in its brief.
