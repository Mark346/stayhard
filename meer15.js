// Stay Hard – vijftiende uitbreiding: meer van alles (niet de 30 dagen, de taken-ideeën of de records).

// ---------- Voetbaloefeningen ----------
DRILLS.push(
  D("Muurpass, aanname en schot", "Gemiddeld", "10 min", "Speel tegen de muur, neem aan en schiet op een doeltje van pionnen.", ["Pass tegen de muur","Neem aan in de richting van het doel","Schiet binnen 2 aanrakingen"], "wall pass and shoot", {wall:true, me:[60,60], ball:[70,60], cones:[[20,30],[20,50]], paths:[{d:"M70 58 L140 50",t:"ball"},{d:"M140 52 L76 64",t:"ball"},{d:"M64 62 L24 40",t:"ball"}]}),
  D("Dribbelen met alleen je zool", "Makkelijk", "5 min", "Beweeg de bal alleen met je zool: vooruit, achteruit en opzij.", ["Zool bovenop de bal","Rol vooruit en terug","Rol opzij en wissel van voet"], "sole rolls drill", {me:[70,50], ball:[78,50], paths:[{d:"M78 50 L96 50 L96 38 L78 38",t:"ball"}]}),
  D("Hooghouden met een stuit", "Makkelijk", "5 min", "Laat de bal tussen elke aanraking één keer stuiten. Ideaal om te beginnen.", ["Laat de bal stuiten","Raak hem omhoog","Wissel van voet"], "juggling with bounce", {me:[70,55], ball:[70,40], paths:[{d:"M70 40 L70 52",t:"ball"}]}),
  D("Snelle voeten door een ladder", "Gemiddeld", "8 min", "Snel door een (getekende) ladder en daarna een pass.", ["Twee voeten in elk vak","Zo snel mogelijk","Aan het eind een pass tegen de muur"], "ladder footwork pass", {ladder:true, me:[24,50], paths:[{d:"M30 50 L138 50",t:"run"}]}),
  D("Bal aannemen uit de lucht met je wreef", "Moeilijk", "8 min", "Gooi de bal hoog en vang hem op je wreef.", ["Gooi hoog","Laat hem zacht op je wreef landen","Trek je voet mee naar beneden"], "instep control drill", {me:[70,60], ball:[70,30], paths:[{d:"M70 30 L70 54",t:"ball"}]}),
  D("Draaien met de bal achter je standbeen", "Moeilijk", "8 min", "De Cruijff-draai: bal achter je standbeen door en weg.", ["Doe alsof je schiet","Tik de bal achter je standbeen","Draai weg en versnel"], "cruyff turn drill", {cones:[[100,50]], me:[70,50], ball:[78,50], paths:[{d:"M78 50 L92 50 L76 40 L44 40",t:"ball"}]}),
  D("Eén-tegen-één verdedigen", "Gemiddeld", "10 min", "Oefen verdedigen: laat de aanvaller niet langs.", ["Sta laag en schuin","Stuur hem naar de zijkant","Ga pas in als hij de bal te ver legt"], "1v1 defending drill", {me:[90,50], foe:[60,50], ball:[68,50]}),
  D("Voorzet en afronden met z'n drieën", "Gemiddeld", "12 min", "Eén geeft de voorzet, twee lopen in naar eerste en tweede paal.", ["Vleugelspeler dribbelt op","Spits naar eerste paal, middenvelder naar tweede","Rond in één keer af"], "crossing and finishing drill", {goal:true, mates:[[60,15],[90,70]], me:[100,45], ball:[66,18], paths:[{d:"M66 18 Q110 20 130 44",t:"ball"},{d:"M100 45 L130 40",t:"run"},{d:"M90 70 L130 62",t:"run"}]}),
  D("Hoge pressing met z'n tweeën", "Zwaar", "10 min", "Met twee spelers druk zetten op twee verdedigers.", ["Eén zet druk op de bal","De ander sluit de pass af","Wissel van rol bij elke pass"], "pressing in pairs", {me:[80,40], mates:[[80,65]], foes:[[110,35],[110,70]], ball:[104,35], paths:[{d:"M84 40 L102 36",t:"run"}]}),
  D("Kaatsbal tegen een trap", "Makkelijk", "5 min", "Een trap kaatst de bal steeds anders terug. Goed voor je reactie.", ["Schiet zacht tegen de traptreden","De bal komt raar terug","Neem hem goed aan"], "stairs rebound drill", {wall:true, me:[60,50], ball:[70,50], paths:[{d:"M70 50 L140 44",t:"ball"},{d:"M140 48 L80 30",t:"ball"}]}),
  D("Volley op doel na een gooi", "Moeilijk", "10 min", "Laat een vriend de bal opgooien en volley op doel.", ["Vriend gooit vanaf de zijkant","Draai je lichaam open","Raak de bal in het midden"], "volley finishing", {goal:true, mates:[[100,20]], me:[90,60], ball:[96,30], paths:[{d:"M96 30 L94 54",t:"ball"},{d:"M96 60 L144 50",t:"ball"}]}),
  D("Lopen zonder bal: vrijlopen", "Gemiddeld", "10 min", "Oefen vrijlopen: kom los van je tegenstander om de bal te krijgen.", ["Loop eerst weg","Kom dan ineens terug","Vraag de bal met je hand"], "getting open drill", {me:[90,40], foe:[96,46], mates:[[40,50]], paths:[{d:"M90 40 L110 30 L80 30",t:"run"}]})
);

