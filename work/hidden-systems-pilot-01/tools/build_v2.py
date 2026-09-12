from __future__ import annotations

import csv
import json
from collections import Counter
from pathlib import Path


PILOT = Path(__file__).resolve().parent.parent
SOURCE_CSV = PILOT / "cues.csv"
OUTPUT_CSV = PILOT / "cues-v2.csv"
OUTPUT_MD = PILOT / "shooting-script-v2.md"

FPS = 24
AUDIO_SECONDS = 280.764082

MOVEMENT_TITLES = {
    "M01": "The Lie",
    "M02": "One Head Opens",
    "M03": "No System",
    "M04": "Look Up",
    "M05": "Four Parts",
    "M06": "The Trigger",
    "M07": "Shatter",
    "M08": "Colour Ladder",
    "M09": "The Judgement",
    "M10": "No Reset / The Flood",
    "M11": "Several Hundred",
    "M12": "Close",
}

# A source unit is one Higgsfield generation job. Multiple editorial cues may
# use different spans, crops, holds or overlays from the same source unit.
SOURCES = {
    "HG-01": {
        "name": "Cinema believer",
        "cues": ("01",),
        "target": "4-6 s",
        "role": "Observer delighted by a movie sprinkler scene",
        "guardrail": "Lock Observer identity, seat, palette and screen direction.",
    },
    "HG-02": {
        "name": "Lighter under head",
        "cues": ("02",),
        "target": "4-6 s",
        "role": "Cinematic myth setup",
        "guardrail": "Treat the sprinkler as a prop; no explanatory close detail.",
    },
    "HG-03": {
        "name": "Impossible deluge",
        "cues": ("03", "04"),
        "target": "10-12 s",
        "role": "Movie-logic flood, soaked Observer and escaping hero",
        "guardrail": "One coherent wide scene; cue 04 is a continuation or alternate crop.",
    },
    "HG-04": {
        "name": "One-head ceiling plate",
        "cues": ("08", "09", "10"),
        "target": "10-12 s",
        "role": "Atmospheric real-ceiling plate for the one-head reveal",
        "guardrail": "Generate the room; add accurate heads, water and selection emphasis in Remotion.",
    },
    "HG-05": {
        "name": "Ordinary corridor",
        "cues": ("20", "21", "22", "93"),
        "target": "10-12 s",
        "role": "Observer walks beneath an unnoticed sprinkler; plate reused at the close",
        "guardrail": "Locked camera and set. Cue 93 reuses the plate with an approved cel; no new generation.",
    },
    "HG-06": {
        "name": "Bin-fire office",
        "cues": ("35", "36"),
        "target": "5-6 s",
        "role": "Oblivious Observer with a small fire behind him",
        "guardrail": "Keep character action simple; flame and smoke may be reinforced as controlled overlays.",
    },
    "HG-07": {
        "name": "Dry neighbouring head",
        "cues": ("54", "55"),
        "target": "7-8 s",
        "role": "Observer waits beneath the inactive neighbouring head",
        "guardrail": "One held tableau. Wet-head relationship is supplied by the Remotion layout.",
    },
    "HG-08": {
        "name": "Ordinary Tuesday",
        "cues": ("67",),
        "target": "5-6 s",
        "role": "Heat-hazed boiler room or commercial kitchen",
        "guardrail": "Atmosphere only; do not ask the generator to communicate temperature ratings.",
    },
    "HG-09": {
        "name": "Installer judgement",
        "cues": ("69", "74", "75"),
        "target": "14-16 s",
        "role": "Installer surveys the room, makes an uncertain choice, then leaves",
        "guardrail": "No precise bulb handling, ladder climbing or hand-to-prop contact. Use three clean edit spans.",
    },
    "HG-10": {
        "name": "Wrong head over fryer",
        "cues": ("70", "71"),
        "target": "6-7 s",
        "role": "Commercial-kitchen false activation tableau",
        "guardrail": "Use a stable kitchen plate; accurate head and activation are Remotion overlays.",
    },
    "HG-11": {
        "name": "Wrong head in office",
        "cues": ("72", "73"),
        "target": "7-8 s",
        "role": "Quiet-office delayed activation tableau",
        "guardrail": "Use a stable office plate; accurate head, heat and fire state are Remotion overlays.",
    },
    "HG-12": {
        "name": "Glass holding a river",
        "cues": ("91", "92"),
        "target": "7-8 s",
        "role": "Poetic macro closing image",
        "guardrail": "Prioritize texture and pressure; factual mechanism has already been established graphically.",
    },
}

