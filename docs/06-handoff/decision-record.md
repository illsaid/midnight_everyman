# Decision record

## D-036 - Package Episode 02 on the escalator comb plate

**Decision (14 Sep 2026):** Episode 02 is the escalator comb plate, side brushes
and step chain. Packaging in `work/hidden-systems-ep-02/packaging.md`.

**Reason:** Chosen on proven demand. Jared Owen's "How does an Escalator work?"
(4:59, 2019) holds 19,691,150 views; Zack D. Films' "Why Escalator Steps Have
Grooves" holds 49,274,248 and "Why Escalators Have Brushes On The Side" holds
25,920,694, both under 31 seconds. No long-form treatment of the comb plate or
the brushes was found. Proven subject, unserved depth. Danger is native to this
mechanism rather than bolted on.

**Supersedes:** the working assumption on 14 Sep that Episode 02 should follow
Pilot 01's fire-systems cluster. Cluster continuity lost to demand evidence.

**Status:** Adopted. The Langham Place case was subsequently verified against
the EMSD technical investigation; the Hong Kong government incident summary
also records 18 injuries. See `work/hidden-systems-ep-02/structure-notes.md` and
`elevenlabs-tag-notes.md` for the production-use record.

## D-035 - Select subjects by proven demand, not by absence of coverage

**Decision (14 Sep 2026):** When ranking candidates, ask what has already worked
on the subject and what inside it is unanswered. Do not rank a subject up for
being uncovered. Absence of coverage is weak evidence — a subject may be
uncovered because there is no demand for it.

**Constraint retained:** a channel of this size cannot take a head term from a
multi-million-subscriber incumbent, because the recommendation system will not
serve it there. The target is a proven subject with an unclaimed angle, not a
proven subject copied straight.

**Two open contradictions this raises, recorded so they are not lost:**

1. `subject-selection.md` and `packaging.md` require escalating every rung-one
   title shape. Jared Owen's ordinary-object catalogue never escalates and runs
   2.5M–25M views on literal "How does a [OBJECT] work?" titles. Escalation may
   still be correct for a small channel that cannot win a plain head term, but
   the stated justification is not supported by measurement.
2. D-031 makes the emotional-curiosity contract a danger frame — "breaks, burns,
   bends or bites before you do". On one directly comparable pair, the
   non-danger framing did 10× the danger framing for the same object (Jared Owen
   elevator 7,560,314 vs Cheddar elevator free-falls 722,116), and no video in
   the measured ordinary-object top ten uses a danger frame. Confounded by
   channel size and age; **not** a reversal of D-031. Episode 02's title A/B
   (mechanism vs danger) is the first cheap test of it.

**Evidence:** `research/competitive-landscape-2026-09.md`, measured 14 Sep 2026.

**Status:** Adopted for candidate ranking. Items 1 and 2 are open questions, not
decisions.

## D-034 - Episode 02 lean throughput policy

**Decision (13 Sep 2026):** Use approximately 12 owner-hours as the Episode 02
interim ceiling while retaining eight owner-hours as the mature target. Record
owner attention, agent work, machine waiting, retries and material corrections
separately; Pilot 01's reconstructed 25–37 hours remains ranking evidence rather
than measured cost.

**Scope discipline:** Plan for no more than four novel generated-media units and
two genuinely bespoke scene systems. These are rescope gates, not automatic
quality failures. Generate motion only when an indispensable organic action is
named.

**Packaging:** Develop five materially different rung-three title candidates.
Begin thumbnail development with strong rendered episode frames and allow one
bespoke variant when those frames are weak. This changes the production ritual,
not the requirement that any tested variants differ conceptually.

**Review contract:** Review cue-entry, text-maximum and cue-exit contact frames
with named text/action regions before watching the bounded scene clip. Use the
defect labels `late`, `early`, `collides`, `clips`, `unreadable`, `static` and
`wrong`. After two revisions of the same defect class, repair the shared rule or
primitive rather than continuing local nudges. Approve bounded scenes before a
new master render.

**Reuse rule:** Promote a treatment into a reusable primitive on its second real
use. Do not build the proposed primitive catalog before Episode 02 demonstrates
which patterns recur.

**Coordination:** Keep one integration owner. The handoff remains mandatory;
claims and separate worktrees are required only during concurrent writing. A
second model normally performs adversarial artifact review rather than an
independent rewrite.

