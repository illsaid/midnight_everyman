"""Transcribe a locked episode voice-over to word evidence and Remotion captions."""

from __future__ import annotations

import argparse
import hashlib
import json
import time
from pathlib import Path

from faster_whisper import WhisperModel


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("audio", type=Path)
    parser.add_argument("output_dir", type=Path)
    parser.add_argument("--audio-label", required=True)
    parser.add_argument("--model-cache", type=Path, required=True)
    parser.add_argument("--initial-prompt", default="")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    started = time.monotonic()
    model = WhisperModel(
        "base.en",
        device="cpu",
        compute_type="int8",
        cpu_threads=6,
        download_root=str(args.model_cache),
    )
    segments, info = model.transcribe(
        str(args.audio),
        language="en",
        word_timestamps=True,
        beam_size=5,
        vad_filter=True,
        initial_prompt=args.initial_prompt,
    )
    words: list[dict[str, object]] = []
    for segment in segments:
        words.extend(
            {
                "word": word.word.strip(),
                "start": word.start,
                "end": word.end,
                "probability": word.probability,
            }
            for word in segment.words or []
        )
        print(f"{segment.start:.2f}-{segment.end:.2f}: {segment.text}", flush=True)

    audio_hash = hashlib.sha256(args.audio.read_bytes()).hexdigest()
    evidence = {
        "schemaVersion": 1,
        "model": "faster-whisper base.en int8",
        "audio": args.audio_label,
        "audioSha256": audio_hash,
        "duration": info.duration,
        "elapsedSeconds": time.monotonic() - started,
        "words": words,
    }
    captions = [
        {
            "text": f" {word['word']}",
            "startMs": round(float(word["start"]) * 1000),
            "endMs": round(float(word["end"]) * 1000),
            "timestampMs": round(float(word["start"]) * 1000),
            "confidence": word["probability"],
        }
        for word in words
    ]
    (args.output_dir / "words-asr.json").write_text(
        json.dumps(evidence, indent=2) + "\n", encoding="utf-8"
    )
    (args.output_dir / "captions-asr.json").write_text(
        json.dumps(captions, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Saved {len(words)} word timestamps and {len(captions)} raw ASR captions.", flush=True)


if __name__ == "__main__":
    main()