DELIVERED_SOURCES = {
    "HG-01": {
        "file": "source-media/martini/hg-01-cinema-flux3-draft-v1-approved.mp4",
        "usable": "Use the opening source span, trimmed to the current cue 01 duration.",
        "notes": "Approved FLUX.3 Draft; visible blink, expression and posture motion; slight composition drift.",
    },
    "HG-09": {
        "file": "source-media/martini/hg-09-installer-flux3-draft-v1-approved.mp4",
        "usable": "A: 0.0-5.0 s study; B: 5.0-10.0 s uncertainty; C: 13.7-14.7 s departure.",
        "notes": "Approved FLUX.3 Draft; no clean empty-room tail, so create that hold in Remotion.",
    },
    "HG-12": {
        "file": "source-media/martini/hg-12-macro-flux3-draft-v2-approved.mp4",
        "usable": "Use one continuous opening span across cues 91-92, trimmed to their current combined duration; retain the tail as trim allowance.",
        "notes": "Approved FLUX.3 Draft v2; subtle camera and surface motion; v1 rejected as effectively still.",
    },
}

SOURCE_BY_CUE = {
    cue: source_id
    for source_id, source in SOURCES.items()
    for cue in source["cues"]
}

PURE_H_CUES = {"01", "02", "03", "04", "67"}

DESCRIPTION_OVERRIDES = {
    "08": "HG-04 ceiling plate. Remotion adds one accurate active head and the localized water cone.",
    "09": "Continue HG-04. Remotion camera push isolates the active head directly above the fire.",
    "10": "Continue HG-04. Remotion reframes across the dry heads; no new generated shot.",
    "20": "Begin HG-05: locked corridor. Observer walks beneath the head without looking up.",
    "21": "Crop into HG-05 plate. Remotion supplies the accurate brass-head macro.",
    "22": "Return to the HG-05 wide and continue the same walk-under performance.",
    "35": "Begin HG-06 office tableau. Remotion reinforces the small bin flame.",
    "36": "Continue HG-06. Smoke overlay curls upward while Observer remains oblivious.",
    "45": "Remotion macro: intact thermal bulb holds under strain; refraction and stress lines intensify.",
    "48": "Controlled SVG/vector shatter from the bulb centre; fragments remain on the assembly axis.",
    "49": "Cap drops cleanly along the assembly axis in the existing sprinkler component.",
    "51": "Accurate Remotion water path hits the deflector and resolves into a cone of spray.",
    "54": "Begin HG-07 held tableau. Remotion establishes the wet head / dry neighbouring-head relationship.",
    "55": "Hold or freeze HG-07. Nothing changes; the stillness is the joke.",
    "56": "Remain in the established layout; an emergency-light sweep and brigade icon mark arrival.",
    "69": "First span of HG-09. Installer studies the room; coloured bulb tray remains foreground context, not a handled prop.",
    "70": "Begin HG-10 kitchen plate. Remotion places the accurate office-rated head above the fryer.",
    "71": "Continue HG-10. Remotion activates the head; hold on unimpressed staff reaction.",
    "72": "Begin HG-11 quiet-office plate. Remotion places the oversized kitchen-rated head.",
    "73": "Continue HG-11. Remotion grows the fire while the accurate head remains closed.",
    "74": "Second span of HG-09. Installer surveys the empty room and visibly guesses; no exact prop contact.",
    "75": "Tail of HG-09. He exits; hold on the empty room and selected head.",
    "78": "Remotion object insert: spanner and replacement head enter as separate layers; no hands required.",
    "79": "Exploded side view: the replacement head rotates into the threaded pipe.",
    "91": "Begin HG-12 macro plate. Remotion isolates the bulb and adds controlled pressure cues.",
    "92": "Continue HG-12 with a slow Remotion push and restrained surface-tension treatment.",
    "93": "Reuse the HG-05 corridor plate. Stage approved `inspectForward` cel beneath the head; slow push and fade.",
}

TREATMENT_OVERRIDES = {
    "01": "Full-frame generated performance",
    "02": "Full-frame generated insert",
    "03": "Source opening span",
    "04": "Continue source / alternate crop",
    "08": "Generated plate + Remotion mechanism",
    "09": "Same plate + Remotion push",
    "10": "Same plate + Remotion reframe",
    "20": "Source opening span",
    "21": "Same source + crop + accurate overlay",
    "22": "Continue source wide",
    "35": "Generated plate + controlled flame",
    "36": "Continue source + smoke overlay",
    "54": "Source opening span + layout overlay",
    "55": "Hold/freeze same source",
    "67": "Full-frame generated atmosphere",
    "69": "Source first edit span",
    "70": "Generated plate + accurate head overlay",
    "71": "Continue source + activation overlay",
    "72": "Generated plate + accurate head overlay",
    "73": "Continue source + fire-state overlay",
    "74": "Source second edit span",
    "75": "Source tail / hold",
    "91": "Generated macro + controlled overlay",
    "92": "Continue source + Remotion push",
    "93": "Reuse source frame + approved cel",
}


