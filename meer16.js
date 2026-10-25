// Stay Hard – zestiende uitbreiding (niet: records, 30 dagen, taken van vandaag).

// ---------- Voorbeeldtrainingen ----------
TRAININGEN.push(
  VT("Onderlichaam", "Eén been tegelijk", "Gemiddeld", "20 min", "3 rondes, 1 minuut rust", [["Eenbenige squat op een bank","6 per been"],["Eenbenige hip thrust","8 per been"],["Eenbenige deadlift","8 per been"],["Kuitheffen op één been op de trap","10 per been"]], "In voetbal sta je bijna altijd op één been. Deze training maakt elk been apart sterk."),
  VT("Onderlichaam", "Heupen en billen met band", "Makkelijk", "15 min", "2 rondes", [["Zijwaarts lopen met een band","10 stappen per kant"],["Monster walk vooruit met band","10 stappen"],["Clamshell met band","12 per kant"],["Bruggetje marcheren","10 per been"]], "Sterke heupen houden je knieën recht en voorkomen blessures."),
  VT("Onderlichaam", "Kracht en sprong", "Zwaar", "30 min", "3 rondes, 2 minuten rust", [["Bulgaarse split squat langzaam","8 per been"],["Squat-sprong met stille landing","6 keer"],["Nordic hamstring","5 keer"],["Wisselsprongen in een lunge","6 per been"],["Wall sit met benen apart","40 seconden"]], "Eerst kracht, dan explosief: de combinatie maakt je sneller én sterker."),
  VT("Middenlichaam", "Romp voor keepers en verdedigers", "Gemiddeld", "18 min", "3 rondes", [["Plank met schoudertik","10 per kant"],["Zijplank met beenheffen","8 per kant"],["Dead bug met bal","8 per kant"],["Romp draaien met rugzak","10 per kant"]], "Een stevige romp helpt bij duiken, duels en koppen."),
  VT("Middenlichaam", "Rustige buik voor de avond", "Makkelijk", "10 min", "2 rondes", [["Dead bug langzaam","6 per kant"],["Plank op ellebogen","20 seconden"],["Vogel-hond met pauze","6 per kant"],["Beenheffen liggend","8 keer"]], "Een rustige training die je ook 's avonds nog kunt doen."),
  VT("Middenlichaam", "Hardcore buik", "Zwaar", "20 min", "3 rondes, 1 minuut rust", [["Hollow rock","25 seconden"],["Plank met sprongspreiding","12 keer"],["V-up met gebogen knieën","12 keer"],["Windshield wipers met gebogen knieën","8 per kant"],["Plank zaagbeweging","10 keer"]], "Voor als je buik al sterk is en je een echte uitdaging wilt."),
  VT("Bovenlichaam", "Push en pull", "Gemiddeld", "20 min", "3 rondes, 1 minuut rust", [["Push-up met pauze","8 keer"],["Roeien met een rugzak","12 keer"],["Pike push-up","6 keer"],["Handdoek-roeien aan de deur","12 keer"]], "Duwen en trekken in balans: zo blijven je schouders gezond."),
  VT("Bovenlichaam", "Snel bovenlichaam voor beginners", "Makkelijk", "10 min", "2 rondes", [["Push-up op een bank","8 keer"],["Schouder-tikken op een bank","10 per kant"],["Band uit elkaar trekken","12 keer"],["Armcirkels met gestrekte armen","30 seconden"]], "Een korte en makkelijke start voor sterkere armen en schouders.")
);

