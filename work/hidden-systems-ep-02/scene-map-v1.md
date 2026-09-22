# Episode 02 — scene map v1

**Working title:** *Trump's Escalator Stopped. These 4 Didn't.*
**First-act implementation note (2026-09-22):** The owner supplied a new 24.54-second opening with the generated boast and narration through “The machine read it as danger.” This supersedes P00–S02 below. The first-act frame authority is `timing-v2/first-act-cues.json`; the review export is `assembly-review/ep02-first-act-v2-final-review.mp4`. The four slots are bright rounded pills, present before the first incident is named; the Everyman bridge plays as video; the side cutaway now uses animated mechanism highlights and ends on a Hong Kong card. The table below remains the planning map for the full film.
**VO:** `escvofinal.mp3`
**Measured VO duration:** 334.811 s / 5:34.81
**SHA-256:** `7ed85d0ff4a00600f39b9cf3ed62fc3948c1c40f17022a6fff921f6c5f5a4bde`
**Opening pre-roll:** generated line `This is the best escalator, believe me`; exact trim pending.
**Timing status:** section-level planning map. The timecodes below are VO-relative and do not include the pre-roll. They are close estimates from the locked script and measured runtime; they are not frame authority until the VO has word timestamps.

## Register decision

Use three registers, with Remotion compositing allowed over the first two:

- **GEN / illustrated reality:** generated Midnight Everyman / UPA-style animation for real places, people, atmosphere and the last safe human action.
- **GHOST / consequence diagram:** deterministic SVG replacement-cel animation built in Remotion. Anonymous safety-manual figures show position, direction and load, never injury.
- **AUTOPSY / mechanism:** deterministic Remotion for the exact component, failure chain, state colour, labels and successful counterfactual.

The ghost register should **not** be generated video. It needs exact foot placement, repeatable poses, clean holds and mechanically timed transitions. Building it once as a Remotion pose system makes all four incidents consistent and reusable.

## Scene map

