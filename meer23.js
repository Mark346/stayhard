// Stay Hard – drieëntwintigste uitbreiding (niet: voorbeeldtrainingen, strekroutines, records).

// ---------- Boeken ----------
BOEKEN.push(
  BK("Soccernomics", "Simon Kuper & Stefan Szymanski", "Voetbal en kennis", "15+", "Een boek dat met cijfers en onderzoek uitlegt hoe voetbal echt werkt.", "Leer anders naar voetbal kijken, zoals een analist."),
  BK("The Numbers Game", "Chris Anderson & David Sally", "Voetbal en kennis", "15+", "Over wat statistieken ons vertellen over winnen in het voetbal.", "Snap waarom kleine dingen het verschil maken."),
  BK("Expected Goals", "Rory Smith", "Voetbal en kennis", "15+", "Over hoe data en analyse het moderne voetbal veranderen.", "Voor wie wil weten hoe clubs spelers en wedstrijden analyseren."),
  BK("Zonal Marking", "Michael Cox", "Voetbal en tactiek", "15+", "Over hoe tactiek in verschillende landen het voetbal heeft gevormd.", "Leer tactiek en speelstijlen van verschillende landen."),
  BK("Das Reboot", "Raphael Honigstein", "Voetbal", "15+", "Hoe het Duitse voetbal zichzelf opnieuw uitvond en wereldkampioen werd.", "Over een plan maken en volhouden."),
  BK("Fever Pitch", "Nick Hornby", "Voetbal", "15+", "Een grappig en eerlijk boek over hoe het is om fan te zijn.", "Over liefde voor het spel."),
  BK("Hatchet", "Gary Paulsen", "Inspiratie (verhaal)", "10+", "Een jongen moet na een vliegtuigongeluk alleen overleven in de wildernis.", "Over doorzetten en jezelf redden."),
  BK("Holes", "Louis Sachar", "Inspiratie (verhaal)", "10+", "Een spannend en grappig verhaal over een jongen die pech heeft en toch volhoudt.", "Over vriendschap en doorzetten."),
  BK("Shoe Dog", "Phil Knight", "Inspiratie", "15+", "De oprichter van Nike vertelt hoe hij met bijna niets begon.", "Over dromen, risico's nemen en volhouden."),
  BK("Open", "Andre Agassi", "Inspiratie en sport", "15+", "Een tennisser vertelt eerlijk over druk, twijfel en doorzetten.", "Ook topsporters twijfelen. Dit boek laat zien hoe je daarmee omgaat."),
  BK("The Boys in the Boat", "Daniel James Brown", "Inspiratie en sport", "14+", "Een waargebeurd verhaal over een roeiteam dat samen het onmogelijke deed.", "Over teamwork: samen ben je sterker."),
  BK("Ik ben Malala (I Am Malala)", "Malala Yousafzai", "Inspiratie", "12+", "Het verhaal van een meisje dat opkwam voor het recht om naar school te gaan.", "Over moed en opkomen voor wat je belangrijk vindt."),
  BK("Born to Run", "Christopher McDougall", "Inspiratie en sport", "15+", "Over hardlopen en een volk dat enorme afstanden kan rennen.", "Over plezier in bewegen en je lichaam leren kennen.")
);

