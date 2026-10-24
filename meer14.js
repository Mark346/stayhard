// Stay Hard – veertiende uitbreiding: weer meer van alles (niet de taken-ideeën en niet de records).

// ---------- Voetbaloefeningen ----------
DRILLS.push(
  D("Aanname met je buitenkant en versnellen", "Gemiddeld", "8 min", "Neem de bal met je buitenkant mee opzij en versnel direct.", ["Pass tegen de muur of krijg een pass","Neem mee met je buitenkant","Versnel 5 meter"], "outside foot first touch", {wall:true, me:[60,50], ball:[70,50], paths:[{d:"M140 50 L70 50",t:"ball"},{d:"M66 52 L50 75",t:"ball"}]}),
  D("Dribbelen in een vierkant", "Makkelijk", "8 min", "Dribbel in een vierkant van pionnen en raak de bal elke stap.", ["Vier pionnen op 5 meter","Dribbel langs de rand","Wissel na elk rondje van richting"], "box dribbling", {cones:[[50,25],[110,25],[50,75],[110,75]], me:[50,50], ball:[56,50], paths:[{d:"M56 50 L56 30 L104 30 L104 70 L56 70 Z",t:"ball"}]}),
  D("Twee-tegen-één aanvallen", "Gemiddeld", "10 min", "Met z'n tweeën tegen één verdediger: wanneer pass je, wanneer dribbel je?", ["Veldje van 15 bij 20 meter","Twee aanvallers, één verdediger","Scoor in een klein doeltje"], "2v1 attacking drill", {goal:true, me:[50,40], mates:[[50,70]], foe:[90,55], ball:[56,40], paths:[{d:"M56 42 L54 66",t:"ball"},{d:"M50 36 L110 36",t:"run"}]}),
  D("Kaatsen met je dij", "Gemiddeld", "5 min", "Gooi de bal op en kaats hem met je dij naar je voet.", ["Gooi de bal op heuphoogte","Kaats met je dij","Neem aan en pass"], "thigh control drill", {me:[70,50], ball:[70,36], paths:[{d:"M70 36 L70 46",t:"ball"}]}),
  D("Schieten na een dribbel om een pion", "Gemiddeld", "10 min", "Dribbel om een pion heen en schiet direct.", ["Pion op 18 meter van het doel","Dribbel eromheen","Schiet binnen 2 aanrakingen"], "dribble cone shoot", {goal:true, cones:[[90,50]], me:[50,50], ball:[58,50], paths:[{d:"M58 50 L84 50 Q96 40 100 52 L144 34",t:"ball"}]}),
  D("Eerste aanraking weg van druk", "Moeilijk", "10 min", "Een teamgenoot loopt achter je aan. Neem aan, weg van hem.", ["Teamgenoot achter je","Krijg een pass","Neem aan weg van de druk"], "first touch away from pressure", {me:[80,50], foe:[92,50], mates:[[30,50]], ball:[36,50], paths:[{d:"M36 50 L74 50",t:"ball"},{d:"M80 54 L66 74",t:"run"}]}),
  D("Lange bal naar een teamgenoot", "Gemiddeld", "10 min", "Speel lange ballen naar een teamgenoot op 25 meter.", ["Teamgenoot op 25 meter","Raak de bal onder het midden","Hij neemt aan en speelt terug"], "long pass drill", {me:[30,60], mates:[[130,30]], ball:[38,60], paths:[{d:"M38 60 Q84 10 126 32",t:"ball"}]}),
  D("Snel terug na balverlies", "Zwaar", "10 min", "Verlies je de bal in een partijtje? Sprint direct terug of zet druk.", ["Partijtje 3-tegen-3","Balverlies = direct druk","Lukt het niet in 5 seconden? Terug in positie"], "transition defending", {me:[90,50], foe:[100,50], ball:[104,50], paths:[{d:"M90 54 L60 70",t:"run"}]}),
  D("Kopbal-volleybal", "Makkelijk", "10 min", "Speel met een vriend alleen met je hoofd over een lijn of touw.", ["Leg een lijn neer","Kop de bal over de lijn","Wie hem laat vallen, verliest een punt"], "head tennis", {me:[50,50], mates:[[110,50]], line:80, ball:[56,40], paths:[{d:"M56 40 Q80 10 104 40",t:"ball"}]}),
  D("Panna-uitdaging met pionnen", "Moeilijk", "8 min", "Speel de bal tussen twee pionnen door die dicht bij elkaar staan, en pak hem erachter.", ["Pionnen 40 cm uit elkaar","Duw de bal ertussen door","Loop eromheen en pak hem"], "nutmeg practice cones", {cones:[[90,46],[90,54]], me:[70,50], ball:[78,50], paths:[{d:"M78 50 L106 50",t:"ball"},{d:"M70 44 Q90 30 106 46",t:"run"}]}),
  D("Sprint, stop, draai", "Zwaar", "8 min", "Dribbel snel, stop de bal ineens en draai de andere kant op.", ["Dribbel 10 meter","Stop met je zool","Draai en dribbel terug"], "stop and turn drill", {me:[30,50], ball:[38,50], paths:[{d:"M38 50 L110 50",t:"ball"},{d:"M110 56 L40 56",t:"ball"}]}),
  D("Vrije trap laag onder de muur", "Moeilijk", "10 min", "Schiet hard en laag, zoals onder een springend muurtje.", ["Leg een stok of lijn neer als muurtje","Schiet laag en hard","Mik op de hoek"], "low free kick", {goal:true, me:[40,50], ball:[48,50], cones:[[90,44],[90,56]], paths:[{d:"M48 50 L144 70",t:"ball"}]}),
  D("Rondo vier-tegen-twee", "Gemiddeld", "10 min", "Met vier rond de bal, twee in het midden.", ["Vak van 10 bij 10 meter","Maximaal twee keer raken","Na 10 passes een punt"], "rondo 4v2", {mates:[[50,25],[110,25],[50,75]], me:[110,75], foes:[[75,45],[90,58]], ball:[104,73], paths:[{d:"M104 72 L56 28",t:"ball"}]}),
  D("Wedstrijdje schieten op tijd", "Gemiddeld", "10 min", "Hoeveel goals maak je in 1 minuut vanaf 11 meter?", ["Leg 6 ballen klaar","Start de tijd","Schiet zo snel en zuiver mogelijk"], "shooting speed challenge", {goal:true, me:[60,50], ball:[68,50], paths:[{d:"M68 50 L144 30",t:"ball"}]}),
  D("Achterwaarts dribbelen", "Gemiddeld", "5 min", "Trek de bal met je zool achteruit terwijl je terugloopt.", ["Zool op de bal","Trek terug en stap","Wissel van voet"], "backwards dribbling sole", {me:[110,50], ball:[104,50], paths:[{d:"M104 50 L40 50",t:"ball"}]})
);

