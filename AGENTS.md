# Project operating instructions

Before changing this project, read `PROJECT.md`,
`docs/04-production/episode-playbook.md`, the latest entry in
`coordination/HANDOFF.md` and relevant decisions in
`docs/06-handoff/decision-record.md`. Read `coordination/claims.json` before
writing when another agent may be active. Use `docs/06-handoff/current-state.md`
only for Pilot 01 history. Before proposing a subject slate or launch, also read
`docs/01-product/subject-selection.md`, `docs/01-product/packaging.md` and
`research/sources.md`.

## Editorial rules

- Treat Hidden Systems as the launch territory and Midnight Everyman as the
  internal production identity and editorial personality.
- Use the internal viewer promise as the editorial through-line: **the hidden
  device that breaks, burns, bends or bites before you do.** The exact verb may
  change; ordinary human vulnerability and an unseen protective mechanism may
  not.
- Require touched, opaque and packageable before a subject becomes
  production-ready.
- Make every episode a self-contained front door. No episode may require a
  previous upload, although playlists and end screens may connect the library.
- Keep the candidate pool separate from the production-ready queue.
- Treat documented cases as prioritization, not eligibility.
- Do not mark a case verified without a literal source, verification date and
  explicit mechanism-relevance judgment.
- Separate verified observations from hypotheses and timestamp changing data.
- Keep cadence undecided until the complete pilot is timed.
- Treat low-sample analytics as directional rather than meaningless. Evaluate
  impressions, traffic source and uncertainty; never use a fixed views-per-day
  threshold as proof.
- Use comments for audience language, emotional resonance and unanswered
  questions, not as proof of recommendation-system behavior.
- Keep launch validation organic. Withhold paid promotion because it answers a
  different acquisition question, not because promotion is assumed to damage
  organic recommendations.
- Preserve the 5–8 minute, 1920 × 1080, 24 fps launch format unless a recorded
  decision explicitly supersedes it.

## Production rules

- Treat the Observer cel system as an available production asset rather than the
  mandatory spine. Use static cels or short pose sequences when they solve the
  beat cheaply; use performance plates only when motion carries meaning.
- Do not revive the skeletal SVG rig unless the user explicitly requests a test.
- Preserve approved character identity and never overwrite an approved cel.
- Use Everyman for reaction, emphasis, human scale and occasional editorial
  counterpoint; mechanisms and information graphics remain the primary screen.
- Use Remotion for whole-cel transforms, staging, camera, props, text,
  transitions, texture and rendering.
- Prefer stepped or held timing and one dominant visual action per beat.
- Production code may import only paired, approved objects from `assets-canon/`.
- Preserve raw licensed packages unchanged under `assets-source/_packages/`.
- Choose the cheapest treatment that communicates the beat convincingly.
- Follow the episode budget, review contract, reuse rule and stop conditions in
  `docs/04-production/episode-playbook.md`.
- Keep one integration owner per episode. Use a second model primarily for
  artifact review unless work has been explicitly partitioned.

## Required verification

- Run `npm run lint` after code changes.
- Run `npm run build` after composition or configuration changes.
- Render representative stills at the beginning, transition and end of each
  new sequence.
- Render the full composition before declaring an experiment complete.
- Visually inspect silhouette, registration, evidence labels and safe framing.
- Record the result and owner, agent and machine time in the episode time log;
  summarize durable findings in `docs/05-experiments/experiment-log.md`.

## Production constraint

Every decision must support an eventual eight-hour weekly production ceiling.
Do not hide bespoke manual repair inside a nominally reusable system.
