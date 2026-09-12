# The Sprinkler — Shooting Script v2

Pilot 01 · Midnight Everyman / Hidden Systems · **1920×1080 · 24 fps**

**Status: current production authority.** Generated from `cues-v2.csv` by `tools/build_v2.py`. Edit the source CSV or builder, then regenerate.

VO: `audio/sprinkvo2.mp3` · 280.764 s (4:40.76) · 6738 frames

Timecodes use ASR word timestamps from the locked VO, matched to unchanged cue text, with a three-frame visual lead. Source: `cue-timing-aligned.json`. Review fine editorial timing by ear.

**Cue does not mean clip.** The 93 rows are editorial state changes. Higgsfield material is consolidated into reusable source units, then held, cropped, reframed or combined with accurate Remotion overlays.

**93 editorial cues · 68 Remotion · 20 hybrid · 5 full-frame Higgsfield · 12 Higgsfield source units · 83.1s generated/hybrid presence (29.6% of runtime)**


---


## Production rules

- Higgsfield carries atmosphere, pathos, misconception and human behavior.

- Remotion carries mechanism, causality, labels, comparisons and exact geometry.

- Hybrid cues use a generated set or performance as a plate; the factual action remains deterministic.

- Do not ask generated footage to perform tiny hand/prop contact, accurate sprinkler geometry or precise water physics.

- Preserve the same Observer reference, palette, line treatment, camera height and set anchors across every source unit.


## Reference lock before generation

Approve four inputs before producing source units: (1) Observer identity sheet, (2) recurring office/corridor set plate, (3) sprinkler and bulb prop sheet, and (4) palette/lighting frame. Test HG-01, HG-09 and HG-12 first because they expose character, set and macro-style consistency.


## Higgsfield source plan

| ID | Editorial cues | Target source | Role | Guardrail |
|---|---|---:|---|---|
| HG-01 · Cinema believer | 01 | 4-6 s | Observer delighted by a movie sprinkler scene | Lock Observer identity, seat, palette and screen direction. |
| HG-02 · Lighter under head | 02 | 4-6 s | Cinematic myth setup | Treat the sprinkler as a prop; no explanatory close detail. |
| HG-03 · Impossible deluge | 03, 04 | 10-12 s | Movie-logic flood, soaked Observer and escaping hero | One coherent wide scene; cue 04 is a continuation or alternate crop. |
| HG-04 · One-head ceiling plate | 08, 09, 10 | 10-12 s | Atmospheric real-ceiling plate for the one-head reveal | Generate the room; add accurate heads, water and selection emphasis in Remotion. |
| HG-05 · Ordinary corridor | 20, 21, 22, 93 | 10-12 s | Observer walks beneath an unnoticed sprinkler; plate reused at the close | Locked camera and set. Cue 93 reuses the plate with an approved cel; no new generation. |
| HG-06 · Bin-fire office | 35, 36 | 5-6 s | Oblivious Observer with a small fire behind him | Keep character action simple; flame and smoke may be reinforced as controlled overlays. |
| HG-07 · Dry neighbouring head | 54, 55 | 7-8 s | Observer waits beneath the inactive neighbouring head | One held tableau. Wet-head relationship is supplied by the Remotion layout. |
| HG-08 · Ordinary Tuesday | 67 | 5-6 s | Heat-hazed boiler room or commercial kitchen | Atmosphere only; do not ask the generator to communicate temperature ratings. |
| HG-09 · Installer judgement | 69, 74, 75 | 14-16 s | Installer surveys the room, makes an uncertain choice, then leaves | No precise bulb handling, ladder climbing or hand-to-prop contact. Use three clean edit spans. |
| HG-10 · Wrong head over fryer | 70, 71 | 6-7 s | Commercial-kitchen false activation tableau | Use a stable kitchen plate; accurate head and activation are Remotion overlays. |
| HG-11 · Wrong head in office | 72, 73 | 7-8 s | Quiet-office delayed activation tableau | Use a stable office plate; accurate head, heat and fire state are Remotion overlays. |
| HG-12 · Glass holding a river | 91, 92 | 7-8 s | Poetic macro closing image | Prioritize texture and pressure; factual mechanism has already been established graphically. |

