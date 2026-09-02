# Scene specification

## Purpose

The scene specification should let a future episode be assembled from narration, named assets and reusable motion patterns without writing custom React for every shot.

This remains a proposed contract. The 15-second and 63-second proofs established
the useful fields, but a generalized parser remains deferred until the full
Hidden Systems pilot exposes whether another abstraction would reduce owner
time rather than add maintenance.

## Human-readable scene card

```text
Scene 01 - The sealed box
Duration: 5.0 seconds
Narration: Every system begins with a rule nobody notices.
Background: office-neutral
Character: Observer
Character mode: cel-sequence
Action: neutral-to-curious
Prop: sealed-box enters from right
Camera: slow-push-05
End state: Observer leaning toward box
```

## Proposed structured form

```json
{
  "id": "sealed-box",
  "durationSeconds": 5,
  "narration": "Every system begins with a rule nobody notices.",
  "background": "office-neutral",
  "camera": {"pattern": "slow-push", "amount": 0.05},
  "character": {
    "id": "observer",
    "mode": "cel-sequence",
    "stageX": 0.46,
    "stageY": 0.91,
    "actions": [
      {"at": 0, "pose": "neutral"},
      {"at": 3.1, "pose": "curious"}
    ]
  },
  "props": [
    {"id": "sealed-box", "action": "enter-right", "at": 1.4}
  ]
}
```

An exceptional performance plate uses the same stage contract but references a registered clip. This mode is not part of the routine scene plan:

```json
{
  "character": {
    "id": "observer",
    "mode": "performance",
    "clip": "wrong-nozzle-recoil-01",
    "stageX": 0.46,
    "stageY": 0.91,
    "startFrame": 0
  }
}
```

## Beat-design rules

- One dominant action per beat
- Routine character mode must be `cel` or `cel-sequence`; `performance` is exceptional.
- Use the cheapest mode that communicates the action convincingly.
- Performance mode requires material value that survives its generation and cleanup cost, plus a cel fallback.
- Pose changes occur on semantic or vocal emphasis
- All timings are derived from the final voice-over
- Start and end state must be explicit
- A beat may reuse an approved action pattern but can override timing and stage position
- Decorative effects should not be specified unless they serve comprehension or emphasis

## Contact-sheet companion

Every nontrivial scene card should have a visual contact sheet showing approximately four to six checkpoints. The structured specification answers what and when; the contact sheet answers how it should look.
