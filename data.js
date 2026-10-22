// Inhoud van de app. Pas gerust aan of voeg toe.
// yt = zoekterm voor een voorbeeldfilmpje op YouTube.
// video = YouTube-id van een filmpje dat in de app zelf wordt afgespeeld (optioneel).

// ---------- Voetbaloefeningen (tekening: veld 160x100) ----------
// cones: [x,y] pionnen · me: speler · ball: bal · paths: {d, t:"ball"|"run"} · wall: muur aan rechterkant · goal: doel rechts
const DRILLS = [
  {title:"Slalom dribbelen", video:"vnngDOCy9C8", level:"Makkelijk", time:"5 min",
   text:"Dribbel om de pionnen heen met kleine tikjes. Gebruik binnen- en buitenkant van beide voeten.",
   steps:["Zet 5 pionnen (of flessen) op een rij, 1 meter uit elkaar","Dribbel heen en terug","Probeer het daarna alleen met je zwakke voet"],
   yt:"slalom dribbelen voetbaloefening jeugd",
   fig:{cones:[[45,50],[65,50],[85,50],[105,50],[125,50]], me:[22,50], ball:[30,50],
        paths:[{d:"M30 50 C40 30,50 30,55 50 S70 70,75 50 S90 30,95 50 S110 70,115 50 S130 30,140 50",t:"ball"}]}},
  {title:"Muurpasses", video:"SjP8Ii3Ip7s", level:"Makkelijk", time:"5 min",
   text:"Een muur speelt elke bal terug. Ideaal om je passing en aanname te trainen.",
   steps:["Ga 3 tot 5 meter van een muur staan","Pass met de binnenkant van je voet","Speel de terugkomende bal direct terug, eerst rechts, dan links"],
   yt:"muurpasses voetbal training alleen",
   fig:{wall:true, me:[40,50], ball:[50,50], paths:[{d:"M50 46 L140 46",t:"ball"},{d:"M140 56 L52 56",t:"ball"}]}},
  {title:"Kappen bij de pion", video:"w8RWhq6hEws", level:"Gemiddeld", time:"5 min",
   text:"Met een goede kap zet je een verdediger op het verkeerde been.",
   steps:["Dribbel naar een pion op 10 meter","Kap vlak voor de pion met binnen- of buitenkant","Versnel terug naar het begin"],
   yt:"binnenkant kap buitenkant kap voetbal techniek",
   fig:{cones:[[120,50]], me:[25,50], ball:[35,50], paths:[{d:"M35 46 L112 46 Q122 50 112 56 L40 58",t:"ball"}]}},
  {title:"Schieten op de hoeken", level:"Gemiddeld", time:"10 min",
   text:"Een bal in de hoek is moeilijker te stoppen dan een harde bal op de keeper.",
   steps:["Leg in het doel links en rechts een jas of pion als doelwit","Schiet 10 keer op links en 10 keer op rechts","Tel je treffers en verbeter je score"],
   yt:"plaatsen schieten voetbal oefening jeugd",
   fig:{goal:true, me:[40,50], ball:[52,50], paths:[{d:"M52 50 Q100 30 146 24",t:"ball"},{d:"M52 50 Q100 70 146 76",t:"ball"}]}},
  {title:"Aannemen en draaien", level:"Gemiddeld", time:"5 min",
   text:"Kijk over je schouder, neem de bal aan en draai in één beweging weg.",
   steps:["Speel de bal tegen een muur","Kijk over je schouder voordat de bal terugkomt","Neem aan met je verste voet en draai weg naar een pion opzij"],
   yt:"aannemen en draaien voetbal oefening",
   fig:{wall:true, cones:[[60,85]], me:[80,50], ball:[90,50], paths:[{d:"M90 50 L140 50",t:"ball"},{d:"M140 54 L86 54",t:"ball"},{d:"M80 56 Q70 70 62 80",t:"run"}]}},
  {title:"Snelle voetjes ladder", level:"Makkelijk", time:"5 min",
   text:"Snelle voeten helpen je om eerder bij de bal te zijn dan je tegenstander.",
   steps:["Leg een ladder met stokjes of krijt op de grond","Zet in elk vakje snel twee voeten neer","Daarna zijwaarts en met één voet per vakje"],
   yt:"loopladder oefeningen voetbal jeugd",
   fig:{ladder:true, me:[20,50], paths:[{d:"M30 50 L140 50",t:"run"}]}},
  {title:"Voetzool rollen", video:"leyTIMbWZww", level:"Makkelijk", time:"3 min",
   text:"Veel balcontacten in korte tijd. Kan zelfs binnen voor de tv.",
   steps:["Zet je voetzool op de bal","Rol de bal van links naar rechts onder je voeten door","Wissel steeds van voet, eerst langzaam, dan sneller"],
   yt:"voetzool oefeningen bal thuis voetbal",
   fig:{me:[80,30], ball:[80,62], paths:[{d:"M56 62 L104 62",t:"ball"},{d:"M104 70 L56 70",t:"ball"}]}},
  {title:"Hooghouden", video:"CIZngF-pTCw", level:"Alle niveaus", time:"5 min",
   text:"Hooghouden traint balgevoel, timing en concentratie.",
   steps:["Laat de bal uit je handen vallen en tik hem met je wreef omhoog","Vang hem op en probeer twee tikjes, dan drie","Houd je record bij"],
   yt:"leren hooghouden voetbal tips",
   fig:{me:[70,50], ball:[96,30], paths:[{d:"M92 70 Q96 20 100 70",t:"ball"},{d:"M100 70 Q104 25 108 70",t:"ball"}]}},
  {title:"Sprint met bal", level:"Zwaar", time:"5 min",
   text:"In een wedstrijd moet je snel kunnen dribbelen zonder de bal te verliezen.",
   steps:["Zet twee pionnen op 20 meter","Dribbel zo snel mogelijk naar de overkant","Wandel terug en herhaal 6 keer"],
   yt:"snelheid dribbelen voetbal oefening",
   fig:{cones:[[30,30],[30,70],[135,30],[135,70]], me:[20,50], ball:[30,50], paths:[{d:"M30 50 L135 50",t:"ball"}]}},
  {title:"1 tegen 1 in een vak", level:"Met z'n tweeën", time:"10 min",
   text:"Speel tegen een vriend of familielid. Wie dribbelt de bal over de achterlijn?",
   steps:["Maak een vak van 10 bij 10 meter met 4 pionnen","Je scoort door de bal over de lijn van de ander te dribbelen","Na elke goal begint de ander met de bal"],
   yt:"1 tegen 1 oefening voetbal jeugd",
   fig:{cones:[[40,15],[120,15],[40,85],[120,85]], me:[55,50], ball:[64,50], foe:[100,50], paths:[{d:"M64 46 Q90 25 118 30",t:"ball"}]}},
  {title:"Kopbal-sprong", level:"Gemiddeld", time:"5 min",
   text:"Bij een kopbal draait het om timing en sprongkracht.",
   steps:["Gooi de bal omhoog of laat iemand gooien","Spring met twee benen af","Kop met je voorhoofd, ogen open, en land zacht"],
   yt:"kopballen leren jeugd voetbal veilig",
   fig:{me:[70,60], ball:[74,18], paths:[{d:"M70 46 L70 24",t:"run"},{d:"M40 80 Q55 10 72 16",t:"ball"}]}},
  {title:"Driehoek passen", level:"Met z'n tweeën", time:"10 min",
   text:"Passen en meteen bewegen. Zo speel je je vrij in een wedstrijd.",
   steps:["Zet 3 pionnen in een driehoek, 8 meter uit elkaar","Pass naar je maat en loop naar de lege pion","Na 10 rondes andersom draaien"],
   yt:"driehoek passen voetbal oefening",
   fig:{cones:[[40,80],[120,80],[80,18]], me:[40,72], ball:[48,74], foe:[120,72], paths:[{d:"M48 74 L112 74",t:"ball"},{d:"M42 66 L76 26",t:"run"}]}}
];

