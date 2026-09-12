# Repository and media policy

GitHub is the shared source of truth for the production system. The local
canonical working copy remains `C:\Users\dicku\Videos\midnight-everyman`.

## Track in Git

- Remotion and utility source code
- production manifests, cue timing, scripts and shot plans
- research data, candidate data and source notes
- decision records, experiment evidence, handoffs and retrospectives
- reusable small PNG, JPG and SVG assets required by the visual system
- tests and deterministic build/sync scripts

## Keep local

- full masters and scene-review renders
- rollback render folders
- downloaded or generated source video and locked narration audio
- model files, virtual environments, caches and temporary QA output

The ignored local media paths are declared in `.gitignore`. Do not use
`git add -f` to bypass them. `production-manifest.json` and the pilot production
index remain the record of what belongs at each local path.

For the sprinkler pilot, the final review master lives locally at:

`work/hidden-systems-pilot-01/assembly-review/sprinkler-assembly-v7-structural.mp4`

The approved runtime media is staged locally under:

`public/sprinkler-assembly/`

A fresh GitHub checkout supports documentation, research, source editing,
linting and most deterministic checks. A full render additionally requires the
local media set. Never describe a clone as render-complete until those assets
have been restored and the manifest check has passed.

## Multi-agent rule

Two writing agents should use separate Git worktrees and branches. If they must
share one working tree, only one is a writer; the other is review-only. Before
editing, every agent reads `coordination/claims.json` and the latest entry in
`coordination/HANDOFF.md`, claims its paths or movement, and avoids claimed
files. A completed unit receives one bounded commit and one handoff entry.

Generated files must be changed through their source and generator. Decisions
that another agent could reverse belong in the append-only decision record.