// ---------- Voetbal IQ ----------
IQ_LESSONS.push(
  IQ("Kijk voor je een ingooi neemt", "Een ingooi is een pass met je handen.", "Kijk wie vrij staat en gooi naar zijn voeten.", {me:[20,50], mates:[[50,30],[60,70]], foes:[[56,34]], ball:[22,46], paths:[{d:"M22 48 L56 66",t:"ball"}]}),
  IQ("Laat de bal het werk doen bij hitte", "Als het warm is, ben je sneller moe.", "Speel meer de bal rond en ren slimmer.", {mates:[[40,30],[80,70],[120,30]], me:[80,30], ball:[86,30], paths:[{d:"M86 32 L116 32",t:"ball"}]}),
  IQ("Speel de bal naar voren als het kan", "Een pass naar voren is altijd de eerste keuze.", "Kijk eerst vooruit, dan opzij, dan pas terug.", {me:[60,50], mates:[[110,40],[60,15],[20,50]], ball:[66,50], paths:[{d:"M66 48 L106 42",t:"ball"}]}),
  IQ("Ga niet allemaal naar de bal", "Als iedereen naar de bal rent, is de rest van het veld leeg.", "Blijf in je zone en bied je aan op een andere plek.", {zones:true, me:[100,20], mates:[[70,50],[60,80]], foe:[80,50], ball:[84,50]}),
  IQ("De verste vrije man", "Soms staat de verste speler het meest vrij.", "Kijk altijd even naar de andere kant van het veld.", {me:[40,80], mates:[[120,15]], foes:[[60,70],[70,80]], ball:[46,80], paths:[{d:"M46 78 Q90 20 116 18",t:"ball"}]}),
  IQ("Wachten met een tackle", "Een verdediger die blijft staan, is moeilijker te passeren.", "Ga pas naar de bal als de aanvaller hem te ver voor zich legt.", {me:[90,50], foe:[60,50], ball:[68,50]}),
  IQ("Maak je klein bij een schot", "Draai je niet weg bij een schot, maar blokkeer met je lichaam.", "Houd je armen achter je rug om hands te voorkomen.", {me:[100,50], foe:[70,50], ball:[78,50], goal:true}),
  IQ("Ruimte achter de verdediging", "Als de verdediging hoog staat, is er ruimte erachter.", "Loop diep op het moment dat je teamgenoot opkijkt.", {line:90, me:[80,30], mates:[[40,50]], ball:[46,50], paths:[{d:"M84 30 L130 40",t:"run"},{d:"M46 48 L126 42",t:"ball"}]}),
  IQ("Speel in de loop", "Een pass voor iemand uit is beter dan op zijn voeten als hij rent.", "Mik op de plek waar hij naartoe loopt.", {me:[40,60], mates:[[80,30]], ball:[46,60], paths:[{d:"M84 30 L120 30",t:"run"},{d:"M46 58 L116 32",t:"ball"}]}),
  IQ("Na een kopbal: blijf staan in je zone", "Na een kopduel valt de bal vaak in de buurt.", "Blijf scherp voor de tweede bal.", {me:[80,60], foe:[84,40], ball:[80,30]})
);