| ID | Approx. time | Narration / dramatic job | Picture | Build |
|---|---:|---|---|---|
| P00 | Pre-VO | Generated boast: “This is the best escalator, believe me.” | Use the approved opening of `trump-escalator-opening-approved-v2.mp4`; let the stop land, match to `trump-escalator-freeze-v1.jpg`, then begin the narrator immediately. The former `opening-candidate-v1` is the wrong generation and is superseded. | **GEN with source audio** |
| S01 | 0:00–0:05 | Trump at the United Nations | Hold the supplied freeze frame under the opening factual sentence with a gentle centred 100%→108% push | **REMOTION on freeze frame** |
| S02 | 0:05–0:19 | Cameraman may trip the top safety mechanism; sabotage vs danger | Continue the controlled freeze-frame crop. A sparse Remotion callout moves attention from the cameraman toward the upper safety mechanism; land on the stopped-machine state at “danger” | **REMOTION on freeze frame** |
| S03 | 0:19–0:22 | “It stopped, as designed.” | Freeze the stopped machine; teal `SAFETY TRIP` stamp lands. No new footage | **REMOTION over held GEN frame** |
| S04 | 0:22–0:26 | “Here are four that did not” | Four equal vertical incident slots draw into the paper frame together. All begin blank | **REMOTION** |
| S05 | 0:26–0:31 | Hong Kong preview | Slot 1 fills upward in 8–10 frames and reveals `HONG KONG · 2017`; other slots remain blank | **REMOTION** |
| S06 | 0:31–0:35 | Rome preview | Slot 2 fills upward with a different muted tint and reveals `ROME · 2018`; Hong Kong stays visible but subdued | **REMOTION** |
| S07 | 0:35–0:38 | Moscow preview | Slot 3 fills upward and reveals `MOSCOW · 1982`; the wipe lands firmly on “crushing nightmare” | **REMOTION** |
| S08 | 0:38–0:42 | China floor-plate preview | Slot 4 fills upward and reveals `JINGZHOU · 2015`; all four slots are now complete | **REMOTION** |
| S09 | 0:42–0:47 | Four accidents / four protections | The four completed slots lock into one unit. `4 ACCIDENTS` lands first; `4 PROTECTIONS` replaces it. Hold, then cut cleanly to Everyman | **REMOTION** |
| S10A | 0:47–0:53 | “An escalator looks like a staircase, but it is more like a bicycle chain” | Use the recovered Everyman escalator clip with its source audio muted. Let the familiar public machine and human scale carry “looks like a staircase” | **GEN** |
| S10B | 0:53–1:12 | Strip away the shell; continuous chain; detectors, switches and brakes | On “bicycle chain,” match the visible step edges into the canonical side cutaway. Peel away the shell, reveal the hidden return run, trace the step chain and introduce three protective layers one at a time | **REMOTION CUTAWAY** |
| S11 | 1:12–1:32 | Hong Kong: crowd, chain break and reversal | Crowded mall escalator rises normally. First backward jolt is the threshold cut | **GEN + `UP`/`DOWN` overlay** |
| S12 | 1:32–1:37 | People are carried backward; 18 injured | Neutral ghost crowd moves with the descending step band, braces, then freezes before collision | **GHOST in Remotion** |
| S13 | 1:37–2:07 | Slack detector, sticky grease, two springs and the nut | Chain parts; expected slider travel; actual stalled slider; grease drags; one spring is clamped. End on `CHAIN SNAPPED / SLIDER NEVER MOVED` | **REMOTION AUTOPSY** |
| S14 | 2:07–2:22 | Rome: football crowd descends and the steps speed up | Rome station architecture and supporters. Stop the illustrated action when riders first lose balance | **GEN + restrained speed trace** |
| S15 | 2:22–2:29 | Pile-up begins; more than twenty injured | Ghost crowd compresses toward the landing, then freezes with clear empty space before impact | **GHOST in Remotion** |
| S16 | 2:29–3:08 | Service brake, two emergency wedges, cable ties and half a brake | Show the service brake weak, then two wedges: one travels, one remains physically tied back. The failed wedge stays in its rest pose | **REMOTION AUTOPSY** |
| S17 | 3:08–3:17 | Moscow: damaged step trips the motor | Long 1982 Soviet escalator; one step rides wrong; trip hits and the motor goes dark | **GEN + tracked step ring / `MOTOR OFF`** |
| S18 | 3:17–3:42 | Load keeps driving downhill; brakes fail; 110 seconds; casualties | Ghost figures continue downhill despite the dark motor. Increase step cadence in two discrete stages; freeze before the lower landing | **GHOST in Remotion** |
| S19 | 3:42–4:02 | New brakes adjusted from the wrong manual; emergency brake fails | Split-screen `MACHINE FITTED` vs `MANUAL USED`; insufficient torque; emergency brake remains unlatched | **REMOTION AUTOPSY** |
| S20 | 4:02–4:04 | “China needed no hidden defect.” | Wipe the machinery away until only an ordinary landing floor remains | **REMOTION transition** |
| S21 | 4:04–4:36 | Jingzhou: mother and child approach; covers and defect explained | Department-store landing. Keep mother and child warm and ordinary; lightly outline the cover boundary only when named | **GEN + overlay** |
| S22 | 4:36–4:51 | Inspection omission; staff see the plate move five minutes earlier | Separate earlier moment: staff member sees the plate lift. A five-minute clock starts; escalator continues | **GEN + REMOTION clock** |
| S23 | 4:51–5:04 | Plate flips; mother pushes child to solid floor; “He was safe” | Continue only through the protective act. End on the child safely on the landing. Hold that exact frame | **GEN** |
| S24 | 5:04–5:09 | “She perished”; machine still carried passengers after warning | Colour drains from the held safe frame to paper. Empty mechanism diagram shows the cover flipping; no body. Five-minute clock lands | **REMOTION AUTOPSY** |
| S25 | 5:09–5:17 | Trump callback: abrupt, public, inconvenient; it stopped | Return to the stopped UN escalator. Teal trip mark remains; everything else is neutral | **Held GEN frame + REMOTION** |
| S26 | 5:17–5:34.81 | Backups catch failures; final thesis | Four failed components appear coral one at a time, then resolve to one successful teal stop. End on the stopped step band, not an outro card | **REMOTION** |

## Four-slot opening sequence

- Slots share one baseline, equal widths and narrow paper gutters.
- They are genuinely blank at first: no city abbreviations, flags, icons or
  miniature incident footage.
- Each upward wipe reveals only `CITY · YEAR`. The later full scenes own the
  accident imagery and explanation.
- Use four distinct muted tints, avoiding the solid semantic mustard, teal and
  coral reserved for mechanism state later in the film.
- Completed slots fall to roughly 70% intensity while the currently narrated
  slot remains full strength.
- After the fourth reveal, hold the full four-column composition briefly, then
  cut cleanly to the recovered Everyman escalator shot.

## S10 machine reveal

Use a **side cutaway**, not an exploded view. The generated Everyman shot first
establishes the familiar public machine; the cutaway then reveals its hidden
continuity — the visible stairs keep moving beneath the floor and return upside
down.