## Approved source deliveries

All delivered FLUX.3 files are silent 24 fps drafts at 1280x704. For a full-frame 16:9 plate, center-crop approximately 14 source pixels from each side, then scale to 1920x1080. Do not stretch the image.

| Source | File | Usable source spans | Editorial notes |
|---|---|---|---|
| HG-01 | `source-media/martini/hg-01-cinema-flux3-draft-v1-approved.mp4` | Use the opening source span, trimmed to the current cue 01 duration. | Approved FLUX.3 Draft; visible blink, expression and posture motion; slight composition drift. |
| HG-09 | `source-media/martini/hg-09-installer-flux3-draft-v1-approved.mp4` | A: 0.0-5.0 s study; B: 5.0-10.0 s uncertainty; C: 13.7-14.7 s departure. | Approved FLUX.3 Draft; no clean empty-room tail, so create that hold in Remotion. |
| HG-12 | `source-media/martini/hg-12-macro-flux3-draft-v2-approved.mp4` | Use one continuous opening span across cues 91-92, trimmed to their current combined duration; retain the tail as trim allowance. | Approved FLUX.3 Draft v2; subtle camera and surface motion; v1 rejected as effectively still. |

## M01 · The Lie

`0:00.00 – 0:20.42` · 20.42s · frames **0–490** · 6 cues · 2 R / 0 H+R / 4 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 01 | 0:00.00 | 2.083s | 0–50 | **H** | HG-01 | Full-frame generated performance | cinema | — | Cinema interior, UPA flat. Observer in a seat, up-lit by screen glow, delighted | You've seen it in movies a hundred times. |
| 02 | 0:02.08 | 2.417s | 50–108 | **H** | HG-02 | Full-frame generated insert | — | — | Hand raises a lighter beneath a sprinkler head, flame flickers, ominous | Someone holds a lighter up to a sprinkler head. |
| 03 | 0:04.50 | 6.292s | 108–259 | **H** | HG-03 | Source opening span | — | — | Wide: every head on the ceiling bursts at once, full deluge, movie logic | The entire building erupts in a wild torrent of water — every sprinkler head, all at once. |
| 04 | 0:10.79 | 4.75s | 259–373 | **H** | HG-03 | Continue source / alternate crop | soaked | — | Observer soaked, papers flying past him, hero silhouette runs through spray | Everyone is soaked, papers fly, and the hero escapes in the confusion. |
| 05 | 0:15.54 | 2s | 373–421 | **R** | — | Native movement keyframe | — | MOVIE MAGIC | Freeze frame; stamp lands over the still | It's a wonderful scene. |
| 06 | 0:17.54 | 2.875s | 421–490 | **R** | — | Native movement keyframe | — | COMPLETE NONSENSE | Hard cut. Coral stamp. Colour drains out of the scene to paper | It is also complete nonsense. |

## M02 · One Head Opens

`0:20.42 – 0:32.71` · 12.29s · frames **490–785** · 4 cues · 1 R / 3 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 07 | 0:20.42 | 2.292s | 490–545 | **R** | — | Native movement keyframe | — | — | Wipe from paper to a real ceiling; camera settles | Here is what actually happens. |
| 08 | 0:22.71 | 1.833s | 545–589 | **H+R** | HG-04 | Generated plate + Remotion mechanism | — | — | HG-04 ceiling plate. Remotion adds one accurate active head and the localized water cone. | One sprinkler head opens. |
| 09 | 0:24.54 | 3.042s | 589–662 | **H+R** | HG-04 | Same plate + Remotion push | — | — | Continue HG-04. Remotion camera push isolates the active head directly above the fire. | That one. The one directly above the fire. |
| 10 | 0:27.58 | 5.125s | 662–785 | **H+R** | HG-04 | Same plate + Remotion reframe | — | — | Continue HG-04. Remotion reframes across the dry heads; no new generated shot. | Every other head on that ceiling stays sealed, dry, and entirely uninterested. |

## M03 · No System