// ---------- Thuis- en krachtoefeningen (houding hergebruikt) ----------
(() => {
  const pz = t => { const x = [...KRACHT, ...EXERCISES].find(k => k.title === t); return x ? x.poses : null; };
  const haveE = new Set(EXERCISES.map(x => x.title)), haveK = new Set(KRACHT.map(x => x.title));
  const addE = (title, target, reps, text, yt, like) => { const poses = pz(like); if (poses && !haveE.has(title)) { haveE.add(title); EXERCISES.push(XE(title, target, reps, text, yt, poses)); } };
  const addK = (title, target, reps, text, why, yt, like) => { const poses = pz(like); if (poses && !haveK.has(title)) { haveK.add(title); KRACHT.push(KR(title, target, reps, text, why, yt, poses)); } };
  addE("Squat met hakken omhoog", "Benen en kuiten", "3 x 12", "Squat en kom bovenaan op je tenen.", "squat calf raise", "Squats");
  addE("Lunge met pauze onderin", "Benen", "3 x 8 per been", "Blijf 2 tellen onderin in de lunge.", "pause lunge", "Lunges");
  addE("Plank met knietik", "Buik", "3 x 10", "Tik in een plank om de beurt met je knie de grond.", "plank knee taps", "Plank");
  addE("Zijplank op je knie", "Zijkant buik", "3 x 20 sec per kant", "Een makkelijkere zijplank, met je knie op de grond.", "modified side plank", "Zijplank");
  addE("Langzame bergbeklimmers", "Buik en heupen", "3 x 12", "Breng je knie heel langzaam naar je borst.", "slow mountain climbers", "Mountain climbers");
  addE("Bruggetje met knijpen", "Billen en lies", "3 x 12", "Maak een bruggetje met een kussen tussen je knieën en knijp.", "glute bridge squeeze", "Bruggetje");
  addE("Superman met zwemmen", "Rug", "3 x 20 sec", "Lig op je buik, til armen en benen op en beweeg ze alsof je zwemt.", "superman swimmers", "Superman");
  addE("Sumo squat met pauze", "Benen en lies", "3 x 10", "Brede squat, wacht 2 tellen onderin.", "sumo squat pause", "Sumo squat");
  addK("Copenhagen plank met beweging", "Lies en romp", "2 x 8 per kant", "Beweeg in de copenhagen plank je heup langzaam op en neer.", "sterke liezen bij schieten en draaien.", "copenhagen plank dips", "Copenhagen plank");
  addK("Nordic hamstring met pauze", "Achterkant been", "2 x 4", "Stop halverwege 2 tellen en zak dan verder.", "nog sterkere hamstrings tegen blessures.", "nordic curl pause", "Nordic hamstring");
  addK("Eenbenige squat naar een stoel", "Bovenbenen en balans", "3 x 6 per been", "Zak op één been tot je de stoel raakt en kom weer omhoog.", "kracht en balans op één been, zoals in een wedstrijd.", "single leg sit to stand", "Eenbenige squat op een bank");
  addK("Zijwaartse sprong met stille landing", "Enkels en heupen", "3 x 6 per kant", "Spring opzij op één been en land 2 tellen stil.", "stabiele enkels bij wendingen.", "lateral bound stick", "Zijwaartse sprong op één been");
  addK("Hip thrust met band", "Billen", "3 x 12", "Hip thrust met een band om je knieën, duw je knieën naar buiten.", "sterke heupen voor sprint en duel.", "banded hip thrust", "Hip thrust op de bank");
  addK("Plank met rugzak", "Buik", "3 x 30 sec", "Een plank met een lichte rugzak op je rug.", "een stevige romp in duels.", "weighted plank", "Plank op ellebogen");
})();

