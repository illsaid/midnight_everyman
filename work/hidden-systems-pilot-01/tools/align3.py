import re, json, bisect
DUR=280.764
toks=open("sil.txt").read().split()
ev=[(toks[i].rstrip(':'),float(toks[i+1])) for i in range(0,len(toks),2)]
spans=[];cur=0.0
for k,t in ev:
    if k=="silence_start":
        if t>cur: spans.append([cur,t])
    else: cur=t
if cur<DUR: spans.append([cur,DUR])
spans=[s for s in spans if s[1]-s[0]>0.03]
dur=[b-a for a,b in spans]; tot=sum(dur)
cumsp=[0.0]
for d in dur: cumsp.append(cumsp[-1]+d)

def speech_to_wall(x):
    x=max(0.0,min(x,tot))
    i=bisect.bisect_right(cumsp,x)-1
    i=min(i,len(spans)-1)
    return spans[i][0]+(x-cumsp[i])

paras=[l.strip() for l in open("script.txt") if l.strip()]
words=[]
for pi,p in enumerate(paras):
    for w in p.split(): words.append((w,pi))
W=[len(re.sub(r'[^A-Za-z0-9]','',w))+1.7 for w,_ in words]
TW=sum(W)
cw=[0.0]
for w in W: cw.append(cw[-1]+w)

out=[]
for i,(w,pi) in enumerate(words):
    s=speech_to_wall(cw[i]/TW*tot); e=speech_to_wall(cw[i+1]/TW*tot)
    out.append({"i":i,"w":w,"p":pi,"s":round(s,3),"e":round(e,3)})
json.dump({"duration":DUR,"speech":tot,"words":out},open("words_est.json","w"))
print(f"spans {len(spans)}  speech {tot:.1f}s  silence {DUR-tot:.1f}s  words {len(words)}")
print(f"overall {len(words)/DUR*60:.1f} wpm | articulation {len(words)/tot*60:.1f} wpm\n")
print("para  start    end    dur  wds   wpm  text")
for pi,p in enumerate(paras):
    ws=[o for o in out if o["p"]==pi]
    d=ws[-1]["e"]-ws[0]["s"]
    print(f"{pi:>3} {ws[0]['s']:>7.2f} {ws[-1]['e']:>7.2f} {d:>6.2f} {len(ws):>4} {len(ws)/d*60:>5.0f}  {p[:52]}")