**Tooling boundary:** Before Episode 02, build only the minimum that directly
reduces review and restart friction: an episode scaffold and time log, a generic
scene review, a visible safe-region overlay, one cue authority and the concise
episode playbook. Defer the full primitive framework, automated bounds assertion,
asset-intake tooling and sound-kit automation until measured reuse justifies them.

**Authority:** `docs/04-production/episode-playbook.md`.

**Status:** Adopted for Episode 02; validate against its measured phase log.

## D-033 - Sprinkler pilot timing and assembly review

**Decision (5 Sep 2026):** Implement the user-approved sprinkler shooting plan
with its locked `sprinkvo2.mp3` narration, 6738 frames at 24 fps (4:40.75).
This pilot-specific duration supersedes the general 5–8 minute target.

**Decision:** Use the three user-approved FLUX3 clips (HG-01, HG-09, HG-12 v2)
in a complete timed assembly. Label the nine missing source units and unbuilt
Remotion graphics as placeholders. Review the footage against the VO before
commissioning more generated sources. The user approved this assembly plan.

**Scope:** Review footage is staged under `public/sprinkler-assembly/` with source
provenance retained in the pilot folder. It is not promoted into the reusable
approved-object or Observer libraries. Hybrid overlays remain unfinished even
when their underlying source clip is approved.

**Authority:** `work/hidden-systems-pilot-01/README.md` and `cues-v2.csv`.

## D-001 - Faceless production

**Decision:** The channel will not use the creator's likeness.

**Status:** Fixed.

## D-002 - Revenue and workload optimization

**Decision:** Optimize for the strongest plausible revenue from a production system that can reach approximately eight hours per weekly episode.

**Status:** Fixed constraint; not yet validated.

## D-003 - Information compression as initial format

**Decision:** Use information compression as the working format while searching for subjects with broad human-interest tension.

**Status:** Working direction, not a locked niche.

## D-004 - Subject before format mechanics

**Decision:** Topic engagement is more important than imitating a successful visual format. The format should package strong subject matter rather than substitute for it.

**Status:** Fixed editorial principle.

## D-005 - Midcentury commercial visual language

**Decision:** Develop an original limited-animation house style influenced by economical 1950s commercial television and UPA-era design.

**Status:** Approved direction.

## D-006 - Reject skeletal SVG character animation

**Decision:** Do not use a jointed SVG puppet as the principal character representation.

**Reason:** It produced assembled anatomy, weak gesture and insufficient appeal.

**Status:** Rejected and archived.

## D-007 - Use complete replacement cels

**Decision:** Character expression and body mechanics come from complete illustrated poses. Remotion swaps and stages those drawings.

**Status:** Validated for low-motion states by Experiment 01. Partially superseded by D-018 for limited sequences and high-motion actions.

## D-008 - Green screen is an acquisition format

**Decision:** Generate on a controlled chroma background when useful, then convert approved cels to transparent PNGs before production use.

**Status:** Validated.

## D-009 - Contact sheets communicate motion

**Decision:** Use visual contact sheets alongside scene instructions for nontrivial sequences.

**Reason:** A sequence of checkpoints communicates pose, framing and progression more reliably than prose alone.

**Status:** To be validated in the next experiment.

## D-010 - Human quality gate

**Decision:** AI comparisons and scores may identify defects, but arbitrary autonomous ratings do not approve a scene.

**Status:** Fixed.

## D-011 - Delay generalized automation

**Decision:** Do not build a large scene parser or production platform until a real 15-second sequence reveals the repeated abstractions.

**Status:** Fixed for the next experiment.

## D-012 - Format is not the causal explanation

**Decision:** Do not interpret visually similar uploads as evidence that the format itself produces outliers.

**Reason:** “Every Type of Aircraft Engine Explained” substantially outperformed neighboring videos using related presentation, while comparable surface formats produced uneven results.

**Status:** Fixed research principle.

## D-013 - Target the uncommitted scroller

**Decision:** Package subjects for a broad viewer encountering them without prior intent, not only for enthusiasts.

**Reason:** Strong candidates create an immediate human question involving consequence, danger, power, money, hierarchy or another broadly legible stake.

**Status:** Fixed editorial principle.

## D-014 - Preserve uncertainty in outlier research

**Decision:** Treat timing, packaging, operator experience, early distribution, algorithm changes and randomness as confounding variables.

**Status:** Fixed analytical principle.

