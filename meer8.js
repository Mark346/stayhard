// Stay Hard – achtste uitbreiding.

// ---------- Trucjes ----------
TRICKS.push(
  TR("V-panna", "B1ydcVWxwwY", "Moeilijk", "Kijk naar de benen van je tegenstander: als ze open staan, is het je kans.", "v panna tutorial", ["Trek de bal met je zool terug.","Wacht tot je tegenstander zijn benen opent.","Duw de bal schuin tussen zijn benen door.","Loop om hem heen en pak de bal."]),
  TR("Switch-panna", "knKAPovWSdE", "Moeilijk", "Snel van voet wisselen maakt de tegenstander in de war.", "switch panna tutorial", ["Tik de bal van je ene naar je andere voet.","Laat de tegenstander meebewegen.","Speel hem met de binnenkant tussen zijn benen door.","Sprint erachteraan."]),
  TR("Omgekeerde elastico", "f3x9RyF3tY8", "Moeilijk", "Eerst de gewone elastico goed kunnen.", "reverse elastico tutorial", ["Duw de bal met je binnenkant naar binnen.","Draai je voet snel om.","Haal de bal met je buitenkant terug.","Versnel naar buiten."]),
  TR("Zoolrol-draai", "l1DqOsJmQP8", "Gemiddeld", "Blijf laag tijdens de draai.", "sole roll turn tutorial", ["Zet je zool op de bal.","Rol hem opzij.","Draai je lichaam mee.","Ga de andere kant op."]),
  TR("Zoolrol en stepover", "VybfIkGVVY0", "Gemiddeld", "Rustig opbouwen: eerst de zoolrol, dan de stepover.", "sole roll step over", ["Rol de bal met je zool opzij.","Stap meteen over de bal met dezelfde voet.","Neem hem mee met je andere voet.","Versnel."]),
  TR("Spin-out zoolrol", "3WhgQDJARMw", "Moeilijk", "Een draai waarbij je de bal de hele tijd onder je voet houdt.", "spin out sole roll", ["Zet je zool op de bal.","Rol hem terwijl je om je as draait.","Houd contact met de bal.","Ga verder in de nieuwe richting."]),
  TR("Zoolrol met hakje", "3LGLipEh_6E", "Moeilijk", "Een trucje van Neymar; leuk in een partijtje.", "sole roll back heel tutorial", ["Rol de bal met je zool naar achteren.","Stap over de bal.","Tik hem met je hak naar voren.","Neem hem mee."]),
  TR("Omgekeerde Cruijff", "Z8jjl6nKAq4", "Gemiddeld", "Ziet eruit als een rabona, maar je draait weg.", "reverse cruyff rabona fake", ["Dribbel naar voren.","Zwaai je been achter je standbeen langs, alsof je een rabona doet.","Tik de bal met je binnenkant achter je standbeen.","Draai mee en ga weg."]),
  TR("Mbappé-stepover", "xnOHJv0Knjw", "Gemiddeld", "Werkt het best op hoge snelheid.", "mbappe step over tutorial", ["Dribbel snel naar voren.","Stap over de bal zonder af te remmen.","Laat je schouder meegaan.","Versnel met de bal naar de andere kant."]),
  TR("Mbappé-lichaamsschijn", "ytUFnXlFslo", "Makkelijk", "Hoe sneller je loopt, hoe beter de schijn werkt.", "mbappe body feint", ["Sprint met de bal.","Laat je lichaam één kant op zakken.","Raak de bal niet.","Versnel naar de andere kant."]),
  TR("Aannemen en draaien", "OSdPtoqEtbk", "Makkelijk", "Kijk voor de aanname over je schouder.", "receive and turn first touch", ["Kijk over je schouder.","Open je lichaam.","Neem de bal aan in de richting waar je heen wilt.","Ga direct verder."]),
  TR("Bal uit de lucht doodleggen", "6mhb4ymOMNs", "Gemiddeld", "Meegeven met je voet is het geheim.", "control ball out of the air", ["Kijk vroeg waar de bal valt.","Zet je voet omhoog als een kussen.","Geef mee als de bal je raakt.","Laat hem voor je liggen."]),
  TR("Panna zoals Neymar", "RH72b0eWSh8", "Moeilijk", "Speel de bal pas als de benen van je tegenstander open zijn.", "nutmeg like neymar", ["Dribbel op je tegenstander af.","Doe een schijnbeweging opzij.","Speel de bal tussen zijn benen door.","Loop om hem heen."]),
  TR("Drie schijnschoten", "LZeVRMwrJh4", "Gemiddeld", "Leer er eerst één goed, daarna de andere twee.", "fake shot variations", ["Neem een aanloop alsof je schiet.","Stop je been net voor de bal.","Neem de bal mee met binnenkant, buitenkant of zool.","Schiet of pass daarna."])
);

// ---------- Mindset-filmpjes ----------
(() => {
  const have = new Set([...GOGGINS_VIDEOS, ...MINDSET_VIDEOS, ...LONG_VIDEOS].map(v => v.video));
  const add = (list, v) => { if (!have.has(v.video)) { have.add(v.video); list.push(v); } };
  [["Stay Hard edit","mkXA_YuwlL8"],["Stay Hard (short)","NrRvP5EK990"],["Stay Hard: discipline","qORkQJoiL6U"],["Stay Hard: stay focused","UxBOuHMvodo"],["Stay Hard: mindset","6__CiZ3rR1s"]]
    .forEach(([title, video]) => add(GOGGINS_VIDEOS, {title, video, short:true, goggins:true, note:"Goggins-edit met muziek."}));
  add(MINDSET_VIDEOS, {title:"De definitie van nooit opgeven", video:"XHmiqribrm0", short:true, note:"Voetbalmoment over doorzetten."});
  add(MINDSET_VIDEOS, {title:"Nooit opgeven: voetbal", video:"tAtFBhJIMEM", short:true, note:"Momenten waarin spelers doorgingen."});
  add(MINDSET_VIDEOS, {title:"Verdedigen tot het einde", video:"ICF8ZKvp9ZY", short:true, note:"Nooit opgeven bij verdedigen."});
  add(LONG_VIDEOS, {title:"Ronaldo: de kunst van discipline", video:"cOAZ899P8Io", note:"Over discipline en hard werken."});
  add(LONG_VIDEOS, {title:"Talent is niets zonder hard werken", video:"pxyKgA_mYH0", note:"Waarom inzet belangrijker is dan talent."});
  add(LONG_VIDEOS, {title:"Werk hard in stilte", video:"NNHgbYliOj0", note:"Motivatie om door te gaan als niemand kijkt."});
  add(LONG_VIDEOS, {title:"Ronaldo: blijven werken", video:"Xx6A8rtBkV0", note:"Ronaldo over hard blijven werken."});
  add(LONG_VIDEOS, {title:"Never give up: voetbal", video:"fq1JcM24RpQ", note:"Voetbalfilmpje over nooit opgeven."});
  add(LONG_VIDEOS, {title:"Messi: nooit opgeven", video:"WFlK9No4F4o", note:"Messi-motivatie."});
})();