// ---------- Thuis trainen (poppetje: 2 houdingen die afwisselen) ----------
// punten: h hoofd, s schouder, p heup, e/w elleboog/pols (1 en 2), k/f knie/voet (1 en 2)
const S = {h:[60,14], s:[60,24], p:[60,52], e1:[66,37], w1:[68,50], e2:[54,37], w2:[52,50], k1:[62,71], f1:[63,90], k2:[58,71], f2:[57,90]};
const P = (o) => Object.assign({}, S, o);
const EXERCISES = [
  {title:"Squats", video:"2RfVwwpgxCU", target:"Benen en billen", reps:"3 x 12",
   text:"Zak door alsof je op een stoel gaat zitten. Rug recht, knieën boven je tenen.",
   yt:"squat goede techniek uitleg", poses:[
    P({e1:[70,34],w1:[80,36],e2:[70,34],w2:[80,36]}),
    P({h:[52,36],s:[54,45],p:[44,64],k1:[64,66],f1:[62,90],k2:[64,66],f2:[62,90],e1:[66,46],w1:[78,46],e2:[66,46],w2:[78,46]})]},
  {title:"Push-ups", video:"FVCz52Sg3s8", target:"Armen, borst, schouders", reps:"3 x 8",
   text:"Lichaam in één rechte lijn. Te zwaar? Doe ze op je knieën.",
   yt:"push up techniek beginners", poses:[
    {h:[94,48],s:[86,54],p:[56,64],e1:[86,71],w1:[86,88],e2:[86,71],w2:[86,88],k1:[41,76],f1:[26,88],k2:[41,76],f2:[26,88]},
    {h:[96,70],s:[86,76],p:[56,80],e1:[76,80],w1:[86,88],e2:[76,80],w2:[86,88],k1:[41,84],f1:[26,88],k2:[41,84],f2:[26,88]}]},
  {title:"Plank", target:"Buik en rug", reps:"3 x 30 sec",
   text:"Steun op je onderarmen en tenen. Billen niet omhoog en niet laten zakken.",
   yt:"plank oefening techniek", poses:[
    {h:[92,63],s:[84,69],p:[56,73],e1:[84,88],w1:[98,88],e2:[84,88],w2:[98,88],k1:[40,80],f1:[24,88],k2:[40,80],f2:[24,88]},
    {h:[92,63],s:[84,69],p:[56,71],e1:[84,88],w1:[98,88],e2:[84,88],w2:[98,88],k1:[40,79],f1:[24,88],k2:[40,79],f2:[24,88]}]},
  {title:"Lunges", target:"Benen en balans", reps:"2 x 10 per been",
   text:"Stap ver naar voren en zak tot je achterste knie bijna de grond raakt.",
   yt:"lunge oefening uitleg", poses:[
    P({}),
    P({h:[58,24],s:[58,34],p:[58,60],k1:[76,70],f1:[78,90],k2:[46,84],f2:[34,90],e1:[62,46],w1:[64,58],e2:[54,46],w2:[52,58]})]},
  {title:"Jumping jacks", video:"GOhV5lwc17U", target:"Conditie", reps:"3 x 30 sec",
   text:"Spring met je benen uit elkaar en klap je handen boven je hoofd.",
   yt:"jumping jacks", poses:[
    {h:[60,14],s:[60,24],p:[60,52],e1:[66,36],w1:[68,50],e2:[54,36],w2:[52,50],k1:[62,71],f1:[63,90],k2:[58,71],f2:[57,90]},
    {h:[60,12],s:[60,22],p:[60,50],e1:[72,14],w1:[76,4],e2:[48,14],w2:[44,4],k1:[70,70],f1:[78,90],k2:[50,70],f2:[42,90]}]},
  {title:"Bruggetje", target:"Billen en onderrug", reps:"3 x 12",
   text:"Op je rug, voeten plat. Duw je heupen omhoog en houd even vast.",
   yt:"glute bridge oefening", poses:[
    {h:[20,82],s:[29,87],p:[58,88],e1:[40,88],w1:[50,88],e2:[40,88],w2:[50,88],k1:[74,70],f1:[86,90],k2:[74,70],f2:[86,90]},
    {h:[20,82],s:[30,84],p:[58,68],e1:[40,88],w1:[50,88],e2:[40,88],w2:[50,88],k1:[78,64],f1:[86,90],k2:[78,64],f2:[86,90]}]},
  {title:"Mountain climbers", target:"Conditie en buik", reps:"3 x 20 sec",
   text:"In de opdruk-houding trek je om en om snel je knieën naar je borst.",
   yt:"mountain climbers oefening", poses:[
    {h:[94,48],s:[86,54],p:[56,64],e1:[86,71],w1:[86,88],e2:[86,71],w2:[86,88],k1:[41,76],f1:[26,88],k2:[41,76],f2:[26,88]},
    {h:[94,48],s:[86,54],p:[58,62],e1:[86,71],w1:[86,88],e2:[86,71],w2:[86,88],k1:[41,76],f1:[26,88],k2:[76,72],f2:[62,84]}]},
  {title:"Wall sit", target:"Bovenbenen", reps:"3 x 30 sec",
   text:"Zit met je rug tegen de muur alsof er een onzichtbare stoel staat.",
   yt:"wall sit oefening", wall:true, poses:[
    {h:[44,28],s:[44,38],p:[44,64],e1:[54,52],w1:[64,62],e2:[54,52],w2:[64,62],k1:[70,64],f1:[70,90],k2:[70,64],f2:[70,90]},
    {h:[44,28],s:[44,38],p:[44,64],e1:[54,52],w1:[64,62],e2:[54,52],w2:[64,62],k1:[70,64],f1:[70,90],k2:[70,64],f2:[70,90]}]},
  {title:"Op je tenen", target:"Kuiten en enkels", reps:"3 x 15",
   text:"Kom langzaam omhoog op je tenen en zak gecontroleerd terug.",
   yt:"calf raises kuiten oefening", poses:[
    P({}),
    {h:[60,8],s:[60,18],p:[60,46],e1:[66,31],w1:[68,44],e2:[54,31],w2:[52,44],k1:[62,66],f1:[63,88],k2:[58,66],f2:[57,88]}]},
  {title:"Zijplank", target:"Zijkant buik", reps:"2 x 20 sec per kant",
   text:"Steun op één onderarm en de zijkant van je voet. Houd je heup hoog.",
   yt:"zijplank side plank techniek", poses:[
    {h:[92,52],s:[84,58],p:[56,72],e1:[84,88],w1:[96,88],e2:[86,46],w2:[88,34],k1:[40,80],f1:[24,88],k2:[40,80],f2:[24,88]},
    {h:[92,54],s:[84,60],p:[56,77],e1:[84,88],w1:[96,88],e2:[86,48],w2:[88,36],k1:[40,83],f1:[24,88],k2:[40,83],f2:[24,88]}]},
  {title:"Superman", target:"Rug", reps:"3 x 10",
   text:"Lig op je buik en til tegelijk je armen en benen een stukje op.",
   yt:"superman oefening rug", poses:[
    {h:[92,82],s:[84,86],p:[56,88],e1:[98,87],w1:[110,87],e2:[98,87],w2:[110,87],k1:[40,88],f1:[24,88],k2:[40,88],f2:[24,88]},
    {h:[93,76],s:[84,82],p:[56,88],e1:[98,77],w1:[110,72],e2:[98,77],w2:[110,72],k1:[40,86],f1:[25,80],k2:[40,86],f2:[25,80]}]},
  {title:"Knieheffen", target:"Conditie en snelheid", reps:"3 x 20 sec",
   text:"Ren op de plaats en trek je knieën zo hoog mogelijk op.",
   yt:"knieheffen high knees", poses:[
    P({k1:[70,52],f1:[70,70],e1:[52,36],w1:[56,26],e2:[66,38],w2:[70,48]}),
    P({k2:[70,52],f2:[70,70],e1:[66,38],w1:[70,48],e2:[52,36],w2:[56,26]})]},
  {title:"Crunches", target:"Buik", reps:"3 x 12",
   text:"Op je rug, knieën gebogen. Krul je bovenlijf een stukje op, niet aan je nek trekken.",
   yt:"crunches goede techniek", poses:[
    {h:[22,83],s:[31,87],p:[60,88],e1:[26,76],w1:[18,80],e2:[26,76],w2:[18,80],k1:[76,70],f1:[86,90],k2:[76,70],f2:[86,90]},
    {h:[36,70],s:[42,77],p:[60,88],e1:[42,64],w1:[34,66],e2:[42,64],w2:[34,66],k1:[76,70],f1:[86,90],k2:[76,70],f2:[86,90]}]},
  {title:"Squat-sprongen", target:"Sprongkracht", reps:"3 x 8",
   text:"Zak door en spring explosief omhoog. Land zacht door je knieën te buigen.",
   yt:"squat jump oefening", poses:[
    P({h:[52,36],s:[54,45],p:[44,64],k1:[64,66],f1:[62,90],k2:[64,66],f2:[62,90],e1:[46,56],w1:[38,62],e2:[46,56],w2:[38,62]}),
    {h:[60,4],s:[60,14],p:[60,42],e1:[66,4],w1:[68,-6],e2:[54,4],w2:[52,-6],k1:[62,61],f1:[63,80],k2:[58,61],f2:[57,80]}]}
];

// ---------- Motivatie (eigen teksten) ----------
const MOTIVATION = [
  "Elke goede speler is ooit begonnen met één keer hooghouden.",
  "Je hoeft niet de beste te zijn. Je moet alleen beter zijn dan gisteren.",
  "Talent zonder training blijft talent. Training zonder opgeven wordt kunnen.",
  "Mislukken is gewoon oefenen met een spannender einde.",
  "De bal is van degene die hem het meest wil.",
  "Moe? Prima. Dat betekent dat je sterker aan het worden bent.",
  "Een kleine stap elke dag is aan het eind van het jaar een enorme sprong.",
  "Niemand wordt goed door alleen te kijken. Pak de bal.",
  "Fouten maken mag. Ervan leren moet.",
  "Je zwakke voet is gewoon een voet die nog niet genoeg getraind heeft.",
  "Een team wint samen en verliest samen.",
  "Doorzetten is het moment waarop je bijna wilt stoppen, en het toch niet doet.",
  "Wie lacht op het veld, speelt beter.",
  "Je lichaam doet wat je hoofd gelooft.",
  "Verliezen is niet erg. Opgeven wel.",
  "Train als niemand kijkt, speel alsof iedereen kijkt.",
  "Elke herhaling telt, ook als niemand het ziet.",
  "Het verschil tussen goed en heel goed zit in de extra tien minuten.",
  "Een slechte dag is gewoon één dag. Morgen begint de volgende wedstrijd.",
  "Wees de speler die je zelf in je team zou willen hebben.",
  "Sneller worden begint met beginnen.",
  "Water, slaap en training: de drie geheime wapens van elke prof.",
  "Je kunt niet elke wedstrijd winnen, wel elke training je best doen.",
  "Ook de beste spelers waren ooit de kleinste op het veld."
];

// ---------- Uitdaging van de dag ----------
const CHALLENGES = [
  "Hoe vaak kun je de bal hooghouden? Probeer je record 3 keer te verbeteren.",
  "Doe 50 squats verspreid over de dag.",
  "Drink vandaag 6 glazen water. Zet een streepje per glas.",
  "Pass 100 keer tegen de muur: 50 met rechts, 50 met links.",
  "Ga vanavond een half uur eerder naar bed dan normaal.",
  "Eet vandaag 2 stuks fruit en 2 handjes groente.",
  "Houd een plank vast zo lang als je kunt. Probeer het morgen 5 seconden langer.",
  "Speel 10 minuten buiten zonder telefoon.",
  "Dribbel 5 keer de slalom alleen met je zwakke voet.",
  "Geef vandaag 3 mensen een compliment.",
  "Doe 3 rondes: 10 push-ups, 15 squats en 20 jumping jacks.",
  "Neem vandaag overal de trap.",
  "Schiet 20 keer op een doelwit. Hoeveel raak je?",
  "Geen frisdrank of snoep vandaag. Lukt het?",
  "Rek 5 minuten na het eten: benen, heupen en rug.",
  "Leer iemand thuis een oefening uit deze app.",
  "Sprint 6 keer 20 meter en wandel tussendoor terug.",
  "Schrijf 3 dingen op waar je goed in bent op het veld.",
  "Tik 100 keer afwisselend met links en rechts boven op de bal.",
  "Fiets of loop vandaag naar school of training.",
  "Zit 1 minuut tegen de muur (wall sit). Hoe ver kom je?",
  "Ontbijt vandaag met iets met eiwit: ei, yoghurt of melk.",
  "Doe 2 minuten rustig ademhalen voordat je gaat slapen.",
  "Kijk 10 minuten voetbal en let alleen op een speler op jouw positie.",
  "Spring 3 minuten touwtje of doe alsof.",
  "Doe 20 lunges en houd je bovenlijf recht.",
  "Speel een potje 1 tegen 1 met iemand thuis.",
  "Leg je telefoon vanavond een uur voor bedtijd weg.",
  "Neem fruit mee als tussendoortje in plaats van een koek.",
  "Bedenk een nieuw voetbaldoel voor deze week en schrijf het op."
];

// ---------- Grote habits (voor een hele week of langer) ----------
const BIG_HABITS = [
  {title:"3 keer per week thuistraining", text:"Met drie korte trainingen per week word je merkbaar sterker en sneller.", how:"Kies 4 oefeningen uit Thuis, doe elk 3 rondes en zet maandag, woensdag en vrijdag in je planner."},
  {title:"Elke dag een uur bewegen", text:"Een uur per dag bewegen is wat kinderen en tieners nodig hebben om fit te blijven.", how:"Tel alles bij elkaar: fietsen naar school, buiten spelen, training. Haal je vandaag 60 minuten?"},
  {title:"Elke dag 15 minuten balvaardigheid", text:"Topspelers zijn zo goed omdat ze bijna elke dag met de bal bezig zijn.", how:"Kies elke dag één oefening uit Voetbal en doe hem 15 minuten. Zet het in je planner."},
  {title:"Een week zonder frisdrank", text:"Na een week merk je dat je minder zin hebt in zoet en meer energie houdt.", how:"Drink 7 dagen alleen water, thee of melk. Zet elke dag een vinkje in je planner."},
  {title:"Een week op vaste tijd naar bed", text:"Elke dag op dezelfde tijd slapen geeft je lichaam een vast ritme en meer energie.", how:"Kies een bedtijd en houd die 7 dagen vol, ook in het weekend."},
  {title:"2 keer per week rennen", text:"Hardlopen bouwt je conditie op, zodat je in de tweede helft nog net zo fit bent.", how:"Ren 15 minuten rustig met af en toe een sprintje van 10 seconden. Zet twee dagen in je planner."},
  {title:"Elke week een nieuwe voetbaltruc", text:"Een nieuwe beweging leren maakt je creatiever en lastiger te verdedigen.", how:"Kies op maandag een truc, oefen hem elke dag 10 minuten en laat hem zondag aan iemand zien."},
  {title:"30 dagen hooghouden", text:"Na een maand elke dag oefenen ben je verrast hoeveel beter je bent geworden.", how:"Houd 30 dagen lang elke dag 5 minuten hoog en schrijf je record op."},
  {title:"Elke ochtend 10 minuten mobiliteit", text:"Soepele spieren en gewrichten helpen tegen blessures.", how:"Doe elke ochtend 3 rekoefeningen uit Herstel, elk een minuut."},
  {title:"Groente bij lunch én avondeten", text:"Twee keer per dag groente geeft je lichaam alle vitamines die het nodig heeft.", how:"Houd het een week vol en zet het als vinkje in je planner."},
  {title:"Eén schermvrije avond per week", text:"Een avond zonder scherm geeft rust in je hoofd en je slaapt beter.", how:"Kies een vaste avond, zet hem in je planner en doe iets anders: buiten spelen, een spel of lezen."},
  {title:"Na elke training rekken", text:"Rekken na het sporten helpt je spieren herstellen.", how:"Doe na elke training of wedstrijd 5 minuten rekoefeningen uit Herstel."},
  {title:"Elke zondag je week plannen", text:"Als je je week plant, vergeet je minder en train je slimmer.", how:"Zet op zondag je trainingen, rustdagen en habits in de planner."},
  {title:"Elke dag 6 glazen water", text:"Genoeg drinken houdt je scherp op school en op het veld.", how:"Zet een streepje per glas en probeer het een hele week elke dag te halen."},
  {title:"Een rustdag per week", text:"Spieren worden sterker in de rust, niet tijdens het trainen.", how:"Plan één dag in de week zonder zware training. Wandelen of rustig fietsen mag."}
].map(h => ({...h, size:"groot"}));