// ---------- Voetbal IQ ----------
IQ_LESSONS.push(
  IQ("Speel de bal weg van de druk", "Als er een tegenstander aan één kant staat, speel dan naar de andere kant.", "Kijk waar de druk vandaan komt.", {me:[70,50], foe:[80,40], mates:[[60,85]], ball:[74,52], paths:[{d:"M72 54 L62 80",t:"ball"}]}),
  IQ("Het moment van de steekpass", "Een steekpass werkt als de loper al loopt en niet buitenspel staat.", "Speel op het moment dat hij versnelt.", {line:100, me:[60,50], mates:[[90,30]], ball:[66,50], paths:[{d:"M94 30 L130 30",t:"run"},{d:"M66 48 L126 32",t:"ball"}]}),
  IQ("De lege ruimte vullen", "Als een teamgenoot weggaat, ontstaat er ruimte.", "Loop in de ruimte die hij achterlaat.", {mates:[[100,40]], me:[70,70], paths:[{d:"M100 40 L130 20",t:"run"},{d:"M70 70 L98 44",t:"run"}]}),
  IQ("Altijd een driehoek", "In een driehoek heeft de speler met de bal altijd twee opties.", "Zorg dat jij en twee teamgenoten een driehoek vormen.", {me:[60,50], mates:[[90,25],[90,75]], ball:[66,50]}),
  IQ("Niet stilstaan na je pass", "Na een pass ben je even vrij. Gebruik dat.", "Loop meteen een nieuwe plek in.", {me:[50,50], mates:[[90,50]], ball:[96,50], paths:[{d:"M54 50 L80 20",t:"run"}]}),
  IQ("De keeper als extra speler", "Bij druk kun je terugspelen naar de keeper.", "Hij heeft meestal tijd en kan opnieuw opbouwen.", {me:[50,50], foe:[60,50], mates:[[14,50]], ball:[46,50], paths:[{d:"M46 50 L20 50",t:"ball"}]}),
  IQ("Lees de lichaamshouding", "De heupen van een speler laten zien waar hij heen gaat.", "Kijk naar de heupen, niet naar de voeten.", {me:[90,50], foe:[60,50], ball:[68,50]}),
  IQ("Speel simpel als je moe bent", "Als je moe bent, maak je meer fouten.", "Kies de makkelijkste pass en bewaar je energie.", {me:[60,50], mates:[[80,50],[40,30]], ball:[66,50], paths:[{d:"M66 50 L76 50",t:"ball"}]})
);