// ---------- Voetbaloefeningen ----------
DRILLS.push(
  D("Aanname uit de lucht met je wreef en schot", "Moeilijk", "10 min", "Gooi de bal hoog, neem aan met je wreef en schiet direct.", ["Gooi hoog","Leg hem dood met je wreef","Schiet binnen 2 aanrakingen"], "instep control finish", {goal:true, me:[80,60], ball:[80,30], paths:[{d:"M80 30 L80 54",t:"ball"},{d:"M86 60 L144 40",t:"ball"}]}),
  D("Kaatsen en diep lopen", "Gemiddeld", "10 min", "Kaats de bal terug en loop meteen diep voor de volgende pass.", ["Maatje passt","Kaats in één keer","Loop diep en krijg de bal"], "set and run in behind", {mates:[[40,50]], me:[80,50], ball:[46,50], paths:[{d:"M46 50 L76 50",t:"ball"},{d:"M80 46 L120 30",t:"run"}]}),
  D("Dribbel en pass in de loop", "Gemiddeld", "8 min", "Dribbel naar voren en speel de bal in de loop van je maatje.", ["Maatje loopt diep","Dribbel rustig","Speel voor hem uit"], "dribble and through pass", {me:[40,60], mates:[[70,30]], ball:[48,60], paths:[{d:"M74 30 L120 30",t:"run"},{d:"M48 58 L116 32",t:"ball"}]}),
  D("Hooghouden in een vak", "Gemiddeld", "5 min", "Houd hoog zonder uit een vak van 2 bij 2 meter te gaan.", ["Klein vak","Houd hoog","Blijf in het vak"], "juggling in square", {cones:[[60,30],[100,30],[60,70],[100,70]], me:[80,55], ball:[80,40]}),
  D("Schieten na een sprint", "Zwaar", "10 min", "Sprint naar de bal en schiet direct op doel.", ["Bal op 15 meter","Sprint ernaartoe","Schiet direct"], "sprint and shoot", {goal:true, me:[20,50], ball:[90,50], paths:[{d:"M26 50 L84 50",t:"run"},{d:"M94 50 L144 30",t:"ball"}]}),
  D("Twee-tegen-twee plus één", "Gemiddeld", "15 min", "Twee-tegen-twee met een extra speler die altijd meedoet met het team met de bal.", ["Veldje van 15 bij 20","Joker speelt mee met balbezit","Scoor op kleine doeltjes"], "2v2 plus joker", {me:[60,40], mates:[[60,70]], foes:[[100,40],[100,65]], ball:[66,40]}),
  D("Lange bal en sprint", "Zwaar", "10 min", "Trap de bal ver vooruit en sprint erachteraan.", ["Trap 25 meter vooruit","Sprint","Neem aan en kom terug"], "kick and chase", {me:[20,50], ball:[28,50], paths:[{d:"M28 50 L130 50",t:"ball"},{d:"M20 56 L126 56",t:"run"}]}),
  D("Koppen na een eigen gooi", "Makkelijk", "5 min", "Gooi de bal op en kop hem naar een muur of vak.", ["Gooi op","Kop met je voorhoofd","Ogen open"], "self toss heading", {wall:true, me:[100,50], ball:[104,36], paths:[{d:"M104 36 L140 40",t:"ball"}]}),
  D("Ingooi en direct verder", "Gemiddeld", "8 min", "Gooi in naar een maatje, krijg de bal terug en ga verder.", ["Ingooi","Maatje kaatst","Dribbel weg"], "throw in one two", {me:[20,50], mates:[[50,40]], ball:[22,46], paths:[{d:"M22 46 L46 42",t:"ball"},{d:"M50 44 L40 70",t:"ball"}]}),
  D("Draaien over beide schouders", "Gemiddeld", "8 min", "Neem aan met je rug naar de muur en draai afwisselend over links en rechts.", ["Rug naar de muur","Draai over links","Volgende keer over rechts"], "turning both shoulders", {wall:true, me:[110,50], ball:[100,50], paths:[{d:"M100 50 L70 30",t:"ball"}]}),
  D("Panna-duel", "Gemiddeld", "10 min", "Speel een panna-duel in een klein vierkant: door de benen is winst.", ["Vierkant van 4 bij 4","Eén-tegen-één","Panna is een punt"], "panna duel", {me:[70,50], foe:[90,50], ball:[78,52], cones:[[55,35],[105,35],[55,65],[105,65]]}),
  D("Vrije trap laag naast de muur", "Moeilijk", "10 min", "Schiet een vrije trap laag langs het muurtje in de hoek.", ["Muurtje van pionnen","Schiet laag langs de buitenkant","Mik op de hoek"], "low free kick around wall", {goal:true, me:[40,50], ball:[48,50], cones:[[90,46],[90,54]], paths:[{d:"M48 50 Q90 70 144 72",t:"ball"}]})
);

