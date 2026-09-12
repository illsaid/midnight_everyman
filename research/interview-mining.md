# Interview mining — short-form growth interview (Callaway)

Assessed against Midnight Everyman / Hidden Systems. **Most of it does not transfer.**
What does, transfers well — and one technique produced a finding that changes the pilot's
packaging.

---

## 1. Why most of it doesn't apply

The interview is about **short-form video feeding a conversion funnel**. Every load-bearing
mechanism in it assumes: daily posting, Instagram/TikTok, a lead magnet, an email list, and
an offer at the end.

We have none of those. No product, no funnel, no email capture, no daily cadence, and
long-form YouTube rather than short-form social.

| Doesn't transfer | Why |
|---|---|
| "Intentionally don't go viral" | His reason is that wrong-audience followers poison targeting for the *narrow, converting* videos. We have nothing to convert. A breakout on an on-model episode is unambiguously good for us. |
| Email capture, ManyChat, lead magnets | No offer exists. |
| `comments ÷ 2 = emails` | Asserted, not measured — and irrelevant without a funnel. |
| The Instagram bio formula | Platform-specific. |
| Batches of 7, read data, swap, repeat | Our unit cost is roughly 100× his. A batch of seven is a *quarter*, not a week. |
| Sand Castles | His product. Short-form Instagram/TikTok only. |

**Evidence quality caveat:** the headline numbers (60k followers, 20–30k emails, six figures
in 100 days) are self-reported and unverifiable, and the interview is substantially an
advertisement for his software. That doesn't make the method wrong. It does mean it is
testimony, not evidence, and should be treated the way we treated every other unverified
claim in this project.

---

## 2. What it corroborates rather than adds

**Audience convergence.** His central argument — that off-model reach brings in viewers whose
behaviour then degrades targeting for everything after — is *already the rule box on
`Main.dc.html`*:

> "YouTube converges on an audience over your first few videos… Breaking a rule doesn't cost
> momentum. It de-converges a model built over months."

Independent arrival at the same conclusion is worth something. But the correct translation for
us keeps the convergence half and discards the view-suppression half: **don't chase a breakout
with an off-model episode; absolutely do want a breakout with an on-model one.** That is
already our "one episode in five may vary the format, never the audience" rule.

**The 3-2-1 strategy** translates to a *subject portfolio*, not a posting cadence. Of every
five episodes: one broad, three mid, one deliberate experiment. Also largely already written.

---

## 3. The one technique that genuinely transfers: power-word mining

His level 1/2/3 model:

1. **Level 1** — copy the title format, swap your nouns in. Derivative, grammar breaks.
2. **Level 2** — identify *validated power phrases* and reuse them.
3. **Level 3** — remix the power phrase into a variant nobody has used yet.

This applies directly to titles and thumbnail text, and we have 20 title candidates pending
at rung three. **So I ran it against the two channels that actually beat us.**

### Method and its one hard caveat

Pulled the top-performing long-form videos for Deconstructed (n=28) and Casual Navigation
(n=50), then indexed each title pattern's median against that sample's own median.

> **This is a survivorship sample.** `popular=true` returns a channel's *best* videos.
> These medians are "median of the channel's top 30–50" and are **not comparable** to the
> recent-50 medians in `research/competitor-data.md` (Deconstructed 536,106 · Casual
> Navigation 57,254). Comparisons *within* this table are valid because every row is equally
> selected. Comparisons *across* the two datasets are not. Do not mix them.

### Deconstructed — sample median 620,056

| Pattern | n | Median | Index |
|---|---|---|---|
| **"Actually Work(s / ed)"** | 7 | 1,525,195 | **2.46×** |
| "Inside the …" | 2 | 1,241,902 | 2.00× |
| "Far More Complex Than You Think" | 2 | 1,037,922 | 1.67× |
| Death / disaster in title | 3 | 1,029,227 | 1.66× |
| Historic subject | 15 | 819,641 | 1.32× |
| "Nothing Like What You've Seen in Movies" | 1 | 591,308 | 0.95× |
| Pipe subtitle `\| Name` | 5 | 536,050 | 0.86× |
| Superlative adjective (Insane / Clever / Genius) | 5 | 432,067 | 0.70× |
| **"How a &lt;object&gt; works"** | 9 | 287,071 | **0.46×** |
| **"The Genius Design of"** | 3 | 240,497 | **0.39×** |

### Casual Navigation — sample median 1,512,086

| Pattern | n | Median | Index |
|---|---|---|---|
| **"Why are …"** | 5 | 4,125,474 | **2.73×** |
| "What …" opener | 11 | 2,158,421 | 1.43× |
| "Why do / does …" | 6 | 1,762,615 | 1.17× |
| Ship as "she / her" | 5 | 1,626,780 | 1.08× |
| Any "Why …" opener | 23 | 1,555,960 | 1.03× |
| "What happened to …" | 3 | 1,518,324 | 1.00× |
| Named vessel / case | 7 | 1,452,336 | 0.96× |
| **"How do(es) … work"** | 4 | 1,258,782 | **0.83×** |
| "Why don't …" | 6 | 1,118,418 | 0.74× |