// ---------- Thuis- en krachtoefeningen ----------
(() => {
  const pz = t => { const x = [...KRACHT, ...EXERCISES].find(k => k.title === t); return x ? x.poses : null; };
  const haveE = new Set(EXERCISES.map(x => x.title)), haveK = new Set(KRACHT.map(x => x.title));
  const addE = (title, target, reps, text, yt, like) => { const poses = pz(like); if (poses && !haveE.has(title)) { haveE.add(title); EXERCISES.push(XE(title, target, reps, text, yt, poses)); } };
  const addK = (title, target, reps, text, why, yt, like) => { const poses = pz(like); if (poses && !haveK.has(title)) { haveK.add(title); KRACHT.push(KR(title, target, reps, text, why, yt, poses)); } };
  addE("Squat-pulsen", "Bovenbenen", "3 x 15", "Blijf onderin de squat en beweeg klein op en neer.", "squat pulses", "Squats");
  addE("Plank met heupdraai", "Zijkant buik", "3 x 10", "Draai in een plank je heupen om de beurt naar links en rechts.", "plank hip dips", "Plank");
  addE("Zijwaartse lunge met tik", "Benen en lies", "3 x 8 per kant", "Stap opzij in een lunge en tik de grond.", "lateral lunge touch", "Zijwaartse lunge");
  addE("Push-up op je knieën langzaam", "Borst en armen", "3 x 8", "Zak in 3 tellen naar beneden op je knieën.", "slow knee push up", "Push-ups");
  addE("Crunch met benen omhoog", "Buik", "3 x 12", "Leg je benen in de lucht met je knieën gebogen en doe crunches.", "table top crunch", "Crunches");
  addE("Bruggetje met benen ver weg", "Achterkant been", "3 x 10", "Zet je voeten verder weg voor meer hamstrings.", "long lever bridge", "Bruggetje");
  addK("Stap-op met sprong", "Benen en explosiviteit", "3 x 6 per been", "Stap op een traptree en spring omhoog.", "explosieve eerste meters.", "step up jump", "Stap-op met kniehef");
  addK("Pallof press met draai", "Romp", "3 x 8 per kant", "Duw de band uit en draai dan langzaam mee terug.", "controle over je romp in duels.", "pallof press rotation", "Pallof press met band");
  addK("Wandelende lunge met rugzak", "Benen", "3 x 10 stappen", "Loop in lunges vooruit met een rugzak op.", "sterke benen voor duels en sprint.", "walking lunge backpack", "Achterwaartse lunge met rugzak");
  addK("Eenbenig kuitheffen met pauze onderin", "Kuiten en achillespees", "3 x 8 per been", "Zak tot onder de trede en wacht 2 tellen.", "sterke en soepele achillespezen.", "eccentric calf raise", "Kuitheffen op één been op de trap");
})();

// ---------- Daglessen ----------
DAILY_LESSONS.push(
  L("De eerste meter na je aanname", "Na een goede aanname telt je eerste stap.", "Wie snel wegstapt, laat de tegenstander achter.", ["Neem aan in de ruimte.","Stap direct mee met de bal.","Kijk na je eerste stap omhoog."], "Neem 20 ballen aan tegen de muur en stap telkens meteen weg.", "Blijven staan na de aanname.", "Aanname in de ruimte, meteen meestappen."),
  L("Afstand houden als verdediger", "Te dichtbij laat je makkelijk passeren.", "Met een armlengte afstand kun je reageren.", ["Sta een armlengte van je man.","Kom dichterbij als hij de bal aanneemt.","Blijf laag."], "Speel 10 keer één-tegen-één en let op je afstand.", "Te dicht op je man vliegen.", "Armlengte afstand, laag blijven."),
  L("Een strakke pass over de grond", "Een strakke pass is moeilijker te onderscheppen.", "Hij komt sneller aan bij je teamgenoot.", ["Standbeen naast de bal.","Raak het midden met je binnenkant.","Loop door met je trapbeen."], "Pass 30 keer strak tegen de muur.", "De bal zacht en hobbelig spelen.", "Standbeen naast de bal en doortrappen."),
  L("Een duel in de lucht verdedigen", "Ook verdedigers moeten koppen.", "Wie de bal eerst raakt, wint het duel.", ["Kijk naar de bal, niet naar de man.","Spring op tijd.","Kop hoog en breed weg."], "Laat iemand 10 ballen gooien en kop ze naar de zijkant.", "Wachten tot de bal bij je is.", "Op tijd springen en hoog en breed wegkoppen."),
  L("Spelen tussen de linies", "Tussen het middenveld en de verdediging is vaak ruimte.", "Wie daar de bal krijgt, kan meteen gevaarlijk worden.", ["Zoek de ruimte achter hun middenvelders.","Sta half gedraaid.","Draai meteen na de aanname."], "Speel een partijtje en zoek steeds de ruimte tussen de lijnen.", "Te ver naar achteren de bal halen.", "Tussen de linies staan en meteen draaien."),
  L("De afstandsschot-techniek", "Een schot van afstand vraagt om techniek, niet alleen kracht.", "Met goede techniek wordt het schot zuiver en hard.", ["Standbeen naast de bal.","Lichaam iets over de bal.","Raak het midden met je wreef."], "Schiet 15 keer van 20 meter.", "Achterover leunen, waardoor de bal te hoog gaat.", "Over de bal en raken met je wreef."),
  L("Rustig blijven bij een één-tegen-één met de keeper", "Alleen voor de keeper is spannend.", "Wie rustig blijft, scoort vaker.", ["Kijk naar de keeper.","Kies: schieten of omspelen.","Schiet laag in de hoek."], "Oefen 10 keer alleen op de keeper af.", "Te hard en te hoog schieten in paniek.", "Rustig, kijken en laag in de hoek."),
  L("Je positie bij balbezit van de keeper", "Als jouw keeper de bal heeft, moet je je aanbieden.", "Zo kan hij goed opbouwen.", ["Ga breed staan.","Draai je open naar het veld.","Roep om de bal."], "Speel een partijtje met opbouw vanuit de keeper.", "Dicht bij de tegenstander blijven staan.", "Breed, open en vragen.")
);