// ---------- Thuistraining: bovenlichaam ----------
const PL = {...PLANK, h:[94,60], s:[86,66], p:[56,72], e1:[74,74]};
const WALL_A = {h:[76,20], s:[72,28], p:[58,54], e1:[82,32], w1:[90,30], e2:[82,32], w2:[90,30], k1:[56,72], f1:[52,90], k2:[56,72], f2:[52,90]};
const WALL_B = {h:[84,22], s:[80,30], p:[60,54], e1:[86,36], w1:[90,30], e2:[86,36], w2:[90,30], k1:[56,72], f1:[52,90], k2:[56,72], f2:[52,90]};
EXERCISES.push(
  XE("Push-up tegen de muur", "Borst en armen", "3 x 15", "Sta een stap van de muur, handen op schouderhoogte, en duw jezelf af.", "wall push ups", [WALL_A, WALL_B]),
  XE("Push-up op je knieën met pauze", "Borst en armen", "3 x 8", "Op je knieën zak je naar beneden en wacht je 2 seconden.", "knee push up pause", [{h:[92,52], s:[84,58], p:[60,72], e1:[84,74], w1:[84,88], e2:[84,74], w2:[84,88], k1:[44,88], f1:[30,80], k2:[44,88], f2:[30,80]}, {h:[92,62], s:[84,68], p:[60,78], e1:[74,76], w1:[84,88], e2:[74,76], w2:[84,88], k1:[44,88], f1:[30,80], k2:[44,88], f2:[30,80]}]),
  XE("Push-up met klap tegen de muur", "Borst en armen", "3 x 6", "Duw jezelf hard van de muur af, klap in je handen en vang jezelf op.", "wall clap push up", [WALL_A, {...WALL_B, e1:[76,30], w1:[78,22], e2:[76,30], w2:[78,22]}]),
  XE("Armen strekken achter je hoofd met fles", "Armen (achterkant)", "3 x 12", "Houd een volle fles water met twee handen achter je hoofd en strek je armen omhoog.", "overhead triceps extension bottle", [P({e1:[64,8], w1:[60,18], e2:[56,8], w2:[60,18]}), P({e1:[64,8], w1:[62,-2], e2:[56,8], w2:[58,-2]})]),
  XE("Zijwaarts armen heffen met flessen", "Schouders", "3 x 12", "Houd in elke hand een fles water en til je armen opzij tot schouderhoogte.", "lateral raise water bottles", [S, P({e1:[72,26], w1:[84,26], e2:[48,26], w2:[36,26]})]),
  XE("Voorwaarts armen heffen met flessen", "Schouders", "3 x 12", "Til flessen water met gestrekte armen naar voren op tot schouderhoogte.", "front raise water bottles", [S, P({e1:[70,24], w1:[82,24], e2:[70,24], w2:[82,24]})]),
  XE("Roeien met flessen voorovergebogen", "Rug en armen", "3 x 12", "Buig voorover met een rechte rug en trek de flessen naar je heupen.", "bent over row bottles", [{h:[84,40], s:[76,44], p:[56,54], e1:[78,58], w1:[80,70], e2:[78,58], w2:[80,70], k1:[64,72], f1:[62,90], k2:[64,72], f2:[62,90]}, {h:[84,40], s:[76,44], p:[56,54], e1:[66,46], w1:[70,56], e2:[66,46], w2:[70,56], k1:[64,72], f1:[62,90], k2:[64,72], f2:[62,90]}]),
  XE("Biceps met flessen", "Armen (voorkant)", "3 x 12", "Houd flessen water vast en buig je ellebogen tot je handen bij je schouders zijn.", "bicep curl bottles", [P({e1:[66,37], w1:[68,50], e2:[54,37], w2:[52,50]}), P({e1:[66,37], w1:[66,26], e2:[54,37], w2:[54,26]})]),
  XE("Dips op de bank met gestrekte benen", "Armen (achterkant)", "3 x 8", "Handen op een bank achter je, benen gestrekt, en zak naar beneden.", "bench dips straight legs", [{h:[40,30], s:[40,40], p:[42,62], e1:[34,52], w1:[30,60], e2:[34,52], w2:[30,60], k1:[66,72], f1:[86,88], k2:[66,72], f2:[86,88]}, {h:[40,42], s:[40,52], p:[42,74], e1:[30,54], w1:[30,60], e2:[30,54], w2:[30,60], k1:[66,80], f1:[86,88], k2:[66,80], f2:[86,88]}]),
  XE("Plank-loop opzij", "Schouders en romp", "3 x 5 stappen per kant", "In de opdrukhouding stap je met handen en voeten zijwaarts.", "lateral plank walk", [PLANK, {...PLANK, e1:[90,72], w1:[92,88], f1:[30,88]}]),
  XE("Beer-kruipen achteruit", "Schouders en armen", "3 x 8 meter", "Kruip op handen en voeten achteruit met je knieën net boven de grond.", "reverse bear crawl", [{...QUAD, k1:[52,84], k2:[52,84], f1:[36,90], f2:[36,90], p:[50,64]}, {...QUAD, k1:[58,84], f1:[42,90], k2:[48,84], f2:[32,90], p:[50,64]}]),
  XE("Schoudertikken op je knieën", "Schouders", "3 x 10 per kant", "Op je knieën in de opdrukhouding tik je om de beurt je schouder aan.", "knee shoulder taps", [{h:[92,52], s:[84,58], p:[60,72], e1:[84,74], w1:[84,88], e2:[84,74], w2:[84,88], k1:[44,88], f1:[30,80], k2:[44,88], f2:[30,80]}, {h:[92,52], s:[84,58], p:[60,72], e1:[84,74], w1:[84,88], e2:[78,50], w2:[82,46], k1:[44,88], f1:[30,80], k2:[44,88], f2:[30,80]}]),
  XE("Armen kruisen voor je borst", "Borst en schouders", "3 x 30 sec", "Strek je armen voor je en kruis ze snel over elkaar heen, zoals een schaar.", "arm scissors", [P({e1:[70,30], w1:[82,30], e2:[70,32], w2:[82,34]}), P({e1:[70,32], w1:[82,34], e2:[70,30], w2:[82,30]})]),
  XE("Bokszakloos: stoten in de lucht", "Schouders en armen", "3 x 30 sec", "Stoot om de beurt met links en rechts snel naar voren.", "shadow boxing beginner", [P({e1:[70,30], w1:[82,28], e2:[60,34], w2:[64,28]}), P({e1:[60,34], w1:[64,28], e2:[70,30], w2:[82,28]})]),
  XE("Handen op de grond: opdrukken uit de hurk", "Armen en borst", "3 x 6", "Zit gehurkt, zet je handen op de grond, spring naar achteren en doe een push-up.", "squat thrust push up", [{...SQUAT, e1:[66,70], w1:[70,88], e2:[66,70], w2:[70,88]}, PL]),
  XE("Superman met armen naar je zij", "Bovenrug", "3 x 10", "Lig op je buik, armen vooruit, en trek ze in een W naar je zij.", "superman pull", [{...LIE, h:[18,78], s:[28,82], e1:[16,74], w1:[6,72]}, {...LIE, h:[18,78], s:[28,82], e1:[34,72], w1:[28,66]}]),
  XE("Ingooi-oefening zonder bal", "Schouders en romp", "3 x 12", "Doe de beweging van een lange ingooi, langzaam en met je hele lichaam.", "throw in technique", [P({e1:[60,8], w1:[52,2], e2:[56,8], w2:[50,2]}), P({e1:[70,22], w1:[80,18], e2:[70,22], w2:[80,18]})]),
  XE("Plank met armen omhoog om de beurt", "Schouders en romp", "3 x 6 per arm", "In de opdrukhouding til je om de beurt een arm naar voren.", "plank arm raise", [PLANK, {...PLANK, e2:[96,52], w2:[106,50]}]),
  XE("Push-up met draai", "Borst en romp", "3 x 6 per kant", "Doe een push-up en draai daarna je arm omhoog in een zijplank.", "push up rotation", [PL, {h:[92,52], s:[84,58], p:[56,72], e1:[84,88], w1:[96,88], e2:[86,46], w2:[88,34], k1:[40,80], f1:[24,88], k2:[40,80], f2:[24,88]}]),
  XE("Armen draaien met flessen", "Schouders", "3 x 20 sec", "Houd flessen water vast met je armen opzij en draai kleine rondjes.", "arm circles weights", [P({e1:[72,24], w1:[84,24], e2:[48,24], w2:[36,24]}), P({e1:[72,22], w1:[84,20], e2:[48,22], w2:[36,20]})])
);

