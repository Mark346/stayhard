// Stay Hard – vierentwintigste uitbreiding: vooral meer spelers op de posities met de minste spelers, en meer van alles.

// ---------- Extra spelers (backs en rechtsbuiten) ----------
(() => {
  const extra = {
    lb: SPN("Verdediger", [
      ["Alejandro Grimaldo", "Een linksback met een geweldige linkervoet, gevaarlijk bij vrije trappen en voorzetten.", ["Linkervoet","Vrije trappen","Assists"], "Een back kan ook een spelmaker zijn.", "Oefen gekrulde voorzetten en vrije trappen met links."],
      ["Ferland Mendy", "Een linksback die vooral heel goed verdedigt.", ["Één-tegen-één verdedigen","Kracht","Rust"], "Eerst verdedigen is de basis van elke back.", "Oefen één-tegen-één verdedigen langs de lijn."],
      ["Andy Robertson (overlap)", "Altijd onderweg met overlappende loopacties en voorzetten.", ["Overlappen","Voorzetten","Werklust"], "Overlappen maakt het veld groot.", "Oefen overlappen met een vleugelspeler."],
      ["Ian Maatsen", "Een snelle, technische linksback die graag naar binnen dribbelt.", ["Snelheid","Dribbelen","Durf"], "Durf met de bal naar voren te gaan.", "Dribbel vanuit de verdediging naar het middenveld."],
      ["Federico Dimarco", "Een linksback met een geweldige trap: voorzetten, vrije trappen en schoten.", ["Trap","Voorzetten","Afstandsschoten"], "Een goede trap is overal op het veld een wapen.", "Oefen voorzetten op een vak."],
      ["Paolo Maldini (als back)", "Ook als linksback perfect: rustig, slim en bijna nooit fout.", ["Positie","Rust","Tackles"], "Perfect verdedigen kan er heel rustig uitzien.", "Oefen het timen van een tackle."],
      ["Micky van de Ven (links)", "Supersnel, ook als linksback inzetbaar.", ["Snelheid","Inlopen","Linksbenig"], "Snelheid achterin is een groot voordeel.", "Doe sprints waarin je iemand moet inlopen."]
    ]),
    rb: SPN("Verdediger", [
      ["Gary Neville", "Een betrouwbare rechtsback en leider die altijd hard werkte.", ["Betrouwbaar","Leiderschap","Verdedigen"], "Betrouwbaar zijn is net zo belangrijk als talent.", "Doe elke training je taak perfect."],
      ["Javier Zanetti", "Een supersterke, fitte back die tot hoge leeftijd speelde.", ["Fitheid","Werklust","Veelzijdigheid"], "Fitheid en discipline houden je lang aan de top.", "Doe elke week je preventie-oefeningen."],
      ["Jules Koundé", "Een snelle verdediger die centraal en als rechtsback speelt.", ["Snelheid","Tackles","Opbouwen"], "Een snelle verdediger kan overal spelen.", "Oefen tackles op snelheid."],
      ["Pedro Porro", "Een aanvallende rechtsback met een goede voorzet.", ["Voorzetten","Aanvallen","Afstandsschoten"], "Een back die aanvalt, maakt het spel breed.", "Oefen voorzetten op snelheid."],
      ["Noussair Mazraoui", "Een technische rechtsback die rustig opbouwt.", ["Techniek","Rust","Combineren"], "Rust aan de bal achterin geeft het team vertrouwen.", "Speel een rondo als back."],
      ["Achraf Hakimi (snelheid)", "Een van de snelste backs ter wereld, gevaarlijk in de diepte.", ["Topsnelheid","Diepte","Afronden"], "Snelheid maakt van een back een aanvaller.", "Doe 6 sprints van 40 meter."]
    ]),
    rw: SPN("Aanvaller", [
      ["Arjen Robben (naar binnen)", "Altijd naar binnen snijden op links en dan schieten in de verre hoek.", ["Naar binnen snijden","Schot","Versnellen"], "Ook als iedereen weet wat je doet, kun je het perfect uitvoeren.", "Oefen 20 keer naar binnen snijden en schieten."],
      ["Mohamed Salah (afronden)", "Een rechtsbuiten die scoort als een spits.", ["Afronden","Loopacties","Snelheid"], "Een buitenspeler kan ook topscorer zijn.", "Oefen loopacties naar de tweede paal."],
      ["Cristiano Ronaldo (jong, rechtsbuiten)", "Als jonge speler een snelle dribbelaar met veel stepovers op de rechterkant.", ["Stepovers","Snelheid","Durf"], "Zelfs de grootsten begonnen als dribbelaar.", "Oefen stepovers op snelheid.", "young ronaldo dribbling"],
      ["Joaquín", "Een snelle, grappige rechtsbuiten die altijd plezier had.", ["Snelheid","Voorzetten","Plezier"], "Plezier maakt je beter.", "Speel een partijtje met als doel: plezier en durf."],
      ["Gianluca Zambrotta (als buitenspeler)", "Snel en sterk, zowel buitenspeler als back.", ["Snelheid","Veelzijdigheid","Werklust"], "Veelzijdigheid maakt je waardevol.", "Speel een training als back en als buitenspeler."],
      ["Jeremy Doku", "Een supersnelle dribbelaar die tegenstanders steeds passeert.", ["Dribbelen","Versnellen","Lef"], "Durf steeds weer de actie te maken.", "Oefen versnellen na een schijnbeweging."],
      ["Leroy Sané", "Een snelle buitenspeler met een geweldige linkervoet.", ["Snelheid","Schieten","Versnellen"], "Snelheid en een goed schot zijn een gevaarlijke combinatie.", "Schiet na een sprint met de bal."],
      ["Federico Chiesa", "Een snelle, felle buitenspeler die met beide voeten schiet.", ["Tweebenig","Snelheid","Inzet"], "Twee goede voeten maken je onvoorspelbaar.", "Schiet 10 keer met links en 10 keer met rechts."]
    ])
  };
  const have = new Set(SPELERS.map(p => p.name));
  Object.entries(extra).forEach(([pos, lijst]) => lijst.forEach(p => {
    const naam = p.name.replace(/ \([^)]*\)$/, ""), pp = POSITIES.find(x => x.id === pos);
    if (have.has(naam)) { if (pp && !pp.spelers.includes(naam)) pp.spelers.push(naam); return; }
    p.name = naam; delete p._pos; have.add(naam); SPELERS.push(p); if (pp) pp.spelers.push(naam);
  }));
})();