// ---------- Mindset ----------
TEGENSLAG.push(
  TS("Je hebt een slechte training gehad voor een wedstrijd", "Je twijfelt of je goed gaat spelen.", ["Weet dat een training geen wedstrijd is","Rust goed uit","Denk aan een goede wedstrijd van eerder"], "Een slechte generale gaat vaak samen met een goede voorstelling."),
  TS("Je vrienden zeggen dat voetbal stom is", "Je twijfelt.", ["Bedenk waarom jij het leuk vindt","Je hoeft het niet met iedereen eens te zijn","Zoek ook vrienden in je team"], "Doe wat jij leuk vindt."),
  TS("Je wint, maar speelde zelf slecht", "Blij voor het team, maar niet tevreden.", ["Vier de winst met je team","Kijk later wat beter kan","Neem één leerpunt mee"], "Ook na een overwinning kun je leren."),
  TS("Je hebt een slechte scheidsrechter getroffen", "Gefrustreerd over de beslissingen.", ["Focus op wat jij kunt doen","Blijf rustig en sportief","Praat er na de wedstrijd over"], "De scheidsrechter bepaalt niet hoe goed jij speelt."),
  TS("Je verliest een duel van een kleinere speler", "Je schaamt je een beetje.", ["Kijk wat hij slim deed","Leer van zijn timing","Ga het volgende duel slimmer aan"], "Duels win je met slim spelen, niet alleen met lengte."),
  TS("Je hebt een slechte nacht geslapen", "Moe en zonder energie.", ["Drink extra water","Doe simpele dingen goed","Ga vanavond extra vroeg slapen"], "Eén slechte nacht kun je opvangen. Maak er geen gewoonte van."),
  TS("Je bent bang voor een volgende blessure", "Je durft niet vol in de duels.", ["Doe je preventie-oefeningen","Bouw rustig op","Praat erover met je trainer"], "Vertrouwen komt terug door stap voor stap op te bouwen."),
  TS("Je hebt het gevoel dat niemand je ziet", "Onzichtbaar en onbelangrijk.", ["Doe de kleine dingen goed","Praat en coach op het veld","Vraag je trainer om feedback"], "Wie goed werkt, wordt vroeg of laat gezien.")
);
FOCUS_TIPS.push(
  FT("Eerst kijken, dan pas", "Een snelle blik voorkomt balverlies.", "Draai je hoofd voor de bal komt.", "Wedstrijd"),
  FT("Je ademhaling bij een penalty", "Rustig ademen maakt je hand en voet stil.", "Adem 2 keer diep voor de aanloop.", "Wedstrijd"),
  FT("Hou je doel klein", "Een klein doel voor vandaag is makkelijk te halen.", "Kies iets wat je vandaag zeker kunt doen.", "Thuis"),
  FT("Elke minuut telt", "Ook de laatste minuten van een training zijn belangrijk.", "Blijf scherp tot het fluitsignaal.", "Training"),
  FT("Even weg van het lawaai", "Rust in je hoofd helpt je concentreren.", "Zoek voor de wedstrijd even een rustige plek.", "Wedstrijd"),
  FT("Dankbaar beginnen", "Dankbaarheid maakt je hoofd rustig en positief.", "Noem 's ochtends één ding waar je blij mee bent.", "Thuis"),
  FT("Je spullen klaar, je hoofd klaar", "Een goede voorbereiding geeft rust.", "Pak je tas de avond ervoor in.", "Thuis"),
  FT("Herhaal wat werkt", "Wat goed ging, kun je herhalen.", "Schrijf op wat werkte en doe het weer.", "Training")
);
LEIDER.push(
  LT("Coach bij spelhervattingen", "Bij hoekschoppen en vrije trappen is overzicht belangrijk.", "Roep wie wie dekt.", "Een duidelijke stem voorkomt tegengoals."),
  LT("Wees eerlijk over de score in een partijtje", "Een leider speelt eerlijk, ook op de training.", "Tel goed en geef toe als het een punt voor de ander was.", "Eerlijk spel bouwt vertrouwen."),
  LT("Ga als eerste het moeilijke duel aan", "Een leider laat zien dat hij durft.", "Ga het eerste duel van de wedstrijd vol aan.", "Durf geeft het team moed."),
  LT("Laat de trainer niet wachten", "Op tijd en klaar laat respect zien.", "Sta klaar als de trainer begint.", "Respect voor de trainer is respect voor het team."),
  LT("Help na de wedstrijd met de spullen", "Ook na de wedstrijd kun je leiden.", "Pak de ballen of pionnen op.", "Kleine dingen maken een groot verschil.")
);
EXCUSES.push(
  ["Het is te nat om te rekken.", "Rek binnen op een handdoek."],
  ["Ik heb mijn routine niet afgemaakt.", "Doe dan nu alleen het volgende stapje."],
  ["Ik heb geen zin in gezond eten.", "Kies een recept dat je lekker vindt. Gezond kan ook lekker zijn."],
  ["Ik ben al goed in jongleren.", "Probeer het dan met je zwakke voet of je dijen."],
  ["Ik kan niet zo goed koppen.", "Begin met een zachte bal en bouw het op."],
  ["Ik heb mijn record al.", "Records zijn er om te verbeteren."]
);
MOTIVATION.push(
  "De beste versie van jezelf begint vandaag.", "Kleine dingen goed doen maakt grote dingen mogelijk.", "Een goede ochtend begint de avond ervoor.",
  "Wie goed eet, speelt goed.", "Rust maakt je sterker.", "Durf fouten te maken, dan leer je het snelst.",
  "Training is de plek waar je mag mislukken.", "Elke bal is een kans.", "Wees de eerste die begint en de laatste die stopt.",
  "Het verschil tussen goed en heel goed zit in de details.", "Je eigen record is je echte tegenstander.", "Volhouden is een superkracht."
);