// ---------- Rekoefeningen ----------
RECOVERY.push(
  RK("Triceps-rek", "Armen", "2 x 20 sec per arm", "Breng je hand achter je hoofd naar je rug en duw met je andere hand zacht je elleboog naar beneden.", "triceps stretch", [P({e1:[62,4], w1:[58,22], e2:[56,10], w2:[62,6]}), P({e1:[60,2], w1:[56,22], e2:[54,8], w2:[60,4]})], false),
  RK("Schouder over je borst", "Schouders", "2 x 20 sec per arm", "Trek je gestrekte arm met je andere arm over je borst.", "cross body shoulder stretch", [P({e1:[70,28], w1:[48,28], e2:[56,34], w2:[60,28]}), P({e1:[68,28], w1:[44,28], e2:[54,34], w2:[58,28]})], false),
  RK("Polsen strekken", "Polsen en onderarmen", "2 x 15 sec per kant", "Strek je arm voor je en trek je vingers rustig naar je toe.", "wrist flexor stretch", [P({e1:[70,30], w1:[82,30], e2:[66,34], w2:[78,30]}), P({e1:[70,30], w1:[82,30], e2:[68,32], w2:[80,28]})], false),
  RK("Borst open met handen achter je rug", "Borst en schouders", "2 x 20 sec", "Vouw je handen achter je rug en til ze rustig op.", "chest opener hands behind back", [P({e1:[54,40], w1:[50,52], e2:[54,40], w2:[50,52]}), P({e1:[52,40], w1:[46,48], e2:[52,40], w2:[46,48]})], false),
  RK("Bovenrug rond maken", "Bovenrug", "2 x 20 sec", "Strek je armen voor je, vouw je handen en maak je rug rond.", "upper back stretch", [P({e1:[70,30], w1:[82,30], e2:[70,30], w2:[82,30]}), P({h:[62,16], s:[60,26], e1:[70,30], w1:[84,32], e2:[70,30], w2:[84,32]})], false),
  RK("Draai zittend op een stoel", "Rug", "2 x 20 sec per kant", "Zit rechtop op een stoel en draai je bovenlichaam naar de rugleuning.", "seated chair twist", [{h:[52,24], s:[52,34], p:[50,60], e1:[60,46], w1:[66,56], e2:[44,46], w2:[40,56], k1:[70,60], f1:[70,90], k2:[70,60], f2:[70,90]}, {h:[50,24], s:[50,34], p:[50,60], e1:[42,40], w1:[36,46], e2:[58,44], w2:[62,52], k1:[70,60], f1:[70,90], k2:[70,60], f2:[70,90]}], false),
  RK("Lat-rek aan de deurpost", "Zijkant rug", "2 x 20 sec per kant", "Pak een deurpost met beide handen en hang met je heup naar achteren opzij.", "lat stretch doorframe", [{h:[70,30], s:[66,38], p:[50,56], e1:[78,34], w1:[88,32], e2:[78,34], w2:[88,32], k1:[54,72], f1:[56,90], k2:[54,72], f2:[56,90]}, {h:[72,32], s:[68,40], p:[46,58], e1:[80,36], w1:[90,34], e2:[80,36], w2:[90,34], k1:[52,74], f1:[56,90], k2:[52,74], f2:[56,90]}], false),
  RK("Draadje door de naald", "Bovenrug en schouders", "2 x 20 sec per kant", "Op handen en knieën schuif je één arm onder je andere arm door.", "thread the needle", [QUAD, {...QUAD, h:[80,80], s:[78,74], e2:[72,84], w2:[62,88]}], false),
  RK("Hamstring-rek in de deuropening", "Achterkant been", "2 x 30 sec per been", "Lig in een deuropening met één been tegen de deurpost omhoog.", "doorway hamstring", [{...LIE, k1:[60,68], f1:[62,48]}, {...LIE, k1:[58,66], f1:[58,44]}]),
  RK("Kuit-rek met gebogen knie op de trap", "Diepe kuitspier", "2 x 30 sec per been", "Sta met je voorvoet op een tree, buig je knie en laat je hiel zakken.", "bent knee calf stretch step", [P({k1:[62,72], f1:[66,86]}), P({p:[58,54], k1:[64,74], f1:[66,88]})]),
  RK("Lies-rek liggend tegen de muur", "Lies", "1 minuut", "Lig met je billen tegen de muur en laat je benen in een V uit elkaar zakken.", "wall straddle stretch", [{...LIE, k1:[58,68], f1:[60,48], k2:[58,68], f2:[60,48]}, {...LIE, k1:[62,68], f1:[70,50], k2:[54,68], f2:[50,50]}]),
  RK("Heup-rek met voet op de bank", "Heupbuiger", "2 x 30 sec per kant", "Zet je achterste voet op de bank (achter je) en zak rustig door je voorste knie.", "rear foot elevated hip flexor stretch", [{h:[56,18], s:[56,28], p:[54,54], e1:[60,40], w1:[62,52], e2:[60,40], w2:[62,52], k1:[70,70], f1:[72,90], k2:[44,70], f2:[30,60]}, {h:[56,24], s:[56,34], p:[54,60], e1:[60,46], w1:[62,58], e2:[60,46], w2:[62,58], k1:[72,72], f1:[72,90], k2:[44,76], f2:[30,60]}]),
  RK("Billen-rek liggend met gekruiste benen", "Billen", "2 x 30 sec per kant", "Lig op je rug, kruis één been over het andere en trek ze samen naar je toe.", "supine crossed leg glute stretch", [{...LIE, k1:[62,70], f1:[70,84], k2:[62,74], f2:[54,76]}, {...LIE, k1:[56,64], f1:[64,76], k2:[56,68], f2:[50,70], e1:[44,72], w1:[54,66]}]),
  RK("Adem en ontspan na de training", "Hele lichaam", "2 minuten", "Lig op je rug, handen op je buik, en adem 4 tellen in en 6 tellen uit.", "breathing cool down", [LIE, LIE], false),
  RK("Voorkant onderbeen rekken staand", "Scheenbeen", "2 x 20 sec per been", "Zet je tenen achter je op de grond, wreef naar beneden, en duw je enkel rustig naar voren.", "standing shin stretch", [P({k1:[58,72], f1:[50,88]}), P({k1:[56,74], f1:[46,86]})]),
  RK("Heupcirkels liggend", "Heupen", "8 x per kant", "Lig op je rug en maak met één knie grote rondjes.", "supine hip circles", [{...LIE, k1:[62,66], f1:[70,76]}, {...LIE, k1:[70,72], f1:[78,82]}])
);

