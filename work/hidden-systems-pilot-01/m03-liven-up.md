# M03 (0:32–1:02) — why it's dull and what to do

Measured from `sprinkler-assembly-v6.mp4`, 720 frames at 24fps.

---

## The measurement

**79% of frames sit below 0.35 mean delta.** Motion happens in five spikes and the
rest is a still picture.

```
32s  1.395 ███████████████████████████████████████████████████████
33s  0.026 █
34s  0.007
35s  0.032 █
36s  0.098 ███
37s  1.922 ████████████████████████████████████████████████████████████████████████████
38s  2.158 ██████████████████████████████████████████████████████████████████████████████████████
39s  0.615 ████████████████████████
40s  0.265 ██████████
41s  0.066 ██
42s  0.000
43s  0.232 █████████
44s  0.086 ███
45s  0.046 █
46s  1.311 ████████████████████████████████████████████████████
47s  0.403 ████████████████
48s  0.084 ███
49s  0.006
50s  0.065 ██
51s  0.002
52s  0.001
53s  0.004
54s  0.001
55s  0.002
56s  1.387 ███████████████████████████████████████████████████████
57s  0.060 ██
58s  0.953 ██████████████████████████████████████
59s  1.387 ███████████████████████████████████████████████████████
60s  0.002
61s  0.001
```

**49s–55s is seven consecutive seconds of effectively zero motion.** That is the counter
beat — *"the usual number that open is one. Occasionally two."* — rendering as a still
image with a small "1" on it, for seven seconds. It is the deadest stretch in the film.

Subject coverage across the segment: mean 16.7%, minimum 5.5%.

---

## The root error is mine

I built the field as **exactly 300 heads** so that "the other three hundred" would survive
a freeze-frame. Nobody counts them. What the literalism actually bought: each head renders
at roughly 20 px, so the grid reads as **texture, not objects**. There is nothing in the
frame for the eye to land on except the headline type.

That single decision causes most of what follows.

---

## Six fixes, ordered by effect

### 1. Twelve big heads, not three hundred small ones

Drop to **12–18 heads at 150–250 px each**, with the grid running off **all four edges**.
Off-frame implies infinity; on-frame gives you objects you can actually see. The idea
survives and the scale problem disappears. The VO says "three hundred" — it does not need
the picture to prove it.

### 2. Invert the camera move

Currently it starts wide and pushes 3× onto something tiny, which reads as nothing.
**Start inside the field** — one head filling a third of the frame — and **pull back** to
reveal how many there are. A reveal is motion by construction. A slow push on a small
target is not.

### 3. Rebuild the counter beat as typography

The seven-second hold is a *number* beat rendered at 30 px. Make the numeral **300–400 px**
and let it flicker **1 → 2 → 1** with the head states following it. Type is the cheapest
motion available and this beat is asking for it outright.

### 4. Give every head an out-of-phase idle

One `Math.sin()` per head with a phase offset from its index — a 2 px breath, or a bulb
glow cycling. Twelve objects each doing a small nothing adds up to a **living surface**.

This is the cheapest item on the list and it fixes flatness everywhere at once, not just
here. It should become the house default for any repeated element.

### 5. Make the heat a travelling front, not a gradient

*"A local event, not a building-wide one"* is where the whole argument lands, and it is
currently a soft pink smudge fading in.

It should be: **ignition** (bright coral), then a **visible front expanding across the
ceiling plane**, reaching exactly one head — and visibly **stopping**. The viewer watches
it fail to reach the others. That is animation. A fade-in is not.

### 6. Cut or enlarge the control panel

32–36s measures 0.026 / 0.007 / 0.032 / 0.098. The panel is a postage stamp being looked
at for four seconds.

Either make it **40% of frame** and have it visibly assemble — dials rotating in, wires
extending outward — so the red strike destroys something substantial, or **cut it to 1.5
seconds** and move on.

---

## On generating real animation for this

**Not here.** This is the thesis movement and it depends on being schematic and exact:
*"exactly one of these is different, and nothing connects them."* Diagrammatic media does
that reliably; generative video does not, and it would break register in the middle of
the film.

The problem is not the medium. It is that the Remotion is **under-scaled and under-moved**.
Fix 1, 2 and 4 first — they are hours, not days — and re-measure. If the segment is still
flat with big elements and a travelling camera, then the question is worth reopening with
evidence behind it.

Where generated animation *would* earn its place is the beats that are already photoreal
by design: the pending HG plates, and the installer sequence. Not the diagrams.