// ---------- Habits ----------
TIPS.push(
  LH("Één minuut rekken na het opstaan", "Je spieren worden rustig wakker.", "Rek je armen, rug en benen even.", "herstel"),
  LH("Kijk even naar je planner", "Dan weet je wat je vandaag gaat doen.", "Doe het bij het ontbijt.", "hoofd"),
  LH("Water drinken na het tandenpoetsen", "Een makkelijk moment om te drinken.", "Neem een paar slokken na het poetsen.", "drinken"),
  LH("Je schoenen uit bij de deur", "Een schoon huis en een vaste plek voor je schoenen.", "Zet ze altijd op dezelfde plek.", "hoofd"),
  LH("Een glimlach naar een teamgenoot", "Een glimlach maakt het team vrolijker.", "Doe het bij het begin van de training.", "hoofd"),
  LH("Je rug strekken na het huiswerk", "Na lang zitten heeft je rug ruimte nodig.", "Strek je armen omhoog en buig even achterover.", "herstel"),
  LH("Groente pakken uit de koelkast", "Een snelle gezonde snack.", "Pak een paar snoeptomaatjes of een wortel.", "eten"),
  LH("Je bidon na de training legen en spoelen", "Een schone bidon is gezonder.", "Spoel hem direct om.", "drinken"),
  LH("Ogen even dicht na school", "Een minuut rust voor je hoofd.", "Ga zitten en doe je ogen een minuutje dicht.", "slapen"),
  LH("Bedanken voor het eten", "Een kleine gewoonte die mensen blij maakt.", "Zeg het na elke maaltijd.", "hoofd")
);
BIG_HABITS.push(
  BH("Een week elke dag 2 liter water", "Genoeg drinken maakt je fitter.", "Vul elke ochtend je bidon twee keer."),
  BH("Een week elke dag 10 minuten zwakke voet", "Een week lang elke dag geeft al verschil.", "Plan het op een vast moment."),
  BH("Een week elke avond je tas klaar", "Nooit meer haasten in de ochtend.", "Pak hem in na het avondeten.")
);