`0:32.71 – 1:03.04` · 30.33s · frames **785–1513** · 9 cues · 9 R / 0 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 11 | 0:32.71 | 4.292s | 785–888 | **R** | — | Native movement keyframe | — | NO CONTROL PANEL | Control-panel icon assembles, then is struck through | Because there is no system. No panel deciding which heads to open. |
| 12 | 0:37.00 | 3.375s | 888–969 | **R** | — | Native movement keyframe | — | — | Ceiling grid: each head resolves into an isolated node. No connecting lines are ever drawn | Every head on that ceiling is its own separate machine, and |
| 13 | 0:40.38 | 2.708s | 969–1034 | **R** | — | Native movement keyframe | — | ONE THING | One node scales up, alone in frame | each one knows precisely one thing: |
| 14 | 0:43.08 | 3.125s | 1034–1109 | **R** | — | Native movement keyframe | — | local air temperature | Thermometer ring closes around the single node | the temperature of the air immediately around it. |
| 15 | 0:46.21 | 4s | 1109–1205 | **R** | — | Native movement keyframe | — | — | Top-down floorplan. Fire icon in one corner; heat gradient stays local | A fire in the corner of an office is a local event, not a building-wide one. |
| 16 | 0:50.21 | 4.417s | 1205–1311 | **R** | — | Native movement keyframe | — | 1 | Counter appears beside the active head | And in a real fire, the usual number of heads that open is one. |
| 17 | 0:54.62 | 1.667s | 1311–1351 | **R** | — | Native movement keyframe | — | 2 -> 1 | Counter flickers to 2, settles back to 1 | Occasionally two. |
| 18 | 0:56.29 | 2.292s | 1351–1406 | **R** | — | Native movement keyframe | — | — | Grid recedes; the question opens up | So the question isn't how they all know. |
| 19 | 0:58.58 | 4.458s | 1406–1513 | **R** | — | Native movement keyframe | — | THAT ONE  /  THE OTHER 300 | Split comparison locks in | It's what is inside that one, that isn't inside the other three hundred. |

## M04 · Look Up

`1:03.04 – 1:19.50` · 16.46s · frames **1513–1908** · 6 cues · 3 R / 3 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 20 | 1:03.04 | 0.917s | 1513–1535 | **H+R** | HG-05 | Source opening span | walks-under | — | Begin HG-05: locked corridor. Observer walks beneath the head without looking up. | Look up. |
| 21 | 1:03.96 | 2.292s | 1535–1590 | **H+R** | HG-05 | Same source + crop + accurate overlay | — | — | Crop into HG-05 plate. Remotion supplies the accurate brass-head macro. | There it is: a small brass fitting |
| 22 | 1:06.25 | 4.75s | 1590–1704 | **H+R** | HG-05 | Continue source wide | walks-under | — | Return to the HG-05 wide and continue the same walk-under performance. | you have walked underneath ten thousand times without once considering it. |
| 23 | 1:11.00 | 1.875s | 1704–1749 | **R** | — | Native movement keyframe | — | — | Cutaway: ceiling tile peels back, pipe revealed above | Above it, a pipe. |
| 24 | 1:12.88 | 4.25s | 1749–1851 | **R** | — | Native movement keyframe | — | HIGH PRESSURE | Water fills the pipe; pressure gauge swings | Inside the pipe, water — at high pressure, directly over your head, |
| 25 | 1:17.12 | 2.375s | 1851–1908 | **R** | — | Native movement keyframe | — | SINCE 1994 | Date tick backwards to construction | since the day the building went up. |

## M05 · Four Parts