// ---------- Boeken ----------
BOEKEN.push(
  BK("Het Voetbalboek voor kinderen", "diverse auteurs", "Voetbal en kennis", "8+", "Een kinderboek vol weetjes over voetbal, spelers, regels en geschiedenis.", "Leuk om in te bladeren en te leren.", "voetbalboek voor kinderen"),
  BK("Kick", "Mitch Johnson", "Voetbal (verhaal)", "10+", "Over een jongen in een fabriek die droomt van profvoetbal.", "Een verhaal over dromen en de echte wereld achter voetbal."),
  BK("Stick with It", "Sean Young", "Inspiratie", "15+", "Over hoe je gewoontes maakt die je volhoudt.", "Praktische tips om vol te houden."),
  BK("Think Like a Monk", "Jay Shetty", "Inspiratie", "15+", "Over rust in je hoofd, doelen en goede gewoontes.", "Leer hoe je rustig en gefocust blijft."),
  BK("The Champion's Mind", "Jim Afremow", "Inspiratie en sport", "15+", "Een sportpsycholoog over hoe topsporters denken.", "Mentale tips die je op het veld kunt gebruiken."),
  BK("Mental Toughness for Young Athletes", "diverse auteurs", "Inspiratie en sport", "12+", "Boeken over mentale weerbaarheid voor jonge sporters.", "Leer omgaan met zenuwen, fouten en druk.", "mental toughness young athletes book")
);

