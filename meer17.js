// Stay Hard – zeventiende uitbreiding: hersteltips, rekken, voetbaloefeningen en wedstrijden om te analyseren.

// ---------- Hersteltips ----------
RECOVERY_TIPS.push(
  RT("Koude voeten, warme benen", "Na een wedstrijd kun je je benen kort afspoelen met koud water.", "Spoel je benen 1 minuut koud af onder de douche, daarna gewoon warm."),
  RT("Eten binnen een uur", "Na het sporten nemen je spieren voeding het best op.", "Eet binnen een uur iets met eiwitten en koolhydraten, zoals kwark met fruit."),
  RT("Chocolademelk als hersteldrank", "Melk met een beetje cacao bevat eiwitten en koolhydraten.", "Drink een glas na een zware training."),
  RT("Benen omhoog", "Met je benen omhoog stroomt het bloed makkelijker terug.", "Lig 5 minuten met je benen tegen de muur."),
  RT("Rustig fietsen de dag erna", "Licht bewegen helpt je herstel beter dan stilzitten.", "Fiets 15 tot 20 minuten heel rustig."),
  RT("Slaap is je beste herstel", "Tijdens het slapen herstellen je spieren het meest.", "Ga na een wedstrijd extra vroeg naar bed."),
  RT("Warm bad of douche", "Warmte ontspant stijve spieren.", "Neem op een rustdag een warme douche of een bad."),
  RT("Rol je kuiten los", "Een foamroller maakt strakke kuiten losser.", "Rol 1 minuut per kuit, rustig heen en weer."),
  RT("Masseer je voeten", "Je voeten werken hard in voetbalschoenen.", "Rol je voetzool 1 minuut over een tennisbal."),
  RT("Drink genoeg de dag na een wedstrijd", "Je lichaam is na een wedstrijd nog vocht kwijt.", "Drink de hele dag door water, ook als je geen dorst hebt."),
  RT("Groente en fruit voor herstel", "Vitamines helpen je lichaam herstellen.", "Eet vandaag minstens 2 stuks fruit en een flinke portie groente."),
  RT("Rustig ademen na het sporten", "Rustig ademen helpt je lichaam van 'aan' naar 'uit'.", "Lig 2 minuten stil en adem 4 tellen in en 6 tellen uit."),
  RT("Losse kleren na de wedstrijd", "Strakke kleren na het sporten zitten niet lekker en houden warmte vast.", "Trek na het douchen losse, warme kleren aan."),
  RT("Een rustdag is een trainingsdag", "Op een rustdag word je sterker.", "Doe op je rustdag alleen licht bewegen en rekken."),
  RT("Luister naar spierpijn", "Een beetje spierpijn is normaal, veel spierpijn betekent dat je rust nodig hebt.", "Doe rustiger aan als je veel spierpijn hebt."),
  RT("Niet te laat eten na een avondtraining", "Laat en zwaar eten kan je slaap verstoren.", "Eet na een late training iets lichts, zoals yoghurt of een boterham."),
  RT("Herstel in de auto", "Na een uitwedstrijd zit je vaak lang stil.", "Beweeg je voeten en tenen tijdens de rit en loop even als je aankomt."),
  RT("Eiwitten voor het slapen", "Een beetje eiwit voor het slapen helpt je spieren 's nachts.", "Eet een bakje kwark of drink een glas melk voor je gaat slapen."),
  RT("Zwemmen als herstel", "In het water beweeg je zonder dat je gewrichten zwaar belast worden.", "Zwem op een rustdag 15 minuten rustig."),
  RT("Een rustige wandeling", "Wandelen houdt je bloed stromen zonder je spieren te belasten.", "Wandel de dag na een wedstrijd 20 minuten.")
);