// ---------- Herstel: rekoefeningen (poppetje) ----------
const RECOVERY = [
  {title:"Achterkant been rekken", target:"Hamstrings", reps:"2 x 30 sec", text:"Zit met gestrekte benen en reik rustig naar je tenen. Niet veren, gewoon ademen.",
   yt:"hamstring stretch zittend", poses:[
    {h:[60,58],s:[54,66],p:[40,88],e1:[66,74],w1:[78,82],e2:[66,74],w2:[78,82],k1:[62,88],f1:[84,86],k2:[62,88],f2:[84,86]},
    {h:[66,64],s:[58,70],p:[40,88],e1:[70,78],w1:[82,84],e2:[70,78],w2:[82,84],k1:[62,88],f1:[84,86],k2:[62,88],f2:[84,86]}]},
  {title:"Bovenbeen rekken", target:"Voorkant bovenbeen", reps:"2 x 30 sec per been", text:"Pak je voet achter je vast en trek je hiel naar je billen. Houd je knieën naast elkaar.",
   yt:"quadriceps stretch staand", poses:[
    {h:[60,14],s:[60,24],p:[60,52],e1:[68,34],w1:[78,28],e2:[54,40],w2:[50,58],k1:[62,71],f1:[63,90],k2:[60,72],f2:[48,58]},
    {h:[60,14],s:[60,24],p:[60,52],e1:[68,34],w1:[78,26],e2:[54,40],w2:[50,56],k1:[62,71],f1:[63,90],k2:[61,73],f2:[48,56]}]},
  {title:"Kindhouding", target:"Rug en heupen", reps:"3 x 30 sec", text:"Zit op je hielen, buig voorover en strek je armen naar voren. Adem rustig in en uit.",
   yt:"kindhouding child pose", poses:[
    {h:[88,82],s:[78,80],p:[48,80],e1:[94,86],w1:[106,88],e2:[94,86],w2:[106,88],k1:[66,88],f1:[44,90],k2:[66,88],f2:[44,90]},
    {h:[88,80],s:[77,77],p:[48,79],e1:[94,85],w1:[106,88],e2:[94,85],w2:[106,88],k1:[66,88],f1:[44,90],k2:[66,88],f2:[44,90]}]},
  {title:"Kuiten rekken", target:"Kuiten", reps:"2 x 30 sec per been", text:"Zet een been naar achteren, hiel op de grond, en leun naar voren tegen een muur.",
   yt:"kuit rekken muur", poses:[
    {h:[74,24],s:[70,34],p:[56,56],e1:[82,36],w1:[92,36],e2:[82,36],w2:[92,36],k1:[68,72],f1:[70,90],k2:[44,74],f2:[34,90]},
    {h:[78,26],s:[73,36],p:[58,57],e1:[84,38],w1:[94,38],e2:[84,38],w2:[94,38],k1:[71,72],f1:[70,90],k2:[45,74],f2:[34,90]}]},
  {title:"Vlinder", target:"Binnenkant bovenbeen", reps:"2 x 30 sec", text:"Zit rechtop met je voetzolen tegen elkaar en laat je knieën rustig zakken.",
   yt:"butterfly stretch", poses:[
    {h:[60,46],s:[60,56],p:[60,82],e1:[68,72],w1:[60,86],e2:[52,72],w2:[60,86],k1:[78,78],f1:[60,88],k2:[42,78],f2:[60,88]},
    {h:[60,46],s:[60,56],p:[60,82],e1:[69,73],w1:[60,86],e2:[51,73],w2:[60,86],k1:[80,83],f1:[60,88],k2:[40,83],f2:[60,88]}]},
  {title:"Heup openen", target:"Voorkant heup", reps:"2 x 30 sec per kant", text:"Zet een knie op de grond en schuif je heup rustig naar voren. Rug recht.",
   yt:"hip flexor stretch knielend", poses:[
    {h:[56,30],s:[56,40],p:[56,66],e1:[64,54],w1:[70,64],e2:[64,54],w2:[70,64],k1:[72,68],f1:[74,90],k2:[46,88],f2:[30,90]},
    {h:[60,32],s:[60,42],p:[60,68],e1:[67,56],w1:[72,65],e2:[67,56],w2:[72,65],k1:[76,70],f1:[74,90],k2:[46,88],f2:[30,90]}]},
  {title:"Kat en koe", target:"Rug", reps:"10 keer rustig", text:"Op handen en knieën: maak je rug bol en daarna hol. Beweeg mee met je ademhaling.",
   yt:"kat koe oefening rug", poses:[
    {h:[94,62],s:[84,66],p:[52,66],e1:[84,78],w1:[84,90],e2:[84,78],w2:[84,90],k1:[52,90],f1:[36,90],k2:[52,90],f2:[36,90]},
    {h:[92,72],s:[84,62],p:[52,62],e1:[84,76],w1:[84,90],e2:[84,76],w2:[84,90],k1:[52,90],f1:[36,90],k2:[52,90],f2:[36,90]}]},
  {title:"Schouder rekken", target:"Schouders", reps:"2 x 20 sec per arm", text:"Trek je arm voor je borst langs met je andere hand. Schouders laag houden.",
   yt:"schouder stretch arm voor borst", poses:[
    {h:[60,14],s:[60,24],p:[60,52],e1:[70,30],w1:[46,30],e2:[54,36],w2:[62,30],k1:[62,71],f1:[63,90],k2:[58,71],f2:[57,90]},
    {h:[60,14],s:[60,24],p:[60,52],e1:[69,31],w1:[44,31],e2:[53,37],w2:[61,31],k1:[62,71],f1:[63,90],k2:[58,71],f2:[57,90]}]},
  {title:"Benen tegen de muur", target:"Benen ontspannen", reps:"3 minuten", text:"Lig op je rug met je benen omhoog tegen de muur. Fijn na een zware training.",
   yt:"legs up the wall herstel", wallX:58, poses:[
    {h:[20,86],s:[30,88],p:[54,88],e1:[40,88],w1:[50,88],e2:[40,88],w2:[50,88],k1:[54,64],f1:[54,40],k2:[54,64],f2:[54,40]},
    {h:[20,86],s:[30,87],p:[54,88],e1:[40,88],w1:[50,88],e2:[40,88],w2:[50,88],k1:[54,64],f1:[54,40],k2:[54,64],f2:[54,40]}]},
  {title:"Rustig uitlopen", target:"Afkoelen", reps:"5 minuten", text:"Wandel of jog heel rustig na het sporten, zodat je hartslag langzaam zakt.",
   yt:"cooling down na sporten", poses:[
    {h:[60,14],s:[60,24],p:[60,52],e1:[66,37],w1:[72,48],e2:[54,37],w2:[48,46],k1:[66,70],f1:[70,90],k2:[56,72],f2:[50,90]},
    {h:[60,14],s:[60,24],p:[60,52],e1:[54,37],w1:[48,46],e2:[66,37],w2:[72,48],k1:[56,72],f1:[50,90],k2:[66,70],f2:[70,90]}]}
];

// ---------- Herstel: tips ----------
const RECOVERY_TIPS = [
  {title:"Plan een rustdag", text:"Je spieren worden sterker in de rust na een training.", how:"Zet één dag in je planner zonder zware training. Wandelen of rustig fietsen mag."},
  {title:"Extra slaap na een wedstrijd", text:"In je slaap herstelt je lichaam het meest.", how:"Ga na een wedstrijd of zware training een half uur eerder naar bed."},
  {title:"Eten binnen een uur", text:"Na het sporten hebben je spieren bouwstoffen nodig.", how:"Eet binnen een uur na training iets met eiwit, zoals yoghurt, melk, een ei of een boterham met kaas."},
  {title:"Bijvullen met water", text:"Na het sporten ben je vocht kwijt door zweten.", how:"Drink na de training minstens twee glazen water."},
  {title:"Luister naar je lijf", text:"Spierpijn is normaal, echte pijn niet.", how:"Doet iets echt pijn, scherp of steeds erger? Stop en vertel het je ouders of trainer."},
  {title:"Koelen bij een stoot", text:"Koelen helpt tegen zwelling na een trap of stoot.", how:"Leg een coldpack in een doek 10 minuten op de plek, nooit direct op je huid. Vertel het een volwassene."},
  {title:"Warme douche na de training", text:"Warm water ontspant je spieren.", how:"Neem na een koude training een warme douche en rek daarna rustig."},
  {title:"Actief herstel de dag erna", text:"Rustig bewegen de dag na een wedstrijd helpt je spieren sneller herstellen.", how:"Wandel of fiets 20 minuten rustig en doe 3 rekoefeningen."},
  {title:"Rekken voor het slapen", text:"Een paar minuten rekken maakt je rustig en ontspannen.", how:"Doe voor het slapen de kindhouding en de vlinder, elk een minuut."},
  {title:"Ademen om te ontspannen", text:"Rustig ademen helpt je lichaam van de wedstrijdstand naar de ruststand.", how:"Lig op je rug, hand op je buik, adem 4 tellen in en 6 tellen uit. Doe dit 2 minuten."}
].map(h => ({...h, theme:"herstel"}));

// ---------- Mindset: motiverende plaatjes (eigen tekeningen) ----------
const POSTERS = [
  {art:"mountain", big:"Elke stap telt", small:"Ook de kleine."},
  {art:"sun", big:"Nieuwe dag", small:"Nieuwe kans om beter te worden."},
  {art:"stairs", big:"Stap voor stap", small:"Niemand springt in één keer naar boven."},
  {art:"goal", big:"Blijf schieten", small:"Je mist 100% van de ballen die je niet schiet."},
  {art:"bolt", big:"Geen zin?", small:"Begin met 5 minuten. Daarna gaat het vanzelf."},
  {art:"road", big:"Jij tegen jij", small:"Wees beter dan gisteren."},
  {art:"ball", big:"Pak de bal", small:"Oefenen wint van talent dat niet oefent."},
  {art:"trophy", big:"Hard werken", small:"Is ook een talent. En dat kun je leren."}
];

