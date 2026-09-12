# SFX Kit v1 — The Sprinkler

ElevenLabs Sound Effects prompts for pilot 01. **A kit, not a cue list.** Twenty-four
one-shots and beds, reused across 93 cues — the way a cartoon score actually works.
Bespoke sounds are the exception, not the rule.

---

## The style rule

**1950s orchestral cartoon foley — not modern sound design.**

The house reference is Raymond Scott / Carl Stalling / UPA: sounds made by an
orchestra pit and a foley table, close-miked and dry. Slide whistle, woodblock,
temple block, ratchet, vibraslap, pizzicato strings, muted trumpet, timpani.

Explicitly **not**: sub-bass booms, reverse whooshes, cinematic risers, braams,
tape stops, or anything with a long reverb tail. One modern whoosh in the first
thirty seconds and the whole 1950s conceit collapses.

**Every prompt ends with `dry, close-miked, no reverb, no music`.** ElevenLabs
adds ambience and musical beds unprompted; those four words suppress most of it.

---

## Settings

| | |
|---|---|
| Prompt influence | **0.7–0.8** — high. We want the specific instrument, not a vibe. |
| Duration | Set explicitly. Generate **shorter than the cue**, not longer — trimming is free, stretching is not. |
| Variations | Generate **4 per prompt**, keep 1. Hit rate on percussion one-shots is roughly 1 in 3. |
| Format | Mono for one-shots, stereo for beds. |

---

## A · Punctuation — used constantly

These carry the Remotion movements. Every diagram element that appears, snaps in,
or is struck through gets one of these five. Build these first; they do the most work.

| Name | Dur | Used at |
|---|---|---|
| `tick` | 0.4s | Every counter, countdown, item-strike, list beat — cues 16, 17, 43, 58, 59 |
| `snap-in` | 0.5s | Every swatch, label, chip and bar arriving — cues 61–66, 82, 83 |
| `stamp` | 0.6s | MOVIE MAGIC, NONSENSE, all type slams — cues 05, 06, 68, 84 |
| `reveal` | 1.2s | Cutaways opening, exploded views assembling — cues 24, 27, 57, 81 |
| `hit-soft` | 0.8s | Section landings, the suspense stop — cues 47, 53, 90 |

## B · Comedy — used sparingly

Six appearances maximum across the whole video. These are the spice; more than
six and the Observer becomes a mascot doing bits.

| Name | Dur | Used at |
|---|---|---|
| `boing` | 0.8s | Observer beats — cue 46 (unimpressed by stubborn glass) |
| `slide-down` | 1.0s | The wrong-bulb joke — cue 71 (trips at lunchtime) |
| `ratchet` | 0.7s | Compression arrows tightening — cue 30 |
| `vibraslap` | 1.5s | "Occasionally two" — cue 17 |
| `wah-wah` | 1.6s | The mismatch payoff — cue 71 or 73, not both |
| `buzzer` | 0.5s | Struck-through icons: no panel, no smell, no switch — cues 11, 37, 77 |

## C · Mechanism — the core of the film

| Name | Dur | Used at |
|---|---|---|
| `pressure-hum` | 8s bed | Under the whole pipe reveal — cues 24–26, and faintly under M05 |
| `glass-strain` | 5s | The tension build — cues 44, 45 |
| `glass-shatter` | 1.0s | **The money sound.** Cue 48. Generate 10 of these, not 4. |
| `cap-drop` | 1.0s | Cue 49 |
| `water-burst` | 3s | Cue 50 |
| `spray-cone` | 8s bed | Cues 51–55 |
| `thread-screw` | 3s | Cue 79 |
| `spanner` | 2s | Cue 78 |
| `head-lock` | 0.8s | Cue 76, the head greying out and locking |

## D · World

| Name | Dur | Used at |
|---|---|---|
| `bin-fire` | 6s | Cues 35, 36, 73 |
| `fryer` | 5s | Cue 70 |
| `footsteps` | 4s | Cues 20, 23 (the walk-unders) |
| `door-close` | 1.5s | Cue 75 — the installer leaves |
| `room-tone` | 12s bed | The empty room after he leaves; the dry-head hold, cue 55 |

---

## The prompts

Paste one at a time. Names are for your filing, not part of the prompt.

### A · Punctuation