// ---------- Daglessen ----------
DAILY_LESSONS.push(
  L("Je lichaam open bij een aanname", "Een open lichaam laat je zien wat er voor je gebeurt.", "Wie open staat, kan meteen vooruit spelen.", ["Draai je heupen half naar het veld.","Neem aan met je verste voet.","Kijk direct vooruit."], "Oefen 20 aannames met je verste voet tegen de muur.", "Met je rug naar het spel aannemen.", "Half open staan en aannemen met je verste voet."),
  L("De pass in de loop", "Een goede pass komt voor je teamgenoot uit, niet achter hem.", "Dan hoeft hij niet in te houden.", ["Kijk waar je teamgenoot naartoe loopt.","Speel naar die plek.","Speel strak genoeg."], "Pass 20 keer naar een plek waar een teamgenoot naartoe loopt.", "Op de voeten spelen van iemand die rent.", "Speel naar de plek waar hij straks is."),
  L("Een duel op de grond winnen", "Duels win je met timing en lage houding.", "Wie laag staat, verliest minder snel zijn balans.", ["Zak door je knieën.","Zet je lichaam tussen bal en tegenstander.","Speel de bal, niet de man."], "Oefen 10 duels met een vriend en let op je lage houding.", "Rechtop staan en duwen.", "Laag, lichaam ertussen, bal spelen."),
  L("De verdediger uitspelen met tempo", "Snelheid wisselen is soms sterker dan een trucje.", "Een verdediger kan niet goed reageren op een ineens snellere aanvaller.", ["Dribbel rustig naar de verdediger.","Laat hem stilstaan.","Versnel ineens langs hem."], "Dribbel 10 keer langzaam naar een pion en versnel er vlak voor langs.", "Steeds even snel dribbelen.", "Rustig aankomen, ineens versnellen."),
  L("Een strakke voorzet", "Een strakke, lage voorzet is moeilijk te verdedigen.", "Verdedigers en keeper hebben minder tijd.", ["Kijk waar je spitsen lopen.","Raak de bal met je wreef of binnenkant.","Speel tussen keeper en verdediging."], "Geef 15 voorzetten op een vak tussen doel en penaltystip.", "Een hoge, zachte bal die iedereen ziet aankomen.", "Strak en tussen keeper en verdediging."),
  L("Afronden in de korte hoek", "Soms is de korte hoek open.", "Een keeper verwacht het vaak niet.", ["Kijk naar de keeper.","Staat hij te ver naar de verre paal? Schiet kort.","Schiet hard en laag."], "Schiet 15 keer schuin op doel en kies elke keer de korte hoek.", "Altijd automatisch de verre hoek kiezen.", "Kijk naar de keeper en kies de open hoek."),
  L("Positie bij een tegenaanval", "Bij een counter van de tegenstander is je positie belangrijk.", "Goed staan voorkomt een tegengoal.", ["Sprint terug naar het midden.","Kijk waar de gevaarlijkste speler is.","Dwing hem naar de zijkant."], "Speel een partijtje en oefen bij elke counter de terugsprint.", "Achter de bal aanrennen.", "Terug naar het midden, gevaarlijkste man oppakken."),
  L("Spelen met de wind", "Wind verandert hoe de bal vliegt.", "Wie de wind snapt, speelt slimmer.", ["Wind mee: speel laag, anders vliegt hij te ver.","Wind tegen: schiet hard en laag.","Zijwind: mik iets meer opzij."], "Geef 10 lange ballen met en 10 tegen de wind.", "Hoge ballen tegen de wind.", "Laag spelen als het hard waait."),
  L("Een vrije trap nemen", "Een vrije trap is een kans die je kunt oefenen.", "Veel goals vallen uit vrije trappen.", ["Kies: over de muur of naast de muur.","Neem een vaste aanloop.","Raak de bal met je binnenkant voor een krul."], "Schiet 15 vrije trappen over een muurtje van pionnen.", "Elke keer anders aanlopen.", "Een vaste aanloop en een duidelijk plan."),
  L("Communicatie van de keeper", "Een keeper ziet het hele veld.", "Zijn aanwijzingen voorkomen veel tegengoals.", ["Roep 'keeper' als je de bal pakt.","Roep 'weg' als hij weg moet.","Roep namen bij het dekken."], "Oefen als keeper een partijtje waarin je elke actie coacht.", "Stil blijven in het doel.", "Duidelijk en vroeg roepen."),
  L("Een wedstrijd lezen in de eerste 10 minuten", "De eerste minuten vertellen veel over de tegenstander.", "Wie snel ziet hoe de ander speelt, kan zich aanpassen.", ["Kijk wie hun snelste speler is.","Let op hoe ze opbouwen.","Vertel het in de rust aan je team."], "Kijk 10 minuten van een wedstrijd en schrijf drie dingen op.", "Alleen op jezelf letten.", "Kijk, onthoud en deel het met je team."),
  L("Fit blijven tijdens een toernooi", "Een toernooidag is lang.", "Wie slim eet en rust, speelt de laatste wedstrijd net zo goed.", ["Drink na elke wedstrijd.","Eet kleine stukjes tussendoor.","Zit in de schaduw en leg je benen omhoog."], "Maak een toernooi-tas klaar met eten, drinken en reservekleren.", "Snoep eten en niks drinken.", "Drinken, klein eten en rust tussen de wedstrijden.")
);

