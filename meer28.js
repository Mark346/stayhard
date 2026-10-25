// Stay Hard – achtentwintigste uitbreiding (niet: records, challenges, taken voor de rang, kracht- en strekroutines).

RECEPTEN.push(
  RC("Ontbijt", "Havermout met peer en walnoten", "8 min", "1 persoon", ["45 g havermout","200 ml melk","1 peer","15 g walnoten","2 g kaneel"], ["Kook havermout met melk en kaneel 4 minuten.","Snijd de peer in blokjes.","Doe peer en walnoten erop."], "Langzame energie voor een lange ochtend.", "Rasp de peer erdoor voor een zoetere pap."),
  RC("Ontbijt", "Volkoren wrap met ei en spinazie", "10 min", "1 persoon", ["1 volkoren wrap","2 eieren","30 g spinazie","20 g geraspte kaas"], ["Klop de eieren los.","Bak de spinazie kort en giet de eieren erbij.","Leg het ei met kaas op de wrap en rol hem op."], "Een ontbijt vol eiwitten dat je mee kunt nemen.", "Pak hem in folie voor onderweg."),
  RC("Lunch", "Pastasalade met kip en groente", "20 min", "2 personen", ["150 g volkoren pasta","200 g kipfilet","1 paprika","100 g komkommer","30 g pesto"], ["Kook de pasta en laat hem afkoelen.","Bak de kip gaar in blokjes.","Snijd de groente klein en meng alles met de pesto."], "Een lunch die je de avond ervoor kunt maken.", "Bewaar hem in een bakje in de koelkast."),
  RC("Lunch", "Linzensalade met feta", "15 min", "2 personen", ["250 g gekookte linzen","100 g cherrytomaatjes","100 g komkommer","50 g feta","10 ml olijfolie"], ["Spoel de linzen af.","Snijd tomaat en komkommer.","Meng alles met feta en olie."], "Plantaardige eiwitten en vezels.", "Een beetje citroensap maakt het fris."),
  RC("Voor het sporten", "Bagel met banaan en honing", "3 min", "1 persoon", ["1 volkoren bagel","1 banaan","10 g honing"], ["Snijd de bagel open en rooster hem eventueel.","Leg plakjes banaan erop en een beetje honing."], "Snelle koolhydraten voor energie.", "Eet hem 1 tot 2 uur voor het sporten."),
  RC("Na het sporten", "Wrap met tonijn en mais", "5 min", "1 persoon", ["1 volkoren wrap","1 blikje tonijn op water (110 g uitgelekt)","40 g mais","30 g yoghurt","Sla"], ["Meng tonijn met yoghurt en mais.","Leg sla op de wrap.","Schep de tonijn erop en rol op."], "Eiwitten en koolhydraten voor herstel.", "Peper erover maakt het lekker."),
  RC("Avondeten", "Zoete aardappel-curry met kikkererwten", "30 min", "4 personen", ["600 g zoete aardappel","1 blik kikkererwten (240 g uitgelekt)","400 ml kokosmelk light","300 g spinazie","30 g milde currypasta","300 g rijst"], ["Kook de rijst.","Bak de currypasta kort en voeg zoete aardappel in blokjes en kokosmelk toe.","Laat 15 minuten zacht koken.","Roer kikkererwten en spinazie erdoor."], "Veel energie en groente in één pan.", "Maak een grote pan, de rest is morgen ook lekker."),
  RC("Avondeten", "Kalkoen-gehaktballetjes met tomatensaus en pasta", "35 min", "4 personen", ["500 g kalkoengehakt","1 ei","30 g havermout","500 g passata","320 g volkoren spaghetti"], ["Meng gehakt, ei en havermout en draai kleine balletjes.","Bak de balletjes rondom bruin.","Voeg de passata toe en laat 15 minuten zacht koken.","Kook de spaghetti en serveer samen."], "Mager vlees en koolhydraten voor de dag voor een wedstrijd.", "Maak je handen nat bij het draaien."),
  RC("Snacks", "Komkommer-bootjes met hummus", "5 min", "1 persoon", ["½ komkommer","40 g hummus","5 g pompoenpitten"], ["Snijd de komkommer in de lengte door en schep de pitjes eruit.","Vul met hummus en strooi pitten erover."], "Knapperig, fris en vullend.", "Ook lekker met tonijn."),
  RC("Drankjes", "Bessen-havermout smoothie", "5 min", "1 persoon", ["100 g bevroren bessen","1 banaan","30 g havermout","250 ml melk"], ["Doe alles in de blender.","Mix tot het glad is."], "Een smoothie die lang energie geeft.", "Drink hem als ontbijt als je weinig tijd hebt.")
);