// ---------- Recepten ----------
RECEPTEN.push(
  RC("Ontbijt", "Havermout met appel en kaneel uit de magnetron", "5 min", "1 persoon", ["Havermout (een half kopje)","Melk (een kopje)","Halve appel","Kaneel"], ["Doe havermout en melk in een kom.","Zet 2 minuten in de magnetron.","Rasp de appel erdoor en strooi kaneel erover."], "Snel warm ontbijt dat lang energie geeft.", "Roer halverwege even."),
  RC("Ontbijt", "Yoghurt-bowl met banaan en pindakaas", "3 min", "1 persoon", ["Yoghurt","1 banaan","Theelepel pindakaas","Handje havermout"], ["Doe yoghurt in een kom.","Leg plakjes banaan en een beetje pindakaas erop.","Strooi havermout erover."], "Eiwitten en energie voor de ochtend.", "Ook lekker met kwark."),
  RC("Voor het sporten", "Volkoren pasta pesto met kip", "20 min", "2 personen", ["Volkoren pasta","Kipreepjes","Groene pesto","Tomaatjes"], ["Kook de pasta.","Bak de kip.","Meng met een beetje pesto en tomaatjes."], "Koolhydraten en eiwitten de avond voor een wedstrijd.", "Gebruik niet te veel pesto."),
  RC("Voor het sporten", "Banaan-havermout smoothie", "5 min", "1 persoon", ["1 banaan","2 eetlepels havermout","Melk"], ["Doe alles in de blender.","Mix tot het glad is."], "Snelle energie die goed valt.", "Drink het een uur voor het sporten."),
  RC("Na het sporten", "Kwark met banaan en havermout", "3 min", "1 persoon", ["Kwark","1 banaan","2 eetlepels havermout"], ["Doe kwark in een kom.","Snijd de banaan erop.","Strooi havermout erover."], "Eiwitten en koolhydraten voor herstel.", "Binnen een uur na het sporten."),
  RC("Na het sporten", "Volkoren wrap met ei en avocado", "10 min", "1 persoon", ["Volkoren wrap","2 eieren","Halve avocado","Tomaat"], ["Bak de eieren.","Prak de avocado op de wrap.","Leg ei en tomaat erop en rol op."], "Eiwitten en gezonde vetten.", "Lekker warm."),
  RC("Lunch", "Volkoren broodje kip-avocado", "5 min", "1 persoon", ["Volkoren broodje","Plakjes kipfilet","Halve avocado","Sla"], ["Prak de avocado op het broodje.","Beleg met kip en sla."], "Een stevige lunch met eiwitten.", "Een beetje citroen houdt de avocado groen."),
  RC("Lunch", "Couscoussalade met kikkererwten", "15 min", "2 personen", ["Couscous","Kikkererwten","Komkommer en tomaat","Feta","Citroen"], ["Maak de couscous met heet water.","Meng met kikkererwten en groente.","Strooi feta erover en knijp er citroen over."], "Eiwitten uit kikkererwten en lang energie.", "Mee naar school in een bakje."),
  RC("Avondeten", "Spaghetti met tonijn en tomaat", "20 min", "3 personen", ["Volkoren spaghetti","Blikje tonijn op water","Passata","Ui en knoflook","Basilicum"], ["Kook de spaghetti.","Bak ui en knoflook.","Doe passata en tonijn erbij en warm op.","Meng met de spaghetti."], "Snel en vol eiwitten.", "Doe er spinazie doorheen."),
  RC("Avondeten", "Kipfilet met krieltjes en salade", "30 min", "3 personen", ["Kipfilet","Krieltjes","Sla, tomaat, komkommer","Olijfolie"], ["Kook of bak de krieltjes.","Bak de kip gaar.","Maak een salade met een beetje olie."], "Een simpele, gezonde maaltijd.", "Bak de krieltjes in de oven met kruiden."),
  RC("Snacks", "Rijstwafel met hummus en tomaat", "3 min", "1 persoon", ["2 rijstwafels","Hummus","Tomaat"], ["Smeer hummus op de rijstwafels.","Leg plakjes tomaat erop."], "Licht en vol vezels.", "Een beetje peper erover."),
  RC("Drankjes", "Mango-yoghurt lassi", "5 min", "1 persoon", ["Halve mango (of bevroren mango)","Yoghurt","Scheutje melk"], ["Doe alles in de blender.","Mix tot het glad is."], "Fris, vol vitamines en eiwitten.", "Lekker na een warme training.")
);

