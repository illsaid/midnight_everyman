# Packaging brief — thumbnail concepts, pilot 01

**Title (locked):** Fire Sprinklers Don't Actually Work The Way You Think
**Scenario in seven words:** *One head opens. Forty do nothing.*
**Single surprising relationship:** the ceiling is not one system.

Canvas 1280 × 720. Palette: paper `#EEE5CF`, ink `#242622`, coral `#BD4E3D`,
mustard `#D5A84C`, teal `#356F70`. Labels in Courier Prime only.

---

## Correction to my earlier suggestion

I proposed **"NOT THIS"** as thumbnail text before re-reading `thumbnail-system-v1.md`.
That's wrong — it is functionally `WRONG`, which the non-default legacy device list bans
alongside `FAIL`, `DANGER` and `BAD IDEA`. Withdrawn.

The deictic move still survives, but through the sanctioned route: **layout B's neutral
factual labels**, in the `PETROL / DIESEL` mould. Here that is `MOVIES / REALITY` — it points
at the two halves without shouting at anyone.

---

## A — Visual paradox · zero text

An office ceiling seen at a slight upward angle. **One** sprinkler head releases a clean
water cone onto a small fire below. Behind and beside it, forty heads recede in rows, every
one of them sealed, dry and doing nothing.

| Order | Element | Device |
|---|---|---|
| 1st | The single water cone | **Brightness** — near-white teal, the only light value in frame |
| 2nd | The receding grid of dry heads | Size + repetition, ink line on paper |
| 3rd | Coral fire glow, lower edge | Colour, deliberately small |

Three elements. No text. The question it produces before it answers anything: *why is only
one of them on?*

- **Grayscale:** the cone is the only near-white mass — survives.
- **160 px:** the individual heads become a texture, which is fine; the read is "one bright
  thing, many dull things."
- **Risk:** at feed size the dry heads may vanish entirely, leaving a generic sprinkler. Test
  by exporting at 160 px before committing.

---

## B — Controlled comparison · `MOVIES / REALITY`

Vertical split, hard edge down the centre.

**Left — MOVIES.** Every head on the ceiling bursting at once. Water as one mass, papers
suspended in the air, a running silhouette. Busy, bright, chaotic.

**Right — REALITY.** The same ceiling. One cone. Everything else still.

| Order | Element | Device |
|---|---|---|
| 1st | Left panel's water mass | **Brightness + position** — upper-left is read first |
| 2nd | Right panel's single cone | Isolation against empty space |
| 3rd | The two labels | Courier Prime, small, bottom of each half, ink on paper |

Three elements. Labels are neutral and factual, not alarm copy.

- **This is the only variant that fully satisfies the promise chain** (see the flag below).
- **Grayscale:** relies on density contrast, not hue — busy versus empty. Survives well.
- **160 px:** the hard risk. Split thumbnails lose detail fastest. **Build it as two
  silhouettes, not two scenes** — if either half needs the viewer to identify an object, it
  has already failed.

---

## C — Editorial tableau · Observer

The Observer stands directly beneath a **dry** sprinkler head, hands at his sides, entirely
calm. Two metres to his left, the neighbouring head pours onto a burning waste bin. He is
looking at it. He is not reacting.

| Order | Element | Device |
|---|---|---|
| 1st | Water cone + coral fire | Brightness and the only saturated colour |
| 2nd | The Observer, dry, deadpan | Size + proximity — he is nearest the camera |
| 3rd | The sealed head above his head | Position, small, the punchline |

Three elements. No text. The dry joke: he is standing in the safest place in the room and
has no idea.

- **Blocked on the style-lock probe.** This variant requires the Observer rendered in a full
  environment, in-model, at thumbnail scale. If the probe fails, C is dead and the test runs
  as an A/B rather than an A/B/C.
- **Grayscale:** figure silhouette against pale ceiling — strong.
- **160 px:** the head above him will disappear. The joke may not survive; the composition
  still reads.