// ---------- Mindset ----------
TEGENSLAG.push(
  TS("Je haalt je 30-dagen-uitdaging niet", "Teleurgesteld dat je een dag miste.", ["Ga gewoon door waar je was","Kies desnoods een makkelijker niveau","Kijk hoeveel dagen je wél deed"], "Niet perfect is ook vooruit."),
  TS("Je wordt niet uitgekozen bij een partijtje", "Je voelt je buitengesloten.", ["Laat zien wat je kunt in het spel","Vraag zelf of je mee mag doen","Vertel het iemand als het vaker gebeurt"], "Laat je spel het praten doen."),
  TS("Je speelt een slechte eerste helft", "Je baalt en twijfelt.", ["Gebruik de rust om te resetten","Kies één ding voor de tweede helft","Begin met een simpele actie"], "Een wedstrijd heeft twee helften. Jij bepaalt hoe de tweede gaat."),
  TS("Je bent geblesseerd op een belangrijk moment", "Heel verdrietig en boos.", ["Laat je verdriet er even zijn","Volg het herstel heel precies","Blijf bij je team, ook als je niet speelt"], "Ook geblesseerd hoor je bij het team."),
  TS("Je trainer geeft je weinig speeltijd", "Je voelt je niet gewaardeerd.", ["Vraag rustig wat je kunt verbeteren","Gebruik elke minuut die je krijgt","Train thuis extra"], "Elke minuut is een kans om te laten zien wie je bent."),
  TS("Je krijgt een penalty tegen door jouw overtreding", "Schuldig.", ["Accepteer het en ga door","Leer: wanneer had je moeten blijven staan?","Moedig je keeper aan"], "Iedereen maakt fouten. Hoe je verder gaat, maakt het verschil."),
  TS("Je hebt een nare opmerking gekregen online", "Gekwetst.", ["Reageer niet","Blokkeer of meld het","Vertel het je ouders"], "Wat iemand online zegt, zegt meer over hem dan over jou."),
  TS("Je bent vergeten je spullen mee te nemen", "Je baalt en schaamt je.", ["Vraag of iemand iets kan lenen","Doe mee met wat kan","Maak een checklist voor de volgende keer"], "Een fout wordt een les als je er iets mee doet."),
  TS("Je moet een tijd stoppen met voetbal", "Verdrietig. Je mist het.", ["Blijf bewegen op een andere manier","Kijk en leer van wedstrijden","Houd contact met je team"], "Pauze is geen einde. Je liefde voor het spel blijft."),
  TS("Je hebt het gevoel dat je stilstaat", "Ongeduldig en onzeker.", ["Kijk naar je records van een paar maanden terug","Vraag je trainer wat hij ziet","Probeer iets nieuws"], "Groei voel je niet altijd, maar hij gebeurt wel.")
);
FOCUS_TIPS.push(
  FT("Klaar voor de bal, altijd", "Wie altijd klaar staat, is nooit te laat.", "Sta op je voorvoeten, licht gebogen.", "Wedstrijd"),
  FT("Plan je extra training", "Wat je plant, gebeurt vaker.", "Zet je extra training in je planner.", "Thuis"),
  FT("Een vaste plek voor je spullen", "Dan zoek je nooit en ben je nooit te laat.", "Leg je voetbalspullen altijd op dezelfde plek.", "Thuis"),
  FT("Let op de scheidsrechter", "Weet wanneer hij fluit, dan speel je slimmer.", "Kijk in de eerste minuten hoe streng hij is.", "Wedstrijd"),
  FT("Eén blik op je doel", "Een kort moment om je doel te herinneren helpt.", "Kijk in de rust naar je focuswoord.", "Wedstrijd"),
  FT("Snel van gedachte wisselen", "Na een goede actie meteen weer focussen.", "Juich kort en zoek direct je positie.", "Wedstrijd"),
  FT("Wat zou een prof doen?", "Een korte vraag kan je helpen kiezen.", "Vraag het jezelf bij een lastige keuze.", "Thuis en wedstrijd"),
  FT("Rust voor je hoofd", "Ook je hoofd heeft een rustdag nodig.", "Doe één dag per week niets met voetbal.", "Thuis"),
  FT("Geen afleiding tijdens de warming-up", "De warming-up is het begin van je wedstrijd.", "Praat alleen over de wedstrijd tijdens het opwarmen.", "Wedstrijd"),
  FT("Klein beginnen", "Een grote taak voelt kleiner als je klein begint.", "Begin met de eerste 2 minuten.", "Thuis")
);
LEIDER.push(
  LT("Wees de rust bij een tegengoal", "Na een tegengoal kijkt het team naar de leiders.", "Klap in je handen en zeg: 'kom op, nog genoeg tijd'.", "Rust na een tegenslag voorkomt een tweede tegengoal."),
  LT("Help de trainer met de groep", "Een trainer kan niet alles alleen.", "Help met het uitleggen van een oefening.", "Samen maak je de training beter."),
  LT("Spreek een teamgenoot aan op gedrag", "Een leider zegt het als iets niet oké is.", "Doe het rustig en onder vier ogen.", "Eerlijkheid maakt het team sterker."),
  LT("Vier de overwinning bescheiden", "Winnen is mooi, maar blijf respectvol.", "Geef de tegenstander een hand voor je gaat juichen.", "Respect maakt je een echte winnaar."),
  LT("Laat zien dat je kunt verliezen", "Een goede verliezer is een sterke speler.", "Feliciteer de tegenstander, ook als je baalt.", "Je karakter laat je zien als het tegenzit."),
  LT("Wees er voor de wisselspelers", "Wie op de bank zit, hoort er ook bij.", "Geef ze een high five als ze erin komen.", "Iedereen moet zich deel van het team voelen."),
  LT("Neem de leiding in de warming-up", "Een goede start begint bij de warming-up.", "Tel hardop en zorg dat iedereen meedoet.", "Energie in de warming-up geeft energie in de wedstrijd."),
  LT("Ken de sterke punten van je team", "Een leider weet wie wat goed kan.", "Gebruik dat in het spel: geef de bal aan de snelle speler.", "Een team is sterker als iedereen doet wat hij goed kan.")
);
EXCUSES.push(
  ["Ik heb al een goed recept gemaakt deze week.", "Mooi! Probeer er nog een. Elke dag gezond telt."],
  ["Ik ben moe van de 30-dagen-uitdaging.", "Neem het makkelijke niveau. Volhouden is belangrijker dan zwaar."],
  ["Het is zaterdag.", "Ook op zaterdag kun je 15 minuten trainen."],
  ["Ik wil eerst nog slapen.", "Slapen is goed, maar sta op je vaste tijd op. Ritme helpt je."],
  ["Ik heb het druk met vrienden.", "Neem ze mee naar het veld."],
  ["Ik heb een wedstrijd morgen, dus ik doe niks.", "Doe licht: rekken, een korte wandeling en balcontacten."],
  ["Ik weet niet hoe die oefening moet.", "Kijk het filmpje bij de oefening en begin langzaam."],
  ["Ik heb mijn bidon niet.", "Pak een glas water. Drinken kan altijd."]
);
MOTIVATION.push(
  "Elke dag een beetje beter is genoeg.", "Rust is ook een deel van de training.", "Gezond eten, goed slapen, hard trainen.",
  "Je wordt niet beter door te wachten.", "Een goede gewoonte is een stille kracht.", "Wie zijn routine heeft, heeft rust.",
  "Een kleine stap vandaag is een grote stap over een jaar.", "Sterk in je hoofd, sterk op het veld.", "Doe het voor de speler die je wilt worden.",
  "Het gaat niet om perfect, het gaat om elke dag.", "Je bent sterker dan je denkt.", "Elke training brengt je dichterbij.",
  "Blijf nieuwsgierig, blijf leren.", "Wie volhoudt, wint uiteindelijk.", "Begin je dag met een overwinning: maak je bed op."
);

