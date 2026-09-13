# Episode production playbook

This is the mandatory build-session guide for new Hidden Systems episodes.
Detailed strategy, Pilot 01 history and experiments remain available elsewhere,
but are not prerequisite reading unless the current task depends on them.

## Targets

- Interim Episode 02 ceiling: approximately 12 owner-hours.
- Mature operating target: approximately 8 owner-hours per episode.
- Record owner attention, agent work, machine waiting, corrections and retries
  separately. Do not infer owner cost from render duration or account usage.
- If the story cannot fit the episode budget, rescope the story rather than
  adding tooling during production.

## Authority order

1. The approved final voice-over is the timing authority.
2. The episode manifest owns scene placement, assets and approval state.
3. Derived cue and status files are views of those authorities, not independent
   documents to edit.
4. `docs/06-handoff/decision-record.md` owns durable project decisions.
5. The latest `coordination/HANDOFF.md` entry owns the immediate operational
   handoff. Active claims matter only when concurrent writing is underway.

## Episode budget

Use these as planning gates, not inflexible correctness rules:

- No more than four novel generated-media units without an explicit rescope.
- No more than two genuinely bespoke scene systems without an explicit rescope.
- Prefer twelve or fewer scene systems for a standard episode.
- Generate motion only when the brief names an indispensable organic action.
  Otherwise use a still, existing asset or deterministic Remotion treatment.
- Approve a generated source's visual identity and framing once. Do not create a
  separate motion approval unless motion itself carries the beat.

## Working sequence

### 1. Topic and package — target 2 hours

- The subject must be touched, opaque and packageable.
- Produce five materially different rung-three title candidates, not a large
  volume of minor variations.
- Define the thumbnail moment and the first eight seconds before drafting.
- Begin thumbnail testing with strong rendered frames. Allow one bespoke image
  when the available frames are genuinely weak.
- vidIQ and other automated scores are diagnostic only; they are not gates.

### 2. Script and voice-over — target 2.5 hours

- Preserve the Hidden Systems viewer contract and dry voice.
- Mark intended visual state changes while drafting rather than recreating them
  later in a separate shooting-script exercise.
- Approve the script and narration performance before detailed animation timing.
- Retakes remain allowed when performance is wrong; animation must not begin
  against provisional narration.

### 3. Timing and breakdown — target 0.5 hour

- Transcribe the locked narration and align markers to actual words.
- Use the established three-frame visual lead as a default, then review it rather
  than assuming every cue needs the same editorial adjustment.
- Maintain one editable cue authority. Spreadsheets, TypeScript modules, shooting
  scripts and status reports should be derived views when tooling permits.
- Components should consume scene-relative beat offsets rather than copied
  absolute frame numbers.

### 4. Assets — target 1.5 hours

- Reuse approved diagrams, cels, props, generated plates and visual patterns first.
- Draw the episode's mechanism once as a named-group SVG when several scenes need it.
- Keep large source media and renders local; commit decisions, manifests, small
  anchors, measurements and reproducible source code to GitHub.

### 5. Scene build and review — target 3.5 hours

- Give each cue one dominant informational action.
- Declare named `text`, `action` or intentional `fullFrame` regions before placing
  typography.
- Review a contact sheet before watching the scene clip. The sheet should show at
  least cue entry, text maximum and cue exit with safe regions visible.
- Use concise defect labels: `late`, `early`, `collides`, `clips`, `unreadable`,
  `static`, `wrong`.
- After two revisions of the same defect class, repair the shared primitive or
  layout rule instead of continuing scene-local nudges.
- Approve bounded changed scenes before rendering a new master.

### 6. Master, sound and QA — target 2 hours

- Render one master after its component scenes are approved.
- Watch once without sound for visual clarity and once audio-first for pacing.
- Verify framing, text/action separation, asset presence, cue coverage, audio and
  stream properties.
- Add restrained sound from a small reusable set after picture lock. Expand that
  set only when repeated use is demonstrated.
- Publication remains an owner decision.

## Reuse rule

Promote a scene treatment into a reusable primitive on its second real use, not
when it is merely imaginable. Likely candidates include stamp interruption,
plate with lens, exploded cutaway, travelling-front activation, field reveal,
categorical scale, ratio comparison and quiet macro close. Do not build the full
catalog in advance.

The Observer cel library and diagram-layer research are available resources, not
mandatory spines. Use them when they solve the beat more cheaply and clearly than
another treatment. Do not extend either library without a demonstrated episode need.

## Coordination

- One agent is the episode's integration owner and writes the shared production
  state.
- A second model normally reviews artifacts and raises uncertain observations as
  questions; it does not independently rewrite the same scene.
- Always read and append the compact handoff.
- Use `coordination/claims.json` only when more than one writer is active. In that
  case, partition by movement or exact path and use separate worktrees.

## Stop conditions

Pause and rescope when any of these occurs:

- the plan exceeds four novel generated units or two bespoke scene systems;
- the same defect survives two revisions;
- narration changes after cue timing begins;
- a second full master is requested before bounded scene defects are resolved;
- the owner-time log shows the 12-hour ceiling cannot hold.

Episode 02 is the first measured test of this playbook. Its time log, rather than
the reconstructed Pilot 01 estimate, determines the next tooling investment.
