#!/usr/bin/env python3
"""Pilot status report. Generated from production-resolved.json + cues-v2.csv.
Never hand-edit STATUS.md - re-run this."""
import json, csv, collections, os, datetime, sys
sys.stdout.reconfigure(encoding='utf-8')
HERE=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D=json.load(open(os.path.join(HERE,'production-resolved.json')))
rows=list(csv.DictReader(open(os.path.join(HERE,'cues-v2.csv'))))
TOT=D['durationInFrames']; FPS=D['fps']
def ts(f):
    s=f/FPS; return f"{int(s//60)}:{s%60:05.2f}"
cov=[None]*TOT
for p in D['placements']:
    for i in range(p['from'], min(TOT,p['from']+p['duration'])): cov[i]=p['status']
placed=sum(1 for c in cov if c)
appr=sum(1 for c in cov if c=='approved')

MV=collections.OrderedDict()
for r in rows:
    m=r['movement']; a,b=int(r['f_in']),int(r['f_out'])
    if m not in MV: MV[m]=[a,b,0]
    MV[m][0]=min(MV[m][0],a); MV[m][1]=max(MV[m][1],b)

L=[]
L.append("# Pilot 01 — production status\n")
L.append(f"*Generated {datetime.date.today()} by `tools/status.py`. Do not hand-edit.*\n")
L.append(f"**Timeline {TOT} frames · {TOT/FPS:.1f}s · {FPS} fps · {D['width']}x{D['height']}**\n")
L.append(f"| | frames | seconds | % |")
L.append("|---|---|---|---|")
L.append(f"| Approved on timeline | {appr} | {appr/FPS:.0f}s | **{100*appr/TOT:.0f}%** |")
L.append(f"| In review | {placed-appr} | {(placed-appr)/FPS:.0f}s | {100*(placed-appr)/TOT:.0f}% |")
L.append(f"| **Not built (slug)** | **{TOT-placed}** | **{(TOT-placed)/FPS:.0f}s** | **{100*(TOT-placed)/TOT:.0f}%** |")

L.append("\n## By movement\n")
L.append("| mv | range | frames | placed | |")
L.append("|---|---|---|---|---|")
for m,(a,b,_) in MV.items():
    n=b-a; f=sum(1 for c in cov[a:b] if c)
    bar='█'*int(20*f/n)+'░'*(20-int(20*f/n))
    L.append(f"| {m} | {ts(a)}–{ts(b)} | {n} | {100*f/n:.0f}% | `{bar}` |")

L.append("\n## Scenes\n")
L.append("| scene | editorial | cues | layers |")
L.append("|---|---|---|---|")
for s in D['scenes']:
    lay=" · ".join(f"{l['kind']}:**{l['status']}**" for l in s['layers'])
    L.append(f"| `{s['id']}` | {s['editorialStatus']} | {len(s['cues'])} | {lay} |")

pend=[(s['id'],l) for s in D['scenes'] for l in s['layers'] if l['status']=='pending']
media=[i for i,l in pend if l['kind']=='media']
over=[i for i,l in pend if l['kind']=='overlay']
L.append("\n## Remaining work\n")
L.append(f"**{len(media)} generated plates:** {', '.join(media) or 'None'}")
L.append(f"\n**{len(over)} Remotion overlays:** {', '.join(over) or 'None'}")
empty=[m for m,(a,b,_) in MV.items() if not any(cov[a:b])]
ef=sum(MV[m][1]-MV[m][0] for m in empty)
L.append(f"\n**{len(empty)} movements with nothing built:** {', '.join(empty)} — {ef} frames, {ef/FPS:.0f}s")

gaps=[];st=None
for i,c in enumerate(list(cov)+['x']):
    if not c and st is None: st=i
    elif c and st is not None: gaps.append((st,i)); st=None
L.append("\n## Gaps on the timeline\n")
L.append("| from | to | frames | seconds | movements |")
L.append("|---|---|---|---|---|")
for a,b in sorted(gaps,key=lambda g:-(g[1]-g[0])):
    ms=sorted({r['movement'] for r in rows if int(r['f_in'])<b and int(r['f_out'])>a})
    L.append(f"| {ts(a)} | {ts(b)} | {b-a} | {(b-a)/FPS:.1f} | {', '.join(ms)} |")

out=os.path.join(HERE,'STATUS.md')
open(out,'w',encoding='utf-8').write("\n".join(L)+"\n")
print("\n".join(L[:14]))
print(f"\n-> wrote {out}")
