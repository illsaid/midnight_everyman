# Music Bed v2 — The Sprinkler

**Reference corrected: British Light Music, c.1956.** Not American mid-century lounge.

Four tracks, instrumental, Eleven Music. VO runtime **280.76 s (4:40.8)** — under the
5-minute ceiling, so each generates in a single pass.

---

## What changed from v1, and why it matters

v1 asked for vibraphone, brushed drums, muted trumpet and upright bass. That is the
American sound — Raymond Scott, Esquivel, space-age bachelor pad. Jazzy, percussion-forward,
a bit knowing.

**BBC 1956 is a different world.** It is a *full light orchestra*: massed strings,
woodwind, harp, light brass, timpani. **No drum kit. No jazz.** String-led rather than
percussion-led, brisk and optimistic rather than cool, and played absolutely straight —
the joke is never in the music.

| Out | In |
|---|---|
| Vibraphone, brushed drums | Massed strings, timpani |
| Muted trumpet, upright bass | Oboe, clarinet, cor anglais, French horn |
| Jazz harmony, walking bass | Light-music harmony, pizzicato figures |
| Dry close-miked combo | Warm mono orchestra in a live room |

The genre term is **British Light Music** — sometimes catalogued as **Mood Music**. The
publishing houses were Boosey & Hawkes Recorded Music Library, Chappell, De Wolfe, KPM,
Paxton and Bosworth. The composers were Eric Coates, Robert Farnon, Trevor Duncan,
Ronald Binge, Charles Williams, Sidney Torch. If you have ever heard *Desert Island Discs*,
*Sailing By*, or a Pathé newsreel, you know the sound exactly.

**The register to aim for is the Central Office of Information public information film.**
Confident, unhurried, faintly institutional, and completely sincere about a mundane subject.
That is what this script is doing, so the music should do it too.

### One consequence worth naming

Your visual reference has been UPA — an American studio. The British equivalent, working at
exactly the same time in exactly the same idiom, is **Halas & Batchelor** (*Animal Farm*,
1954, and dozens of COI shorts). Same limited animation, same flat graphic design, same
mid-century palette — but British, and scored with light orchestra rather than jazz combo.

**Halas & Batchelor unifies the whole project.** It gives you one reference for picture and
sound instead of two that quietly disagree. Worth adopting as the house lineage.

---

## The cue sheet

| Track | In | Out | Length | Covers | Character |
|---|---|---|---|---|---|
| **MU1** | 0:00.0 | 1:04.7 | 65 s | M01–M03 | Brisk newsreel optimism, turning inquisitive |
| **MU2** | 1:04.7 | 2:13.2 | 68 s | M04–M06 | Clockwork, building. **Ends unresolved.** |
| — | 2:13.2 | 2:16.1 | 2.9 s | cue 47 | **SILENCE.** Nothing under "Until it isn't." |
| **MU3** | 2:16.1 | 3:39.6 | 83 s | M07–M09 | Warm resolution, turning wistful at 2:52.8 |
| **MU4** | 3:39.6 | 4:40.8 | 61 s | M10–M12 | Businesslike, thinning to nothing |

MU2 fades to zero by 2:13.2 — start the fade at 2:11.7. Generate each **20 s longer**
than its slot for trim room.

---

## The three constraints (unchanged)

1. **No strong melody.** A tune competes with the narrator and wins. Light music is
   melodic by nature, so this needs saying explicitly in every prompt.
2. **Nothing in the vocal midrange**, roughly 200 Hz – 4 kHz. Keep the weight in the
   low strings and the sparkle up in the harp and celesta.
3. **Low dynamic range.** No swells, no big finishes.

---

## The prompts

```
MU1 — The Lie & The Puzzle  ·  85 s
British light music library cue, 1950s BBC light orchestra. Brisk, optimistic and well-mannered, in the manner of a 1950s British newsreel or public information film. Massed strings carry a bright, tidy figure with flute and clarinet answering, light French horn underneath, occasional harp. Crisp and unhurried at around 116 BPM, no drum kit — timpani and triangle only. The second half becomes more inquisitive and thins out. Instrumental only, no vocals. Restrained and sparse: this plays underneath a narrator, so no prominent melody, no loud brass, nothing in the vocal midrange. Warm mono 1950s studio orchestra recording, live room, gentle tape hiss.
```

```
MU2 — Anatomy & Trigger  ·  88 s
British light music library cue, 1950s BBC light orchestra, clockwork and methodical, building to unresolved tension. Opens with a neat ticking figure in pizzicato strings and staccato bassoon, celesta marking time above, absolutely steady. Through the second half tension gathers underneath: sustained low strings rising, a cor anglais holding long notes, string tremolo tightening. It must not resolve — end on a single held, suspended, unresolved chord that simply stops. No drum kit. Instrumental only, no vocals. Sparse and low, no prominent melody, nothing in the vocal midrange. Warm mono 1950s studio orchestra recording.
```