// ---------- Voetbaloefeningen ----------
DRILLS.push(
  D("Aannemen met je borst en volley", "Moeilijk", "8 min", "Gooi de bal op, neem aan op je borst en volley hem tegen de muur.", ["Gooi op","Borst","Volley voor hij de grond raakt"], "chest and volley", {wall:true, me:[70,50], ball:[70,32], paths:[{d:"M70 34 L70 46",t:"ball"},{d:"M66 48 L36 44",t:"ball"}]}),
  D("Draaien om een stoel met de zool", "Gemiddeld", "8 min", "Dribbel naar een stoel, draai er met je zool omheen en ga terug.", ["Dribbel naar de stoel","Zool op de bal","Draai en terug"], "sole turn around mannequin", {cones:[[100,50]], me:[60,50], ball:[68,50], paths:[{d:"M68 50 L94 50 Q104 40 110 50 Q104 62 90 56 L60 56",t:"ball"}]}),
  D("Dribbelen tussen twee pionnen heen en weer", "Makkelijk", "5 min", "Dribbel zo snel mogelijk heen en weer tussen twee pionnen op 5 meter.", ["Pionnen op 5 meter","Kap bij elke pion","30 seconden zo vaak mogelijk"], "shuttle dribble 5m", {cones:[[60,50],[100,50]], me:[64,56], ball:[70,54], paths:[{d:"M70 54 L96 54 L70 58",t:"ball"}]}),
  D("Doelpogingen na een pass van opzij", "Gemiddeld", "10 min", "Rol de bal zelf schuin voor je en schiet hem in één keer op doel.", ["Rol de bal schuin","Loop mee","Schiet in één keer"], "first time finish from side", {goal:true, me:[100,70], ball:[110,50], paths:[{d:"M100 66 L110 54",t:"run"},{d:"M112 50 L146 46",t:"ball"}]}),
  D("Een-twee en voorzet", "Gemiddeld", "10 min", "Speel een een-twee tegen de muur langs de zijkant en geef dan een voorzet.", ["Pass tegen de muur","Sprint door","Geef een voorzet"], "wall pass and cross", {wall:true, goal:true, me:[60,12], ball:[66,12], paths:[{d:"M66 14 L40 30",t:"ball"},{d:"M44 30 L100 14",t:"ball"},{d:"M104 14 Q130 30 138 50",t:"ball"}]}),
  D("Bal hooghouden en aannemen op de grond", "Gemiddeld", "8 min", "Houd 5 keer hoog en neem de bal dan doodstil aan.", ["5 keer hooghouden","Laat hem iets hoger","Neem hem dood aan"], "juggle and control", {me:[80,50], ball:[80,30]}),
  D("Twee balletjes tegelijk", "Moeilijk", "8 min", "Pass twee ballen om de beurt tegen de muur en neem ze aan.", ["Twee ballen","Pass bal 1, dan bal 2","Steeds aannemen en terug"], "two ball wall passing", {wall:true, me:[70,50], ball:[64,44], paths:[{d:"M64 44 L38 44",t:"ball"},{d:"M64 56 L38 56",t:"ball"}]}),
  D("Kappen en schieten met je zwakke voet", "Moeilijk", "10 min", "Kap naar je zwakke voet en schiet meteen.", ["Dribbel","Kap naar je zwakke voet","Schiet"], "cut and weak foot shot", {goal:true, me:[96,50], ball:[102,50], paths:[{d:"M102 50 L110 60",t:"ball"},{d:"M112 60 L146 50",t:"ball"}]}),
  D("Bal stoppen op de lijn met verschillende delen", "Makkelijk", "8 min", "Dribbel naar een lijn en stop de bal elke keer met een ander deel: zool, binnenkant, buitenkant, hak.", ["Dribbel","Stop op de lijn","Wissel het deel van je voet"], "stopping the ball drill", {me:[40,50], ball:[48,50], line:110, paths:[{d:"M48 50 L106 50",t:"ball"}]}),
  D("Snelle voeten en pass", "Gemiddeld", "8 min", "Doe 5 seconden snelle tikjes op de bal en speel hem dan tegen de muur.", ["Snelle tikjes","Pass","Neem aan en herhaal"], "fast feet and pass", {wall:true, me:[70,50], ball:[64,50], paths:[{d:"M64 50 L38 50",t:"ball"}]}),
  D("Lange bal en sprint erachteraan", "Gemiddeld", "8 min", "Schop de bal ver weg en sprint erachteraan om hem voor de lijn te pakken.", ["Schop ver","Sprint","Pak hem voor de lijn"], "kick and chase", {me:[30,50], ball:[100,40], line:130, paths:[{d:"M34 50 Q70 10 100 40",t:"ball"},{d:"M34 54 L96 46",t:"run"}]}),
  D("Kopbal op een doel na een stuit", "Gemiddeld", "8 min", "Laat de bal één keer stuiteren en kop hem dan op doel.", ["Gooi en laat stuiteren","Spring op het hoogste punt","Kop naar beneden"], "header after bounce on goal", {goal:true, me:[120,50], ball:[126,40], paths:[{d:"M126 40 L146 52",t:"ball"}]}),
  D("Wendingen met de bal in een driehoek", "Gemiddeld", "8 min", "Dribbel een driehoek en maak bij elke pion een andere wending.", ["Driehoek van pionnen","Bij elke pion een andere draai","5 rondjes"], "triangle turns", {cones:[[60,70],[100,70],[80,30]], me:[60,76], ball:[66,76], paths:[{d:"M66 76 L96 74 L82 36 L64 70",t:"ball"}]}),
  D("1 tegen 1 met een vriend en een poortje", "Gemiddeld", "10 min", "Probeer met de bal door een poortje te dribbelen terwijl je vriend verdedigt.", ["Poortje van 2 meter","Dribbel erdoor","Wissel na 5 pogingen"], "1v1 gate", {cones:[[120,40],[120,60]], me:[60,50], foe:[96,50], ball:[66,50]}),
  D("Schieten van stilliggende bal op hoeken", "Makkelijk", "10 min", "Leg de bal op 12 meter en schiet om de beurt op de linker- en rechterhoek.", ["12 meter","Links, rechts, links","Tel je raak-schoten"], "corner targets shooting", {goal:true, me:[100,50], ball:[106,50], paths:[{d:"M106 50 L146 36",t:"ball"},{d:"M106 50 L146 64",t:"ball"}]}),
  D("Achterwaarts dribbelen en draaien", "Gemiddeld", "8 min", "Dribbel achteruit met je zool, draai en dribbel vooruit.", ["Zool achteruit","Draai","Dribbel vooruit"], "backward dribble and turn", {me:[80,50], ball:[86,50], paths:[{d:"M100 50 L70 50",t:"ball"},{d:"M70 56 L120 56",t:"ball"}]}),
  D("Bal tikken met je knie", "Makkelijk", "5 min", "Houd de bal hoog met alleen je knieën. Echt je dij, niet je knie zelf!", ["Gooi op","Raak de bal met je dij","Tel je record"], "thigh juggling", {me:[80,50], ball:[80,32]}),
  D("Passen op één been staand", "Moeilijk", "8 min", "Sta op één been en pass met je andere voet tegen de muur.", ["Op één been","Pass met het andere been","30 passes, dan wissel"], "balance passing", {wall:true, me:[70,50], ball:[64,50], paths:[{d:"M64 50 L38 50",t:"ball"}]}),
  D("Sprint naar de bal na een draai", "Gemiddeld", "8 min", "Sta met je rug naar de bal, draai op een signaal en sprint ernaartoe.", ["Rug naar de bal","Draai op het signaal","Sprint en neem de bal mee"], "turn and sprint reaction", {me:[60,50], ball:[100,50], paths:[{d:"M60 50 L96 50",t:"run"}]}),
  D("Afronden van de rand van de zestien met krul", "Moeilijk", "10 min", "Schiet met een krul in de verre hoek vanaf de rand van de zestien.", ["Schuine aanloop","Raak de bal aan de zijkant","Krul in de verre hoek"], "curled finish edge of box", {goal:true, me:[100,30], ball:[106,32], paths:[{d:"M106 34 Q130 30 146 60",t:"ball"}]}),
  D("Bal afschermen tegen de muur", "Makkelijk", "5 min", "Gebruik de muur als tegenstander: houd je rug ertegen en houd de bal bij je voet.", ["Rug tegen de muur","Bal bij je verste voet","Draai weg na 10 seconden"], "shielding practice", {wall:true, me:[44,50], ball:[52,54]}),
  D("Pass en draai om een pion", "Gemiddeld", "8 min", "Pass tegen de muur, ren om een pion en neem de bal aan.", ["Pass","Ren om de pion","Neem aan"], "pass and run around cone", {wall:true, cones:[[90,50]], me:[70,50], ball:[64,50], paths:[{d:"M64 50 L38 50",t:"ball"},{d:"M74 50 Q96 40 92 60 Q86 64 70 56",t:"run"}]}),
  D("Hoge bal aannemen in de loop", "Moeilijk", "10 min", "Schop de bal hoog voor je uit en neem hem aan terwijl je loopt.", ["Schop hoog vooruit","Loop mee","Neem aan zonder te stoppen"], "high ball control running", {me:[40,60], ball:[90,30], paths:[{d:"M44 60 Q70 0 90 34",t:"ball"},{d:"M44 64 L86 56",t:"run"}]}),
  D("Kleine partij 2 tegen 2", "Gemiddeld", "15 min", "Speel met 4 vrienden een partijtje op kleine doeltjes.", ["Klein veld","Kleine doeltjes","5 minuten, dan wissel"], "2v2 small sided game", {cones:[[30,44],[30,56],[130,44],[130,56]], me:[70,40], mates:[[70,60]], foes:[[96,40],[96,60]], ball:[76,40]}),
  D("Doorsteekpass in de ruimte voor jezelf", "Gemiddeld", "8 min", "Speel de bal schuin langs een pion en sprint erachteraan.", ["Speel langs de pion","Sprint eromheen","Neem de bal mee"], "self through ball", {cones:[[80,50]], me:[60,56], ball:[66,56], paths:[{d:"M66 56 L100 66",t:"ball"},{d:"M60 50 Q80 36 100 60",t:"run"}]})
);