// ---------- Lichte en grote habits ----------
TIPS.push(
  LH("Je naam zeggen als je de bal vraagt", "Teamgenoten horen je dan sneller.", "Roep 'ja, [naam]!' of gewoon 'hier!'.", "hoofd"),
  LH("Elke ochtend één glas water", "Na de nacht heeft je lichaam vocht nodig.", "Drink het voor je ontbijt.", "drinken"),
  LH("Je bidon in je tas", "Altijd water bij je.", "Zet hem 's avonds bij je tas.", "drinken"),
  LH("Een paar keer je tenen bewegen", "Goed voor je voeten en enkels.", "Doe het onder je bureau.", "bewegen"),
  LH("Je nek rustig draaien", "Na lang zitten wordt je nek stijf.", "Draai 5 keer langzaam naar links en rechts.", "herstel"),
  LH("Een kort dankjewel aan de scheidsrechter", "Respect kost niets.", "Geef hem een hand na de wedstrijd.", "hoofd"),
  LH("Een pauze na 30 minuten huiswerk", "Een korte pauze maakt je weer scherp.", "Sta op, drink water en loop even.", "hoofd"),
  LH("Groente op je brood", "Makkelijk extra groente.", "Leg er een plakje komkommer of tomaat op.", "eten"),
  LH("Avondeten aan tafel", "Rustig eten met je familie.", "Zonder tv of telefoon.", "eten"),
  LH("Tas uitpakken na de training", "Natte kleren gaan anders stinken.", "Doe ze direct in de was.", "hoofd")
);
BIG_HABITS.push(
  BH("Een week elke dag een lichte habit extra", "Kleine dingen zonder moeite worden vanzelf gewoontes.", "Kies elke dag één habit uit 'Niet zwaar'."),
  BH("Een week elke dag een recept", "Zo eet je een week lang gezond en leer je koken.", "Maak of help elke dag met één recept uit de app."),
  BH("Een week vaste routines", "Elke ochtend en avond dezelfde volgorde.", "Kies een ochtend- en avondroutine en houd ze vol."),
  BH("Een week geen snoep doordeweeks", "Dan smaakt het in het weekend nog lekkerder.", "Spreek het af met je ouders."),
  BH("Een week elke dag kijken naar een prof", "Leren van de besten.", "Kijk elke dag 10 minuten naar één speler.")
);

