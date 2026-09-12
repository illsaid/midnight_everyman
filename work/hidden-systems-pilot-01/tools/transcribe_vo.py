"""Derive word timings from the actual locked recording; keep raw ASR evidence."""
import json
import time
from pathlib import Path
from faster_whisper import WhisperModel

pilot = Path(__file__).resolve().parent.parent
started = time.monotonic()
model = WhisperModel('base.en', device='cpu', compute_type='int8', cpu_threads=6,
                     download_root=str(pilot / 'tools' / '.models'))
segments, info = model.transcribe(str(pilot / 'audio' / 'sprinkvo2.mp3'),
    language='en', word_timestamps=True, beam_size=5, vad_filter=True,
    initial_prompt='Sprinkler head, glycerine-based liquid, deflector, glass bulb.')
words = []
for segment in segments:
    words.extend({'word': w.word.strip(), 'start': w.start, 'end': w.end,
                  'probability': w.probability} for w in segment.words or [])
    print(f'{segment.start:.2f}-{segment.end:.2f}: {segment.text}', flush=True)
result = {'model': 'faster-whisper base.en int8', 'audio': 'audio/sprinkvo2.mp3',
          'duration': info.duration, 'elapsed_seconds': time.monotonic() - started,
          'words': words}
(pilot / 'tools' / 'words-asr.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
print(f'Saved {len(words)} measured word timestamps.', flush=True)