// ---------- Voetbal IQ ----------
IQ_LESSONS.push(
  IQ("Een pass naar de man die vooruit kijkt", "Een teamgenoot die vooruit kijkt, kan meteen verder.", "Speel liever naar iemand die open staat dan naar iemand met zijn rug naar het doel.", {me:[50,50], mates:[[80,30],[80,70]], foes:[[86,74]], ball:[56,50], paths:[{d:"M56 48 L76 34",t:"ball"}]}),
  IQ("De bal sneller laten gaan dan de tegenstander", "Een pass is altijd sneller dan een loper.", "Speel de bal rond in plaats van ermee te lopen als de tegenstander druk zet.", {mates:[[40,30],[80,70],[120,30]], me:[80,30], ball:[86,30], paths:[{d:"M86 32 L116 32",t:"ball"}]}),
  IQ("Kijk naar de positie van de keeper bij een lob", "Een keeper die ver voor zijn doel staat, kun je lobben.", "Kijk bij een doorbraak eerst waar de keeper staat.", {goal:true, me:[100,50], foes:[[124,50]], ball:[106,50], paths:[{d:"M106 50 Q126 16 146 46",t:"ball"}]}),
  IQ("Een korte uitworp van de keeper", "Een korte uitworp houdt de bal in je team.", "Bied je aan dicht bij de keeper als hij de bal heeft.", {goalLeft:true, mates:[[22,50]], me:[40,70], ball:[26,50], paths:[{d:"M28 52 L38 66",t:"ball"}]}),
  IQ("Zelf de druk ontwijken met een draai", "Als je met je rug staat en niemand dicht bij is, kun je draaien.", "Kijk over je schouder: is er ruimte, draai dan.", {me:[80,50], mates:[[40,50]], ball:[74,50], look:true, paths:[{d:"M80 50 L100 46",t:"run"}]}),
  IQ("Speel de bal niet terug als vooruit kan", "Terugspelen is veilig, maar vooruit is beter als het kan.", "Kijk altijd eerst vooruit.", {me:[60,50], mates:[[40,50],[100,40]], ball:[66,50], look:true, paths:[{d:"M66 48 L96 42",t:"ball"}]}),
  IQ("Snel naar je positie bij een ingooi tegen", "Bij een ingooi van de tegenstander moet iedereen snel op zijn plek staan.", "Zoek snel je man of je zone bij een ingooi tegen.", {goalLeft:true, me:[78,20], foes:[[84,16]], ball:[80,4]}),
  IQ("Opkomen als back met een overlap", "Een back die achter de vleugelspeler langs loopt, maakt een overtal.", "Loop als back achter je vleugelspeler langs als hij naar binnen gaat.", {me:[70,10], mates:[[100,20]], foes:[[110,16]], ball:[104,20], paths:[{d:"M70 10 L120 6",t:"run"}]}),
  IQ("Het tweede schot", "Na een geblokt schot ligt de bal vaak vrij.", "Blijf na een schot klaar staan voor de terugkaatsende bal.", {goal:true, me:[110,50], foes:[[124,50]], ball:[118,52]}),
  IQ("Druk zetten op de terugspeelbal", "Als de tegenstander terugspeelt naar zijn keeper, kun je druk zetten.", "Sprint naar de keeper als hij een terugspeelbal krijgt.", {goal:true, me:[110,50], foes:[[138,50],[124,40]], ball:[132,46], paths:[{d:"M110 50 L130 50",t:"run"}]}),
  IQ("Ruimte in het midden na een wissel van kant", "Als de tegenstander naar de zijkant schuift, ontstaat er ruimte in het midden.", "Kijk na een wissel van kant naar het midden.", {me:[60,50], mates:[[90,50]], foes:[[90,20],[96,30]], ball:[64,52], paths:[{d:"M64 52 L86 50",t:"ball"}]}),
  IQ("Nooit stilstaan na balverlies", "Na balverlies moet je meteen iets doen: druk zetten of terug.", "Kies binnen een seconde: druk of terug.", {me:[80,50], foes:[[90,50]], ball:[94,50]}),
  IQ("Leer van de beste spelers op jouw positie", "Elke positie heeft spelers waar je veel van kunt leren.", "Kijk naar een prof op jouw positie en let op zijn loopacties.", {mates:[[60,40],[80,60]], me:[100,50]}),
  IQ("Spelen met twee spitsen", "Met twee spitsen kun je elkaar helpen: één komt terug, de ander loopt diep.", "Spreek af wie van jullie terugkomt en wie diep gaat.", {goal:true, me:[110,40], mates:[[100,60]], foes:[[124,50]], paths:[{d:"M110 40 L134 34",t:"run"},{d:"M100 60 L86 60",t:"run"}]}),
  IQ("Dekking bij een korte hoekschop", "Bij een korte hoekschop moet een verdediger snel naar buiten.", "Ga meteen naar de speler die de korte bal krijgt.", {goalLeft:true, me:[30,20], foes:[[24,10],[14,4]], ball:[12,4], paths:[{d:"M30 20 L24 14",t:"run"}]}),
  IQ("De bal goed beschermen bij de hoekvlag", "Bij de hoekvlag kun je tijd winnen of een hoekschop halen.", "Scherm af en speel de bal tegen de verdediger aan als het niet anders kan.", {goal:true, me:[136,10], foes:[[130,16]], ball:[140,8]}),
  IQ("Weet waar je teamgenoten zijn", "Wie weet waar zijn teamgenoten staan, kan sneller passen.", "Kijk om je heen voordat de bal bij je komt.", {me:[80,50], mates:[[50,30],[110,30],[110,70]], look:true}),
  IQ("Een snelle omschakeling na een hoekschop tegen", "Na een weggewerkte hoekschop tegen kun je snel aanvallen.", "Sprint mee naar voren als je team de bal wint na een hoekschop tegen.", {goalLeft:true, mates:[[30,50]], me:[60,20], ball:[34,50], paths:[{d:"M60 20 L120 20",t:"run"}]}),
  IQ("Rustig blijven bij een penalty tegen", "Een penalty tegen betekent niet dat je verliest.", "Sta klaar voor de rebound en blijf positief.", {goalLeft:true, me:[44,40], foes:[[40,50]], ball:[30,50]}),
  IQ("Elke pass moet aankomen", "Een pass die niet aankomt, is balverlies.", "Kies liever een pass die zeker aankomt dan een moeilijke.", {me:[50,50], mates:[[80,50]], ball:[56,50], paths:[{d:"M56 50 L76 50",t:"ball"}]}),
  IQ("Wachten op de fout van de tegenstander", "Verdedigen is vaak geduld: wachten tot de tegenstander een fout maakt.", "Blijf dicht bij je man en wacht op een slechte aanname.", {goalLeft:true, me:[60,50], foes:[[70,50]], ball:[76,52]}),
  IQ("Spelen op de zwakke kant van het veld", "Waar minder tegenstanders staan, heb je meer tijd.", "Speel naar de kant van het veld met de meeste ruimte.", {me:[60,50], mates:[[90,90]], foes:[[80,20],[90,30],[96,40]], ball:[66,52], paths:[{d:"M66 54 L86 86",t:"ball"}]}),
  IQ("Positie bij een uittrap van de tegenstander", "Bij een lange uittrap moet je verdediging de kopbal winnen.", "Ga onder de bal staan en kop hem weg naar de zijkant.", {goalLeft:true, me:[60,50], foes:[[66,48]], ball:[64,30]}),
  IQ("Samen een aanval opbouwen", "Een goede aanval gaat met meerdere spelers samen.", "Kom dichtbij als je teamgenoot de bal heeft, en loop weer weg na de pass.", {me:[80,30], mates:[[70,50],[100,60]], ball:[74,50]}),
  IQ("De wedstrijd lezen", "Elke wedstrijd is anders. Kijk wat werkt.", "Kijk in de eerste 10 minuten: waar heeft de tegenstander moeite mee?", {mates:[[60,40],[60,60]], me:[80,50], foes:[[100,40],[100,60]]})
);