// ---------- Strekroutines ----------
STREK_ROUTINES.push(
  SR("Na een sprinttraining", "Na sprinten of veel versnellen", "10 min", [["Rustig uitlopen","3 minuten"],["Hamstring met band","30 sec per been"],["Knielende heupbuiger-rek","30 sec per kant"],["Kuiten rekken","30 sec per been"],["Bovenbeen rekken","30 sec per been"]], "Na sprinten zijn je hamstrings en heupen extra hard aan het werk geweest."),
  SR("Voor een toets of als je gestrest bent", "Als je hoofd vol zit", "5 min", [["Buikademhaling","1 minuut"],["Nek ontspannen","30 seconden"],["Kindhouding","1 minuut"],["Armen en schouders los","30 seconden"],["Ademen met armen","1 minuut"]], "Rustig rekken en ademen haalt spanning uit je lichaam en hoofd."),
  SR("Na een dag op kunstgras", "Na veel spelen op kunstgras", "8 min", [["Voeten rollen over een bal","1 min per voet"],["Achillespees-rek","30 sec per been"],["Scheenbeen-rek","30 seconden"],["Kniecirkels rustig","10 keer"],["Benen tegen de muur","2 minuten"]], "Kunstgras is harder voor je voeten, kuiten en knieën."),
  SR("Hele lichaam in 12 minuten", "Een paar keer per week", "12 min", [["Kat en koe","8 keer"],["Neerwaartse hond","30 seconden"],["De beste rek van de wereld","5 per kant"],["Duif-houding","40 sec per kant"],["Borst openen","30 seconden"],["Liggend draaien","30 sec per kant"]], "Een complete rekroutine van top tot teen.")
);

// ---------- Blessures voorkomen ----------
PREVENTIE.push(
  PV("🏋️", "#B45309", "Eenbenige kracht", "Knieën en heupen", "Wie op één been sterk is, valt minder snel uit balans.", "Eenbenige squat naar een bank.", "3 x 6 per been", "Eenbenige squat op een bank"),
  PV("🧘", "#0891B2", "Diepe hurkzit", "Heupen en enkels", "Soepele heupen en enkels bewegen beter en raken minder snel geblesseerd.", "Zit diep in een hurkzit met je hielen op de grond.", "3 x 30 sec", "Diepe hurkzit"),
  PV("📏", "#16A34A", "Goed rekken na het sporten", "Hele lichaam", "Rekken na het sporten houdt je spieren soepel.", "Doe een strekroutine uit Thuis → Herstel.", "10 minuten", ""),
  PV("🔄", "#0D9488", "Wissel je belasting af", "Hele lichaam", "Steeds hetzelfde doen overbelast dezelfde spieren.", "Wissel voetbal af met fietsen, zwemmen of kracht.", "Elke week", ""),
  PV("🦶", "#65A30D", "Tenen sterk", "Voeten", "Sterke tenen helpen bij afzetten en balans.", "Pak een handdoek met je tenen en trek hem naar je toe.", "3 x 30 sec", ""),
  PV("🫁", "#4338CA", "Rustig ademen bij stress", "Hele lichaam", "Stress maakt je spieren gespannen.", "Adem 4 tellen in en 6 tellen uit.", "1 minuut", ""),
  PV("🧊", "#0EA5E9", "Koelen bij een stoot", "Spieren", "Direct koelen beperkt zwelling.", "Koel 10 tot 15 minuten met ijs in een doekje.", "Bij een stoot", ""),
  PV("🥛", "#78716C", "Sterke botten", "Botten", "Je botten groeien nog. Ze hebben calcium nodig.", "Eet of drink elke dag zuivel, zoals melk, yoghurt of kaas.", "Elke dag", ""),
  PV("🎒", "#475569", "Tas op twee schouders", "Rug", "Een zware tas op één schouder geeft rugklachten.", "Draag je schooltas altijd op twee schouders.", "Elke dag", ""),
  PV("🏃", "#E2541B", "Loopscholing", "Benen", "Goed lopen voorkomt overbelasting.", "Hakken-billen, knieheffen en huppelen voor elke training.", "5 minuten", "Knieheffen")
);

