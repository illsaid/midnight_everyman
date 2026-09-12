"""Match editorial cue text to measured ASR words, without changing the script."""
import csv
import difflib
import json
import hashlib
import re
from pathlib import Path

PILOT = Path(__file__).resolve().parent.parent
SMALL = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split()
TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

def number_words(n):
    if n < 20:
        return [SMALL[n]]
    if n < 100:
        return [TENS[n // 10]] + (number_words(n % 10) if n % 10 else [])
    if n < 1000:
        return number_words(n // 100) + ['hundred'] + (number_words(n % 100) if n % 100 else [])
    return [str(n)]

def tokens(text):
    result = []
    for word in re.findall(r"[a-z]+(?:'[a-z]+)?|\d+", text.lower().replace('’', "'")):
        result.extend(number_words(int(word)) if word.isdigit() else [word])
    return result

rows = list(csv.DictReader((PILOT / 'cues-v2.csv').open(encoding='utf-8-sig')))
originals = {row['cue']: row for row in csv.DictReader((PILOT / 'cues.csv').open(encoding='utf-8-sig'))}
asr = json.loads((PILOT / 'tools' / 'words-asr.json').read_text(encoding='utf-8'))
spoken = []
for word in asr['words']:
    for token in tokens(word['word']):
        spoken.append({**word, 'token': token})
script = []
starts = []
for row in rows:
    starts.append(len(script))
    script.extend(tokens(row['vo']))
matcher = difflib.SequenceMatcher(None, script, [w['token'] for w in spoken], autojunk=False)
mapping = {}
for block in matcher.get_matching_blocks():
    for offset in range(block.size):
        mapping[block.a + offset] = block.b + offset
print(f'Exact normalized word match: {len(mapping)}/{len(script)}')
print('Differences:')
for tag, a, b, c, d in matcher.get_opcodes():
    if tag != 'equal':
        print(tag, script[a:b], '=>', [w['token'] for w in spoken[c:d]])
boundaries = []
unmatched = []
for row, start in zip(rows, starts):
    if start not in mapping:
        unmatched.append(row['cue'])
        print('UNMATCHED CUE', row['cue'], row['vo'])
        continue
    word = spoken[mapping[start]]
    # A three-frame visual lead lets a card establish before the corresponding word.
    frame = max(0, round(word['start'] * 24) - 3)
    if row['cue'] == '01':
        frame = 0
    boundaries.append({'cue': row['cue'], 'speech_start': word['start'],
        'f_in': frame, 'old_f_in': int(originals[row['cue']]['f_in']),
        'delta_seconds': round((frame - int(originals[row['cue']]['f_in'])) / 24, 3),
        'first_word': word['word'], 'confidence': word['probability']})
    print(f"{row['cue']}: {float(row['t_in']):7.2f} -> {frame / 24:7.2f}  {row['vo'][:65]}")
if unmatched:
    raise ValueError(f'Unmatched cue starts require review: {unmatched}')
for index, boundary in enumerate(boundaries):
    end = boundaries[index + 1]['f_in'] if index + 1 < len(boundaries) else 6738
    if end <= boundary['f_in']:
        raise ValueError(f'Non-increasing cue: {boundary}')
    boundary['f_out'] = end
    boundary['frames'] = end - boundary['f_in']
result = {'method': 'ASR word timestamps matched to unchanged cue text',
          'model': asr['model'], 'visual_lead_frames': 3, 'fps': 24,
          'audio': asr['audio'], 'cues': boundaries}
result['audio_sha256'] = hashlib.sha256((PILOT / asr['audio']).read_bytes()).hexdigest()
(PILOT / 'cue-timing-aligned.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
print('Saved cue-timing-aligned.json; rerun build_v2.py to apply.')