// ---------- Dagles ----------
DAILY_LESSONS.push(
  L("Je bovenlichaam gebruiken in een duel", "In een duel helpen je armen en schouders je om stevig te staan.", "Een sterk bovenlichaam zorgt dat je minder snel omvalt.", ["Zet je arm breed voor balans, zonder te duwen.","Houd je schouder laag tegen je tegenstander.","Span je buik aan."], "Oefen 10 schouderduels met een vriend en let op je armen.", "Met je handen duwen.", "Breed, laag, aanspannen."),
  L("Een ingooi met kracht", "Een lange ingooi komt uit je hele lichaam, niet alleen je armen.", "Een lange ingooi kan bijna een voorzet zijn.", ["Neem de bal achter je hoofd.","Buig je rug als een boog.","Zwaai met je hele lichaam naar voren."], "Gooi 15 ingooien en probeer steeds verder.", "Alleen met je armen gooien.", "Hele lichaam, boog."),
  L("Sprinten met je armen", "Je armen bepalen het ritme van je benen.", "Wie zijn armen goed gebruikt, sprint sneller.", ["Ellebogen in 90 graden.","Zwaai van heup naar kin.","Schouders ontspannen."], "Doe 6 sprints van 20 meter en let alleen op je armen.", "Armen voor je lichaam langs zwaaien.", "Heup naar kin."),
  L("Je romp stevig bij het schieten", "Een stevige romp geeft kracht aan je schot.", "Je hele lichaam werkt mee als je romp sterk is.", ["Span je buik aan.","Houd je borst boven de bal.","Draai je heupen mee."], "Schiet 15 keer en span bewust je buik aan.", "Slap hangen bij het schieten.", "Buik aan, borst over de bal."),
  L("Een snelle eerste stap zijwaarts", "In een wedstrijd moet je vaak zijwaarts weg.", "Een snelle zijstap wint duels.", ["Sta laag.","Duw af met je buitenste been.","Kleine snelle stapjes."], "Doe 10 zijwaartse starts van 5 meter.", "Rechtop beginnen.", "Laag en afduwen."),
  L("Aannemen met je borst bij wind", "Bij wind gaat de bal anders dan je denkt.", "Je moet extra goed kijken en je aanpassen.", ["Kijk lang naar de bal.","Wacht tot het laatste moment.","Geef mee met je borst."], "Oefen 10 borst-aannames op een winderige dag.", "Te vroeg naar de bal gaan.", "Lang kijken, laat bewegen."),
  L("Afronden bij regen", "Op een nat veld glijdt de bal sneller.", "Een lage bal is dan extra gevaarlijk.", ["Schiet laag.","Mik op de hoek.","Loop door voor de rebound."], "Schiet 10 lage ballen op een nat veld.", "Hoog schieten bij regen.", "Laag en doorlopen."),
  L("De bal laten stuiteren bij een volley", "Wie wacht tot de bal net gestuiterd is, raakt hem beter.", "Een halve volley is makkelijker te controleren.", ["Kijk waar hij stuitert.","Zet je standbeen daarnaast.","Raak hem net na de stuit."], "Schiet 15 halve volleys.", "Te vroeg schieten.", "Net na de stuit."),
  L("Spelen met je zwakke voet bij een aanname", "Een aanname met je zwakke voet maakt je minder voorspelbaar.", "De verdediger weet niet welke kant je kiest.", ["Kijk voor de aanname.","Neem aan met je zwakke voet.","Ga direct verder."], "Doe 20 aannames met alleen je zwakke voet.", "Altijd naar je sterke voet draaien.", "Zwakke voet durft ook."),
  L("Positie bij een vrije trap voor jouw team", "Bij een vrije trap moet iedereen een taak hebben.", "Zo ontstaat er een kans.", ["Zoek een vrije plek.","Loop op het moment van de trap.","Ga voor de tweede bal."], "Vraag je trainer wat jouw plek is bij vrije trappen.", "Stil blijven staan.", "Plek, loop, tweede bal."),
  L("Afronden met je wreef van dichtbij", "Van dichtbij kun je ook hard schieten.", "Een hard schot is moeilijk te houden.", ["Kijk naar de keeper.","Knie over de bal.","Schiet hard en laag."], "Schiet 15 keer van 8 meter met je wreef.", "Over het doel schieten.", "Knie over de bal."),
  L("Afschermen met je arm", "Je arm helpt je de tegenstander op afstand te houden.", "Zonder te duwen houd je ruimte.", ["Houd je arm breed.","Voel waar de tegenstander is.","Scherm de bal af met je lichaam."], "Oefen 10 keer afschermen met een vriend.", "Je arm gebruiken om te duwen.", "Arm breed, niet duwen."),
  L("Een terugleg met de binnenkant", "Een terugleg van de achterlijn is vaak de beste pass.", "De verdedigers lopen naar hun doel, de ruimte is achter hen.", ["Dribbel naar de achterlijn.","Kijk achterom.","Leg de bal met je binnenkant terug."], "Oefen 10 teruggelegde ballen.", "Altijd hoog voorzetten.", "Kijk en leg terug."),
  L("Lopen zonder bal na je pass", "Na een pass begint je volgende actie.", "Wie blijft bewegen, krijgt de bal terug.", ["Pass.","Loop naar een vrije plek.","Vraag de bal."], "Speel 15 keer pass en loop.", "Blijven staan na je pass.", "Pass, loop, vraag."),
  L("Een duel in de lucht winnen met timing", "Het gaat niet om hoe groot je bent, maar wanneer je springt.", "Goede timing wint van lengte.", ["Kijk waar de bal valt.","Spring iets eerder dan je tegenstander.","Raak de bal op het hoogste punt."], "Gooi de bal 10 keer op en spring op het juiste moment.", "Te laat springen.", "Eerst springen, hoogste punt."),
  L("Aannemen met je dij naar de grond", "Met je dij kun je een hoge bal snel naar de grond brengen.", "Daarna kun je meteen spelen.", ["Til je knie op.","Laat de bal op je dij landen.","Zak mee zodat hij voor je valt."], "Gooi 15 ballen op en neem aan met je dij.", "Je dij stijf houden.", "Meezakken."),
  L("Een strakke pass met je buitenkant", "Een buitenkant-pass is snel en verrassend.", "Je hoeft je lichaam niet te draaien.", ["Enkel naar binnen.","Raak de bal met je buitenkant.","Volg door."], "Speel 20 buitenkant-passes tegen de muur.", "Je enkel slap houden.", "Enkel strak."),
  L("Een penalty met rust", "Bij een penalty win je met rust en een plan.", "Twijfel is je grootste tegenstander.", ["Kies vooraf je hoek.","Neem je vaste aanloop.","Schiet zonder te twijfelen."], "Neem 10 penalty's met een vaste routine.", "Van hoek veranderen in je aanloop.", "Kiezen en vertrouwen."),
  L("Kijken naar de verdediger bij een dribbel", "Je ogen vertellen je wanneer je moet versnellen.", "Als de verdediger stilstaat of naar één kant gaat, is het je kans.", ["Kijk naar zijn voeten.","Wacht tot hij op één been staat.","Versnel dan."], "Oefen 10 dribbels tegen een vriend en kijk naar zijn voeten.", "Alleen naar de bal kijken.", "Kijk naar zijn voeten."),
  L("Je bovenlichaam laag bij een sprint", "Bij de start van een sprint leun je iets naar voren.", "Zo duw je jezelf vooruit.", ["Leun licht naar voren.","Duw hard af.","Kom langzaam rechtop."], "Doe 8 sprintstarts van 10 meter.", "Rechtop beginnen.", "Naar voren leunen."),
  L("Hooghouden met beide voeten en je hoofd", "Hooghouden met verschillende delen traint je aanname.", "In een wedstrijd komt de bal op allerlei hoogtes.", ["Begin met je voet.","Ga naar je dij.","Probeer je hoofd."], "Probeer voet-dij-hoofd-voet zonder te laten vallen.", "Altijd alleen je voet gebruiken.", "Elk deel van je lichaam."),
  L("Een voorzet op de tweede paal", "Een voorzet op de tweede paal is lastig voor de keeper.", "Er staat vaak een aanvaller vrij.", ["Kijk waar je aanvaller loopt.","Raak de bal met je wreef.","Speel hem over de keeper heen."], "Geef 15 voorzetten naar de tweede paal.", "Te zacht, de keeper pakt hem.", "Over de keeper, tweede paal."),
  L("Spelen met je rug naar een verdediger", "Met je rug naar een verdediger moet je slim zijn.", "Je kunt kaatsen, draaien of afschermen.", ["Voel waar hij staat.","Kies: kaats, draai of scherm af.","Doe het snel."], "Oefen 10 keer met iemand in je rug.", "Altijd proberen te draaien.", "Kies slim."),
  L("Een korte pass in één keer onder druk", "Onder druk is één keer raken vaak het slimst.", "De tegenstander heeft geen tijd om in te grijpen.", ["Kijk voor de bal komt.","Weet waar je heen speelt.","Speel in één keer."], "Speel 30 passes in één keer tegen de muur.", "Eerst aannemen onder druk.", "Kijk, en in één keer."),
  L("Op je best aan het eind van de wedstrijd", "Aan het eind is iedereen moe. Wie fit is, maakt het verschil.", "Veel goals vallen in de laatste minuten.", ["Verdeel je energie.","Drink in de rust.","Blijf scherp tot het fluitsignaal."], "Let in je volgende wedstrijd op je laatste 10 minuten.", "Te vroeg alles geven.", "Scherp tot het eind.")
);