// ---------- Voetbal IQ ----------
IQ_LESSONS.push(
  IQ("Speel de bal waar de ruimte is", "Kijk niet alleen naar je teamgenoot, maar naar de ruimte voor hem.", "Speel de bal in de ruimte waar hij naartoe kan lopen.", {me:[40,50], mates:[[80,40]], ball:[46,50], paths:[{d:"M84 40 L120 40",t:"run"},{d:"M46 48 L116 42",t:"ball"}]}),
  IQ("Druk zetten met z'n tweeën", "Twee spelers samen kunnen de bal makkelijker winnen.", "Eén zet druk, de ander sluit de pass af.", {me:[80,40], mates:[[80,65]], foes:[[110,35],[110,70]], ball:[104,35]}),
  IQ("De zwakke voet van je tegenstander", "Elke speler heeft een zwakke voet.", "Stuur hem naar zijn zwakke voet, dan wordt het moeilijker voor hem.", {me:[90,50], foe:[60,50], ball:[66,50]}),
  IQ("Snel spelen na een overtreding", "Na een overtreding staat de tegenstander soms niet klaar.", "Kijk of je de vrije trap snel kunt nemen.", {me:[60,50], mates:[[100,30]], ball:[66,50], paths:[{d:"M66 48 L96 32",t:"ball"}]}),
  IQ("Achter de rug van de verdediger", "Een verdediger kan niet tegelijk de bal en jou zien.", "Loop achter zijn rug langs.", {me:[100,40], foe:[96,50], mates:[[50,50]], paths:[{d:"M100 40 Q120 46 130 60",t:"run"}]}),
  IQ("Breed maken bij balbezit van de keeper", "Als de keeper de bal heeft, moet het veld groot.", "Ga breed staan, dan heeft de keeper meer opties.", {goalLeft:true, mates:[[20,50]], me:[50,15], ball:[24,50]}),
  IQ("Niet te vroeg schieten", "Soms is één extra aanraking beter dan direct schieten.", "Staat er iemand voor je? Leg de bal opzij en schiet dan.", {goal:true, me:[100,50], foe:[115,50], ball:[106,50], paths:[{d:"M106 50 L106 64 L144 40",t:"ball"}]}),
  IQ("Je teamgenoot helpen bij een duel", "Twee tegen één verdedigen is makkelijker.", "Kom dichtbij als je teamgenoot een duel heeft.", {mates:[[90,40]], me:[100,60], foe:[70,45], ball:[74,45]})
);