`1:19.50 – 1:40.54` · 21.04s · frames **1908–2413** · 8 cues · 8 R / 0 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 26 | 1:19.50 | 1.125s | 1908–1935 | **R** | — | Native movement keyframe | — | FOUR PARTS | Exploded view assembles | Four parts. |
| 27 | 1:20.62 | 2.125s | 1935–1986 | **R** | — | Native movement keyframe | — | 1 · FRAME | Frame highlighted, screwed into the pipe | A frame, screwed into the pipe. |
| 28 | 1:22.75 | 1.917s | 1986–2032 | **R** | — | Native movement keyframe | — | 2 · CAP | Cap highlighted, sealing the opening | A cap, sealing the opening. |
| 29 | 1:24.67 | 3.833s | 2032–2124 | **R** | — | Native movement keyframe | — | 3 · DEFLECTOR | Deflector disc highlighted; notches visible | A deflector — that flat, notched disc on the bottom. |
| 30 | 1:28.50 | 3.417s | 2124–2206 | **R** | — | Native movement keyframe | — | 4 · BULB — under permanent compression | Compression arrows animate between cap and frame | And wedged between the cap and the frame, under permanent compression, |
| 31 | 1:31.92 | 3.333s | 2206–2286 | **R** | — | Native movement keyframe | — | ~ grain of rice | Scale comparison beside the bulb | a glass bulb about the size of a grain of rice. |
| 32 | 1:35.25 | 2.875s | 2286–2355 | **R** | — | Native movement keyframe | — | glycerine-based liquid | Macro cutaway; liquid fills the bulb | Inside the bulb: a glycerine-based liquid, |
| 33 | 1:38.12 | 2.417s | 2355–2413 | **R** | — | Native movement keyframe | — | — | One air bubble appears inside the liquid, labelled | and one small bubble of air. |

## M06 · The Trigger

`1:40.54 – 2:12.88` · 32.33s · frames **2413–3189** · 14 cues · 12 R / 2 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 34 | 1:40.54 | 2.75s | 2413–2479 | **R** | — | Native movement keyframe | — | — | Mechanism clock starts. Beat before the fire | That's the trigger. Now watch it work. |
| 35 | 1:43.29 | 0.833s | 2479–2499 | **H+R** | HG-06 | Generated plate + controlled flame | oblivious | — | Begin HG-06 office tableau. Remotion reinforces the small bin flame. | A bin ignites. |
| 36 | 1:44.12 | 3.417s | 2499–2581 | **H+R** | HG-06 | Continue source + smoke overlay | oblivious | — | Continue HG-06. Smoke overlay curls upward while Observer remains oblivious. | Smoke rises — and does nothing at all. |
| 37 | 1:47.54 | 1.792s | 2581–2624 | **R** | — | Native movement keyframe | — | NO SMOKE DETECTION | Nose icon struck through | Sprinklers cannot smell. |
| 38 | 1:49.33 | 2.667s | 2624–2688 | **R** | — | Native movement keyframe | — | HEAT ONLY | Thermometer confirms | They react to heat, and only heat. |
| 39 | 1:52.00 | 2.417s | 2688–2746 | **R** | — | Native movement keyframe | — | — | Hot gas plume spreads flat across the ceiling plane | The hot gas spreads out across the ceiling and |
| 40 | 1:54.42 | 1.917s | 2746–2792 | **R** | — | Native movement keyframe | — | — | Plume reaches the nearest head node | reaches the nearest head. |
| 41 | 1:56.33 | 2.542s | 2792–2853 | **R** | — | Native movement keyframe | — | — | Macro: liquid expands inside the bulb | The liquid in the bulb begins to expand. |
| 42 | 1:58.88 | 1.5s | 2853–2889 | **R** | — | Native movement keyframe | — | — | The bubble shrinks | The bubble shrinks. |
| 43 | 2:00.38 | 2.042s | 2889–2938 | **R** | — | Native movement keyframe | — | 0:10   0:20 | Countdown ticks | Ten seconds. Twenty. |
| 44 | 2:02.42 | 3.75s | 2938–3028 | **R** | — | Native movement keyframe | — | — | Bubble gone. Liquid pressed hard against the glass | The bubble is gone now, the liquid has nowhere left to go, and the |
| 45 | 2:06.17 | 0.75s | 3028–3046 | **R** | — | Native movement keyframe | — | — | Remotion macro: intact thermal bulb holds under strain; refraction and stress lines intensify. | glass is holding — |
| 46 | 2:06.92 | 4.208s | 3046–3147 | **R** | — | Native movement keyframe | cel:thinkChin | — | Observer beat — unimpressed by how stubborn glass is | because glass, it turns out, is remarkably stubborn. |
| 47 | 2:11.12 | 1.75s | 3147–3189 | **R** | — | Native movement keyframe | — | — | Hard suspense beat. Everything stops | Until it isn't. |

