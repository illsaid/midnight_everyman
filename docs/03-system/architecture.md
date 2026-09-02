# System architecture

## Principle

Separate identity, pose vocabulary and composition.

The illustration system creates canonical character poses and segmented graphic assets. Remotion arranges approved assets over time and remains the deterministic composition engine. Generated character video is an optional exception and cannot be required for routine production.

## Pipeline

```text
Narration and beat sheet
        |
Storyboard / motion contact sheet
        |
Approved asset generation
        |
Select character mode: hold / cel sequence
        |
Normalize transparent PNG, SVG or keyed video asset
        |
Scene specification
        |
Reusable Remotion components
        |
Diagnostic stills and full render
        |
Human quality gate
```

## Asset layers

### Character cels

Complete transparent drawings. These are swapped, not anatomically interpolated.

### Character cel sequences

Two to four complete drawings with explicit timing. Use when a small gesture reads clearly without continuous body mechanics.

### Exceptional character performance plates

Short alpha/chroma clips may be tested when an unusually valuable action cannot be communicated economically with complete cels. They are not a routine production layer, planned quota or prerequisite. A failed clip must not block the episode.

### Props

Separate transparent objects that may translate, rotate, scale, reveal or disappear independently.

### Backgrounds

Reusable compositions built from flat shapes, textures, still images or limited generated assets. Backgrounds should not contain the character.

### Typography and diagrams

Native Remotion markup where possible so text remains editable and timing can be parameterized.

### Audio

Voice-over is the timing authority. Music and sound effects are later layers and should not be required to make a weak visual beat intelligible.

## Remotion responsibilities

- Composition structure and timing
- Whole-cel transforms
- Pose swaps
- Whole-plate transforms and playback
- Camera transforms
- Prop animation
- Text and diagram animation
- Background reuse
- Transitions
- Texture and finishing effects
- Deterministic rendering

## Production components

- `CharacterCel` - render a named pose with registration metadata
- `CharacterAction` - play a reusable two-to-four-pose timing pattern
- `CharacterPerformance` - optional experimental wrapper for an exceptional registered plate
- `CameraMove` - push, pull, pan, snap or hold
- `PropAction` - enter, reveal, point, shake, open or exit
- `Beat` - contain one timed narrative action
- `Scene` - compose beats, background and audio
- `Caption` - optional emphasized phrase rather than full subtitle treatment

## Registration metadata

Each cel will eventually need metadata such as:

```json
{
  "pose": "recoil-extreme",
  "file": "characters/observer/recoil-extreme-v1.png",
  "anchor": {"x": 0.5, "y": 0.94},
  "nativeScale": 1.0,
  "facing": "right"
}
```

An anchor near the feet allows poses with different extents to occupy a stable stage position.

Any exceptional performance plate additionally requires semantic action, usable frame range, native frame rate, baseline anchor, facing, loopability, carried-object assumptions and entry/exit body states.

## Character-mode decision

1. Use one cel if a hold communicates the beat.
2. Use a two-to-four-pose sequence if a limited gesture remains convincing.
3. Redesign the beat if those treatments are not economical.
4. Test a generated performance plate only when the exceptional value justifies an unpredictable acquisition and cleanup loop.

## Current implementation

`src/ReplacementCelTest.tsx` proves two-cel swapping. `src/micro-scene-01/`
proves a complete multi-cel scene. `src/library/observer/` registers 24 approved
semantic poses and two rendered action packs. `src/systems-pilot-01/` proves a
63-second narrator-led systems explanation with bounded effects. The next
experiment is the complete 5–8 minute Hidden Systems pilot. The performance-
plate scaffold remains only as an optional experimental branch.