// ---------- Herstel-tips ----------
RECOVERY_TIPS.push(
  RT("Rek ook je bovenlichaam", "Na krachttraining voor je armen en schouders zijn die ook stijf.", "Doe de triceps-rek en de schouder-over-je-borst."),
  RT("Schouders los na ingooien", "Veel ingooien maakt je schouders moe.", "Draai 10 keer je schouders naar achteren."),
  RT("Polsen los na push-ups", "Push-ups belasten je polsen.", "Draai rondjes met je polsen na het opdrukken."),
  RT("Nek los na koppen", "Na veel kopballen kan je nek stijf zijn.", "Leg rustig je oor naar je schouder, beide kanten."),
  RT("Rug ontspannen na buikoefeningen", "Na buikoefeningen is het fijn je rug te strekken.", "Lig 30 seconden op je buik of doe de cobra."),
  RT("Herstel van je handen bij keepen", "Keepen is zwaar voor je vingers.", "Strek je vingers en maak vuisten, 10 keer."),
  RT("Na een week veel trainen: een rustige zondag", "Je lichaam heeft rust nodig.", "Doe op zondag alleen wandelen en rekken."),
  RT("Een avond zonder schermen helpt herstel", "Zonder schermen slaap je dieper.", "Leg na een zware dag je telefoon om 20:00 weg."),
  RT("Herstel met een massage", "Een korte massage maakt spieren losser.", "Wrijf 2 minuten over je kuiten en bovenbenen."),
  RT("Niet te lang zitten na de training", "Lang zitten maakt je benen stijf.", "Loop na de training eerst even rond."),
  RT("Benen in een warm bad", "Warm water ontspant.", "Neem een warm bad na een koude, natte training."),
  RT("Bovenrug ontspannen na school", "Lang zitten maakt je bovenrug stijf.", "Doe 'draadje door de naald' na school."),
  RT("Groeipijn in je hielen", "Bij groeien kunnen je hielen pijn doen.", "Rek je kuiten, neem rust en vertel het je ouders."),
  RT("Rustig opbouwen na de vakantie", "Na een vakantie is je lichaam minder gewend.", "Begin de eerste week rustig met trainen."),
  RT("Drink extra na kracht in de zon", "Ook bij kracht in de zon zweet je veel.", "Neem een extra bidon mee bij warm weer."),
  RT("Herstel van blaren", "Blaren kunnen je trainen lastig maken.", "Doe er een pleister op en zorg voor goede sokken."),
  RT("Spierpijn in je armen", "Na veel push-ups kun je spierpijn in je armen hebben.", "Beweeg rustig en rek je armen."),
  RT("Spierpijn in je buik", "Na veel buikoefeningen kan lachen pijn doen!", "Doe rustige ademhaling en wacht een dag met buiktraining."),
  RT("Herstel na een lange fietstocht", "Lang fietsen maakt je bovenbenen en heupen strak.", "Rek je heupbuigers en bovenbenen."),
  RT("Een hersteldag is ook een groeidag", "Op een rustdag worden je spieren sterker.", "Geniet van je rustdag zonder schuldgevoel.")
);