def mmss(value: str | float) -> str:
    seconds = float(value)
    return f"{int(seconds // 60)}:{seconds % 60:05.2f}"


def build_rows() -> list[dict[str, str]]:
    with SOURCE_CSV.open(newline="", encoding="utf-8-sig") as source_file:
        original_rows = list(csv.DictReader(source_file))

    rows: list[dict[str, str]] = []
    for original in original_rows:
        cue = original["cue"]
        source_id = SOURCE_BY_CUE.get(cue, "")
        v2_tool = "H" if cue in PURE_H_CUES else "H+R" if source_id else "R"
        row = dict(original)
        row["v1_tool"] = original["tool"]
        row["tool"] = v2_tool
        row["source_id"] = source_id
        row["treatment"] = TREATMENT_OVERRIDES.get(cue, "Native movement keyframe")
        row["description"] = DESCRIPTION_OVERRIDES.get(cue, original["description"])
        rows.append(row)

    timing_path = PILOT / "cue-timing-aligned.json"
    if timing_path.exists():
        timings = {item['cue']: item for item in json.loads(timing_path.read_text(encoding='utf-8'))['cues']}
        for row in rows:
            timing = timings[row['cue']]
            row['f_in'] = str(timing['f_in'])
            row['f_out'] = str(timing['f_out'])
            row['frames'] = str(timing['frames'])
            row['t_in'] = f"{timing['f_in'] / FPS:.3f}"
            row['t_out'] = f"{timing['f_out'] / FPS:.3f}"
            row['dur'] = f"{timing['frames'] / FPS:.3f}"

    expected = [f"{index:02d}" for index in range(1, 94)]
    actual = [row["cue"] for row in rows]
    if actual != expected:
        raise ValueError("Cue order is incomplete or non-contiguous")

    source_ids = {row["source_id"] for row in rows if row["source_id"]}
    if source_ids != set(SOURCES):
        raise ValueError("Every source unit must be used")
    return rows