// ---------- Recepten ----------
RECEPTEN.push(
  RC("Ontbijt", "Volkoren toast met banaan en kaneel", "5 min", "1 persoon", ["2 volkoren boterhammen","1 banaan","Kaneel","Beetje pindakaas"], ["Rooster het brood.","Smeer er een dun laagje pindakaas op.","Leg plakjes banaan erop en strooi kaneel."], "Snel en vol energie voor school of training.", "Ook lekker met appel."),
  RC("Ontbijt", "Chia-pudding met fruit", "5 min + nacht", "1 persoon", ["2 eetlepels chiazaad","Melk (een kopje)","Fruit","Beetje honing"], ["Roer chiazaad door de melk.","Zet een nacht in de koelkast.","Doe er fruit op."], "Vol vezels en goede vetten.", "Roer na 10 minuten nog een keer."),
  RC("Ontbijt", "Ontbijtwrap met ei en spinazie", "10 min", "1 persoon", ["Volkoren wrap","2 eieren","Handje spinazie","Beetje kaas"], ["Bak de eieren als roerei met de spinazie.","Leg het op de wrap met kaas.","Rol op."], "Eiwitten om de dag goed te beginnen.", "Neem hem mee als je haast hebt."),
  RC("Voor het sporten", "Volkoren boterham met honing", "2 min", "1 persoon", ["1 volkoren boterham","Theelepel honing"], ["Smeer de honing op het brood."], "Snelle energie die licht valt.", "Eet het een uur voor de training."),
  RC("Voor het sporten", "Gnocchi met tomaat en kip", "20 min", "2 personen", ["Gnocchi","Kipreepjes","Tomaatjes","Spinazie","Olijfolie"], ["Kook de gnocchi 3 minuten.","Bak de kip.","Doe tomaatjes, spinazie en gnocchi erbij."], "Koolhydraten en eiwitten voor de avond voor een wedstrijd.", "Snel klaar."),
  RC("Na het sporten", "Volkoren wrap met tonijn en mais", "5 min", "1 persoon", ["Volkoren wrap","Blikje tonijn op water","Mais","Sla","Lepel yoghurt"], ["Meng tonijn met yoghurt.","Doe het op de wrap met mais en sla.","Rol op."], "Eiwitten en koolhydraten voor snel herstel.", "Ook goed voor in je lunchbox."),
  RC("Na het sporten", "Rijst met ei en groente", "15 min", "1 persoon", ["Gekookte rijst","2 eieren","Doperwten en wortel","Beetje sojasaus"], ["Bak de groente.","Doe de rijst erbij.","Roer de eieren erdoor tot ze gaar zijn."], "Snel herstel met wat je in huis hebt.", "Gebruik rijst van gisteren."),
  RC("Lunch", "Volkoren pastasalade met kip", "20 min", "2 personen", ["Volkoren pasta","Kipreepjes","Tomaat, komkommer, paprika","Pesto"], ["Kook de pasta en laat afkoelen.","Bak de kip.","Meng alles met een beetje pesto."], "Een lunch die lang energie geeft.", "Maak hem de avond ervoor."),
  RC("Lunch", "Groentesoep met balletjes", "30 min", "4 personen", ["Soepgroente","Kipgehakt","Bouillon","Volkoren brood"], ["Draai kleine balletjes van het gehakt.","Kook de groente in de bouillon.","Doe de balletjes erbij en kook 10 minuten."], "Veel groente en eiwitten.", "Lekker op een koude dag."),
  RC("Avondeten", "Zalm met couscous en groente", "25 min", "2 personen", ["Zalmfilet","Couscous","Courgette en paprika","Citroen"], ["Maak de couscous met heet water.","Bak de groente.","Bak de zalm 4 minuten per kant.","Knijp er citroen over."], "Gezonde vetten en eiwitten voor je spieren.", "Eet twee keer per week vis."),
  RC("Avondeten", "Kip-groente uit de wok met rijst", "25 min", "3 personen", ["Kipfilet","Broccoli, paprika, wortel","Rijst","Sojasaus en gember"], ["Kook de rijst.","Wok de kip.","Doe de groente erbij.","Breng op smaak met sojasaus en gember."], "Veel groente, eiwitten en energie.", "Snijd alles klein, dan gaat het snel."),
  RC("Avondeten", "Ovenschotel met zoete aardappel en bonen", "40 min", "4 personen", ["Zoete aardappels","Zwarte bonen","Paprika","Passata","Beetje kaas"], ["Verwarm de oven op 200 graden.","Snijd de aardappel in blokjes.","Meng alles in een ovenschaal met passata.","Strooi er een beetje kaas over en bak 30 minuten."], "Vezels, eiwitten uit bonen en lange energie.", "Vraag een volwassene bij de oven."),
  RC("Snacks", "Appel-havermout koekjes", "25 min", "10 koekjes", ["2 rijpe bananen","Havermout (een kopje)","1 geraspte appel","Kaneel"], ["Verwarm de oven op 180 graden.","Prak de bananen en meng alles.","Maak kleine hoopjes op een bakplaat.","Bak 15 minuten."], "Koekjes zonder suiker, vol energie.", "Bewaar ze in een doosje."),
  RC("Snacks", "Yoghurt met noten", "2 min", "1 persoon", ["Yoghurt","Handje noten","Beetje kaneel"], ["Doe yoghurt in een bakje.","Strooi noten en kaneel erover."], "Eiwitten en gezonde vetten.", "Neem het mee in een bakje met deksel."),
  RC("Drankjes", "Sinaasappel-wortel sap", "5 min", "1 persoon", ["2 sinaasappels","1 wortel","Water"], ["Pers de sinaasappels.","Rasp de wortel heel fijn of blend hem met wat water.","Meng alles."], "Vol vitamines voor je weerstand.", "Drink het meteen op.")
);

// ---------- 30-dagen-uitdagingen ----------
UITDAGINGEN.push(
  U("vroeg", "🌅", "30 dagen vroeg op", "Een vaste ochtend geeft je dag ritme.",
    (n, r) => "Sta op je vaste tijd op en doe meteen: glas water, bed opmaken en " + r(5 + n / 3) + " squats."),
  U("routine", "🔁", "30 dagen routines", "Elke dag je ochtend- en avondroutine.",
    (n, r) => "Doe vandaag je hele ochtendroutine én avondroutine uit de planner." + (n > 10 ? " Plus " + r(2) + " lichte habits extra." : "")),
  U("recept", "🍳", "30 dagen zelf koken", "Leren koken en gezond eten.",
    (n, r) => rust30(n) ? "Rustdag: help met afruimen en afwassen." : "Maak of help mee met " + (r(1) > 1 ? r(1) + " recepten" : "1 recept") + " uit Gezond → Recepten."),
  U("lichte", "🪶", "30 dagen kleine habits", "Elke dag een paar habits die bijna niets kosten.",
    (n, r) => "Doe vandaag " + r(3 + n / 10) + " habits uit Gezond → Niet zwaar."),
  U("analyse", "🎥", "30 dagen kijken en leren", "Elke dag kijken naar een prof maakt je slimmer.",
    (n, r) => "Kijk " + r(5 + n / 5) + " minuten naar een speler of wedstrijd uit Analyse en schrijf één ding op."),
  U("wendbaar", "↔️", "30 dagen wendbaar", "Sneller draaien en van richting veranderen.",
    (n, r) => rust30(n) ? "Rustdag: 5 minuten rustig huppelen en rekken." : r(4 + n / 4) + " keer de 5-10-5 sprint en " + r(1 + n / 10) + " minuten zijwaarts schuifelen.")
);