// ---------- Mindset: filmpjes ----------
// Alleen YouTube-filmpjes van maximaal 10 minuten of Shorts. Elke dag één filmpje van David Goggins plus 4 andere.
// Voor de zekerheid stopt een filmpje in de app altijd na 10 minuten.
// note = korte uitleg voor ouders/kind. short = YouTube Short (staand filmpje).
// Goggins: korte edits met muziek (Shorts, max 3 minuten).
const GOGGINS_VIDEOS = [
  {title:"Stay Hard", video:"g8OdN9e8ttk", short:true, note:"Edit met muziek. Zijn bekendste motto."},
  {title:"Get After It", video:"BT4tWKyYDTs", short:true, note:"Edit met muziek. Over gewoon beginnen."},
  {title:"Lazy", video:"j5aor1O9WnM", short:true, note:"Edit met muziek. Over luiheid verslaan."},
  {title:"Motivational Edit", video:"fdFIyoYAF9E", short:true, note:"Edit met muziek over doorzetten."},
  {title:"Motivational Edit 2", video:"fOAeXKhRZ5c", short:true, note:"Edit met muziek over mentale kracht."},
  {title:"Motivational Edit 3", video:"G-3mE4YW9xI", short:true, note:"Edit met muziek over discipline."}
].map(v => ({...v, goggins:true}));

// Andere mindset-filmpjes: voetbal- en motivatie-edits (Shorts, max 3 minuten).
const MINDSET_VIDEOS = [
  {title:"The legacy of greatness", video:"BBNjaZSR-8M", short:true, note:"Voetbaledit over grootheid."},
  {title:"Ronaldo: when you believe", video:"14orcjz8bZc", short:true, note:"Ronaldo-edit over in jezelf geloven."},
  {title:"Ronaldo: the legend who never gives up", video:"HPQ57a_SsTs", short:true, note:"Ronaldo-edit over nooit opgeven."},
  {title:"Ronaldo: bad times", video:"9Xg-OhoyEM4", short:true, note:"Hoe Ronaldo terugkwam na slechte tijden."},
  {title:"Ronaldo: best mentality", video:"gi4wMBw1Z64", short:true, note:"Edit over de mentaliteit van Ronaldo."},
  {title:"Ronaldo: it's not about the money", video:"qbDlBMob4xg", short:true, note:"Waar het Ronaldo echt om gaat."},
  {title:"Never stop working on yourself", video:"eLB7WgMeYiQ", short:true, note:"Blijf aan jezelf werken."},
  {title:"Why you should never give up", video:"lA1JrYe7JY8", short:true, note:"Over niet opgeven."},
  {title:"Never give up moments in football", video:"tAtFBhJIMEM", short:true, note:"Voetbalmomenten waarin niemand opgaf."},
  {title:"Never give up: verdedigen tot het einde", video:"ICF8ZKvp9ZY", short:true, note:"Spelers die blijven gaan tot het laatste moment."},
  {title:"Why discipline beats talent", video:"-SpHAAyS_Cc", short:true, note:"Waarom oefenen wint van talent."},
  {title:"Discipline over motivation", video:"q-UMVPEky-8", short:true, note:"Ook trainen als je geen zin hebt."},
  {title:"10 life lessons from football players", video:"3woCFF08Nok", short:true, note:"Lessen van topvoetballers."}
];

// ================= Extra inhoud (zodat de eerste weken elke dag nieuwe dingen komen) =================
DRILLS.push(
  {title:"Binnenkant tikjes", level:"Makkelijk", time:"3 min",
   text:"Tik de bal snel heen en weer tussen de binnenkant van je voeten.",
   steps:["Ga met de bal tussen je voeten staan","Tik hem van links naar rechts met de binnenkant","Probeer 30 seconden zo snel mogelijk, 4 keer"],
   yt:"bal tussen voeten tikken oefening voetbal",
   fig:{me:[80,28], ball:[80,62], paths:[{d:"M62 66 L98 66",t:"ball"},{d:"M98 58 L62 58",t:"ball"}]}},
  {title:"Cruijff-draai", level:"Gemiddeld", time:"5 min",
   text:"De beroemde draai van Johan Cruijff: doe alsof je schiet en trek de bal achter je standbeen langs.",
   steps:["Dribbel naar een pion","Doe alsof je gaat schieten of passen","Trek de bal met de binnenkant achter je standbeen en versnel de andere kant op"],
   yt:"cruijff draai leren voetbal",
   fig:{cones:[[110,50]], me:[30,50], ball:[40,50], paths:[{d:"M40 46 L96 46 Q104 50 96 58 L42 64",t:"ball"}]}},
  {title:"Schaar bij de pion", level:"Gemiddeld", time:"5 min",
   text:"Met een schaar laat je een verdediger denken dat je de andere kant op gaat.",
   steps:["Dribbel rustig naar een pion","Draai met je voet om de bal heen zonder hem te raken","Neem de bal mee met de buitenkant van je andere voet"],
   yt:"schaarbeweging leren voetbal",
   fig:{cones:[[100,50]], me:[30,50], ball:[40,50], paths:[{d:"M40 46 L88 46 Q96 30 112 30 L140 30",t:"ball"}]}},
  {title:"Lange bal met de wreef", level:"Gemiddeld", time:"10 min",
   text:"Met de wreef trap je de bal hoog en ver naar een teamgenoot.",
   steps:["Leg twee pionnen op 20 tot 30 meter","Zet je standbeen naast de bal en trap met je veter","Probeer de bal bij de andere pion te laten landen"],
   yt:"lange bal trappen wreef techniek",
   fig:{cones:[[30,70],[135,70]], me:[22,62], ball:[32,70], paths:[{d:"M32 66 Q85 0 132 66",t:"ball"}]}},
  {title:"Volley tegen de muur", level:"Zwaar", time:"5 min",
   text:"Een volley trap je voordat de bal de grond raakt. Lastig, maar heel leuk.",
   steps:["Gooi de bal tegen de muur","Trap hem terug voordat hij de grond raakt","Begin met binnenkant, daarna met je wreef"],
   yt:"volley trappen oefening alleen",
   fig:{wall:true, me:[50,60], ball:[60,52], paths:[{d:"M60 52 Q100 20 142 40",t:"ball"},{d:"M142 50 Q100 30 64 58",t:"ball"}]}},
  {title:"Poortjes dribbelen", level:"Makkelijk", time:"5 min",
   text:"Dribbel door zoveel mogelijk poortjes in een minuut.",
   steps:["Maak 5 poortjes van twee pionnen verspreid over een vak","Dribbel in een minuut door zoveel mogelijk poortjes","Tel je score en verbeter hem"],
   yt:"poortjes dribbelen voetbaloefening",
   fig:{cones:[[40,25],[40,40],[90,60],[90,75],[130,25],[130,40]], me:[18,60], ball:[26,60], paths:[{d:"M26 56 Q34 30 44 32 Q70 40 94 68 Q118 80 134 34",t:"ball"}]}},
  {title:"Wendingen in een vierkant", level:"Zwaar", time:"5 min",
   text:"Sprint naar elke pion en draai snel terug. Zo word je wendbaar.",
   steps:["Zet 4 pionnen in een vierkant van 5 meter met jij in het midden","Sprint naar een pion, tik hem aan en sprint terug","Doe alle 4 de pionnen, rust 30 seconden, 4 rondes"],
   yt:"wendbaarheid oefening voetbal pionnen",
   fig:{cones:[[50,20],[110,20],[50,80],[110,80]], me:[80,50], paths:[{d:"M74 44 L56 26",t:"run"},{d:"M86 44 L104 26",t:"run"},{d:"M74 56 L56 74",t:"run"},{d:"M86 56 L104 74",t:"run"}]}},
  {title:"Pass en loop", level:"Gemiddeld", time:"5 min",
   text:"Speel de bal tegen de muur en loop meteen een stuk verder om hem weer op te pakken.",
   steps:["Pass schuin tegen de muur","Loop direct schuin vooruit","Neem de terugkomende bal aan en herhaal langs de muur"],
   yt:"kaatsen tegen muur oefening voetbal",
   fig:{wall:true, me:[40,75], ball:[50,75], paths:[{d:"M50 71 L140 45",t:"ball"},{d:"M140 45 L90 25",t:"ball"},{d:"M44 68 L84 30",t:"run"}]}},
  {title:"Dribbelen en afwerken", level:"Gemiddeld", time:"10 min",
   text:"Na een dribbel moet je ook kunnen scoren.",
   steps:["Dribbel om 3 pionnen heen","Schiet direct daarna op het doel","Wissel steeds van voet bij het schieten"],
   yt:"dribbelen en afwerken oefening",
   fig:{goal:true, cones:[[45,50],[70,50],[95,50]], me:[18,50], ball:[26,50], paths:[{d:"M26 50 C36 30,40 30,50 50 S64 70,74 50 S90 30,104 50 Q125 45 146 26",t:"ball"}]}},
  {title:"Bal afschermen", level:"Met z'n tweeën", time:"5 min",
   text:"Zet je lichaam tussen de bal en je tegenstander, zoals een echte spits.",
   steps:["Ga met de bal in een klein vak staan","Je maatje probeert de bal af te pakken","Houd hem 20 seconden vast met je lichaam ertussen, dan wisselen"],
   yt:"bal afschermen oefening jeugd",
   fig:{cones:[[50,20],[110,20],[50,80],[110,80]], me:[78,50], ball:[70,52], foe:[92,46]}},
  {title:"Kaatsen met een maatje", level:"Met z'n tweeën", time:"10 min",
   text:"Snel heen en weer passen in één keer, zonder aan te nemen.",
   steps:["Ga 5 meter van elkaar staan","Pass in één keer terug","Tel hoeveel passes je achter elkaar haalt zonder fout"],
   yt:"passen in 1 keer oefening voetbal",
   fig:{me:[35,50], ball:[50,48], foe:[125,50], paths:[{d:"M50 46 L114 46",t:"ball"},{d:"M114 56 L48 56",t:"ball"}]}},
  {title:"Schieten met je zwakke voet", level:"Gemiddeld", time:"10 min",
   text:"Een goede spits scoort met allebei zijn voeten.",
   steps:["Leg de bal op 8 meter van het doel","Schiet 15 keer alleen met je zwakke voet","Let op: standbeen naast de bal en kijk naar de bal"],
   yt:"schieten zwakke voet oefening",
   fig:{goal:true, me:[60,55], ball:[72,52], paths:[{d:"M72 52 Q110 40 146 70",t:"ball"}]}}
);