// ---------- Recepten ----------
RECEPTEN.push(
  RC("Ontbijt", "Omelet-wrap met groente", "10 min", "1 persoon", ["2 eieren","Volkoren wrap","Paprika en spinazie","Beetje kaas"], ["Klop de eieren los met fijngesneden groente.","Bak als een dunne omelet.","Leg op de wrap met wat kaas en rol op."], "Eiwitten en groente al bij het ontbijt.", "Neem hem mee als je haast hebt."),
  RC("Ontbijt", "Havermout met peer en noten", "10 min", "1 persoon", ["Havermout","Melk","1 peer","Handje noten","Kaneel"], ["Kook havermout met melk.","Snijd de peer erdoor.","Strooi noten en kaneel erover."], "Lange energie voor een drukke dag.", "Ook lekker met appel."),
  RC("Voor het sporten", "Zoete aardappel met kip en sperziebonen", "30 min", "2 personen", ["Zoete aardappel","Kipfilet","Sperziebonen","Olijfolie"], ["Bak blokjes zoete aardappel 25 minuten in de oven.","Bak de kip.","Kook de sperziebonen."], "Goede koolhydraten de avond voor een wedstrijd.", "Vraag hulp bij de oven."),
  RC("Na het sporten", "Volkoren bagel met zalm en roomkaas light", "5 min", "1 persoon", ["Volkoren bagel","Gerookte zalm","Beetje light roomkaas","Komkommer"], ["Snijd de bagel open.","Smeer dun roomkaas.","Leg zalm en komkommer erop."], "Eiwitten en gezonde vetten voor herstel.", "Ook lekker met ei in plaats van zalm."),
  RC("Na het sporten", "Linzen met rijst en groente", "30 min", "3 personen", ["Rode linzen","Rijst","Wortel, ui, spinazie","Milde kerrie"], ["Kook de rijst.","Bak ui en wortel.","Doe linzen, water en kerrie erbij en kook 15 minuten.","Roer de spinazie erdoor."], "Plantaardige eiwitten en energie voor herstel.", "Een schep yoghurt erop maakt het fris."),
  RC("Lunch", "Volkoren wrap met kip en paprika", "10 min", "1 persoon", ["Volkoren wrap","Kipreepjes","Paprika","Sla","Hummus"], ["Bak de kip met paprika.","Smeer hummus op de wrap.","Vul en rol op."], "Een complete lunch met eiwitten en groente.", "Koud ook lekker."),
  RC("Avondeten", "Kip-pastaschotel uit de oven", "40 min", "4 personen", ["Volkoren pasta","Kipreepjes","Courgette en paprika","Passata","Beetje kaas"], ["Kook de pasta kort.","Bak kip en groente.","Meng alles met passata in een ovenschaal en strooi een beetje kaas erover.","Bak 20 minuten op 200 graden."], "Veel groente, eiwitten en energie in één schaal.", "Restjes zijn een goede lunch."),
  RC("Avondeten", "Witvis met aardappeltjes en spinazie", "30 min", "3 personen", ["Witvis","Kleine aardappels","Spinazie","Citroen"], ["Kook de aardappels.","Bak de vis 3 minuten per kant.","Laat de spinazie slinken in de pan.","Knijp er citroen over."], "Licht, vol eiwitten en goed verteerbaar.", "Twee keer per week vis is goed."),
  RC("Snacks", "Appel-kaneel chips uit de oven", "60 min", "2 personen", ["2 appels","Kaneel"], ["Snijd de appels in heel dunne plakjes.","Leg ze op een bakplaat met kaneel.","Bak 50 minuten op 100 graden."], "Knapperig en zonder toegevoegde suiker.", "Vraag hulp bij het snijden."),
  RC("Drankjes", "Banaan-havermout ontbijtshake", "5 min", "1 persoon", ["1 banaan","2 eetlepels havermout","Melk","Kaneel"], ["Doe alles in de blender.","Mix tot het glad is."], "Een snel ontbijt om te drinken.", "Neem hem mee in een beker.")
);