// ---------- Recepten ----------
RECEPTEN.push(
  RC("Ontbijt", "Volkoren pannenkoekjes met banaan en kaneel", "15 min", "2 personen", ["Volkorenmeel","Melk","1 ei","Banaan","Kaneel"], ["Maak een beslag van meel, melk en ei.","Bak kleine pannenkoekjes.","Eet met banaan en kaneel."], "Een sportief weekendontbijt.", "Ook lekker met kwark."),
  RC("Ontbijt", "Ei in een avocado", "15 min", "1 persoon", ["1 avocado","2 eieren","Peper"], ["Halveer de avocado en haal de pit eruit.","Breek een ei in elke helft.","Bak 12 minuten in de oven op 200 graden."], "Gezonde vetten en eiwitten.", "Vraag hulp bij de oven."),
  RC("Voor het sporten", "Rijstwafel met kwark en banaan", "3 min", "1 persoon", ["2 rijstwafels","Kwark","Banaan"], ["Smeer kwark op de rijstwafels.","Leg banaan erop."], "Licht en vol energie.", "Een uur voor de training."),
  RC("Na het sporten", "Tonijnsalade met volkoren crackers", "5 min", "1 persoon", ["Tonijn op water","Yoghurt","Komkommer","Volkoren crackers"], ["Meng tonijn met yoghurt en komkommer.","Eet op crackers."], "Snelle eiwitten na de training.", "Ook lekker op brood."),
  RC("Na het sporten", "Chocolade-banaan herstelshake", "5 min", "1 persoon", ["Melk","1 banaan","Theelepel ongezoete cacao","Lepel havermout"], ["Mix alles in de blender."], "Smaakt als chocolademelk, maar dan gezonder.", "Met ijsblokjes is hij extra fris."),
  RC("Lunch", "Volkoren broodje kip-kerrie", "10 min", "1 persoon", ["Volkoren broodje","Kipreepjes","Yoghurt","Beetje kerrie","Sla"], ["Meng kip met yoghurt en kerrie.","Beleg het broodje met sla en kip."], "Eiwitten en een lekkere smaak.", "Niet te veel kerrie."),
  RC("Avondeten", "Kip-groente tray bake", "40 min", "4 personen", ["Kipfilet","Paprika, ui, courgette, broccoli","Krieltjes","Olijfolie en kruiden"], ["Snijd alles en leg op een bakplaat.","Besprenkel met olie en kruiden.","Bak 35 minuten op 200 graden."], "Alles uit één bakplaat: makkelijk en gezond.", "Vraag hulp bij de oven."),
  RC("Avondeten", "Spaghetti met linzensaus", "30 min", "4 personen", ["Volkoren spaghetti","Rode linzen","Passata","Ui en wortel"], ["Bak ui en wortel.","Doe linzen en passata erbij en kook 15 minuten.","Eet met spaghetti."], "Een plantaardige bolognese vol eiwitten.", "Je proeft bijna geen verschil."),
  RC("Zoet & gezond", "Banaan-pindakaas ijs", "5 min + vriezer", "2 personen", ["3 bevroren bananen","Lepel pindakaas"], ["Mix tot romig ijs."], "Romig ijs met eiwitten.", "Strooi er een paar noten op."),
  RC("Zoet & gezond", "Havermout-pindakaas balletjes", "15 min", "12 balletjes", ["Havermout","Pindakaas","Beetje honing","Rozijnen"], ["Meng alles.","Rol balletjes.","Zet een uur in de koelkast."], "Een gezonde snack voor in je sporttas.", "Bewaar in de koelkast."),
  RC("Zoet & gezond", "Bosbessen-muffins met yoghurt", "30 min", "8 muffins", ["Havermout","2 eieren","Yoghurt","2 bananen","Bosbessen","Bakpoeder"], ["Mix havermout, eieren, yoghurt en banaan.","Roer bakpoeder en bessen erdoor.","Bak 20 minuten op 180 graden."], "Muffins vol fruit en eiwitten.", "Neem er één mee naar school."),
  RC("Zoet & gezond", "Zomerse fruitspiesjes met yoghurtdip", "10 min", "4 personen", ["Aardbeien, druiven, meloen","Yoghurt","Beetje honing"], ["Prik het fruit aan spiesjes.","Meng yoghurt met honing als dip."], "Een vrolijke traktatie.", "Leuk om uit te delen."),
  RC("Drankjes", "IJsthee zonder suiker", "10 min + koelkast", "1 kan", ["Thee","Citroen","Munt","Water"], ["Zet thee en laat afkoelen.","Doe citroen en munt erbij.","Zet koud."], "Fris drinken zonder suiker.", "Lekker in de zomer.")
);