// ---------- Routines ----------
ROUTINES.push(
  RW("Ochtend", "Ochtend voor een toets", "Als je vandaag een toets hebt", [["7:00","Opstaan en water",""],["7:05","5 minuten bewegen","Je hersenen worden wakker."],["7:15","Goed ontbijt","Havermout of brood met ei."],["7:35","Nog één keer kort je aantekeningen kijken",""],["7:50","3 keer diep ademhalen",""],["8:00","Naar school",""]], "Bewegen, eten en rust helpen je beter nadenken.", {extra:["Glas water mee","Bed opmaken","Positief zinnetje in je hoofd"]}),
  RW("Avond", "Avond met een vrije dag morgen", "Vrijdagavond of voor een vrije dag", [["18:00","Avondeten",""],["19:00","Iets leuks met familie of vrienden",""],["20:00","15 minuten VR",""],["20:30","10 minuten rekken",""],["21:15","Schermen weg",""],["21:45","Slapen","Ook al is het morgen vrij, niet te laat."]], "Ook voor een vrije dag helpt een vaste avond om fit te blijven.", {extra:["Tas voor morgen klaar als je sport","Glas water naast je bed","Licht dimmen"]})
);

// ---------- Spelers, analyse, blessures ----------
SPELERS.push(
  SP("Kenan Yildiz", "Aanvaller", "Een jonge, technische aanvaller die graag naar binnen dribbelt.", ["Dribbelen naar binnen","Schieten van de rand van de zestien","Lef"], "Durf de actie te maken, ook als je jong bent.", "Dribbel 10 keer vanaf de zijkant naar binnen en schiet.", "kenan yildiz skills"),
  SP("Warren Zaïre-Emery", "Middenvelder", "Jong en volwassen in zijn spel. Werkt hard en speelt simpel.", ["Simpel goed spelen","Duels","Loopvermogen"], "Simpel spelen is vaak het moeilijkst en het best.", "Speel een partijtje met maximaal twee keer raken.", "zaire emery analysis"),
  SP("Diogo Costa", "Keeper", "Een keeper die bekend is om het stoppen van penalty's.", ["Penalty's stoppen","Rust","Uittrappen"], "Rust bij een penalty geeft de keeper een kans.", "Laat iemand penalty's nemen en wacht tot het laatste moment.", "diogo costa penalty saves")
);
addPlayers("lw", ["Kenan Yildiz"]);
addPlayers("cm", ["Warren Zaïre-Emery"]);
addPlayers("k", ["Diogo Costa"]);
ANALYSE_TIPS.push(
  "Kijk naar wat de verdedigers doen als hun team aanvalt.",
  "Let op hoe een team zich opstelt bij een ingooi in de buurt van de zestien.",
  "Kijk hoe vaak een speler zijn zwakke voet gebruikt.",
  "Let op wanneer een team besluit om lange ballen te spelen."
);
BLESSURES.push(
  {title:"Pijn aan de buitenkant van je knie", wat:"Een zeurende pijn aan de buitenkant, vaak na veel hardlopen.", doe:["Doe een paar dagen rustiger","Rol je bovenbeen met een foamroller","Koel na het sporten"], stop:"Blijft het? Laat een fysiotherapeut kijken.", voorkom:"Train je heupspieren met een band en bouw hardlopen rustig op."},
  {title:"Kneuzing van je teen door een stap", wat:"Iemand stapt op je voet en je teen doet pijn.", doe:["Koel de teen","Leg je voet hoog","Draag ruime schoenen"], stop:"Is de teen scheef of heel dik? Ga naar een dokter.", voorkom:"Draag schoenen die goed passen."}
);

// ---------- Opruimen: dubbele titels eruit ----------
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = typeof x === "string" ? x : Array.isArray(x) ? x[0] : x[key] || x.title || x.id; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [TIPS, BIG_HABITS, MOTIVATION, DRILLS, IQ_LESSONS, EXERCISES, KRACHT, TEGENSLAG, FOCUS_TIPS, LEIDER, EXCUSES, ANALYSE_TIPS, DAILY_LESSONS, RECEPTEN, ROUTINES, BLESSURES].forEach(a => dedupe(a));
  dedupe(SPELERS, "name");
})();