// ---------- Routines ----------
ROUTINES.push(
  RW("Ochtend", "Ochtend na een avondtraining", "De dag na een late training", [["7:00","Opstaan en water",""],["7:05","5 minuten rustig rekken","Benen en heupen."],["7:15","Ontbijt met eiwitten",""],["7:40","Tas checken",""],["8:00","Naar school",""]], "Na een late training heb je extra herstel nodig.", {extra:["Glas water naast je bed","Schouders laten zakken","Fruit mee naar school"]}),
  RW("Avond", "Rustige avond voor een wedstrijdweekend", "Vrijdagavond voor een wedstrijd", [["18:00","Avondeten met koolhydraten",""],["18:45","Tas inpakken met de checklist",""],["19:15","Rustig iets leuks doen",""],["20:00","Kijk naar je focuswoord en doel",""],["20:30","Schermen weg, lezen",""],["21:00","Slapen",""]], "Een rustige vrijdag geeft een sterke zaterdag.", {wedstrijd:true, extra:["Glas water naast je bed","Bidon in de koelkast","Kleren klaarleggen"]})
);

// ---------- Voetbaloefeningen ----------
DRILLS.push(
  D("Aanname met je borst en doorspelen", "Moeilijk", "8 min", "Gooi hoog, neem aan op je borst en pass meteen tegen de muur.", ["Gooi hoog","Borst naar voren, laat de bal zacht vallen","Pass voor hij stilligt"], "chest control pass", {wall:true, me:[60,50], ball:[60,30], paths:[{d:"M60 30 L60 44",t:"ball"},{d:"M66 52 L140 52",t:"ball"}]}),
  D("Dribbel door een poortjesveld", "Makkelijk", "10 min", "Zet 6 poortjes van pionnen neer en dribbel door zoveel mogelijk in 1 minuut.", ["Poortjes van 1 meter breed","Dribbel door een poortje","Kies steeds een ander poortje"], "gate dribbling game", {cones:[[40,30],[46,30],[100,30],[106,30],[70,70],[76,70]], me:[70,50], ball:[76,50]}),
  D("Kaatsen en draaien met een maatje", "Gemiddeld", "10 min", "Teamgenoot passt, jij kaatst, krijgt hem terug en draait weg.", ["Kaats in één keer","Krijg de bal terug","Draai open en dribbel weg"], "set and turn drill", {mates:[[40,50]], me:[90,50], ball:[46,50], paths:[{d:"M46 50 L84 50",t:"ball"},{d:"M86 54 L50 54",t:"ball"}]}),
  D("Schieten van de rand van de zestien", "Gemiddeld", "10 min", "Schiet 20 keer vanaf de rand van de zestien, om en om links en rechts.", ["Leg 10 ballen klaar","Schiet om en om met links en rechts","Mik laag in de hoeken"], "edge of box shooting", {goal:true, me:[90,50], ball:[98,50], paths:[{d:"M98 50 L144 26",t:"ball"}]}),
  D("Verdedigen in een vak", "Gemiddeld", "10 min", "Probeer te voorkomen dat een vriend over een lijn dribbelt.", ["Vak van 8 bij 12 meter","Jij verdedigt de lijn","Hoe vaak houd je hem tegen?"], "1v1 defend the line", {me:[100,50], foe:[50,50], ball:[58,50], line:120})
);

// ---------- Voetbal IQ ----------
IQ_LESSONS.push(
  IQ("Wanneer lang, wanneer kort", "Een lange bal is goed als er ruimte achter de verdediging is.", "Staat de tegenstander hoog? Speel lang. Staat hij laag? Speel kort.", {me:[30,50], mates:[[60,40],[130,30]], foes:[[100,40],[100,60]], ball:[36,50], paths:[{d:"M36 48 Q84 0 126 30",t:"ball"}]}),
  IQ("Speel naar de goede kant van je teamgenoot", "Speel de bal aan de kant weg van zijn tegenstander.", "Dan kan hij de bal beschermen.", {me:[40,50], mates:[[100,50]], foe:[106,40], ball:[46,50], paths:[{d:"M46 52 L98 56",t:"ball"}]}),
  IQ("Doelpunten na een hoekschop tegen", "Na een weggekopte hoekschop staat de tegenstander vaak open.", "Wees klaar voor een snelle counter.", {me:[60,50], mates:[[90,20]], ball:[66,50], paths:[{d:"M66 48 L86 22",t:"ball"}]}),
  IQ("Zie het gat tussen twee verdedigers", "Tussen twee verdedigers is vaak een gat.", "Speel of loop door dat gat als ze ver uit elkaar staan.", {me:[50,50], foes:[[100,35],[100,65]], mates:[[120,50]], ball:[56,50], paths:[{d:"M56 50 L116 50",t:"ball"}]})
);