```
tick
Single hollow woodblock knock, orchestral percussion, one shot, dry, close-miked, no reverb, no music

snap-in
Short crisp pizzicato violin pluck, single note, one shot, dry, close-miked, no reverb, no music

stamp
Heavy rubber stamp slamming down onto a sheet of paper, single impact with a short paper crunch, dry, close-miked, no reverb, no music

reveal
Short upward harp glissando, single sweep, warm, orchestral, dry, close-miked, no reverb, no music

hit-soft
Single soft timpani thump with a short muted tail, orchestral percussion, one shot, dry, close-miked, no reverb, no music
```

### B · Comedy

```
boing
Cartoon boing, metal spring twanging and wobbling, 1950s animation sound effect, single hit, dry, close-miked, no reverb, no music

slide-down
Slide whistle descending quickly, single downward sweep, vintage cartoon orchestra, dry, close-miked, no reverb, no music

ratchet
Wooden ratchet noisemaker cranking once, three sharp clicks, orchestral percussion, dry, close-miked, no reverb, no music

vibraslap
Vibraslap struck once, sharp crack with a rattling wooden tail, orchestral percussion, one shot, dry, close-miked, no reverb, no music

wah-wah
Muted trumpet playing a short descending wah-wah phrase, plunger mute, 1950s cartoon orchestra, dry, close-miked, no reverb, no music

buzzer
Short dry electric buzzer, single blunt blast, game show wrong answer, no reverb, no music
```

### C · Mechanism

```
pressure-hum
Low steady hum of pressurised water sitting inside a metal pipe, constant, faint metallic resonance, no music, no voices, loopable

glass-strain
Thin glass creaking and ticking under rising internal pressure, slow build in tension, extremely close-miked, dry, no reverb, no music

glass-shatter
A small thin glass ampoule shattering from internal pressure, sharp bright crack followed by fine shards falling, extremely close-miked, dry, one shot, no reverb, no music

cap-drop
A small brass fitting dropping onto a hard tiled floor, single metallic clink and quick settle, close-miked, dry, no reverb, no music

water-burst
A sudden burst of pressurised water released from a pipe, sharp onset then settling into steady flow, close-miked, dry, no reverb, no music

spray-cone
Steady fine water spray hitting a hard floor, even and continuous, close-miked, no music, no voices, loopable

thread-screw
A metal thread being hand-screwed into a brass fitting, several smooth turns, close-miked, dry, no reverb, no music

spanner
An adjustable spanner ratcheting on a brass fitting, three short cranks, close-miked, dry, no reverb, no music

head-lock
A small metal mechanism clicking shut and locking, single firm clunk, close-miked, dry, no reverb, no music
```

### D · World

```
bin-fire
A small paper fire crackling inside a metal waste bin, starting faint and building steadily, close-miked, dry, no music, no voices

fryer
A commercial deep fat fryer bubbling and hissing steadily, kitchen extraction humming faintly, no voices, no music

footsteps
One pair of leather shoes walking at an even pace across office carpet, six steps, close-miked, dry, no room tone, no music

door-close
An office door swinging shut and latching, single soft clunk, empty room, dry, close-miked, no reverb, no music

room-tone
Quiet empty office room tone, faint air conditioning, nothing else, no voices, no music, loopable
```

---

## Two bespoke sounds

Not reusable, worth generating properly.

```
movie-deluge
Every ceiling sprinkler in a large building bursting at once, hundreds of heads releasing simultaneously, huge roaring downpour indoors, dramatic and excessive, no music, no voices

brigade-arrive
A fire engine pulling up outside a building and stopping, air brakes hissing, single short siren wind-down, exterior, no voices, no music
```

---

## Notes

- **`glass-shatter` is the one that matters.** It's the payoff of a four-minute build.
  Budget ten generations for it and audition them against the picture, not in isolation.
- **Beds go under, one-shots go on top.** The three beds (`pressure-hum`, `spray-cone`,
  `room-tone`) sit at roughly −28 dB and never draw attention. Everything else is
  a transient on the beat.
- **The VO peaks at −0.4 dBFS.** Normalise the voice track to about −16 LUFS with 3 dB
  of headroom *before* any of this goes near it, or the SFX will have nowhere to sit.
- **Silence is a sound.** Cue 47 — "Until it isn't" — should have nothing under it.
  A full stop before the shatter is worth more than any effect.
