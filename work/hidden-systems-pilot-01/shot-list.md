# Shot list — sprinkler pilot

> **Status: superseded.** Retained as architecture history. Use
> `shooting-script-v2.md` and `cues-v2.csv` for production. Its 5+2 generated
> asset allocation is no longer the active plan.

**88 VO cue points across 12 persistent movements.** Restructured 2 Sep 2026
after review.

> **These are cue points, not compositions.** Do not build 88 React components.
> Inside a movement, Remotion changes highlight, label, framing and state
> *without discarding the composition*. If anyone starts writing an 88th scene
> component, the architecture has failed and the build should stop.

## Corrections to v1

| v1 said | Actually |
|---|---|
| 80 clips / 320 s | **88 cues.** Script is 770 words = 319 s at 145 wpm, so cues average **3.6 s**, not 4.0 |
| "8 Higgsfield clips plus two flame plates" | **5 H, 2 R+H** |
| Everyman cels: folded arms, wristwatch, stepladder, look-up | **None of these exist.** `src/library/observer/cels.ts` holds 24 approved cels; all four were invented |
| Seven primitives carry seventy clips | Optimistic. **12 component families** — see below |
| One static hold in the episode | Contradicts the limited-animation house style. Holds are the default register, not the exception |

## Movement structure

Twelve movements, each a persistent composition. All inside the 20–45 s ceiling
on diagram-layer sheet 06. The v1 bin-fire block ran 54 s and had to split;
the two closing blocks ran 14 s and 11 s and had to merge.

| # | Movement | Cues | ≈ s |
|---|---|---|---|
| 1 | Movie myth | 1–7 | 25 |
| 2 | One-head reveal | 8–15 | 29 |
| 3 | Water overhead + four-part anatomy | 16–25 | 36 |
| 4 | Bulb mechanism | 26–33 | 29 |
| 5 | Water distribution | 34–39 | 22 |
| 6 | Independent activation | 40–46 | 25 |
| 7 | Temperature family | 47–52 | 22 |
| 8 | Bin fire ignites | 53–59 | 25 |
| 9 | The burst | 60–67 | 29 |
| 10 | Temperature selection | 68–73 | 22 |
| 11 | Replacement and performance | 74–81 | 29 |
| 12 | Summation and river close | 82–88 | 25 |

Total 319 s. One `<Sequence>` per movement, driven by a timing manifest — the
pattern already documented on sheet 06 and used in `src/systems-pilot-01/`.

## Component families

Twelve, not seven.

| Family | Serves movements |
|---|---|
| Film-plate wrapper | 1, 6 |
| Ceiling grid | 2, 6, 12 |
| Sprinkler assembly | 2, 3, 4, 9, 11 |
| Exploded-part ledger | 3 |
| Thermal bulb | 4, 7, 9, 12 |
| Heat / smoke field | 8, 9, 10 |
| Water flow + spray cone | 5, 9, 11 |
| Temperature bulb rack | 7, 10 |
| Floor-plan locality view | 6, 10 |
| Statistics / comparison panel | 11 |
| Observer editorial insert | 1, 7, 9, 11 |
| Typography / icon shell | all |

## Observer cels — real registry IDs only

Six inserts, all held. Every ID below exists and is `approved`.

| Cue | Line | Cel |
|---|---|---|
| 7 | "It is also complete nonsense" | `suspiciousSquint` |
| 51 | "a normal Tuesday" | `neutralAlert` |
| 61 | "glass is remarkably stubborn" | `thinkChin` |
| 75 | "somebody arrives with a spanner" | **no cel** — show wrench and head only |
| 79 | "the water damage everybody worries about" | `suspiciousSquint` |
| 88 | "Look up. It's still there" | `inspectForward`, staged beneath the ceiling |

Also available and unused if a beat needs them: `pointRight`, `presentOpen`,
`compareHands`, `shrugConfused`, `listenCount`.

## Higgsfield allocation

**5 generated clips (cues 1–5) plus 2 composited plates (53, 69).**

Collapse the five opening clips into **two or three coherent generated
sequences**, then cut and reuse. Cue 39 already reuses cue 3.

The open is the only place a generated filmic plate is correct, because the shot
is the thing being debunked. Everything after it is drawn.

## Held frames

Limited animation is the house register: hold a strong drawing, swap on a
meaningful beat. Cue 62 is the formal pre-payoff hold, but it should not be the
only static frame. Target roughly **one held frame per movement** — the natural
candidates are cues 20, 30, 36, 44, 52, 62, 71, 87.

---

## Cue table

Timecodes provisional. Final voice-over is the timing authority.

**R** = Remotion · **H** = Higgsfield · **R+H** = plate composited into Remotion

