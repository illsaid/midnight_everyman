from __future__ import annotations

import json
from collections import deque
from pathlib import Path
from statistics import median

from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
WORK = ROOT / "work" / "pose-library-v1"
MASTERS = WORK / "masters"
DESTINATION = ROOT / "public" / "characters" / "observer" / "library"
REPORT = WORK / "extraction-report.json"

SHEETS = {
    "sheet-a-information": {
        "file": "sheet-a-information-v1-alpha.png",
        "poses": [
            "think-chin",
            "inspect-forward",
            "point-right",
            "present-open",
            "compare-hands",
            "shrug-confused",
        ],
        "calibration_panels": [0, 1, 2, 3, 4, 5],
    },
    "sheet-b-emotion": {
        "file": "sheet-b-emotion-v1-alpha.png",
        "poses": [
            "suspicious-squint",
            "shock-large",
            "fear-brace",
            "panic-hands",
            "joy-open",
            "relief-sigh",
        ],
        "calibration_panels": [0, 1, 2, 3, 4, 5],
    },
    "sheet-c-physical": {
        "file": "sheet-c-physical-v1-alpha.png",
        "poses": [
            "sad-slump",
            "anger-protest",
            "sleepy-standing",
            "crouch-cover",
            "run-away-key",
            "jump-joy-key",
        ],
        "calibration_panels": [0, 1, 2],
    },
}

VIRTUAL_GROUND = {
    # Preserve the intended airborne gap below the figure. Other poses anchor
    # to their mechanically detected lowest shoe pixels.
    "jump-joy-key": 0.90,
}


def panel_box(index: int, width: int, height: int) -> tuple[int, int, int, int]:
    panel_width = width // 3
    panel_height = height // 2
    column = index % 3
    row = index // 3
    return (
        column * panel_width,
        row * panel_height,
        (column + 1) * panel_width,
        (row + 1) * panel_height,
    )


def alpha_bounds(panel: Image.Image) -> tuple[int, int, int, int]:
    bounds = panel.getchannel("A").getbbox()
    if bounds is None:
        raise RuntimeError("Panel has no visible pixels")
    return bounds


def keep_largest_component(panel: Image.Image) -> Image.Image:
    """Remove fragments leaking across a generated sheet's panel boundary."""
    alpha = panel.getchannel("A")
    opaque = bytearray(1 if value > 16 else 0 for value in alpha.tobytes())
    seen = bytearray(len(opaque))
    components: list[list[int]] = []

    for start, is_opaque in enumerate(opaque):
        if not is_opaque or seen[start]:
            continue
        queue = deque([start])
        seen[start] = 1
        component: list[int] = []
        while queue:
            index = queue.popleft()
            component.append(index)
            x = index % panel.width
            y = index // panel.width
            for neighbor in (
                index - 1 if x else -1,
                index + 1 if x + 1 < panel.width else -1,
                index - panel.width if y else -1,
                index + panel.width if y + 1 < panel.height else -1,
            ):
                if neighbor >= 0 and opaque[neighbor] and not seen[neighbor]:
                    seen[neighbor] = 1
                    queue.append(neighbor)
        components.append(component)

    if not components:
        raise RuntimeError("Panel has no connected alpha component")

    keep = set(max(components, key=len))
    pixels = panel.load()
    for index in range(panel.width * panel.height):
        x = index % panel.width
        y = index // panel.width
        if index not in keep and pixels[x, y][3] > 0:
            pixels[x, y] = (0, 0, 0, 0)
    return panel


def ground_anchor(panel: Image.Image, pose_id: str) -> tuple[float, float]:
    alpha = panel.getchannel("A")
    pixels = alpha.load()

    if pose_id in VIRTUAL_GROUND:
        bounds = alpha_bounds(panel)
        return ((bounds[0] + bounds[2]) / 2, panel.height * VIRTUAL_GROUND[pose_id])

    visible = [
        (x, y)
        for y in range(panel.height)
        for x in range(panel.width)
        if pixels[x, y] > 32
    ]
    if not visible:
        raise RuntimeError(f"No visible pixels in {pose_id}")

    bottom = max(y for _, y in visible)
    shoe_band = [(x, y) for x, y in visible if y >= bottom - 14]
    anchor_x = sum(x for x, _ in shoe_band) / len(shoe_band)
    return anchor_x, float(bottom)


def padded_crop(
    bounds: tuple[int, int, int, int], width: int, height: int, padding: int = 16
) -> tuple[int, int, int, int]:
    left, top, right, bottom = bounds
    return (
        max(0, left - padding),
        max(0, top - padding),
        min(width, right + padding),
        min(height, bottom + padding),
    )


def main() -> None:
    DESTINATION.mkdir(parents=True, exist_ok=True)
    records: list[dict[str, object]] = []

    for sheet_id, spec in SHEETS.items():
        image = Image.open(MASTERS / str(spec["file"])).convert("RGBA")
        poses = list(spec["poses"])
        panels = [
            keep_largest_component(
                image.crop(panel_box(index, image.width, image.height))
            )
            for index in range(6)
        ]
        bounds = [alpha_bounds(panel) for panel in panels]
        calibration_heights = [
            bounds[index][3] - bounds[index][1]
            for index in list(spec["calibration_panels"])
        ]
        reference_height = median(calibration_heights)
        native_scale = round(700 / reference_height, 4)

        for index, (pose_id, panel, pose_bounds) in enumerate(zip(poses, panels, bounds)):
            anchor_x, anchor_y = ground_anchor(panel, pose_id)
            crop = padded_crop(pose_bounds, panel.width, panel.height)
            cel = panel.crop(crop)
            output_name = f"{pose_id}-v1.png"
            cel.save(DESTINATION / output_name)

            local_anchor_x = (anchor_x - crop[0]) / cel.width
            local_anchor_y = (anchor_y - crop[1]) / cel.height
            alpha = cel.getchannel("A")
            alpha_values = list(alpha.getdata())
            partially_transparent = sum(1 for value in alpha_values if 0 < value < 255)

            record = {
                "id": pose_id,
                "file": f"characters/observer/library/{output_name}",
                "sourceSheet": sheet_id,
                "panel": index + 1,
                "canvas": [cel.width, cel.height],
                "anchor": [round(local_anchor_x, 4), round(local_anchor_y, 4)],
                "nativeScale": native_scale,
                "facing": "right",
                "alpha": {
                    "partiallyTransparentPixels": partially_transparent,
                    "cornerAlpha": [
                        alpha.getpixel((0, 0)),
                        alpha.getpixel((cel.width - 1, 0)),
                        alpha.getpixel((0, cel.height - 1)),
                        alpha.getpixel((cel.width - 1, cel.height - 1)),
                    ],
                },
            }
            records.append(record)
            print(
                f"{pose_id}: {cel.width}x{cel.height}; "
                f"anchor={record['anchor']}; scale={native_scale}"
            )

    REPORT.write_text(
        json.dumps({"schemaVersion": 1, "poses": records}, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {REPORT}")


if __name__ == "__main__":
    main()