## M07 · Shatter

`2:12.88 – 2:53.79` · 40.92s · frames **3189–4171** · 13 cues · 11 R / 2 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 48 | 2:12.88 | 2.542s | 3189–3250 | **R** | — | Native movement keyframe | — | — | Controlled SVG/vector shatter from the bulb centre; fragments remain on the assembly axis. | The bulb shatters from the inside. |
| 49 | 2:15.42 | 1.875s | 3250–3295 | **R** | — | Native movement keyframe | — | — | Cap drops cleanly along the assembly axis in the existing sprinkler component. | The cap drops away. |
| 50 | 2:17.29 | 4.875s | 3295–3412 | **R** | — | Native movement keyframe | — | WAITING 30 YEARS | Water released; the wait counter zeroes | The water, which has been waiting patiently for about thirty years, leaves — |
| 51 | 2:22.17 | 3.833s | 3412–3504 | **R** | — | Native movement keyframe | — | — | Accurate Remotion water path hits the deflector and resolves into a cone of spray. | strikes the deflector, breaks into a cone of spray, |
| 52 | 2:26.00 | 4.167s | 3504–3604 | **R** | — | Native movement keyframe | — | — | Exponential fire curve climbing, doubling every half minute | and the fire, which had been roughly doubling in size every half minute, |
| 53 | 2:30.17 | 1.292s | 3604–3635 | **R** | — | Native movement keyframe | — | — | Curve snaps flat the instant water lands | stops doubling. |
| 54 | 2:31.46 | 5.167s | 3635–3759 | **H+R** | HG-07 | Source opening span + layout overlay | under-dry | — | Begin HG-07 held tableau. Remotion establishes the wet head / dry neighbouring-head relationship. | Two metres away, the next head sits in the cool air doing absolutely nothing. |
| 55 | 2:36.62 | 1.333s | 3759–3791 | **H+R** | HG-07 | Hold/freeze same source | under-dry | — | Hold or freeze HG-07. Nothing changes; the stillness is the joke. | It will still be doing nothing |
| 56 | 2:37.96 | 2.083s | 3791–3841 | **R** | — | Native movement keyframe | — | — | Remain in the established layout; an emergency-light sweep and brigade icon mark arrival. | when the fire brigade arrives. |
| 57 | 2:40.04 | 2.5s | 3841–3901 | **R** | — | Native movement keyframe | — | THE WHOLE MECHANISM | Checklist opens | And that is the whole mechanism. |
| 58 | 2:42.54 | 3.083s | 3901–3975 | **R** | — | Native movement keyframe | — | No sensor · No wiring · No computer | Items strike in one at a time | No sensor. No wiring. No computer. |
| 59 | 2:45.62 | 4.167s | 3975–4075 | **R** | — | Native movement keyframe | — | No control panel · No decision of any kind | Final items settle | No control panel. No decision of any kind. |
| 60 | 2:49.79 | 4s | 4075–4171 | **R** | — | Native movement keyframe | — | — | Return to the macro bubble; it shrinks to nothing. Pull wide to a calm building | A bubble got smaller, and a building got saved. |

## M08 · Colour Ladder