// ---------- Daglessen ----------
DAILY_LESSONS.push(
  L("Een pass met je buitenkant", "Een buitenkantpass is snel en verrassend.", "Je kunt passen zonder je lichaam te draaien.", ["Draai je enkel naar binnen.","Raak de bal met de buitenkant van je voet.","Volg de bal met je voet."], "Pass 20 keer met je buitenkant tegen de muur, met beide voeten.", "De bal raken met je tenen.", "Enkel naar binnen, raken met de buitenkant."),
  L("Een counter goed afmaken", "Een counter moet snel én slim.", "Te snel wordt slordig, te langzaam geeft de tegenstander tijd.", ["Speel snel naar voren.","Loop mee met de bal.","Kies op het laatste moment de beste optie."], "Speel een drie-tegen-twee op een doel en rond binnen 10 seconden af.", "Te lang dribbelen in een counter.", "Snel vooruit, meelopen en slim afronden."),
  L("Een schot blokkeren", "Een geblokt schot is net zo goed als een redding.", "Wie het schot blokt, voorkomt een goal.", ["Sta tussen de bal en het doel.","Maak je breed met je lichaam.","Houd je armen achter je rug."], "Laat een vriend zacht schieten en blokkeer met je lichaam.", "Je omdraaien of je armen uitsteken.", "Breed, armen achter je rug, blijf staan."),
  L("Je eerste wedstrijd in een nieuw team", "Een nieuw team is spannend.", "Met een paar simpele dingen hoor je er snel bij.", ["Leer de namen.","Doe de simpele dingen goed.","Praat op het veld."], "Leer voor je volgende training de namen van 5 teamgenoten.", "Stil blijven en alles alleen willen doen.", "Namen leren, simpel spelen en praten.")
);

// ---------- Mindset ----------
TEGENSLAG.push(
  TS("Je hebt het gevoel dat je minder bent dan vorig jaar", "Onzeker.", ["Kijk naar je records van vorig jaar","Weet dat groeien niet in een rechte lijn gaat","Praat met je trainer"], "Soms ga je even terug om daarna verder te springen."),
  TS("Je wordt niet aangespeeld door een bepaalde teamgenoot", "Gefrustreerd.", ["Praat er rustig met hem over","Loop je slimmer vrij","Laat zien dat je de bal goed gebruikt"], "Vertrouwen bouw je met elke goede actie."),
  TS("Je speelt tegen je oude team", "Zenuwachtig en misschien emotioneel.", ["Focus op je taak","Wees sportief tegen je oude teamgenoten","Geniet ervan"], "Laat zien hoe je gegroeid bent."),
  TS("Je hebt last van zenuwen voor een wedstrijd", "Buikpijn, trillende benen.", ["Adem rustig 4-4-4","Doe je vaste routine","Bedenk: zenuwen betekenen dat je klaar bent"], "Zenuwen zijn energie. Gebruik ze.")
);
FOCUS_TIPS.push(
  FT("Je eerste sprint", "Een eerste sprint vol inzet zet de toon.", "Sprint in de eerste minuut één keer voluit.", "Wedstrijd"),
  FT("Kijk na de wedstrijd vooruit", "Na de wedstrijd is de volgende al begonnen.", "Bedenk één ding voor de volgende training.", "Thuis"),
  FT("Rustig bij een vrije trap", "Een vrije trap vraagt om een rustig hoofd.", "Kijk naar de bal, adem uit en neem je aanloop.", "Wedstrijd"),
  FT("Je eigen muziek", "Muziek kan je focus aan- of uitzetten.", "Maak een lijstje met nummers voor energie en voor rust.", "Thuis")
);
LEIDER.push(
  LT("Laat de jongste spelers meedoen", "Een leider zorgt dat iedereen mee kan doen.", "Speel ook de jongste of nieuwste spelers aan.", "Iedereen groeit als hij erbij hoort."),
  LT("Wees positief over de tegenstander", "Respect laat zien dat je groot bent.", "Zeg na de wedstrijd: 'goed gespeeld'.", "Sportiviteit maakt het spel mooier."),
  LT("Hou de afspraken vast in de laatste minuten", "Op het einde vergeten spelers vaak de afspraken.", "Herinner je team aan de taken bij spelhervattingen.", "Wedstrijden worden vaak in de laatste minuten beslist.")
);
EXCUSES.push(
  ["Ik heb geen band voor die oefening.", "Doe de variant zonder band, of gebruik een oude panty of handdoek."],
  ["Ik weet niet welke training ik moet doen.", "Kies een voorbeeldtraining bij Thuis. Begin bij Makkelijk."],
  ["Rekken is saai.", "Zet muziek op en kies een strekroutine van 5 minuten."],
  ["Ik heb al genoeg gerekt.", "Je lichaam is blij met elke minuut extra."]
);
MOTIVATION.push(
  "Soepel lichaam, snelle benen.", "Een complete training begint met één oefening.", "Elke rek is een investering in morgen.",
  "Blessurevrij is de beste vorm.", "Voorkomen is beter dan genezen.", "Sterk van onder, midden en boven.",
  "Kracht, techniek en rust: alle drie nodig.", "Vandaag goed eten is morgen goed spelen."
);