// ---------- Rekoefeningen (houding van een vergelijkbare rekoefening) ----------
(() => {
  const pz = t => { const x = RECOVERY.find(k => k.title === t); return x ? x.poses : null; };
  const have = new Set(RECOVERY.map(x => x.title));
  const add = (title, target, reps, text, yt, like, leg = true) => { const poses = pz(like); if (poses && !have.has(title)) { have.add(title); RECOVERY.push(RK(title, target, reps, text, yt, poses, leg)); } };
  add("Kuit rekken met gebogen knie", "Diepe kuitspier", "30 sec per been", "Zoals kuiten rekken, maar buig je achterste knie een beetje. Zo rek je de diepe kuitspier.", "soleus stretch", "Kuiten rekken");
  add("Staande hamstring met hak op een bank", "Achterkant been", "30 sec per been", "Leg je hak op een bank, houd je rug recht en buig rustig voorover.", "standing hamstring stretch bench", "Achterkant been rekken");
  add("Bovenbeen rekken met hand aan de muur", "Voorkant bovenbeen", "30 sec per been", "Steun met één hand tegen de muur en trek je voet naar je billen.", "standing quad stretch wall", "Bovenbeen rekken");
  add("Lage uitval met draai", "Heupen en rug", "5 per kant", "Zit in een lage uitval en draai je romp naar je voorste been.", "low lunge twist", "Uitvalspas met arm omhoog");
  add("Liggende hamstring met handdoek", "Achterkant been", "30 sec per been", "Lig op je rug, leg een handdoek om je voet en trek je gestrekte been rustig omhoog.", "hamstring towel stretch", "Hamstring met band");
  add("Zittende lies-rek met rechte rug", "Lies", "40 seconden", "Zit met je voetzolen tegen elkaar, houd je rug recht en buig iets voorover.", "seated butterfly forward", "Vlinder");
  add("Diepe uitval met knie op de grond", "Heupbuiger", "40 sec per kant", "Zet je achterste knie op een kussen en schuif je heup naar voren.", "kneeling lunge stretch", "Knielende heupbuiger-rek");
  add("Zijwaarts hangen op een bank", "Zijkant romp", "30 sec per kant", "Zit op een bank en buig met je arm boven je hoofd opzij.", "seated side bend", "Zijkant rekken", false);
  add("Duif-houding op een bank", "Billen en heup", "40 sec per kant", "Leg je onderbeen dwars op een bank en buig rustig voorover.", "pigeon stretch bench", "Duif-houding");
  add("Nek zijwaarts rekken", "Nek", "20 sec per kant", "Buig je hoofd rustig naar je schouder en laat je andere schouder zakken.", "neck side stretch", "Nek ontspannen", false);
  add("Wreef rekken in kniezit", "Scheenbeen en wreef", "30 seconden", "Zit op je knieën met je wreef plat op de grond en leun een beetje achterover.", "kneeling shin stretch", "Scheenbeen-rek");
  add("Hamstring-zwaaien staand", "Achterkant been", "10 per been", "Zwaai je gestrekte been rustig naar voren en achteren. Goed als warming-up.", "leg swings", "Hamstring-vegen");
})();

// ---------- Meer strekroutines ----------
STREK_ROUTINES.push(
  SR("Diepe kuiten en achillespees", "Als je kuiten vast voelen", "7 min", [["Kuiten rekken","30 sec per been"],["Kuit rekken met gebogen knie","30 sec per been"],["Achillespees-rek","30 sec per been"],["Neerwaartse hond","30 seconden"]], "Twee kuitspieren rekken, dan voel je het verschil."),
  SR("Snelle 5 minuten na school", "Als je weinig tijd hebt", "5 min", [["Bovenbeen rekken met hand aan de muur","30 sec per been"],["Staande hamstring met hak op een bank","30 sec per been"],["Lage uitval met draai","5 per kant"]], "Even snel losmaken na een dag zitten."),
  SR("Benen helemaal los na een toernooi", "Na een lange dag voetbal", "15 min", [["Rustig uitlopen","3 minuten"],["Liggende hamstring met handdoek","40 sec per been"],["Diepe uitval met knie op de grond","40 sec per kant"],["Duif-houding op een bank","40 sec per kant"],["Zittende lies-rek met rechte rug","40 seconden"],["Benen tegen de muur","3 minuten"]], "Na veel wedstrijden op één dag heeft je lichaam extra tijd nodig."),
  SR("Warming-up bewegend rekken", "Voor training of wedstrijd", "6 min", [["Hamstring-zwaaien staand","10 per been"],["Heupcirkels","10 per kant"],["Lage uitval met draai","5 per kant"],["Kniecirkels rustig","10 keer"],["Enkels rollen","10 per kant"]], "Bewegend rekken maakt je soepel zonder dat je spieren 'slap' worden voor het sprinten.")
);