// ---------- Daglessen ----------
DAILY_LESSONS.push(
  L("De eerste aanraking weg van je tegenstander", "Je eerste aanraking bepaalt of je tijd krijgt.", "Weg van druk betekent meer tijd en ruimte.", ["Kijk waar je tegenstander staat.","Neem aan naar de andere kant.","Ga meteen verder."], "Neem 20 ballen aan tegen de muur, elke keer weg van een denkbeeldige tegenstander.", "Recht naar je tegenstander aannemen.", "Weg van druk aannemen."),
  L("Een strakke pass in de loop", "Een pass in de loop houdt de aanval snel.", "Je teamgenoot hoeft niet in te houden.", ["Kijk waar hij heen loopt.","Speel een meter voor hem uit.","Strak en over de grond."], "Speel 20 passes in de loop van een maatje.", "Op de voeten spelen van iemand die rent.", "Een meter voor hem uit, strak."),
  L("Een duel in de lucht winnen als aanvaller", "Ook aanvallers moeten kopduels winnen.", "Wie het eerst bij de bal is, wint.", ["Kijk naar de bal.","Spring met één been af.","Kop de bal naar beneden of naar een teamgenoot."], "Kop 10 gegooide ballen naar een vak.", "Wachten tot de bal bij je is.", "Eerst bij de bal, en hem gericht koppen."),
  L("Afronden met je binnenkant", "Een binnenkantschot is zuiver en moeilijk te stoppen.", "Plaatsen is vaak beter dan hard schieten.", ["Standbeen naast de bal.","Open je voet.","Mik in de hoek."], "Schiet 20 keer met je binnenkant in de hoeken.", "Altijd zo hard mogelijk schieten.", "Plaatsen in de hoek."),
  L("Overzicht houden in een partijtje", "Overzicht houden is het verschil tussen goed en heel goed.", "Wie weet wat er gebeurt, maakt betere keuzes.", ["Kijk voor je de bal krijgt.","Weet waar je teamgenoten staan.","Kies de beste optie."], "Speel een partijtje en kijk voor elke bal rond.", "Pas kijken als je de bal hebt.", "Altijd eerst kijken."),
  L("De tweede bal winnen", "Na een kopduel valt de bal vaak los.", "Wie die tweede bal wint, heeft de controle.", ["Sta in de buurt van het kopduel.","Lees waar de bal valt.","Ga er als eerste naartoe."], "Oefen met een maatje: hij kopt, jij pakt de tweede bal.", "Stilstaan en kijken.", "Lezen, en als eerste bij de bal."),
  L("Rust voor het doel", "Paniek voor het doel geeft gemiste kansen.", "Rust geeft je tijd om goed te kiezen.", ["Kijk naar de keeper.","Kies je hoek.","Schiet laag en zuiver."], "Oefen 10 keer alleen op de keeper af.", "Haastig en hard schieten.", "Rustig kijken, laag in de hoek."),
  L("Spelen tegen een sterkere tegenstander", "Tegen een sterker team moet je slim spelen.", "Slim en samen verdedigen kan sterkere teams afstoppen.", ["Sta compact.","Speel simpel als je de bal hebt.","Wees klaar voor de counter."], "Speel een partijtje met een man minder en verdedig compact.", "Allemaal naar de bal rennen.", "Compact, simpel en klaar voor de counter.")
);