---

## Flag: two of three miss the thumbnail-moment window

`packaging.md` requires the thumbnail image to appear **within the first 8–15 seconds**, as the
resolution of the cold open. Against the locked VO:

| Variant | Its moment in the film | Time | Within window |
|---|---|---|---|
| A — single head firing | cue 08 | **0:19.4** | ✗ — 4.4 s late |
| B — movie flood *(left half)* | cue 03 | **0:05.3** | ✓ |
| B — single head *(right half)* | cue 08 | 0:19.4 | payoff, not the promise |
| C — Observer under the dry head | cue 54 | **2:33** | ✗ |

The VO is locked, so cue 08 cannot move. Three options:

1. **Make B the default variant for this episode** and record the deviation from the
   protocol's "preserve variant A as default" rule. B is the only one that keeps the chain
   intact end to end.
2. **Accept 19.4 s for A** as a recorded exception — it is 4 seconds outside a soft window,
   and the cold open still resolves.
3. Restructure the opening. Not worth it for four seconds.

**Recommendation: option 1.** B leads, A and C run against it.

---

## Promise chain as built

| Rung | Carries | Where |
|---|---|---|
| Title | "…don't work the way you think" — accuses the viewer | — |
| Thumbnail | The belief and its correction, side by side | B |
| First 8 s | The flood, played straight | cues 01–04, 0:00–0:15.8 |
| 0:17.8 | "It is also complete nonsense" | cue 06 |

---

## Test protocol for this episode

Per `thumbnail-system-v1.md`:

- Hold the title constant. Test thumbnails only.
- Upload all three through YouTube Studio's native A/B test when eligible.
- The three are materially different — paradox, comparison, character — not colour variants.
- **Native testing optimises watch-time share, not CTR.** A thumbnail that earns empty clicks
  is not a winner.
- Record watch-time share, impressions, traffic mix, declared winner.
- One episode does not establish a house winner. Review after six.

## Mobile-size check — do this before building finals

Export each concept at **160 px wide** and look at it on a phone, in a feed, among other
thumbnails. Not zoomed. Not alone. If the read isn't instant, the concept is wrong — not the
execution.

---

# REVISION — the lighter image supersedes concept A

Added 2026-09-07 after the reference image.

## Why it's right

Four things, and only the fourth is compositional:

1. **It is a transgression, not a fact.** Everyone has stood under a sprinkler head and had
   the thought. It is a small, universal, forbidden impulse — the same family as the urge to
   touch a fire alarm. My concept A ("one head fires, forty don't") is a *fact*. Facts don't
   itch.
2. **It is the moment before.** The lighter is open and unlit. Maximum tension, zero
   information surrendered. Nothing is resolved, so the click is the only way to resolve it.
3. **It is first person.** That hand is the viewer's, not a character's. Which is exactly the
   audience-stand-in role we've been trying to give the Observer — and here it costs no
   character animation and carries no drift risk.
4. **The red bulb is a second-order hook.** It's the only saturated colour, so the eye lands
   there second — on the exact object the entire film is about, before the viewer can read it.

**And it beats every other concept on the promise chain.** It is already cue 02 in the shot
list, at **0:02.27** — the earliest thumbnail moment available and comfortably inside the
8–15 s window that concepts A and C both missed.

**Concept A is dropped.** The lighter takes the A slot as the visual-paradox variant.

## What the feed test showed

Exported at 160 px and inspected in grayscale, per the mobile-size rule.

| Finding | Severity |
|---|---|
| Right ~45 % of the frame is dead ceiling | **High** — the two objects are small in an empty field |
| The lighter does not read as a lighter — grey blob, could be a phone or a remote | **High** — the whole gag depends on identifying it |
| No bright element anywhere; the frame is one mid-tone value, roughly 45–65 % grey | **High** — brightness is the first attention device and there isn't one |
| Red bulb disappears completely in grayscale | Medium — acceptable, the composition still reads |
| Sprinkler head sits at the same value as the ceiling behind it | Medium |