// ---------- Voetbaloefeningen ----------
DRILLS.push(
  D("Muurpass met een draai om een pion", "Gemiddeld", "8 min", "Pass tegen de muur, loop om een pion en neem de bal weer aan.", ["Pion 2 meter achter je","Pass, draai om de pion","Neem aan en pass weer"], "wall pass turn cone", {wall:true, me:[70,50], cones:[[50,50]], ball:[80,50], paths:[{d:"M80 50 L140 50",t:"ball"},{d:"M66 54 Q44 64 50 44 Q60 36 70 46",t:"run"}]}),
  D("Bal door een poortje schieten", "Makkelijk", "8 min", "Schiet de bal door een klein poortje van twee pionnen.", ["Poortje van 1 meter op 8 meter","Schiet met je binnenkant","Wissel van voet"], "passing through gate", {cones:[[120,44],[120,56]], me:[50,50], ball:[58,50], paths:[{d:"M58 50 L130 50",t:"ball"}]}),
  D("Dribbel en kap tegen de klok", "Gemiddeld", "8 min", "Dribbel naar een pion, kap terug en sprint naar de start. Neem je tijd op.", ["Pion op 10 meter","Kap om de pion","Sprint terug, 5 keer"], "dribble cut speed test", {cones:[[120,50]], me:[30,50], ball:[38,50], paths:[{d:"M38 50 L114 50 L114 58 L38 58",t:"ball"}]}),
  D("Hoge bal doodleggen", "Moeilijk", "8 min", "Schop de bal hoog op en leg hem in één keer dood met je voet.", ["Schop de bal recht omhoog","Ga eronder staan","Leg hem dood met je wreef of binnenkant"], "kill the ball control", {me:[80,60], ball:[80,20], paths:[{d:"M80 20 L80 54",t:"ball"}]}),
  D("Koppen naar een vak", "Gemiddeld", "8 min", "Kop de bal naar een vak dat je teamgenoot aanwijst.", ["Teamgenoot gooit","Hij roept 'links' of 'rechts'","Kop naar die kant"], "directional heading", {mates:[[40,50]], me:[100,50], ball:[96,40], cones:[[60,20],[60,80]], paths:[{d:"M96 40 L64 22",t:"ball"}]}),
  D("Twee-tegen-twee met kleine doeltjes", "Gemiddeld", "15 min", "Speel twee-tegen-twee op kleine doeltjes zonder keeper.", ["Veldje van 15 bij 20 meter","Kleine doeltjes van pionnen","Wie scoort het eerst 5?"], "2v2 small sided", {me:[60,40], mates:[[60,70]], foes:[[100,40],[100,65]], ball:[66,40], cones:[[20,44],[20,56],[140,44],[140,56]]}),
  D("Sprint achter de bal aan", "Zwaar", "8 min", "Trap de bal ver vooruit en sprint erachteraan voor hij stilligt.", ["Trap de bal 15 meter vooruit","Sprint erachteraan","Neem hem mee en ga terug"], "sprint after ball", {me:[30,50], ball:[38,50], paths:[{d:"M38 50 L120 50",t:"ball"},{d:"M30 56 L118 56",t:"run"}]}),
  D("Jongleren met wissel", "Gemiddeld", "5 min", "Houd hoog en wissel steeds: voet, dij, voet, hoofd.", ["Voet","Dij","Voet","Hoofd als het lukt"], "juggling combinations", {me:[70,55], ball:[70,30], paths:[{d:"M70 30 L70 50",t:"ball"}]}),
  D("Aanname na een lange bal van de muur", "Moeilijk", "10 min", "Trap de bal hoog tegen een hoge muur en neem de terugkomende bal aan.", ["Hoog tegen de muur","Zoek de plek waar hij valt","Neem aan met je voet of dij"], "high ball wall control", {wall:true, me:[60,60], ball:[70,56], paths:[{d:"M70 56 Q110 0 142 20",t:"ball"},{d:"M142 30 Q100 20 70 56",t:"ball"}]}),
  D("Langs de zijlijn dribbelen en voorzet", "Gemiddeld", "10 min", "Dribbel langs de zijlijn en geef aan het eind een voorzet op een vak.", ["Dribbel 25 meter langs de lijn","Kijk op","Voorzet op een vak bij de penaltystip"], "wing dribble cross", {goal:true, me:[30,15], ball:[38,15], paths:[{d:"M38 15 L110 15",t:"ball"},{d:"M110 18 Q126 30 130 50",t:"ball"}]})
);