EXERCISES.push(
  {title:"Schoudertikken", target:"Schouders en buik", reps:"3 x 16 tikken",
   text:"In de opdrukhouding tik je om en om je andere schouder aan. Heupen stil houden.",
   yt:"plank shoulder taps", poses:[
    {h:[94,48],s:[86,54],p:[56,64],e1:[86,71],w1:[86,88],e2:[86,71],w2:[86,88],k1:[41,76],f1:[26,88],k2:[41,76],f2:[26,88]},
    {h:[94,48],s:[86,54],p:[56,64],e1:[86,71],w1:[86,88],e2:[90,60],w2:[86,54],k1:[41,76],f1:[26,88],k2:[41,76],f2:[26,88]}]},
  {title:"Dead bug", target:"Buik", reps:"3 x 10",
   text:"Lig op je rug, armen en benen omhoog. Strek om en om een arm en het andere been uit.",
   yt:"dead bug oefening", poses:[
    {h:[22,84],s:[32,86],p:[60,86],e1:[34,72],w1:[34,58],e2:[34,72],w2:[34,58],k1:[60,68],f1:[76,68],k2:[60,68],f2:[76,68]},
    {h:[22,84],s:[32,86],p:[60,86],e1:[22,74],w1:[12,68],e2:[34,72],w2:[34,58],k1:[60,68],f1:[76,68],k2:[78,80],f2:[96,84]}]},
  {title:"Zijwaartse lunge", target:"Benen en heupen", reps:"2 x 10 per kant",
   text:"Stap breed opzij en zak door op dat been. Het andere been blijft gestrekt.",
   yt:"side lunge oefening", poses:[
    {h:[60,14],s:[60,24],p:[60,52],e1:[66,36],w1:[68,50],e2:[54,36],w2:[52,50],k1:[66,71],f1:[70,90],k2:[54,71],f2:[50,90]},
    {h:[72,28],s:[72,38],p:[70,62],e1:[78,48],w1:[80,58],e2:[66,48],w2:[64,58],k1:[86,72],f1:[88,90],k2:[52,76],f2:[34,90]}]},
  {title:"Schaatssprongen", target:"Benen en balans", reps:"3 x 20 sec",
   text:"Spring zijwaarts van het ene been naar het andere, zoals een schaatser.",
   yt:"skater jumps oefening", poses:[
    {h:[44,24],s:[46,34],p:[48,58],e1:[56,40],w1:[64,48],e2:[38,42],w2:[30,50],k1:[46,74],f1:[44,90],k2:[56,76],f2:[64,84]},
    {h:[76,24],s:[74,34],p:[72,58],e1:[64,40],w1:[56,48],e2:[82,42],w2:[90,50],k1:[74,74],f1:[76,90],k2:[64,76],f2:[56,84]}]},
  {title:"Berenloop", target:"Hele lichaam", reps:"3 x 20 sec",
   text:"Op handen en voeten met je knieën net boven de grond. Loop zo vooruit.",
   yt:"bear crawl oefening", poses:[
    {h:[94,58],s:[84,62],p:[52,62],e1:[86,76],w1:[88,90],e2:[82,76],w2:[80,90],k1:[58,78],f1:[48,90],k2:[44,78],f2:[38,90]},
    {h:[96,58],s:[86,62],p:[54,62],e1:[82,76],w1:[80,90],e2:[88,76],w2:[90,90],k1:[46,78],f1:[40,90],k2:[60,78],f2:[52,90]}]},
  {title:"Burpees", target:"Conditie", reps:"3 x 6",
   text:"Zak door, spring met je voeten naar achteren, spring terug en spring omhoog.",
   yt:"burpee techniek beginners", poses:[
    {h:[52,36],s:[54,45],p:[44,64],e1:[60,64],w1:[62,88],e2:[60,64],w2:[62,88],k1:[64,66],f1:[62,90],k2:[64,66],f2:[62,90]},
    {h:[94,48],s:[86,54],p:[56,64],e1:[86,71],w1:[86,88],e2:[86,71],w2:[86,88],k1:[41,76],f1:[26,88],k2:[41,76],f2:[26,88]}]},
  {title:"Op één been buigen", target:"Balans en billen", reps:"2 x 8 per been",
   text:"Sta op één been en buig voorover terwijl je andere been naar achteren gaat.",
   yt:"single leg deadlift bodyweight", poses:[
    {h:[60,14],s:[60,24],p:[60,52],e1:[62,37],w1:[62,50],e2:[58,37],w2:[58,50],k1:[61,71],f1:[61,90],k2:[58,71],f2:[56,88]},
    {h:[88,40],s:[80,44],p:[56,54],e1:[80,58],w1:[80,70],e2:[78,58],w2:[78,70],k1:[58,72],f1:[58,90],k2:[38,52],f2:[22,50]}]},
  {title:"Sumo squat", target:"Benen en binnenkant dijen", reps:"3 x 12",
   text:"Voeten breed, tenen naar buiten. Zak recht naar beneden.",
   yt:"sumo squat bodyweight", poses:[
    {h:[60,12],s:[60,22],p:[60,50],e1:[56,34],w1:[60,40],e2:[64,34],w2:[60,40],k1:[72,70],f1:[78,90],k2:[48,70],f2:[42,90]},
    {h:[60,24],s:[60,34],p:[60,62],e1:[56,46],w1:[60,52],e2:[64,46],w2:[60,52],k1:[78,68],f1:[78,90],k2:[42,68],f2:[42,90]}]},
  {title:"Fladderbenen", target:"Onderbuik", reps:"3 x 20 sec",
   text:"Lig op je rug, benen een stukje van de grond, en beweeg ze snel op en neer.",
   yt:"flutter kicks", poses:[
    {h:[20,84],s:[30,87],p:[56,88],e1:[40,88],w1:[50,88],e2:[40,88],w2:[50,88],k1:[74,82],f1:[92,76],k2:[74,86],f2:[92,84]},
    {h:[20,84],s:[30,87],p:[56,88],e1:[40,88],w1:[50,88],e2:[40,88],w2:[50,88],k1:[74,86],f1:[92,84],k2:[74,82],f2:[92,76]}]},
  {title:"Achterwaartse lunge", target:"Benen en billen", reps:"2 x 10 per been",
   text:"Stap naar achteren en zak tot je knie bijna de grond raakt. Fijner voor je knieën.",
   yt:"reverse lunge", poses:[
    P({}),
    P({h:[62,24],s:[62,34],p:[60,60],k1:[76,70],f1:[76,90],k2:[48,84],f2:[36,90],e1:[66,46],w1:[68,58],e2:[58,46],w2:[56,58]})]}
);

RECOVERY.push(
  {title:"Cobra", target:"Buik en rug", reps:"3 x 20 sec", text:"Lig op je buik en duw je bovenlijf rustig omhoog met je armen. Heupen blijven liggen.",
   yt:"cobra stretch", poses:[
    {h:[92,82],s:[84,86],p:[56,88],e1:[88,88],w1:[94,88],e2:[88,88],w2:[94,88],k1:[40,88],f1:[24,88],k2:[40,88],f2:[24,88]},
    {h:[90,58],s:[84,66],p:[56,86],e1:[86,78],w1:[88,88],e2:[86,78],w2:[88,88],k1:[40,88],f1:[24,88],k2:[40,88],f2:[24,88]}]},
  {title:"Zijkant rekken", target:"Zijkant romp", reps:"2 x 20 sec per kant", text:"Strek een arm boven je hoofd en buig rustig opzij.",
   yt:"standing side stretch", poses:[
    {h:[60,14],s:[60,24],p:[60,52],e1:[62,10],w1:[62,-2],e2:[54,37],w2:[52,50],k1:[62,71],f1:[63,90],k2:[58,71],f2:[57,90]},
    {h:[52,16],s:[55,26],p:[60,52],e1:[48,12],w1:[40,4],e2:[50,38],w2:[50,50],k1:[62,71],f1:[63,90],k2:[58,71],f2:[57,90]}]},
  {title:"Voorover hangen", target:"Achterkant benen en rug", reps:"2 x 30 sec", text:"Buig staand voorover en laat je armen en hoofd rustig hangen. Knieën mogen iets buigen.",
   yt:"standing forward fold", poses:[
    {h:[74,60],s:[70,48],p:[60,52],e1:[72,62],w1:[72,76],e2:[70,62],w2:[70,76],k1:[61,71],f1:[61,90],k2:[59,71],f2:[59,90]},
    {h:[70,68],s:[68,54],p:[60,52],e1:[70,68],w1:[70,82],e2:[68,68],w2:[68,82],k1:[62,71],f1:[61,90],k2:[60,71],f2:[59,90]}]},
  {title:"Figuur 4", target:"Billen en heup", reps:"2 x 30 sec per kant", text:"Lig op je rug, leg je enkel op je andere knie en trek dat been rustig naar je toe.",
   yt:"figure 4 stretch liggend", poses:[
    {h:[20,84],s:[30,87],p:[54,88],e1:[44,80],w1:[58,72],e2:[44,80],w2:[58,72],k1:[64,68],f1:[78,76],k2:[70,74],f2:[56,70]},
    {h:[20,84],s:[30,87],p:[54,88],e1:[42,78],w1:[56,70],e2:[42,78],w2:[56,70],k1:[60,64],f1:[74,70],k2:[66,70],f2:[52,66]}]},
  {title:"Zittend draaien", target:"Rug", reps:"2 x 20 sec per kant", text:"Zit rechtop met gestrekte benen en draai je bovenlijf rustig opzij.",
   yt:"seated spinal twist", poses:[
    {h:[40,48],s:[40,58],p:[40,86],e1:[50,66],w1:[56,76],e2:[30,70],w2:[24,84],k1:[62,86],f1:[84,86],k2:[62,86],f2:[84,86]},
    {h:[38,48],s:[40,58],p:[40,86],e1:[52,64],w1:[58,72],e2:[28,70],w2:[22,84],k1:[62,86],f1:[84,86],k2:[62,86],f2:[84,86]}]},
  {title:"Nek ontspannen", target:"Nek", reps:"2 x 15 sec per kant", text:"Laat je hoofd rustig opzij zakken, oor naar je schouder. Niet trekken.",
   yt:"neck stretch", poses:[
    P({}),
    P({h:[54,15]})]}
);

POSTERS.push(
  {art:"bolt", big:"Discipline", small:"Doen wat moet, ook zonder zin."},
  {art:"mountain", big:"Geef niet op", small:"De top is net achter de moeilijkste stap."},
  {art:"ball", big:"Twee voeten", small:"Train je zwakke voet tot hij sterk is."},
  {art:"road", big:"Doorgaan", small:"Langzaam is ook vooruit."},
  {art:"trophy", big:"Verdien het", small:"Bekers worden op de training gewonnen."},
  {art:"stairs", big:"1% beter", small:"Elke dag een klein beetje."},
  {art:"sun", big:"Sta op", small:"Kampioenen trainen ook als het regent."},
  {art:"goal", big:"Focus", small:"Kijk naar het doel, niet naar de muur."}
);

MINDSET_VIDEOS.push(
  {title:"Messi: never give up", video:"5XEGkIxZXkU", short:true, note:"Messi over nooit opgeven."},
  {title:"Messi edit", video:"VrHjjWciEyc", short:true, note:"Messi-edit over groeien."},
  {title:"Kobe Bryant: mamba mentality", video:"lHIyPJmtkVw", short:true, note:"De mentaliteit van basketballegende Kobe Bryant."},
  {title:"Kobe Bryant over lui zijn", video:"WEVKem6iCPI", short:true, note:"Kobe over hard werken."},
  {title:"Be the best version of yourself", video:"R7AOjm7G_3A", short:true, note:"Over de beste versie van jezelf worden."},
  {title:"Trying is all that matters", video:"2gghlzmLIoY", short:true, note:"Over je best doen, ook als het moeilijk is."},
  {title:"Just don't give up", video:"JjYOXinhh9M", short:true, note:"Kort en krachtig."}
);

MOTIVATION.push(
  "Vandaag train je voor de speler die je over een jaar bent.",
  "Zweet is gewoon talent dat naar buiten komt.",
  "Geen zin is geen reden. Het is een uitdaging.",
  "Je hoeft het niet perfect te doen. Je moet het gewoon doen.",
  "Een kampioen staat één keer vaker op dan hij valt.",
  "De beste training is die je echt doet.",
  "Twijfel minder. Train meer.",
  "Kleine stappen zijn ook stappen.",
  "Je grootste tegenstander ben je zelf. Versla hem vandaag.",
  "Moeilijk betekent niet onmogelijk.",
  "Wie elke dag oefent, hoeft niet op geluk te wachten.",
  "Het veld vergeet niet wie er hard gewerkt heeft.",
  "Concentratie wint wedstrijden. Karakter wint seizoenen.",
  "Je bent sterker dan je denkt.",
  "Vandaag een beetje beter dan gisteren. Dat is genoeg.",
  "Een goede verliezer wordt een goede winnaar."
);