// ---------- Voetbaloefeningen ----------
DRILLS.push(
  D("Één keer raken in een driehoek", "Gemiddeld", "10 min", "Pass met drie spelers in een driehoek, alleen in één keer.", ["Driehoek van 8 meter","Eén keer raken","Na de pass verplaats je je"], "triangle one touch passing", {mates:[[50,30],[110,30]], me:[80,75], ball:[86,73], paths:[{d:"M84 72 L54 34",t:"ball"}]}),
  D("Bal afpakken: eerste die hem raakt", "Makkelijk", "8 min", "Een maatje rolt de bal, jullie sprinten er allebei naartoe.", ["Bal rolt weg","Sprint","Wie hem eerst heeft, scoort op een doeltje"], "race to the ball", {me:[30,40], foe:[30,60], ball:[100,50], paths:[{d:"M36 40 L94 48",t:"run"}]}),
  D("Lobben op een doeltje", "Moeilijk", "10 min", "Lob de bal over een pion in een klein doel.", ["Pion als keeper","Raak de bal onderaan","Laat hem erover vallen"], "chip shot practice", {goal:true, me:[90,50], cones:[[130,50]], ball:[96,50], paths:[{d:"M96 50 Q120 20 144 46",t:"ball"}]}),
  D("Snel draaien met de zool", "Gemiddeld", "8 min", "Dribbel, zet je zool op de bal en draai in één beweging om.", ["Dribbel","Zool op de bal","Draai en ga terug"], "sole drag turn", {me:[60,50], ball:[68,50], paths:[{d:"M68 50 L100 50",t:"ball"},{d:"M100 56 L60 56",t:"ball"}]}),
  D("Voorzetten op de eerste paal", "Gemiddeld", "10 min", "Geef lage, harde voorzetten op de eerste paal.", ["Vanaf de achterlijn","Laag en hard","Mik op de eerste paal"], "near post cross", {goal:true, me:[110,15], ball:[116,18], paths:[{d:"M116 18 L136 34",t:"ball"}]}),
  D("Koppen na een sprint", "Zwaar", "8 min", "Sprint 10 meter en kop een gegooide bal.", ["Sprint naar je maatje","Hij gooit","Kop terug"], "sprint and header", {me:[30,50], mates:[[110,50]], paths:[{d:"M36 50 L96 50",t:"run"}]}),
  D("Partijtje met verplicht zwakke voet", "Gemiddeld", "15 min", "Speel een partijtje waarin je alleen je zwakke voet mag gebruiken.", ["Iedereen alleen zwakke voet","Kleine doeltjes","Wie scoort het meest?"], "weak foot only game", {me:[60,50], mates:[[60,80]], foes:[[100,50]], ball:[66,50]}),
  D("Keeper: vangen en uitgooien", "Gemiddeld", "10 min", "Vang een schot en gooi de bal meteen uit naar een maatje.", ["Vang het schot","Kijk op","Gooi uit naar de vrije speler"], "goalkeeper catch and distribute", {goalLeft:true, me:[24,50], mates:[[90,20]], ball:[30,50], paths:[{d:"M30 48 Q60 20 86 22",t:"ball"}]})
);

// ---------- Voetbal IQ ----------
IQ_LESSONS.push(
  IQ("Kijk waar de keeper staat bij een vrije trap", "Een keeper die naar één kant leunt, laat de andere kant open.", "Schiet naar de kant waar hij niet staat.", {goal:true, me:[70,50], cones:[[110,44],[110,56]], ball:[78,50]}),
  IQ("Speel niet altijd naar je beste vriend", "De beste pass gaat naar wie het best staat.", "Kies op positie, niet op wie je het leukst vindt.", {me:[50,50], mates:[[80,20],[100,60]], foe:[90,25], ball:[56,50], paths:[{d:"M56 52 L96 60",t:"ball"}]}),
  IQ("Win tijd met de bal als je voorstaat", "Met een voorsprong kun je de bal houden.", "Speel rustig rond en neem geen risico's.", {mates:[[40,30],[40,70],[80,50]], me:[60,50], ball:[66,50]}),
  IQ("Speel snel bij een achterstand", "Achter staan betekent: tijd is kostbaar.", "Neem spelhervattingen snel en speel naar voren.", {me:[40,50], mates:[[100,40]], ball:[46,50], paths:[{d:"M46 48 L96 42",t:"ball"}]}),
  IQ("De verdediger naar je toe lokken", "Een verdediger die naar jou komt, laat ruimte achter.", "Dribbel naar hem toe en speel dan de bal achter hem.", {me:[60,50], foe:[80,50], mates:[[90,25]], ball:[66,50], paths:[{d:"M66 48 L96 28",t:"ball"}]})
);