| Approx. VO time | Spoken idea | Visual action |
|---:|---|---|
| 0:47–0:53 | “looks like a staircase … more like a bicycle chain” | Cut from the completed slots to the recovered Everyman escalator clip; mute its source audio |
| 0:53–0:59 | “bicycle chain / strip away the outer shell” | Match the generated step edges into the side cutaway; balustrade and cladding slide away; top and bottom sprockets appear |
| 0:59–1:04 | steps loop and return underneath | Extend the four steps into a full continuous band; trace one mustard direction path around the loop |
| 1:04–1:09 | detectors, switches and brakes | Introduce three protection markers sequentially, at the narrated phrase rather than all at once |
| 1:09–1:12 | each layer catches the previous failure | Pull back just enough to show the complete machine and align the three layers as a simple hierarchy |

Keep the machine spatially intact throughout. Later incident autopsies can push
into individual components; this first explanation should teach the audience
where everything lives. The supplied infographic is useful for topology only.
Use the canonical grouped mechanism asset for geometry and remove labels as soon
as their narrated job is complete.

## Generated-animation order

Do not generate the cold-open previews separately. The four-slot Remotion
sequence replaces them.

1. **G01 — Trump / UN stop:** 8–10 s.
2. **G02 — Everyman escalator bridge:** existing 10.042 s clip,
   `source-media/generated/everyman-escalator-bridge-v1.mp4`, SHA-256
   `2b3fd1c2e99f4cfc8f1ebf93d4ba5f0b5ed3457b4e4320bf0f6374cfdaddc3ea`.
3. **G03 — Hong Kong crowd and first reversal jolt:** 12–16 s.
4. **G04 — Rome descent and first loss of balance:** 10–12 s.
5. **G05 — Moscow damaged step and motor trip:** 8–10 s.
6. **G06 — Jingzhou approach and cover explanation:** 10–12 s.
7. **G07 — Jingzhou earlier warning with staff:** 6–8 s.
8. **G08 — Jingzhou protective act, ending on child safe:** 8–10 s.

This is eight generated source clips, two of which already exist: the Trump cold
open and the Everyman bridge. The ghost system replaces four bespoke ghost
generations and gives us cleaner timing, greater consistency and lower revision
cost.

## Ghost visual system v1

### The look

Use a **midcentury industrial-safety cutout**, not a literal stick figure and not a translucent supernatural ghost.

- Perfect circular head; no face, hair or costume.
- Tapered torso and solid tapered limbs with rounded ends; no fingers.
- `inkMute #7C7566` outline, 7–9 px at 1080p.
- `reference #C9C1AC` fill at roughly 55–65% opacity over paper.
- A single offset registration echo may trail fast movement by 3–5 px. It disappears on the hold.
- People remain neutral. Mustard belongs to motion, coral to the failed component, teal to a protection that works.
- Use signage proportions and two or three body-height variants so a crowd reads as people without becoming characters.

### Motion

- Animate on twos inside the 24 fps composition.
- Replacement poses, not rubber-hose limbs: `upright`, `brace`, `lean`, `reach-for-rail`, `held`.
- A foot anchor stays locked to the step. Whole-body position follows the step band; pose swaps communicate acceleration.
- Pose changes land in 6–12 frames and stop dead.
- At the harm boundary, the figure freezes while the mechanism or direction arrows continue. Never ragdoll, collapse, deform or enter machinery.
- For crowds, animate five foreground figures with pose variation; background figures can be simplified repeats with staggered phase.

### Register transitions

1. **Illustration → ghost:** match the step edge and body centre. Over six frames, drain the generated colour, replace the person with the neutral cutout, and simplify the environment to floor/step datum lines.
2. **Ghost → autopsy:** hold the ghost. Push toward the implicated component; ghost fades to 20% while the component remains registered and gains the semantic state colour.
3. **Counterfactual:** replay the same geometry. The ghost follows the same approach, but the device trips teal and stops the mechanism before the threshold.

### First style proof

Build only the Hong Kong handoff first:

- final safe illustrated frame;
- first ghost frame matched to it;
- six-frame colour-drain transition;
- backward step-band motion with five foreground ghosts;
- freeze before collision;
- push into the chain detector autopsy.

Approve this 8–10 second proof before building Rome, Moscow or Jingzhou ghost scenes.

## Immediate next production step

1. Word-align `escvofinal.mp3` and replace the approximate ranges with cue-locked frames.
2. Build one four-pose `GhostFigure` style card plus the Hong Kong transition proof.
3. After that proof is approved, generate G01–G07 one incident at a time and build the matching autopsy immediately after each approval.