// ================= Voetbal IQ =================
// fig: zelfde tekening als de oefeningen. mates = teamgenoten (T), foes = tegenstanders (M).
const IQ_LESSONS = [
  {title:"Scannen", text:"Kijk over je schouder voordat de bal bij je is. Dan weet je al wat je gaat doen.", how:"Kijk bij elke training twee keer om je heen voordat je de bal krijgt. Tel hoe vaak het lukt.",
   fig:{me:[90,50], mates:[[40,50]], foes:[[120,40]], ball:[50,50], paths:[{d:"M50 50 L82 50",t:"ball"}], look:true}},
  {title:"Open lichaamshouding", text:"Ontvang de bal met je lichaam half naar het veld gedraaid. Dan zie je meer en kun je sneller vooruit.", how:"Neem de bal aan met je verste voet, zodat je meteen vooruit kunt draaien.",
   fig:{me:[80,60], mates:[[40,80]], foes:[[110,30]], ball:[50,78], paths:[{d:"M50 78 L74 64",t:"ball"},{d:"M86 58 L130 40",t:"run"}]}},
  {title:"Vrijlopen in de ruimte", text:"Ga niet achter een tegenstander staan, maar in het gat tussen twee tegenstanders. Dan kan je teamgenoot je aanspelen.", how:"Kijk waar de lijn van de bal naar jou vrij is. Staat er iemand in de weg? Doe twee stappen opzij.",
   fig:{me:[95,50], mates:[[40,50]], foes:[[80,30],[80,70]], ball:[50,50], paths:[{d:"M110 70 L97 54",t:"run"},{d:"M50 50 L88 50",t:"ball"}]}},
  {title:"Breed en diep spelen", text:"Met de bal maak je het veld groot: spelers op de zijlijn en iemand diep. Dan krijgt de tegenstander gaten.", how:"Sta je op de vleugel? Blijf bij balbezit breed, met je voeten bijna op de zijlijn.",
   fig:{me:[80,10], mates:[[60,50],[80,90],[130,50]], ball:[68,50], paths:[{d:"M80 14 L80 8",t:"run"}]}},
  {title:"Driehoeken maken", text:"Zorg dat de speler met de bal altijd twee mensen kan aanspelen. Samen vorm je een driehoek.", how:"Kijk tijdens de wedstrijd: heeft de balbezitter twee opties? Zo niet, loop zelf naar de lege hoek.",
   fig:{me:[100,30], mates:[[60,60],[100,80]], foes:[[85,55]], ball:[68,60], paths:[{d:"M68 58 L94 34",t:"ball"},{d:"M68 62 L94 78",t:"ball"}]}},
  {title:"Na je pass bewegen", text:"Wie na een pass blijft staan, is makkelijk te dekken. Wie meteen beweegt, is weer aanspeelbaar.", how:"Zeg in je hoofd 'pass en ga' en loop na elke pass naar een nieuwe plek.",
   fig:{me:[50,60], mates:[[100,60]], foes:[[75,45]], ball:[58,60], paths:[{d:"M58 60 L92 60",t:"ball"},{d:"M50 52 Q70 20 110 25",t:"run"}]}},
  {title:"Buitenspel", text:"Je staat buitenspel als je bij de pass dichter bij het doel bent dan de bal én de voorlaatste tegenstander. Op je eigen helft kan het niet.", how:"Kijk bij een steekpass naar de laatste verdediger en wacht tot de bal gespeeld is voordat je erachter sprint.",
   fig:{me:[118,40], mates:[[60,60]], foes:[[110,25],[110,70]], ball:[68,60], paths:[{d:"M68 58 L130 40",t:"ball"}], line:110}},
  {title:"Direct druk na balverlies", text:"Ben je de bal kwijt? Dan heb je een paar seconden om hem terug te winnen voordat de tegenstander zich organiseert.", how:"Sprint na balverlies meteen naar de bal. Tel tot 5. Lukt het niet, ga terug naar je plek.",
   fig:{me:[72,56], foes:[[104,46]], mates:[[66,24]], ball:[113,48], paths:[{d:"M79 54 L94 49",t:"run"},{d:"M72 29 L95 41",t:"run"}]}},
  {title:"Compact verdedigen", text:"Bij verdedigen sta je dicht bij elkaar. Dan zijn er weinig gaten om doorheen te spelen.", how:"Houd bij balverlies ongeveer 10 meter afstand tot je dichtstbijzijnde teamgenoot.",
   fig:{mates:[[60,35],[60,65],[80,25],[80,50],[80,75]], me:[60,50], foes:[[120,50]], ball:[112,50]}},
  {title:"Tussen bal en doel", text:"Als verdediger sta je altijd tussen de tegenstander en je eigen doel in.", how:"Draai je hoofd bij verdedigen: zie je de bal én je tegenstander? Dan sta je goed.",
   fig:{goalLeft:true, me:[50,50], foes:[[80,50]], ball:[88,50]}},
  {title:"Naar buiten dwingen", text:"Zet je lichaam zo dat de aanvaller naar de zijlijn moet. Daar is hij minder gevaarlijk.", how:"Sta schuin voor je tegenstander, met de binnenkant van het veld dicht.",
   fig:{goalLeft:true, me:[60,55], foes:[[90,50]], ball:[82,50], paths:[{d:"M84 46 Q80 20 70 12",t:"ball"}]}},
  {title:"De derde man", text:"Kun je iemand niet direct aanspelen? Speel via een teamgenoot die meteen doorkaatst.", how:"Zoek bij training de speler die vrij staat achter een tegenstander en speel hem via een kaatsbal.",
   fig:{me:[40,60], mates:[[80,70],[110,35]], foes:[[75,45]], ball:[48,60], paths:[{d:"M48 62 L74 70",t:"ball"},{d:"M86 66 L104 40",t:"ball"}]}},
  {title:"In de rug lopen", text:"Een verdediger kijkt naar de bal. Loop achter hem langs, dan ziet hij je niet aankomen.", how:"Zie je dat je verdediger naar de bal kijkt? Start dan je loopactie achter zijn rug.",
   fig:{me:[90,70], foes:[[100,50]], mates:[[50,40]], ball:[58,40], paths:[{d:"M90 64 Q100 70 120 40",t:"run"},{d:"M58 40 L118 34",t:"ball"}]}},
  {title:"Tempo wisselen", text:"Dribbel eerst rustig en versnel ineens. Die verandering maakt het verschil, niet alleen hard lopen.", how:"Oefen in de slalom: langzaam, langzaam, en bij de laatste pion vol gas.",
   fig:{me:[40,50], foes:[[90,50]], ball:[48,50], paths:[{d:"M48 50 L78 50",t:"ball"},{d:"M80 46 Q95 25 135 30",t:"run"}]}},
  {title:"Twee tegen één", text:"Met twee tegen één verdediger: dribbel op de verdediger af. Komt hij naar jou, speel dan je maat vrij.", how:"Wacht met passen tot de verdediger echt naar jou toe komt.",
   fig:{me:[50,40], mates:[[50,75]], foes:[[95,55]], ball:[58,40], paths:[{d:"M58 42 L84 50",t:"ball"},{d:"M56 75 L110 75",t:"run"}]}},
  {title:"Omschakelen naar de andere kant", text:"Zit het dicht aan één kant? Speel de bal snel naar de andere kant, daar is ruimte.", how:"Kijk voordat je de bal krijgt: hoe is het aan de andere kant van het veld?",
   fig:{me:[70,14], mates:[[70,85]], foes:[[54,34],[86,34],[70,46]], ball:[79,16], paths:[{d:"M82 20 Q115 50 78 80",t:"ball"}]}},
  {title:"Praten op het veld", text:"Korte woorden helpen je team: 'man' (er komt iemand), 'tijd' (je hebt ruimte), 'draai' (je kunt draaien).", how:"Roep vandaag bij elke training minstens 5 keer 'man', 'tijd' of 'draai'.",
   fig:{me:[60,60], mates:[[95,50]], foes:[[115,45]], ball:[100,52], talk:true}},
  {title:"De tweede bal", text:"Na een kopduel of afgeslagen bal komt de bal vaak los. Wie er het eerst bij is, wint hem.", how:"Ga bij een hoge bal niet kijken, maar sta klaar op de plek waar hij waarschijnlijk valt.",
   fig:{me:[66,74], mates:[[86,36]], foes:[[106,38]], ball:[84,62], paths:[{d:"M96 30 Q90 24 85 56",t:"ball"},{d:"M70 68 L78 64",t:"run"}]}},
  {title:"Taken per linie", text:"Verdedigers houden het doel dicht, middenvelders verbinden, aanvallers maken goals en zetten als eerste druk.", how:"Vraag je trainer wat jouw belangrijkste taak is op jouw positie, en focus daar een week op.",
   fig:{mates:[[40,30],[40,70],[80,25],[80,50],[80,75],[120,40]], me:[120,60]}},
  {title:"Snel beslissen", text:"Hoe sneller je beslist wat je met de bal doet, hoe minder tijd de tegenstander heeft.", how:"Speel bij training eens een partijtje waarin je de bal maar 2 keer mag raken.",
   fig:{me:[66,56], mates:[[40,30],[112,28],[112,76]], foes:[[90,62]], ball:[75,56], paths:[{d:"M76 52 L104 32",t:"ball"}]}}
];

// "Wat doe jij?": kies het beste antwoord.
const IQ_QUIZ = [
  {q:"Je krijgt de bal en een tegenstander zit vlak in je rug. Wat is slim?", options:["Meteen omdraaien en dribbelen","De bal afschermen of terugkaatsen naar een teamgenoot","De bal ver weg schieten"], answer:1, why:"Met iemand in je rug is draaien riskant. Afschermen of kaatsen houdt de bal in je team."},
  {q:"Je team verliest de bal op het middenveld. Wat doe je?", options:["Stilstaan en balen","Meteen druk zetten op de bal","Rustig teruglopen naar je eigen doel"], answer:1, why:"Direct na balverlies is de tegenstander nog niet georganiseerd. Dan win je de bal het makkelijkst terug."},
  {q:"Je staat links voor, maar de bal is rechts en het is daar heel druk. Wat doe je?", options:["Naar rechts lopen om te helpen","Links breed blijven en roepen dat je vrij staat","Gaan zitten"], answer:1, why:"Aan de drukke kant is geen ruimte. Door breed te blijven kan je team de bal naar jouw kant omschakelen."},
  {q:"Je hebt de bal en twee teamgenoten staan vrij. Welke kies je?", options:["Degene die het dichtst bij staat","Degene die vooruit kan spelen","Altijd terugspelen naar de keeper"], answer:1, why:"Een pass naar iemand die vooruit kan, brengt je team dichter bij het doel."},
  {q:"Je bent verdediger. Een aanvaller dribbelt op je af. Wat doe je?", options:["Meteen een sliding maken","Rustig meelopen en hem naar de zijlijn dwingen","Weglopen"], answer:1, why:"Een sliding is een gok. Door mee te lopen en naar buiten te dwingen, maak je de aanvaller minder gevaarlijk."},
  {q:"Je speelt een pass. Wat doe je meteen daarna?", options:["Kijken of de pass goed aankomt","Bewegen naar een nieuwe vrije plek","Je schoenveters strikken"], answer:1, why:"Na je pass ben je weer aanspeelbaar als je meteen een nieuwe plek zoekt."},
  {q:"Er wordt een steekpass gegeven. Wanneer start je je sprint?", options:["Al lang voor de pass, ver achter de verdedigers","Precies als de bal gespeeld wordt","Pas als de bal al voorbij de verdediger is"], answer:1, why:"Te vroeg is buitenspel, te laat is de ruimte weg. Start op het moment van de pass."},
  {q:"Je bent de laatste man en het is 1 tegen 1. Wat is het belangrijkst?", options:["Op tijd vertragen zodat je team terug kan komen","Zo snel mogelijk de bal proberen af te pakken","De aanvaller vasthouden"], answer:0, why:"Door te vertragen geef je je teamgenoten tijd om terug te komen. Vasthouden is een overtreding."},
  {q:"Een hoge bal komt naar het middenveld. Waar sta jij als je niet kopt?", options:["Naast de speler die kopt","Klaar op de plek waar de bal waarschijnlijk valt","Achter de keeper"], answer:1, why:"Na een kopduel valt de bal vaak los. Wie daar al staat, wint de tweede bal."},
  {q:"Je krijgt de bal en je hebt veel ruimte. Wat roept je teamgenoot als het goed is?", options:["'Man!'","'Tijd!'","'Weg!'"], answer:1, why:"'Tijd' betekent dat er niemand aankomt en je rustig kunt kijken of draaien."},
  {q:"Het is 2 tegen 1 in jouw voordeel en jij hebt de bal. Wanneer pass je?", options:["Meteen","Als de verdediger echt naar jou toe komt","Nooit, gewoon zelf gaan"], answer:1, why:"Als de verdediger kiest voor jou, staat je maat vrij. Pass je te vroeg, dan kan hij nog terug."},
  {q:"Je team staat 1-0 voor en er zijn nog 2 minuten. Wat is slim?", options:["Met z'n allen aanvallen","De bal in het team houden en rustig rondspelen","De bal steeds ver wegschieten"], answer:1, why:"Wie de bal heeft, kan niet tegen een goal aankijken. Rustig rondspelen laat de tijd lopen."}
];