// ---------- Routines ----------
ROUTINES.push(
  RW("Ochtend", "Rustige zondagochtend", "Zondag zonder wedstrijd", [["9:00","Opstaan en water",""],["9:15","Rustig ontbijt met je familie",""],["10:00","10 minuten rekken",""],["10:30","Naar buiten: wandelen, fietsen of balletje trappen",""],["11:30","Taken voor vandaag opschrijven",""]], "Een rustige ochtend helpt je herstellen van de week.", {extra:["Raam open","Bed opmaken","Een dankjewel aan wie het ontbijt maakte"]}),
  RW("Avond", "Avond na een slechte dag", "Als het vandaag niet goed ging", [["Na het eten","Even praten met iemand thuis",""],["Daarna","Iets doen wat je leuk vindt",""],["Daarna","Schrijf één ding op dat wel goed ging",""],["Een uur voor bed","Schermen weg",""],["Bedtijd","Ademhaling 4-4-4 en slapen","Morgen is een nieuwe dag."]], "Een slechte dag is maar één dag. Met een rustige avond begin je morgen fris.", {extra:["Warm douchen","Glas water naast je bed","Schouders laten zakken"]})
);

// ---------- Spelers, analyse en blessures ----------
SPELERS.push(
  SP("Cole Palmer", "Middenvelder", "Rustig en koel, met een zachte linkervoet. Speelt alsof hij nooit haast heeft.", ["Rust in de zestien","Penalty's","Slimme passes"], "Rustig blijven onder druk maakt je gevaarlijk.", "Neem 10 penalty's met dezelfde rustige routine.", "cole palmer analysis"),
  SP("Marcus Thuram", "Aanvaller", "Sterk, snel en goed in het vasthouden van de bal.", ["Bal vasthouden","Diepe loopacties","Kracht"], "Een spits die de bal vasthoudt, laat het team opschuiven.", "Oefen bal afschermen tegen een vriend.", "marcus thuram analysis"),
  SP("Alessandro Bastoni", "Verdediger", "Een linksbenige verdediger die mee opbouwt en zelfs mee aanvalt.", ["Opbouwen","Lange passes","Rust"], "Een verdediger met een goede pass is een extra spelmaker.", "Geef 20 lange passes met je linkervoet.", "bastoni analysis"),
  SP("Gregor Kobel", "Keeper", "Een keeper met snelle reflexen en veel rust.", ["Reflexen","Rust","Uitkomen"], "Rust in het doel geeft vertrouwen aan het team.", "Laat iemand van dichtbij schieten en reageer snel.", "kobel saves"),
  SP("Pablo Barrios", "Middenvelder", "Een jonge middenvelder die altijd de bal vraagt.", ["Bal vragen","Kort samenspel","Draaien"], "Durf altijd de bal te vragen.", "Speel een rondo waarin je na elke pass meteen weer vrijloopt.", "pablo barrios analysis")
);
addPlayers("cam", ["Cole Palmer"]);
addPlayers("sp", ["Marcus Thuram"]);
addPlayers("cv", ["Alessandro Bastoni"]);
addPlayers("k", ["Gregor Kobel"]);
addPlayers("cm", ["Pablo Barrios"]);
ANALYSE_TIPS.push(
  "Kijk hoe spelers zich opstellen bij een vrije trap van ver.",
  "Let op wie er na een goal als eerste naar de middenstip loopt.",
  "Kijk naar de looplijnen van de spits als de vleugelspeler de bal heeft.",
  "Let op hoe een team speelt in de laatste 10 minuten met een voorsprong.",
  "Kijk hoe de keeper de bal uitgooit of uittrapt: kort of lang?",
  "Let op de lichaamstaal van spelers na een gemiste kans."
);
BLESSURE_REGELS.push(
  "Bouw na een ziekte langzaam weer op.",
  "Draag warme kleding na het sporten als het koud is.",
  "Neem bij hitte extra drinken mee.",
  "Laat een blessure altijd helemaal genezen voor je weer volle wedstrijden speelt.",
  "Doe na elke training 5 minuten preventie: kuitheffen, plank en balans."
);

// ---------- Opruimen: dubbele titels eruit ----------
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = typeof x === "string" ? x : Array.isArray(x) ? x[0] : x[key] || x.title || x.id; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [TIPS, BIG_HABITS, MOTIVATION, DRILLS, IQ_LESSONS, EXERCISES, KRACHT, TEGENSLAG, FOCUS_TIPS, LEIDER, EXCUSES, ANALYSE_TIPS, DAILY_LESSONS, RECEPTEN, UITDAGINGEN, ROUTINES, BLESSURE_REGELS].forEach(a => dedupe(a));
  dedupe(SPELERS, "name");
})();