def write_csv(rows: list[dict[str, str]]) -> None:
    original_fields = list(rows[0])
    original_fields.remove("v1_tool")
    original_fields.remove("source_id")
    original_fields.remove("treatment")
    tool_index = original_fields.index("tool")
    fields = (
        original_fields[:tool_index]
        + ["v1_tool", "tool", "source_id", "treatment"]
        + original_fields[tool_index + 1 :]
    )
    with OUTPUT_CSV.open("w", newline="", encoding="utf-8") as output_file:
        writer = csv.DictWriter(output_file, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def write_markdown(rows: list[dict[str, str]]) -> None:
    counts = Counter(row["tool"] for row in rows)
    generated_rows = [row for row in rows if row["source_id"]]
    generated_screen_seconds = sum(float(row["dur"]) for row in generated_rows)

    out = [
        "# The Sprinkler — Shooting Script v2\n",
        "Pilot 01 · Midnight Everyman / Hidden Systems · **1920×1080 · 24 fps**\n",
        "**Status: current production authority.** Generated from `cues-v2.csv` by `tools/build_v2.py`. Edit the source CSV or builder, then regenerate.\n",
        "VO: `audio/sprinkvo2.mp3` · 280.764 s (4:40.76) · 6738 frames\n",
        ("Timecodes use ASR word timestamps from the locked VO, matched to unchanged cue text, with a three-frame visual lead. Source: `cue-timing-aligned.json`. Review fine editorial timing by ear.\n"
         if (PILOT / 'cue-timing-aligned.json').exists() else
         "Timecodes are planning estimates anchored to detected pauses. Confirm semantic cue boundaries by ear during the first editorial assembly.\n"),
        "**Cue does not mean clip.** The 93 rows are editorial state changes. Higgsfield material is consolidated into reusable source units, then held, cropped, reframed or combined with accurate Remotion overlays.\n",
        (
            f"**93 editorial cues · {counts['R']} Remotion · {counts['H+R']} hybrid · "
            f"{counts['H']} full-frame Higgsfield · {len(SOURCES)} Higgsfield source units · "
            f"{generated_screen_seconds:.1f}s generated/hybrid presence ({generated_screen_seconds / AUDIO_SECONDS * 100:.1f}% of runtime)**\n"
        ),
        "\n---\n",
        "\n## Production rules\n",
        "- Higgsfield carries atmosphere, pathos, misconception and human behavior.\n",
        "- Remotion carries mechanism, causality, labels, comparisons and exact geometry.\n",
        "- Hybrid cues use a generated set or performance as a plate; the factual action remains deterministic.\n",
        "- Do not ask generated footage to perform tiny hand/prop contact, accurate sprinkler geometry or precise water physics.\n",
        "- Preserve the same Observer reference, palette, line treatment, camera height and set anchors across every source unit.\n",
        "\n## Reference lock before generation\n",
        "Approve four inputs before producing source units: (1) Observer identity sheet, (2) recurring office/corridor set plate, (3) sprinkler and bulb prop sheet, and (4) palette/lighting frame. Test HG-01, HG-09 and HG-12 first because they expose character, set and macro-style consistency.\n",
        "\n## Higgsfield source plan\n",
        "| ID | Editorial cues | Target source | Role | Guardrail |",
        "|---|---|---:|---|---|",
    ]

    for source_id, source in SOURCES.items():
        cue_list = ", ".join(source["cues"])
        out.append(
            f"| {source_id} · {source['name']} | {cue_list} | {source['target']} | "
            f"{source['role']} | {source['guardrail']} |"
        )

    out.extend(
        [
            "\n## Approved source deliveries\n",
            "All delivered FLUX.3 files are silent 24 fps drafts at 1280x704. "
            "For a full-frame 16:9 plate, center-crop approximately 14 source pixels from each side, "
            "then scale to 1920x1080. Do not stretch the image.\n",
            "| Source | File | Usable source spans | Editorial notes |",
            "|---|---|---|---|",
        ]
    )
    for source_id, delivery in DELIVERED_SOURCES.items():
        out.append(
            f"| {source_id} | `{delivery['file']}` | {delivery['usable']} | {delivery['notes']} |"
        )

    current_movement = None
    for row in rows:
        if row["movement"] != current_movement:
            current_movement = row["movement"]
            group = [item for item in rows if item["movement"] == current_movement]
            duration = float(group[-1]["t_out"]) - float(group[0]["t_in"])
            group_counts = Counter(item["tool"] for item in group)
            out.extend(
                [
                    f"\n## {current_movement} · {MOVEMENT_TITLES[current_movement]}\n",
                    (
                        f"`{mmss(group[0]['t_in'])} – {mmss(group[-1]['t_out'])}` · {duration:.2f}s · "
                        f"frames **{group[0]['f_in']}–{group[-1]['f_out']}** · {len(group)} cues · "
                        f"{group_counts['R']} R / {group_counts['H+R']} H+R / {group_counts['H']} H\n"
                    ),
                    "| # | In | Dur | Frames | Tool | Source | Treatment | Observer | On screen | Visual | VO |",
                    "|---|---|---:|---|---|---|---|---|---|---|---|",
                ]
            )

        out.append(
            f"| {row['cue']} | {mmss(row['t_in'])} | {float(row['dur']):g}s | "
            f"{row['f_in']}–{row['f_out']} | **{row['tool']}** | {row['source_id'] or '—'} | "
            f"{row['treatment']} | {row['observer'] or '—'} | {row['onscreen'] or '—'} | "
            f"{row['description']} | {row['vo']} |"
        )

    out.extend(
        [
            "\n## Open production flags\n",
            "- The locked VO is 4:40.76, below the current 5–8 minute format specification. Do not pad automatically; resolve the format decision separately.\n",
            "- Cue 25 uses `SINCE 1994` as a placeholder. Replace it with a sourced year or remove the chip.\n",
            "- Verify the blue, purple and black bulb values before locking the colour ladder.\n",
            "- Undelivered asset-status fields remain `slug`. HG-01, HG-09 and HG-12 are approved after visual review.\n",
            "- The cue boundaries remain heuristic until the first by-ear editorial pass. The final audio waveform is authoritative.\n",
        ]
    )

    OUTPUT_MD.write_text("\n".join(out), encoding="utf-8")


def main() -> None:
    rows = build_rows()
    write_csv(rows)
    write_markdown(rows)
    counts = Counter(row["tool"] for row in rows)
    generated_screen_seconds = sum(float(row["dur"]) for row in rows if row["source_id"])
    print(f"Wrote {OUTPUT_CSV.name} and {OUTPUT_MD.name}")
    print(f"Cues: {len(rows)} | R: {counts['R']} | H+R: {counts['H+R']} | H: {counts['H']}")
    print(f"Generation units: {len(SOURCES)} | Generated/hybrid screen presence: {generated_screen_seconds:.2f}s")


if __name__ == "__main__":
    main()