// ---------- Habits ----------
TIPS.push(
  LH("Je rekroutine op een vaste plek", "Een matje op een vaste plek maakt rekken makkelijk.", "Leg een handdoek of matje klaar naast je bed.", "herstel"),
  LH("Eén rekoefening tijdens tv kijken", "Even rekken terwijl je kijkt.", "Kies er één uit Herstel.", "herstel"),
  LH("Je benen omhoog na school", "Je benen ontspannen na een lange dag.", "Leg ze 3 minuten omhoog tegen de muur.", "herstel"),
  LH("Je tas lichter maken", "Een lichte tas is beter voor je rug.", "Haal er elke week dingen uit die je niet nodig hebt.", "bewegen"),
  LH("Een handje noten als snack", "Gezond en snel.", "Leg een bakje noten op een vaste plek.", "eten"),
  LH("Je schoenen bij binnenkomst uit", "Een klein ritueel bij thuiskomen.", "Zet ze direct bij de deur.", "hoofd")
);

// ---------- Spelers ----------
SPELERS.push(
  SP("Joshua Zirkzee", "Aanvaller", "Een technische spits die goed met de bal is en graag meevoetbalt.", ["Kaatsen","Techniek in kleine ruimte","Slimme passes"], "Een spits kan ook spelmaker zijn.", "Oefen kaatsen met je rug naar het doel en draai daarna weg.", "zirkzee skills"),
  SP("Quinten Timber", "Middenvelder", "Een fel middenveld-type dat altijd wil winnen.", ["Druk zetten","Duels","Doorschuiven"], "Felheid en wilskracht maken het verschil.", "Speel een rondo en ga elke keer als eerste druk zetten.", "quinten timber analysis")
);
addPlayers("sp", ["Joshua Zirkzee"]);
addPlayers("cm", ["Quinten Timber"]);

// ---------- Opruimen ----------
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = typeof x === "string" ? x : Array.isArray(x) ? x[0] : x[key] || x.title || x.id; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [TIPS, MOTIVATION, DRILLS, IQ_LESSONS, TEGENSLAG, FOCUS_TIPS, LEIDER, EXCUSES, DAILY_LESSONS, RECEPTEN, ROUTINES, TRAININGEN, STREK_ROUTINES, PREVENTIE].forEach(a => dedupe(a));
  dedupe(SPELERS, "name");
})();
