# vidIQ thumbnail pass — findings and concepts

Run 2026-09-10. ~30 credits. Two tools used: `similar_thumbnails` and `score_thumbnail`.

---

## Finding 1: the vidIQ thumbnail score does not predict views in this niche

Five thumbnails scored, all from the two channels that beat us:

| Video | Views | **Score** | negative_space | Its biggest penalty |
|---|---|---|---|---|
| Why are ships painted red below the waterline? | **12,331,641** | **24** | 0.628 | −70 empty space |
| How the Colosseum Actually Worked | 6,321,168 | **87** | **0.247** | −7 empty space |
| How a torque wrench works | 3,772,127 | **87** | 0.806 | −10 empty space |
| How a lawn sprinkler works | 445,177 | 51 | 0.704 | −38 empty space |
| How a fire sprinkler works | 120,027 | 81 | 0.760 | −8 empty space |

**The single most-viewed thumbnail in the sample scores 24 out of 100.** The least-viewed
scores 81. There is no usable correlation.

Worse, look at what the model recommends for the 12.3M-view thumbnail:

> "Add an arrow or other visual cue to point toward the key element"
> "Add a red circle, arrow, or intriguing text overlay to draw attention"
> "Desaturate colors, blur the background, or reduce contrast"

Those are, almost word for word, the **non-default legacy devices** banned in
`thumbnail-system-v1.md`. The scorer is trained on general YouTube and penalises exactly
what this channel does on purpose: restraint, empty space, low saturation, no annotation.

**Do not use the composite score as a gate.** It is the same failure predicted for a
generic critic agent — it optimises toward the median of all YouTube, which is where our
only differentiator dies.

## Finding 2: one signal in it is real, and it contradicts my earlier call

**`negative_space` is the largest negative on all five thumbnails**, and the best-scoring
one — also a 6.3M-view video — has by far the least of it (0.247 against 0.63–0.81 for
the rest).

Our v3 lighter thumbnail measures roughly **0.89 negative space** (~11% subject coverage,
measured independently in `thumbnail-brief.md`). **That is emptier than every thumbnail in
this sample, including the ones being penalised 38 and 70 points for it.**

Two independent methods — my own pixel measurement and vidIQ's feature model — now agree
on the same defect. I called "diminishing returns, stop here" on tightening the crop.
That call was wrong and should be reversed.

## Finding 3: nobody owns this image

`similar_thumbnails` on both "a hand holding a lit lighter up toward a ceiling fire
sprinkler head" and "extreme macro of the red glass bulb inside a brass sprinkler head"
returned ceiling fans, fire-alarm test videos and Brazilian phonk, with every similarity
score clustered at the floor (1.30–1.35).

Read this as *no match found*, not as a competitive map. The tool is thin in a niche this
narrow. What it does weakly support: no one has made this image.

## Tool note

`score_thumbnail` takes a `title` parameter but **ignores it**. The same thumbnail scored
81 with its own title and 81 with ours. It cannot be used to test title/thumbnail fit.

---

## Five concepts

All zero-text, all within the house rules, ordered by how well the evidence supports them.

### A — The lighter, cropped tight *(revision of the locked variant)*

The existing v3 image, reframed so the hand, flame and head fill 55–60% of the frame
instead of 11%. Keep the reaching diagonal; kill the empty right third and most of the
ceiling. **This is the one change every measurement supports.** It does not need a new
image, only a new composition of the one we have.

### B — `MOVIES / REALITY` split *(already specced)*

Mild new support: `clip_split_screen_sim` fires as a *negative* on four of the five
thumbnails measured — the model rewards a comparison when it reads instantly. Ours would.
Build both halves as silhouettes, not scenes.

### C — Full-frame ceiling: one wet head among many dry

The ceiling grid filling the entire frame, one head spraying, the rest sealed. Low
negative space by construction. Reads as the film's thesis with no text at all.

### D — Macro of the bulb *(new, and the strongest new idea)*

Fill the whole frame with the brass frame and the single red glass bulb. Nothing else.

Four reasons it is the best candidate:

1. **Almost zero negative space** — the one defect both measurements agree on, solved by
   construction rather than by cropping.
2. **The red bulb is the only saturated colour in the house palette.** It answers the
   "low energy" penalty honestly, without adding a single banned device.
3. **It is genuinely unidentifiable at feed size.** Brass and one red capsule. Under a
   title that says *you're wrong about this*, the question the image asks is
   *what am I even looking at* — which is the house's own layout-A visual paradox.
4. It is already in the film at cue 45, and it is the object the entire episode is about.

Risk: an unidentifiable object may read as *irrelevant* rather than *intriguing*. That is
exactly what an A/B test is for.

### E — The ceiling's point of view

Looking straight down from the sprinkler at a person walking underneath, oblivious. Novel
angle, nobody in the sampled field has it, and it inverts the film's own recurring shot.
Weakest evidence, most upside — a good candidate for the chaos slot.

---

## Recommendation

Re-crop **A** first — it is cheap, it uses the existing artwork, and it is the only change
two independent measurements both demand.

Then build **D** as the second variant instead of B. B tests *clarity*; D tests
*mystery*, and mystery is what the locked title promises. Hold B in reserve for episode
two so the test learns something new rather than confirming what packaging already says.