Patterns at n ≤ 3 are directional only.

---

## 4. Three findings that change the pilot

### 4.1 Deconstructed already made our video, and it was their weakest result

> **"How a fire sprinkler works" — 120,027 views.** Published Aug 2024. Index **0.19×** their
> own top-video median.

Their lawn sprinkler video did 445,177. Their torque wrench did 3,772,127. The fire sprinkler
is near the floor of their entire catalogue.

This is **not** a reason to drop the subject — the earlier research found eight sprinkler
videos above 344k elsewhere, and small channels succeeded with it. It is a reason to treat
the obvious title as poison. The subject works. That framing of it does not.

### 4.2 Our cold-open frame is validated but is not a breakout driver

> **"Ancient Greek Warships Were Nothing Like What You've Seen in Movies" — 591,308. Index 0.95×.**

That is literally our script's opening move ("You've seen it in movies a hundred times… it is
also complete nonsense") applied to another subject on the strongest comparable channel. It
performed at exactly the sample median. Serviceable, not special. Keep it in the script;
don't lean the *title* on it.

### 4.3 The two winners agree on the underlying move, and it isn't "how it works"

Deconstructed's best grammar is **"Actually Worked"** (2.46×). Its worst is **"How a &lt;object&gt;
works"** (0.46×) — a **5.3× spread within one channel**. Casual Navigation's best is
interrogative **"Why are…"** (2.73×); its "how does X work" titles sit at 0.83×.

Both are the same move: **assert the viewer's existing belief is incomplete.** "Actually"
implies you were wrong. "Why are…" implies a property you never questioned. "How X works"
implies only that you don't know yet — which is a much weaker reason to click.

Our `packaging.md` contradiction escalator already says this. It is now measured.

---

## 5. Title candidates built from validated grammar

Level 3 — remixed, not copied. Index is the pattern's, not a prediction.

**Tier A — strongest validated grammars**

| Candidate | Pattern | Index |
|---|---|---|
| Why Are Fire Sprinklers Colour-Coded? | "Why are …" | 2.73× |
| Why Only One Sprinkler Actually Opens | "Why" + "Actually" | 2.73× / 2.46× |
| Fire Sprinklers Don't Actually Work The Way You Think | "Actually" remix | 2.46× |
| How a Fire Sprinkler Actually Decides | "Actually Work" remix — and the script's own answer is that it *doesn't* decide | 2.46× |

**Tier B — validated, weaker**

| Candidate | Pattern | Index |
|---|---|---|
| Fire Sprinklers Are Far Simpler Than You Think | "Far More Complex…" inverted | 1.67× |
| Inside the Glass Bulb That Holds Back a River | "Inside the …" | 2.00× |
| Why Does Only One Sprinkler Open? | "Why does …" | 1.17× |

**Tier C — avoid**

| Candidate | Why |
|---|---|
| How a Fire Sprinkler Works | 0.46× pattern **and** the exact title of a 120k video on the strongest competitor |
| The Genius Design of the Fire Sprinkler | 0.39× — the worst pattern measured |
| Fire Sprinklers Are Nothing Like What You've Seen in Movies | 0.95×, and it hands away the cold open |

---

## 6. One metric change worth adopting

He is right that **followers gained beats views** as a working signal, because a follow is a
filtered action and a view is not.

We currently track median views only (`research/competitor-data.md`, `format.md`). The
long-form equivalent is **subscribers per 1,000 views**, with returning-viewer share second.
For a channel with no offer, subscriber conversion *is* our conversion rate — it is the only
number that tells us whether the right people watched.

Add it to the pilot's measurement plan before publishing, not after.

---

## 7. Standing addition to subject selection

His sharpest observation, and it survives translation:

> Certain topics always flop in a niche because **the audience doesn't believe they have that
> problem.** He can't get views on "ideas" because everyone thinks their ideas are fine.

For us this sharpens gate 2 (*opaque*). Opaque is not sufficient. The viewer must already
suspect there is something they don't know. A system that is genuinely mysterious but that
nobody has ever wondered about fails on click-through no matter how good the episode is.

Proposed wording for `subject-selection.md`:

> **Gate 2, refined.** The subject must be opaque *and* the viewer must already carry a belief
> about it — ideally a wrong one. A mechanism nobody has an opinion about has nothing to
> contradict, and contradiction is what earns the click.

---

## Sources

vidIQ `channel_videos` (popular=true, long) pulled 2026-09-07 — Deconstructed
`UCje6-Yak9u1msy5l7sE9pBA` n=28 · Casual Navigation `UC5_HIscbiDZM0dMX-nCksuA` n=50.
Pattern indices computed in `tools/title-patterns.py`. Interview: self-reported, unverified.