// ---------- Mindset ----------
TEGENSLAG.push(
  TS("Je wordt gewisseld terwijl je goed speelde", "Je snapt het niet en bent boos.", ["Blijf rustig op de bank","Vraag na de wedstrijd waarom","Weet dat de trainer ook aan het team denkt"], "Een wissel is niet altijd een straf."),
  TS("Je hebt een slechte week op school", "Je hoofd zit vol en je kunt je niet concentreren.", ["Gebruik voetbal om je hoofd leeg te maken","Plan je huiswerk","Praat met je ouders"], "Voetbal kan je hoofd ook rust geven."),
  TS("Je mist een open doel", "Je schaamt je.", ["Zeg 'volgende'","Blijf de kansen opzoeken","Oefen afronden op de training"], "Ook de beste spitsen missen open kansen."),
  TS("Je team speelt niet zoals afgesproken", "Gefrustreerd.", ["Doe zelf wat afgesproken is","Coach je teamgenoten rustig","Praat er in de rust over"], "Begin bij jezelf, dan volgen anderen."),
  TS("Je wordt vergeleken met je broer of vriend", "Je voelt je minder.", ["Weet dat iedereen anders is","Kijk naar je eigen groei","Wees trots op wat jij kunt"], "Jouw weg is jouw weg."),
  TS("Je hebt het gevoel dat je niet groeit", "Ongeduldig.", ["Kijk naar je records","Vraag feedback","Probeer een nieuwe challenge"], "Groei gaat soms langzaam, maar hij gaat wel door."),
  TS("Je wordt aan de kant gezet door een nieuwe speler", "Onzeker en jaloers.", ["Leer van de nieuwe speler","Train extra","Blijf een goede teamgenoot"], "Concurrentie maakt je beter."),
  TS("Je speelt een wedstrijd in de regen en alles gaat mis", "Gefrustreerd.", ["Speel simpel","Pas je spel aan aan het veld","Blijf positief"], "Slechte omstandigheden zijn voor iedereen hetzelfde.")
);
FOCUS_TIPS.push(
  FT("Een focuswoord per helft", "Twee helften, twee doelen.", "Kies voor elke helft één woord.", "Wedstrijd"),
  FT("Je timer gebruiken", "Met een timer werk je geconcentreerder.", "Zet de timer bij Extra op 25 minuten voor huiswerk.", "Thuis"),
  FT("Niet op je telefoon voor de wedstrijd", "Je telefoon haalt je focus weg.", "Leg hem een uur voor de wedstrijd weg.", "Wedstrijd"),
  FT("Lees een boek van de dag", "Lezen traint je concentratie.", "Lees elke dag 10 minuten.", "Thuis"),
  FT("Kijk naar je eigen taak", "Focus op wat jij moet doen, niet op wat anderen fout doen.", "Vraag jezelf: wat is nu mijn taak?", "Wedstrijd"),
  FT("Klein beginnen", "Een grote taak voelt makkelijker in kleine stukjes.", "Begin met 5 minuten.", "Thuis")
);
LEIDER.push(
  LT("Wees een voorbeeld op zaterdag", "Op wedstrijddag kijken jongere spelers naar jou.", "Kom op tijd, warm goed op en moedig aan.", "Een goed voorbeeld maakt indruk."),
  LT("Help na de wedstrijd met opruimen", "Ook na de wedstrijd kun je leiden.", "Pak ballen, pionnen en bidons op.", "Kleine dingen maken een groot verschil."),
  LT("Steun een teamgenoot die het moeilijk heeft", "Een leider ziet wie het lastig heeft.", "Vraag hoe het gaat en luister.", "Een team zorgt voor elkaar."),
  LT("Wees eerlijk tegen de scheidsrechter", "Eerlijk spel maakt je groot.", "Geef het toe als de bal van jou uit ging.", "Eerlijkheid geeft respect.")
);
EXCUSES.push(
  ["Ik heb geen tijd om te koken.", "Kies een recept van 5 minuten."],
  ["Gezonde koekjes zijn vast vies.", "Probeer de banaan-havermout koekjes. Twee ingrediënten en heel lekker."],
  ["Ik heb geen zin in lezen.", "Begin met 5 minuten van het boek van de dag."],
  ["Ik ben al goed in passen.", "Probeer het dan met je zwakke voet of in één keer."],
  ["De timer is saai.", "Daag jezelf uit: kun je je taak afmaken voor de timer klaar is?"]
);
MOTIVATION.push(
  "Lees, leer en word beter.", "Een goed boek is een training voor je hoofd.", "Gezond kan ook lekker zijn.",
  "Kijk naar de besten, leer van de besten.", "Elke positie heeft zijn helden. Wie is de jouwe?", "Leer van spelers, word jezelf.",
  "Elke prof was ooit een jeugdspeler.", "Jouw positie, jouw kracht.", "Kopieer de beweging, niet de speler.",
  "Analyseer, oefen, herhaal.", "Wat de profs doen, kun jij leren.", "Elke dag een beetje slimmer op het veld."
);