## D-015 - Working channel premise: "what happens if you use the wrong X"

**Decision:** Adopt *what happens if you use the wrong X* as the working channel premise, and score pilot subjects against it.

**Status:** **Directional. Subject to adjustment.** This is a working direction adopted to give topic selection and library construction a shared target. It is not a locked niche and it is not evidence of anything yet. Nothing has been published. Revisit after the first pilots return real data, and abandon it without ceremony if they do not.

**Editorial reason:** It satisfies all three archetypes in `youtube-subject-research.md` simultaneously - compression, counterfactual and hidden knowledge - which is rare. It also supplies human stake by construction rather than requiring one to be found, which is the dimension most candidates fail.

**Production reason, which is the stronger one:** "Every type of X" costs art in proportion to the length of the list, and the list is the promise, so it cannot be shortened. "Wrong X" is satisfied by a contrast and is bounded at two or three items. The central character beat is also identical every episode - instinctive wrong action, consequence, correction - which is the `wrongMove` to `selfCorrect` pair already in the cel registry. Reuse therefore compounds across episodes rather than plateauing. This is the first structural argument in the project for why a weekly cadence might be achievable.

**Known risks, recorded so they are not rediscovered:**

- Every episode makes a consequence claim, so every episode carries a primary-source burden. The 2.0 h research allocation in `production-workflow.md` is likely light for this premise.
- "What happens" is defensible; "how to cause it" is not. Some territories are demonetised or prohibited regardless of framing, which constrains the subject pool more than it appears.
- The premise is asymmetrically fragile. A channel whose promise is *the thing you believe is wrong* does not survive being confidently wrong in public. Sourcing discipline is load-bearing here, not hygiene.

**Superseded:** Nothing. This narrows `D-003` from a format direction toward a premise; `D-003` remains the broader container.

## D-016 - Format test moved to vertical short-form

**Decision:** Author the next pilot at 1080x1920 for YouTube Shorts rather than 1920x1080 long-form.

**Status:** **Directional. Subject to adjustment.**

**Reason:** A 15-35 second vertical piece is a complete publishable unit rather than a fragment of a hypothetical episode. This replaces extrapolation from an unbuilt 10-minute video with real audience data. `channel-thesis.md` already listed video duration as unresolved, so this sits inside the space deliberately left open.

**Consequence to accept knowingly:** The thesis was written around advertising revenue against weekly long-form. Short-form monetises on a different and substantially lower per-view basis. A successful Shorts test validates a different business than the one originally described, and the revenue model is reopened pending its result.

**Constraint discovered:** The genuinely safe region of a 1080x1920 Short is approximately 1080x1120 once the player's own interface is subtracted - close to square. A Short is not a tall canvas to stage into. Encoded in `src/vertical/ShortsSafeArea.tsx`.

## D-017 - Do not hobble a pilot to protect a benchmark

**Decision:** Build pilots to be as good as they can be, and record the cost split between reused and newly created assets, rather than constraining new art in order to produce a clean marginal-cost number.

**Reason:** A clean benchmark of a deliberately weakened video is worth less than a real video with an honest cost breakdown. The reuse fraction is the figure that predicts steady state, and it can be measured without controlling it.

**Status:** Working principle.

## D-018 - Hybrid three-level character system

**Decision:** Static replacement cels remain the default character treatment. Two-to-four-pose sequences handle limited gestures. Short alpha/chroma performance plates handle actions whose meaning depends on body mechanics, locomotion, object contact or physical comedy.

**Selection rule:** Choose the cheapest treatment that communicates the beat convincingly. Continuous performance is not permitted merely to avoid stillness.

**Reason:** The replacement-cel system is deterministic, inexpensive, easy to retime and well suited to information graphics. It becomes animatic-like when forced to represent weight shift, gait, follow-through or hand/object contact. Performance plates solve that narrow problem without transferring charts, typography, camera or composition away from Remotion.

**Workload guardrail:** A provisional eight-to-ten-minute episode may contain 35–50 static appearances, 8–12 limited cel sequences and 3–6 performance plates. These ranges are diagnostic, not quotas. An episode requiring twenty bespoke plates fails the production model.

**Status:** Superseded in part by D-020. Static cels and limited sequences remain canonical; routine performance-plate use and the provisional plate allocation are withdrawn.

**Supersedes:** D-007 only where it implied that all character body mechanics must come from complete static poses. Complete replacement cels remain validated and canonical for low-motion states.

