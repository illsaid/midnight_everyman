# Two-agent protocol — Midnight Everyman

Operating rules for more than one AI agent working on this repository.
Written to be handed to **either** agent verbatim as its instructions.

**Normal mode:** one integration owner writes; another model may review artifacts.
The handoff log remains mandatory. Claims and worktree partitioning activate only
when more than one writer is working concurrently.

---

## The actual problem

It is not that the agents cannot talk. It is four specific failure modes, all of which
have already nearly happened in this project:

| Failure | What it looks like | Real example |
|---|---|---|
| **Clobbering** | Two agents edit one file; last write wins silently | Three `.tsx` files were edited on 10 Sep while nine new scene components were being built in another session. Nothing overlapped — by luck, not design. |
| **Stale reads** | An agent acts on a snapshot hours old | `STATUS.md` reported 65% unbuilt when the true figure was 32%. |
| **Duplicate work** | Both build the same thing | Two `ColourCodeScene` implementations. |
| **Contradictory decisions** | One agent decides X, the other specs not-X | A four-track music bed was specced, then a no-music decision was taken. |

Prose notes files do not fix any of these. Every setup starts with "leave each other
notes" and ends with a wall of stale text neither agent reads.

---

## Principle: partition, don't schedule

Turn-taking fails because neither agent knows when the other stopped. **Ownership by
directory** removes the question. An agent may write freely inside its domain and must
*request* changes outside it.

### Default split

| Domain | Owns | Rationale |
|---|---|---|
| **BUILD** | `src/`, `public/`, `production-manifest.json`, `scripts/`, all renders | Needs a working shell: `tsc`, tests, `remotion render`. Assign to whichever agent has reliable filesystem and shell access to the repo. |
| **EDITORIAL** | `docs/`, `research/`, `content/`, scripts, titles, thumbnails, packaging | Judgement and evidence work. Runs fine with file access alone. |

Shared, and therefore **append-only for both**: `docs/06-handoff/decision-record.md`.

### Parallel build mode

When both agents are building at once, partition by **movement**, not by file type:
"you take M08–M12, I take the HG plates." One agent per movement, no exceptions. This is
how a crew actually divides, and movements map one-to-one onto components.

---

## Mechanism — three small files, no prose

Follow the pattern already proven twice in this repo: a data file plus a generated view.

### 1. `coordination/claims.json` — when concurrent writing is active

```json
{"claims":[
  {"path":"src/sprinkler-pilot/ColourCodeScene.tsx","agent":"claude","opened":"2026-09-10T16:40Z","note":"M08 build"}
]}
```

**Rules.** Inspect it before writing whenever another agent may be active. Add a
claim when concurrent writing begins; a sole integration owner does not need to
claim every routine edit. Do not write to a path another agent holds — ask
instead. Release your claim in the same turn you finish. A claim older than 24
hours is stale and may be taken after saying so in the handoff.

### 2. `docs/06-handoff/decision-record.md` — append-only

One line per decision that another agent could contradict:

```
2026-09-10 | claude | No music bed on the pilot; minimal SFX only | VO carries the tone; silence at cue 47 needs contrast | supersedes: music-bed.md v2
```

Never edit an existing row. Supersede it.

### 3. `coordination/HANDOFF.md` — append-only, six fields, hard limit

Append one dated entry with: status, changed, verified, did not do, next and
blocked. Never rewrite another agent's entry. Active ownership belongs in
`claims.json`; the handoff is the durable history of completed work.

If it is longer than this it will not be read. That is the whole design.

---

## Freshness — the fix for stale reads

Never trust a committed status file. **Regenerate it.**

Every generated file gets a header stamping the hash of its inputs:

```
<!-- generated_from: cues-v2.csv@a91c3f production-resolved.json@77de10 -->
```

The generator refuses to be believed if the hashes do not match current inputs — print
`STALE` at the top instead of numbers. An agent that reads `STALE` must re-run the
generator before quoting a figure.

This one change would have prevented the 65%-vs-32% error outright.

---

## Rules that apply to both agents

1. **Read the latest `HANDOFF.md` entry before doing anything else. Inspect
   `claims.json` before writing when another agent may be active.**
2. **Never edit outside your domain.** Write the request into `HANDOFF.md` instead.
3. **Never edit a generated file.** Edit its source and re-run the generator. The
   generated files here are `production-resolved.json`, `production.ts`,
   `shooting-script.md`, `STATUS.md`.
4. **Back up before destructive edits.** Copy originals to
   `work/<project>/rollback/<date>-<reason>/` with a `RESTORE.md`. Already the house
   pattern.
5. **Record decisions, not conclusions.** A decision another agent could reverse goes in
   the decision record with its rationale, or it will be reversed.
6. **State what you could not verify.** "Typechecked and rendered" and "wrote the file and
   hoped" are different claims and must read differently.
7. **Do not re-litigate a recorded decision** without adding a superseding row explaining
   what changed.
8. **Keep one integration owner per episode.** A second model normally reviews
   artifacts; it writes only after explicit path or movement partitioning.

---

## The honest recommendation: start with review, not parallel build

Two agents on one repository roughly doubles coordination overhead and rarely returns 2×
throughput. It pays when the work genuinely parallelises — build against research — and
costs more than it earns on a single linear task.

**The higher-value use of a second model is adversarial review, and it needs almost none
of the machinery above.**

One agent builds. The other is handed the artifact — a render, a document, a component —
plus the house rules, and told to find what is wrong with it. Different training, so
different blind spots. This project has already been improved twice by exactly that
pattern, both times by an outside reviewer catching things that had been missed.

Concretely, a review pass needs only:

- the artifact
- the relevant house-rule documents
- an explicit instruction that flatness, the restricted palette and the absence of
  gradients are deliberate and must not be scored as faults
- an instruction to raise anything uncertain as a **question**, never as a finding

Suggested order:

1. **Now:** cross-model review only. No shared writes, no protocol overhead, immediate
   value.
2. **Next:** add `claims.json` and the freshness stamps. Cheap, and they fix the two
   failures that have actually bitten.
3. **Only if throughput is genuinely the constraint:** partition by movement and let both
   build in parallel.