// ---------- Product van de dag ----------
PRODUCTS.push(
  PR("Voetbal","Push-up handvatten","Handvatten om op te steunen bij push-ups.","Fijner voor je polsen.","Gebruik ze bij elke push-up training.","push up handvatten","bol"),
  PR("Voetbal","Weerstandsbanden in 3 sterktes","Elastieken in verschillende zwaartes.","Voor kracht in je armen, benen en heupen.","Begin met de lichtste.","weerstandsbanden set","bol"),
  PR("Voetbal","Klein kettlebell (4 kg)","Een licht gewicht met handvat.","Voor kracht in je benen en romp.","Alleen met hulp van een volwassene leren gebruiken.","kettlebell 4 kg","bol"),
  PR("Voetbal","Medicijnbal 2 kg","Een zachte, zware bal.","Voor ingooi-kracht en buikoefeningen.","Gooi hem tegen de muur.","medicijnbal 2 kg","bol"),
  PR("Voetbal","Agility-ladder van 4 meter","Een ladder voor snelle voeten.","Voor je dagelijkse voeten-training.","Doe 3 verschillende loopjes.","agility ladder","bol"),
  PR("Voetbal","Rebounder-net","Een net dat de bal terugkaatst.","Je kunt alleen oefenen met passen en aannemen.","Zet hem in de tuin.","voetbal rebounder net","bol"),
  PR("Voetbal","Hoepel voor reactie","Een hoepel om in en uit te springen.","Voor snelle voeten en sprongen.","Spring in en uit op één been.","agility hoepels","bol"),
  PR("Voetbal","Sportmat","Een dikke mat voor oefeningen op de grond.","Fijner voor je rug bij buikoefeningen.","Rol hem uit bij je krachttraining.","sportmat dik","bol"),
  PR("Herstel","Massageroller voor je benen","Een stok met rollers.","Voor je kuiten en bovenbenen.","Rol 1 minuut per spier.","massagestick","bol"),
  PR("Herstel","Warmtepleisters","Pleisters die warm worden.","Fijn bij stijve spieren.","Gebruik ze niet op een verse blessure.","warmtepleister","bol"),
  PR("Gezond","Volkoren pasta-schelpjes","Pasta van volkoren meel.","Energie voor de training.","Eet het met groente en kip.","volkoren pasta","ah"),
  PR("Gezond","Kipfilet-reepjes","Kip in reepjes.","Veel eiwit voor herstel.","Bak ze kort met groente.","kipreepjes","ah"),
  PR("Gezond","Hüttenkäse met bieslook","Korrelige kaas.","Eiwit voor na de krachttraining.","Eet het op een cracker.","huttenkase bieslook","ah"),
  PR("Gezond","Magere kwark naturel","Kwark zonder suiker.","Veel eiwit voor je spieren.","Doe er fruit door.","magere kwark","ah"),
  PR("Gezond","Eiwitrijke yoghurt","Yoghurt met extra eiwit.","Fijn na de training.","Eet het met havermout.","proteine yoghurt","ah"),
  PR("Gezond","Gekookte eieren","Al gekookte eieren.","Makkelijk eiwit.","Neem er een mee naar school.","gekookte eieren","ah"),
  PR("Gezond","Volkoren brood met zaden","Brood met pitjes.","Vezels en goede vetten.","Beleg met kaas of ei.","zadenbrood","ah"),
  PR("Gezond","Pindakaas zonder zout","Pindakaas zonder toegevoegd zout.","Energie en eiwit.","Op een cracker met banaan.","pindakaas zonder zout","ah"),
  PR("Gezond","Linzen uit blik","Linzen die al gekookt zijn.","Eiwit en vezels.","Doe ze in je saus.","linzen blik","ah"),
  PR("Gezond","Zalm uit blik","Zalm in blik.","Goede vetten en eiwit.","Op een boterham of in een salade.","zalm blik","ah"),
  PR("Gezond","Bananen (tros)","Een tros bananen.","Snelle energie voor de training.","Neem er altijd een mee.","bananen","ah"),
  PR("Gezond","Havermout snelkook","Havermout die snel klaar is.","Een goed ontbijt.","Met melk en fruit.","havermout snelkook","ah"),
  PR("Gezond","Bloemkool en broccoli mix","Groente uit de vriezer.","Snel veel groente.","Stoom ze bij het avondeten.","broccoli bloemkool diepvries","ah"),
  PR("Gezond","Zilvervliesrijst in kookzakjes","Rijst in zakjes, makkelijk te koken.","Energie voor de avondtraining.","Eet het met kip en groente.","zilvervliesrijst kookzakjes","ah"),
  PR("Gezond","Volkoren mini-wraps","Kleine wraps van volkoren meel.","Makkelijke lunch.","Vul met kip en sla.","volkoren wraps","ah")
);

// ---------- Posters ----------
POSTERS.push(
  ...[["bolt","Armen","Sterk aan de bal."],["mountain","Schouders","Voor de lange ingooi."],["stairs","Push-up","Elke dag één meer."],["road","Rug","Rechte houding."],["trophy","Borst","Stevig in het duel."],["sun","Bovenlichaam","Ook belangrijk."],["ball","Ingooi","Uit je hele lichaam."],["goal","Afschermen","Met je arm breed."],
    ["bolt","Midden","Je kracht-centrum."],["mountain","Onder","Je motor."],["stairs","Boven","Je schild."],["road","Balans","Tussen alles."],["trophy","Compleet","Sterk van top tot teen."],["sun","Elke spier","Telt mee."],["ball","Stevig","Aan de bal."],["goal","Vrij","Door kracht."],
    ["bolt","Panna","Durf het."],["mountain","Zoolrol","Rustig, dan snel."],["stairs","Stepover","Snel en laag."],["road","Draai","Weg van druk."],["trophy","Trucje","Onder druk gebruiken."],["sun","Creatief","Elke dag."],["ball","Magie","Komt van oefenen."],["goal","Scoren","Met een koel hoofd."],
    ["bolt","Mindset","Ik kan dit."],["mountain","Doorzetten","Is een keuze."],["stairs","Elke dag","Een stap."],["road","Pad","Jij kiest."],["trophy","Trots","Op elke dag."],["sun","Nieuw","Begin opnieuw."],["ball","Liefde","Voor het spel."],["goal","Droom","Werk ervoor."],
    ["bolt","Stay hard","Nu meer dan ooit."],["mountain","Top","Nog niet bereikt."],["stairs","Groei","Elke week."],["road","Samen","Met je team."],["trophy","Respect","Voor jezelf."],["sun","Licht","Na elke training."],["ball","Altijd","De bal bij je."],["goal","Morgen","Weer beter."]
  ].map(([art, big, small]) => ({art, big, small}))
);

// ---------- Motivatie ----------
MOTIVATION.push(
  "Sterke armen, sterk aan de bal.", "Je hele lichaam speelt mee.", "Kracht van top tot teen.",
  "Een push-up is een stap naar een sterker jij.", "Je bovenlichaam beschermt de bal.", "Sterk midden, sterk spel.",
  "Een panna begint met durf.", "Wie veel probeert, leert veel trucjes.", "Een trucje in de wedstrijd is goud waard.",
  "Elke herhaling telt, ook de moeilijke.", "Je wordt sterk door wat je doet als het moeilijk is.", "Doorzetten is een gewoonte.",
  "Vandaag is goed genoeg om te beginnen.", "Beginnen is al de helft.", "Begin, dan wordt het makkelijker.",
  "Kleine overwinningen tellen ook.", "Je bent op je best als je je best doet.", "Trots zijn op inzet is altijd goed.",
  "Je bent een harde werker.", "Iedere dag is een kans om te groeien.", "Voetbal is plezier, ook als het moeilijk is.",
  "Train je lichaam, train je hoofd.", "Sterk zijn is ook aardig zijn.", "Een goed team helpt elkaar sterker worden.",
  "Wees de speler die altijd klaarstaat.", "Elke training brengt je verder.", "De weg naar boven begint vandaag.",
  "Je bent pas klaar als je trots bent.", "Laat zien wat je kunt.", "Je bent meer dan je denkt.",
  "Werk hard, blijf nederig.", "Ook kampioenen beginnen bij nul.", "Het verschil maak je op de training.",
  "Sterker worden doe je stapje voor stapje.", "Jouw inzet is jouw kracht.", "Groot worden kost tijd. Geef het tijd.",
  "Je lichaam wordt sterker als je rust.", "Herstel is ook trainen.", "Wie goed slaapt, speelt goed.",
  "Je kunt alles leren met genoeg oefening.", "Een fout is een stap naar beter.", "Geef niet op na een slechte training.",
  "Je bent niet alleen. Je team is er.", "Speel voor elkaar.", "Wees trots op je team.",
  "Elke bal is een kans om te leren.", "Geniet van elke training.", "Je wordt elke dag een beetje beter.",
  "Je doet het geweldig. Ga door.", "Stay hard, en heb plezier.", "Je tijd komt.",
  "Werk aan je zwakke punten, vier je sterke.", "Durf te dromen.", "Laat je niet stoppen door één slechte dag.",
  "Elke spier die je traint, helpt je team.", "Sterk lichaam, slim hoofd, groot hart.", "Je beste voetbal komt nog.",
  "Doe het nu.", "Elke dag beter.", "Jij kan dit."
);