**A rescale test fixed most of it.** Scaling both objects ~1.5× and cutting the dead space
made the lighter instantly legible at 160 px and brought the red bulb back as a clear point.
**Scale is the fix, not colour.**

## Build notes

1. **Reframe, don't crop.** The vertical reaching gesture is the psychology — hand *reaching
   up toward* the head. Keep that diagonal. Scale both objects ~1.5×, hand lower-left, head
   upper-centre-right, and remove the empty right third. Do not flatten it into a side-by-side.
2. **Light the flame.** This is the one substantive change. It supplies the missing brightest
   point, and it is honest to cue 02, which already says *"flame flickers."* The flame becomes
   the main character and the red bulb the supporting one — and because they share a colour
   family, the frame quietly rhymes: *fire down here, fire-detector up there.* The safety-dare
   reading is defused by the title, whose entire claim is that this does not work.
3. **Separate the lighter from the hand.** Heavier outline or a slight cast shadow. At feed
   size they currently merge.
4. **Push the head's value down** or thicken its outline so it separates from the ceiling.

Element count after changes: **flame, lighter-in-hand, sprinkler head — three.** No text. At
the ceiling, not over it.

## The larger idea

This is a **channel-level thumbnail grammar**, not one image:

> *The viewer's own hand, about to do the thing they have always wondered about.*

It repeats. The hand on the revolving door's push-bar. The hand at the lift's "door close"
button. The hand on the emergency stop. First-person, transgressive, unresolved — and it
needs no character consistency, which makes it far cheaper and far safer than an Observer-led
thumbnail system.

If it tests well here, it should go into `thumbnail-system-v1.md` as a canonical layout
alongside the paradox / comparison / tableau trio. That would be worth more than winning this
one episode.

## Revised slate

| Variant | Concept | Its moment | In window |
|---|---|---|---|
| **A** | **The lighter** (first-person paradox) | cue 02, **0:02.3** | ✓ |
| B | `MOVIES / REALITY` comparison | cue 03, 0:05.3 | ✓ |
| C | Observer under the dry head | cue 54, 2:33 | ✗ — blocked on the style-lock probe |

With A now compliant, the earlier recommendation to make B the default is withdrawn. **A leads,
per the protocol's own default.** The rule conflict resolved itself.

---

## Overlays: no text, no arrows, no frame on variant A

Five reasons, in order of force:

1. **It would spend the only bright element on a word.** The frame currently has no bright
   point — that is the biggest finding from the 160 px test, and lighting the flame is the fix.
   High-contrast text placed anywhere prominent wins the brightness contest by default, so the
   flame stops being the main character and a word becomes it. We would be solving the
   brightness problem and then immediately giving the solution away.
2. **The three-element ceiling is already full.** Flame, lighter-in-hand, sprinkler head. Text
   makes four; text plus an arrow makes five.
3. **An arrow would be redundant.** The house rule permits a directional marker *only* when the
   relationship cannot be read without one. The feed test shows it can — the hand reaches, the
   head is above it. Nothing needs pointing at.
4. **Text would repeat the title.** "One promise, three times" means three different renderings
   of the promise, not three copies of it. The title already carries the accusation; the
   thumbnail's job is to carry the *image*.
5. **The text question is already an experiment in this slate.** Variant A is zero-text;
   variant B carries `MOVIES / REALITY`. The A/B test answers whether labels help on this
   channel. Putting text on both destroys the comparison.

**No frame or border either.** It eats canvas, becomes a fifth element, turns to noise at
160 px, and pushes the register from editorial illustration toward designed graphic. The
channel signature should be the *hand grammar*, not a rule around the edge — a repeating
composition is a stronger identity than a repeating border, and it costs nothing.

### But: platform safe zones (new constraint, not yet in the house doc)