// ---------- Analyse ----------
ANALYSE_TIPS.push(
  "Kijk bij een speler op jouw positie waar hij staat als zijn team de bal heeft.",
  "Let op hoe vaak een speler omkijkt voordat hij de bal krijgt.",
  "Kijk wat een speler doet in de eerste 5 seconden na balverlies.",
  "Vergelijk twee spelers op dezelfde positie: wat doen ze anders?",
  "Kijk naar de lichaamshouding van een speler bij een aanname.",
  "Let op wanneer een spits diep loopt en wanneer hij terugkomt.",
  "Kijk hoe een keeper zijn verdediging coacht.",
  "Let op hoe een back beslist: mee aanvallen of blijven staan?",
  "Kijk hoe een controleur zich opstelt als de tegenstander counters.",
  "Kies een speler van de dag en schrijf drie dingen op die je wilt overnemen."
);
WEDSTRIJDEN.push(
  WA("Een wereldster als teamspeler", "Argentinië – Kroatië, WK 2022", null, "Messi gaf een geweldige assist na een lange dribbel langs de zijlijn.", ["Hoe houdt hij de bal vast tegen de verdediger?","Wanneer kijkt hij op?","Waar loopt de spits?"], "Ook de beste spelers maken anderen beter.", "Kijk op voordat je een voorzet of pass geeft.", "messi assist croatia 2022"),
    WA("Een vleugelspeler die alles kan", "Bayern München – Chelsea, finale 2012", null, "Een spannende finale waarin beide teams vleugelspelers hadden die veel gevaar gaven.", ["Hoe vaak zoeken de vleugelspelers de één-tegen-één?","Wat doen de backs?","Hoe gaan de teams om met druk?"], "In grote wedstrijden is durf belangrijk.", "Ga op de training steeds de één-tegen-één aan.", "bayern chelsea 2012 final"),
  WA("Een verdediger die een finale redt", "Real Madrid – Atlético Madrid, finale 2014", null, "Een late kopbal van een verdediger uit een hoekschop bracht de finale in de verlenging.", ["Hoe loopt de verdediger in bij de hoekschop?","Wie geeft de voorzet?","Hoe reageert het team na de goal?"], "Geef nooit op tot het laatste fluitsignaal.", "Ken je taak bij een hoekschop.", "ramos header 2014 final"),
    );

// ---------- Blessures voorkomen ----------
PREVENTIE.push(
  PV("🦵", "#E2541B", "Hamstrings opwarmen", "Achterkant bovenbeen", "Koude hamstrings verrekken sneller bij sprints.", "Hamstring-zwaaien voor elke training.", "10 per been", "Hamstring-zwaaien staand"),
  PV("🧍", "#0F7C78", "Sterke heupen met een band", "Heupen en knieën", "Sterke heupen houden je knieën recht.", "Zijwaarts lopen met een band.", "3 x 10 stappen", "Zijwaarts lopen met een band"),
  PV("🌡️", "#DC2626", "Niet sporten met koorts", "Hele lichaam", "Sporten met koorts kan gevaarlijk zijn.", "Rust tot je een dag zonder koorts bent.", "Bij ziekte", ""),
  PV("🦶", "#65A30D", "Teenkracht", "Voeten", "Sterke tenen helpen bij afzetten en balans.", "Pak knikkers of een handdoek op met je tenen.", "2 minuten", ""),
  PV("🧠", "#7C3AED", "Rust voor je hoofd", "Hoofd", "Stress maakt je lichaam gespannener en blessuregevoeliger.", "Doe 5 minuten ademhaling of lees een boek.", "Elke dag", ""),
  PV("🪑", "#475569", "Niet te lang zitten", "Heupen en rug", "Lang zitten maakt je heupen stijf.", "Sta elk half uur even op.", "De hele dag", ""),
  PV("🏃", "#E2541B", "Goed afremmen", "Knieën", "Goed afremmen beschermt je knieën en enkels.", "Sprint en rem af met kleine pasjes.", "5 keer", ""),
  PV("🧴", "#0D9488", "Zonnebrand bij zon", "Huid", "Een verbrande huid voelt naar en maakt je moe.", "Smeer je in bij een zonnige training.", "Bij zon", "")
);