IQ_LESSONS.push(
  {title:"Lijn breken", text:"Een pass die tussen twee tegenstanders door gaat, haalt in één keer meerdere spelers uit het spel.", how:"Zoek bij training de pass die door de lijn van tegenstanders heen gaat in plaats van ernaast.",
   fig:{me:[40,50], mates:[[115,50]], foes:[[78,30],[78,70]], ball:[48,50], paths:[{d:"M48 50 L106 50",t:"ball"}]}},
  {title:"Ver weg van de bal staan", text:"Ook als je ver van de bal staat, help je je team: je trekt een tegenstander mee en maakt ruimte.", how:"Let er een wedstrijd lang op: waar sta jij als de bal aan de andere kant is?",
   fig:{me:[124,82], foes:[[104,74]], mates:[[50,25],[80,30]], ball:[58,26], paths:[{d:"M126 74 L136 62",t:"run"}]}},
  {title:"Korte kant, lange kant", text:"Bij een voorzet vanaf links loopt de ene aanvaller naar de eerste paal en de andere naar de tweede.", how:"Spreek met je medeaanvaller af wie naar de korte en wie naar de lange paal gaat.",
   fig:{goal:true, mates:[[110,10]], me:[100,62], foes:[[132,50]], ball:[116,12], paths:[{d:"M116 16 Q140 35 140 45",t:"ball"},{d:"M100 56 L130 40",t:"run"},{d:"M104 68 L134 64",t:"run"}]}},
  {title:"Een hoekschop verdedigen", text:"Bij een hoekschop tegen weet iedereen wie hij dekt of welke ruimte hij bewaakt. Nooit alleen naar de bal kijken.", how:"Vraag je trainer wie jij dekt bij een hoekschop en houd die speler in de gaten.",
   fig:{goalLeft:true, me:[34,40], foes:[[52,36],[54,64]], mates:[[36,66]], ball:[6,6], paths:[{d:"M8 8 Q46 4 46 30",t:"ball"}]}},
  {title:"Overladen van een kant", text:"Met veel spelers aan één kant maak je overtal en lok je de tegenstander. Daarna speel je snel naar de lege kant.", how:"Kijk in een partijtje of je met drie spelers samen een kant kunt overladen.",
   fig:{me:[100,14], mates:[[66,18],[80,42]], foes:[[86,24],[106,34]], ball:[74,18], paths:[{d:"M86 46 Q112 72 134 84",t:"ball"}]}},
  {title:"Lichaam tussen bal en man", text:"Bij een duel om een lange bal zet je je lichaam voor de tegenstander, zodat jij als eerste bij de bal bent.", how:"Oefen met een maatje: wie staat er als eerste goed als de bal valt?",
   fig:{me:[96,58], foes:[[78,62]], ball:[104,44], paths:[{d:"M40 20 Q86 0 103 40",t:"ball"}]}},
  {title:"Speel de vrije man", text:"Staat er een teamgenoot helemaal vrij? Zoek hem op. Dat is bijna altijd beter dan zelf door drie man dribbelen.", how:"Tel in een partijtje hoe vaak je de vrije man vindt.",
   fig:{me:[60,50], foes:[[80,40],[80,60],[90,50]], mates:[[70,90]], ball:[68,52], paths:[{d:"M66 56 L70 82",t:"ball"}]}},
  {title:"Achter de bal blijven", text:"Bij balverlies moeten er altijd spelers tussen de bal en je eigen doel zijn. Anders kan de tegenstander zomaar counteren.", how:"Spreek af dat er bij een aanval altijd twee spelers achterblijven.",
   fig:{goalLeft:true, mates:[[100,26],[106,64],[126,40]], me:[50,50], foes:[[72,36]], ball:[134,44]}},
  {title:"Snelle counter", text:"Win je de bal en is de tegenstander nog niet terug? Speel dan meteen vooruit.", how:"Kijk na het winnen van de bal eerst diep: staat er iemand vrij voorin?",
   fig:{goal:true, me:[50,52], mates:[[110,35]], foes:[[46,74],[72,72]], ball:[59,51], paths:[{d:"M60 48 L102 37",t:"ball"},{d:"M114 42 L136 48",t:"run"}]}},
  {title:"Geduld met de bal", text:"Zit alles dicht? Speel de bal rustig rond tot er een gat ontstaat. Niet forceren.", how:"Probeer in een partijtje een keer 10 passes achter elkaar te halen voordat je aanvalt.",
   fig:{me:[60,30], mates:[[60,70],[90,50],[40,50]], foes:[[110,40],[110,60],[120,50]], ball:[68,30], paths:[{d:"M66 34 L84 48",t:"ball"},{d:"M88 56 L66 66",t:"ball"}]}},
  {title:"De keeper als extra speler", text:"Je keeper kan ook meespelen. Een terugspeelbal naar de keeper is geen schande, maar slim.", how:"Kijk of je keeper vrij staat als het vooruit dicht zit.",
   fig:{goalLeft:true, mates:[[22,50]], me:[64,44], foes:[[84,32],[86,58]], ball:[55,46], paths:[{d:"M52 47 L31 50",t:"ball"}]}},
  {title:"Opstellingen", text:"Een opstelling zoals 4-3-3 laat zien hoeveel verdedigers, middenvelders en aanvallers er zijn. Elke plek heeft een eigen taak.", how:"Teken de opstelling van je eigen team en zet jezelf erin.",
   fig:{goalLeft:true, mates:[[40,15],[40,38],[40,62],[40,85],[80,30],[75,50],[80,70],[120,20],[125,80]], me:[125,50]}}
);

