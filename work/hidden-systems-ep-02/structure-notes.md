# Episode 02 — structure notes

Owner beat sheet received 14 Sep 2026. Script draft:
`script-v1-vo-v3.txt`. This file records what was verified, what changed and
what still needs an owner decision. Supersedes the scope in `packaging.md`,
which was written for a comb-plate-only episode.

## Verified against sources

Every device named in the beat sheet is a real, standard escalator safety
device. Checked 14 Sep 2026 against an EN 115-1 device summary
([elevator.tr glossary](https://www.elevator.tr/en/glossary/escalator-safety-devices)) —
a **secondary** source; EN 115-1 itself was not read.

| Device in the beat sheet | Status |
|---|---|
| Comb plate impact device | Real. Mechanical deflection or pressure sensor under the comb plate |
| Skirt obstruction switch | Real. Stops the unit if something lodges between step and skirt |
| Step level / anti-reversal | Real |
| Missing step device | Real |
| Step chain and drive chain devices | Real, and distinct from each other |
| Overspeed governor | Real. **Trips at 20% above nominal speed** — used in the script |
| Operational vs auxiliary brake | Real distinction; the source does not classify them, so the script says "on bigger machines" rather than asserting a threshold |

## The case — verified, and it is the thesis

**Langham Place, Hong Kong, 25 March 2017.** EMSD technical investigation.

1. The main drive chain broke — metal fatigue.
2. The broken drive chain device, whose only job is to catch that exact fault,
   failed to actuate the auxiliary brake.
3. Why it failed: the mechanism was impaired by sticky grease from accumulated
   oil and dust, **and one of its two compression springs had been locked by a
   nut**, cutting spring force by roughly half, so the guide shoe could not
   extend.
4. With no drive and no auxiliary brake, the escalator reversed downward under
   the weight of the passengers on it.

Source: [EMSD press release](https://www.info.gov.hk/gia/general/201706/09/P2017060900449.htm)
and its linked full report. `case_evidence_state: verified`,
`mechanism_relevance: direct`, verified 2026-09-14.

This is not a generic accident. It is a documented instance of the beat sheet's
own closing argument — the fault found the next layer absent, and the reason was
old grease and one nut.

**Verification update (14 Sep 2026):** This caution is superseded. The Hong Kong
government incident summary records 18 injuries, three requiring hospital
treatment. Script v3 therefore uses "Eighteen people are injured." The mechanism
finding remains grounded in the EMSD technical investigation.

## Three things needing an owner decision

### 1. Length — the beat sheet's word target is based on the wrong rate

The brief specifies ~700–725 words at 145 wpm for 5:00. Pilot 01's locked VO is
723 spoken words over 4:41, which is **154 wpm measured**, not 145. At 154, a
5:00 episode is 770 words, not 725.

The draft is **804 spoken words → 5:13** at the measured rate. That is inside the
5–8 minute launch format (D-026) and 43 words over a true 5:00.

The honest position: four failure modes, each with setup, mechanism and
protection, plus the reveal, the case and the close, do not fit in 725 words.
**Recommend accepting 5:13.** If 5:00 is firm, the cut should be failure three
(step level) — it is the only one of the four with no demand evidence behind it.

### 2. Title — it abandons both proven angles

`How Escalators Go Horribly Wrong` is a full-strength danger frame. The evidence
gathered the same day (`research/competitive-landscape-2026-09.md`, D-035) says:

- Same object, directly comparable: Jared Owen's plain mechanism framing
  7,560,314 views vs Cheddar's danger framing 722,116. 10×.
- The two escalator questions with proven demand are both mechanism questions —
  "Why Escalator Steps Have Grooves" (49,274,248) and "Why Escalators Have
  Brushes On The Side" (25,920,694).
- Secondary risk: "Horribly Wrong" promises incidents. The episode delivers
  mechanism. Flat animation cannot pay off an incident promise.

Worth noting the proven Shorts carry menace in the *thumbnail and emoji*, not in
the title grammar — "😯", "(important)". Mechanism question, implied threat.

**Recommend keeping it as the danger arm of the A/B** rather than dropping it,
with `Why Escalator Steps Have Grooves` as the mechanism arm. That is exactly the
test D-035 asks for, it costs nothing, and the episode's first 90 seconds deliver
the mechanism arm's promise regardless of which wins.

### 3. Production budget — inside the gate only if the macro is built once

`episode-playbook.md` caps bespoke scene systems at two. Four failure modes
suggests four. It fits only under this constraint:

| Beat | Treatment | Source |
|---|---|---|
| Open, crowded runaway | field of figures + accelerating camera | reuse `ActivationScene` stress/drift |
| Machine reveal | strip-away to step chain in section | reuse `CeilingRevealScene` + `IndependenceScene` |
| Failure 1, comb plate | **quiet macro close — BESPOKE #1** | new |
| Failure 2, skirt gap | quiet macro close — **same primitive, second use** | reuse #1 |
| Failure 3, step tracks | **track section — BESPOKE #2** | new |
| Failure 4, drive train | exploded labelled assembly | reuse `FourPartsScene` |
| 4:05 protections assembled then removed | categorical colour, extinguished one by one | reuse `ColourCodeScene` |
| Close | Observer walking past, each device highlighted | reuse Observer cels |

Two bespoke systems, not four — **provided the quiet macro close is built as a
reusable primitive and used for both failure one and failure two.** That is
precisely the playbook's "promote on second real use" rule, and "quiet macro
close" is already on its candidate list.

Novel generated units: 3 — concourse plate, comb macro plate, drive-machine
plate. Gate is 4.

**Carry the M03 lesson.** `IndependenceScene` drew 300 heads at ~20px and read as
texture, not objects — the documented cause of the "dull" note. The step chain is
the same trap. Draw 12–18 large steps and let the loop imply the rest.

## Factual points still open

- **Step count.** The beat sheet says "forty moving platforms". Step count varies
  with rise and the claim was not verified, so the script says "every step you
  can see, and as many again below you that you can't" — true by construction for
  a closed loop, and needs no number. Restore a number only if sourced.
- **"Fifty people"** in failure four is illustrative, not sourced. Acceptable as
  framing; do not present it as a figure.
- EN 115-1 was read only through a secondary glossary. If any device claim goes
  on screen as an evidence label, get it from the standard.