// ---------- Daglessen ----------
DAILY_LESSONS.push(
  L("Afschermen met je lichaam", "Afschermen houdt de bal bij jou.", "Wie de bal kan houden, geeft zijn team tijd.", ["Zet je lichaam tussen de bal en je tegenstander.","Buig je knieën.","Houd de bal aan je verste voet."], "Oefen 5 keer 20 seconden afschermen tegen een vriend.", "Rechtop staan en de bal dichtbij je tegenstander houden.", "Lichaam ertussen, laag, verste voet."),
  L("Een vrije trap snel nemen", "Een snelle vrije trap verrast de tegenstander.", "Een verdediging die niet staat, is kwetsbaar.", ["Leg de bal snel neer.","Kijk direct of iemand vrij staat.","Speel snel in."], "Speel een partijtje waarin je vrije trappen binnen 3 seconden neemt.", "Wachten tot iedereen klaarstaat.", "Snel kijken, snel spelen."),
  L("Positie houden bij een counter van de tegenstander", "Bij een counter moet je snel kiezen.", "Goed terugsprinten voorkomt een goal.", ["Sprint naar het midden.","Pak de gevaarlijkste man op.","Vertraag de aanval."], "Oefen terugsprinten na balverlies in een partijtje.", "Achter de bal aan rennen zonder plan.", "Midden eerst, gevaarlijkste man oppakken."),
  L("Een penalty als keeper", "Een penalty stoppen kun je trainen.", "Rust en timing maken het verschil.", ["Sta op de lijn.","Kijk naar de heupen van de nemer.","Spring pas als de bal geraakt wordt."], "Laat 10 penalty's nemen en wacht tot het laatste moment.", "Te vroeg duiken.", "Rustig en pas springen als de bal geraakt wordt.")
);

// ---------- Mindset ----------
TEGENSLAG.push(
  TS("Je wordt niet gekozen voor een toernooi", "Teleurgesteld.", ["Vraag waarom","Train er extra op","Steun je team toch"], "Volgende keer ben je er klaar voor."),
  TS("Je hebt een slechte warming-up en voelt je stijf", "Twijfel.", ["Doe nog een paar sprintjes","Focus op je eerste actie","Vertrouw op je training"], "Een warming-up zegt niets over je wedstrijd."),
  TS("Je teamgenoot krijgt alle aandacht", "Je voelt je vergeten.", ["Wees blij voor hem","Doe je eigen taak goed","Je inzet wordt gezien"], "Elke speler is belangrijk voor het team."),
  TS("Je hebt een blessure en mist de zaterdagwedstrijd", "Verdrietig.", ["Ga kijken en moedig aan","Doe je herstel goed","Kijk naar de volgende zaterdag"], "Een gemiste wedstrijd is geen gemist seizoen.")
);
MOTIVATION.push(
  "Morgen begint vandaag: zet je taken klaar.", "Een plan voor morgen geeft rust vandaag.", "Kijk naar de beste op jouw positie en word beter.",
  "Elke positie, elke speler, elke dag een les.", "Wie voorbereidt, presteert.", "Je toekomst schrijf je vandaag."
);

// ---------- Blessures voorkomen ----------
PREVENTIE.push(
  PV("📅", "#4338CA", "Plan je rust", "Hele lichaam", "Wie rust plant, raakt minder snel overbelast.", "Zet je rustdag in je planner.", "Elke week", ""),
  PV("🧘", "#0891B2", "Rekken na de zaterdag", "Benen", "Na de wedstrijd zijn je benen moe.", "Doe de strekroutine 'Na de zaterdagwedstrijd'.", "12 minuten", ""),
  PV("🦵", "#DB2777", "Liezen soepel na het schieten", "Lies", "Na veel schieten kunnen je liezen stijf zijn.", "Vlinder en lies rekken na de training.", "1 minuut", "Vlinder")
);

// ---------- Opruimen ----------
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = typeof x === "string" ? x : x[key] || x.title || x.titel; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [DRILLS, IQ_LESSONS, DAILY_LESSONS, TEGENSLAG, MOTIVATION, PREVENTIE, RECEPTEN, BOEKEN].forEach(a => dedupe(a));
  dedupe(SPELERS, "name");
  POSITIES.forEach(p => { p.spelers = [...new Set(p.spelers)]; });
})();
