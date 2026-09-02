from pathlib import Path
from collections import deque
from PIL import Image


SOURCE = Path("work/micro-scene-01/observer-alarm-pose-sheet-v2-alpha.png")
DESTINATION = Path("public/characters/observer/alarm")

# The master sheet is 1536 x 1024. The two action poses overlap horizontally,
# so the recoil pose also gets a small source-space exclusion mask below.
REGIONS = {
    "neutral-alert-v1": (25, 170, 230, 805),
    "startled-alarm-v1": (245, 165, 485, 810),
    "listen-count-v1": (505, 165, 725, 810),
    "reach-extinguisher-v1": (725, 185, 1112, 820),
    "self-correct-recoil-v1": (1010, 160, 1305, 815),
    "outside-phone-v1": (1320, 170, 1525, 815),
}


def isolate_pose(name: str, cel: Image.Image) -> Image.Image:
    if name not in {"reach-extinguisher-v1", "self-correct-recoil-v1"}:
        return cel

    # Each intended action pose is one connected alpha silhouette. Keeping the
    # largest component removes the neighboring pose that overlaps the crop.
    alpha = cel.getchannel("A")
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
            x = index % cel.width
            y = index // cel.width
            for neighbor in (
                index - 1 if x else -1,
                index + 1 if x + 1 < cel.width else -1,
                index - cel.width if y else -1,
                index + cel.width if y + 1 < cel.height else -1,
            ):
                if neighbor >= 0 and opaque[neighbor] and not seen[neighbor]:
                    seen[neighbor] = 1
                    queue.append(neighbor)
        components.append(component)

    keep = set(max(components, key=len))
    pixels = cel.load()
    for index, is_opaque in enumerate(opaque):
        if is_opaque and index not in keep:
            pixels[index % cel.width, index // cel.width] = (0, 0, 0, 0)
    return cel


def main() -> None:
    image = Image.open(SOURCE).convert("RGBA")
    DESTINATION.mkdir(parents=True, exist_ok=True)

    for name, region in REGIONS.items():
        cel = image.crop(region)
        cel = isolate_pose(name, cel)
        alpha = cel.getchannel("A")
        bounds = alpha.getbbox()
        if bounds is None:
            raise RuntimeError(f"No visible pixels in {name}")

        left, top, right, bottom = bounds
        padding = 14
        left = max(0, left - padding)
        top = max(0, top - padding)
        right = min(cel.width, right + padding)
        bottom = min(cel.height, bottom + padding)
        cel = cel.crop((left, top, right, bottom))

        output = DESTINATION / f"{name}.png"
        cel.save(output)
        print(f"{name}: {cel.width} x {cel.height}; {output}")


if __name__ == "__main__":
    main()