| # | Time | Script | Src | Clip |
|---|---|---|---|---|
| 1 | 0:00 | You've seen it in movies a hundred times | H | Grainy heist-film office at night, ceiling in frame |
| 2 | 0:04 | Someone holds a lighter up to a sprinkler head | H | Hand + lighter rising to a brass head, film grade |
| 3 | 0:08 | The entire building erupts in a wild torrent | H | Whole ceiling deluges at once, cinematic |
| 4 | 0:12 | every sprinkler head, all at once | H | Wide: forty heads firing in unison |
| 5 | 0:16 | Everyone is soaked, papers fly, hero escapes | H | Papers in the air, silhouettes running |
| 6 | 0:20 | It's a wonderful scene | R | Freeze frame, paper-grain overlay drops in |
| 7 | 0:24 | It is also complete nonsense | R | Everyman cel, deadpan, arms folded; scene greys out |
| 8 | 0:28 | Here is what actually happens. One head opens | R | Flat ceiling grid, one head fires, rest dry |
| 9 | 0:32 | That one. The one directly above the fire | R | Push in to the single firing head |
| 10 | 0:36 | Every other head stays sealed, dry, uninterested | R | Pull out: 24 dry heads, one wet, olive/vermilion |
| 11 | 0:40 | So the question isn't how they all know | R | Question mark struck through in ink |
| 12 | 0:44 | It's what is inside that one | R | Iris down to a single head silhouette |
| 13 | 0:48 | Look up | R | Camera tilt up from floor to ceiling, POV |
| 14 | 0:52 | a small brass fitting you've walked underneath | R | Head in isolation, ledger empty, right column |
| 15 | 0:56 | ten thousand times without once considering it | R | Counter ticking 1 → 10,000 in Courier Prime |
| 16 | 1:00 | Above it, a pipe. Inside the pipe, water | R | Cutaway reveals pipe interior, teal fill |
| 17 | 1:04 | permanently at high pressure, over your head | R | Pressure arrows outward, gauge needle pinned |
| 18 | 1:08 | since the day the building went up | R | Building drawn in one stroke, date stamp |
| 19 | 1:12 | Holding all of it back is a glass bulb | R | Zoom to bulb, everything else desaturates |
| 20 | 1:16 | about the size of a grain of rice | R | Scale comparison: bulb beside a rice grain |
| 21 | 1:20 | The head has four parts | R | Exploded view, four parts separating |
| 22 | 1:24 | A frame, screwed into the pipe | R | Frame highlights, enters ledger |
| 23 | 1:28 | A cap, sealing the opening | R | Cap highlights, enters ledger |
| 24 | 1:32 | A deflector — that flat, notched disc | R | Deflector rotates to show notches |
| 25 | 1:36 | under permanent compression, the bulb | R | Compression arrows squeeze the bulb |
| 26 | 1:40 | a glycerine-based liquid, one bubble of air | R | Bulb section: liquid fill + single bubble |
| 27 | 1:44 | Heat the liquid and it expands | R | Mustard heat wash, liquid volume grows |
| 28 | 1:48 | The bubble shrinks | R | Bubble diameter shrinks, dimension line |
| 29 | 1:52 | Keep heating, and the bubble disappears | R | Bubble to zero, gauge climbing |
| 30 | 1:56 | the liquid, having nowhere left to go | R | Hold. Stress lines appear in the glass |
| 31 | 2:00 | shatters the glass from the inside | R | Bulb bursts outward, vermilion shards |
| 32 | 2:04 | The cap drops away | R | Cap falls out of frame |
| 33 | 2:08 | waiting patiently for about thirty years | R | Time-lapse tick: 30 years in 2 s |
| 34 | 2:12 | It strikes the deflector, breaks into a cone | R | Flow hits disc, fans into spray cone |
| 35 | 2:16 | covers a patch of floor a few metres across | R | Top-down coverage circle with dimension |
| 36 | 2:20 | That is the whole mechanism | R | Full assembly, all four parts labelled |
| 37 | 2:24 | No sensor. No wiring. No computer. No panel | R | Four icons draw in, each struck through |
| 38 | 2:28 | No decision of any kind | R | Empty decision diamond, no branches |
| 39 | 2:32 | why the film version cannot happen | R | Film frame from clip 3 returns, crossed out |
| 40 | 2:36 | Every head is its own separate machine | R | Ceiling grid, each head boxed separately |
| 41 | 2:40 | each bulb cares about precisely one thing | R | All heads dim except one, thermometer icon |
| 42 | 2:44 | the temperature of the air immediately around it | R | Heat radius circle around one head |
| 43 | 2:48 | not a building-wide event | R | Floor plan, whole-building highlight fades |
| 44 | 2:52 | It is a local event | R | Highlight collapses to one room |
| 45 | 2:56 | the usual number of heads that open is one | R | Big Courier Prime "1" |
| 46 | 3:00 | Occasionally two | R | "1" ticks to "2", then back |
| 47 | 3:04 | colour-coded, because of course they are | R | Seven bulbs fan out in a row |
| 48 | 3:08 | Orange fifty-seven. Red sixty-eight | R | Orange and red bulbs light with values |
| 49 | 3:12 | Yellow seventy-nine. Green ninety-three | R | Yellow and green light in sequence |
| 50 | 3:16 | Then blue, purple and black | R | Final three light, scale bar fills |
| 51 | 3:20 | a normal Tuesday | R | Everyman cel beside a furnace, unbothered |
| 52 | 3:24 | but the bulb has to break first | R | Return to single bulb, intact, holding |
| 53 | 3:28 | So. A bin ignites | R+H | Flat office; small generated flame in bin |
| 54 | 3:32 | Smoke rises, but the smoke does nothing | R | Grey smoke column rises past the head |
| 55 | 3:36 | Sprinklers cannot smell. Heat, and only heat | R | Nose icon struck out; thermometer stays |
| 56 | 3:40 | The hot gas spreads across the ceiling | R | Mustard gas layer flows outward under ceiling |
| 57 | 3:44 | and reaches the nearest head | R | Gas front touches the head, colour shifts |
| 58 | 3:48 | The liquid expands. The bubble shrinks | R | Split screen: bulb macro + rising gauge |
| 59 | 3:52 | Ten seconds. Twenty | R | Frame counter in Courier Prime, ticking |
| 60 | 3:56 | under enormous internal pressure, holding | R | Stress lines multiply across the glass |
| 61 | 4:00 | glass is remarkably stubborn | R | Everyman cel checking a wristwatch |
| 62 | 4:04 | Until it isn't | R | **THE HOLD** — 10 frames dead still |
| 63 | 4:08 | The bulb bursts. The cap falls | R | Burst, shards, cap out of frame |
| 64 | 4:12 | Water hits the deflector, comes down in a cone | R | Spray cone opens over the fire |
| 65 | 4:16 | doubling every half minute, stops doubling | R | Growth curve rising, then flattening hard |
| 66 | 4:20 | the next head sits in the cool air | R | Pan two metres left: dry, sealed head |
| 67 | 4:24 | doing nothing when the fire brigade arrives | R | Same head, unchanged; siren graphic passes |
| 68 | 4:28 | somebody has to choose the bulb for the room | R | Hand places a bulb into a head |
| 69 | 4:32 | office-rated head above a deep fat fryer | R+H | Fryer with generated steam; head opens |
| 70 | 4:36 | kitchen-rated head in a quiet office | R | Office; head stays sealed as room reddens |
| 71 | 4:40 | before it notices anything unusual | R | Room fully vermilion, bulb still intact |
| 72 | 4:44 | It's a judgement, made years ago | R | Spec sheet, a pencil ring around one value |
| 73 | 4:48 | guess how hot your ceiling gets on an ordinary day | R | Ceiling temperature graph, flat, mundane |
| 74 | 4:52 | it doesn't reset. There's no switch | R | Switch icon draws in, then erases |
| 75 | 4:56 | Somebody arrives with a spanner | R | Everyman cel on a stepladder, spanner |
| 76 | 5:00 | the new one starts waiting too | R | New bulb seats; timer resets to zero |
| 77 | 5:04 | forty million of these fitted every year | R | Grid of heads multiplying to fill frame |
| 78 | 5:08 | they control the fire on their own | R | Bar: controlled vs not, olive dominant |
| 79 | 5:12 | As for the water damage everybody worries about | R | Everyman cel eyeing the ceiling, wary |
| 80 | 5:16 | sixty litres a minute vs ten to twenty times | R | Two volume bars, extreme size contrast |
| 81 | 5:20 | The sprinkler is what prevents the flood | R | Small cone beside a huge hose stream |
| 82 | 5:24 | the ceiling above you is not one system | R | Wide ceiling grid returns |
| 83 | 5:28 | each with its own small glass fuse | R | Every head gets its own outline box |
| 84 | 5:32 | none of them talking to each other | R | Connection lines draw in, then erase |
| 85 | 5:36 | Nothing up there is watching you | R | Eye icon draws in, then erases |
| 86 | 5:40 | It is a piece of glass, holding back a river | R | Single bulb; river volume behind it, teal |
| 87 | 5:44 | waiting for something to get warm | R | Hold on the bulb. Nothing moves |
| 88 | 5:48 | Look up. It's still there | R | Everyman cel looks up; slow tilt to ceiling |

## The test

> Can 88 narration cues be delivered through 12 movements and 12 reusable
> component families?

If yes, this is ambitious but sensible, and the reuse fraction is the number the
pilot exists to produce. If it starts becoming 88 scene components, stop.