```
MU3 — Release & The Human Turn  ·  103 s
British light music library cue, 1950s BBC light orchestra, in two clear halves. First half: warm, generous string resolution after tension, flute and harp above, gently major and unhurried, relieved rather than triumphant. Roughly halfway it turns quieter and wistful — a solo oboe, then cor anglais, over sustained strings, slower, faintly melancholy in the English pastoral manner, never fully resolving. No drum kit. Instrumental only, no vocals. Restrained, plays underneath a narrator, no prominent melody, nothing in the vocal midrange. Warm mono 1950s studio orchestra recording, live room.
```

```
MU4 — Practical & Close  ·  81 s
British light music library cue, 1950s BBC light orchestra, businesslike and matter-of-fact, thinning to almost nothing. Opens with a tidy, unfussy woodwind and pizzicato string figure, light and practical, the sound of a public information film explaining something ordinary. Across the final third the orchestra withdraws instrument by instrument until only a sustained high string line and a single harp harmonic remain. End on quiet suspension rather than a full cadence — unfinished. No drum kit. Instrumental only, no vocals. Sparse, no prominent melody, nothing in the vocal midrange. Warm mono 1950s studio orchestra recording.
```

Optional, for the hard cut at cue 06 (`COMPLETE NONSENSE`, 0:17.8):

```
STAB — one shot  ·  2 s
Single short orchestral stab from a 1950s light orchestra. Full strings and timpani, one abrupt accented chord, slightly comic in its formality, stopping dead with no tail. Mono, warm, no reverb, one shot.
```

**If a generation comes back too jazzy**, add `no jazz, no swing, no drum kit, no saxophone`
to the prompt. That is the failure mode — the model's default for "1950s" is American.

---

## Knock-on effect for the SFX kit

Four prompts in `sfx-kit.md` are American-idiom and should be swapped:

| Replace | With |
|---|---|
| `wah-wah` — plunger-muted trumpet | **`bassoon-drop`** — a comic descending bassoon phrase |
| `slide-down` — slide whistle | **`swanee`** — swanee whistle, the BBC radio-comedy spelling of the same instrument |
| `boing` — cartoon spring | Keep, but generate it as **orchestral**: a plucked double bass string, hard, single note |
| `buzzer` — game-show electric | **`bell-ding`** — a single small desk bell, dry, one hit |

```
bassoon-drop
Solo bassoon playing a short comic descending phrase, single line, 1950s light orchestra, mono, dry, no reverb, no music bed

swanee
Swanee whistle descending quickly, single downward sweep, played by an orchestral percussionist, 1950s BBC studio, mono, dry, no reverb

boing-orchestral
A double bass string plucked very hard and left to wobble, single low note with a woody rattle, close-miked, mono, dry, no reverb

bell-ding
A single small brass desk bell struck once, bright and short, mono, dry, close-miked, no reverb
```

The woodblock, ratchet, vibraslap, timpani and pizzicato prompts all stand — those are
orchestral percussion and belong in both worlds.

---

## Mix

| Element | Target |
|---|---|
| VO | **−16 LUFS integrated**, true peak ≤ −3 dBTP *(currently −0.4 — fix first)* |
| Music bed | **−30 to −27 LUFS integrated**, 12–14 LU under the voice |
| SFX one-shots | −20 to −18 LUFS, transient |
| SFX beds | ≈ −28 dB |
| Master | −14 LUFS integrated, ≤ −1 dBTP |

**Do not sidechain-duck.** At this level ducking pumps audibly. Static level; the only
automation is the four fades plus the hard one before the silence.

One addition for this idiom: a full orchestra in a live room carries more midrange than a
jazz combo does. If the voice starts to feel crowded, **take 2–3 dB out of the music at
1–3 kHz** with a wide bell rather than turning the whole bed down. You keep the warmth
and the strings, and the voice sits back in front of it.

---

## Licensing — still open

Eleven Music is documented as cleared for commercial use across film, television, podcasts,
social video, advertising and games, built on rights-holder licensing rather than scraped
catalogue.

**Unverified:** which subscription tiers carry the commercial grant, and whether tracks are
guaranteed free of YouTube Content ID claims — the public docs don't address Content ID.
Read the music terms for your plan before this goes on a monetised channel.

**Sources:** [Eleven Music docs](https://elevenlabs.io/docs/overview/capabilities/music) ·
[Music Marketplace](https://elevenlabs.io/docs/overview/capabilities/music/marketplace) ·
[Music Marketplace launch](https://elevenlabs.io/blog/introducing-the-music-marketplace-in-elevencreative)