IQ_LESSONS.push(
  {title:"Laag zitten bij verdedigen", text:"Zak door je knieën en sta op je voorvoeten. Dan reageer je sneller als de aanvaller een kant kiest.", how:"Sta bij elk 1-tegen-1 op training laag, met je voeten niet naast elkaar maar schuin.",
   fig:{goalLeft:true, me:[60,50], foes:[[96,50]], ball:[88,50]}},
  {title:"Kijk naar de bal, niet naar de schijnbeweging", text:"Een aanvaller doet schijnbewegingen met zijn lichaam. De bal liegt nooit.", how:"Let bij verdedigen alleen op de bal en de heupen van je tegenstander.",
   fig:{goalLeft:true, me:[60,50], foes:[[92,50]], ball:[84,52], paths:[{d:"M84 48 Q80 30 92 26",t:"run"},{d:"M84 56 Q80 70 92 74",t:"run"}]}},
  {title:"Dekken en afdekken", text:"Gaat je teamgenoot naar de bal, dan sta jij schuin achter hem. Wordt hij gepasseerd, dan ben jij er.", how:"Spreek met je medeverdediger af: wie gaat drukzetten en wie dekt af?",
   fig:{goalLeft:true, mates:[[66,40]], me:[48,58], foes:[[90,38]], ball:[82,40]}},
  {title:"Als lijn doorschuiven", text:"Verdedigers bewegen samen naar voren en achteren, als één lijn. Zo blijven de gaten klein.", how:"Kijk bij verdedigen naar links en rechts: sta je op één lijn met je medeverdedigers?",
   fig:{goalLeft:true, mates:[[50,20],[50,45],[50,80]], me:[50,62], ball:[110,50], paths:[{d:"M56 20 L68 20",t:"run"},{d:"M56 45 L68 45",t:"run"},{d:"M56 62 L68 62",t:"run"},{d:"M56 80 L68 80",t:"run"}]}},
  {title:"Ruimte maken voor een ander", text:"Soms loop je weg zonder de bal te krijgen, alleen om je verdediger mee te nemen. Dan krijgt een teamgenoot ruimte.", how:"Probeer in een partijtje een keer een loopactie te maken zodat een ander vrij komt.",
   fig:{me:[100,45], foes:[[108,50]], mates:[[60,70],[80,40]], ball:[68,70], paths:[{d:"M104 40 L130 20",t:"run"},{d:"M86 42 L106 52",t:"run"},{d:"M68 66 L100 56",t:"ball"}]}},
  {title:"Een-twee", text:"Pass naar een teamgenoot, loop langs de verdediger en krijg de bal meteen terug.", how:"Oefen met een maatje: pass, sprint en ontvang de kaatsbal achter een pion.",
   fig:{me:[40,60], mates:[[80,30]], foes:[[78,60]], ball:[48,60], paths:[{d:"M48 58 L74 34",t:"ball"},{d:"M86 34 L112 58",t:"ball"},{d:"M46 64 Q80 80 110 64",t:"run"}]}},
  {title:"Aannemen weg van druk", text:"Komt er een tegenstander van links? Neem de bal dan aan naar rechts, weg van hem.", how:"Kijk voor de aanname waar de tegenstander vandaan komt en neem de bal de andere kant op.",
   fig:{me:[80,50], mates:[[40,50]], foes:[[90,28]], ball:[48,50], paths:[{d:"M48 50 L74 50",t:"ball"},{d:"M86 54 L110 74",t:"run"}]}},
  {title:"Schieten of passen?", text:"Staat er een teamgenoot vrijer dan jij voor het doel? Dan is een pass vaak slimmer dan zelf schieten.", how:"Kijk voor je schiet nog één keer op: staat er iemand beter?",
   fig:{goal:true, me:[110,30], mates:[[120,60]], foes:[[122,36]], ball:[116,32], paths:[{d:"M114 36 L120 52",t:"ball"}]}},
  {title:"Na een schot doorlopen", text:"Een keeper laat de bal soms los. Wie doorloopt na een schot, kan de rebound binnentikken.", how:"Loop na elk schot op training een paar meter door richting doel.",
   fig:{goal:true, me:[100,55], ball:[112,52], paths:[{d:"M112 52 L144 50",t:"ball"},{d:"M106 56 L132 58",t:"run"}]}},
  {title:"Snel hervatten", text:"Een vrije trap of ingooi snel nemen kan verrassend werken, als de tegenstander nog niet klaarstaat.", how:"Kijk bij een vrije trap meteen of je hem snel kunt nemen naar een vrije teamgenoot.",
   fig:{me:[60,50], mates:[[100,30]], foes:[[70,60],[80,70]], ball:[66,50], paths:[{d:"M66 48 L94 32",t:"ball"}]}},
  {title:"Slim ingooien", text:"Gooi de bal naar een teamgenoot die vrij is en vooruit kan, niet zomaar zo ver mogelijk.", how:"Spreek bij een ingooi af wie er wegloopt en wie terugkomt naar de bal.",
   fig:{me:[80,6], mates:[[70,30],[100,40]], foes:[[78,40]], ball:[80,10], paths:[{d:"M78 12 L70 24",t:"ball"},{d:"M100 34 L118 20",t:"run"}]}},
  {title:"Penalty: kies vooraf", text:"Bepaal voordat je aanloopt in welke hoek je schiet en twijfel niet meer.", how:"Neem 10 penalty's en zeg vóór elke aanloop hardop welke hoek.",
   fig:{goal:true, me:[96,50], ball:[118,50], paths:[{d:"M118 50 L146 26",t:"ball"}]}},
  {title:"Als keeper de hoek verkleinen", text:"Een keeper die een stap naar voren doet, laat minder ruimte over in de hoeken.", how:"Sta je in de goal? Stap uit als een aanvaller alleen op je af komt.",
   fig:{goal:true, mates:[[134,50]], foes:[[100,40]], ball:[108,42], paths:[{d:"M108 42 L146 18",t:"ball"},{d:"M108 44 L146 82",t:"ball"}]}},
  {title:"Op de goede voet passen", text:"Speel de bal naar de voet waarmee je teamgenoot meteen verder kan, meestal de voet die van de tegenstander af is.", how:"Kijk bij elke pass: naar welke voet speel ik?",
   fig:{me:[40,60], mates:[[100,50]], foes:[[110,30]], ball:[48,60], paths:[{d:"M48 60 L96 58",t:"ball"}]}},
  {title:"Hard of zacht passen", text:"Een korte pass mag zacht, een lange of een pass door een gat moet harder. Te zacht wordt onderschept.", how:"Oefen tegen de muur: pass zacht op 3 meter en hard op 10 meter.",
   fig:{me:[40,50], mates:[[70,30],[130,60]], foes:[[95,55]], ball:[48,50], paths:[{d:"M48 48 L64 34",t:"ball"},{d:"M48 52 L122 60",t:"ball"}]}},
  {title:"In de loop passen", text:"Loopt je teamgenoot? Speel de bal dan voor hem uit, zodat hij niet hoeft te remmen.", how:"Kijk waar je teamgenoot over twee seconden is, en speel daar naartoe.",
   fig:{me:[40,60], mates:[[80,30]], foes:[[90,50]], ball:[48,60], paths:[{d:"M86 32 L124 40",t:"run"},{d:"M48 58 L120 44",t:"ball"}]}},
  {title:"Wanneer instappen?", text:"Stap pas in op de bal als je zeker weet dat je hem raakt, of als de aanvaller hem te ver voor zich uit speelt.", how:"Let op het moment dat de bal van de voet van je tegenstander af is.",
   fig:{goalLeft:true, me:[60,50], foes:[[96,50]], ball:[80,50], paths:[{d:"M66 50 L74 50",t:"run"}]}},
  {title:"Na een fout meteen door", text:"Iedereen maakt fouten. Topspelers baal je één seconde en zijn dan meteen weer bij de les.", how:"Bedenk een vast woord, zoals 'volgende', dat je zegt na een fout.",
   fig:{me:[70,50], foes:[[90,40]], ball:[100,40], paths:[{d:"M76 48 L90 44",t:"run"}]}},
  {title:"Ruimte achter de verdediging", text:"Staan de verdedigers hoog? Dan ligt er veel ruimte achter ze. Een snelle loopactie kan daar gevaarlijk zijn.", how:"Kijk aan het begin van een wedstrijd hoe hoog de verdediging van de tegenstander staat.",
   fig:{goal:true, me:[90,60], mates:[[50,40]], foes:[[96,40],[96,70]], ball:[58,40], line:96, paths:[{d:"M90 54 L128 50",t:"run"},{d:"M58 40 L124 48",t:"ball"}]}},
  {title:"Mandekking", text:"Bij mandekking blijf je bij één tegenstander, waar hij ook heen gaat.", how:"Probeer in een partijtje je tegenstander 5 minuten lang geen bal te laten krijgen.",
   fig:{goalLeft:true, me:[60,40], foes:[[70,38]], mates:[[50,70]], ball:[110,60], paths:[{d:"M74 34 L96 22",t:"run"},{d:"M64 36 L86 24",t:"run"}]}},
  {title:"Zone verdedigen", text:"Bij zonedekking let je op een stuk van het veld. Komt er iemand in jouw zone, dan pak jij hem op.", how:"Spreek af met je teamgenoten welke zone van wie is.",
   fig:{goalLeft:true, mates:[[50,25],[50,75]], me:[50,50], foes:[[90,50]], ball:[98,50], zones:true}},
  {title:"Samen drukzetten", text:"Druk zetten werkt alleen als het hele team meedoet. Een terugspeelbal is vaak het teken om samen naar voren te gaan.", how:"Spreek met je team een woord af waarop iedereen tegelijk druk zet.",
   fig:{me:[100,40], mates:[[100,70],[80,55]], foes:[[130,50],[125,25]], ball:[126,48], paths:[{d:"M106 42 L120 46",t:"run"},{d:"M106 68 L122 56",t:"run"},{d:"M86 52 L116 32",t:"run"}]}},
  {title:"Naar binnen snijden", text:"Een vleugelspeler die met zijn sterke voet naar binnen dribbelt, kan zelf schieten of een steekpass geven.", how:"Oefen vanaf de zijkant naar binnen dribbelen en afronden met je sterke voet.",
   fig:{goal:true, me:[90,15], foes:[[100,30]], ball:[98,16], paths:[{d:"M98 18 Q112 35 116 50",t:"ball"},{d:"M118 50 L146 36",t:"ball"}]}},
  {title:"De overlap", text:"Een verdediger sprint langs de buitenkant van zijn vleugelspeler. Zo is het twee tegen één op de flank.", how:"Kijk als vleugelspeler of je back meekomt, en speel hem in de loop aan.",
   fig:{me:[90,18], mates:[[60,10]], foes:[[100,22]], ball:[96,20], paths:[{d:"M64 8 Q100 2 130 8",t:"run"},{d:"M96 18 L126 10",t:"ball"}]}},
  {title:"De underlap", text:"Bij een underlap loopt je teamgenoot aan de binnenkant langs je heen in plaats van de buitenkant.", how:"Probeer in een partijtje een keer de binnenkant te nemen als je vleugelspeler de bal heeft.",
   fig:{me:[96,10], mates:[[60,30]], foes:[[104,16]], ball:[100,12], paths:[{d:"M64 30 Q100 34 128 24",t:"run"},{d:"M100 14 L124 24",t:"ball"}]}},
  {title:"Kijk naar de keeper", text:"Kijk vlak voor je schot even waar de keeper staat. Staat hij ver uit? Dan kan een lobje werken.", how:"Kijk bij schieten op training eerst naar de keeper en kies dan je hoek.",
   fig:{goal:true, me:[104,50], mates:[[126,40]], ball:[112,50], paths:[{d:"M112 48 Q130 20 146 44",t:"ball"}]}},
  {title:"De terugleg", text:"Ben je bij de achterlijn? Een lage bal schuin terug naar de rand van het strafschopgebied is heel gevaarlijk.", how:"Oefen vanaf de achterlijn de bal laag terugleggen naar een teamgenoot.",
   fig:{goal:true, me:[136,92], mates:[[110,62]], foes:[[136,60]], ball:[132,90], paths:[{d:"M130 88 L114 66",t:"ball"}]}},
  {title:"Tussen de linies", text:"De ruimte tussen de verdedigers en middenvelders van de tegenstander is gouden. Wie daar de bal krijgt, kan draaien.", how:"Zoek als middenvelder het gat achter de middenvelders van de tegenstander.",
   fig:{me:[100,50], mates:[[50,50]], foes:[[80,35],[80,65],[120,30],[120,70]], ball:[58,50], paths:[{d:"M58 50 L92 50",t:"ball"}]}},
  {title:"Positie bij een doelschop", text:"Bij een doelschop van de tegenstander sta je zo dat je de korte pass kunt onderscheppen, of klaar voor de tweede bal.", how:"Kijk bij een doelschop: wordt hij kort of lang genomen? Pas je plek daarop aan.",
   fig:{goal:true, mates:[[130,30]], me:[110,70], foes:[[124,50],[100,40]], ball:[138,56]}},
  {title:"Slim een kaart voorkomen", text:"Verdedigen doe je met je voeten op de grond en je armen bij je lichaam. Duwen en trekken kost vrije trappen.", how:"Let er een wedstrijd op dat je je armen niet gebruikt bij duels.",
   fig:{goalLeft:true, me:[60,50], foes:[[80,46]], ball:[90,48]}},
  {title:"Sneller zijn zonder bal", text:"De bal gaat sneller dan jij. Laat de bal het werk doen met snelle passes in plaats van alles zelf te dribbelen.", how:"Speel in een partijtje vaker in één of twee keer raken.",
   fig:{me:[40,50], mates:[[80,30],[120,55]], foes:[[70,55],[100,40]], ball:[48,50], paths:[{d:"M48 48 L74 34",t:"ball"},{d:"M86 34 L114 52",t:"ball"}]}},
  {title:"Een plan voor de wedstrijd", text:"Bedenk voor een wedstrijd één ding waar je op let, bijvoorbeeld 'elke keer scannen'. Eén doel werkt beter dan tien.", how:"Schrijf voor je volgende wedstrijd één doel op en zet het in je planner.",
   fig:{mates:[[40,30],[40,70],[80,25],[80,50],[80,75],[120,40]], me:[120,60], talk:true}}
);

// Langere mindset-filmpjes (geen Shorts). In de app stoppen ze altijd na maximaal 10 minuten.
const LONG_VIDEOS = [
  {title:"Don't quit, it's possible", video:"mAQP5ASH-BA", note:"Voetbalfilmpje met muziek over doorzetten."},
  {title:"Don't stop, it's not over", video:"PA3vKWmZPyk", note:"Voetbalfilmpje over terugkomen na tegenslag."},
  {title:"Don't give up: football motivation", video:"i3A9mJNa64M", note:"Voetbalbeelden met muziek over nooit opgeven."},
  {title:"Messi: never give up", video:"WFlK9No4F4o", note:"Het verhaal van Messi, die als klein jongetje te klein werd gevonden."},
  {title:"Messi: fight back", video:"3o5_g-UHDjg", note:"Messi over terugvechten na teleurstellingen."},
  {title:"Messi: he never gives up", video:"A3F-_gNqK4g", note:"Motivatiefilmpje over het doorzettingsvermogen van Messi."},
  {title:"Kobe Bryant: the standard is everything", video:"AekmtsW7ja0", note:"Kobe over altijd hoge eisen aan jezelf stellen."},
  {title:"Kobe Bryant: mamba mentality", video:"VQeB3OzUi9A", note:"De beroemde werkhouding van Kobe Bryant."},
  {title:"Ronaldo: talent without work is nothing", video:"pVODNbsi7k0", note:"Ronaldo over waarom hard werken belangrijker is dan talent."},
  {title:"Football motivation edit", video:"jEzh2a2i7Y0", note:"Voetbaledit met muziek."}
];