`2:53.79 – 3:14.29` · 20.50s · frames **4171–4663** · 7 cues · 6 R / 0 H+R / 1 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 61 | 2:53.79 | 4.458s | 4171–4278 | **R** | — | Native movement keyframe | — | — | Swatch row assembles across the frame | Now — those bulbs are colour-coded, because of course they are. |
| 62 | 2:58.25 | 2.667s | 4278–4342 | **R** | — | Native movement keyframe | — | ORANGE   57 °C / 135 °F | Orange swatch expands, chip sets | Orange opens at fifty-seven degrees. |
| 63 | 3:00.92 | 2.125s | 4342–4393 | **R** | — | Native movement keyframe | — | RED   68 °C / 155 °F | Red swatch | Red at sixty-eight. |
| 64 | 3:03.04 | 1.792s | 4393–4436 | **R** | — | Native movement keyframe | — | YELLOW   79 °C / 175 °F | Yellow swatch | Yellow, seventy-nine. |
| 65 | 3:04.83 | 1.958s | 4436–4483 | **R** | — | Native movement keyframe | — | GREEN   93 °C / 200 °F | Green swatch | Green, ninety-three. |
| 66 | 3:06.79 | 2.917s | 4483–4553 | **R** | — | Native movement keyframe | — | BLUE 141/286 · PURPLE 182/360 · BLACK 227/500 | Three high swatches added, chips smaller | Then blue, purple and black, |
| 67 | 3:09.71 | 4.583s | 4553–4663 | **H** | HG-08 | Full-frame generated atmosphere | — | — | Boiler room / commercial kitchen ceiling, heat haze — where 200 °F is an ordinary Tuesday | for rooms where ninety-three degrees is considered a normal Tuesday. |

## M09 · The Judgement

`3:14.29 – 3:41.96` · 27.67s · frames **4663–5327** · 8 cues · 1 R / 7 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 68 | 3:14.29 | 2.417s | 4663–4721 | **R** | — | Native movement keyframe | — | A JUDGEMENT, NOT A SETTING | Type beat over the cooling swatch row | And that colour is not a setting. |
| 69 | 3:16.71 | 4.5s | 4721–4829 | **H+R** | HG-09 | Source first edit span | installer | — | First span of HG-09. Installer studies the room; coloured bulb tray remains foreground context, not a handled prop. | It's a judgement. Somebody had to choose the bulb for the room. |
| 70 | 3:21.21 | 3.417s | 4829–4911 | **H+R** | HG-10 | Generated plate + accurate head overlay | — | — | Begin HG-10 kitchen plate. Remotion places the accurate office-rated head above the fryer. | Put an office-rated head above a deep fat fryer |
| 71 | 3:24.62 | 2.083s | 4911–4961 | **H+R** | HG-10 | Continue source + activation overlay | — | — | Continue HG-10. Remotion activates the head; hold on unimpressed staff reaction. | and it opens every lunchtime. |
| 72 | 3:26.71 | 3.167s | 4961–5037 | **H+R** | HG-11 | Generated plate + accurate head overlay | — | — | Begin HG-11 quiet-office plate. Remotion places the oversized kitchen-rated head. | Put a kitchen-rated head in a quiet office and the room |
| 73 | 3:29.88 | 4s | 5037–5133 | **H+R** | HG-11 | Continue source + fire-state overlay | — | — | Continue HG-11. Remotion grows the fire while the accurate head remains closed. | can be well alight before it notices anything unusual. |
| 74 | 3:33.88 | 6.208s | 5133–5282 | **H+R** | HG-09 | Source second edit span | installer | — | Second span of HG-09. Installer surveys the empty room and visibly guesses; no exact prop contact. | So somewhere, years ago, a person had to guess how hot your ceiling gets on an ordinary day — |
| 75 | 3:40.08 | 1.875s | 5282–5327 | **H+R** | HG-09 | Source tail / hold | installer | — | Tail of HG-09. He exits; hold on the empty room and selected head. | and then leave. |

## M10 · No Reset / The Flood

