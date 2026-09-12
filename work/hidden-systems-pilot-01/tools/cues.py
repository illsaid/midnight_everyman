import json, csv
d=json.load(open("words_est.json")); W=d["words"]; DUR=d["duration"]; FPS=24
def t(i): return W[i]["s"]
MOV=[("M01","The Lie"),("M02","One Head Opens"),("M03","No System"),("M04","Look Up"),
     ("M05","Four Parts"),("M06","The Trigger"),("M07","Shatter"),("M08","Colour Ladder"),
     ("M09","The Judgement"),("M10","No Reset / The Flood"),("M11","Several Hundred"),("M12","Close")]
C=[
# idx, mov, tool, observer, onscreen, description
(0,"M01","H","cinema","","Cinema interior, UPA flat. Observer in a seat, up-lit by screen glow, delighted"),
(8,"M01","H","","","Hand raises a lighter beneath a sprinkler head, flame flickers, ominous"),
(17,"M01","H","","","Wide: every head on the ceiling bursts at once, full deluge, movie logic"),
(34,"M01","H","soaked","","Observer soaked, papers flying past him, hero silhouette runs through spray"),
(46,"M01","R","","MOVIE MAGIC","Freeze frame; stamp lands over the still"),
(50,"M01","R","","COMPLETE NONSENSE","Hard cut. Coral stamp. Colour drains out of the scene to paper"),
(55,"M02","R","","","Wipe from paper to a real ceiling; camera settles"),
(60,"M02","H","","","Real ceiling: ONE head firing. Everything else dry and still"),
(64,"M02","H","","","Push in on the single active head, directly above the fire"),
(72,"M02","H","","","Slow pan across rows of sealed, dry heads. Nothing happening"),
(84,"M03","R","","NO CONTROL PANEL","Control-panel icon assembles, then is struck through"),
(96,"M03","R","","","Ceiling grid: each head resolves into an isolated node. No connecting lines are ever drawn"),
(107,"M03","R","","ONE THING","One node scales up, alone in frame"),
(113,"M03","R","","local air temperature","Thermometer ring closes around the single node"),
(121,"M03","R","","","Top-down floorplan. Fire icon in one corner; heat gradient stays local"),
(137,"M03","R","","1","Counter appears beside the active head"),
(151,"M03","R","","2 -> 1","Counter flickers to 2, settles back to 1"),
(153,"M03","R","","","Grid recedes; the question opens up"),
(161,"M03","R","","THAT ONE  /  THE OTHER 300","Split comparison locks in"),
(174,"M04","H","walks-under","","Corridor. Observer walks beneath the head and does not look up. Camera holds on the head after he exits"),
(176,"M04","H","","","Macro: brass fitting, shallow focus, ordinary ceiling behind"),
(183,"M04","H","walks-under","","Same corridor, second pass. He walks under again. Still doesn't look"),
(194,"M04","R","","","Cutaway: ceiling tile peels back, pipe revealed above"),
(198,"M04","R","","HIGH PRESSURE","Water fills the pipe; pressure gauge swings"),
(210,"M04","R","","SINCE 1994","Date tick backwards to construction"),
(217,"M05","R","","FOUR PARTS","Exploded view assembles"),
(219,"M05","R","","1 · FRAME","Frame highlighted, screwed into the pipe"),
(225,"M05","R","","2 · CAP","Cap highlighted, sealing the opening"),
(230,"M05","R","","3 · DEFLECTOR","Deflector disc highlighted; notches visible"),
(240,"M05","R","","4 · BULB — under permanent compression","Compression arrows animate between cap and frame"),
(251,"M05","R","","~ grain of rice","Scale comparison beside the bulb"),
(262,"M05","R","","glycerine-based liquid","Macro cutaway; liquid fills the bulb"),
(268,"M05","R","","","One air bubble appears inside the liquid, labelled"),
(274,"M06","R","","","Mechanism clock starts. Beat before the fire"),
(281,"M06","H","oblivious","","Office. Observer at a desk, back turned. Waste bin catches fire behind him"),
(284,"M06","H","oblivious","","Smoke curls up past his shoulder. He does not notice"),
(292,"M06","R","","NO SMOKE DETECTION","Nose icon struck through"),
(295,"M06","R","","HEAT ONLY","Thermometer confirms"),
(302,"M06","R","","","Hot gas plume spreads flat across the ceiling plane"),
(311,"M06","R","","","Plume reaches the nearest head node"),
(315,"M06","R","","","Macro: liquid expands inside the bulb"),
(323,"M06","R","","","The bubble shrinks"),
(326,"M06","R","","0:10   0:20","Countdown ticks"),
(329,"M06","R","","","Bubble gone. Liquid pressed hard against the glass"),
(343,"M06","H","","","Macro hero: intact bulb under visible strain, light stressing through it"),
(347,"M06","R","cel:thinkChin","","Observer beat — unimpressed by how stubborn glass is"),
(355,"M06","R","","","Hard suspense beat. Everything stops"),
(358,"M07","H","","","Slow-mo: the bulb shatters from the inside, shards outward"),
(364,"M07","H","","","The cap drops away"),
(368,"M07","R","","WAITING 30 YEARS","Water released; the wait counter zeroes"),
(381,"M07","H","","","Water strikes the deflector and breaks into a full cone of spray"),
(390,"M07","R","","","Exponential fire curve climbing, doubling every half minute"),
(403,"M07","R","","","Curve snaps flat the instant water lands"),
(405,"M07","H","under-dry","","Observer stands under the DRY neighbouring head, looking across at the wet one"),
(419,"M07","H","under-dry","","Held. Nothing happens. He waits"),
(425,"M07","H","","","Fire brigade arrive. Exterior, UPA flat"),
(430,"M07","R","","THE WHOLE MECHANISM","Checklist opens"),
(436,"M07","R","","No sensor · No wiring · No computer","Items strike in one at a time"),
(442,"M07","R","","No control panel · No decision of any kind","Final items settle"),
(450,"M07","R","","","Return to the macro bubble; it shrinks to nothing. Pull wide to a calm building"),
(459,"M08","R","","","Swatch row assembles across the frame"),
(470,"M08","R","","ORANGE   57 °C / 135 °F","Orange swatch expands, chip sets"),
(475,"M08","R","","RED   68 °C / 155 °F","Red swatch"),
(478,"M08","R","","YELLOW   79 °C / 175 °F","Yellow swatch"),
(480,"M08","R","","GREEN   93 °C / 200 °F","Green swatch"),
(482,"M08","R","","BLUE 141/286 · PURPLE 182/360 · BLACK 227/500","Three high swatches added, chips smaller"),
(487,"M08","H","","","Boiler room / commercial kitchen ceiling, heat haze — where 200 °F is an ordinary Tuesday"),
(497,"M09","R","","A JUDGEMENT, NOT A SETTING","Type beat over the cooling swatch row"),
(504,"M09","H","installer","","Observer AS INSTALLER. Tray of coloured bulbs. He picks one up, weighs it"),
(516,"M09","H","","","Commercial kitchen: an office-rated head directly above a deep fryer, steam rising"),
(525,"M09","H","","","It trips at lunchtime. Staff unimpressed, water over the pass"),
(530,"M09","H","","","Quiet office. Oversized industrial-rated head on the ceiling"),
(541,"M09","H","","","A small fire smoulders below it. The head stays shut"),
(550,"M09","H","installer","","Installer on a stepladder, looking around the empty room, guessing"),
(569,"M09","H","installer","","He packs up, walks out, the door closes. Empty room. The head above"),
(572,"M10","R","","SINGLE USE","Head greys out and locks"),
(581,"M10","R","","NO SWITCH","Toggle icon struck through"),
(588,"M10","H","","","Technician arrives with a spanner"),
(593,"M10","H","","","Hands screw in the replacement head, close on the thread"),
(598,"M10","R","","","New head settles. The wait restarts from zero"),
(605,"M10","R","","WATER DAMAGE?","Comparison chart opens"),
(617,"M10","R","","SPRINKLER   60 L/min","Sprinkler bar grows and settles"),
(625,"M10","R","","FIREHOSE   600–1200 L/min","Firehose bar dwarfs it, runs off frame"),
(635,"M10","R","","THE SPRINKLER PREVENTS THE FLOOD","Inversion lands"),
(647,"M11","R","","","Pull back to the full ceiling grid; every head a separate dot"),
(656,"M11","R","","","Dots pulse individually, out of phase. No lines between them"),
(662,"M11","R","","its own small glass fuse","One dot glows"),
(669,"M11","R","","","Camera drifts across inert dots, minding their own business"),
(681,"M11","R","","NOTHING IS WATCHING","Type over the empty grid"),
(687,"M11","R","","NOTHING IS DECIDING","Grid fades toward paper"),
(691,"M12","H","","","Macro: the glass bulb, rim light, pressure implied behind it"),
(697,"M12","H","","","Slow push-in. Droplet tension on the surface"),
(707,"M12","H","looks-up","","Observer looks up. Hold on him, not the ceiling. Fade"),
]
rows=[]
for n,(i,mov,tool,obs,txt,desc) in enumerate(C):
    s=t(i); e=t(C[n+1][0]) if n+1<len(C) else DUR
    vo=" ".join(W[j]["w"] for j in range(i,(C[n+1][0] if n+1<len(C) else len(W))))
    rows.append({"cue":f"{n+1:02d}","movement":mov,"t_in":round(s,2),"t_out":round(e,2),
        "dur":round(e-s,2),"f_in":round(s*FPS),"f_out":round(e*FPS),"frames":round(e*FPS)-round(s*FPS),
        "tool":tool,"observer":obs,"onscreen":txt,"description":desc,"vo":vo,"status":"slug"})
with open("cues.csv","w",newline="") as f:
    wtr=csv.DictWriter(f,fieldnames=list(rows[0].keys())); wtr.writeheader(); wtr.writerows(rows)

print(f"{len(rows)} cues | avg {sum(r['dur'] for r in rows)/len(rows):.2f}s | "
      f"H={sum(1 for r in rows if r['tool']=='H')} R={sum(1 for r in rows if r['tool']=='R')}")
print(f"\nshort (<2.0s): {[r['cue'] for r in rows if r['dur']<2.0]}")
print(f"long  (>6.0s): {[(r['cue'],r['dur']) for r in rows if r['dur']>6.0]}")
print("\nmov   t_in    t_out    dur   frames  cues  H  title")
for m,title in MOV:
    g=[r for r in rows if r["movement"]==m]
    d=g[-1]["t_out"]-g[0]["t_in"]
    print(f"{m}  {g[0]['t_in']:>6.2f}  {g[-1]['t_out']:>6.2f}  {d:>6.2f}  {g[-1]['f_out']-g[0]['f_in']:>6}  {len(g):>4}  {sum(1 for r in g if r['tool']=='H'):>2}  {title}")
