# Episode 02 — entity front-loading, on-screen labels, end screen

Three notes received 14 Sep 2026. Two adopted, one adopted with its mechanics
corrected. Where a claim is checkable it has been checked; where it is not, that
is said rather than assumed.

## 1. Front-load the entity — adopted, with a different fix

**Done.** `script-v2-vo-v3.txt` edited in place. The word "escalator" now lands
at **word 21, about 8.2 seconds in** — previously it did not appear until the
middle of the script.

The fix was not to prepend the word but to make it the thesis line:

> [flatly] A staircase cannot accelerate. That is the one thing a staircase is
> guaranteed to do. Stay where it is.
>
> [short pause] **An escalator is not a staircase.**
>
> Watch this one. Full of people, going down. Then going down faster…

This matters because naming the entity in the first sentence would have defused
the reframe — the whole opening works by letting you assume "staircase" and then
taking it away. As a standalone line after the pause it does the opposite: it
states the episode's thesis in five words and *earns* the beat. "Four ways an
escalator can hurt you, and the four separate machines built to stop each one"
then repeats the entity at ~22 seconds.

**Not done: injecting "engineering" or "mechanical failure" as keywords.** The
script already carries drive chain, sprocket, metal fatigue, auxiliary brake,
overspeed governor and compression spring — a dense technical field in natural
language. Bolting on "engineering" is writing for a parser, and the house voice
would show the seam; `visual-language.md` calls for understatement and calm
observation, and a keyword inserted for its own sake reads as neither.

If keyword coverage is the goal, **the description and tags are where YouTube
actually reads metadata, and they cost nothing.** Put "escalator engineering",
"how escalators work", "escalator safety devices", "comb plate" there. That gets
the coverage without paying for it in the narration.

I cannot verify the claim that YouTube's ingestion needs the entity spoken in the
opening lines to categorise correctly. The *retention* argument is sound on its
own and is sufficient: a viewer who clicked "How Escalators Go Horribly Wrong"
should not spend twenty seconds unsure they are in the right video.

## 2. On-screen labels for the four failures — adopted

This is the strongest of the three notes, and it is already sanctioned by house
grammar: `visual-language.md`, shot rhythm item 5, is literally
"Prop, **label** or transition that motivates the next beat."

### Spec

| Beat | Label | VO cue |
|---|---|---|
| 1 | `FAILURE 01 — THE COMB PLATE` | "Failure one. Follow a step up to the landing." |
| 2 | `FAILURE 02 — THE SKIRT GAP` | "Failure two is the sides." |
| 3 | `FAILURE 03 — THE STEP` | "Failure three is the floor itself." |
| 4 | `FAILURE 04 — THE DRIVE` | "Failure four hurts everybody at once." |

- Jost, letter-spaced caps, `ink-mute` `#7C7566` on paper; rule beneath in
  `coral` only while that failure's protection is being shown — colour is state.
- Placed in a **declared named `text` region** per `scene-specification.md`, and
  that region must not overlap the `action` region. Use the safe-region overlay
  from the throughput tranche to prove it.
- Three-frame visual lead on the VO cue, per the established default.
- Used four times in one episode, so it is a **reusable primitive on first
  build** — the playbook's promote-on-second-use rule is already satisfied
  within the episode.

### Why, and what I would not claim

The OCR-and-search-subsidy argument I cannot verify and am not relying on. Three
things that are checkable make the labels worth building anyway:

1. **They complete the Plan.** The hook promises four failures. Without labels
   the viewer has no progress indicator against that promise; with them they can
   see which of the four they are on. That is the retention mechanism the hook
   sets up, left unfinished.
2. ~~**They map to YouTube chapters.**~~ **WITHDRAWN 15 Sep 2026 — this was my
   error.** `docs/04-production/retention-structure.md` forbids chapters
   outright: "Chapters suit tutorials, listicles and podcasts, where the viewer
   is entitled to skip to the part they need. This format is narrative-shaped
   and has a payoff at beat 4; chapters invite a skip straight to it and destroy
   the delay the whole structure is built on." That reasoning is correct and I
   contradicted a standing house rule without checking it. **Do not publish a
   chapter list for Episode 02.** The on-screen labels do not depend on chapters
   and stand on reasons 1 and 3 alone.
3. They make the episode skimmable on a rewatch without adding a word of VO.

### ~~Proposed chapter list~~ — WITHDRAWN

Removed 15 Sep 2026. See the withdrawal above: `retention-structure.md` forbids
chapters for this format. The labels remain; the chapter list does not.

## 3. The binge trigger — intent adopted, mechanics corrected

**"The final two seconds must point to the next asset" cannot be built.**
Verified against YouTube's own documentation: end screens can only be added to
**the last 5–20 seconds** of a video, with a maximum of four elements at 16:9.
Two seconds is below the floor.

There is also an internal contradiction in the note: hard-cutting at "That is
them working" leaves the end screen sitting over black, which is dead air — the
opposite of a binge trigger, and it signals the end more loudly than an outro
would.

**What to build instead.** The final line lands, and the picture does not stop.
The escalator keeps running, quiet, for 8–10 seconds while the end-screen cards
appear over live frame. Nothing announces an ending; the next video simply
arrives in a moving shot. That delivers the note's actual intent — *do not signal
the end* — far better than a cut to black.

This makes the end-screen area a **composition constraint, not a post step**: the
last 10 seconds need declared clear zones where the cards will sit, specified
alongside the `text` and `action` regions and checked with the same safe-region
overlay. Add it to that tool's scope.

**One honest limit:** the channel has one other video. The end screen can only
point at the sprinkler pilot. This becomes worth optimising from Episode 03
onward; for now build the real estate and accept that the destination is fixed.

## Runtime after these changes

857 spoken words → **5:33** at Pilot 01's measured 154 wpm. The hook edit cost
6 words. Still inside the 5–8 minute launch format; cutting failure three would
give roughly 4:40 if a hard 5:00 is wanted.