YouTube draws its own overlays on top of every thumbnail. Keep composition out of:

| Zone | What covers it |
|---|---|
| **Bottom-right corner**, ~15 % wide | Duration badge, always |
| **Bottom 10 %**, full width | Red progress bar on partially-watched videos |
| **Top-right corner** | Watch Later / Add to Queue buttons on desktop hover |

The current layout puts the hand **lower-left** and the head **upper-centre-right**, which
clears all three. Keep it that way — and check any reframe against these zones before
exporting finals.

*Worth promoting into `thumbnail-system-v1.md` as a standing house rule.*

---

## v2 assessment — flame added, rescaled (2026-09-07)

Measured, not eyeballed.

| Check | Result |
|---|---|
| Brightest point | Max luma **255**, cluster centroid at x 36 % / y 57 % — **on the flame**. Hierarchy is now correct: flame first, head second. |
| Lighter legible at 160 px | **Yes.** Solved by the flame giving it context, not by outlining. |
| Grayscale intelligibility | **Passes.** Flame survives as the brightest element; composition fully readable. |
| Red bulb in grayscale | Still lost — it inverts to a light cylinder. Acceptable; the second-order hook is colour-only. |
| Duration-badge zone (bottom-right) | Clear |
| Hover-button zone (top-right) | Clear |
| Progress-bar zone (bottom 10 %) | Clear — sleeve only |
| Overall mean luma | 184 — a light thumbnail, which separates well against dark-mode feeds |

**The one remaining issue: roughly 40 % of the frame is still empty ceiling on the right.**
Quadrant means are TR 185 / BR 194 — that is bare plate. The composition lives in the left
60 % and reads slightly small in a feed.

A crop test (right 20 % removed, 16:9 restored by trimming the sleeve) confirmed that scale
helps — but it **decapitates the sprinkler's escutcheon plate**, and without the plate meeting
the ceiling the object could read as a hanging lamp. So the crop proves the direction, not the
fix.

**Do it in the source instead:** shift both objects right ~8 %, scale ~1.15×, keep the full
head *including* where it meets the ceiling. Target: composition occupying the middle ~75 %
of the frame rather than the left 60 %.

Minor: the flame tip now sits very close to the deflector. Good tension, but check it doesn't
read as already-touching — a little more air preserves the *moment before*.

---

## v3 — approved as variant A

| Check | v2 | v3 |
|---|---|---|
| Subject coverage (strong ink) | 10.30 % | **10.95 %** |
| Horizontal centroid | x 40 % | **x 52 %** — centred |
| Brightest-point centroid | x 36 % / y 57 % | **x 47 % / y 59 %** — on the flame |
| Subject by vertical third (L / M / R) | left-loaded | **5.8 / 32.0 / 3.9** — properly centred |
| Escutcheon plate intact | cropped in test | **yes** — reads as ceiling-mounted, not a hanging lamp |
| Flame-to-deflector air | tight | **restored** — the *moment before* is back |
| Duration-badge zone coverage | clear | **0.0 %** |
| Grayscale | passes | passes |

**Correction to my own read:** at feed size v3 *looked* smaller to me than v2. Measured, it is
slightly larger — 10.95 % against 10.30 % — and better centred. The impression was wrong; the
numbers are the record.

Remaining coverage of ~11 % is low in the abstract, but it is correct here: the emptiness is
the point. The subject is two small objects on an ordinary ceiling where nothing is happening.
Scaling further would turn it into an object photograph and lose the room. **Diminishing
returns — stop here.**

### Production export

`thumb-A-lighter-v3-1280x720.jpg` — 1280 × 720, 180 KB, no chroma subsampling.
Source is 1672 × 941 (aspect 1.7768 against 16:9's 1.7778, resizes clean). Well inside
YouTube's 2 MB ceiling.

**Variant A is locked.** Outstanding: variant B (`MOVIES / REALITY`) and variant C (Observer,
still blocked on the style-lock probe).