DRILLS.push(
  D("Eerste aanraking weg van de pion", "Gemiddeld", "8 min", "Neem de bal aan en speel hem met je eerste aanraking langs een pion weg.", ["Pass tegen de muur","Neem aan opzij","Langs de pion versnellen"], "first touch away from pressure", {wall:true, cones:[[100,50]], me:[90,60], ball:[96,60], paths:[{d:"M96 60 L120 74",t:"ball"}]}),
  D("Lange bal tegen een muur aannemen", "Moeilijk", "10 min", "Schop de bal hoog tegen een muur en neem hem aan voor hij stuitert.", ["Schop hoog","Kijk waar hij valt","Neem aan met je voet of dij"], "control high ball off wall", {wall:true, me:[80,60], ball:[120,30], paths:[{d:"M84 58 Q120 10 144 30",t:"ball"}]}),
  D("1 tegen 1: schijnbeweging en versnellen", "Gemiddeld", "10 min", "Doe een schijnbeweging bij een pion en versnel de andere kant op.", ["Dribbel naar de pion","Schijnbeweging","Versnel de andere kant op"], "feint and accelerate drill", {cones:[[90,50]], me:[40,50], ball:[48,50], paths:[{d:"M48 50 L82 50 L120 30",t:"ball"}]})
);

IQ_LESSONS.push(
  IQ("Achter de spits: tweede bal", "Na een kopduel valt de bal vaak los.", "Sta achter je spits klaar om de tweede bal te pakken.", {me:[90,55], mates:[[110,45]], foes:[[115,48]], ball:[104,60]}),
  IQ("Speel terug als het dicht zit", "Terugspelen is geen fout als je daarna kunt opbouwen.", "Speel terug naar de verdediger en zoek dan de vrije kant.", {me:[100,50], mates:[[60,50]], foes:[[110,45],[110,55]], ball:[96,50], paths:[{d:"M96 50 L64 50",t:"ball"}]})
);

DAILY_LESSONS.push(
  L("Een goede kopbal", "Koppen doe je met je voorhoofd, niet met je kruin.", "Zo komt de bal hard en gericht en doet het geen pijn.", ["Houd je ogen open.","Span je nek aan.","Raak de bal met je voorhoofd."], "Gooi de bal 15 keer zacht op en kop hem terug naar je hand.", "Ogen dicht of de bal op je kruin laten vallen.", "Ogen open, nek stevig, voorhoofd.")
);

TEGENSLAG.push(
  TS("Je wordt na de rust gewisseld", "Je voelt je teleurgesteld.", ["Moedig je team aan vanaf de bank","Vraag later wat je kunt verbeteren","Laat in de training zien wat je kunt"], "Ook vanaf de bank help je je team."),
  TS("Het regent en de training gaat niet door", "Je wilde graag spelen.", ["Doe een training binnen bij Thuis","Oefen met een bal in de gang","Kijk een filmpje over je positie"], "Een afgelaste training is een kans om iets anders te oefenen.")
);
FOCUS_TIPS.push(
  FT("Elke dag hetzelfde moment", "Een vaste tijd maakt trainen makkelijker.", "Train elke dag op hetzelfde moment, bijvoorbeeld na school.", "Thuis")
);
LEIDER.push(
  LT("Zeg dankjewel tegen de trainer", "Een trainer doet veel voor het team.", "Zeg na de training dankjewel.", "Respect maakt een team sterker.")
);
MOTIVATION.push(
  "Kleine stappen maken grote spelers.", "Vandaag niet opgeven is morgen sterker zijn.", "Je bent alleen klaar als je klaar bent.",
  "Beter worden is een keuze die je elke dag maakt."
);
PREVENTIE.push(
  PV("🍳", "#E2541B", "Goed eten voor je spieren", "Hele lichaam", "Wie goed eet, herstelt sneller.", "Eet eiwitten na de training, bijvoorbeeld kwark, ei of kip.", "Binnen een uur na het sporten", "")
);
TIPS.push(
  LH("Kook eens zelf", "Zelf koken is leuk en je weet wat je eet.", "Kies een recept bij Gezond en bekijk het filmpje.", "eten"),
  LH("Groente bij elke maaltijd", "Groente geeft vitamines voor herstel.", "Zorg dat de helft van je bord groente is.", "eten")
);
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = typeof x === "string" ? x : x[key] || x.title || x.titel; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [RECEPTEN, DRILLS, IQ_LESSONS, DAILY_LESSONS, TEGENSLAG, FOCUS_TIPS, LEIDER, MOTIVATION, PREVENTIE, TIPS].forEach(a => dedupe(a));
})();
