from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
ASSET_DIR = ROOT / "assets-canon" / "automotive"


for path in sorted(ASSET_DIR.iterdir()):
    if path.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
        continue

    with Image.open(path) as image:
        alpha = image.getchannel("A") if "A" in image.getbands() else None
        bounds = alpha.getbbox() if alpha is not None else (0, 0, image.width, image.height)
        corners = (
            [
                alpha.getpixel((0, 0)),
                alpha.getpixel((image.width - 1, 0)),
                alpha.getpixel((0, image.height - 1)),
                alpha.getpixel((image.width - 1, image.height - 1)),
            ]
            if alpha is not None
            else []
        )
        print(
            f"{path.name}: canvas={image.width}x{image.height} "
            f"bounds={bounds} corner_alpha={corners}"
        )
