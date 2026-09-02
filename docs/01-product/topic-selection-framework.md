# Topic selection framework

## Purpose

Manage two distinct states:

- **Candidate pool:** subjects passing touched and opaque
- **Production-ready queue:** candidates with a selected rung-three title,
  thumbnail moment and opening visual

The canonical ledger is `../../content/candidates.csv`.

## Hard gates

1. **Touched:** the viewer has used, stood in or depended on it.
2. **Opaque:** a reasonable viewer cannot sketch the mechanism roughly.
3. **Packageable:** the subject has a selected rung-three title, thumbnail
   moment and opening visual that make the same honest promise.

Reject misleading promises, unavailable source material and mechanisms whose
visual burden clearly breaks the production ceiling.

## Priority fields

Hard gates determine eligibility. These fields rank eligible work:

- Case strength and evidence state
- Mechanism relevance
- Human stakes
- Visual inventory and expected reuse
- Cluster value
- Competitive opening
- Source burden
- Revenue compatibility

A documented incident is not a hard gate.

## Packaging record

For each production-ready subject, record:

- Twenty working title candidates outside the ledger
- `title_selected_rung3`
- `thumbnail_moment`
- `opening_visual`
- Three materially different thumbnail concepts in the episode brief

Do not set `gate3_packaged=yes` unless the literal fields are populated.

## Case record

Keep evidence state separate from narrative usefulness:

- `case_strength`
- `case_evidence_state`
- `case_detail`
- `case_source`
- `mechanism_relevance`
- `case_verified_date`

An incident can be real while its link to the episode mechanism is weak. Both
claims require review.

## Pilot rule

Before the first build:

- Maintain at least 12 touched-and-opaque candidates.
- Fully package three.
- Select one for the full timed pilot.

After publishing begins, maintain at least 12 candidates and three
production-ready subjects. If the candidate pool drops below 12, pause and
rebuild it. If the ready queue drops below three, package candidates before
starting another build.

## What the framework cannot do

It ranks tests; it does not forecast views. The gates are necessary, not
sufficient. The measured 865-median comparison channel contains many subjects
that pass touched and opaque. Packaging, execution, cadence, distribution and
variance remain material.