`3:41.96 – 4:12.50` · 30.54s · frames **5327–6060** · 9 cues · 9 R / 0 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 76 | 3:41.96 | 3.958s | 5327–5422 | **R** | — | Native movement keyframe | — | SINGLE USE | Head greys out and locks | And when one does finally go, it doesn't reset. |
| 77 | 3:45.92 | 3.333s | 5422–5502 | **R** | — | Native movement keyframe | — | NO SWITCH | Toggle icon struck through | There's no switch. That head is finished. |
| 78 | 3:49.25 | 2.292s | 5502–5557 | **R** | — | Native movement keyframe | — | — | Remotion object insert: spanner and replacement head enter as separate layers; no hands required. | Somebody arrives with a spanner, |
| 79 | 3:51.54 | 1.708s | 5557–5598 | **R** | — | Native movement keyframe | — | — | Exploded side view: the replacement head rotates into the threaded pipe. | screws in a new one, |
| 80 | 3:53.25 | 2.417s | 5598–5656 | **R** | — | Native movement keyframe | — | — | New head settles. The wait restarts from zero | and the new one starts waiting too. |
| 81 | 3:55.67 | 3.667s | 5656–5744 | **R** | — | Native movement keyframe | — | WATER DAMAGE? | Comparison chart opens | As for the water damage everybody worries about — a sprinkler head |
| 82 | 3:59.33 | 3.625s | 5744–5831 | **R** | — | Native movement keyframe | — | SPRINKLER   60 L/min | Sprinkler bar grows and settles | puts out somewhere around sixty litres a minute. |
| 83 | 4:02.96 | 4s | 5831–5927 | **R** | — | Native movement keyframe | — | FIREHOSE   600–1200 L/min | Firehose bar dwarfs it, runs off frame | A firefighter's hose puts out ten to twenty times that. |
| 84 | 4:06.96 | 5.542s | 5927–6060 | **R** | — | Native movement keyframe | — | THE SPRINKLER PREVENTS THE FLOOD | Inversion lands | The sprinkler isn't the flood. The sprinkler is what prevents the flood. |

## M11 · Several Hundred

`4:12.50 – 4:31.75` · 19.25s · frames **6060–6522** · 6 cues · 6 R / 0 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 85 | 4:12.50 | 2.875s | 6060–6129 | **R** | — | Native movement keyframe | — | — | Pull back to the full ceiling grid; every head a separate dot | So the ceiling above you is not one system. |
| 86 | 4:15.38 | 3.042s | 6129–6202 | **R** | — | Native movement keyframe | — | — | Dots pulse individually, out of phase. No lines between them | It's several hundred entirely separate ones, |
| 87 | 4:18.42 | 3.083s | 6202–6276 | **R** | — | Native movement keyframe | — | its own small glass fuse | One dot glows | each with its own small glass fuse, |
| 88 | 4:21.50 | 5.083s | 6276–6398 | **R** | — | Native movement keyframe | — | — | Camera drifts across inert dots, minding their own business | each minding its own business, none of them talking to each other. |
| 89 | 4:26.58 | 2.375s | 6398–6455 | **R** | — | Native movement keyframe | — | NOTHING IS WATCHING | Type over the empty grid | Nothing up there is watching you. |
| 90 | 4:28.96 | 2.792s | 6455–6522 | **R** | — | Native movement keyframe | — | NOTHING IS DECIDING | Grid fades toward paper | Nothing is deciding anything. |

## M12 · Close

`4:31.75 – 4:40.75` · 9.00s · frames **6522–6738** · 3 cues · 0 R / 3 H+R / 0 H

| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |
|---|---|---:|---|---|---|---|---|---|---|---|
| 91 | 4:31.75 | 1.375s | 6522–6555 | **H+R** | HG-12 | Generated macro + controlled overlay | — | — | Begin HG-12 macro plate. Remotion isolates the bulb and adds controlled pressure cues. | It is a piece of glass, |
| 92 | 4:33.12 | 5.208s | 6555–6680 | **H+R** | HG-12 | Continue source + Remotion push | — | — | Continue HG-12 with a slow Remotion push and restrained surface-tension treatment. | holding back a river, waiting for something to get warm. |
| 93 | 4:38.33 | 2.417s | 6680–6738 | **H+R** | HG-05 | Reuse source frame + approved cel | looks-up | — | Reuse the HG-05 corridor plate. Stage approved `inspectForward` cel beneath the head; slow push and fade. | Look up. It's still there. |

## Open production flags

- The locked VO is 4:40.76, below the current 5–8 minute format specification. Do not pad automatically; resolve the format decision separately.

- Cue 25 uses `SINCE 1994` as a placeholder. Replace it with a sourced year or remove the chip.

- Verify the blue, purple and black bulb values before locking the colour ladder.

- Undelivered asset-status fields remain `slug`. HG-01, HG-09 and HG-12 are approved after visual review.

- The cue boundaries remain heuristic until the first by-ear editorial pass. The final audio waveform is authoritative.
