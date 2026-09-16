# Episode 02 generated motion assets — lock v1

**Decision:** locked by the owner on 2026-09-16 after Claude's footage audit.
The existing clips provide sufficient generated coverage in the intended script
positions. Do not generate replacements unless an assembly review identifies a
specific uncovered cue.

The video files remain local under `work/hidden-systems-ep-02/generated/` and
are intentionally not stored in Git. This record lets other agents verify the
exact local assets without moving the large files into the repository.

| Unit | Cue coverage | Local file | Bytes | SHA-256 |
|---|---:|---|---:|---|
| G-01 incident setup | 03 | `g01-clean-0-142.mp4` | 2,404,588 | `77ae6de28d6abee2cc3485b8d003504bc818fe902181cc99f26a8039ed2cc0cf` |
| G-02 lace approach | 21 | `g02-cue21-102f.mp4` | 1,780,144 | `561487b8e6fd043030d9a32b337159dc0ff5dd25c371e2d775a11e2e32f9f6cd` |
| G-03 rider setup | 36 | `g03-cue36-79f.mp4` | 1,670,767 | `b01e87eac2a7d1f7fc634b98af971db513192615cb831cda0a4e623cfaadbaa3` |
| G-04 ordinary ride | 67 | `g04-cue67-97f.mp4` | 2,402,042 | `c772fcc2d42c62698efbbbe1ec4b3aee570a3f33f51a44970aea314041462567` |

## Ownership boundary

- Generated plates provide people, cloth, atmosphere and ordinary human motion.
- Remotion provides mechanism, failure state and causal proof.
- G-03 therefore ends before any step deforms; the single rigid step sag is a
  deterministic Remotion beat.
- G-01's reversal, G-02's lace contact and G-04's hidden-device reveal likewise
  remain outside the generative plate where the script requires causal proof.

## Excluded files

- `g01-assembled-proof.mp4` is an assembly proof, not the locked source unit.
- `g03-salvage-0-51.mp4` and `g03-salvage-slowed-79f.mp4` are superseded
  salvage files, not production inputs.
- All G-03 generated ending-frame experiments in `anchor-review/` are rejected
  because they altered the Observer or escalator geometry.

## Next integration step

Place these four clips at their named cues, then run one assembly contact-sheet
review. New generation is not an available repair by default; first repair
timing, crop, transition or the deterministic Remotion layer.