// ---------- Recepten ----------
RECEPTEN.push(
  RC("Ontbijt", "Toast met hüttenkäse en aardbeien", "5 min", "1 persoon", ["Volkoren toast","Hüttenkäse","Aardbeien"], ["Rooster het brood.","Smeer hüttenkäse.","Leg aardbeien erop."], "Eiwitten en vitamines.", "Een snufje kaneel erover."),
  RC("Ontbijt", "Havermout met pindakaas en appel", "8 min", "1 persoon", ["Havermout","Melk","Theelepel pindakaas","Appel"], ["Kook havermout met melk.","Roer pindakaas erdoor.","Doe appelstukjes erop."], "Lange energie voor een trainingsdag.", "Ook lekker met banaan."),
  RC("Voor het sporten", "Volkoren boterham met banaan en honing", "3 min", "1 persoon", ["Volkoren boterham","Banaan","Beetje honing"], ["Leg plakjes banaan op het brood.","Een dun laagje honing erover."], "Snelle energie een uur voor de training.", "Niet te veel honing."),
  RC("Na het sporten", "Kipsalade met couscous", "15 min", "2 personen", ["Couscous","Kipreepjes","Komkommer, tomaat, paprika"], ["Maak de couscous.","Bak de kip.","Meng met groente."], "Eiwitten en energie na het sporten.", "Ook koud lekker."),
  RC("Na het sporten", "Yoghurt met granola en banaan", "3 min", "1 persoon", ["Yoghurt","Granola zonder suiker","Banaan"], ["Doe alles in een kom."], "Snel herstel na de training.", "Neem het mee in een bakje."),
  RC("Lunch", "Volkoren wrap met hummus, kip en spinazie", "10 min", "1 persoon", ["Volkoren wrap","Hummus","Kipreepjes","Spinazie"], ["Smeer hummus op de wrap.","Leg kip en spinazie erop.","Rol op."], "Een complete lunch.", "Snijd hem doormidden."),
  RC("Avondeten", "Kip met rijst en doperwten", "25 min", "3 personen", ["Kipfilet","Rijst","Doperwten"], ["Kook de rijst met de doperwten.","Bak de kip.","Serveer samen."], "Simpel en vol energie.", "Een beetje sojasaus erbij."),
  RC("Avondeten", "Zalmpakketjes uit de oven", "30 min", "2 personen", ["Zalm","Courgette en paprika","Citroen","Aardappels"], ["Leg zalm en groente op bakpapier.","Vouw het dicht en bak 20 minuten op 200 graden.","Eet met gekookte aardappels."], "Gezond en zonder afwas.", "Vraag hulp bij de oven."),
  RC("Snacks", "Komkommer-sandwiches", "5 min", "1 persoon", ["Komkommer","Hüttenkäse","Plakjes kip"], ["Snijd dikke plakken komkommer.","Leg hüttenkäse en kip ertussen."], "Een frisse snack zonder brood.", "Leuk om te maken."),
  RC("Zoet & gezond", "Havermout-chocoladekoekjes met banaan", "20 min", "10 koekjes", ["2 rijpe bananen","Havermout","Theelepel cacao","Paar stukjes pure chocola"], ["Verwarm de oven op 180 graden.","Meng alles.","Bak 15 minuten."], "Een chocoladekoekje met veel minder suiker.", "Gebruik maar een klein beetje chocola."),
  RC("Zoet & gezond", "Frozen yoghurt met bessen", "5 min", "2 personen", ["Bevroren bessen","Griekse yoghurt","Beetje honing"], ["Mix alles kort in de blender.","Eet meteen als zacht ijs."], "IJs met eiwitten en weinig suiker.", "Hoe kouder de bessen, hoe dikker."),
  RC("Zoet & gezond", "Appel-crumble met havermout", "35 min", "4 personen", ["3 appels","Kaneel","Havermout","Beetje boter of kokosolie","Handje noten"], ["Snijd de appels en leg ze in een ovenschaal met kaneel.","Strooi havermout, noten en een klein beetje boter erover.","Bak 25 minuten op 180 graden."], "Een warm toetje vol fruit.", "Lekker met yoghurt."),
  RC("Zoet & gezond", "Bananen-ijs met aardbeien", "5 min", "2 personen", ["3 bevroren bananen","Handje bevroren aardbeien"], ["Mix tot romig ijs."], "Roze ijs van alleen fruit.", "Eet het meteen."),
  RC("Zoet & gezond", "Havermout-repen met dadels", "30 min", "8 repen", ["Havermout","Dadels","Noten","Banaan"], ["Mix dadels en banaan.","Meng met havermout en noten.","Druk plat en bak 20 minuten op 180 graden."], "Een gezonde reep voor in je tas.", "Snijd hem als hij koud is."),
  RC("Zoet & gezond", "Ricotta met honing en fruit", "3 min", "1 persoon", ["Ricotta of kwark","Theelepel honing","Fruit"], ["Doe ricotta in een kom.","Honing en fruit erop."], "Een romig toetje met eiwitten.", "Ook lekker met perzik."),
  RC("Zoet & gezond", "Kokos-ijslolly's met mango", "10 min + vriezer", "6 ijsjes", ["Mango","Kokosmelk light","Beetje limoen"], ["Mix alles.","Giet in vormpjes.","Vries 4 uur in."], "Tropisch ijs met weinig suiker.", "Ook lekker met ananas."),
  RC("Zoet & gezond", "Wentelteefjes met kaneel en fruit", "15 min", "2 personen", ["Volkoren brood","2 eieren","Melk","Kaneel","Fruit"], ["Week het brood in ei, melk en kaneel.","Bak in een beetje olie.","Eet met fruit."], "Zoet zonder suiker.", "Een feestelijk ontbijt.")
);