**Canonical reference:** `everyman_bible_v2/AMENDMENT-v2.1.md`.

## D-019 - Supplied graphics packages are licensed source canon

**Decision:** Treat `mcm_furniture_ccgraphics`, `Retro_Kitchen_CCGraphics` and `SVG.MidCentury` as licensed and creatively approved source canon based on the user's explicit confirmation.

**Consequence:** Do not repeat licensing or aesthetic approval during routine intake. Normalization into `assets-canon/` remains required only to enforce deterministic filenames, palette roles, geometry, metadata and production imports.

**Status:** Fixed unless the user revises it.

## D-020 - Reusable pose library is the production default

**Decision:** Build episodes from a semantic library of complete transparent character poses and short pose sequences. Generated character video is an occasional exception, not a production dependency, quota or critical path.

**Reason:** The generated-motion workflow forces the character clip to precede set construction, introduces unpredictable staging and cleanup, and undermines the automation goal. Complete cels remain deterministic, reusable, easy to retime and visually acceptable in the intended limited-animation language.

**Library target:** Maintain approximately 20-30 broadly reusable, clearly labeled poses. Promote candidates only after the human quality gate. Treat dynamic drawings such as run and jump as expressive key poses until action packs are deliberately built around them.

**Status:** Canonical architecture. All 24 semantic poses were approved by the user on 2026-08-14. The first two action packs are registered and rendered.

**Supersedes:** D-018 only where it treated performance plates as a routine third production tier or suggested a per-episode plate allocation. Static cels and limited cel sequences remain canonical. Generated video remains available for exceptional actions.

**Canonical reference:** `everyman_bible_v2/AMENDMENT-v2.2.md`.

## D-021 - Systems graphics are the primary screen language

**Decision:** Build narrator-led episodes from mechanism diagrams, state changes, comparisons, decision trees, typography and controlled transitions. Use Everyman as a reaction and emphasis marker, not as the principal carrier of scenic action.

**Reason:** Remotion is reliable when spatial relationships are abstract and deterministic. Exact hand/object contact and generated scenic staging create manual repair, weaken automation and make the set depend on the character performance. Experiment 07 communicated the same human-interest story without that dependency.

**Production consequence:** A stable composition consumes final voiceover timing and a scene manifest. Complex mechanisms are reduced to flow, state, contrast and decision graphics. Scenic shots remain available only when they add information that the system view cannot.

**Status:** Canonical pilot architecture, validated by the 63-second wrong-fuel systems render. Transfer speed remains unvalidated until a second topic is produced.

**Supersedes:** The immediate `hold-nozzle` cold-open milestone from Experiment 06. It does not supersede the replacement-cel library; it narrows the library's role.

## D-022 - Effects must carry information and remain bounded

**Decision:** Use effects to mark selection, impact, travel, state change and consequence. Keep continuous full-frame surfaces in native HTML, SVG or CSS. Reserve WebGL effects for short transitions and impact moments that survive a complete production render.

**Reason:** The FX pass materially improved visual energy without adding scenic blocking, new character art or manual retiming. However, a persistent three-effect WebGL surface passed isolated stills and failed under sustained rendering. A native replacement preserved the look and completed all 1,518 frames while bounded light-leak and starburst effects remained stable.

**Production consequence:** Every effect needs a semantic trigger and a finite duration. Do not stack full-frame shaders as an always-on house-style layer. Maintain a clean composition alongside the FX master so failures and density choices remain easy to isolate.

**Status:** Canonical effects architecture, validated by Experiment 08 and the verified FX master.

## D-023 - Dry humor is part of the canonical voice

**Decision:** Deliver accurate explanations with a restrained comic wink. Use understatement, precise absurdity and occasional Everyman counterpoint rather than frequent punchlines.

**Reason:** The format needs a recognizable human voice so the information does not feel like corporate training or a mechanically generated explainer. Humor supplies personality without weakening compression.

**Production consequence:** Script review includes a humor pass. A 5-7-minute episode should contain a small number of intentional comic beats. Safety instructions and crucial factual claims remain direct and unambiguous.

**Status:** Canonical editorial rule, established by the user on 2026-08-17.

## D-024 - Thumbnails use a three-concept house test

**Decision:** Build three feed-first variants for each scenario episode: A, a text-free visual paradox; B, a controlled comparison using only neutral functional labels when needed; and C, an editorial tableau in which Everyman participates in the situation with a restrained visual joke.