// ---------- Wedstrijden om te analyseren ----------
WEDSTRIJDEN.push(
  WA("Druk zetten als team", "Liverpool – Manchester City, 2018", null, "Liverpool zette met het hele team druk en dwong City tot fouten.", ["Wie zet als eerste druk?","Hoe snel zijn de andere spelers erbij?","Wat gebeurt er direct na balwinst?"], "Druk zetten werkt alleen als iedereen samen gaat.", "Ga op de training samen met twee teamgenoten druk zetten.", "liverpool pressing manchester city 2018"),
  WA("Een keeper die meevoetbalt", "Bayern München – Juventus, 2016", null, "Bayern bouwde rustig op vanaf de keeper, die steeds meedeed als extra speler.", ["Hoe vaak krijgt de keeper de bal?","Waar staan de verdedigers bij de opbouw?","Hoe ontsnapt Bayern aan druk?"], "Een keeper die meevoetbalt, geeft het team een extra man.", "Speel als keeper ook mee met je voeten.", "neuer sweeper keeper analysis"),
  WA("Een perfecte vrije trap", "Brazilië – Frankrijk, 1997", null, "Roberto Carlos schoot een vrije trap met een enorme curve in het doel.", ["Waar staat zijn standbeen?","Met welk deel van de voet raakt hij de bal?","Hoe gaat de bal om de muur?"], "Met de buitenkant van je voet kun je de bal laten afbuigen.", "Oefen vrije trappen met je binnen- en buitenkant.", "roberto carlos free kick analysis"),
  WA("Snel combineren", "Arsenal – Norwich, 2013", null, "Arsenal speelde een aanval met allemaal één keer raken voor een prachtige goal.", ["Tel de aanrakingen","Hoe dicht staan de spelers bij elkaar?","Wie loopt er in de diepte?"], "Snel samenspel in één keer is moeilijk te verdedigen.", "Speel een rondo met maximaal één keer raken.", "wilshere goal norwich analysis"),
  WA("Een comeback in de rust", "Nederland – Tsjechië, EK 2004", null, "Na een moeilijke eerste helft veranderde het spel in de tweede helft helemaal.", ["Wat veranderde er na de rust?","Hoe reageren de spelers op tegenslag?","Wie neemt de leiding?"], "Na een slechte eerste helft kun je altijd nog terugkomen.", "Bedenk in de rust één ding dat je beter doet.", "nederland tsjechie 2004"),
  WA("Een spits die alles kan", "Zweden – Engeland, 2012", null, "Zlatan Ibrahimović maakte goals met kracht, techniek én fantasie, waaronder een omhaal van grote afstand.", ["Hoe gebruikt hij zijn lichaam?","Hoe neemt hij de bal aan?","Wat doet hij als de bal in de lucht is?"], "Een spits met lef en techniek kan op elk moment scoren.", "Oefen aannames uit de lucht en schieten na een aanname.", "ibrahimovic bicycle kick england analysis"),
  WA("Verdedigen met tien man", "Inter – Barcelona, 2010", null, "Inter verdedigde lang met tien man heel compact en hield Barcelona van scoren af.", ["Hoe ver staan de linies uit elkaar?","Hoe schuiven ze mee?","Wie zet druk en wie blijft staan?"], "Samen compact verdedigen is moeilijk te breken.", "Oefen met je team het samen opschuiven.", "inter barcelona 2010 defending analysis"),
  WA("Het belang van de tweede bal", "Atlético Madrid – Real Madrid, 2014", null, "Na kopduels was het vaak de tweede bal die bepaalde wie er gevaarlijk werd.", ["Waar valt de bal na een kopduel?","Wie is er het eerst bij?","Hoe staan de middenvelders?"], "Wie de tweede bal wint, wint vaak het duel om het middenveld.", "Blijf na elk kopduel scherp voor de tweede bal.", "atletico second balls analysis")
);

// ---------- Opruimen ----------
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = x[key] || x.title; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [RECOVERY_TIPS, RECOVERY, STREK_ROUTINES, DRILLS, WEDSTRIJDEN].forEach(a => dedupe(a));
})();