// ---------- Routines ----------
ROUTINES.push(
  RW("Avond", "Avond met een boek", "Een rustige avond", [["19:30","Huiswerk klaar en tas ingepakt",""],["20:00","Douchen",""],["20:20","Schermen weg",""],["20:30","Lezen in het boek van de dag","Of een ander boek."],["21:00","Licht uit",""]], "Lezen voor het slapen helpt je rustig worden.", {extra:["Glas water naast je bed","Kleren klaarleggen","Ademhaling in bed"]}),
  RW("Ochtend", "Ochtend voor een toernooi in de vakantie", "Als je een toernooi hebt", [["Vroeg","Opstaan en water",""],["Daarna","Goed ontbijt",""],["Daarna","Tas met extra eten en drinken",""],["Vertrek","Kussen en muziek mee voor onderweg",""]], "Een goede start voor een lange dag.", {wedstrijd:true, extra:["Zonnebrand","Petje","Extra sokken"]})
);

// ---------- 15-dagen-challenges ----------
UITDAGINGEN15.push(
  U15("lezen15", "📖", "15 dagen lezen", "Elke dag een stukje lezen.",
    (n, r) => "Lees vandaag " + r(10 + n / 2) + " minuten in een boek."),
  U15("zoet", "🍪", "15 dagen gezond snoepen", "Gezonde traktaties in plaats van snoep.",
    (n, r) => "Kies vandaag een snack uit Zoet & gezond in plaats van snoep" + (n % 5 === 0 ? ", en maak er zelf één." : ".")),
  U15("analyse15", "🎥", "15 dagen spelers analyseren", "Leer van een prof op jouw positie.",
    (n, r) => "Kijk " + r(5 + n / 3) + " minuten naar een speler bij Posities en schrijf één ding op dat je wilt overnemen.")
);

// ---------- Hersteltips ----------
RECOVERY_TIPS.push(
  RT("Een gezonde traktatie na de wedstrijd", "Na een wedstrijd mag je iets lekkers, liefst gezond.", "Kies een recept uit Zoet & gezond."),
  RT("Lezen als herstel", "Rustig lezen helpt je hoofd herstellen.", "Lees 15 minuten op je rustdag."),
  RT("Herstel met vrienden", "Lachen en ontspannen helpt je lichaam ook.", "Doe iets leuks op je rustdag."),
  RT("Timer voor je herstel", "Een timer helpt om echt rust te nemen.", "Zet de timer op 15 minuten en ga liggen met je benen omhoog.")
);

// ---------- Opruimen ----------
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = typeof x === "string" ? x : Array.isArray(x) ? x[0] : x[key] || x.title || x.id || x.titel; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [DRILLS, IQ_LESSONS, DAILY_LESSONS, TEGENSLAG, FOCUS_TIPS, LEIDER, EXCUSES, MOTIVATION, ANALYSE_TIPS, WEDSTRIJDEN, PREVENTIE, RECEPTEN, ROUTINES, RECOVERY_TIPS, BOEKEN].forEach(a => dedupe(a));
  dedupe(UITDAGINGEN15, "id"); dedupe(SPELERS, "name");
})();
