import statistics as st, re, json
DEC=[("How a fire sprinkler works",120027),("How a lawn sprinkler works",445177),
("How a Gas Regulator Actually Works",1525195),("Inside the USS Monitor: How It Actually Worked",1008469),
("How the Colosseum Actually Worked",6321168),("Ancient Greek Warships Were Nothing Like What You've Seen in Movies",591308),
("How a pressure gauge works",287071),("Missile Silos Were Far More Complex Than You Think",648805),
("How a hydraulic jack works",1607187),("The Design Change That Took 114 Lives | Hyatt Walkway Collapse",1117159),
("Medieval Siege Weapons Were More Than Just Catapults",920914),("The Insane Engineering of an Antarctic Base | Halley VI",432067),
("How Medieval Castles Actually Worked",3284571),("How a Car Differential Works",81313),
("The Genius Design of the Eiffel Tower's Elevators",212018),("The Clever Mechanism That Gives Cordless Drills So Much Torque",454739),
("How a gas lighter works",121664),("Inside the Sub That Reached Earth's Deepest Point | Bathyscaphe Trieste",1475335),
("How the Liberty Ship Actually Worked",3005463),("How a torque wrench works",3772127),
("How a laser level works",75364),("The 19th-Century Submarine That Simply Shouldn't Exist",819641),
("How the First Modern Military Submarine Actually Worked",570428),("We Finally Know What Actually Happened To The Hindenburg",1029227),
("The Genius Design of Alcatraz",499893),("How an Explorer's Sailing Ship Actually Worked | HMS Beagle",536050),
("Wooden Warships Were Far More Complex Than You Think",1427038),("The Genius Design of Ancient Timekeeping | Ctesibius's Water Clock",240497)]
CN=[("The Bridge: Where It Came From",1065547),("How Does A RUDDER Work?",932607),("What Happened To The Derbyshire?",1436886),
("Why are ships so slow?",4125474),("Why are ships painted red below the waterline?",12331641),("What Happened To The Napoli?",1518324),
("How Stabilisers Reduce A Ship's Roll",7921183),("Icebreakers: How Do They Break Ice?",1749121),("HOW DO YOU WEIGH A SHIP?",1058333),
("The Truth About Anchoring Huge Ships",4331403),("Is This The World's Most Dangerous Wreck?",868350),("Why Did She Sink So Fast? | RMS Empress of Ireland",1145914),
("What is the BULBOUS BOW for?",4757047),("Why Don't Ships Have Enough Lifeboats?",1004004),("Why Do Submarines Float So Low?",2019382),
("Why Do Lighthouses Have Red Stripes?",821361),("Why Are Bows That Shape?",3429233),("How Does She Sail Against the Wind?",1626780),
("Why Don't Sails Work On Ships?",1127431),("What Happens If You Fall Off A Cruise Ship?",3247260),("What's Inside A Ships Lifeboat?",2158421),
("How Do Ships Stop Without Brakes?",1459230),("Golden Ray: The Typo That Cost $250,000,000",1452336),("Why Is The Bridge At The Back?",1243250),
("Why Did She Split In Half?",2504776),("Why Do MASSIVE Ships Play Chicken?",1505848),("Why Don't These Containers Fall Off?",831938),
("WHY DID COSTA CONCORDIA CAPSIZE? - Explaining the ship's stability using the official report",947487),("Stealth Ships: How They Work",1916239),
("Why Enclosed Spaces Are So Dangerous? | Enclosed Space Entry",2634650),("WHY DON'T CRUISE SHIPS TIP OVER? | An introduction to ship stability",1555960),
("Why Do Ships Have Flat Bottoms?",3958644),("Why don't ships go straight? | Great Circles",1109406),("What Happens To Lost Containers?",842219),
("Why Have Lifeboats Killed More People Than They Have Saved?",1306565),("Why Do Ships Have Two Balls?",1202171),
("Hydrostatic Release Unit (HRU) | Rigging and Operation",895818),("What happened to the Andrea Doria?",3099059),
("How Did She Rip Her Bottom On This Rock?",1094056),("MS Estonia | The story of her sinking",2663827),
("Why Are Big Ships Faster Than Small Ships?",5053961),("Why Don't Ships Have Headlights?",2283680),('What does "Slow Steaming" mean?',2387883),
("Where Do Ships Get Their Fuel?",1262420),("You Can Smoke On A Fuel Tanker! So Why Is This Sign Here?",1198310),
("What Law Applies In International Waters?",1342049),("What's the Advantage of Three Hulls?",1383218),("Why Does Rice Sink Ships?",2271826),
("Why Are 4 Blades Better Than 3?",2907888),("What happens after you flush the toilet on a cruise ship?",5002617)]

def rep(name, data, pats):
    vals=[v for _,v in data]
    print(f"\n===== {name} — n={len(data)}, sample median {st.median(vals):,.0f} =====")
    print(f"{'pattern':<42} {'n':>3} {'median':>11} {'index':>7}")
    base=st.median(vals)
    rows=[]
    for label,rx in pats:
        m=[v for t,v in data if re.search(rx,t,re.I)]
        if m: rows.append((label,len(m),st.median(m),st.median(m)/base))
    for label,n,md,ix in sorted(rows,key=lambda r:-r[3]):
        print(f"{label:<42} {n:>3} {md:>11,.0f} {ix:>6.2f}x")

rep("DECONSTRUCTED", DEC, [
 ("'Actually Work(s|ed)'", r"actually work"),
 ("'Far More Complex Than You Think'", r"far more complex than you think"),
 ("'Inside the ...'", r"^inside the"),
 ("'The Genius Design of'", r"genius design of"),
 ("'Nothing Like What You've Seen in Movies'", r"nothing like what you"),
 ("'How a <object> works' (old era)", r"^how a .+ works?$"),
 ("Pipe-subtitle  '| Name'", r"\|"),
 ("Superlative adj (Insane/Clever/Genius)", r"\b(insane|clever|genius)\b"),
 ("Historic subject", r"medieval|ancient|colosseum|19th|liberty|hindenburg|alcatraz|monitor|greek|submarine|silo|hyatt|antarctic|beagle"),
 ("Death / disaster in title", r"lives|collapse|hindenburg|shouldn|killed"),
])

rep("CASUAL NAVIGATION", CN, [
 ("'Why are ...'", r"^why are"),
 ("'Why do/does ...'", r"^why do(es)? "),
 ("'Why don't ...'", r"^why don'?t"),
 ("ANY 'Why ...' opener", r"^why "),
 ("'How do(es) ... work'", r"^how do(es)?\b"),
 ("'What happened to ...'", r"^what happened to"),
 ("'What ...' opener", r"^what"),
 ("'She/Her' (ship as person)", r"\b(she|her)\b"),
 ("Pipe-subtitle  '| Name'", r"\|"),
 ("Named vessel / case", r"derbyshire|napoli|andrea doria|estonia|costa concordia|golden ray|empress of ireland"),
])