**Reason:** The initial all-time reference scan overrepresented legacy packaging. A corrected scan of recent 2026 breakout explainers favored visually surprising images, restrained comparisons and clean editorial compositions over red arrows, alarm words and pasted-on reaction faces. Channel size and topic still confound reference performance, so the audience must choose through native concurrent testing.

**Production consequence:** Thumbnail creation occurs inside the one-day episode workflow. Red arrows, circles, shocked-face cutouts and shouty `FAIL`/`DANGER` copy are non-default legacy devices. Hold the title constant during initial thumbnail tests, record YouTube watch-time-share results and review the six-episode pattern before fixing a single permanent layout. List or categorical episodes may substitute a clean graphic-inventory concept.

**Status:** Canonical launch-testing system. Specification: `docs/02-creative/thumbnail-system-v1.md`.

## D-025 - Hidden Systems is the launch territory

**Decision:** Launch development will focus on familiar engineered mechanisms
that protect ordinary people when something fails. The constant is the kind of
curiosity — a touched but opaque mechanism — rather than one industry.

**Status:** Canonical product direction, unvalidated by publication.

**Supersedes:** D-015 as the launch premise. “Wrong X” remains useful R&D and a
possible future swing format.

## D-026 - Launch product is horizontal long-form

**Decision:** Build the initial publishable product at 1920 × 1080 for a 5–8
minute runtime. Shorts may be derived from completed long-form assets but are
not the primary product.

**Reason:** Two verified channels demonstrate that purpose-built horizontal
systems explanation can sustain an audience. The evidence does not establish
that long-form beats Shorts; this is a reasoned production-model choice.

**Status:** Canonical format decision.

**Supersedes:** D-016.

## D-027 - Retain 24 fps

**Decision:** Keep 24 fps as the canonical project frame rate.

**Reason:** The existing components and verified proof use 24 fps. The later
30 fps specification was conventional rather than evidence-based and would add
retiming risk without improving the editorial proposition.

**Status:** Canonical until a concrete motion or delivery requirement warrants
a recorded change.

## D-028 - Three production-readiness gates

**Decision:** Touched, opaque and packageable are the three hard gates. A
selected rung-three title, thumbnail moment and opening visual are required for
packageability.

**Decision:** Documented incidents are not gates. Record case strength, evidence
state, literal source, mechanism relevance and verification date separately.

**Status:** Canonical editorial workflow.

## D-029 - Cadence remains undecided

**Decision:** Do not set publication cadence from competitor observation. Time
the complete pilot and use owner hours, reuse fraction and correction burden to
set a provisional cadence.

**Status:** Open measurement.

## D-030 - One canonical repository

**Decision:** The Midnight Everyman repository is the canonical project. It
contains both the Hidden Systems editorial system and the existing production
architecture. The separate Hidden Systems research folder becomes a migrated
source snapshot and must not evolve independently.

**Canonical path:** `C:\Users\dicku\Videos\midnight-everyman`

**Status:** Canonical organization decision.

## D-031 - One emotional-curiosity contract

**Decision:** Hold every launch episode to the internal viewer promise: **the
hidden device that breaks, burns, bends or bites before you do.** The exact
mechanism and industry may vary; ordinary human vulnerability, an unseen
protective intervention and visual causal explanation may not.

**Decision:** Every upload must be self-contained. It may connect to playlists,
end screens and adjacent episodes after delivering its own complete promise,
but it cannot require channel history for comprehension.

**Reason:** Mechanism taxonomy alone produces information without pathos. The
stable audience proposition is the experience of discovering what silently
protects ordinary life.

**Status:** Canonical editorial contract.

## D-032 - Organic and scale-aware launch validation

**Decision:** Keep the pilot and initial audience-learning block organic. Do not
use paid promotion to validate organic packaging or recommendation fit. This is
an experimental boundary, not a claim that paid promotion damages organic
recommendations.

**Decision:** Use no fixed views-per-day threshold for analytics. Interpret
click-through rate by impressions and traffic source, treat small samples as
directional, use native concurrent thumbnail tests, and mine comments for
language and questions rather than recommendation-system causality.

**Decision:** Defer an owned-audience product until repeated audience behavior
reveals a specific recurring value worth subscribing to.

**Status:** Canonical launch-learning policy. Revisit after the six-episode
review.
